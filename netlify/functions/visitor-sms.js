// Netlify Function for SMS notifications when someone visits portfolio
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse visitor data
    const visitorData = JSON.parse(event.body);
    
    // TextLocal API configuration
    const TEXTLOCAL_API_KEY = process.env.TEXTLOCAL_API_KEY; // You'll need to set this in Netlify
    const PHONE_NUMBER = '919414966535'; // Your phone number
    
    if (!TEXTLOCAL_API_KEY) {
      console.log('TextLocal API key not configured');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'SMS service not configured' })
      };
    }

    // Create SMS message
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const smsMessage = `🚨 Portfolio Visit Alert!
Time: ${timestamp}
Device: ${visitorData.isMobile ? 'Mobile' : 'Desktop'}
Browser: ${visitorData.browser}
Location: ${visitorData.country || 'Unknown'}
Referrer: ${visitorData.referrer}
Check email for full details!`;

    // Send SMS using TextLocal API
    const fetch = require('node-fetch');
    const params = new URLSearchParams();
    params.append('apikey', TEXTLOCAL_API_KEY);
    params.append('numbers', PHONE_NUMBER);
    params.append('message', smsMessage);
    params.append('sender', 'PORTFOLIO'); // 6 characters max

    const response = await fetch('https://api.textlocal.in/send/', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    const result = await response.json();
    
    if (result.status === 'success') {
      console.log('SMS sent successfully:', result);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          success: true, 
          message: 'SMS notification sent successfully',
          smsId: result.messages[0].id
        })
      };
    } else {
      console.error('TextLocal API error:', result);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          success: false, 
          error: result.errors || 'SMS sending failed' 
        })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      })
    };
  }
};
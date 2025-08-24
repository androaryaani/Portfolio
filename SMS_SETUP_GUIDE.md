# 📱 SMS Notification Setup Guide for Portfolio

## Overview
This guide will help you set up **real SMS notifications** to your phone (+91-9414966535) whenever someone visits your portfolio using **TextLocal API** and **Netlify Functions**.

## 🚀 Step-by-Step Setup

### Step 1: Get TextLocal API Key (FREE)

1. **Visit TextLocal**: Go to https://www.textlocal.in/
2. **Sign Up**: Create a free account
3. **Verify Phone**: Verify your phone number (+91-9414966535)
4. **Get API Key**: 
   - Go to Settings → API Keys
   - Copy your API key (looks like: `NzQxNDc2NDY3MzY5NmE2ODZjNmY3NzZjNmY3Nw==`)
5. **Free Credits**: You get 10 free SMS credits to test

### Step 2: Configure Netlify Environment Variables

1. **Deploy to Netlify**: Push your code to GitHub and deploy to Netlify
2. **Go to Netlify Dashboard**: Open your site settings
3. **Environment Variables**: 
   - Go to Site Settings → Environment Variables
   - Add new variable:
     - **Key**: `TEXTLOCAL_API_KEY`
     - **Value**: Your TextLocal API key from Step 1
4. **Redeploy**: Trigger a new deployment

### Step 3: Test the SMS System

1. **Visit Your Portfolio**: Open your deployed portfolio in a new browser/incognito
2. **Wait 3 seconds**: The system will automatically detect the visit
3. **Check Your Phone**: You should receive an SMS like:
   ```
   🚨 Portfolio Visit Alert!
   Time: 24/08/2025, 11:30
   Device: Desktop
   Browser: Chrome
   Location: India
   Referrer: Direct visit
   Check email for full details!
   ```

## 📋 Files Created

### 1. Netlify Function (`netlify/functions/visitor-sms.js`)
- Handles SMS sending via TextLocal API
- Processes visitor data
- Sends formatted SMS to your phone

### 2. Package Dependencies (`netlify/functions/package.json`)
- Required for Netlify function to work
- Includes node-fetch for API calls

### 3. Updated Contact Component
- Enhanced visitor tracking
- Calls Netlify function for SMS
- Maintains email notifications

## 🔧 How It Works

```
Visitor opens portfolio
        ↓
JavaScript collects visitor info
        ↓
Sends data to Netlify Function
        ↓
Function calls TextLocal API
        ↓
SMS sent to +91-9414966535
        ↓
You get instant notification!
```

## 💰 Cost Breakdown

- **TextLocal Free Tier**: 10 SMS free
- **After Free Tier**: ₹0.25 per SMS (very cheap!)
- **Netlify Functions**: 125,000 requests/month free
- **Total Monthly Cost**: Almost FREE for normal usage

## 🛠️ Troubleshooting

### SMS Not Received?
1. Check TextLocal dashboard for delivery status
2. Verify API key in Netlify environment variables
3. Check Netlify function logs for errors
4. Ensure phone number format is correct (919414966535)

### Function Not Working?
1. Check Netlify function logs
2. Verify environment variable is set
3. Redeploy after adding environment variables
4. Test function URL directly: `your-site.netlify.app/.netlify/functions/visitor-sms`

## 📊 Visitor Information Collected

Each SMS includes:
- ⏰ **Timestamp**: India time
- 📱 **Device Type**: Mobile/Desktop
- 🌐 **Browser**: Chrome, Firefox, Safari, etc.
- 🌍 **Location**: Country (India)
- 🔗 **Referrer**: Where visitor came from
- 📧 **Email**: Detailed info sent to email

## 🔒 Privacy & Security

- ✅ No personal data collected
- ✅ Anonymous visitor tracking only
- ✅ API keys secured in Netlify environment
- ✅ HTTPS encrypted communication
- ✅ Admin control (Ctrl+Shift+A to disable on your devices)

## 🎯 Next Steps After Setup

1. **Deploy to Netlify** with GitHub integration
2. **Add TextLocal API key** to environment variables
3. **Test the system** by visiting your portfolio
4. **Monitor SMS delivery** in TextLocal dashboard
5. **Top up credits** when needed (₹100 = 400 SMS)

## 📞 Support

If you need help:
1. Check TextLocal documentation: https://api.textlocal.in/docs/
2. Netlify Functions guide: https://docs.netlify.com/functions/overview/
3. Test API key with TextLocal's test endpoint first

---

**Status**: ✅ Ready to deploy and test!
**Estimated Setup Time**: 10-15 minutes
**Monthly Cost**: FREE (with free tiers)
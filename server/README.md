# Backend Setup - Contact Form

This directory contains the Node.js + Express backend to handle contact form submissions using Nodemailer and Gmail SMTP.

## Prerequisites
1. **Gmail App Password**: 
   - Go to your Google Account > Security.
   - Enable 2-Step Verification.
   - Search for "App Passwords".
   - Create a new app password (select "Mail" and "Other").
   - Copy the 16-character code.

## Setup Instructions
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Update the `.env` file with your credentials:
   ```env
   EMAIL_USER=abhishek10988266@gmail.com
   EMAIL_PASS=your_16_character_app_password_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   node index.js
   ```

## API Endpoint
- **URL**: `http://localhost:5000/contact`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "message": "Hello message"
  }
  ```

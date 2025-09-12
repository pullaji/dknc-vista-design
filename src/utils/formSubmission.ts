// Utility functions for form submission to Google Sheets

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export const submitToGoogleSheets = async (data: FormData, scriptUrl: string): Promise<boolean> => {
  try {
    // Method 1: Try JSON first
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    // Since we're using no-cors mode, we can't read the response
    // But we can assume success if no error is thrown
    return true;
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    return false;
  }
};

// Alternative method using form data (more reliable)
export const submitToGoogleSheetsFormData = async (data: FormData, scriptUrl: string): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('projectType', data.projectType);
    formData.append('message', data.message);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    return true;
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    return false;
  }
};


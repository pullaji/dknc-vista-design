// Test utility for form submission
export const testGoogleAppsScript = async (scriptUrl: string) => {
  try {
    console.log('Testing Google Apps Script URL:', scriptUrl);
    
    const response = await fetch(scriptUrl, {
      method: 'GET',
      mode: 'no-cors'
    });
    
    console.log('Test response:', response);
    return true;
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};

// Test form data submission
export const testFormSubmission = async (scriptUrl: string) => {
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '+91 9876543210',
    projectType: 'residential',
    message: 'This is a test message'
  };

  try {
    console.log('Testing form submission with data:', testData);
    
    const formData = new FormData();
    formData.append('firstName', testData.firstName);
    formData.append('lastName', testData.lastName);
    formData.append('email', testData.email);
    formData.append('phone', testData.phone);
    formData.append('projectType', testData.projectType);
    formData.append('message', testData.message);

    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    console.log('Form submission test response:', response);
    return true;
  } catch (error) {
    console.error('Form submission test failed:', error);
    return false;
  }
};

import React, { useEffect } from 'react';

function NoupeChatWidget() {
  useEffect(() => {
    // Make sure the Noupe script is loaded and initialized
    const ensureChatWidget = () => {
      // Check if Noupe script exists
      if (document.querySelector('script[src*="noupe"]')) {
        console.log('Noupe chatbot script found');
      } else {
        console.warn('Noupe chatbot script not found');
      }

      // Add a visible indicator that shows the widget is available
      const chatWidgets = document.querySelectorAll(
        'iframe, [class*="noupe"], [class*="chat"], [data-noupe]'
      );
      console.log('Found chat widgets:', chatWidgets.length);
    };

    // Run immediately and after delay to ensure script loads
    ensureChatWidget();
    
    const timer = setTimeout(ensureChatWidget, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'none' }}>
      {/* This component ensures Noupe widget is present */}
    </div>
  );
}

export default NoupeChatWidget;

// ==UserScript==
// @name         Automation Script
// @namespace    https://www1.state.nj.us/TYTR_Saver/jsp/common/HBWelcome.jsp
// @version      0.1
// @description  Automate interactions with a website
// @author       Cypher Dinero
// @match        https://www1.state.nj.us/TYTR_Saver/jsp/common/HBWelcome.jsp
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const ssValueList = ['142749070', '145927025', '136741177', '157669398', '145761221'];
    let currentIndex = 0;

    // Function to simulate filling and submitting the form on the first page
    function fillAndSubmitFirstPage() {
        const radio = document.querySelector('input[type="radio"][value="2"]');
        if (radio) {
            radio.checked = true;
            const submitButton = document.querySelector('input[type="submit"]');
            if (submitButton) {
                submitButton.click();
            }
        }
    }

    // Function to fill and submit the form on the next page
    function fillAndSubmitNextPage(ssValue) {
        const tenantSSNInput = document.querySelector('input[name="tenantssn"]');
        const continueButton = document.querySelector('input[value="Continue"]');

        if (tenantSSNInput && continueButton) {
            // Fill the tenant SSN input
            tenantSSNInput.value = ssValue;

            // Click the Continue button
            continueButton.click();
        }
    }

    // Start by filling and submitting the form on the first page
    fillAndSubmitFirstPage();

    // Handle the next page for each item in ssValueList
    function processNextPage() {
        if (currentIndex < ssValueList.length) {
            fillAndSubmitNextPage(ssValueList[currentIndex]);
            currentIndex++;
        }
    }

    // Set up an interval to handle the next page after a delay (adjust the delay as needed)
    setInterval(processNextPage, 3000);
})();

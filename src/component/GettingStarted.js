import React from 'react'
import "../css/GettingStarted.css"
import Question from './Question';

const GettingStarted = () => {

    return (
        <div id="gettingstarted" className='gettingstarted'>
            <h2>Getting Started</h2>
            <div className='gettingstarted-1'>
                <Question question="How can I reach customer support?" answer="For assistance, feel free to reach out to our customer support team at support@example.com or give us a call at +1 123-456-7890." />
                <Question question="How To Contact Riders With Emergency?" answer="To contact riders in an emergency, use the platform's in-app emergency feature or call/message them directly. If necessary, contact the platform's customer support for assistance." />
                <Question question="App Installation Failed,How to Update System Information?" answer="Update your device's operating system, free up storage space, clear app cache, ensure a stable internet connection, restart your device, and contact app support for assistance. If issues persist, uninstall and reinstall the app." />
                <Question question="New Update Fixed All Bugs and Issues" answer="Great news! The new update has successfully resolved all bugs and issues. Enjoy the improved and bug-free experience with the latest version." />

            </div>
        </div>
    )
}

export default GettingStarted
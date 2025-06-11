import{j as e,f as u,P as n,n as t,R as w,a as l,i as h,b as f}from"../chunks/chunk-CWR1XEZR.js";import{l as d,m as p,a}from"../chunks/chunk-BC1_CxMP.js";/* empty css                      */const m=void 0,v=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],b=void 0,k=[],y=[],j=r=>e.jsxs(u,{className:"w-body",children:[e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(n,{code:`<style>
  :root {
    /* Variables for vavez-link */
    --vavez-link-color: white;
    --vavez-link-hover-weight: 800;
    --vavez-link-normal-weight: 200;
    --vavez-link-dimmed-weight: 100;
    --vavez-link-opacity: 1;
    --vavez-link-dimmed-opacity: 0.7;

    /* Variables for werk-link */
    --werk-link-color: black;
    --werk-link-hover-weight: 800;
    --werk-link-normal-weight: 200;
    --werk-link-dimmed-weight: 100;
    --werk-link-opacity: 1;
    --werk-link-dimmed-opacity: 0.7;
  }

  /* vavez-link styles */
  .vavez-link {
    color: var(--vavez-link-color);
    font-weight: var(--vavez-link-normal-weight);
    opacity: var(--vavez-link-opacity);
    transition: font-weight 0.3s, opacity 0.3s;
  }

  .vavez-link:hover {
    font-weight: var(--vavez-link-hover-weight);
    opacity: var(--vavez-link-opacity);
  }

  .vavez-link-container:hover .vavez-link:not(:hover) {
    font-weight: var(--vavez-link-dimmed-weight);
    opacity: var(--vavez-link-dimmed-opacity);
  }

  /* werk-link styles */
  .werk-link {
    color: var(--werk-link-color);
    font-weight: var(--werk-link-normal-weight);
    opacity: var(--werk-link-opacity);
    transition: font-weight 0.3s, opacity 0.3s;
  }

  .werk-link:hover {
    font-weight: var(--werk-link-hover-weight);
    opacity: var(--werk-link-opacity);
  }

  .werk-link-container:hover .werk-link:not(:hover) {
    font-weight: var(--werk-link-dimmed-weight);
    opacity: var(--werk-link-dimmed-opacity);
  }
</style>
`,className:"w-html-embed"}),e.jsx(t,{className:"w-box"}),e.jsx(t,{className:"w-box c1xay5p5 ce8egnp cax1192 c7eolnj cxn0je3 c1rqao95 c57aytk cmn2p15 c31926d c1tky79e c1j061gu csxvigj cx91v43",children:e.jsx(t,{className:"w-box c18odeqx c1iaf89g c1mqg3ts ccokpev c1yuuo7m c1t7tzaj cem517v cfsp0ag c17sbdvv c1tky79e c1xay5p5 cjypgxe cax1192 cnbf1cq cth0o8e ",children:e.jsx(n,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Switch</title>
    <style>
        /* Switch Container */
        .switch {
            --line: #505162; /* Line color */
            --circle-fill-light: #505162; /* Darker fill for circle in light mode */
            --circle-fill-dark: #1F1F1F; /* Dark fill for circle in dark mode */
            --circle-stroke-light: #F7F8FF; /* Light stroke for circle in light mode */
            --circle-stroke-dark: #F7F8FF; /* White stroke for circle in dark mode */
            --duration: 0.4s; /* Animation duration */
            cursor: pointer;
            display: inline-block;
        }

        .switch input {
            display: none; /* Hide the actual checkbox */
        }

        /* The capsule (track) */
        .switch input + div {
            position: relative;
            width: 56px; /* Length of the switch */
            height: 24px; /* Height to fit the circle */
            background-color: transparent; /* No background, set in Webstudio */
            border-radius: 12px; /* Rounded capsule */
            transition: background-color var(--duration) ease;
        }

        /* Thin line inside the capsule */
        .switch input + div::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 4px; /* Thin line height */
            background-color: var(--line); /* Line color */
            border-radius: 2px; /* Round the ends of the line */
            transform: translateY(-50%);
        }

        /* Circle (dot) */
        .switch input + div::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 24px;
            height: 24px;
            background-color: var(--circle-fill-light); /* Start with dark fill in light mode */
            border-radius: 50%;
            box-shadow: inset 0 0 0 6px var(--circle-stroke-light); /* Light stroke for light mode */
            transform: translate(0, -50%);
            transition: 
                transform var(--duration) ease,
                box-shadow var(--duration) ease, 
                background-color var(--duration) ease;
        }

        /* Inward-growing effect in dark mode */
        .switch input:checked + div::after {
            transform: translateX(32px) translateY(-50%); /* Slide the circle to the right */
            background-color: var(--circle-fill-dark); /* Dark fill for the circle */
            box-shadow: inset 0 0 0 12px var(--circle-stroke-dark); /* Inward-growing white stroke in dark mode */
        }

        /* Dark mode body background change */
        body.dark-mode {
            background-color: #262730; /* Dark background */
            color: white;
            transition: background-color var(--duration), color var(--duration);
        }
    </style>


    <div class="toggle-box">
        <label class="switch">
            <input type="checkbox" id="modeSwitch">
            <div></div>
        </label>
    </div>

    <script>
        // Function to apply dark or light mode
        function applyMode(mode) {
            if (mode === 'dark') {
                document.body.classList.add('dark-mode');
                document.getElementById('modeSwitch').checked = true;
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('modeSwitch').checked = false;
            }
        }

        // On page load, check for stored mode
        document.addEventListener('DOMContentLoaded', function () {
            const storedMode = localStorage.getItem('mode') || 'light';
            applyMode(storedMode);
        });

        // Event listener for the toggle switch
        document.getElementById('modeSwitch').addEventListener('change', function () {
            const mode = this.checked ? 'dark' : 'light';
            localStorage.setItem('mode', mode);
            applyMode(mode);
        });
    <\/script>


`,className:"w-html-embed cig9sn3 c14crm3v c2rt9ue"})})})]})}),e.jsx(t,{className:"w-box ce8egnp cpy02ko c1xay5p5 c11rvx63 c1swrhdm cvur3n1 cxfvk94",children:e.jsx(t,{className:"w-box ce8egnp c1xay5p5 c1tky79e c11rvx63 cxp4r09",children:e.jsx(t,{className:"w-box c18odeqx c1tky79e c1bji792 c1xay5p5 c18vmws9 c193krdb c1jemft8 crq04wq",children:e.jsx(n,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Contact Form</title>
    <style>
        /* Reset default styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            color: #333;
        }

        /* Form Container (responsive to parent box) */
        .form-container {
            width: 100%; /* Full width of the parent container */
            padding: 30px; /* Padding inside the form */
            background-color: white;
            border-radius: 12px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
            box-sizing: border-box; /* Ensure padding doesn't overflow */
            transition: all 0.3s ease;
        }

        /* Input Fields and Textarea */
        .form-container input,
        .form-container textarea {
            width: 100%; /* Full width within the container */
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            background-color: #fafafa;
            transition: border-color 0.3s ease;
        }

        .form-container input:focus,
        .form-container textarea:focus {
            border-color: #4CAF50;
            outline: none;
        }

        /* Textarea that grows dynamically up to a max height of 600px */
        .form-container textarea {
            resize: none; /* Disable manual resize */
            min-height: 150px;
            max-height: 600px; /* Maximum height */
            overflow-y: auto; /* Scroll if content exceeds max height */
        }

        /* Submit Button */
        .form-container button {
            width: 100%; /* Full width */
            padding: 15px;
            background-color: #4CAF50;
            color: white;
            font-size: 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .form-container button:hover {
            background-color: #43a047;
            transform: translateY(-2px); /* Slight lift effect */
        }

        /* Form Title */
        .form-container h2 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
        }

        /* Subtext under title */
        .form-container p {
            text-align: center;
            font-size: 14px;
            color: #666; /* Lighter text color for subtext */
            margin-bottom: 20px;
        }

        /* Dialog styles for Radix Pop-up */
        #dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        .dialog-content {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 400px;
            text-align: center;
            z-index: 1001;
        }

        .dialog-content h3 {
            margin-bottom: 15px;
        }

        .dialog-close {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        /* Hide dialog by default */
        #dialog {
            display: none;
        }

        /* Responsive Design */
        @media (max-width: 500px) {
            .form-container {
                padding: 20px;
            }

            .form-container h2 {
                font-size: 20px;
            }
        }
    </style>



    <div class="form-container">
        <h2>Contact Me</h2>
        <p>I would love to hear from you. Please drop a message below!</p> <!-- Subtext under the title -->
        
        <!-- Contact Form -->
        <form id="contactForm">
            <input type="email" id="email" name="from_email" placeholder="Your Email" required="">
            <textarea id="message" name="message" placeholder="Your Message" required=""></textarea>
            <button type="submit">Send</button>
        </form>
    </div>

    <!-- Radix Dialog for Success Notification -->
    <div id="dialog">
        <div class="dialog-content">
            <h3>Email Sent Successfully!</h3>
            <p>Your message has been delivered.</p>
            <button id="close-dialog" class="dialog-close">Close</button>
        </div>
    </div>

    <!-- Include EmailJS SDK -->
    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"><\/script>
    <script type="text/javascript">
        // Initialize EmailJS with your public key
        (function(){
            emailjs.init("8oSxpL8y20tkCFPJ7"); // Replace with your EmailJS public key
        })();

        // Form submission event handler
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            console.log("Form submission triggered");

            // Send the email using EmailJS
            emailjs.sendForm('service_qpiub0j', 'template_v7tbh2c', this)
                .then(function(response) {
                    console.log("SUCCESS: ", response.status, response.text); // Log success details
                    // Show Radix Dialog Pop-Up
                    document.getElementById('dialog').style.display = 'flex';
                    // Clear form fields after successful submission
                    document.getElementById('contactForm').reset();
                }, function(error) {
                    console.error("ERROR: ", error); // Log error details
                    alert('Oh no! Failed to send the message, please try again later.');
                });
        });

        // Close Radix Pop-Up Dialog when clicking close button
        document.getElementById('close-dialog').addEventListener('click', function() {
            document.getElementById('dialog').style.display = 'none';
        });
    <\/script>



`,className:"w-html-embed c1tky79e"})})})}),e.jsxs(t,{className:"w-box c14tjj32 c1o8p33w czvvdgc",children:[e.jsxs(t,{className:"w-box c1oqwypr c1xkavtd ckzqzh6 c1jwx248 c151tlf1 cq568bh c1mwhh2b",children:[e.jsx(t,{className:"w-box cv0o0v0 c5kc0mj c1ipjula ci4jbjx",children:e.jsx(a,{target:"_blank",className:"w-link c17m6rlw cj3iazt",children:e.jsx(t,{className:"w-box c1hj4jcf c1oqwypr cz2efji c1jwx248 ckzqzh6 c1l9dcwp cght4sj cx18aip c1j7apne c1lim4tf c14e5awi c16v1dmf cmpw8m cnjc67t",children:e.jsx(n,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed c1ugzsd2 c1cnb8rx c16v1dmf cmpw8m "})})})}),e.jsx(t,{className:"w-box cv0o0v0 c5kc0mj c1ipjula ci4jbjx",children:e.jsx(a,{href:"https://discordapp.com/users/ssmacadams",target:"_blank",className:"w-link c17m6rlw cj3iazt",children:e.jsx(t,{className:"w-box c1hj4jcf c1oqwypr cz2efji c1jwx248 ckzqzh6 c1l9dcwp cght4sj cx18aip c1j7apne c1lim4tf c14e5awi c16v1dmf cmpw8m cnjc67t",children:e.jsx(n,{code:`

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg width="24px" height="24px" viewBox="-25.6 -25.6 307.20 307.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">

<rect x="-25.6" y="-25.6" width="307.20" height="307.20" rx="12.288" fill="#ffffff" strokewidth="0"></rect>

</g>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g>

<g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#000000" fill-rule="nonzero"> </path> </g> </g>

</svg>`,className:"w-html-embed c1ugzsd2 c1cnb8rx c16v1dmf cmpw8m c1oqwypr c1ofk090 "})})})}),e.jsx(t,{className:"w-box cv0o0v0 c5kc0mj c1ipjula ci4jbjx",children:e.jsx(a,{target:"_blank",className:"w-link c17m6rlw cj3iazt",children:e.jsx(t,{className:"w-box c1hj4jcf c1oqwypr cz2efji c1jwx248 ckzqzh6 c1l9dcwp cght4sj cx18aip c1j7apne c1lim4tf c14e5awi c16v1dmf cmpw8m cnjc67t",children:e.jsx(n,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path>
  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed c1ugzsd2 c1cnb8rx c16v1dmf cmpw8m "})})})}),e.jsx(t,{className:"w-box cv0o0v0 c5kc0mj c1ipjula ci4jbjx",children:e.jsx(a,{target:"_blank",className:"w-link c17m6rlw cj3iazt",children:e.jsx(t,{className:"w-box c1hj4jcf c1oqwypr cz2efji c1jwx248 ckzqzh6 c1l9dcwp cght4sj cx18aip c1j7apne c1lim4tf c14e5awi c16v1dmf cmpw8m cnjc67t",children:e.jsx(n,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed c1ugzsd2 c1cnb8rx c16v1dmf cmpw8m "})})})})]}),e.jsx(t,{className:"w-box c1oqwypr c1jwx248 ckzqzh6 c1ypnolt crzp9s2 cvz7r2o",children:e.jsx(t,{className:"w-box c17m6rlw c1xkavtd c151tlf1 c1jwx248",children:e.jsx(t,{className:"w-box c1sir0y c1oqwypr c1xkavtd",children:e.jsx(n,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimal Email Copy</title>
    <style>
        body {
            background-color: #f4f4f5;
            font-family: Arial, sans-serif;
        }

        .email-container {
            position: relative;
            padding: 1em 1em 0.5em 1em;
            background-color: #ffffff;
            border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
            font-size: 0.9em;
            color: #333;
            width: 100%;
            max-width: 350px;
            transition: box-shadow 0.2s ease;
        }

        .email-container:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .email-text {
            margin: 0;
            padding-right: 1.5em; /* Extra padding to avoid overlap with icon */
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        /* Copy Icon */
        .icon-copy {
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border-radius: 4px;
            transition: background-color 0.2s ease;
        }

        .icon-copy:hover {
            background-color: #e9ecef;
        }

        .icon-copy svg {
            width: 16px;
            height: 16px;
            fill: #666;
            transition: fill 0.2s ease;
        }

        .icon-copy:hover svg {
            fill: #28a745;
        }

        /* Tooltip for Copy */
        .icon-copy[data-tooltip]:hover:after {
            content: attr(data-tooltip);
            position: absolute;
            background-color: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8em;
            white-space: nowrap;
            top: -35px;
            right: 0;
            transform: translateX(-50%);
        }

        .icon-copy[data-tooltip]:hover:before {
            content: '';
            position: absolute;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #333 transparent;
            top: -10px;
            right: 50%;
            transform: translateX(-50%);
        }

    </style>



<div class="email-container">
    <p id="email" class="email-text">sm@smacadams.com</p>

    <!-- Copy Icon in the upper-right corner -->
    <div class="icon-copy" onclick="copyToClipboard()" data-tooltip="Copy email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z" fill="currentColor"></path>
            <path d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z" fill="currentColor"></path>
        </svg>
    </div>
</div>

<script>
    function copyToClipboard() {
        const email = document.getElementById('email').textContent;
        navigator.clipboard.writeText(email).then(function() {
            alert('Email address copied to clipboard!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }
<\/script>



`,className:"w-html-embed"})})})})]}),e.jsx(d,{children:e.jsx(p,{children:e.jsx(t,{className:"w-box c1xay5p5 cr1urly cbitl6c c11rvx63 cxp4r09 ce8egnp c230o2r c193w0bs c1004hbn",children:e.jsxs(t,{className:"w-box c1xay5p5 cr1urly c11rvx63 cxp4r09 ce8egnp c230o2r",children:[e.jsx(t,{className:"w-box c1tky79e c1xay5p5 c12xwjv crybgvu c11rvx63 cxp4r09 cax1192",children:e.jsx(a,{href:"/",target:"_self",className:"w-link footy-link",children:e.jsx(n,{code:`<!--?xml version="1.0" encoding="utf-8"?-->
<svg fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
</svg>
`,className:"w-html-embed "})})}),e.jsxs(t,{className:"w-box c1xay5p5 crybgvu c11rvx63 cxp4r09 c230o2r c1e6r74n c1awwp61 c1tky79e cq5sz6v cbypioa cvf2eft c113gbh9 ",children:[e.jsx(n,{code:`<style>/* Style for the button */
.menu-btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative; /* Allow positioning */
}

/* Menu content styling */
.menu-popup {
  position: absolute;
  display: none; /* Hidden by default */
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  min-width: 200px;
  z-index: 100; /* Higher z-index to ensure it is on top */
  bottom: 48px; /* Pop up above the button */
  right: 0;
}

.menu-popup a {
  text-decoration: none;
  color: black;
  padding: 8px 10px;
}

.menu-popup a:hover {
  background-color: #f0f0f0;
}

/* Show the menu when triggered */
.menu-popup.show {
  display: flex; /* Make the menu visible */
}
</style>`,className:"w-html-embed"}),e.jsx(n,{code:`<script>// Event listener to toggle the visibility of the menu
document.getElementById('menu-trigger').addEventListener('click', function() {
  const menu = document.getElementById('menu-content');
  if (menu) {
    menu.classList.toggle('show'); // Toggle 'show' class to show/hide the menu
  } else {
    console.error("Menu content not found.");
  }
});
<\/script>`,className:"w-html-embed"}),e.jsx(n,{code:`<!-- SVG Button that triggers the menu -->
<button id="menu-trigger" class="menu-btn">
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12 6.41421L15.2929 9.70711C15.6834 10.0976 16.3166 10.0976 16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289L12.7071 4.29289ZM7.29289 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071C17.0976 15.3166 17.0976 14.6834 16.7071 14.2929C16.3166 13.9024 15.6834 13.9024 15.2929 14.2929L12 17.5858L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071Z" fill="#FFFFFF"></path>
  </svg>
</button>

<!-- Pop-up Menu Content (Hidden by default) -->
<div id="menu-content" class="menu-popup">
  <a href="/uda1">Uda1</a>
  <a href="/coldbrew">Guardian Cold Brew</a>
  <a href="/st00py">St00pid</a>
  <a href="/dusty">Box Beyond the Dust</a>
  <div class="spacer"></div>
  <a href="/36d">36 Days of Type</a>
  <a href="/illustration">Illustration</a>
  <div class="spacer"></div>
  <a href="/shurts">Short Films &amp; Animations</a>
  <a href="/lab">Lab</a>
  <div class="spacer"></div>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>
`,className:"w-html-embed c8urqej cq5sz6v "})]})]})})})})]}),C=({data:r})=>{const{system:o,resources:s,url:c}=r;return e.jsx(w.Provider,{value:{imageLoader:h,assetBaseUrl:l,resources:s,breakpoints:v,onError:console.error},children:e.jsx(j,{system:o},c)})},z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),S=({data:r})=>{const{pageMeta:o}=r,{origin:s}=new URL(r.url);let c=o.socialImageUrl;o.socialImageAssetName&&(c=`${s}${h({src:`${l}/${o.socialImageAssetName}`})}`);const x=o.custom.some(i=>i.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:o.title}),e.jsx("meta",{property:"og:title",content:o.title}),o.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:o.description}),e.jsx("meta",{property:"og:description",content:o.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),m,c&&e.jsx("meta",{property:"og:image",content:o.socialImageUrl}),m,o.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),o.custom.map(({property:i,content:g})=>e.jsx("meta",{property:i,content:g},i)),(o.socialImageAssetName!==void 0||o.socialImageUrl!==void 0)&&x===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),b,k.map(i=>e.jsx("link",{rel:"preload",href:`${l}${i}`,as:"font",crossOrigin:"anonymous"},i)),y.map(i=>e.jsx("link",{rel:"preload",href:`${l}${i}`,as:"image"},i))]})},F=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/contact/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/contact/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}}};export{M as configValuesSerialized};

import{j as e,f as v,P as i,n as t,r as c,s as r,m as n,y as k,R as b,a as d,i as x,b as y}from"../chunks/chunk-CWR1XEZR.js";import{l as h,m as f,a as j}from"../chunks/chunk-BC1_CxMP.js";import{f as s}from"../chunks/chunk-CxNgoGuH.js";/* empty css                      */const p=void 0,_=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],C=void 0,z=[],R=[],N=l=>e.jsxs(v,{className:"w-body cctqyt9 c1eje12n cax1192",children:[e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(i,{code:`<style>
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
`,className:"w-html-embed"}),e.jsx(t,{className:"w-box"}),e.jsx(t,{className:"w-box c1xay5p5 ce8egnp cax1192 c7eolnj cxn0je3 c1rqao95 c57aytk cmn2p15 c31926d c1tky79e c1j061gu csxvigj cx91v43",children:e.jsx(t,{className:"w-box c18odeqx c1iaf89g c1mqg3ts ccokpev c1yuuo7m c1t7tzaj cem517v cfsp0ag c17sbdvv c1tky79e c1xay5p5 cjypgxe cax1192 cnbf1cq cth0o8e ",children:e.jsx(i,{code:`


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


`,className:"w-html-embed cig9sn3 c14crm3v c2rt9ue"})})})]})}),e.jsxs(t,{className:"w-box ce8egnp c1xay5p5 cxfvk94 cbitl6c c11rvx63 c1swrhdm c1tky79e c1dkn6i8 cbmahpf c1vln35a c1tjz606 c1hiws77 csli8nj c1sf3w7 cxm50h8 cde2xl9 c1j9ea2t c1d2h30b",children:[e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 cax1192 cph0zet c1tky79e cad7hno cbitl6c c1dkn6i8 cbmahpf",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1xay5p5 c11rvx63 cxp4r09 c1tky79e c126moj5 cgy836l",children:e.jsxs(c,{url:"https://vimeo.com/566689735",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 cax1192 cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ef78x c1xay5p5 c11rvx63 cxp4r09 c1tky79e c126moj5 cgy836l",children:e.jsxs(c,{url:"https://vimeo.com/683040352",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cz4rxtu ce8egnp c1bji792 cax1192 cph0zet c1tky79e cad7hno cbitl6c c457u7u cxshhpm c1dkn6i8 cbmahpf c1vln35a",children:e.jsxs(t,{className:"w-box chz7fhm cad7hno cmihfdk c1xay5p5 c11rvx63 cb6glp5 c1tky79e cxfvk94 c1r6ltys c1ibito5 cu7ji52 c1o0poez",children:[e.jsxs(c,{url:"https://vimeo.com/783701588",showPreview:!0,loop:!0,showPortrait:!1,showTitle:!0,doNotTrack:!0,className:"w-vimeo c1tky79e c7lqqm7 ce8egnp c1xay5p5 c11rvx63 cxp4r09",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]}),e.jsxs(c,{url:"https://vimeo.com/783702542",showPreview:!0,loop:!0,showPortrait:!1,showTitle:!0,showByline:!1,doNotTrack:!0,className:"w-vimeo c1tky79e c7lqqm7 ce8egnp c1xay5p5 c11rvx63 cxp4r09",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]}),e.jsxs(c,{url:"https://vimeo.com/783702776",showPreview:!0,loop:!0,showPortrait:!1,doNotTrack:!0,showTitle:!0,className:"w-vimeo c1tky79e c7lqqm7 ce8egnp c1xay5p5 c11rvx63 cxp4r09",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})]})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 c1s7ajoo cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1tky79e c126moj5 cgy836l",children:e.jsxs(c,{url:"https://vimeo.com/667431886",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 cv0xtn1 cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ef78x c1tky79e c126moj5 cgy836l",children:e.jsxs(c,{url:"https://vimeo.com/574535600",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 c2vkf6j cph0zet c1tky79e cad7hno",children:e.jsxs(t,{className:"w-box c1xay5p5 cxfvk94 ce8egnp c171utpu",children:[e.jsx(t,{className:"w-box ce8egnp c1xay5p5 c11rvx63 c1swrhdm",children:e.jsx(k,{src:"/assets/colon_bottle_r6Me7GkW4_2JCb_aBBe-6.png",width:480,height:405,className:"w-image c1js22t5 cox59q8"})}),e.jsx(t,{className:"w-box ce8egnp c7lqqm7 c11ef78x c1tky79e c1xay5p5 c11rvx63 cxp4r09 c1o0poez",children:e.jsx(t,{className:"w-box c1xay5p5 cbyyl09 c7lqqm7",children:e.jsxs(c,{url:"https://vimeo.com/1008665603",showPreview:!0,loop:!0,showPortrait:!1,showTitle:!0,className:"w-vimeo c1tky79e c7lqqm7 ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})})]})}),e.jsxs(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 ctsogi7 c12xwjv cph0zet c1tky79e",children:[e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1xay5p5 c11rvx63 cxp4r09 c1uav5dm cz7lhq3 c111sg70",children:e.jsxs(c,{url:"https://vimeo.com/801697688",showPreview:!0,loop:!0,showPortrait:!1,autoplay:!1,doNotTrack:!0,muted:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})}),e.jsx(c,{showPreview:!0,autoplay:!0,backgroundMode:!1,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1009520628",className:"w-vimeo c1uav5dm c12xwjv ce8egnp c1dkn6i8 cbmahpf cf71ajm"})]}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 c1h9tup8 cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1xay5p5 c11rvx63 cxp4r09 c1tky79e c126moj5",children:e.jsxs(c,{url:"https://vimeo.com/537514071",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 c9nde28 cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1xay5p5 c11rvx63 cxp4r09 c1tky79e c126moj5",children:e.jsxs(c,{url:"https://vimeo.com/545550627",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})}),e.jsx(t,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1bji792 cz316qi cph0zet c1tky79e cad7hno",children:e.jsx(t,{className:"w-box c1js22t5 c12xwjv c11ew85q c1xay5p5 c11rvx63 cxp4r09 c1tky79e c126moj5",children:e.jsxs(c,{url:"https://vimeo.com/537351398",showPreview:!0,loop:!0,showPortrait:!1,className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:[e.jsx(r,{alt:"Vimeo video preview image",sizes:"100vw",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cr7st5l cmlj438 ccumbpa c1ywez87 cc9lygw"}),e.jsx(n,{className:"w-spinner c1uav5dm cuc1h0w cqu9e2u c1kxzu5 c1a85i8k cw08xvh c5sb82d",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" id="e2CRglijn891" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 128 128" fill="currentColor" width="100%" height="100%" style="display: block;"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id="e2CRglijn892_tr" transform="translate(64,64) rotate(90)"><circle id="e2CRglijn892" r="42" fill="none" stroke="#39fbbb" stroke-dasharray="263.89" stroke-dashoffset="251.89" stroke-linecap="round" stroke-width="16" transform="scale(-1,1) translate(0,0)"/></g></svg>',className:"w-html-embed"})}),e.jsx(s,{"aria-label":"Play button",className:"w-play-button c1uav5dm ccipaq3 colvqyc cuc1h0w cqu9e2u clf71oc c17dsm76 c1xay5p5 c11rvx63 cxp4r09 cofgdsp cixrk7h c1gnc6r c1fptxs3 ct5zso3 cucut57 caog4vy crj4mxk c19qt9lt cu83gxy c1ugzsd2 c12f85ea",children:e.jsx(t,{"aria-hidden":"true",className:"w-box c1xsoqk6 c102lg4s",children:e.jsx(i,{code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path d="M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z"/></svg>',className:"w-html-embed"})})})]})})})]}),e.jsx(h,{children:e.jsx(f,{children:e.jsx(t,{className:"w-box c1xay5p5 cr1urly cbitl6c c11rvx63 cxp4r09 ce8egnp c230o2r c193w0bs c1004hbn",children:e.jsxs(t,{className:"w-box c1xay5p5 cr1urly c11rvx63 cxp4r09 ce8egnp c230o2r",children:[e.jsx(t,{className:"w-box c1tky79e c1xay5p5 c12xwjv crybgvu c11rvx63 cxp4r09 cax1192",children:e.jsx(j,{href:"/",target:"_self",className:"w-link footy-link",children:e.jsx(i,{code:`<!--?xml version="1.0" encoding="utf-8"?-->
<svg fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
</svg>
`,className:"w-html-embed "})})}),e.jsxs(t,{className:"w-box c1xay5p5 crybgvu c11rvx63 cxp4r09 c230o2r c1e6r74n c1awwp61 c1tky79e cq5sz6v cbypioa cvf2eft c113gbh9 ",children:[e.jsx(i,{code:`<style>/* Style for the button */
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
</style>`,className:"w-html-embed"}),e.jsx(i,{code:`<script>// Event listener to toggle the visibility of the menu
document.getElementById('menu-trigger').addEventListener('click', function() {
  const menu = document.getElementById('menu-content');
  if (menu) {
    menu.classList.toggle('show'); // Toggle 'show' class to show/hide the menu
  } else {
    console.error("Menu content not found.");
  }
});
<\/script>`,className:"w-html-embed"}),e.jsx(i,{code:`<!-- SVG Button that triggers the menu -->
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
`,className:"w-html-embed c8urqej cq5sz6v "})]})]})})})})]}),q=({data:l})=>{const{system:a,resources:g,url:m}=l;return e.jsx(b.Provider,{value:{imageLoader:x,assetBaseUrl:d,resources:g,breakpoints:_,onError:console.error},children:e.jsx(N,{system:a},m)})},P=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),B=({data:l})=>{const{pageMeta:a}=l,{origin:g}=new URL(l.url);let m=a.socialImageUrl;a.socialImageAssetName&&(m=`${g}${x({src:`${d}/${a.socialImageAssetName}`})}`);const u=a.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[l.url&&e.jsx("meta",{property:"og:url",content:l.url}),e.jsx("title",{children:a.title}),e.jsx("meta",{property:"og:title",content:a.title}),a.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:a.description}),e.jsx("meta",{property:"og:description",content:a.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),p,m&&e.jsx("meta",{property:"og:image",content:a.socialImageUrl}),p,a.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),a.custom.map(({property:o,content:w})=>e.jsx("meta",{property:o,content:w},o)),(a.socialImageAssetName!==void 0||a.socialImageUrl!==void 0)&&u===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),C,z.map(o=>e.jsx("link",{rel:"preload",href:`${d}${o}`,as:"font",crossOrigin:"anonymous"},o)),R.map(o=>e.jsx("link",{rel:"preload",href:`${d}${o}`,as:"image"},o))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:B},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shurts/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:P}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/shurts/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{M as configValuesSerialized};

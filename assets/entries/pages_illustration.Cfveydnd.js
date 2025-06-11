import{j as e,f as y,P as i,n as c,y as a,c as v,r as o,s as n,R as k,a as d,i as g,b as f}from"../chunks/chunk-CWR1XEZR.js";import{l as m,m as h,a as b}from"../chunks/chunk-BC1_CxMP.js";/* empty css                      */const x=void 0,j=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],z=void 0,N=[],q=[],_=r=>e.jsxs(y,{className:"w-body cax1192",children:[e.jsx(m,{children:e.jsxs(h,{children:[e.jsx(i,{code:`<style>
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
`,className:"w-html-embed"}),e.jsx(c,{className:"w-box"}),e.jsx(c,{className:"w-box c1xay5p5 ce8egnp cax1192 c7eolnj cxn0je3 c1rqao95 c57aytk cmn2p15 c31926d c1tky79e c1j061gu csxvigj cx91v43",children:e.jsx(c,{className:"w-box c18odeqx c1iaf89g c1mqg3ts ccokpev c1yuuo7m c1t7tzaj cem517v cfsp0ag c17sbdvv c1tky79e c1xay5p5 cjypgxe cax1192 cnbf1cq cth0o8e ",children:e.jsx(i,{code:`


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


`,className:"w-html-embed cig9sn3 c14crm3v c2rt9ue"})})})]})}),e.jsxs(c,{className:"w-box c1xay5p5 c11rvx63 c1swrhdm ce8egnp c1dkn6i8 cbmahpf cxfvk94 cbitl6c c5iack4 c1ut1f3b csli8nj c1tky79e c18g22r3 cpctajy",children:[e.jsxs(c,{className:"w-box c1xay5p5 cxfvk94 c11rvx63 c1swrhdm cbitl6c ce8egnp c1tky79e c7pg0w6 ck8m4xb c1dkn6i8 cbmahpf",children:[e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 cbx8yk6 cam9aq0 c1fff15u cpyk6kb carhojz c1u241ks cy1q9zd c1lfsi3m c1tky79e ce8egnp c1dkn6i8 cbmahpf c1xhm7o3",children:e.jsx(a,{src:"/assets/rules_silver_optimized_QYz4sPcC4cFFEfzKGZRDj.gif",width:1920,height:1080,className:"w-image ce8egnp c7lqqm7 c1dkn6i8 cbmahpf c1xay5p5 c11rvx63 cxp4r09 c1tky79e"})}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 c1dkn6i8 cbmahpf carhojz c1u241ks cy1q9zd c1lfsi3m cbx8yk6 cam9aq0 c1fff15u cpyk6kb c1tky79e ce8egnp c1xhm7o3",children:e.jsx(a,{src:"/assets/rules_rusty_optimized_v21Qp-Jzq1vZfa0B6nY5k.gif",width:1920,height:1080,className:"w-image ce8egnp c7lqqm7 c1dkn6i8 cbmahpf c1tky79e c1xay5p5 c11rvx63 cxp4r09"})})]}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp cbitl6c c1dkn6i8 cbmahpf c1tky79e",children:e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 c1qh34ez c1ich7t6 c1rxwhj6",children:e.jsx(a,{src:"/assets/sal_moon_50percent_fix_compress_RtcIAFQSMZ3rf1n_XN9Lc.jpg",width:2550,height:3300,className:"w-image ce8egnp c14a2s7t c11dnzru"})})}),e.jsxs(c,{className:"w-box ce8egnp c1xay5p5 c11rvx63 c1swrhdm cxfvk94 cbitl6c c13v5x3u c18pb7fr c1dkn6i8 cbmahpf c1tky79e ckzqzh6 c1jwx248",children:[e.jsxs(c,{className:"w-box ce8egnp c1tky79e c1xay5p5 c187p5qg c11rvx63 c1swrhdm cr1urly cj3iazt cebfo2j c1jwx248 ckzqzh6",children:[e.jsx(c,{className:"w-box c1xay5p5 cr1urly c18odeqx cf71ajm c1tky79e c11rvx63 c1swrhdm cgrynz c1v3a98n c12xwjv c13bnkjp c1jwx248 ckzqzh6 cj3iazt c3fu479",children:e.jsx(a,{src:"/assets/cantri22_2E2u_Gb0ebDjKHxl8j6G6.svg",width:1080,height:1080,className:"w-image c11ef78x c12xwjv c1xay5p5 ce8egnp c1bji792"})}),e.jsx(c,{className:"w-box c1tky79e c1xay5p5 c11rvx63 cxp4r09 c1w4x33j cad7hno c193w0bs c7q0fva c14dbe66 c1h5lhtr c15lu4ff cf71ajm c13bnkjp c1l9dcwp",children:e.jsx(c,{className:"w-box cbyyl09 c9fl2wi c1xay5p5 c11rvx63 c1swrhdm c1tky79e cph0zet c12frvk cxfaduj c16v1dmf cmpw8m",children:e.jsx(v,{className:"w-text c1xay5p5 ce8egnp cf71ajm c11rvx63 cxp4r09 c1ugzsd2 c1tky79e chkgvke cxfaduj c12frvk clx7ac ckpfney covyd3 cj3iazt c16v1dmf cmpw8m",children:"Collective Arts Network (CAN) is a nonprofit organization serving the visual arts industry in and around Cleveland, providing a public forum for promotion, reporting, and reviews. Its primary projects are the quarterly print magazine CAN Journal, the website CANjournal.org, its blog, and the e-newsletter CAN Weekly. Additional projects include CAN Triennial, a regionally focused, curated art exhibit."})})})]}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 c1swrhdm ce8egnp cad7hno c1dkn6i8 cbmahpf crapwal cgs7qr5 c17x7llo c1qrvmpq cr1urly cbitl6c c1tky79e c7vhdgz cbx8yk6 cam9aq0 c1fff15u cpyk6kb c31djil c1lgdy3n crcti95",children:e.jsx(c,{className:"w-box c1xay5p5 c1js22t5 c1dkn6i8 cbmahpf c1tky79e cbx8yk6 cam9aq0 c1fff15u cpyk6kb crapwal cgs7qr5 c17x7llo c1qrvmpq c12xwjv c1bds6d8 cgy836l",children:e.jsx(o,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563053",quality:"1080p",className:"w-vimeo c1tky79e c12xwjv ce8egnp c1qh34ez cbx8yk6 cam9aq0 c1fff15u cpyk6kb",children:e.jsx(n,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_jose_thumb_Atb0EGqah5DvY8tvCGeCP.png",loading:"lazy",optimize:!0,className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cq68f0s c1nz6ycl co5rclf cixc1j1 cc9lygw cbx8yk6 cam9aq0 c1fff15u cpyk6kb"})})})}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 c1swrhdm ce8egnp cad7hno c1dkn6i8 cbmahpf crapwal cgs7qr5 c17x7llo c1qrvmpq cr1urly c1tky79e cbitl6c ch02pp cbx8yk6 cam9aq0 c1fff15u cpyk6kb c31djil c1lgdy3n cl1wk0 crcti95",children:e.jsx(c,{className:"w-box c1js22t5 c1xay5p5 c1tky79e c1dkn6i8 cbmahpf c12xwjv cbx8yk6 cam9aq0 c1fff15u cpyk6kb crapwal cgs7qr5 c17x7llo c1qrvmpq cmn2p15 cz4rxtu cr1urly cbitl6c c31djil c1lgdy3n c1bds6d8 cgy836l",children:e.jsx(o,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563036",quality:"1080p",className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:e.jsx(n,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_ja_thumb_EGla_M2-5tQsyx1Nj076m.png",loading:"lazy",optimize:!0,className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cq68f0s c1nz6ycl co5rclf cixc1j1 cc9lygw"})})})}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 c1swrhdm ce8egnp cad7hno c1dkn6i8 cbmahpf ckfksk7 cmdqtru c1pthq8x c6gck0r c1tky79e cqwo8it crcti95 c31djil c1lgdy3n",children:e.jsx(c,{className:"w-box c1xay5p5 cmn2p15 cz4rxtu cr1urly cbitl6c c1js22t5 c1dkn6i8 cbmahpf cbx8yk6 cam9aq0 c1fff15u cpyk6kb crapwal cgs7qr5 c17x7llo c1qrvmpq c1tky79e c1rxwhj6 c31djil c1lgdy3n",children:e.jsx(o,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563084",quality:"1080p",className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:e.jsx(n,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_mylesthumb_HXpQqxCsrFBV1jUDjQv4q.png",loading:"lazy",optimize:!0,className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cq68f0s c1nz6ycl co5rclf cixc1j1 cc9lygw"})})})}),e.jsx(c,{className:"w-box c1xay5p5 c11rvx63 cxp4r09 ce8egnp cad7hno c1dkn6i8 cbmahpf ckfksk7 cmdqtru c1pthq8x c6gck0r cr1urly cbitl6c",children:e.jsx(c,{className:"w-box c1xay5p5 cmn2p15 cxp4r09 cxfvk94 cbitl6c cv2uiua c1cz434u c2sgwy8 c12xwjv c1tky79e c1dkn6i8 cbmahpf cbx8yk6 cam9aq0 c1fff15u cpyk6kb crapwal cgs7qr5 c17x7llo c1qrvmpq cyokpu cgy836l",children:e.jsx(o,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563070",quality:"1080p",className:"w-vimeo c1tky79e c12xwjv ce8egnp",children:e.jsx(n,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_mike_thumb_JWUIZwjivMSGbNFHRHKej.png",loading:"lazy",optimize:!0,className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cq68f0s c1nz6ycl co5rclf cixc1j1 cc9lygw"})})})})]}),e.jsxs(c,{className:"w-box ce8egnp c1xay5p5 cxfvk94 cz4rxtu c11rvx63 c1uuz022 c1dkn6i8 cbmahpf c7pg0w6 ck8m4xb c1tky79e",children:[e.jsx(a,{src:"/assets/meow_frank_QoB5dbdf-3rZuSrTxvsJN.png",width:5e3,height:1920,className:"w-image c1xay5p5 ce8egnp c1tky79e"}),e.jsxs(c,{className:"w-box c1xay5p5 c11rvx63 cb6glp5 ce8egnp cxfaduj cr1urly c1dkn6i8 cbmahpf cbitl6c cxjtc0 c1hju3vt c15lu4ff c7pg0w6 ck8m4xb",children:[e.jsx(a,{src:"/assets/meow_thumb_greyfuzz__x1fl3xfh7e3-EapNEAia.png",width:960,height:960,className:"w-image c12xwjv c1uih5g8 c1tky79e"}),e.jsx(a,{src:"/assets/meow_thumb_oilyblack_3UQMrlk8Z_RZxDzW87QQ8.png",width:960,height:960,className:"w-image c12xwjv c1uih5g8 c1tky79e"}),e.jsx(a,{src:"/assets/meow_thumb_orange_tP4Q1zG3-r1hJvLCWtc7o.png",width:960,height:960,className:"w-image c1xay5p5 cr1urly cbitl6c cz4rxtu c1uih5g8 c12xwjv c1tky79e"})]}),e.jsx(a,{src:"/assets/meow_ollie_OjUbv7YvLSxL7e2GlUsij.png",width:5e3,height:1921,className:"w-image ce8egnp c1tky79e"})]}),e.jsxs(c,{className:"w-box c1xay5p5 ce8egnp c1dkn6i8 cbmahpf c11rvx63 cz4rxtu c1tky79e cj2jpro c1q29ob cr1urly cbitl6c c1cpnzbg",children:[e.jsx(a,{src:"/assets/bloods2_compressed_XEDfHoTB0D8BfPEV0x1EB.jpg",width:960,height:540,className:"w-image c1xay5p5 c11rvx63 cxp4r09 ce8egnp chbg414 c1qh34ez cmihfdk"}),e.jsx(a,{src:"/assets/bloods1_compressed_dAdaIQ9NnXS5Pg3sHlaHn.jpg",width:960,height:540,className:"w-image c1xay5p5 c11rvx63 cxp4r09 ce8egnp chbg414 c1qh34ez cmihfdk"})]}),e.jsx(c,{className:"w-box ce8egnp c1xay5p5 c1tky79e c1dkn6i8 cbmahpf c1jwx248 ckzqzh6 c16v1dmf cmpw8m",children:e.jsxs(c,{className:"w-box c1xay5p5 cr1urly c11rvx63 cxp4r09 cy3q6k2 c1cpnzbg cgy836l",children:[e.jsx(c,{className:"w-box c1js22t5 c1xay5p5 c1tky79e c16v1dmf cmpw8m c1o0poez",children:e.jsx(a,{src:"/assets/bloodbook_1compressed_Vh44ZIRw6uPxo80oEXTVX.jpg",width:1632,height:1224,className:"w-image"})}),e.jsx(c,{className:"w-box c1js22t5 c1xay5p5 c11rvx63 cxp4r09 c1tky79e cam2reh cf71ajm c16v1dmf cmpw8m c1o0poez",children:e.jsx(a,{src:"/assets/bloodbook_2compressed_by4mGL5mpr1OmHT7yKDLm.gif",width:720,height:404,className:"w-image c1vcvdm cpvygy ce8egnp c11ew85q c1xay5p5"})})]})}),e.jsx(c,{className:"w-box c1tky79e c1xay5p5 c11rvx63 cxp4r09 ce8egnp c1dkn6i8 cbmahpf",children:e.jsx(c,{className:"w-box c1js22t5 c12xwjv c1tky79e c1dkn6i8 cbmahpf c731i3m cr4tmwh c1hos29s c1r5i8w7 c1xay5p5 c4vbwdr c1ich7t6 c19c755",children:e.jsx(o,{quality:"1080p",showPreview:!0,autoplay:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1009324676",className:"w-vimeo c1tky79e c12xwjv ce8egnp c1xay5p5 cf71ajm",children:e.jsx(n,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/legthumbhqcompressed_wHWQWDVOBj7jXL7BZQKUa.png",optimize:!0,loading:"lazy",className:"w-preview-image c1uav5dm c14dbe66 ce8egnp cf71ajm cq68f0s c1nz6ycl co5rclf cixc1j1 cc9lygw cbx8yk6 cam9aq0 c1fff15u cpyk6kb"})})})}),e.jsxs(c,{className:"w-box c1xay5p5 c1tky79e ce8egnp cr1urly c11rvx63 cz4rxtu ca8cb2t c1dkn6i8 cbmahpf c1uuz022 cebfo2j ccxf57f c1jwx248 c151tlf1 covyd3 c4rhb41 cp1qypz c1f9qw5 c1tlod28",children:[e.jsx(c,{className:"w-box c1uih5g8 c1tluvql c1xay5p5 c11rvx63 cxp4r09 c8urqej c1dkn6i8 cbmahpf c1ypnolt cm2yk3u c1o0poez",children:e.jsx(a,{src:"/assets/rickrudepants_compress_Z0MsaEDXoEcD4UbCxbM7U.jpg",width:1664,height:2048,className:"w-image czfkchn c1mwnv5m cvwpvci cy3q6k2 c1oqwypr"})}),e.jsx(c,{className:"w-box c1uih5g8 c12xwjv c1xay5p5 c11rvx63 cxp4r09 c8urqej c1dkn6i8 cbmahpf c1ypnolt cm2yk3u c16v1dmf cmpw8m cy3q6k2 c1o0poez ccgyfy9 ch7onxi",children:e.jsx(a,{src:"/assets/paulbearer_compress_SqtqgFmwv3CIIuN-Xs6mT.jpg",width:1200,height:1278,className:"w-image ce8egnp cy6x1cx c1xay5p5 cm2yk3u cy3q6k2"})}),e.jsx(c,{className:"w-box c1uih5g8 c1tluvql c1xay5p5 c11rvx63 cxp4r09 c8urqej c1dkn6i8 cbmahpf c1ypnolt cm2yk3u cy3q6k2 c16v1dmf cmpw8m c1o0poez",children:e.jsx(a,{src:"/assets/razorramont_compress_Zis4GLQT4aaJ6nQmXUfEl.jpg",width:1664,height:2048,className:"w-image c1mwnv5m c1oqwypr cy3q6k2"})})]}),e.jsx(c,{className:"w-box ce8egnp c1xay5p5 c1tky79e c1dkn6i8 cbmahpf",children:e.jsx(a,{src:"/assets/v2-worms-1400_NFLowsrQsbzg1IiIl8gNV.jpg",width:1400,height:1102,className:"w-image c1xay5p5 ce8egnp cr7nnit c1dkn6i8 cbmahpf"})}),e.jsxs(c,{className:"w-box ce8egnp c1tky79e cctqyt9",children:[e.jsxs(c,{className:"w-box ce8egnp c1xay5p5 cr1urly cz4rxtu cxshhpm c457u7u",children:[e.jsx(a,{src:"/assets/brewbox1_-pglMxwIBU66sywJjk32s.png",width:600,height:615,className:"w-image c1xay5p5 c1js22t5 cikltyq"}),e.jsx(a,{src:"/assets/brewbox2_0UQHL5zwQ3HIFnUNbsjaw.png",width:600,height:615,className:"w-image c1xay5p5 c1js22t5 cikltyq"})]}),e.jsx(c,{className:"w-box ce8egnp",children:e.jsx(a,{src:"/assets/brewbox3_Xjwijs0zfr05NT5Oin6GF.png",width:1360,height:566,className:"w-image ce8egnp cikltyq"})})]}),e.jsxs(c,{className:"w-box ce8egnp c1xay5p5 cr1urly cbitl6c cz4rxtu c1tky79e cr89fae",children:[e.jsx(a,{src:"/assets/hedgehog_still_jdseRo4mou-lUrqd2jIa9.png",width:960,height:960,className:"w-image c1xay5p5 c2ej3jo c12xwjv c1xekstz"}),e.jsx(a,{src:"/assets/snail_still_Lkt-evijqJaom454h8_CS.png",width:960,height:960,className:"w-image c1xay5p5 c2ej3jo c12xwjv c1xekstz"}),e.jsx(a,{src:"/assets/owl_still_FQ013ea_wqAxWMatYqwBX.png",width:960,height:960,className:"w-image c1xay5p5 c2ej3jo c12xwjv c1xekstz"})]}),e.jsx(c,{className:"w-box c1wo6bto c1tky79e",children:e.jsxs(c,{className:"w-box ce8egnp c1xay5p5 cr1urly cz4rxtu cxshhpm c457u7u c7q0fva c1cpnzbg",children:[e.jsx(a,{src:"/assets/walter700_ez5BPViA8X_PW_KPDEwol.png",width:700,height:700,className:"w-image c1xay5p5 c1js22t5 cikltyq c1o0poez"}),e.jsx(a,{src:"/assets/zoob700_22tOBc8Pf01inW4-aSffC.png",width:700,height:700,className:"w-image c1xay5p5 c1js22t5 cikltyq c1o0poez"})]})})]}),e.jsx(c,{className:"w-box"}),e.jsx(m,{children:e.jsx(h,{children:e.jsx(c,{className:"w-box c1xay5p5 cr1urly cbitl6c c11rvx63 cxp4r09 ce8egnp c230o2r c193w0bs c1004hbn",children:e.jsxs(c,{className:"w-box c1xay5p5 cr1urly c11rvx63 cxp4r09 ce8egnp c230o2r",children:[e.jsx(c,{className:"w-box c1tky79e c1xay5p5 c12xwjv crybgvu c11rvx63 cxp4r09 cax1192",children:e.jsx(b,{href:"/",target:"_self",className:"w-link footy-link",children:e.jsx(i,{code:`<!--?xml version="1.0" encoding="utf-8"?-->
<svg fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
</svg>
`,className:"w-html-embed "})})}),e.jsxs(c,{className:"w-box c1xay5p5 crybgvu c11rvx63 cxp4r09 c230o2r c1e6r74n c1awwp61 c1tky79e cq5sz6v cbypioa cvf2eft c113gbh9 ",children:[e.jsx(i,{code:`<style>/* Style for the button */
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
`,className:"w-html-embed c8urqej cq5sz6v "})]})]})})})})]}),C=({data:r})=>{const{system:t,resources:p,url:l}=r;return e.jsx(k.Provider,{value:{imageLoader:g,assetBaseUrl:d,resources:p,breakpoints:j,onError:console.error},children:e.jsx(_,{system:t},l)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),F=({data:r})=>{const{pageMeta:t}=r,{origin:p}=new URL(r.url);let l=t.socialImageUrl;t.socialImageAssetName&&(l=`${p}${g({src:`${d}/${t.socialImageAssetName}`})}`);const w=t.custom.some(s=>s.property==="twitter:card");return e.jsxs(e.Fragment,{children:[r.url&&e.jsx("meta",{property:"og:url",content:r.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),x,l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),x,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:s,content:u})=>e.jsx("meta",{property:s,content:u},s)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&w===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),z,N.map(s=>e.jsx("link",{rel:"preload",href:`${d}${s}`,as:"font",crossOrigin:"anonymous"},s)),q.map(s=>e.jsx("link",{rel:"preload",href:`${d}${s}`,as:"image"},s))]})},L=Object.freeze(Object.defineProperty({__proto__:null,Head:F},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/illustration/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/illustration/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}}};export{I as configValuesSerialized};

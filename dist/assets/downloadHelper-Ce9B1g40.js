import{A as m}from"./index-C0FdSJEx.js";const v={"image/jpeg":".jpg","image/jpg":".jpg","image/png":".png","image/webp":".webp","image/gif":".gif","image/bmp":".bmp","image/svg+xml":".svg","image/tiff":".tiff","image/heic":".heic","image/heif":".heif","image/avif":".avif","image/x-icon":".ico","application/pdf":".pdf","application/msword":".doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":".docx","application/vnd.ms-excel":".xls","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx","application/vnd.ms-powerpoint":".ppt","application/vnd.openxmlformats-officedocument.presentationml.presentation":".pptx","text/plain":".txt","text/csv":".csv","application/rtf":".rtf","text/rtf":".rtf","application/vnd.oasis.opendocument.text":".odt","application/vnd.oasis.opendocument.spreadsheet":".ods","application/vnd.oasis.opendocument.presentation":".odp"},T=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.txt,.rtf,.odt,.ods,.odp,.png,.jpg,.jpeg,.webp,.bmp,.svg,.tiff,.tif,.heic,.heif,.gif,.avif,.ico",W="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain,text/csv,text/rtf",I=`${T},${W}`;function x(t="",i=""){const e=(t||"").toLowerCase().split("?")[0];return e.endsWith(".jpg")||e.endsWith(".jpeg")||e.endsWith(".png")||e.endsWith(".webp")||e.endsWith(".bmp")||e.endsWith(".svg")||e.endsWith(".gif")||e.endsWith(".tif")||e.endsWith(".tiff")||e.endsWith(".avif")||e.endsWith(".ico")||e.endsWith(".heic")||e.endsWith(".heif")?!0:i.startsWith("image/")}function U(t="",i=""){return(t||"").toLowerCase().split("?")[0].endsWith(".pdf")||i.includes("pdf")}function C(t="",i=""){const e=(t||"").toLowerCase().split("?")[0];return e.endsWith(".txt")||e.endsWith(".csv")||e.endsWith(".rtf")||e.endsWith(".log")||i.startsWith("text/")}function u(t="Image Document",i={}){const e=i?.items?.[0]||{},o=i?.pickupToken||i?.id||"—",n=e?.colorMode==="COLOR"?"Color Output (CMYK)":"Monochrome (B&W Grayscale)",a=e?.paperSize||"A4",r=(t||"Document").replace(/[<>&"]/g,""),s=(r.split(".").pop()||"IMAGE").toUpperCase(),p=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="1200" height="1600">
    <defs>
      <linearGradient id="pcHdr" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4f46e5"/>
        <stop offset="100%" stop-color="#06b6d4"/>
      </linearGradient>
      <linearGradient id="pcCard" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f8fafc"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="1600" fill="#ffffff"/>
    <rect x="40" y="40" width="1120" height="1520" rx="24" fill="url(#pcCard)" stroke="#e2e8f0" stroke-width="4"/>
    
    <!-- Header Banner -->
    <rect x="40" y="40" width="1120" height="150" rx="24" fill="url(#pcHdr)"/>
    <text x="600" y="115" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" text-anchor="middle" letter-spacing="3">PRINT SUPPORT &middot; PREVIEW</text>
    <text x="600" y="155" fill="#e0e7ff" font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle">TOKEN #${o} &middot; ${a} &middot; ${n}</text>
    
    <!-- Central Icon Artwork -->
    <circle cx="600" cy="540" r="160" fill="#eef2ff" stroke="#6366f1" stroke-width="6"/>
    <g transform="translate(500, 440) scale(4)" stroke="#4f46e5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </g>
    
    <!-- Document Title & Badge -->
    <text x="600" y="790" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="800" text-anchor="middle">${r}</text>
    
    <rect x="400" y="830" width="400" height="48" rx="24" fill="#6366f1"/>
    <text x="600" y="862" fill="#ffffff" font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle">${s} &middot; HARDWARE READY</text>
    
    <!-- Specifications Box -->
    <rect x="120" y="930" width="960" height="340" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <text x="180" y="1000" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Pickup Token:</text>
    <text x="560" y="1000" fill="#0f172a" font-family="monospace" font-size="28" font-weight="900">#${o}</text>
    
    <line x1="180" y1="1040" x2="1020" y2="1040" stroke="#f1f5f9" stroke-width="2"/>
    
    <text x="180" y="1100" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Color Specification:</text>
    <text x="560" y="1100" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700">${n}</text>
    
    <line x1="180" y1="1140" x2="1020" y2="1140" stroke="#f1f5f9" stroke-width="2"/>
    
    <text x="180" y="1200" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Paper Stock &amp; Size:</text>
    <text x="560" y="1200" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700">${a} Standard (300 DPI Native)</text>
    
    <!-- Footer -->
    <line x1="120" y1="1440" x2="1080" y2="1440" stroke="#cbd5e1" stroke-width="2"/>
    <text x="600" y="1490" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" text-anchor="middle">&copy; Print Support &middot; Auto Spooler &amp; Native Print Engine</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(p)}`}function k(t){return new Promise(i=>{if(!t)return i("");const e=new FileReader;e.onload=o=>i(o.target.result||""),e.onerror=()=>i(""),e.readAsDataURL(t)})}async function y(t,i="application/octet-stream",e=null){if(!t)return null;if(t.startsWith("data:")){const n=t.split(","),a=n[0].match(/:(.*?);/),r=a?a[1]:i,s=n[0].includes("base64");let p;if(s){const g=atob(n[1]);let c=g.length;for(p=new Uint8Array(c);c--;)p[c]=g.charCodeAt(c)}else p=new TextEncoder().encode(decodeURIComponent(n[1]));const f=new Blob([p],{type:r});return{blobUrl:URL.createObjectURL(f),blob:f,mimeType:r,dataUrl:t}}if(t.startsWith("blob:"))return{blobUrl:t,blob:null,mimeType:i,dataUrl:t};const o=t.startsWith("http://")||t.startsWith("https://")?t:`${m}${t.startsWith("/")?"":"/"}${t}`;try{const n=await fetch(o,{mode:"cors"});if(n.ok){const a=await n.blob();if(a&&a.size>0){const r=await k(a);return{blobUrl:URL.createObjectURL(a),blob:a,mimeType:a.type||i,dataUrl:r||o}}}}catch(n){console.warn("Direct fetch failed, trying proxy download endpoint:",n?.message||n)}try{const n=`${m}/api/v1/download-file?url=${encodeURIComponent(o)}`,a=await fetch(n,{mode:"cors"});if(a.ok){const r=await a.blob();if(r&&r.size>0){const s=await k(r);return{blobUrl:URL.createObjectURL(r),blob:r,mimeType:r.type||i,dataUrl:s||o}}}}catch(n){console.warn("Proxy fetch also failed:",n?.message||n)}if(x(o,i)){const n=u(t,e);return{blobUrl:n,blob:null,mimeType:"image/svg+xml",dataUrl:n}}return{blobUrl:o,blob:null,mimeType:i,dataUrl:o}}async function P(t,i="document"){if(!t)return console.warn("downloadDocument called without fileUrl"),!1;let e=(i||"document").trim().replace(/[<>:"/\\|?*]/g,"_");try{const o=await y(t);if(o&&o.blobUrl){if(!e.includes(".")){const p=v[o.mimeType]||(x("",o.mimeType)?".jpg":".pdf");e+=p}const s=document.createElement("a");return s.style.display="none",s.href=o.blobUrl,s.download=e,document.body.appendChild(s),s.click(),setTimeout(()=>{if(document.body.removeChild(s),t.startsWith("data:")||!t.startsWith("blob:"))try{URL.revokeObjectURL(o.blobUrl)}catch{}},2e3),!0}const n=t.startsWith("http")?t:`${m}${t}`,a=`${m}/api/v1/download-file?url=${encodeURIComponent(n)}&name=${encodeURIComponent(e)}`,r=document.createElement("a");return r.href=a,r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}catch(o){return console.error("Download error:",o),!1}}async function S(t,i="image.jpg",e=null){if(!t)return u(i,e);if(t.startsWith("data:image/"))return t;try{const o=await y(t,"image/jpeg",e);if(o?.blobUrl)return o.blobUrl;if(o?.dataUrl&&o.dataUrl.startsWith("data:image/"))return o.dataUrl}catch(o){console.warn("Image blob conversion notice:",o)}return new Promise(o=>{const n=t.startsWith("http://")||t.startsWith("https://")?t:`${m}${t.startsWith("/")?"":"/"}${t}`,a=new Image;a.crossOrigin="anonymous";const r=setTimeout(()=>{o(u(i,e))},2500);a.onload=()=>{clearTimeout(r);try{const s=document.createElement("canvas");s.width=a.naturalWidth||800,s.height=a.naturalHeight||1100,s.getContext("2d").drawImage(a,0,0);const f=s.toDataURL("image/jpeg",.95);o(f)}catch{o(n)}},a.onerror=()=>{clearTimeout(r),o(u(i,e))},a.src=n})}async function R(t){if(!t){window.print();return}const i=t.items&&t.items.length>0?t.items:[{fileUrl:"",fileName:"document"}],e=i[0]||{},o=e.dataUrl||e.previewUrl||e.fileUrl||"",n=e.fileName||"document";try{const a=x(n)||i.some(c=>x(c.fileName)||c.fileType&&c.fileType.startsWith("image/")),r=U(n)||e.fileType&&e.fileType.includes("pdf"),s=C(n)||e.fileType&&e.fileType.startsWith("text/");if(a){const c=await Promise.all(i.map(async l=>{const b=l.dataUrl||l.previewUrl||l.fileUrl,h=l.fileName||n,w=await S(b,h,t);return{name:h,dataUrl:w,colorMode:l.colorMode||"BLACK_AND_WHITE",paperSize:l.paperSize||"A4",copies:l.copies||1}})),d=window.open("","_blank","width=950,height=1050");if(d){const l=c.map((h,w)=>`
          <div class="print-page">
            <img class="doc-img" src="${h.dataUrl}" alt="${h.name}" />
          </div>
        `).join(""),b=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Print - ${n}</title>
  <style>
    @page {
      size: auto;
      margin: 8mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      background: #0b0f19;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #f8fafc;
    }
    .no-print {
      width: 100%;
      max-width: 850px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      background: #1e293b;
      border-radius: 12px;
      border: 1px solid #334155;
      font-size: 13px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.4);
    }
    .badge {
      background: #4f46e5;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 800;
      font-size: 11px;
      margin-left: 8px;
    }
    .actions { display: flex; gap: 10px; align-items: center; }
    .print-btn {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: white;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 13px;
      box-shadow: 0 4px 12px rgba(79,70,229,0.4);
      transition: all 0.2s;
    }
    .print-btn:hover { background: #4338ca; }
    .print-container {
      width: 100%;
      max-width: 850px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    .print-page {
      width: 100%;
      background: white;
      padding: 16px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .doc-img {
      max-width: 100%;
      max-height: 80vh;
      width: auto;
      height: auto;
      object-fit: contain;
      display: block;
      margin: 0 auto;
      border-radius: 4px;
    }
    @media print {
      html, body {
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #ffffff !important;
        overflow: visible !important;
      }
      .no-print { display: none !important; }
      .print-container {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
      }
      .print-page {
        width: 100% !important;
        height: 100% !important;
        max-height: 98vh !important;
        padding: 0 !important;
        margin: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
        page-break-after: always !important;
        page-break-inside: avoid !important;
        break-after: page !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        box-sizing: border-box !important;
      }
      .doc-img {
        max-width: 100% !important;
        max-height: 96vh !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        display: block !important;
        margin: auto !important;
        image-rendering: -webkit-optimize-contrast;
      }
    }
  </style>
</head>
<body>
  <div class="no-print">
    <div>
      <span>🖼️ <strong>${n}</strong></span>
      <span class="badge">Token #${t.pickupToken||t.id||"—"}</span>
      <span style="color:#94a3b8; margin-left:8px; font-size:12px;">Specs: ${e.colorMode==="COLOR"?"Color":"B&W"}, ${e.paperSize||"A4"} (${i.length} ${i.length>1?"pages":"page"})</span>
    </div>
    <div class="actions">
      <button class="print-btn" onclick="startPrint()">🖨️ Print Now</button>
    </div>
  </div>
  <div class="print-container">
    ${l}
  </div>
  <script>
    var hasTriggered = false;
    function startPrint() {
      if (hasTriggered) return;
      hasTriggered = true;
      window.focus();
      setTimeout(function() {
        window.print();
      }, 300);
    }

    function checkImagesLoaded() {
      var imgs = Array.from(document.querySelectorAll('.doc-img'));
      if (!imgs.length) {
        startPrint();
        return;
      }
      var allReady = imgs.every(function(img) {
        return img.complete && img.naturalWidth > 0;
      });
      if (allReady) {
        startPrint();
      } else {
        var loadedCount = 0;
        imgs.forEach(function(img) {
          if (img.complete && img.naturalWidth > 0) {
            loadedCount++;
            if (loadedCount === imgs.length) startPrint();
          } else {
            img.onload = function() {
              loadedCount++;
              if (loadedCount === imgs.length) startPrint();
            };
            img.onerror = function() {
              loadedCount++;
              if (loadedCount === imgs.length) startPrint();
            };
          }
        });
      }
    }

    if (document.readyState === 'complete') {
      checkImagesLoaded();
    } else {
      window.addEventListener('load', checkImagesLoaded);
    }
  <\/script>
</body>
</html>`;d.document.open(),d.document.write(b),d.document.close();return}}const p=await y(o,r?"application/pdf":"application/octet-stream",t),f=p?.blobUrl||(o.startsWith("http")?o:`${m}${o}`);if(s&&p?.blob){const c=await p.blob.text(),d=window.open("","_blank","width=900,height=1000");if(d){const l=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Print - ${n}</title>
  <style>
    @page { size: auto; margin: 12mm; }
    body {
      margin: 0;
      padding: 24px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 13px;
      line-height: 1.5;
      color: #0f172a;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .no-print {
      margin-bottom: 20px;
      padding: 10px 16px;
      background: #1e293b;
      color: white;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .print-btn {
      background: #4f46e5;
      color: white;
      border: none;
      padding: 6px 14px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 8px;
      margin-bottom: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print">
    <span>📄 <strong>${n}</strong> &middot; Order #${t.pickupToken||t.id}</span>
    <button class="print-btn" onclick="window.print()">🖨️ Print Document</button>
  </div>
  <div class="header">
    <strong>${n}</strong>
    <span>Customer: ${t.customerName||"Walk-in"} &middot; Token: #${t.pickupToken||"—"}</span>
  </div>
  <pre>${c.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>
  <script>
    window.onload = function() {
      window.focus();
      setTimeout(function() { window.print(); }, 350);
    };
  <\/script>
</body>
</html>`;d.document.open(),d.document.write(l),d.document.close();return}}const g=window.open(f,"_blank");g&&(g.focus(),setTimeout(()=>{try{g.print()}catch{}},1200))}catch(a){console.error("executePrintWithPC error:",a),window.open(o.startsWith("http")?o:`${m}${o}`,"_blank")}}export{I as F,P as d,R as e,x as i};

import{A as E}from"./index-DcR1rD4X.js";import{r as x,j as e,k as q,R as J,X as ie,K as re,F as H,w as Z,a9 as le,V as de,Y as ce,aa as pe,ab as xe,ac as me,ad as fe,ae as he,f as ge,y as ee,S as be,o as ue}from"./vendor-react-CtFKmDdW.js";const we={"image/jpeg":".jpg","image/jpg":".jpg","image/png":".png","image/webp":".webp","image/gif":".gif","image/bmp":".bmp","image/svg+xml":".svg","image/tiff":".tiff","image/heic":".heic","image/heif":".heif","image/avif":".avif","image/x-icon":".ico","application/pdf":".pdf","application/msword":".doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":".docx","application/vnd.ms-excel":".xls","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx","application/vnd.ms-powerpoint":".ppt","application/vnd.openxmlformats-officedocument.presentationml.presentation":".pptx","text/plain":".txt","text/csv":".csv","application/rtf":".rtf","text/rtf":".rtf","application/vnd.oasis.opendocument.text":".odt","application/vnd.oasis.opendocument.spreadsheet":".ods","application/vnd.oasis.opendocument.presentation":".odp"},ye=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.txt,.rtf,.odt,.ods,.odp,.png,.jpg,.jpeg,.webp,.bmp,.svg,.tiff,.tif,.heic,.heif,.gif,.avif,.ico",je="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain,text/csv,text/rtf",Pe=`${ye},${je}`;function L(t="",l=""){const s=(t||"").toLowerCase().split("?")[0];return s.endsWith(".jpg")||s.endsWith(".jpeg")||s.endsWith(".png")||s.endsWith(".webp")||s.endsWith(".bmp")||s.endsWith(".svg")||s.endsWith(".gif")||s.endsWith(".tif")||s.endsWith(".tiff")||s.endsWith(".avif")||s.endsWith(".ico")||s.endsWith(".heic")||s.endsWith(".heif")?!0:l.startsWith("image/")}function ve(t="",l=""){return(t||"").toLowerCase().split("?")[0].endsWith(".pdf")||l.includes("pdf")}function Ne(t="",l=""){const s=(t||"").toLowerCase().split("?")[0];return s.endsWith(".txt")||s.endsWith(".csv")||s.endsWith(".rtf")||s.endsWith(".log")||l.startsWith("text/")}function A(t="Image Document",l={}){const s=l?.items?.[0]||{},o=l?.pickupToken||l?.id||"—",a=s?.colorMode==="COLOR"?"Color Output (CMYK)":"Monochrome (B&W Grayscale)",i=s?.paperSize||"A4",d=(t||"Document").replace(/[<>&"]/g,""),p=(d.split(".").pop()||"IMAGE").toUpperCase(),m=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="1200" height="1600">
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
    <text x="600" y="155" fill="#e0e7ff" font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle">TOKEN #${o} &middot; ${i} &middot; ${a}</text>
    
    <!-- Central Icon Artwork -->
    <circle cx="600" cy="540" r="160" fill="#eef2ff" stroke="#6366f1" stroke-width="6"/>
    <g transform="translate(500, 440) scale(4)" stroke="#4f46e5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </g>
    
    <!-- Document Title & Badge -->
    <text x="600" y="790" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="800" text-anchor="middle">${d}</text>
    
    <rect x="400" y="830" width="400" height="48" rx="24" fill="#6366f1"/>
    <text x="600" y="862" fill="#ffffff" font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle">${p} &middot; HARDWARE READY</text>
    
    <!-- Specifications Box -->
    <rect x="120" y="930" width="960" height="340" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <text x="180" y="1000" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Pickup Token:</text>
    <text x="560" y="1000" fill="#0f172a" font-family="monospace" font-size="28" font-weight="900">#${o}</text>
    
    <line x1="180" y1="1040" x2="1020" y2="1040" stroke="#f1f5f9" stroke-width="2"/>
    
    <text x="180" y="1100" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Color Specification:</text>
    <text x="560" y="1100" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700">${a}</text>
    
    <line x1="180" y1="1140" x2="1020" y2="1140" stroke="#f1f5f9" stroke-width="2"/>
    
    <text x="180" y="1200" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26">Paper Stock &amp; Size:</text>
    <text x="560" y="1200" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700">${i} Standard (300 DPI Native)</text>
    
    <!-- Footer -->
    <line x1="120" y1="1440" x2="1080" y2="1440" stroke="#cbd5e1" stroke-width="2"/>
    <text x="600" y="1490" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" text-anchor="middle">&copy; Print Support &middot; Auto Spooler &amp; Native Print Engine</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(m)}`}function te(t){return new Promise(l=>{if(!t)return l("");const s=new FileReader;s.onload=o=>l(o.target.result||""),s.onerror=()=>l(""),s.readAsDataURL(t)})}async function _(t,l="application/octet-stream",s=null){if(!t)return null;if(t.startsWith("data:")){const a=t.split(","),i=a[0].match(/:(.*?);/),d=i?i[1]:l,p=a[0].includes("base64");let m;if(p){const b=atob(a[1]);let f=b.length;for(m=new Uint8Array(f);f--;)m[f]=b.charCodeAt(f)}else m=new TextEncoder().encode(decodeURIComponent(a[1]));const N=new Blob([m],{type:d});return{blobUrl:URL.createObjectURL(N),blob:N,mimeType:d,dataUrl:t}}if(t.startsWith("blob:"))return{blobUrl:t,blob:null,mimeType:l,dataUrl:t};const o=t.startsWith("http://")||t.startsWith("https://")?t:`${E}${t.startsWith("/")?"":"/"}${t}`;try{const a=await fetch(o,{mode:"cors"});if(a.ok){const i=await a.blob();if(i&&i.size>0){const d=await te(i);return{blobUrl:URL.createObjectURL(i),blob:i,mimeType:i.type||l,dataUrl:d||o}}}}catch(a){console.warn("Direct fetch failed, trying proxy download endpoint:",a?.message||a)}try{const a=`${E}/api/v1/download-file?url=${encodeURIComponent(o)}`,i=await fetch(a,{mode:"cors"});if(i.ok){const d=await i.blob();if(d&&d.size>0){const p=await te(d);return{blobUrl:URL.createObjectURL(d),blob:d,mimeType:d.type||l,dataUrl:p||o}}}}catch(a){console.warn("Proxy fetch also failed:",a?.message||a)}if(L(o,l)){const a=A(t,s);return{blobUrl:a,blob:null,mimeType:"image/svg+xml",dataUrl:a}}return{blobUrl:o,blob:null,mimeType:l,dataUrl:o}}async function $e(t,l="document"){if(!t)return console.warn("downloadDocument called without fileUrl"),!1;let s=(l||"document").trim().replace(/[<>:"/\\|?*]/g,"_");try{const o=await _(t);if(o&&o.blobUrl){if(!s.includes(".")){const m=we[o.mimeType]||(L("",o.mimeType)?".jpg":".pdf");s+=m}const p=document.createElement("a");return p.style.display="none",p.href=o.blobUrl,p.download=s,document.body.appendChild(p),p.click(),setTimeout(()=>{if(document.body.removeChild(p),t.startsWith("data:")||!t.startsWith("blob:"))try{URL.revokeObjectURL(o.blobUrl)}catch{}},2e3),!0}const a=t.startsWith("http")?t:`${E}${t}`,i=`${E}/api/v1/download-file?url=${encodeURIComponent(a)}&name=${encodeURIComponent(s)}`,d=document.createElement("a");return d.href=i,d.setAttribute("download",s),document.body.appendChild(d),d.click(),document.body.removeChild(d),!0}catch(o){return console.error("Download error:",o),!1}}async function ke(t,l="image.jpg",s=null){if(!t)return A(l,s);if(t.startsWith("data:image/"))return t;try{const o=await _(t,"image/jpeg",s);if(o?.blobUrl)return o.blobUrl;if(o?.dataUrl&&o.dataUrl.startsWith("data:image/"))return o.dataUrl}catch(o){console.warn("Image blob conversion notice:",o)}return new Promise(o=>{const a=t.startsWith("http://")||t.startsWith("https://")?t:`${E}${t.startsWith("/")?"":"/"}${t}`,i=new Image;i.crossOrigin="anonymous";const d=setTimeout(()=>{o(A(l,s))},2500);i.onload=()=>{clearTimeout(d);try{const p=document.createElement("canvas");p.width=i.naturalWidth||800,p.height=i.naturalHeight||1100,p.getContext("2d").drawImage(i,0,0);const N=p.toDataURL("image/jpeg",.95);o(N)}catch{o(a)}},i.onerror=()=>{clearTimeout(d),o(A(l,s))},i.src=a})}async function Re(t){if(!t){window.print();return}const l=t.items&&t.items.length>0?t.items:[{fileUrl:"",fileName:"document"}],s=l[0]||{},o=s.dataUrl||s.previewUrl||s.fileUrl||"",a=s.fileName||"document";try{const i=L(a)||l.some(f=>L(f.fileName)||f.fileType&&f.fileType.startsWith("image/")),d=ve(a)||s.fileType&&s.fileType.includes("pdf"),p=Ne(a)||s.fileType&&s.fileType.startsWith("text/");if(i){const f=await Promise.all(l.map(async w=>{const U=w.dataUrl||w.previewUrl||w.fileUrl,k=w.fileName||a,h=await ke(U,k,t);return{name:k,dataUrl:h,colorMode:w.colorMode||"BLACK_AND_WHITE",paperSize:w.paperSize||"A4",copies:w.copies||1}})),j=window.open("","_blank","width=950,height=1050");if(j){const w=f.map((k,h)=>`
          <div class="print-page">
            <img class="doc-img" src="${k.dataUrl}" alt="${k.name}" />
          </div>
        `).join(""),U=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Print - ${a}</title>
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
      <span>🖼️ <strong>${a}</strong></span>
      <span class="badge">Token #${t.pickupToken||t.id||"—"}</span>
      <span style="color:#94a3b8; margin-left:8px; font-size:12px;">Specs: ${s.colorMode==="COLOR"?"Color":"B&W"}, ${s.paperSize||"A4"} (${l.length} ${l.length>1?"pages":"page"})</span>
    </div>
    <div class="actions">
      <button class="print-btn" onclick="startPrint()">🖨️ Print Now</button>
    </div>
  </div>
  <div class="print-container">
    ${w}
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
</html>`;j.document.open(),j.document.write(U),j.document.close();return}}const m=await _(o,d?"application/pdf":"application/octet-stream",t),N=m?.blobUrl||(o.startsWith("http")?o:`${E}${o}`);if(p&&m?.blob){const f=await m.blob.text(),j=window.open("","_blank","width=900,height=1000");if(j){const w=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Print - ${a}</title>
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
    <span>📄 <strong>${a}</strong> &middot; Order #${t.pickupToken||t.id}</span>
    <button class="print-btn" onclick="window.print()">🖨️ Print Document</button>
  </div>
  <div class="header">
    <strong>${a}</strong>
    <span>Customer: ${t.customerName||"Walk-in"} &middot; Token: #${t.pickupToken||"—"}</span>
  </div>
  <pre>${f.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>
  <script>
    window.onload = function() {
      window.focus();
      setTimeout(function() { window.print(); }, 350);
    };
  <\/script>
</body>
</html>`;j.document.open(),j.document.write(w),j.document.close();return}}const b=window.open(N,"_blank");b&&(b.focus(),setTimeout(()=>{try{b.print()}catch{}},1200))}catch(i){console.error("executePrintWithPC error:",i),window.open(o.startsWith("http")?o:`${E}${o}`,"_blank")}}function We({item:t,isOpen:l,onClose:s,onSave:o}){const a=t?.pageCount||1,i=!!(t?.fileType?.includes("pdf")||t?.fileName?.toLowerCase().endsWith(".pdf")||t?.isPdf||t?.pageCount&&t.pageCount>1),[d,p]=x.useState(i?"pdf":"rotate"),[m,N]=x.useState(!1),[b,f]=x.useState(null),[j,w]=x.useState({width:800,height:1e3}),[U,k]=x.useState(!1),[h,D]=x.useState(t?.editState?.currentPage||1),[v,F]=x.useState(t?.editState?.rotation||0),[C,V]=x.useState(t?.editState?.flipH||!1),[S,G]=x.useState(t?.editState?.flipV||!1),[P,Y]=x.useState(t?.editState?.brightness||100),[$,K]=x.useState(t?.editState?.contrast||100),[R,Q]=x.useState(t?.editState?.grayscale||!1),se=x.useRef(null),B=x.useRef(null);x.useEffect(()=>{if(l){const n=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=n||""}}},[l]);const O=x.useCallback(n=>{const c=document.createElement("canvas");c.width=1240,c.height=1754;const r=c.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,1240,1754),r.fillStyle="#4f46e5",r.fillRect(50,50,1140,140),r.fillStyle="#ffffff",r.font="bold 38px sans-serif",r.fillText(t?.fileName||"PDF DOCUMENT PREVIEW",90,115),r.fillStyle="#c7d2fe",r.font="600 24px monospace",r.fillText(`PAGE ${n} OF ${a} • High Resolution Vector Render`,90,160),r.fillStyle="#334155";const g=n*5%11;for(let y=0;y<22;y++){const M=420+Math.sin((y+g)*1.3)*360;r.fillRect(90,240+y*58,Math.min(1060,Math.max(260,M)),18)}r.fillStyle="#f1f5f9",r.fillRect(90,1550,1060,130),r.fillStyle="#475569",r.font="bold 24px monospace",r.fillText(`DOCUMENT PAGE [ ${n} / ${a} ]`,130,1625),r.fillText("PRE-FLIGHT VERIFIED",730,1625);const u=new Image;u.src=c.toDataURL("image/png"),u.onload=()=>{f(u),w({width:1240,height:1754}),N(!0)}},[t,a]);x.useEffect(()=>{if(!l||!t)return;if(N(!1),i){O(h);return}const n=t.fileUrl||t.previewUrl||"",c=n.startsWith("http")||n.startsWith("data:")||n.startsWith("blob:")?n:`${E}${n.startsWith("/")?"":"/"}${n}`,r=new Image;r.crossOrigin="anonymous",r.src=c,r.onload=()=>{f(r);const g=r.naturalWidth||800,u=r.naturalHeight||1e3;w({width:g,height:u}),N(!0)},r.onerror=()=>{const g=new Image;g.onload=()=>{f(g);const u=g.naturalWidth||800,y=g.naturalHeight||1e3;w({width:u,height:y}),N(!0)},g.onerror=()=>{O(h)},g.src=c}},[l,t,i,h,O]),x.useEffect(()=>{if(!m||!b||!B.current)return;const n=B.current,c=n.getContext("2d");n.width=600,n.height=700,c.clearRect(0,0,n.width,n.height),c.save(),c.translate(n.width/2,n.height/2),c.rotate(v*Math.PI/180),c.scale(C?-1:1,S?-1:1),c.filter=`brightness(${P}%) contrast(${$}%) ${R?"grayscale(100%)":""}`;const r=b.width/b.height,g=n.width*.8/(n.height*.8);let u,y;r>g?(u=n.width*.75,y=u/r):(y=n.height*.75,u=y*r),c.drawImage(b,-u/2,-y/2,u,y),c.restore()},[m,b,v,C,S,P,$,R]);const ae=()=>{F(0),V(!1),G(!1),Y(100),K(100),Q(!1),D(1)},ne=()=>{if(!b)return;const n=b.naturalWidth||800,c=b.naturalHeight||1e3,r=v*Math.PI/180,g=Math.abs(Math.cos(r)),u=Math.abs(Math.sin(r)),y=Math.round(n*g+c*u),M=Math.round(n*u+c*g),z=document.createElement("canvas");z.width=y,z.height=M;const T=z.getContext("2d");T.imageSmoothingEnabled=!0,T.imageSmoothingQuality="high",T.save(),T.translate(y/2,M/2),T.rotate(r),T.scale(C?-1:1,S?-1:1),T.filter=`brightness(${P}%) contrast(${$}%) ${R?"grayscale(100%)":""}`,T.drawImage(b,-n/2,-c/2,n,c),T.restore();const X=z.toDataURL("image/png"),I=[];v!==0&&I.push(`Rotated ${v}°`),(C||S)&&I.push("Flipped"),(P!==100||$!==100||R)&&I.push("Enhanced"),i&&I.push(`PDF Page ${h}/${a}`);const oe=I.length>0?I.join(" • "):"Adjusted Document";o({...t,fileUrl:X,previewUrl:X,isEdited:!0,editSummary:oe,activePdfPage:h,editState:{rotation:v,flipH:C,flipV:S,brightness:P,contrast:$,grayscale:R,currentPage:h}}),s()};if(!l||!t)return null;const W=[];return v!==0&&W.push(`Rotation: ${v}°`),(C||S)&&W.push(`Flipped: ${C?"Horizontal":""} ${S?"Vertical":""}`),P!==100&&W.push(`Brightness: ${P}%`),$!==100&&W.push(`Contrast: ${$}%`),R&&W.push("Monochrome B&W Filter"),i&&W.push(`PDF Page Active: Page ${h} of ${a}`),e.jsx("div",{className:"fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md animate-fadeIn flex flex-col items-center justify-start lg:justify-center p-0 sm:p-4 md:p-6 scroll-smooth",style:{WebkitOverflowScrolling:"touch"},children:e.jsxs("div",{className:"bg-slate-900 border-0 sm:border border-slate-700/80 rounded-none sm:rounded-3xl w-full max-w-5xl min-h-screen sm:min-h-0 sm:h-[90vh] flex flex-col shadow-2xl relative my-0 sm:my-auto overflow-hidden",children:[e.jsxs("div",{className:"sticky top-0 z-40 px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-950/95 backdrop-blur-md flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3 min-w-0",children:[e.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/30 flex-shrink-0",children:e.jsx(q,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"text-xs sm:text-base font-extrabold text-white flex items-center gap-2 font-['Outfit'] truncate",children:"Document Studio Editor"}),e.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 truncate",children:i?`PDF Document • Page ${h} of ${a}`:"Rotate, flip & scan enhancements"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 flex-shrink-0",children:[e.jsxs("button",{onClick:ae,className:"text-[11px] sm:text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700",title:"Reset all modifications",children:[e.jsx(J,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Reset"})]}),e.jsx("button",{onClick:()=>{W.length>0?k(!0):s()},className:"p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:e.jsx(ie,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-0 overflow-y-auto lg:overflow-hidden min-h-0",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-3 sm:p-6 flex flex-col items-center justify-center relative select-none border-b lg:border-b-0 lg:border-r border-slate-800/80 min-h-[300px] sm:min-h-[360px] lg:h-auto flex-shrink-0",children:[e.jsxs("div",{className:"w-full flex items-center justify-between gap-2 mb-2 z-10 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-300 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-xl border border-slate-800 shadow-lg",children:[e.jsx(re,{className:"w-3.5 h-3.5 text-cyan-400"}),e.jsxs("span",{children:["Dimensions: ",e.jsxs("strong",{className:"text-white",children:[j.width,"×",j.height,"px"]})]}),v!==0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-slate-600",children:"|"}),e.jsxs("span",{className:"text-indigo-400 font-bold",children:[v,"° Angle"]})]})]}),i&&e.jsxs("div",{className:"flex items-center gap-1 bg-indigo-950/90 border border-indigo-500/50 rounded-xl px-2.5 py-1 text-xs text-indigo-200 shadow-lg",children:[e.jsx(H,{className:"w-3.5 h-3.5 text-indigo-400"}),e.jsxs("span",{className:"font-mono text-[11px] font-bold text-cyan-300",children:["PDF Page ",h," / ",a]})]})]}),e.jsx("div",{ref:se,className:"relative max-w-full flex items-center justify-center rounded-xl p-2 bg-slate-900/40 border border-slate-800 shadow-2xl select-none my-auto",children:e.jsx("canvas",{ref:B,className:"max-w-full max-h-[240px] sm:max-h-[360px] lg:max-h-[60vh] rounded-lg object-contain shadow-2xl transition-all duration-200"})})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-900 p-4 sm:p-5 flex flex-col justify-between space-y-5 flex-shrink-0 lg:flex-1 lg:overflow-y-auto pb-24 sm:pb-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`grid ${i?"grid-cols-3":"grid-cols-2"} gap-1.5 p-1 bg-slate-950 rounded-xl sm:rounded-2xl border border-slate-800`,children:[i&&e.jsxs("button",{onClick:()=>p("pdf"),className:`flex items-center justify-center gap-1.5 py-2.5 rounded-lg sm:rounded-xl text-xs font-bold transition-all ${d==="pdf"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,title:"PDF Multi-Page Preview",children:[e.jsx(H,{className:"w-4 h-4"}),e.jsxs("span",{children:["PDF Pages (",a,")"]})]}),e.jsxs("button",{onClick:()=>p("rotate"),className:`flex items-center justify-center gap-1.5 py-2.5 rounded-lg sm:rounded-xl text-xs font-bold transition-all ${d==="rotate"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:[e.jsx(Z,{className:"w-4 h-4"}),e.jsx("span",{children:"Rotate & Flip"})]}),e.jsxs("button",{onClick:()=>p("enhance"),className:`flex items-center justify-center gap-1.5 py-2.5 rounded-lg sm:rounded-xl text-xs font-bold transition-all ${d==="enhance"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:[e.jsx(q,{className:"w-4 h-4"}),e.jsx("span",{children:"Filters & Scan"})]})]}),d==="pdf"&&i&&e.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(le,{className:"w-4 h-4 text-indigo-400"}),"PDF Document Multi-Page Navigation"]}),e.jsxs("span",{className:"text-[11px] font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-500/30",children:[a," Total Page",a>1?"s":""]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-2 pt-1",children:[e.jsxs("button",{onClick:()=>D(n=>Math.max(1,n-1)),disabled:h<=1,className:"flex-1 py-2.5 px-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 disabled:opacity-30 disabled:pointer-events-none text-indigo-200 font-bold text-xs flex items-center justify-center gap-1 border border-indigo-500/40 transition-colors",children:[e.jsx(de,{className:"w-4 h-4"}),e.jsx("span",{children:"Prev Page"})]}),e.jsxs("div",{className:"px-4 py-2 bg-slate-900 rounded-xl border border-slate-700 text-center",children:[e.jsxs("span",{className:"text-xs font-extrabold text-white block",children:["Page ",h," of ",a]}),e.jsx("span",{className:"text-[9px] text-slate-400 block font-mono",children:"Ready for Print"})]}),e.jsxs("button",{onClick:()=>D(n=>Math.min(a,n+1)),disabled:h>=a,className:"flex-1 py-2.5 px-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 disabled:opacity-30 disabled:pointer-events-none text-indigo-200 font-bold text-xs flex items-center justify-center gap-1 border border-indigo-500/40 transition-colors",children:[e.jsx("span",{children:"Next Page"}),e.jsx(ce,{className:"w-4 h-4"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block",children:"Quick Page Selector Grid"}),e.jsx("div",{className:"grid grid-cols-4 gap-2 max-h-36 overflow-y-auto p-1 bg-slate-950 rounded-xl border border-slate-800",children:Array.from({length:a}).map((n,c)=>{const r=c+1,g=h===r;return e.jsxs("button",{onClick:()=>D(r),className:`py-2 px-1 rounded-lg border text-xs font-bold font-mono transition-all flex flex-col items-center gap-0.5 ${g?"bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/40 scale-[1.03]":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"}`,children:[e.jsx(H,{className:"w-3.5 h-3.5 text-indigo-300"}),e.jsxs("span",{children:["Page ",r]})]},r)})})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs space-y-1.5 text-indigo-200",children:[e.jsxs("div",{className:"flex justify-between items-center font-semibold",children:[e.jsx("span",{children:"Document Format:"}),e.jsxs("span",{className:"text-white font-mono",children:[t?.paperSize||"A4"," • Standard Vector"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-[11px] text-slate-400",children:[e.jsx("span",{children:"Active Preview:"}),e.jsxs("span",{children:["Page ",h," applied to print canvas"]})]})]})]}),d==="rotate"&&e.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2",children:"Quick Rotation Presets"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs("button",{onClick:()=>F(n=>(n-90+360)%360),className:"flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold transition-all",children:[e.jsx(pe,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"-90° Left"})]}),e.jsxs("button",{onClick:()=>F(n=>(n+90)%360),className:"flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold transition-all",children:[e.jsx(Z,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"+90° Right"})]}),e.jsxs("button",{onClick:()=>F(n=>(n+180)%360),className:"flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold transition-all",children:[e.jsx(J,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"180° Flip"})]})]})]}),e.jsxs("div",{className:"pt-3 border-t border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wider",children:[e.jsx("span",{children:"Fine Angle Tuning"}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:[v,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"1",value:v,onChange:n=>F(parseInt(n.target.value)||0),className:"w-full accent-indigo-500 bg-slate-950 h-3 rounded-lg cursor-pointer"})]}),e.jsxs("div",{className:"pt-3 border-t border-slate-800 space-y-2",children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1",children:"Mirror & Flip Options"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("button",{onClick:()=>V(!C),className:`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all ${C?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx(xe,{className:"w-4 h-4"}),e.jsx("span",{children:"Flip Horizontal"})]}),e.jsxs("button",{onClick:()=>G(!S),className:`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all ${S?"bg-indigo-600/20 border-indigo-500 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx(me,{className:"w-4 h-4"}),e.jsx("span",{children:"Flip Vertical"})]})]})]})]}),d==="enhance"&&e.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-2",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(fe,{className:"w-4 h-4 text-amber-400"})," Brightness"]}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:[P,"%"]})]}),e.jsx("input",{type:"range",min:"50",max:"150",step:"1",value:P,onChange:n=>Y(parseInt(n.target.value)),className:"w-full accent-indigo-500 bg-slate-950 h-3 rounded-lg cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-2",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(he,{className:"w-4 h-4 text-cyan-400"})," Contrast"]}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:[$,"%"]})]}),e.jsx("input",{type:"range",min:"50",max:"200",step:"1",value:$,onChange:n=>K(parseInt(n.target.value)),className:"w-full accent-indigo-500 bg-slate-950 h-3 rounded-lg cursor-pointer"})]}),e.jsx("div",{className:"pt-3 border-t border-slate-800",children:e.jsxs("button",{onClick:()=>Q(!R),className:`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all ${R?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ge,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{children:"B&W Scan Enhancer"})]}),e.jsx("span",{children:R?"ENABLED":"OFF"})]})})]})]}),e.jsxs("div",{className:"sticky bottom-0 z-40 bg-slate-950/95 backdrop-blur-md px-4 py-3 sm:py-4 border-t border-slate-800 flex items-center justify-between gap-3 flex-shrink-0 shadow-2xl -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 mt-4",children:[e.jsx("button",{type:"button",onClick:s,className:"px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors border border-slate-700 flex-1 sm:flex-none",children:"Cancel"}),e.jsxs("button",{type:"button",onClick:()=>k(!0),className:"px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-black shadow-xl shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 flex-2 sm:flex-none border border-indigo-400/30 active:scale-95",children:[e.jsx(ee,{className:"w-4 h-4 sm:w-5 sm:h-5 text-emerald-300"}),e.jsx("span",{children:"Save & Apply Edits"})]})]})]})]}),U&&e.jsx("div",{className:"fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-900 border-2 border-indigo-500/60 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/20",children:e.jsx(be,{className:"w-8 h-8"})}),e.jsx("h3",{className:"text-lg font-black text-white font-['Outfit']",children:"Confirm & Save Edits?"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Are you sure you want to apply these custom edits to your document before sending it to the printer queue?"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-[11px] font-bold text-indigo-400 uppercase tracking-wider block border-b border-slate-800 pb-1.5",children:"Applied Modifications Summary:"}),W.length>0?e.jsx("ul",{className:"space-y-1.5 text-xs text-slate-300",children:W.map((n,c)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(ue,{className:"w-3.5 h-3.5 text-emerald-400 flex-shrink-0"}),e.jsx("span",{children:n})]},c))}):e.jsx("p",{className:"text-xs text-slate-500 italic",children:"No custom modifications applied (Original settings preserved)."})]}),e.jsxs("div",{className:"space-y-2.5 pt-1",children:[e.jsxs("button",{onClick:ne,className:"w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2",children:[e.jsx(ee,{className:"w-4 h-4"}),e.jsx("span",{children:"Confirm & Save Edits"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>k(!1),className:"py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors",children:"Keep Editing"}),e.jsx("button",{onClick:s,className:"py-3 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-semibold transition-colors",children:"Discard Changes"})]})]})]})})]})})}export{We as D,Pe as F,$e as d,Re as e,L as i};

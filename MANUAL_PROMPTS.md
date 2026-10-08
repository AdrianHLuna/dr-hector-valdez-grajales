# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Héctor Valdéz Grajales — Cirugía General & Cirugía Laparoscópica de Mínima Invasión
**Ciudad:** Tuxtla Gutiérrez, Chiapas (Consultorios Santa Fe, 6a Sur #1271, Col. La Lomita, C.P. 29060)  
**Especialidad:** Cirugía General (Universidad Autónoma de Chiapas - UNACH)  
**Cédula Médico Cirujano:** 8405839 · **Cédula Cirugía General:** 11742236  
**Enfoque Clínico:** Cirugía Laparoscópica de Mínima Invasión, Cirugía Gastrointestinal, Pared Abdominal y Urgencias  

**Nota de discreción clínica y bioética:** la cirugía general y la proctología abordan órganos internos digestivos, pared abdominal y región anorrectal. Todos los prompts de este manual están redactados bajo **estrictos estándares de dignidad clínica, bioética y seguridad visual**: diagramas anatómicos esquemáticos 3D de libro de texto médico, renders biomédicos estériles, equipamiento quirúrgico laparoscópico HD de última generación, y fotografía editorial de consultorio y quirófano centrada en el profesionalismo médico (manos del cirujano con guantes estériles, instrumental de titanio, diálogo empático con pacientes) — **jamás fotografía cruenta con heridas abiertas sangrantes, cortes desagradables, tejido purulento explícito ni desnudez**. Esto garantiza una imagen de marca de máximo prestigio médico privado y permite una generación limpia y libre de bloqueos en Midjourney v6, OpenAI ChatGPT / DALL-E 3 y Google Imagen / Gemini.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...webp`), para saber exactamente dónde colocar la imagen generada.

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud, portales clínicos de alta especialidad y sitios web médicos de prestigio internacional.
Tono: Preciso, sobrio, de absoluta autoridad clínica y quirúrgica (Cirugía General, Laparoscopía Digestiva, Pared Abdominal y Proctología), elegante y editorial — nunca explícito ni gráfico.
Estilo: Fotorrealismo y renders 3D de texturas orgánicas médicas estériles para anatomía y patología; fotografía clínica y editorial de alta gama para procedimientos, consultas y escenas con pacientes.
Restricciones: Cero sangre abundante, heridas cruentas expuestas, tejido purulento explícito o desnudez — usar diagramas anatómicos esquemáticos de libro de texto, instrumental quirúrgico laparoscópico de alta tecnología o encuadres discretos en su lugar. Todo debe lucir higiénico, estéril y de alta tecnología. Prohibidos hologramas de ciencia ficción, luces de neón estridentes o interfaces irreales tipo HUD/cyberpunk. Cero palabras, marcas de agua, firmas, texto o números.
Formato: Imagen panorámica horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright luxury medical studio lighting, soft natural warm sidelight, gentle clinical shadows.
- Color Palette: Brand Surgical Emerald (#0C4A42), Surgical Mint (#14B8A6 / #2DD4BF), Surgical Amber / Gold (#D97706 / #F59E0B), Obsidian Teal (#091E1B), Pure Clinical White (#FFFFFF), Polished Surgical Steel.
- Composition: Focused clinical macro, dignified patient consultation medium shot, or symmetrical editorial medical view.
- Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style, hyper-detailed --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature, blood pooling, gore, open wounds, flesh, graphic content, nudity.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES QUIRÚRGICAS Y DIGESTIVAS (12)

### 1. Cálculos en la Vesícula Biliar (`public/images/enfermedades/vesicula-biliar-litiasis.webp`)
```text
Aesthetic 3D medical cross-section illustration of the human gallbladder and cystic duct showing faceted yellow-green gallstones within the lumen, clean clinical anatomy textbook style, non-explicit.

Lighting: Clean, bright luxury medical studio lighting, soft clinical shadows.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Amber Gold (#D97706), Clinical White.
Composition: Symmetrical focused clinical cross-section of the gallbladder and biliary tree.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, glowing digital UI, hud, text, words, watermark, signature, blood, gore.
```

### 2. Colecistitis Crónica y Aguda (`public/images/enfermedades/colecistitis-cronica.webp`)
```text
3D anatomical illustration of an inflamed gallbladder showing thickened muscular wall and hyperemic mucosal lining with an impacted stone in Hartmann's pouch, clean pathology textbook style.

Lighting: Balanced clinical studio lighting with soft focal highlights on the thickened gallbladder wall.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Warm Coral, Clinical White.
Composition: Focused coronal anatomical view of the gallbladder fundus and cystic neck.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, pus, gore.
```

### 3. Apendicitis Aguda (`public/images/enfermedades/apendicitis-aguda.webp`)
```text
3D medical rendering of the cecum and appendix vermiformis showing localized acute inflammation and vascular hyperemia, clean surgical pathology illustration.

Lighting: Focused clinical spotlighting along the ileocecal junction and appendix.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Deep Warm Red accents, Clinical White.
Composition: Anatomical anterior view of the cecum, terminal ileum and inflamed appendix.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, pus, gore.
```

### 4. Hernia Inguinal (`public/images/enfermedades/hernia-inguinal.webp`)
```text
Aesthetic 3D anatomical diagram of the human male inguinal canal and myopectineal orifice of Fruchaud, showing peritoneal sac protrusion through the internal ring, clean surgical textbook style.

Lighting: Bright sterile diagnostic illumination, soft natural shadows.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Neutral Sand, Clinical White.
Composition: Coronal schematic anatomical view of the inguinal floor and epigastric vessels.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity.
```

### 5. Hernia Umbilical y de Pared Abdominal (`public/images/enfermedades/hernia-umbilical-abdominal.webp`)
```text
3D anatomical cross-section render of the anterior abdominal wall showing an umbilical ring defect with herniated preperitoneal fat, educational medical textbook visual.

Lighting: Bright studio lighting highlighting muscle fascial layers (linea alba and rectus sheath).
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Amber Gold (#D97706), Clinical White.
Composition: Transverse cross-section through the umbilicus and rectus abdominis muscles.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 6. Lipomas y Tumores Benignos Subcutáneos (`public/images/enfermedades/lipomas-subcutaneos.webp`)
```text
High-precision 3D anatomical cross-section of human skin showing a well-encapsulated lobulated subcutaneous lipoma resting peacefully above the deep muscular fascia, clean dermatology textbook style.

Lighting: Clear clinical studio light highlighting distinct connective tissue capsule borders.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Warm Gold, Pure White.
Composition: Skin layer cross-section (epidermis, dermis, subcutaneous adipose tissue).
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore.
```

### 7. Absceso Anal y Fístula Anorrectal (`public/images/enfermedades/absceso-ano-rectal.webp`)
```text
Aesthetic 3D anatomical diagram of the coronal anal canal and sphincter complex illustrating a cryptoglandular infection pathway in schematic cross-section, dignified clinical textbook style.

Lighting: Balanced clinical studio lighting, schematic depth.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Silver, Clinical White.
Composition: Coronal schematic pelvic floor and anal sphincter anatomy model.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, pus, nudity, graphic content.
```

### 8. Enfermedad Hemorroidal (`public/images/enfermedades/hemorroides.webp`)
```text
Aesthetic medical illustration of the distal rectum and anal canal showing the vascular cushion anatomy (internal and external hemorrhoidal plexus), clean non-graphic educational diagram.

Lighting: Soft studio spotlighting, sterile schematic contrast.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Cobalt Blue, Soft Crimson, White.
Composition: Sagittal schematic cross-section of the rectal mucosa and vascular plexus.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity, graphic content.
```

### 9. Tumores de Partes Blandas y Quistes Sinoviales (`public/images/enfermedades/tumores-partes-blandas-quistes.webp`)
```text
3D anatomical illustration of human wrist joint tendons showing a smooth translucent ganglion cyst arising from the scapholunate ligament joint capsule, clean orthopedic pathology visual.

Lighting: Soft translucent backlighting highlighting fluid clarity within the synovial cyst capsule.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Translucent Pearl, Clinical White.
Composition: Macro anatomical close-up of wrist dorsal extensor tendons and ganglion.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, wounds.
```

### 10. Enfermedad Diverticular y Diverticulitis (`public/images/enfermedades/enfermedad-diverticular.webp`)
```text
3D anatomical render of the sigmoid colon showing outward pouching diverticula along the teniae coli, with localized inflammatory vascular accent, gastroenterology textbook style.

Lighting: Bright studio lighting highlighting the intestinal wall contours and haustra.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Coral Rose, Clinical White.
Composition: Segmental longitudinal view of the colon wall and diverticular pockets.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, feces, gore.
```

### 11. Pancreatitis Aguda de Origen Biliar (`public/images/enfermedades/pancreatitis-aguda.webp`)
```text
3D medical rendering of the pancreas, duodenum and common bile duct showing localized enzymatic inflammation in the pancreatic head near the ampulla of Vater, clean medical illustration.

Lighting: High-contrast clinical studio lighting with soft luminous accents along the pancreatic duct.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Amber Gold (#D97706), White.
Composition: Anterior anatomical perspective of the pancreaticoduodenal junction.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore.
```

### 12. Pie Diabético Complicado (`public/images/enfermedades/pie-diabetico-infeccion.webp`)
```text
Aesthetic medical textbook diagram of human foot vascular and neuropathic anatomy, showing microvascular flow vectors and pressure points in clean schematic cross-section, non-graphic.

Lighting: Bright laboratory illumination, soft organic depth.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Ice Blue, Clinical White.
Composition: Schematic sagittal foot model illustrating sensory nerve distribution.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: open wounds, rotting flesh, gangrene graphic details, gore, blood, pus, text, watermark.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA CIRUGÍAS Y PROCEDIMIENTOS QUIRÚRGICOS (11)

### 1. Colecistectomía Laparoscópica (`public/images/servicios/colecistectomia-laparoscopica.webp`)
```text
High-end clinical photorealistic photo of a general surgeon performing a laparoscopic cholecystectomy in a modern surgical theater, holding ergonomic laparoscopy handles while looking at a dual 4K high-definition medical monitor displaying clear surgical graphics.

Lighting: Clean operating room illumination with overhead surgical LED lamps, deep ambient shadows.
Color Palette: Brand Surgical Emerald (#0C4A42) surgical drapes, Mint (#14B8A6), Brushed Steel, White.
Composition: Editorial three-quarter medium shot of the surgeon focused on the laparoscopic console.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, graphic open incisions, gore, cartoon, CGI, text, watermark, messy room.
```

### 2. Apendicectomía Laparoscópica de Urgencia (`public/images/servicios/apendicectomia-laparoscopica.webp`)
```text
Photorealistic clinical image of a surgical team in sterile teal scrubs during an emergency minimally invasive laparoscopy procedure, micro-camera scope and laparoscopic graspers visible above sterile drapes, high-definition monitor in background.

Lighting: Focused hospital surgical light with crisp precision highlights.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Stainless Steel, Clinical White.
Composition: Wide editorial perspective of the sterile operating room team and monitors.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, open wounds, flesh, text, watermark, cartoon, sci-fi.
```

### 3. Hernioplastía Inguinal con Malla Libre de Tensión (`public/images/servicios/hernioplastia-inguinal.webp`)
```text
3D medical rendering of a sterile monofilament polypropylene surgical mesh implant displayed resting on an anatomical pelvic wall model, product-style medical device illustration.

Lighting: Studio spotlighting with soft mint and silver reflections on the porous mesh structure.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Metallic Silver, White.
Composition: Close-up macro shot of the surgical mesh pores and anatomical reinforcement.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, nudity.
```

### 4. Hernioplastía Umbilical y de Pared Abdominal (`public/images/servicios/hernioplastia-umbilical-ventral.webp`)
```text
Aesthetic 3D medical illustration demonstrating the anatomical layered repair of an umbilical hernia with a sublay prosthetic mesh reinforcement, clean surgical textbook diagram.

Lighting: Clean studio illumination distinguishing rectus abdominis muscle, fascia and mesh.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Amber (#D97706), White.
Composition: Coronal cross-section schematic view of the abdominal wall reconstruction.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, gore, open wounds.
```

### 5. Resección Quirúrgica de Lipomas y Tumores (`public/images/servicios/reseccion-lipomas-tumores.webp`)
```text
Still-life clinical photography of a pristine stainless steel minor surgery instrument tray containing sterile scalpel, fine dissecting forceps, curved hemostats, and suture materials on sterile teal drape.

Lighting: Clean, bright luxury medical studio lighting, sparkling reflections on metal.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Polished Silver, Pure White.
Composition: Symmetrical top-angle perspective of organized sterile instruments.
Suffixes: high-fidelity clinical photography, macro textures, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, dirt, used gauze, flesh, cartoon, CGI, text, watermark.
```

### 6. Drenaje de Absceso Anal y Manejo de Fístulas (`public/images/servicios/drenaje-absceso-cirugia-fistula.webp`)
```text
Professional clinical still-life in a spotless outpatient procedure suite showing packaged sterile surgical gloves, antiseptic prep solutions, and fine precision instruments on a surgical stainless steel cart.

Lighting: Bright sterile diagnostic clinic illumination, clean white aesthetic.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Stainless Steel, Clinical White.
Composition: Editorial still-life focusing on surgical hygiene and sterile preparation.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, pus, nudity, graphic content, wounds, cartoon, text, watermark.
```

### 7. Hemorroidectomía y Procedimientos Proctológicos (`public/images/servicios/hemorroidectomia-proctologia.webp`)
```text
Photorealistic product-style image of an advanced high-precision surgical electrocautery and energy bipolar vessel-sealing device resting on a sterile surgical drape in a modern hospital room.

Lighting: Crisp medical equipment lighting with soft reflections on the ergonomic handpiece.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Metallic Silver, Pure White.
Composition: Close-up macro perspective of the surgical energy instrument.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, nudity, graphic bodily areas, text, watermark, cartoon.
```

### 8. Manejo Quirúrgico y Curación de Pie Diabético (`public/images/servicios/manejo-quirurgico-pie-diabetico.webp`)
```text
Photorealistic close-up shot of a surgeon wearing sterile nitrile gloves applying an advanced bio-active silver dressing on a patient's foot, clinical treatment room setting, clean and compassionate care.

Lighting: Soft natural clinical daylight, respectful and comforting environment.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Sterile Gauze White, Soft Gray.
Composition: Close-up on the surgeon's gentle hands and clean dressing application, no graphic tissue.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: gangrene, gruesome wounds, blood pooling, rotting flesh, cartoon, text, watermark.
```

### 9. Cirugía de Enfermedad Diverticular (`public/images/servicios/cirugia-enfermedad-diverticular.webp`)
```text
Clinical photorealistic photo of a surgeon in sterile scrubs studying a high-resolution 3D abdominal CT scan on a backlit medical diagnostic viewer in the surgical suite ante-room.

Lighting: Cool blue backlighting from the diagnostic monitor illuminating the surgeon's focused profile.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Deep Slate Blue, White.
Composition: Medium profile shot of the doctor interacting with diagnostic workstation.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, messy cords.
```

### 10. Resección de Quistes Sinoviales y Gangliones (`public/images/servicios/reseccion-quistes-sinoviales.webp`)
```text
Close-up product photograph of fine micro-surgical dissection instruments and delicate suture scissors resting on a sterile green surgical drape in an outpatient minor surgery theater.

Lighting: Studio spotlighting with crisp precision highlights on stainless steel instruments.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Surgical Steel, White.
Composition: Macro still-life focusing on the delicacy of micro-surgical tools.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, open skin, wounds, cartoon, text, watermark.
```

### 11. Consulta de Cirugía General y Valoración ($500 MXN) (`public/images/servicios/consulta-cirugia-general.webp`)
```text
Clinical photorealistic photo of an empathetic male general surgeon in his late 30s wearing a clean white doctor coat, sitting across from an adult patient at a modern consultation desk in Consultorios Santa Fe, reviewing an abdominal ultrasound on a high-definition tablet.

Lighting: Soft natural morning light streaming through sheer curtains, gentle warm highlights.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Light Wood, Pure White.
Composition: Medium editorial shot over patient's shoulder focusing on the doctor's respectful expression.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, cold clinic.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS Y MOTIVOS DE CONSULTA QUIRÚRGICA (10)

### 1. Dolor Debajo de las Costillas Derechas (`public/images/sintomas/colico-biliar-bajo-costillas.webp`)
```text
Photorealistic photo of a person sitting at a dining table holding their upper right abdomen with one hand, a subtle wince of discomfort after finishing a meal, tasteful home dining environment.

Lighting: Warm natural afternoon light through dining room window.
Color Palette: Brand Surgical Emerald (#0C4A42) clothing, Mint (#14B8A6), Warm Wood, Soft White.
Composition: Medium shot focused on posture and hand placed over the right subcostal area.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, vomiting, agonizing scream.
```

### 2. Dolor Abdominal Agudo Súbito (`public/images/sintomas/dolor-abdominal-agudo.webp`)
```text
Photorealistic photo of an adult sitting tensely on the edge of a chair, both hands pressed firmly against the center of their abdomen with an expression of sharp discomfort, living room setting.

Lighting: Soft ambient indoor lighting, gentle contrast.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Neutral Gray, Linen White.
Composition: Medium shot focused on tense posture and hands supporting the abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, nudity.
```

### 3. Dolor en la Parte Baja Derecha del Vientre (`public/images/sintomas/dolor-fosa-iliaca-derecha.webp`)
```text
Photorealistic shot of an adult lying gently on a sofa with knees slightly bent for relief, placing a hand tenderly on the lower right abdominal area (right iliac fossa), thoughtful concerned expression.

Lighting: Soft daytime indoor light from adjacent window.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Soft Sand, Off-white.
Composition: Medium shot framing the torso and lower right abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, trauma.
```

### 4. Bulto en la Ingle o el Ombligo (`public/images/sintomas/abultamiento-ingle-ombligo.webp`)
```text
Photorealistic photo of a person dressed in casual cotton pants pausing while lifting a medium box, placing one hand thoughtfully near their waistline with a look of mild surprise as if noticing a small bulge, fully clothed.

Lighting: Bright natural indoor garage or living room daylight.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Cardboard Brown, White.
Composition: Medium shot from the waist up, tasteful and relatable everyday scene.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, exposed underwear.
```

### 5. Nódulo o Bolita Subcutánea (`public/images/sintomas/bolita-subcutanea-palpable.webp`)
```text
Photorealistic shot of a person gently touching a small movable lump beneath the skin on their forearm with the fingertips of the other hand, attentive and curious expression, dressed in a cozy sweater.

Lighting: Warm flattering daylight from the side, clean skin texture.
Color Palette: Brand Surgical Emerald (#0C4A42) sweater, Mint (#14B8A6), Natural Skin tones, Cream.
Composition: Close-up shot focused on hands and the forearm, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open sores, lesions, blood.
```

### 6. Dolor o Sangrado al Evacuar (`public/images/sintomas/dolor-sangrado-al-evacuar.webp`)
```text
Photorealistic photo of a person standing thoughtfully at the bathroom sink washing hands, pausing to look into the mirror with a concerned, reflective expression, toilet out of focus in background with no graphic contents.

Lighting: Bright clean modern bathroom lighting.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Ceramic White, Stone Gray.
Composition: Medium shot at the washbasin, focused on the worried facial expression.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, feces, toilet bowl contents, nudity, cartoon, text, watermark.
```

### 7. Inflamación y Bulto Doloroso en Zona Anal (`public/images/sintomas/hinchazon-calor-dolor-ano.webp`)
```text
Photorealistic photo of an adult pausing uncomfortably while attempting to sit down on an office chair, supporting themselves with one hand on the desk, expressing difficulty sitting due to pain, fully clothed in business attire.

Lighting: Bright natural office daylight, clean corporate aesthetic.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Slate Gray, Pure White.
Composition: Medium shot capturing posture and facial tension, completely dressed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: nudity, exposed skin, cartoon, text, watermark, CGI, graphic content.
```

### 8. Dolor en el Lado Izquierdo con Fiebre (`public/images/sintomas/dolor-abdominal-izquierdo-fiebre.webp`)
```text
Photorealistic photo of a person resting in bed with a digital thermometer on the nightstand showing a reading, holding a warm hot-water compress against the lower left abdomen, cozy bedroom interior.

Lighting: Soft evening lamp lighting, warm tranquil atmosphere.
Color Palette: Brand Surgical Emerald (#0C4A42) duvet, Mint (#14B8A6), Warm Linen, Soft Wood.
Composition: Medium seated shot in bed focusing on comforting posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, blood.
```

### 9. Náuseas, Vómitos e Inflamación Abdominal (`public/images/sintomas/nauseas-vomito-distension.webp`)
```text
Photorealistic shot of a person sitting at a kitchen table with a glass of plain water and slices of fresh lemon, resting one hand against their temple and the other over their stomach with a weary expression of nausea.

Lighting: Bright natural morning kitchen light.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Light Birch Wood, Clean White.
Composition: Medium portrait showing subtle posture of gastrointestinal discomfort.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, vomiting mess, sink, distress.
```

### 10. Úlcera o Herida que no Sana en el Pie (`public/images/sintomas/ulcera-herida-que-no-sana-pie.webp`)
```text
Photorealistic photo of an older adult sitting on a comfortable armchair, carefully wearing a clean white seamless diabetic sock over their foot with attentive care, gentle dignified healthcare lifestyle scene.

Lighting: Warm natural daylight streaming through living room window.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Pure Cotton White, Oak.
Composition: Medium shot focused on hands smoothing the protective white sock over the foot.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: open sores, gangrene, rotting tissue, blood, cartoon, text, watermark.
```

---

## 👤 SECCIÓN 4: PROMPTS PARA FOTOGRAFÍA DE MARCA PERSONAL Y CONSULTORIO

### 1. Retrato Médico Principal — Hero (`public/images/doctor-hero.webp`)
```text
Editorial medical portrait of a confident and distinguished Hispanic male general surgeon in his late 30s with a warm, empathetic and reassuring expression. He is wearing a tailored modern surgical emerald green scrubs top under an open pristine white doctor coat with a minimalist stethoscope draped around his neck. Modern high-end private medical consultation room in Consultorios Santa Fe in the background with soft mint and dark teal accents, natural window light from the side, clean architectural lines, depth of field, 85mm lens portrait.

Lighting: Soft luxury studio sidelight combined with natural window daylight, gentle shadow contouring.
Color Palette: Brand Surgical Emerald (#0C4A42), Surgical Mint (#14B8A6), Pristine White, Brushed Silver.
Composition: Three-quarter upper-body editorial portrait, direct confident and kind eye contact.
Suffixes: realistic medical photography, 85mm lens, 8k resolution, depth of field, Hasselblad medium format --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, 3D render, text, watermark, harsh shadows, unnatural skin smoothing, fake smile, stethoscope tangled.
```

### 2. Fotografía Editorial de Trayectoria y Semblanza — About (`public/images/doctor-about.webp`)
```text
Professional medium shot of a specialist male surgeon in a spotless white coat reviewing high-resolution laparoscopic abdominal surgery scans on a dual medical diagnostic monitor in a high-tech clinic office. Soft ambient lighting, clean aesthetic, authoritative and compassionate atmosphere, ultra-detailed medical interior.

Lighting: Balanced clinical studio lighting with soft glow from diagnostic screens on the doctor's profile.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Slate Gray, Clinical White.
Composition: Medium profile shot of the doctor interacting with diagnostic workstation.
Suffixes: high-fidelity clinical photography, depth of field, 8k, cinematic editorial --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, messy desk, outdated CRT monitors, plastic look.
```

### 3. Suite Médica y Consultorio de Especialidades (`public/images/consultorio-suite.webp`)
```text
Architectural interior photograph of a private luxury general surgery consultation suite at Consultorios Santa Fe in Tuxtla Gutiérrez, featuring modern ergonomic examination furniture, ultrasound workstation, physician desk with fresh subtle greenery, and comfortable patient seating.

Lighting: Warm architectural cove lighting combined with abundant natural daylight through expansive windows.
Color Palette: Brand Surgical Emerald (#0C4A42), Mint (#14B8A6), Warm Alabaster (#F7FAF9), Polished Marble, Brushed Steel.
Composition: Wide-angle architectural perspective showcasing calm, dignified and spotless medical luxury.
Suffixes: architectural interior photography, 8k, ultra-realistic, Hasselblad medium format --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, cluttered cords, hospital chaos, dirty floor, dim lighting.
```

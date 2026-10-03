# Open Questions for the Technical Specification

Answers to these will feed into the technical specification. Answer inline, and feel free to skip any where "your call" is fine.

## 1. Data

1. What format is the data array in (CSV, JSON, NumPy `.npy`, R object, other)? Can you share it or a sample?
    You have the generation script now and you created the data as .json in the data folder
2. What are its dimensions, i.e. how many years, species and habitats?
    That is user defined and you chave set the variables in generate-data-cube
3. Are the values binary (presence/absence), as in the physical cube, or counts? If counts, should one count become several cubes, or a bigger or brighter cube?
    Binary
4. So how many cubes would be drawn in total? This drives performance choices.
    You can see that now in data-cube
5. Is the data real or simulated? Does that need saying on screen?
    Simulated
6. What are the species, habitat and year labels? Should they appear on the axes?
    They are simulated. So I suggest they are not labelled. Year can have an arrow showing the direction of time
7. The physical cube used species × location × time. The new axes are year × species × habitat. Is several observations per cell possible now that habitat replaces location? If so, how should they be shown (stacked, jittered, one cube per cell)?
    Lets officailly use the labels species location and time
8. Could the dataset change later? Should the page load it from a file rather than embedding it?
    Yes, we might change the parameters in our data generation later, so make it load from a file

## 2. Story and content

9. For each Insight view, which face shows first, and what is the narrative text? (Example pairs: species × habitat, species × year, habitat × year.) Do you have draft text, or should I draft it from the original blog post's stories (more records over time, generalists vs specialists, specialist decline)?
    Create a draft from the original text for now
10. Should the Data, Categorise, Sort and Arrange steps also have short explanatory captions?
    Yes they should, I have create some sketches of layout in doc/sketches.pdf
11. Tagline: you used both **"Our Planet Decoded"** and **"Our Nature Decoded"**. Which is correct?
    Our planet. Decoded
12. Should anything else be on the finale screen, such as a link, a credit to you or the team, or a "restart" option?
    Restart option, for now

## 3. Navigation and flow

13. Should there be a **Back** button and/or step indicator dots, as well as Next?
    Yes a back button which should reverse the animation, if there was one
14. Should there be an auto-play or kiosk mode, e.g. for display on a screen at an event, that loops without clicks?
    Yes this is a good idea
15. Should the URL reflect the current step, e.g. `#insight-2`, so people can link to a step?
    No, link should always start at teh beginning
16. Should skipping or going back replay the animations, or jump straight to the end state?
    There is no skipping, only next and back and these play animations in ofrward or reverse

## 4. Visuals and interaction

17. In the Categorise step, should the cubes recolour all at once, in a wave, or randomly one by one?
    Randomly is a cool idea, lets start with that. The transitiion should take no more than 2 seconds
18. In the Sort step, should the piles be physics-driven heaps (cubes tumble into piles) or neat stacks? Should piles be labelled with species names?
    Teh piles should be physics driven heaps, not neat stacks. No labels.
19. Should the cursor repulsion work on every step before Arrange, or only on Data?
    Every step before arrange.
20. On the Arrange and Insight steps, do you want zoom as well as rotate? Should the cube snap back to the intended face after the user rotates it?
    No zoom and snap back.
21. Should hovering or clicking an individual cube show a tooltip (species, habitat, year)?
    No, but hold this as a potential addition
22. What should the bounding cube look like: wireframe edges, translucent Perspex-like panels, or a nod to the oak frame of the physical object?
    The edges should be a fine stroke of 30% grey
23. Should the overall look echo the physical cube (Perspex, black squares, oak), be fully in UKCEH brand style, or a mix?
    No, it should be a minimalist wire frame
24. Background: light, dark, or brand colour?
    White background with black text
25. Species colours: do they need to come from the UKCEH brand palette? Must they be colour-blind safe? (How many species there are affects this.)
    Ideally taken from the brand palette and colourblind safe
26. Sound: any audio, e.g. soft clacks when cubes land, or silent?
    plactics clack noises for when cube hit other cubes or the ground would be a nice bonus, but a stretch goal

## 5. Branding

27. Can you supply the official UKCEH logo files (SVG preferred), brand colours, fonts and any brand guidelines?
    I have added the brand guidelines to the docs folder. I have added png versions of the logo to the docs folder
28. Are there licence limits on brand fonts for web use, e.g. are webfont files available?
    I'm not sure
29. Does the page need sign-off from UKCEH comms or brand teams? Are there accessibility or web policy rules to meet?
    For now, no

## 6. Platforms and deployment

30. Where will it be hosted: GitHub Pages, a UKCEH website, embedded in another page (iframe), or run locally at events?
    Github pages, and locally
31. Does it need to work on mobile and tablet (touch to repel and rotate), or is desktop enough?
    I would love to havea  mobile version of the site, but this is a strech goal 
32. Which browsers matter? Is there any target hardware, e.g. a specific laptop or touchscreen at an event?
    No specific requirement
33. Must it work offline, i.e. self-contained with no CDN?
    Yes
34. Is "single HTML page" a hard requirement (literally one file), or is a small static site with a build step fine?
    As long as it can run locally, and on github pages

## 7. Technology preferences

35. Do you have a preferred stack? My default would be **Three.js** for rendering plus a JS physics engine (e.g. **Rapier** or **cannon-es**), built with **Vite** in TypeScript or plain JavaScript. Any objections or preferences?
    no preference
36. Who will maintain it after delivery? Should the code favour simplicity (plain JS, no build) over tooling?
    Simple maintenacne preferred

## 8. Accessibility

37. Should there be a reduced-motion mode, keyboard navigation, and text alternatives for the Insight views (for screen readers)?
    Yes
38. Should the narrative text be readable on its own, e.g. a non-3D fallback if WebGL is unavailable?
    yes, i think so. I dont follow hte qusetion exactly. I imaginged that the text on the screen would not part of the 3D render (except for axis labels)

## 9. Timeline and process

39. Is there a deadline or launch event?
    No
40. How would you like to review progress: step by step as each screen is built, or a full draft first?
    Step by step
41. Should I commit and push to the GitHub repo as I go, and on which branch?
    yes, push to main

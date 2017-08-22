const guides = {
    "swirlA": "<p><h2>Swirl Slime A</h2><h3>Pieces: D/D Swirl Slime, D/D Necro Slime, D/D Lamia </h3><input type='button' value='Show' onclick='unhide(\"swirlA\")'/><ol id='swirlA'><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon D/D Lamia.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Cursed King Siegfried with Lamia and Alexander. When Flame King Genghis triggers, Special Summon Alexander. </li><li>Activate D/D Lamia, sending Flame King Genghis to the graveyard to Special Summon it.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li></ol><b>End on D/D/D Cursed King Siegfried and Crystal Wing Synchro Dragon.</b></p>",
    "swirlB": "<p><h2>Swirl Slime B</h2><h3>Pieces: D/D Swirl Slime, D/D Necro Slime and D/D Savant Kepler </h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, and activate that to search D/D Lamia.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it. When Flame King Genghis triggers, Special Summon Alexander.</li><li>Synchro Summon Formula Synchron with Kepler and Lamia, then Cursed King Siegfried with Genghis and Formula.</li></ol><b>End on Crystal Wing Synchro Dragon, D/D/D Gust King Alexander and D/D/D Cursed King Siegfried.</b></p>",
    "swirlC": "<p><h2>Swirl Slime C</h2><h3>Pieces: D/D Swirl Slime, D/D Necro Slime and D/D Savant Copernicus</h3><ol><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon Copernicus, sending D/D Savant Kepler from the deck to the graveyard.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When the first Flame King Genghis triggers, Special Summon Kepler to search Dark Contract with the Swamp King.</li><li>Activate Contract with the Swamp to Fusion Summon Oracle King d'Arc with Copernicus and Kepler.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Lamia from the deck to the graveyard.</li><li>Activate D/D Lamia, sending Contract with the Swamp to the graveyard to Special Summon it.</li><li>Synchro Summon PSY-Framelord Omega with Lamia and d'Arc.</li></ol><b>End on Beatrice, Lady of the Eternal and PSY-Framelord Omega.</b></p>",
    "swirlD": "<p><h2>Swirl Slime D</h2><h3>Pieces: D/D Swirl Slime, D/D Necro Slime and D/D/D Oblivion King Ragnarok</h3><ol><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Swirl Slime from the deck to the graveyard.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon Oblivion King Ragnarok.</li><li>When Oblivion King Ragnarok triggers, Special Summon Flame King Genghis from the graveyard.</li></ol><b>End on Beatrice, Lady of the Eternal, D/D/D Flame King Genghis and D/D/D Oblivion King Ragnarok.</b></p>",
    "swirlE": "<p><h2>Swirl Slime E</h2><h3>Pieces: D/D Swirl Slime, D/D Lamia and Dark Contract with the Gate</h3><ol><li>Activate Dark Contract with the Gate to search D/D Necro Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon D/D Lamia.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Cursed King Siegfried with Lamia and Alexander. When Flame King Genghis triggers, Special Summon Alexander. </li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li></ol><b>End on D/D/D Cursed King Siegfried, D/D/D Flame King Genghis and Crystal Wing Synchro Dragon.</b></p>",
    "swirlF": "<p><h2>Swirl Slime F</h2><h3>Pieces: D/D Swirl Slime, D/D Lamia and D/D Savant Kepler</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, and activate that to search D/D Necro Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon D/D Lamia, then Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it. When Flame King Genghis triggers, Special Summon Alexander.</li><li>Synchro Summon Formula Synchron with Kepler and Lamia, then Cursed King Siegfried with Genghis and Formula.</li></ol><b>End on Crystal Wing Synchro Dragon, D/D/D Cursed King Siegfried and D/D/D Gust King Alexander.</b></p>",
    "swirlG": "<p><h2>Swirl Slime G</h2><h3>Pieces: D/D Swirl Slime, D/D Lamia and D/D Savant Copernicus</h3><ol><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Copernicus and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia.</li><li>When Flame King Genghis triggers, Special Summon Copernicus to send D/D Necro Slime from the deck to the graveyard.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon T.G. Hyper Librarian with Lamia and Copernicus.</li><li>Activate D/D Lamia, sending Flame King Genghis to the graveyard to Special Summon it.</li><li>Synchro Summon PSY-Framelord Omega with Lamia and Alexander.</li></ol><b>End on PSY-Framelord Omega and T.G. Hyper Librarian.</b></p>",
    "swirlH": "<p><h2>Swirl Slime H</h2><h3>Pieces: D/D Swirl Slime, D/D Lamia and D/D/D Oblivion King Ragnarok</h3><ol><li>Activate Oblivion King Ragnarok in the Pendulum Zone.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Lamia and Swirl. When Ragnarok triggers, Special Summon Swirl Slime.</li><li>When Flame King Genghis triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate D/D Lamia, sending Swirl Slime to the graveyard to Special Summon it.</li><li>Synchro Summon Cursed King Siegfried with Lamia and Alexander.</li></ol><b>End on D/D/D Cursed King Siegfried, D/D Swirl Slime, and D/D/D Oblivion King Ragnarok in the Pendulum Zone.</b></p>",
    "swirlI": "<p><h2>Swirl Slime I</h2><h3>Pieces: D/D Swirl Slime, D/D Necro Slime and Dark Contract with the Gate</h3><ol><li>Activate Dark Contract with the Gate to search D/D Lamia.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon D/D Lamia.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Cursed King Siegfried with Lamia and Alexander. When Flame King Genghis triggers, Special Summon Alexander. </li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li></ol><b>End on D/D/D Cursed King Siegfried, D/D/D Flame King Genghis and Crystal Wing Synchro Dragon.</b></p>",
    "swirlJ": "<p><h2>Swirl Slime J</h2><h3>Pieces: D/D Swirl Slime, D/D Savant Kepler and D/D Savant Copernicus</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, and activate that to search D/D Lamia.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Copernicus and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia.</li><li>When Flame King Genghis triggers, Special Summon Copernicus to send D/D Necro Slime from the deck to the graveyard.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Alexander and Lamia.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it.</li><li>Synchro Summon Formula Synchron with Kepler and Lamia, then Cursed King Siegfried with Genghis and Formula.</li></ol><b>End on Crystal Wing Synchro Dragon, D/D/D Cursed King Siegfried and D/D Savant Copernicus.</b></p>",
    "swirlK": "<p><h2>Swirl Slime K</h2><h3>Pieces: D/D Swirl Slime, D/D Savant Kepler and D/D/D Oblivion King Ragnarok</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, and activate that to search D/D Necro Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Kepler and Swirl.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro Slime and the other Genghis.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Lamia from the deck to the graveyard.</li><li>Activate Oblivion King Ragnarok in the Pendulum Zone.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it. When Ragnarok triggers, Special Summon Flame King Genghis.</li><li>Synchro Summon Formula Synchron with Kepler and Lamia, then PSY-Framelord Omega with Genghis and Formula.</li></ol><b>End on Beatrice, Lady of the Eternal, PSY-Framelord Omega and D/D/D Oblivion King Ragnarok in the Pendulum Zone.</b></p>",
    "swirlL": "<p><h2>Swirl Slime L</h2><h3>Pieces: D/D Swirl Slime, D/D Savant Kepler and Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Lamia.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Kepler and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia.</li><li>When Flame King Genghis triggers, Special Summon Kepler to search Dark Contract with the Swamp King.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Contract with the Swamp to Fusion Summon Oracle King d'Arc with Kepler and Genghis. When Alexander triggers, Special Summon Lamia.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it, then Synchro Summon Cursed King Siegfried with d'Arc and Lamia.</li></ol><b>End on D/D/D Cursed King Siegfried, Crystal Wing Synchro Dragon and Dark Contract with the Gate.</b></p>",
    "swirlM": "<p><h2>Swirl Slime M</h2><h3>Pieces: D/D Swirl Slime, D/D Savant Copernicus, D/D/D Oblivion King Ragnarok</h3><ol><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Ragnarok and Swirl.</li><li>Normal Summon Copernicus to send D/D Necro Slime from the deck to the graveyard.</li><li>Activate Necro Slime to Fusion Summon Flame King Genghis with Necro and Swirl. When the first Genghis triggers, Special Summon Oblivion King Ragnarok.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises.</li></ol><b>End on Beatrice, Lady of the Eternal, D/D/D Oblivion King Ragnarok and D/D Savant Copernicus in attack position</b></p>",
    "swirlN": "<p><h2>Swirl Slime N</h2><h3>Pieces: D/D Swirl Slime, D/D Savant Copernicus, Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Lamia.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Copernicus and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia.</li><li>When Genghis triggers, Special Summon Copernicus to send D/D Necro Slime from the deck to the graveyard.</li><li>Synchro Summon Gust King Alexander with Lamia and Genghis.</li><li>Activate Necro Slime to Fusion Summon Oracle King d'Arc with Necro and Genghis. When Alexander triggers, Special Summon Lamia.</li><li>Synchro Summon Crystal Wing Synchro Dragon with Alexander and Lamia.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it, then Synchro Summon Cursed King Siegfried with d'Arc and Lamia.</li></ol><b>End on Crystal Wing Synchro Dragon, D/D/D Cursed King Siegfried and D/D Savant Copernicus.</b></p>",
    "swirlO": "<p><h2>Swirl Slime O</h2><h3>Pieces: D/D Swirl Slime, D/D/D Oblivion King Ragnarok and Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Savant Kepler.</li><li>Normal Summon Kepler to search Dark Contract with the Swamp King.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Ragnarok and Swirl.</li><li>Activate Contract with the Swamp to Fusion Summon Oracle King d'Arc with Kepler and Swirl. When Ragnarok triggers, Special Summon Genghis.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Necro Slime from the deck to the graveyard.</li><li>Activate Necro Slime to Fusion Summon Dragonbane King Beowulf with Necro and Genghis, then Xyz Summon Hope Harbinger Dragon with Beowulf and Ragnarok.</li></ol><b>End on Beatrice, Lady of the Eternal, D/D/D Dragonbane King Beowulf, Dark Contract with the Gate and Dark Contract with the Swamp King.</b></p>",
    "necroA": "<p><h2>Necro Slime A</h2><h3>Pieces: D/D Necro Slime, D/D Lamia and D/D Savant Kepler</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, then activate it to search D/D Swirl Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon D/D Lamia, then Synchro Summon Gust King Alexander with Genghis and Lamia.</li><li>Activate Necro Slime to Fusion Summon a second Flame King Genghis with Necro and the other Genghis.</li><li>When Gust King Alexander triggers, Special Summon D/D Lamia, then Synchro Summon Crystal Wing Synchro Dragon with Lamia and Alexander.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it. When Flame King Genghis triggers, Special Summon Gust King Alexander.</li><li>Synchro Summon Formula Synchron with Kepler and Lamia, then Cursed King Siegfried with Genghis and Formula.</li></ol><b>End on Crystal Wing Synchro Dragon, D/D/D Cursed King Siegfried and D/D/D Gust King Alexander.</b></p>",
    "necroB": "<p><h2>Necro Slime B</h2><h3>Pieces: D/D Necro Slime, D/D Lamia and D/D Savant Copernicus</h3><ol><li>Activate D/D Lamia, sending Copernicus to the graveyard to Special Summon it.</li><li>Normal Summon Necro Slime, then Synchro Summon Formula Synchron with Necro and Lamia.</li><li>Activate Necro Slime to Fusion Summon Flame King Genghis with Necro and Copernicus, then Synchro Summon PSY-Framelord Omega with Formula and Genghis.</li></ol><b>End on PSY-Framelord Omega.</b></p>",
    "necroC": "<p><h2>Necro Slime C</h2><h3>Pieces: D/D Necro Slime, D/D Savant Kepler and D/D Savant Copernicus</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, then activate it to search D/D Swirl Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon Copernicus to send D/D Lamia from the deck to the graveyard.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it.</li><li>Synchro Summon Formula Synchron with Lamia and Kepler, then PSY-Framelord Omega with Formula and Genghis.</li><li>Activate Necro Slime to Fusion Summon Dragonbane King Beowulf with Necro and Genghis.</li></ol><b>End on PSY-Framelord Omega and D/D/D Dragonbane King Beowulf.</b></p>",
    "necroD": "<p><h2>Necro Slime D</h2><h3>Pieces: D/D Necro Slime, D/D Savant Kepler and D/D/D Oblivion King Ragnarok</h3><ol><li>Normal Summon Kepler to search Dark Contract with the Gate, then activate it to search D/D Swirl Slime.</li><li>Activate Oblivion King Ragnarok in the Pendulum Zone.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Necro Slime to Fusion Summon another Flame King Genghis with Swirl and Necro.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Lamia from the deck to the graveyard.</li><li>Activate D/D Lamia, sending Contract with the Gate to the graveyard to Special Summon it. When Ragnarok triggers, Special Summon Flame King Genghis.</li><li>Synchro Summon Formula Synchron with Lamia and Kepler, then PSY-Framelord Omega with Formula and Genghis.</li></ol><b>End on Beatrice, Lady of the Eternal, PSY-Framelord Omega, and D/D/D Oblivion King Ragnarok in the Pendulum Zone.</b></p>",
    "necroE": "<p><h2>Necro Slime E</h2><h3>Pieces: D/D Necro Slime, D/D Savant Kepler and Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Swirl Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon Kepler.</li><li>Kepler and Genghis will both trigger. Search Dark Contract with the Swamp King and Special Summon Necro Slime.</li><li>Activate Contract with the Swamp to Fusion Summon another Genghis with Kepler and Necro.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Lamia from the deck to the graveyard.</li><li>Activate D/D Lamia, sending Contract with the Swamp to the graveyard to Special Summon it.</li><li>Activate Necro Slime to Fusion Summon Oracle King d'Arc with Necro and Genghis, then Synchro Summon PSY-Framelord Omega with Lamia and d'Arc.</li></ol><b>End on Beatrice, Lady of the Eternal, PSY-Framelord Omega and Dark Contract with the Gate.</b></p>",
    "necroF": "<p><h2>Necro Slime F</h2><h3>Pieces: D/D Necro Slime, D/D Savant Copernicus and Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Swirl Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Normal Summon Copernicus to send D/D Savant Kepler from the deck to the graveyard.</li><li>Activate Necro Slime to Fusion Summon another Flame King Genghis with Swirl and Necro.</li><li>When the first Genghis triggers, Special Summon Kepler to search Dark Contract with the Swamp King.</li><li>Activate Contract with the Swamp to Fusion Summon Oracle King d'Arc with Kepler and Copernicus.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Lamia from the deck to the graveyard.</li><li>Activate D/D Lamia, sending Contract with the Swamp to the graveyard to Special Summon it, then Synchro Summon PSY-Framelord Omega with d'Arc and Lamia.</li></ol><b>End on Beatrice, Lady of the Eternal, PSY-Framelord Omega and Dark Contract with the Gate.</b></p>",
    "necroG": "<p><h2>Necro Slime G</h2><h3>Pieces: D/D Swirl Slime, D/D/D Oblivion King Ragnarok and Dark Contract with the Gate</h3><ol><li>Activate Contract with the Gate to search D/D Necro Slime.</li><li>Activate Swirl Slime to Fusion Summon Flame King Genghis with Necro and Swirl.</li><li>Activate Necro Slime to Fusion Summon another Flame King Genghis with Swirl and Necro.</li><li>Xyz Summon Beatrice, Lady of the Eternal with both Genghises, then activate her effect to send D/D Swirl Slime from the deck to the graveyard.</li><li>Activate Swirl Slime, banishing it from the graveyard to Special Summon Oblivion King Ragnarok. When it triggers, Special Summon Genghis.</li></ol><b>End on Beatrice, Lady of the Eternal, D/D/D Oblivion King Ragnarok, D/D/D Flame King Genghis and Dark Contract with the Gate.</b></p>",
    "lamiaA": "<p><h2>Lamia A. Lamia, Keplar, Copper</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro formula (Lamia + Keplar) => Synchro Siegfried (Formula + Genghis)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Crystal (Alex + Lamia)</li></ol><b>Final (Crystal + Siegfried + Copper + 1 Draw)</b></p>",
    "lamiaB": "<p><h2>Lamia B. Lamia, Keplar, Ragnarok</h2><ol><li>NS Keplar => Search Gate Via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>SS Lamia via Swirl (Grave) => SS Ragnarok (Grave) Via Genghis</li><li>Synchro Formula (Lamia + Keplar) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Omega + Ragnarok + 1 Draw + Gate)</b></p>",
    "lamiaC": "<p><h2>Lamia C. Lamia, Keplar, Gate</h2><ol><li>Search Swirl Via Gate</li><li>Fusion Genghis (Keplar + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Keplar (Grave) Via Genghis => Search Swamp Via Keplar</li><li>Synchro Alex (Genghis + Lamia)</li><li>Fusion d'Arc Via Swamp (Keplar [Field] + Genghis [Grave]) => SS Lamia (Grave) Via Alex</li><li>Sycnrho Crystal (Lamia + Alex) => Destroy Swamp Via SS Lamia (Grave) => Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Crystal Wing + Siegfried + Gate)</b></p>",
    "lamiaD": "<p><h2>Lamia D. Lamia, Copper, Ragnarok</h2><ol><li>NS Copper => Mill Necro</li><li>Destroy Ragnarok (Hand) Via SS Lamia (Hand)</li><li>Fusion d'Arc (Necro in Grave + Ragnarok in Grave)</li><li>Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Copper [ATK] + Omega)</b></p>",
    "lamiaE": "<p><h2>Lamia E. Lamia, Copper, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Lamia + Genghis)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alex + Lamia) => Destroy Gate via SS Lamia =>  Synchro Sieg (Lamia + d'Arc)</li></ol><b>Final (Sieg + Crystal + Copper)</b></p>",
    "lamiaF": "<p><h2>Lamia F. Lamia, Ragnarok, Gate</h2><ol><li>Search Swirl via Gate</li><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Lamia + Swirl) => SS Swirl (Grave) Via Ragnarok => SS Lamia (Grave) Via Genghis</li><li>Synchro Alex (Genghis + Lamia) => Destroy Swirl Via SS Lamia (Grave) => SS Swirl (Grave) Via Alex</li><li>Sycnrho Siegfried (Alex + Lamia)</li></ol><b>Final (Ragnarok [Pend Zone] + Siegfried + Gate + Swirl)</b></p>",
    "kepcopA": "<p><h2>Kepler and Copper A. Keplar, Copper, Ragnarok</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>SS Copper via Swirl (Grave) => CHAIN!!! (Mill Lamia/SS Ragnarok [Grave] Via Genghis)</li><li>Destroy Gate via SS Lamia (Grave)</li><li>Synchro Formula (Lamia + Keplar) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Ragnarok + Omega + Copper + 1 Draw)</b></p>",
    "kepcopB": "<p><h2>Kepler and Copper B. Keplar, Copper, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Keplar via Swirl (Grave) => CHAIN!!! (Search Swamp via Keplar/SS Copper (Grave) Via Genghis) => Mill Lamia</li><li>Fusion Genghis Via Swamp (Keplar [Field] + Copper [Field])</li><li>Xyz Beatrice (2 Genghis) => Mill Necro</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => Destroy Swamp via SS Lamia (Grave) => Synchro Omega (d'aRc + Lamia)</li></ol><b>Final (Omega + Beatrice + Gate)</b></p>",
    "kepcopC": "<p><h2>Kepler and Copper C. Keplar, Ragnarok, Gate</h2><ol><li>Search Swirl via Gate</li><li>NS Keplar => Search Swamp via Keplar</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>Fusion Genghis via Swamp (Keplar [Field] + Swirl [Grave]) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Necro</li><li>Fusion Beowulf (Necro in Grave + Genghis in Grave) => Xyz Harbinger (Beowulf + Ragnarok)</li></ol><b>Final (Harbinger + Beatrice + Swamp + Gate)</b></p>",
    "kepcopD": "<p><h2>Keplar and Copper D. Copper, Ragnarok, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>NS Copper => Mill Necro</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Ragnarok (Grave) via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Something</li></ol><b>Final (Ragnarok + Copper [ATK] + Beatrice [Something] + Gate)</b></p>",
    "ragnaA": "<p><h2>Ragnarok A. Keplar, Pieces 3/4 (Lamia/Copper/Ragnarok/Swirl)</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Pieces via Gate</li><li>Fusion Genghis (Lamia + Swirl)</li><li>SS Copper via Swirl (Grave) => CHAIN!!! (Mill Necro/SS Lamia (Grave) Via Genghis)</li><li>Pend Zone Ragnarok</li><li>Synchro Alex (Genghis + Lamia) => SS Lamia (grave) Via Ragnarok</li><li>Synchro Librarian (Lamia + Copper)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alex</li><li>Synchro Crystal (Alex + Lamia)</li><li>Destroy Gate via SS Lamia (Grave)</li><li> Sycnhro Formula (Lamia + Keplar) => Synchro Siegfried (Genghis + Formula)</li></ol><b>Final (Ragnarok [Pend Zone] + Crystal Wing + Siegfried + Librarian + 4 Draw)</b></p>",
    "ragnaB": "<p><h2>Ragnarok B. Gate, Pieces 3/4 (Lamia/Keplar/Swirl/Ragnarok)</h2><ol><li>Search Pieces via Gate</li><li>Fusion Genghis (Swirl + Keplar)</li><li>NS Lamia => Synchro Alex (Lamia + Genghis)</li><li>SS Ragnarok via Swirl (Grave) => CHAIN!!! (SS Genghis [Grave] Via Ragnarok/SS Lamia [Grave] Via Alex) => SS      Keplar (Grave) Via Genghis => Search Swamp Via Keplar</li><li>Synchro Crystal (Alex + Lamia)</li><li>Destroy Gate via SS Lamia (Grave)</li><li>Synchro Formula (Lamia + Keplar) => Synchro Siegfried (Genghis + Formula)</li><li>Fusion Beowulf Via Swamp (Alex [Grave] + Genghis [Grave]) => Xyz Harbinger (Beowulf + Ragnarok)</li></ol><b>Final (Harbinger + Crystal Wing + Siegfried + 1 Draw + Swamp)</b></p>",
    "ragnaC": "<p><h2>Ragnarok C. Keplar, Pieces 3/4 (Lamia/Necro/Ragnarok/Swirl)</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Pieces via Gate</li><li>Fusion Genghis (Swirl + Necro)</li><li>SS Lamia Via Swirl (Grave) [Don't Activate Genghis Effect[</li><li>Pend Zone Ragnarok</li><li>Synchro Alex (Lamia + Genghis) => SS Genghis (Grave) Via Ragnarok => SS Lamia (Grave) Via Alex</li><li>Synchro Crystal (Alex + Lamia)</li><li>Fusion d'Arc (Necro in Grave + Alex in Grave) => SS Lamia (grave) via Genghis</li><li>Synchro Formula (Lamia + Keplar) => Synchro Siegfried (Formula + Genghis)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Omega (d'ARc + Lamia)</li></ol><b>Final (Ragnarok [Pend Zone] + Crystal Wing + Siegfried + Omega)</b></p>",
    "thomasA": "<p><h2>Thomas A. Gate, Pieces 4/5 (Swirl/Lamia/Copper/Ragnarok/Thomas)</h2><ol><li>Search Pieces via Gate</li><li>NS Copper => Mill Keplar</li><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Thomas + Swirl) => SS Thomas (Grave) via Ragnarok => SS Keplar (Grave) Via Genghis => Search      Swamp Via Keplar</li><li>SS Lamia via Swirl (Grave)</li><li>Synchro Alex (Genghis + Lamia)</li><li>Fusion d'Arc via Swamp (Keplar [Field] + Copper [Field]) => SS Lamia (Grave) Via Alex </li><li>Synchor Crystal (Alex + Lamia)</li><li>Destroy Swamp via SS Lamia (Grave) </li><li>Synchro Siegfried (Lamia + d'arc)</li><li> Destroy Ragnarok (Pend Zone) via Thomas to SS Lv 8 D/D/D => Xyz Harbinger (Thomas + Ragnarok)</li></ol><b>Final (Crystal Wing + Siegfried + Harbinger + Gate)</b></p>",
    "thomasB": "<p><h2>Thomas B. Gate, 4/5 Pieces (Lamia/Swirl/Ragnarok/Thomas/Copper) [Alt. Route]</h2><ol><li>Search Piece via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>NS Lamia => Synchro Alex (Lamia + Genghis)</li><li>Pend Zone Ragnarok</li><li>SS Thomas via Swirl (Grave) => SS Copper (Grave) Via Ragnarok => Mill Necro</li><li>Destroy Ragnarok [Pend Zone] via Thomas to SS Lv 8 D/D/D => SS Lamia (Grave) Via Alex</li><li>Synchro Crystal (Lamia + Alex)</li><li>Xyz Harbinger (Lv 8 D/D/D + Thomas)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave)</li><li> Destroy Gate via SS Lamia (Grave)</li><li> Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Siegfried + Harbinger + Crystal Wing + Copper)</b></p>",
    "thomasC": "<p><h2>Thomas C. Keplar, Swirl, Lamia, Ragnarok</h2><ol><li>Fusion Genghis (Swirl + Keplar)</li><li>Pend Zone Ragnarok</li><li>NS Lamia => Synchro Alex (Lamia + Genghis) => SS Genghis (Grave) via Ragnarok => SS Lamia (Grave) Via Alex => </li><li>SS Keplar (Grave) Via Genghis => Search Gate</li><li>Search Thomas via Gate</li><li>Synchro Crystal (Alex + Lamia)</li><li>Destroy Gate via SS Lamia (Grave)</li><li>Synchro Formula (Keplar + Lamia) => Synchro Siegfried (Genghis + Formula)</li><li>SS Thomas via Swirl (Grave) => Destroy Ragnarok Via Thomas to Summon Lv 8 D/D/D => Xyz Harbinger (Thomas + Lv 8      D/D/D)</li></ol><b>Final (Siegfried + Crystal Wing + Harbinger + 1 Draw)</b></p>"
};
const swirl = "D/D Swirl Slime";
const necro = "D/D Necro Slime";
const lamia = "D/D Lamia";
const kepler = "D/D Savant Kepler";
const coper = "D/D Savant Copernicus";
const ragna = "D/D/D Oblivion King Abyss Ragnarok";
const gate = "Dark Contract With The Gate";
const thomas = "D/D Savant Thomas";
const simpleReqs = {
    "swirlA": [swirl, necro, lamia],
    "swirlB": [swirl, necro, kepler],
    "swirlC": [swirl, necro, coper],
    "swirlD": [swirl, necro, ragna],
    "swirlE": [swirl, lamia, gate],
    "swirlF": [swirl, lamia, kepler],
    "swirlG": [swirl, lamia, coper],
    "swirlH": [swirl, lamia, ragna],
    "swirlI": [swirl, necro, gate],
    "swirlJ": [swirl, kepler, coper],
    "swirlK": [swirl, kepler, ragna],
    "swirlL": [swirl, kepler, gate],
    "swirlM": [swirl, coper, ragna],
    "swirlN": [swirl, coper, gate],
    "swirlO": [swirl, ragna, gate],
    "necroA": [necro, lamia, kepler],
    "necroB": [necro, lamia, coper],
    "necroC": [necro, kepler, coper],
    "necroD": [necro, kepler, ragna],
    "necroE": [necro, kepler, gate],
    "necroF": [necro, coper, gate],
    "necroG": [swirl, ragna, gate],
    "lamiaA": [lamia, kepler, coper],
    "lamiaB": [lamia, kepler, ragna],
    "lamiaC": [lamia, kepler, gate],
    "lamiaD": [lamia, coper, ragna],
    "lamiaE": [lamia, coper, gate],
    "lamiaF": [lamia, ragna, gate],
    "kepcopA": [kepler, coper, ragna],
    "kepcopB": [kepler, coper, gate],
    "kepcopC": [kepler, ragna, gate],
    "kepcopD": [coper, ragna, gate],
    "thomasC": [kepler, swirl, lamia, ragna]
};
const compoundReqs = {
    "ragnaA": [kepler, [lamia, coper, ragna, swirl]],
    "ragnaB": [gate, [lamia, kepler, ragna, swirl]],
    "ragnaC": [kepler, [lamia, necro, ragna, swirl]],
    "thomasA": [gate, [swirl, lamia, coper, ragna, thomas]],
    "thomasB": [gate, [swirl, lamia, coper, ragna, thomas]]
};
const c1 = document.getElementById("card1");
const c2 = document.getElementById("card2");
const c3 = document.getElementById("card3");
const c4 = document.getElementById("card4");
const c5 = document.getElementById("card5");
const output = document.getElementById("out");
c1.addEventListener("change", function() {
    search();
});
c2.addEventListener("change", function() {
    search();
});
c3.addEventListener("change", function() {
    search();
});
c4.addEventListener("change", function() {
    search();
});
c5.addEventListener("change", function() {
    search();
});
let card1 = "";
let card2 = "";
let card3 = "";
let card4 = "";
let card5 = "";
let hand = [];
let combos = [];
let out = "";

function search() {
    card1 = c1.value;
    card2 = c2.value;
    card3 = c3.value;
    card4 = c4.value;
    card5 = c5.value;
    hand = [card1, card2, card3, card4, card5];
    combos = [];
    out = "";
    for (let key in simpleReqs) {
        if (simpleReqs.hasOwnProperty(key)) {
            let boo = true;
            for (let card of simpleReqs[key]) {
                if (!hand.includes(card)) {
                    boo = false;
                }
            }
            if (boo) {
                combos.push(key);
            }
        }
    }
    for (let key in compoundReqs) {
        if (compoundReqs.hasOwnProperty(key)) {
            let count = 0;
            for (let card of compoundReqs[key][1]) {
                if (hand.includes(card)) {
                    count++;
                }
            }
            if ((count >= (compoundReqs[key][1].length - 1)) && hand.includes(compoundReqs[key][0])) {
                combos.push(key);
            }
        }
    }
    for (let com of combos) {
        out += guides[com];
    }
    if (out.length === 0) {
        out = "No combos found! Try again with another hand.";
    }
    output.innerHTML = out;
}

function unhide(id) {
	console.log("unhiding " + id);
    document.getElementById(id).style.display = "unset";
}
window.addEventListener("load", function() {
    search();
    console.log("loaded ver. hide unfuck");
});

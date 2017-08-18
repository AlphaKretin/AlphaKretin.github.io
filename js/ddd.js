const guides = {
    "swirlA": "<p><h2>Swirl A. Swirl, Necro, Lamia</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander(Grave) Via Genghis </li><li>Destroy Genghis to SS Lamia (Grave)</li><li>Synchro Crystal Wing (Lamia + Alexander)</li></ol><b>Final (Siegfried + Crystal Wing)</b></p>",
    "swirlB": "<p><h2>Swirl B. Swirl, Necro, Kepler</h2><ol><li>NS Kepler Search Gate => Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia Via Swirl (Grave)</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Crystal Wing (Lamia + Alexander)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) via Genghis</li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Genghis + Formula)</li></ol><b>Final (Crystal Wing + Alexander + Siegfried)</b></p>",
    "swirlC": "<p><h2>Swirl C. Swirl, Necro, Copper</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Kepler</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => ss Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Fusion d'Arc via Swamp (Copper + Kepler in Field)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Destroy Swamp to SS Lamia (Grave) => Synchro Omega (Lamia + d'Arc)</li></ol><b>Final (Omega + Beatrice)</b></p>",
    "swirlD": "<p><h2>Swirl D. Swirl, Necro, Ragnarok</h2><ol><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => Xyz Beatrice (2 Genghis) => Mill Swirl (Via Detach Genghis)</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) via Ragnarok</li></ol><b>Final (Beatrice + Genghis + Ragnarok)</b></p>",
    "swirlE": "<p><h2>Swirl E. Swirl, Lamia, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlF": "<p><h2>Swirl F. Swirl, Lamia, Kepler</h2><ol><li>NS Kepler => Search Gate via Kepler => Necro</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia via Swirl (Grave) => Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander </li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) Via Genghis </li><li>Synchro Formula (Kepler + Lamia) => Synchro Siegfried (Formula + Genghis)</li></ol><b>Final (Crystal Wing + Siegfried + Alexander + 1 Draw)</b></p>",
    "swirlG": "<p><h2>Swirl G. Swirl, Lamia, Copper</h2><ol><li>Fusion Genghis (Swirl + Copper)</li><li>SS Lamia via Swirl (Grave)'=> SS Copper (Grave) via Genghis => Mill Necro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Librarian</li><li>Destroy Genghis via SS Lamia (Grave)</li><li>Synchro Omega (Alexander + Lamia)</li></ol><b>Final (Omega + Librarian + 1 Draw)</b></p>",
    "swirlH": "<p><h2>Swirl H. Swirl, Lamia, Ragnarok</h2><ol><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Lamia + Swirl) => SS Swirl (Grave) Via Ragnarok => SS Lamia (Grave) Via Genghis</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Destroy Swirl via SS Lamia (Grave) => SS Swirl (Grave) Via Alexander</li><li>Synchro Siegfried (Alexander + Lamia</li></ol><b>Final (Siegfried + Swirl + Ragnarok [Pend Zone])</b></p>",
    "swirlI": "<p><h2>Swirl I.(& E) Swirl, Necro, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Lamia => Synchro Alexander (Lamia + Genghis)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Lamia (Grave) via Alexander</li><li>Synchro Siegfried (Lamia + Alexander) => SS Alexander (Grave) via Genghis</li><li>Destroy Gate to SS Lamia (Grave) => Synchro Crystal (Lamia + Alexander)</li></ol><b>Final (Genghis + Siegfried + Crystal)</b></p>",
    "swirlJ": "<p><h2>Swirl J. Swirl, Kepler, Copper</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Lamia Via Gate</li><li>Fusion Genghis => (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) via Genghis => Mill NEcro</li><li>Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate via SS Lamia (Grave) => Synchro Formula (Lamia + Kepler) => Synchro Siegfried</li></ol><b>Final (Copper + Crystal Wing + Siegfried + 1 Draw)</b></p>",
    "swirlK": "<p><h2>Swirl K. Swirl, Kepler, Ragnarok</h2><ol><li>NS Kepler => Search Gate via Kepler => Search Necro Via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave)</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia (Via Detach Genghis)</li><li>Pend Zone Ragnarok</li><li>Destroy Gate Via SS Lamia (Grave) => SS Genghis (Grave) Via Ragnarok</li><li>Synchro Formula (Lamia + Kepler) => Synchro Omega (Genghis + Formula)</li></ol><b>Final (Ragnarok [Pend Zone] + Beatrice + Omega + 1 Draw)</b></p>",
    "swirlL": "<p><h2>Swirl L. Swirl, Kepler, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Swirl + Kepler)</li><li>SS Lamia Via Swirl (Grave) => SS Kepler (Grave) via Genghis => Search Swamp Via Kepler</li><li>Synchro Alexander (Lamia + Genghis)</li><li>Fusion d'Arc via Swamp (Kepler + Genghis [Grave]) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Lamia + Alexander) => Destroy Swamp Via SS Lamia (Grave) => Synchro Siegfried (d'ARc + Lamia)</li></ol><b>Final (Siegfried + Crystal Wing + Gate)</b></p>",
    "swirlM": "<p><h2>Swirl M. Swirl, Copper, Ragnarok</h2><ol><li>Fusion Genghis (Swirl + Ragnarok)</li><li>NS Copper => Mill Necro</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Something</li></ol><b>Final (Ragnarok + Copper [ATK] + Beatrice [Later Mill] )</b></p>",
    "swirlN": "<p><h2>Swirl N. Swirl, Copper, Gate</h2><ol><li>Search Lamia via Gate</li><li>Fusion Genghis (Copper + Swirl)</li><li>SS Lamia via Swirl (Grave) => SS Copper (Grave) Via Genghis => Mill Necro</li><li>Synchro Alex (Lamia + Genghis)</li><li>Fusion d'Arc (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) Via Alexander</li><li>Synchro Crystal (Alex + Lamia) => Destroy Gate via SS Lamia =>  Synchro Sieg (Lamia + d'Arc)</li></ol><b>Final (Sieg + Crystal + Copper)</b></p>",
    "swirlO": "<p><h2>Swirl O. Swirl, Ragnarok, Gate</h2><ol><li>Search Kepler Via Gate</li><li>NS Kepler => Search Swamp via Kepler</li><li>Fusion Genghis (Swirl + Ragnarok)</li><li>Fusion Genghis via Swamp (Kepler [Field] + Swirl [Grave]) => SS Ragnarok (Grave) Via Genghis</li><li>Xyz Beatrice (2 Genghis) => Mill Necro via Beatrice</li><li>Fusion Beowulf (Genghis in Grave + Necro in Grave) => Xyz Harbinger (Beowulf + Ragnarok)</li></ol><b>Final (Swamp + Gate + Beatrice + Harbinger)</b></p>",
    "necroA": "<p><h2>Necro A. Necro, Lamia, Keplar</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Lamia via Swirl (Grave) => Synchro Alexander (Genghis + Lamia)</li><li>Fusion Genghis (Necro in Grave + Genghis in Grave) => SS Lamia (Grave) via Alexander </li><li>Synchro Crystal (Alexander + Lamia)</li><li>Destroy Gate to SS Lamia (Grave) => SS Alexander (Grave) Via Genghis </li><li>Synchro Formula (Keplar + Lamia) => Synchro Siegfried (Formula + Genghis)</li></ol><b>Final (Crystal Wing + Siegfried + Alexander + 1 Draw)</b></p>",
    "necroB": "<p><h2>Necro B. Necro, Lamia, Copper</h2><ol><li>Destroy Copper [Hand] Via SS Lamia [Hand]</li><li>NS Necro => Formula Synchro (Necro + Lamia)</li><li>Fusion Genghis (Copper in Grave + Necro in Grave) => Synchro Omega (Formula + Genghis)</li></ol><b>Final (Omega + 1 Draw)</b></p>",
    "necroC": "<p><h2>Necro C. Necro, Keplar, Copper</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Copper via Swirl (Grave) => Mill Lamia (Don't Activate Genghis)</li><li>Destroy Gate vua SS Lamia (Grave) => Synchro Formula (Lamia + Keplar) => Synchro Omega (Genghis + Formula)</li><li>Fusion Beowulf (Necro + Genghis) [Bonus]</li></ol><b>Final (Omega + 1 Draw + Beowulf [Bonus])</b></p>",
    "necroD": "<p><h2>Necro D. Necro, Keplar, Ragnarok</h2><ol><li>NS Keplar => Search Gate via Keplar => Search Swirl via Gate</li><li>Pend Zone Ragnarok</li><li>Fusion Genghis (Swirl + Necro)</li><li>fusion Genghis (Swirl in Grave + NEcro in Grave)</li><li>Xyz Beatricce (2 Gennghis) => Mill Lamia</li><li>Destroy Gate via SS Lamia (Grave) => SS Genghis (Grave) via Ragnarok [Pend Zone]</li><li>Synchro Formula (Lamia + Keplar) => Synchro Omega (Formula + Ragnarok)</li></ol><b>Final (Beatrice + Omega + Ragnarok [Pend Zone] + 1 Draw)</b></p>",
    "necroE": "<p><h2>Necro E. Necro, Keplar, Gate</h2><ol><li>Search Swirl Via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>SS Keplar via Swirl (Grave) => Chain!!![SS Necro (Grave) Via Genghis/Search Swamp via Keplar]</li><li>Fusion Genghis via Swamp (Keplar [Field] + Necro [Field])</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia</li><li>Destroy Swamp via SS Lamia (Grave) => Fusion d'Arc (Necro + Genghis) => Synchro Omega (Lamia + d'ARc)</li></ol><b>Final (Omega + Beatrice + Gate)</b></p>",
    "necroF": "<p><h2>Necro F. Necro, Copper, Gate</h2><ol><li>Search Swirl via Gate</li><li>Fusion Genghis (Necro + Swirl)</li><li>NS Copper => Mill Keplar</li><li>Fusion Genghis (Necro in Grave + Swirl in Grave) => SS Keplar (Grave) Via Genghis => Search Swamp via Keplar</li><li>Fusion d'Arc via Swamp (Keplar [Field] + Copper [Field])</li><li>Xyz Beatrice (2 Genghis) => Mill Lamia</li><li>Destroy Swamp via SS Lamia (Grave) => Synchro Omega (d'ARc + Lamia)</li></ol><b>Final (Omega + Beatrice + Gate)</b></p>",
    "necroG": "<p><h2>Necro G. Swirl, Ragnar, Gate</h2><ol><li>Search Necro via Gate</li><li>Fusion Genghis (Swirl + Necro)</li><li>Fusion Genghis (NEcro in Grave + Swirl in Grave)</li><li>Beatrice (2 Genghis) => Mill Swirl</li><li>SS Ragnarok via Swirl (Grave) => SS Genghis (Grave) Via Ragnarok</li></ol><b>Final (Ragnarok + Beatrice + Genghis + Gate)</b></p>",
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
window.addEventListener("load", function() {
    search();
    console.log("loaded ver. test final");
});

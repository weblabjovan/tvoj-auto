import PostMap from '../interface/posts';

const posts: PostMap = {
  golf_5_kako_upaliti_klimu: {
    id: 1,
    name: "GOLF 5: KAKO UPALITI KLIMU?",
    urlName: "golf_5_kako_upaliti_klimu",
    dateString: "28 Avg 2020",
    date: new Date('2020/08/28'),
    mainPhotos: { mediumPath: "/posts/id_1_img_1.jpg", smallPath: "/small-side.jpg"},
    model: { maker: "Volkswagen", name: "Golf 5", fullName: "Golf mk5", country: "Nemačka", yearFrom: 2003, yearTo: 2008 },
    author: { firstName: "Zvonko", lastName: "Stamatović", photoPath: "/jovan-img.jpg", description:"Dugogodišnji vozač i zaljubljenik u nemačku automobilsku industriju. 'Sve je lakše kada vozite nemački auto' "},
    related: [],
    popular: true,
    description: "Paljenje klime u Golfu 5 bi trebalo da bude jako jednostavan proces. Bez obzira da li vozite auto sa automatksom ili manuelnom klimom, njeno paljenje bi trebalo da bude gotovo u par koraka, za svega nekoliko sekundi.",
    structure: [
      {type: "photo-element", src: "/posts/id_1_img_1.jpg", alt: "golf-5-klima", title: "Golf 5 automatska klima", explanation: "Automatska klima u Golfu 5"},
      {type: "simple-paragraph", text: "Da li se vama kao i meni dogodilo da po vrelom danu uđete u auto, u kome je temperatura još veća nego napolju, okrenete ključ, pokušate da namestite klimu kako bi rashladili auto ali ona nikako da proradi? Bar da se tako nešto dogodi onda kada nije tolika vrućina... I dok razmišljate šta bi mogao da bude problem, pripremate za povratak u 80-te. Da, spušteni prozori. malo jači gas i blaga promaja koja će vas rashladiti.  Ako vam, kao i meni, promaja nije dovoljno dobro rešenje skrolujte i pročitajte ovaj članak."},
      {type: "content-table", list: [{text: "Regularno paljenje klime", href: "#id_section_1"}, {text: "Razlika između automatske i manuelne klime", href: "#id_section_2"}, {text: "Sistem dvojnog/dualnog hlađenja", href: "#id_section_3"}, {text: "Objašnjenje kontrola automatske klime u Golfu 5", href: "#id_section_4"}, {text: "Šta je ECON i kada ga koristiti?", href: "#id_section_5"}, {text: "Test provere ispravnost klime", href: "#id_section_6"}, {text: "Preporuke za korišćenje klime", href: "#id_section_7"}, {text: "Osnovno održavanje klime", href: "#id_section_8"}, {text: "Najčešći problemi sa klimom", href: "#id_section_9"}]},
      
      {type: "simple-headline", id:"id_section_1", headline: "Regularno paljenje klime"},
      {type: "simple-paragraph", text: "Paljenje klime u Golfu 5 bi trebalo da bude jako jednostavan proces.  Bez obzira da li vozite auto sa automatksom ili manuelnom klimom, njeno paljenje bi trebalo da bude gotovo u par koraka, za svega nekoliko sekundi."},
      {type: "numbered-list", headline:"U slučaju da vaš Golf ima automatsku klimu, potrebno je samo da:", list: [{text: "napravite kontakt kako bi auto dobio pristup struji potrebnoj za aktiviranje klime"}, {text: "pritisnete DUAL (donje) dugme na srednjem točkiću, kako bi obezbedili istu temperaturu na obe strane vozila"}, {text: "okrenete prvi točkić sa vaše (vozačeve) strane, kako bi namestili dovoljno nisku (ili visoku) temperaturu"}, {text: "okrenete srednji točkić koji reguliše intenzitet, kako bi pojačali ili  smanjili intenzitet duvanja vazduha"}, {text: "pritisnete jedno od dugmića iznad srednjeg točkića, kako bi odabrali pravac iz kog želite klima da duva"}]},
      {type: "numbered-list", headline:"U slučaju da vaš Golf ima manuelnu klimu, potrebno je samo da", list: [{text: "napravite kontakt kako bi auto dobio pristup struji potrebnoj za aktiviranje klime"}, {text: "pritisnete AC dugme iznad srednjeg točkića, kako bi upalili klimu"}, {text: "okrenete prvi točkić sa vaše (vozačeve) strane skroz u levo, kako bi obezbedili duvanje hladnog vazduha"}, {text: "okrenete srednji točkić koji reguliše intenzitet, kako bi pojačali ili smanjili intenzitet duvanja vazduha"}, {text: "okrenete treći točkić sa vaše (vozačeve) strane, kako bi odabrali pravac iz kog želite klima da duva"}]},

      {type: "simple-headline", id:"id_section_2", headline: "Razlika između automatske i manuelne klime"},
      {type: "simple-paragraph", text: "Glavna razlika između ove dve klime je u načinu regulacije temperature u vozilu. Manuelna klima izduvava vazduh određene temperature i oslanja se na vozača i suvozača da regulišu temperaturu u vozilu. Ukoliko oni osećaju da je u autu hladnije, smanjiće temperaturu ili intenzitet duvanja klime. Dok kod automatske klime temperaturu određuje vozač ili suvozač a reguliše kompjuter automobila. Vozač odredi temperaturu koju želi u vozilu a kompjuter, koristeći senzore u vozilu, osigurava  takvu temperaturu automatskim (bez učešća vozača ili suvozača) povećavanjem ili smanjivanjem intenziteta duvanja klime i temperature izduvanog vazduha."},
      {type: "simple-paragraph", text: "Takođe, automatska klima dozvoljava preciznije podešavanje temperature do nivoa pola celzijusovog stepena. Na primer, vozač automobila sa automatskom klimom može da podesi da temperatura u vozilu bude 22.5 C, dok vozač čiji automobil ima manuelnu klimu koristi točkić koji nije u stanju da toliko precizno postavi temperaturu."},
      {type: "photo-element", src: "/posts/id_1_img_2.jpg", alt: "golf-5-klima", title: "Golf 5 manuelna klima", explanation: "Manuelna klima u Golfu 5"},

      {type: "simple-headline", id:"id_section_3", headline: "Sistem dvojnog/dualnog hlađenja"},
      {type: "simple-paragraph", text: "Sistem dvojnog/dualnog hlađenja (Dual Zone Climate Control) je tip automatske klime koji omogućava nezavisno određivanje temperature za levu i desnu stranu vozila. Vozač može podesiti temperaturu svog dela unutrašnjosti vozila na 21C, dok suvozač može podesiti drugačiju temperaturu npr 25C. Na taj način su u jednom vozilu prisutne dve klimatske zone."},
      {type: "simple-paragraph", text: "Naravno, moguće je istovremeno određivanje temperature za obe zone vozila. Pritiskom na dugme DUAL na srednjem točkiću dela table kojim se reguliše klima isključuje se dual mode. Time se daje signal automobilskom kompjuteru da temperaturu koja je odredjena za suvozača uskladi sa tempereturom koja je prethodno odredjena za vozača. Takodje, bilo koja promena temperature za vozačku zonu, koju vozač kontroliše okrećući njemu najbliži točkić na delu table predviđenom za kontrolu klime, automatski se primenjuje i za zonu suvozača. Dual mode se automatski aktivira ukoliko suvozač okrene njemu najbliži točkić za regulisanje klime. Kompjuter to tumači kao želju suvozača da promeni temperaturu u svojoj zoni pa tako automatski aktivira dual mode i time ukida vozačevu mogućnost da reguliše temperaturu obe zone unutrašnjosti vozila."},
      {type: "simple-paragraph", text: "Sistem dualnog hlađenja može biti prisutan isključivo kod automatske klime zbog toga što su za njegovo funkcionisanje neophodni adekvatni senzori."},

      {type: "simple-headline", id:"id_section_4", headline: "Objašnjenje kontrola automatske klime u Golfu 5"},
      {type: "photo-upright", src: "/posts/id_1_img_3.png", alt: "golf-5-klima-kontrolna-tabla", title: "Golf 5 automatska klima kontrolna tabla", explanation: "Kontrolna tabla automatske klime u Golfu 5"},
      {type: "numbered-list", headline:"Elementi kontrolne tabla automatske klime:", list: [{text: "Displej za izabranu temperaturu u levoj (vozačevoj) strani vozila. Za promenu sa Celzijusa na Farenhajt i obratno istovremeno pritisnite dugme AUTO (oznaka 15) i dugme ECON (oznaka 16)."}, {text: "Dugme za cirkulaciju vazduha. Onda kada je ugašeno dozvoljava hladjenje spoljašnjeg vazduha, a kada je upaljeno za hladjenje automobila koristi isključivo vazduh iz unutrašnjosti automobila."}, {text: "Aktiviranje centralnog smera duvanja vazduha iz klime."}, {text: "Aktiviranje donjeg smera duvanja vazduha iz klime."}, {text: "Aktiviranje gornjeg smera duvanja vazduha iz klime."}, {text: "Displej za izabranu temperaturu u desnoj (suvozačevoj) strani vozila."}, {text: "Dugme za cirkulaciju vazduha. Onda kada je ugašeno dozvoljava hladjenje spoljašnjeg vazduha, a kada je upaljeno za hladjenje automobila koristi isključivo vazduh iz unutrašnjosti automobila."}, {text: "Dugme za odmrzavanje i odmagljivanje šoferšajbne (vertobranskog stakla)."}, {text: "Dugme za odmrzavanje i odmagljivanje zadnjeg stakla."}, {text: "Točkić za kontrolisanje temperature leve (vozačeve) strane vozila."}, {text: "Točkić za kontrolisanje intenziteta duvanja klime."}, {text: "Dugme za aktivaciju/deaktivaciju dvostranog hlađenja. Ukoliko je lampica na ovom dugmetu upaljena onda je omogućeno nezavisno regulisanje temperature za levu i desnu stranu vozila.  Ukoliko pritisnete ovo dugme deaktivirate DUAL mode i tada se temperatura na desnoj strani izjednačava sa temperaturom na levoj (vozačevoj) strani. Ukoliko ne postoji ovo dugme, isključivanje DUAL moda se vrši dužim pritiskom na dugme AUTO (oznaka 15)."}, {text: "Senzor za merenje temperature."}, {text: "Dugme za paljenje i gašenje klime."}, {text: "AUTO dugme za aktivaciju/deaktivaciju automatskog regulisanja temperature."}, {text: "AC dugme za smanjenje funkcije rada kompresora hlađenja. Prilikom isključivanja duvanje vazduha se nastavlja ali dosta smanjenim radom kompresora."}, {text: "ECON dugme za smanjenje funkcije rada kompresora hlađenja. Prilikom isključivanja duvanje vazduha se nastavlja ali dosta smanjenim radom kompresora."}, {text: "Točkić za kontrolisanje temperature desne (suvozačeve) strane vozila."}]},

      {type: "simple-headline", id:"id_section_5", headline: "Šta je ECON i kada ga koristiti?"},
      {type: "simple-paragraph", text: "ECON je opcija za štedljivo funkcionisanje sistema za hlađenje unutrašnjosti vašeg automobila. Ovaj sistem može koristiti ili spoljašnji ili unutrašnji vazduh, u zavisnosti od toga šta ste aktivirali kao opciju. Sistem funkcioniše tako što vazduh prolazi kroz kompresor za hlađenje i na taj način spušta svoju temperaturu pre nego što kroz ventilator uđe u vozačku kabinu. Aktiviranjem opcije ECON rad kompresora za hlađenje se skoro isključuje, a samim tim se drastično smanjuje mogućnost spuštanja temperature vazduha pre ulaska u vozačku kabinu."},
      {type: "simple-paragraph", text: "Ukoliko aktivirate ECON opciju uz korišćenje vazduha iz kabine samo možete održati temperaturu koja je već dostignuta u automobilu, ne možete je spustiti. Ukoliko koristite vazduh iz spoljašnjosti, u roku od nekoliko minuta će se temperatura u kabini izjednačiti sa temperaturom napolju. Dakle, sa aktivnom ECON opcijom nećete biti u stanju da spustite temperaturu u automobilu i rashladite kabinu."},
      {type: "simple-list", headline:"Koristite ECON opciju u sledećim situacijama:", list: [{text: "Kada je u automobilu više od 3 ljudi pa vazduh postaje zagušljiv, neki od prozora počinju da se magle, a napolju je relativno prijatna temperatura."}, {text: "Kada niste u stanju da otvorite prozore npr zbog kiše, a napolju je relativno prijatna temperatura"}, {text: "ada vam je ostalo još 5 do 10 minuta do odredišta, temperatura u kabini je zadovoljavajuća i koristite unutrašnji vazduh za hladjenje."}]},

      {type: "simple-headline", id:"id_section_6", headline: "Test provere ispravnost klime"},
      {type: "simple-paragraph", text: "Ukoliko želite da proverite ispravnost i efikasnost klime vašeg Golfa 5, naoružajte se sobnim termometrom i ispratite sledeće korake."},
      {type: "numbered-list", headline:"", list: [{text: "Parkirajte vaš auto negde u hladu gde neće biti pod direktnim uticajem sunca."}, {text: "Upalite auto i ostavite ga da radi 2-3 minuta."}, {text: "Podesite klimu intenzitet duvanja na najjače, centralni smer duvanja vazduha tako da vozaču i suvozaču vaduh ide u lice, i označite spoljno unošenje vazduha tako da klima koristi spoljašnji vazduh"}, {text: "Menjajte željenu temperaturu klime za ceo automobil (DUAL mode) tako da odgovara prvoj koloni tabele u nastavku."}, {text: "Termometrom izmerite temperaturu na na izlazu iz centralnog ventilatora i uporedite sa vrednostima koje se nalaze u drugoj koloni tabele u nastavku. Merite temperaturu 20-ak sekundi nakon nove unete temperature."}]},
      {type: "simple-table", table: { head: ["Temperatura u automobilu", "Temperatura na izlazu ventilatora"], content:[["15˚C", "između 4˚C i 8˚C"], ["20˚C", "između 6˚C i 10˚C"], ["25˚C", "između 8˚C i 13˚C"], ["30˚C", "između 12˚C i 16˚C"], ["35˚C", "između 17˚C i 20˚C"]]}},
      {type: "simple-paragraph", text: "Ukoliko izmerene vrednosti značajnije odstupaju (više od 3 stepena) od vrednosti koje se nalaze u tabeli iznad, vrlo verovatno je da postoji neki problem sa klima sistemom vašeg automobila. U tim situacijama preporuka je da vašeg Golfa 5 odvezete u servis za auto klime i konsultujete se sa stručnjacima."},

      {type: "simple-headline", id:"id_section_7", headline: "Preporuke za korišćenje klime"},
      {type: "simple-paragraph", text: "Način na koji koristite klimu vašeg automobila direktno utiče na dugotrajnost celog sistema hlađenja i svih njegovih delova. Ukoliko se prate neki saveti klima u vašem automobilu duži vremenski period može ispravna i funkcionalna. U nastavku se nalaze neke uobičajne preporuke koje će produžiti vek trajanja vaše klime i time učiniti vašu vožnju prijatnijom."},
      {type: "simple-list", headline:"", list: [{text: "Pre nego što ugasite motor, ugasite i vašu klimu. Bez obzira da li koristite manuelnu ili automatsku klimu pre gašenja motora ugasite klimu i sve njene funkcionalnosti."}, {text: "Ukoliko vaš Golf 5 ima automatksu klimu, nemojte preterano koristiti AUTO opciju. Automatsko podešavanje temperature jeste jednostavnije ali tako se u većoj meri aktiviraju neki elektronski i mehanički procesi unutar sistema auto klimatizacije. Ako vam nije teško regulišite temperaturu manuelno."}, {text: "Podesite klimu tako da koristi vazduh iz automobila, barem neka bude tako u većini slučajeva. Na taj način će se za postizanje željene temperature koristit vazduh koji je slične temperature."}, {text: "Bez obzira na spoljašnju temperaturu barem jednom dnevno izluftirajte auto tako da u kabinu udje vazduh direktno iz spoljašnjosti."}, {text: "10-ak minuta pred dolazak na vaše odredište koristite ECON ili isključite klimu ali ostavite unutrašnje strujanje vazduha i isti intenzitet duvanja vazduha. Na taj način ćete postići siti efekat, istu temperaturu u vozilu, a nećete trošiti funkciju klime.Na ovaj način ćete osušiti delove klime i umanjiti mogućnost stvaranja bakterija i gljivica u isparivaču."}, {text: "Menjajte filter klime na svakih 10.000km do 15.000km."}, {text: "Ukoliko vam klima nije funkcionalna, ukoliko vam sistem prikazuje neku grešku posetite servis za auto klime."}]},

      {type: "simple-headline", id:"id_section_8", headline: "Osnovno održavanje klime"},
      {type: "simple-paragraph", text: "Klima utiče na vaše zdravlje i na zdravlje vašeg automobila, zbog toga je preporučljivo da se kao vozač aktivno uključite u održavanje klime. Moje mišljenje je da kvarove uvek trebaju da popravljaju stručnjaci koji rade u servisima za auto klimu, ali postoje i neke stvari koje vi kao vlasnik možete učiniti."},
      {type: "simple-paragraph", text: "Menjajte filter klime na svakih 10.000km do 15.000km. U videu u nastavku možete videti na koji način samostalno možete zameniti filter kabine i na taj način obezbediti zdraviji vazduh tokom vožnje i korišćenja klime."},
      {type: "simple-video", src: "https://www.youtube.com/embed/xvKQfPTB3hw"},
      {type: "simple-paragraph", text: "Jednom do dva puta godišnje uradite dezinfekciju klima sistema u vašim kolima. Korišćenjem klime u automobilu stvara se vlaga u pojedinim delovima sistema za hlađenje kabine, pojavom vlage postoji mogućnost stvaranja bakterija i gljivica koji negativno utiču na ljudski respiratorni sistem. Kako bi izbegli takvu situaciju pratite moje preporuke navedene u prethodnom odeljku i radite dezinfekciju klime. U narednom videu možete pogledati na koji način samostalno možete dezinfikovati klima sistem, a ukoliko ne želite sami ovo da uradite uvek se možete obratiti servisu za auto klimu. "},
      {type: "simple-video", src: "https://www.youtube.com/embed/JofAdxcRpU0"},

      {type: "simple-headline", id:"id_section_8", headline: "Najčešći problemi sa klimom"},
      {type: "simple-paragraph", text: "Klimatizacioni sistem u automobilu je veoma kompleksan, pogotovo ukoliko je u pitanju automatska klima. Ovaj sistem ima veliki broj uvezanih elemenata i svaki od njih može da zakaže i inicira neefikasni rad klime ili čak prestanak njenog rada. Kvarovi u sistemu klime mogu biti mehaničke, elektronske ili digitalne prirode. Vi ako vlasnika utomobila možda nećete odmah znati u čemu je problem, u kom delu sistema je nastao kvar. Vi ćete primetiti samo efekte kvara kao što su: "},
      {type: "simple-list", headline:"", list: [{text: "Klima ne radi uopšte."}, {text: "Vazduh cirkuliše ali se ne hladi."}, {text: "Vazduh cirkuliše ali se nedovoljno hladi."}, {text: "Dok klima radi čuje se blago lupanje."}, {text: "U toku rada klime u kabini se stvori malo vode. Najčešće ispod nodu vozača."}, {text: "U toku rada klime oseća se neprijatan miris."}, {text: "Ventilacija radi ali kada se upali klima vazduh prestaje da duva."}]},
      {type: "simple-paragraph", text: "Ovi, kao i mnogi drugi problemi u funkcionisanju klime su efekti kvara nekih delova klimatizacionog sistema automobila. U nastavku navodim neke od uobičajnih kvarova sa kojima se vlasnici automobila susreću. Ukoliko vi budete imali sličan problem nemojte preterano brinuti, nemojte poklušavati da problem rešite sami, najbolje je da ga prepustite stučnjacima iz servisa za auto klime ili vašem auto mehaničaru.."},
      {type: "simple-list", headline:"", list: [{text: "Kvar na različitim senzorima."}, {text: "Kvar na komandama koje kontrolišu rad klime."}, {text: "Probelm sa količinom gasa u sistemu. Nedovoljno ili previše gasa."}, {text: "Kvar klapne za reciklažu vazduha."}, {text: "Kvar ventilatora kabine."}, {text: "Kvar ventilatora hladnjaka."}, {text: "Pregorevanje osigurača."}, {text: "Labav kaiš kompresora klime."}, {text: "Zapušena cev isparivača."}, {text: "Kvar na motorima ventilatora."}, {text: "Kvar na motorima klapni"}, {text: "Problem sa odvodnim i dovodnim cevima"}, {text: "Istrošeni ventili"}, {text: "Ostali kvarovi..."}]},
      {type: "simple-paragraph", text: "Uz adekvatnu opremu i alat, stručnjacima će biti lako da identifikuju problem i način na koji se on može rešiti. U nekim slučajevima i pri nekim popravkama dobićete i garanciju na ugrađeni deo i na taj način ćete imati veću sigurnost da će klima u vašim kolima raditi određeni vremenski period. Moj savet je da, ukoliko primetite neke probleme u radu klime nekoliko dana za redom, posetite vašeg automehaničara ili servis za auto klime, objasnite problem i njima prepustite njegovo rešavanje."},
      
    ]
  }
}

export default posts;
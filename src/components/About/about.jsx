import React from "react";
import "./about.scss";
import Johan from "../../assets/Johan.png";
import Marie from "../../assets/Marie.png";

function About() {
  return (
    <main className="App-about container-fluid">
      <div className="row">
        <div className="text-center">
          <div className="col-8 mx-auto">
            <h1>Om oss</h1>
            <div className="col-3 mx-auto"></div>
            <h3>Johan</h3>
            <img
              src={Johan}
              alt="Johan är ett medium från Jönköping som kan hjälpa dig med andlig healing och vägledning"
              className="marginBottom"
            ></img>
            <p>
              Jag heter Johan och är 40 år gammal. Bor i en lite större stad med
              min familj som består av min fru, våra två söner och en hund.För
              två år sen behövde jag en förändring i mitt liv av olika orsaker
              och började då att intressera mig för det spirituella. Insåg
              ganska snabbt att det har funnits med mig hela tiden. Idag ser jag
              på mig och världen med helt andra ögon.Jag har i hela mitt vuxna
              liv varit mån om andra människor och tycker att det är väldigt
              stimulerande att kunna göra det genom min healing och mitt
              mediumskap.
            </p>
            <p>
              Min uppgift som ljusbärare är att hjälpa andra till förändring och
              förståelse.Förr strävade jag efter materiella saker, idag har jag
              insett att det är viktigt för mig att jag och mina medmänniskor
              mår bra. Hälsa, lycka och meningsfullhet står överst på min
              önskelista nu.Mitt intresse är att vara ute i skogen där jag
              hämtar min energi. Ibland får jag med mig min fru på en
              långpromenad men oftast har jag med mig min hund som min
              följeslagare.
            </p>
            <div className="col-3 mx-auto"></div>
            <h3>Marie</h3>
            <img
              src={Marie}
              alt="Marie är ett medium som kan hjälpa dig och djur med andlig healing samt"
              className="marginBottom"
            ></img>
            <p>
              Sedan barnsben har jag levt med andra sidan.   Jag hade inte en
              låtsasvän, mina vänner var verkliga och min mamma förnekade
              aldrig. En dag sa hon till mej att jag var speciell, jag berättade
              alltid i förväg vad som skulle hända. Då var jag 12 år   När jag
              var 19 år sa min svärmor att hon väntat på mej, hon var från
              Österrike och bröt på Tyska. Hon var synsk och gav mej min första
              tarotlek.   Snart hade jag många som kom till mej för att spå sig
              och det var knappt jag trodde på det själv när jag prickade rätt
              och fick bekräftelse.
            </p>
            <p>
              Dock var det tungt många gånger och jag förbannade ”gåvan”   Jag
              har varit periodare, då jag i perioder inte ville veta.   Idag har
              jag gått kurser och varit iväg på behövliga retreater som gjort
              mej lugnare och lärt mej stänga av.   Idag ser jag tecken och har
              en helt annan förståelse för varför jag blev ett verktyg för
              andevärlden, det känns så fint att få hjälpa andra att må bättre,
              och få vägledning.   Jag jobbar i ljuset av min kraft, där
              kärleken är störst.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

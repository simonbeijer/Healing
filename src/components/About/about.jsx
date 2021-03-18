import React from "react";
import "./about.scss";
import Johan from "../../assets/Johan.png";
import Marie from "../../assets/Marie2.png";
import useWindowDimensions from "../../sizeHook";

function About() {
  const { width } = useWindowDimensions();

  return (
    <main className="App-about container-fluid">
      <div className="row">
        <div className="text-center">
          <h1>Om oss</h1>
          <div
            className="col-10 mx-auto"
            style={width > 1000 ? { display: "flex" } : { display: "unset" }}
          >
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <h3>Johan</h3>
              <img
                src={Johan}
                alt="Johan är ett medium från Jönköping som kan hjälpa dig med andlig healing och vägledning"
                className="marginBottom"
              ></img>
              <p>Jag heter Johan.</p>
              <div style={{ textAlign: "left" }}>
                <p>
                  Jag är 40 år gammal, och bor i en lite större stad med min
                  familj som består av min fru, våra två söner och en hund.För
                  två år sen behövde jag en förändring i mitt liv av olika
                  orsaker och började då att intressera mig för det spirituella.
                  Insåg ganska snabbt att det har funnits med mig hela tiden.
                </p>
                <p>
                  Idag ser jag på mig och världen med helt andra ögon.Jag har i
                  hela mitt vuxna liv varit mån om andra människor och tycker
                  att det är väldigt stimulerande att kunna göra det genom min
                  healing och mitt mediumskap.
                </p>
                <p>
                  Min uppgift som ljusbärare är att hjälpa andra till förändring
                  och förståelse.Förr strävade jag efter materiella saker, idag
                  har jag insett att det är viktigt för mig att jag och mina
                  medmänniskor mår bra. Hälsa, lycka och meningsfullhet står
                  överst på min önskelista nu.
                  <p>
                    Mitt intresse är att vara ute i skogen där jag hämtar min
                    energi. Ibland får jag med mig min fru på en långpromenad
                    men oftast har jag med mig min hund som min följeslagare.
                  </p>
                </p>
              </div>
            </div>
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <h3>Marie</h3>
              <img
                src={Marie}
                alt="Marie är ett medium som kan hjälpa dig och djur med andlig healing samt"
                className="marginBottom"
                style={{ width: "auto", height: "178px" }}
              ></img>
              <p>Mitt namn är Marie.</p>
              <div style={{ textAlign: "left" }}>
                <p>
                  Det andliga har jag levt med hela mitt mer eller mindre,
                  mindre för att jag i bland annat i tonåren försökte förneka då
                  det ofta var jobbigt att veta saker om andra eller innan saker
                  skulle ske.
                </p>
                <p>
                  Så först i övre tonåren började jag spå i Tarotkort och
                  pendel. Detta höll jag på med under många år. Sedan var det
                  som ett uppvaknande, jag skulle göra så mycket mera än att spå
                  i kort visade det sig. Idag har jag utvecklats och har mer
                  erfarenhet och kunskap, delvis efter kurser och retreater där
                  jag känt att jag fått bredda mig, känna min kraft och sluta
                  tvivla på mig själv.
                </p>
                <p>
                  Det stora var när jag hittade min guide, givetvis har vi haft
                  en nära relation i alla år, men en dag förstod jag att jag
                  varit verktyg som måste verka, inte ligga i dvala och skrota i
                  verktygslådan.  Jag lärde mig mera om mig själv och vem jag är
                  i universum och vad jag har för plats och värde.
                </p>
                <p>
                  Jag brinner för att hjälpa andra men också att visa de vilsna
                  själarna att hitta den rätta vägen till ljuset.  Djur är också
                  något jag vurmar för. De försöker prata, försöker komma i
                  kontakt och göra sig förstådda hos sina ägare.  Om människan
                  kunde lyssna så skulle djur och ägare få en mer nära relation,
                  och mycket missförstånd, rädsla och frustration bytas ut till
                  samförstånd, glädje och kärlek. 
                  <p>
                    <br></br>
                    Att lyssna på sitt inre, att våga lita på sin magkänsla -
                    visst låter det som ljuv musik.  Boka ett coachade samtal,
                    vänta inte! 
                  </p>
                  <p style={{ textAlign: "right" }}>Välkomna.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

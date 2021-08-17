import React from "react";
import "./about.scss";
import Johan from "../../assets/Johan.png";
import useWindowDimensions from "../../sizeHook";

function About() {
  const { width } = useWindowDimensions();

  return (
    <main className="App-about container-fluid">
      <div className="row">
        <div className="text-center">
          <h1>Om mig</h1>
          <div
            className="col-10 mx-auto"
            style={width > 1000 ? { display: "flex" } : { display: "unset" }}
          >
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <img
                src={Johan}
                alt="Johan är ett medium från Jönköping som kan hjälpa dig med andlig healing och vägledning"
                className="marginBottom"
              ></img>
              <h3>Johan</h3>
              <div style={{ textAlign: "center" }}>
                <p>
                  Jag är 40 år gammal, och bor i en lite större stad med min
                  familj som består av min fru, våra två söner och en hund. För
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
                </p>
                <p>
                  Mitt intresse är att vara ute i skogen där jag hämtar min
                  energi. Ibland får jag med mig min fru på en långpromenad men
                  oftast har jag med mig min hund som min följeslagare.
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

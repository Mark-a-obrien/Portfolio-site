import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import flagQuizScreenshot  from "./images/flag-quiz-screenshot.png"

function App() {
  return (
    <div className="App flex flex-col gap-10 bg-very-dark-navy text-white">
      <Header />
      <Hero />

      <div className="line self-center w-5/6 h-px bg-very-light-navy"></div>

      <main className="grid lg:grid-cols-3 gap-4 px-sm-page sm:px-page">
        {/* <Card 
          title="Quiz" 
          discription="Trivia quiz game. Users have 4 options and they get a point each time they answer correctly" 
          github="https://github.com/Mark-a-obrien/my-quiz-app"
          live="https://my-quiz-app-chi.vercel.app/"
          screenshot=""
        /> */}
        <Card 
          title="Flag Quiz" 
          discription="A flag quize game" 
          github="https://github.com/Mark-a-obrien/flag-quiz-game"
          live="https://flag-quiz-game.vercel.app/"
          screenshot={flagQuizScreenshot}
        />

        <Card 
          title="Flag Quiz" 
          discription="A flag quize game" 
          github="https://github.com/Mark-a-obrien/flag-quiz-game"
          live="https://flag-quiz-game.vercel.app/"
          screenshot={flagQuizScreenshot}
        />

        <Card 
          title="Flag Quiz" 
          discription="A flag quize game" 
          github="https://github.com/Mark-a-obrien/flag-quiz-game"
          live="https://flag-quiz-game.vercel.app/"
          screenshot={flagQuizScreenshot}
        />
      </main>
      
      <Footer inputFields={["name", "email", "subject"]} textArea="message"/>
    </div>
  );
}

export default App;

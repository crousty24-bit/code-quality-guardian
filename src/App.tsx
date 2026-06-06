import { DefinitionSection } from './components/DefinitionSection'
import { FactStrip } from './components/FactStrip'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstallSection } from './components/InstallSection'
import { ProblemSection } from './components/ProblemSection'
import { RiskLevels } from './components/RiskLevels'
import { StatusSection } from './components/StatusSection'
import { WorkflowSection } from './components/WorkflowSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FactStrip />
        <ProblemSection />
        <WorkflowSection />
        <RiskLevels />
        <DefinitionSection />
        <InstallSection />
        <StatusSection />
      </main>
      <Footer />
    </>
  )
}


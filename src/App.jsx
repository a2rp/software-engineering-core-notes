// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutSoftwareEngineering from "./components/aboutSoftwareEngineering";
import WhatIsSoftwareEngineering from "./topics/whatIsSoftwareEngineering";
import SdlcModels from "./topics/sdlcModels";
import RequirementsEngineering from "./topics/requirementsEngineering";
import SystemDesignFundamentals from "./topics/systemDesignFundamentals";
import UmlBasics from "./topics/umlBasics";
import EstimationAndPlanning from "./topics/estimationAndPlanning";
import ProjectManagementBasics from "./topics/projectManagementBasics";
import VersionControl from "./topics/versionControl";
import SoftwareArchitecturePrinciples from "./topics/softwareArchitecturePrinciples";
import DesignPatternsHighLevel from "./topics/designPatternsHighLevel";
import TestingFundamentals from "./topics/testingFundamentals";
import TestQualityAttributes from "./topics/testQualityAttributes";
import DevOpsBasics from "./topics/devOpsBasics";
import CodeQualityAndReviews from "./topics/codeQualityAndReviews";
import Documentation from "./topics/documentation";
import SecurityBasics from "./topics/securityBasics";
import SoftwareMaintenance from "./topics/softwareMaintenance";
import EthicsAndProfessionalPractice from "./topics/ethicsAndProfessionalPractice";
import AgileDeepDive from "./topics/agileDeepDive";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutSoftwareEngineering />

                    <WhatIsSoftwareEngineering />
                    <SdlcModels />
                    <RequirementsEngineering />
                    <SystemDesignFundamentals />
                    <UmlBasics />
                    <EstimationAndPlanning />
                    <ProjectManagementBasics />
                    <VersionControl />
                    <SoftwareArchitecturePrinciples />
                    <DesignPatternsHighLevel />
                    <TestingFundamentals />
                    <TestQualityAttributes />
                    <DevOpsBasics />
                    <CodeQualityAndReviews />
                    <Documentation />
                    <SecurityBasics />
                    <SoftwareMaintenance />
                    <EthicsAndProfessionalPractice />
                    <AgileDeepDive />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;

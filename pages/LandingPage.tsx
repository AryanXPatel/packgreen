import React from 'react';
import { PromoBanner } from '../components/PromoBanner';
import { Header } from '../components/Header';
import { EditorialHero } from '../components/EditorialHero';
import { TrustIndicators } from '../components/TrustIndicators';
import { WhoWeSupply } from '../components/WhoWeSupply';
import { CustomisedGrid } from '../components/CustomisedGrid';
import { ImpactStats } from '../components/ImpactStats';
import { MarthaPeachFeature } from '../components/MarthaPeachFeature';
import { WhyPackGreen } from '../components/WhyPackGreen';
import { HowItWorks } from '../components/HowItWorks';
import { EnquiryForm } from '../components/EnquiryForm';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            <PromoBanner />
            <Header />

            <EditorialHero />
            <TrustIndicators />
            <WhoWeSupply />
            <CustomisedGrid />
            <ImpactStats />
            <MarthaPeachFeature />
            <WhyPackGreen />
            <HowItWorks />
            <EnquiryForm />

            <Footer />
        </div>
    );
};

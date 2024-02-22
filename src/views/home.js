import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationItem from '../components/navigation-item'
import CTAPrimarySmall from '../components/cta-primary-small'
import HeroTitle from '../components/hero-title'
import UniqueSellingPoint from '../components/unique-selling-point'
import CTAPrimary from '../components/cta-primary'
import CardToken from '../components/card-token'
import Heading from '../components/heading'
import CardRegion from '../components/card-region'
import CardCaseStudy from '../components/card-case-study'
import ScrollIndicator from '../components/scroll-indicator'
import CardSecurity from '../components/card-security'
import Launchpad from '../components/launchpad'
import FaqItem from '../components/faq-item'
import FooterLink from '../components/footer-link'
import ArtBottom from '../components/art-bottom'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>United Bewitched Caterpillar</title>
        <meta property="og:title" content="United Bewitched Caterpillar" />
      </Helmet>
      <div className="home-navigation">
        <div className="home-navigation1">
          <img
            alt="Frame4814900127"
            src="/external/frame4814900127-yunf7.svg"
            className="home-logo"
          />
          <div className="home-navigation-items">
            <div className="home-container1">
              <NavigationItem></NavigationItem>
              <NavigationItem name="Node infrastructure"></NavigationItem>
              <NavigationItem name="Security"></NavigationItem>
              <NavigationItem name="Roadmap"></NavigationItem>
              <NavigationItem name="Why us?"></NavigationItem>
            </div>
            <div className="home-frame481627">
              <CTAPrimarySmall></CTAPrimarySmall>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-texts">
          <HeroTitle rootClassName="hero-title-root-class-name"></HeroTitle>
          <UniqueSellingPoint></UniqueSellingPoint>
          <UniqueSellingPoint text="Unslashable infrastructure"></UniqueSellingPoint>
          <UniqueSellingPoint text="ETH and ATOM support"></UniqueSellingPoint>
          <CTAPrimary></CTAPrimary>
        </div>
        <div className="home-visual">
          <img
            alt="diamondcube10152"
            src="/external/diamondcube10152-zee-1200w.png"
            className="home-diamondcube1"
          />
          <div className="home-frame1171275080">
            <span className="home-text">up to 5.6% APY</span>
          </div>
          <div className="home-frame1171275081">
            <span className="home-text1">over $300M AUM</span>
          </div>
        </div>
      </div>
      <div className="home-tokens">
        <CardToken
          imageSrc="/external/ethereum-logo.svg"
          rootClassName="card-token-root-class-name"
        ></CardToken>
        <CardToken
          apr="4.87% APR"
          name="Gnosis"
          label="GNO"
          imageAlt="Gnosis"
          imageSrc="/external/gnosis-logo.svg"
          rootClassName="card-token-root-class-name1"
        ></CardToken>
        <CardToken
          apr="4.87% APR"
          name="Polygon"
          label="MATIC"
          imageAlt="Gnosis"
          imageSrc="/external/polygon-logo.svg"
          rootClassName="card-token-root-class-name2"
        ></CardToken>
        <CardToken
          apr="4.87% APR"
          name="Celestia"
          label="TIA"
          imageAlt="Gnosis"
          imageSrc="/external/celestia-logo.svg"
          rootClassName="card-token-root-class-name3"
        ></CardToken>
      </div>
      <Heading rootClassName="heading-root-class-name"></Heading>
      <div className="home-region">
        <CardRegion
          text1="Switzerland has emerged as a crypto-friendly jurisdiction with regulatory clarity, while Puerto Rico provides flexibility."
          imageSrc="/external/tq_pa41iwilwj-pq6-1500w.png"
          rootClassName="card-region-root-class-name"
        ></CardRegion>
        <CardRegion rootClassName="card-region-root-class-name1"></CardRegion>
      </div>
      <Heading
        text="CASE STUDIES"
        rootClassName="heading-root-class-name1"
      ></Heading>
      <div className="home-casestudies">
        <img
          alt="ChevronLeft183"
          src="/external/chevronleft183-mka5-200h.png"
          className="home-chevron-left"
        />
        <div className="home-frame1171275118">
          <div className="home-casestudies1">
            <div className="home-casestudies2">
              <CardCaseStudy
                logo="/external/logo-lido-200h.png"
                text="Being part of DUCK initiative, we also run validators for Lido"
              ></CardCaseStudy>
              <CardCaseStudy
                logo="/external/logo-flare.svg"
                text="Gateway is one of the key Flarenode operators"
                rootClassName="card-case-study-root-class-name"
              ></CardCaseStudy>
            </div>
            <div className="home-casestudies3">
              <CardCaseStudy
                logo="/external/gnosisgnognologo0267-bwos-200h.png"
                text="We support Gnosis in running both testnets and mainnets"
                rootClassName="card-case-study-root-class-name2"
              ></CardCaseStudy>
              <CardCaseStudy
                logo="/external/image6023b50915fe07301c257179ixologocyan2x0272-gbjf-200h.png"
                text="We're among top 10 biggest IXO validators"
                rootClassName="card-case-study-root-class-name1"
              ></CardCaseStudy>
            </div>
          </div>
          <ScrollIndicator></ScrollIndicator>
        </div>
        <img
          alt="ChevronLeft184"
          src="/external/chevronleft184-yk8e-200h.png"
          className="home-chevron-left1"
        />
      </div>
      <Heading text="SECURITY"></Heading>
      <div className="home-security">
        <CardSecurity></CardSecurity>
        <div className="home-securitywimage">
          <img
            alt="safediamond10276"
            src="/external/safediamond10276-ho3-300h.png"
            className="home-safediamond1"
          />
          <CardSecurity
            text="Our data centers adhere to internationally recognized standards, such as ISO 27001, ISO 27017, ISO 27018, EU GDPR COMPLIANT, and PSI DSS COMPLIANT."
            heading="Compliance"
            rootClassName="card-security-root-class-name"
          ></CardSecurity>
        </div>
        <CardSecurity
          text="We have integrated various automated tools for penetration testing into our continuous integration/continuous deployment pipeline"
          heading="CI/CD"
        ></CardSecurity>
      </div>
      <Heading
        text="THEY TRUST US THEIR TOKENS"
        rootClassName="heading-root-class-name2"
      ></Heading>
      <div className="home-partners">
        <img
          alt="IMAGE5d951653caa6c4927d213859d314e5d2c933bdd811171"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/c0e5929c-06a5-4a2e-8ba2-848c42e72190?org_if_sml=12523&amp;force_format=original"
          className="home-image5d951653caa6c4927d213859d314e5d2c933bdd81"
        />
        <img
          alt="logossv0281"
          src="/external/logossv0281-xkcu.svg"
          className="home-logossv"
        />
        <img
          alt="gnosisgnognologo0312"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/25df9048-db72-46ab-a339-cb34626ff211?org_if_sml=12452&amp;force_format=original"
          className="home-gnosisgnognologo"
        />
        <img
          alt="eigen0286"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/073ab037-c538-450c-9ec9-b97c56b5698b?org_if_sml=1530&amp;force_format=original"
          className="home-eigen"
        />
        <img
          alt="IMAGE6023b50915fe07301c257179ixologoCyan2x0285"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/bbcffa68-db75-48fa-8683-38835bbe43af?org_if_sml=12081&amp;force_format=original"
          className="home-image6023b50915fe07301c257179ixologo-cyan2x"
        />
        <div className="home-flare1">
          <div className="home-group1303">
            <img
              alt="Path28980301"
              src="/external/path28980301-prts.svg"
              className="home-path2898"
            />
            <img
              alt="Path28990302"
              src="/external/path28990302-tank.svg"
              className="home-path2899"
            />
            <img
              alt="Ellipse90303"
              src="/external/ellipse90303-qky.svg"
              className="home-ellipse9"
            />
            <img
              alt="Rectangle15910304"
              src="/external/rectangle15910304-50n.svg"
              className="home-rectangle1591"
            />
            <img
              alt="Path29000305"
              src="/external/path29000305-2e2d.svg"
              className="home-path2900"
            />
            <img
              alt="Path29010306"
              src="/external/path29010306-a4z.svg"
              className="home-path2901"
            />
            <img
              alt="Path29020307"
              src="/external/path29020307-9kr.svg"
              className="home-path2902"
            />
            <img
              alt="Path29030308"
              src="/external/path29030308-cn3i.svg"
              className="home-path2903"
            />
          </div>
        </div>
        <div className="home-maskgroup">
          <img
            alt="Ellipse200310"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/10af0b8b-b2a1-4ef0-beb0-e88a47dc19b6?org_if_sml=1123&amp;force_format=original"
            className="home-ellipse20"
          />
          <img
            alt="pngtransparentethereumethhdlogo20311"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a95d0341-eab4-4eda-bb7b-ed8dbb18e7e3/29894682-b8f9-409d-b9c1-ee59d11a5883?org_if_sml=12934&amp;force_format=original"
            className="home-pngtransparentethereumethhdlogo2"
          />
        </div>
        <img
          alt="swise0313"
          src="/external/swise0313-caiu.svg"
          className="home-swise"
        />
        <div className="home-celestia">
          <div className="home-symbols">
            <div className="home-group3">
              <img
                alt="Fill10365"
                src="/external/fill10365-se2.svg"
                className="home-fill1"
              />
            </div>
          </div>
        </div>
      </div>
      <Heading
        text="LAUNCHPAD"
        rootClassName="heading-root-class-name3"
      ></Heading>
      <Launchpad></Launchpad>
      <Heading text="FAQ" rootClassName="heading-root-class-name4"></Heading>
      <div className="home-fa-qs">
        <FaqItem rootClassName="faq-item-root-class-name1"></FaqItem>
        <FaqItem
          name="Slashing"
          rootClassName="faq-item-root-class-name"
        ></FaqItem>
        <FaqItem
          name="Trusted partner"
          rootClassName="faq-item-root-class-name2"
        ></FaqItem>
      </div>
      <Heading
        text=" LET'S HAVE A CALL"
        rootClassName="heading-root-class-name5"
      ></Heading>
      <img
        alt="booking1211"
        src="/external/booking1211-k8x9-1500w.png"
        className="home-booking"
      />
      <div className="home-footer">
        <div className="home-frame1171275101">
          <FooterLink></FooterLink>
          <FooterLink text="Node infrastructure"></FooterLink>
          <FooterLink text="Why us?"></FooterLink>
        </div>
        <div className="home-frame1171275102">
          <FooterLink text="Location"></FooterLink>
          <FooterLink text="Slashing"></FooterLink>
          <FooterLink text="Security"></FooterLink>
        </div>
        <div className="home-frame1171275103">
          <FooterLink text="Ethereum"></FooterLink>
          <FooterLink text="Polygon"></FooterLink>
          <FooterLink text="Gnosis"></FooterLink>
          <FooterLink text="Celestia"></FooterLink>
        </div>
      </div>
      <ArtBottom rootClassName="art-bottom-root-class-name"></ArtBottom>
    </div>
  )
}

export default Home

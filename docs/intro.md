---
id: intro
title: Introduction
sidebar_position: 1
slug: /
hide_title: true
---

import { ShieldCheckIcon, Square3Stack3DIcon, BoltIcon, Cog6ToothIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import Link from '@docusaurus/Link';
import PageFeedback from '@site/src/components/PageFeedback';

<div className="hero-section">
  <h1>TilliT AI Documentation</h1>
  <p>Verify badge claims, map your supply chain, and build trust with your customers — directly from your Shopify admin.</p>
  <Link className="hero-btn" to="/settings">Get Started →</Link>
</div>

## What is TilliT AI?

<div className="intro-explainer">
  <p>Your products carry certifications — Organic, Fair Trade, Non-GMO — but customers have no way to know if those badges are real. <strong>TilliT AI fixes that.</strong></p>
  <p>It connects to your Shopify store, maps your supply chain automatically, and uses AI to verify each certification against your uploaded certificates. Verified badges appear on your product pages as clickable trust signals — customers can tap any badge to see the full proof and AI-generated benefits.</p>
</div>

## How It Works

<div className="how-it-works">
  <div className="step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h4>Connect your products</h4>
      <p>Select which Shopify products to process. TilliT pulls your product data automatically.</p>
    </div>
  </div>
  <div className="step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h4>Map the supply chain</h4>
      <p>AI generates a supply chain configuration for each product — stages, origins, batches — without manual setup.</p>
    </div>
  </div>
  <div className="step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h4>Verify certifications</h4>
      <p>Upload your certificates. TilliT evaluates each badge claim and returns a confidence score.</p>
    </div>
  </div>
  <div className="step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h4>Publish to your storefront</h4>
      <p>Approve verified badges. They go live on your product pages instantly — with full proof customers can read.</p>
    </div>
  </div>
</div>

## App Sections

<div className="card-grid">
  <Link to="/trust-center" className="card">
    <div className="card-icon card-icon--blue"><ShieldCheckIcon className="icon" /></div>
    <h4>Trust Center</h4>
    <p>Monitor supply chain compliance, badge verification scores, and daily anomaly reports.</p>
  </Link>
  <Link to="/widgets" className="card">
    <div className="card-icon card-icon--purple"><Square3Stack3DIcon className="icon" /></div>
    <h4>Widgets</h4>
    <p>Display verified badges and trust signals directly on your Shopify storefront.</p>
  </Link>
  <Link to="/advanced" className="card">
    <div className="card-icon card-icon--green"><BoltIcon className="icon" /></div>
    <h4>Advanced</h4>
    <p>Run the full AI pipeline to map supply chains, enter data, and evaluate badge eligibility.</p>
  </Link>
  <Link to="/settings" className="card">
    <div className="card-icon card-icon--amber"><Cog6ToothIcon className="icon" /></div>
    <h4>Settings</h4>
    <p>Configure your store preferences, integrations, and notification settings.</p>
  </Link>
  <Link to="/billing" className="card">
    <div className="card-icon card-icon--teal"><CreditCardIcon className="icon" /></div>
    <h4>Billing</h4>
    <p>View your current plan, usage, and manage your subscription.</p>
  </Link>
</div>

<PageFeedback />

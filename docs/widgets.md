---
id: widgets
title: Widgets
sidebar_position: 4
---

import PageFeedback from '@site/src/components/PageFeedback';

# Widget Management

**Widget Management** controls which verified certification badges appear on your Shopify storefront and how customers interact with them.

Navigate to **Widgets** in the left sidebar of the TilliT AI app.

---

## Overview

![Dashboard Overview](/img/widgets/dashboard-overview.png)

The **Widget Management** dashboard gives you full control over:
- Badge approvals
- Storefront visibility
- Product-level certification tracking

The Widgets page has two tabs:

| Tab | What it does |
|---|---|
| **Badge Management** | Approve badges, configure theme widgets, manage per-product badge visibility |
| **Badge Verifications** | View detailed verification records for each badge |

---

## Badge Management

### Approval Mode

Before any badge appears on your storefront, you must approve it. You control how this works:

![Badge Management](/img/widgets/badge-management.png)

| Mode | Description |
|---|---|
| **Require Approval** | You manually review and approve each badge before it goes live |
| **Auto-Approve** | Badges are automatically published once verified — no manual step needed |

:::warning
Nothing appears on your storefront until a badge is approved — regardless of which mode you choose.
:::

---

### Theme Widgets

Theme Widgets are the visual components customers see on your store. Add them via the Shopify Theme Editor.

![Theme Widgets](/img/widgets/theme-widgets.png)

Click **Open Theme Editor** to manage widget placement.

**Setup Progress** shows how many widgets are active (e.g. 1 / 2 active).

#### Product Certifications Widget

- **Status:** Active
- **Theme Editor section:** Product Certifications
- Displays your verified certification badges directly on product pages
- Customers can tap any badge to view the full verification proof and AI-generated benefits

#### TilliT Trust Banner

- **Status:** Not Added by default
- **Theme Editor section:** TilliT Banner (Footer)
- A sitewide trust bar that shows the TilliT verification mark across all pages
- Helps build customer confidence before they even reach a product page

---

### Product Badge List

Below the Theme Widgets section, each product in your catalog is listed with its badge status.

![Product Card](/img/widgets/product-card.png)

For each product you can see:
- Product name and supplier
- Number of supply chains and batches
- Active badge(s) with verification status

Each badge shows:

| Status | Meaning |
|---|---|
| <span className="badge badge--green">Live on Store</span> | Badge is approved and visible to customers |
| <span className="badge badge--amber">Ready to Approve</span> | Badge has been verified — awaiting your approval |
| <span className="badge badge--blue">Verified · X%</span> | Verification confidence score |

**Available actions per badge:**

- **View Details** — see the full verification proof
- **Revoke** — remove the badge from your storefront immediately
- **Preview** — preview how the badge looks on the product page
- **Set as Active** — activate a specific supply chain batch for display

**Per-product buttons:**
- **View Product Page** — open the live product page on your store
- **Edit in Theme Editor** — jump directly to the widget placement for that product

---

## Dashboard Metrics

![Metrics](/img/widgets/metrics.png)

A quick summary of certification activity across your store:

| Metric | Description |
|---|---|
| **Products tracked** | Total products with at least one certification |
| **Showing badges** | Products currently displaying approved badges on the storefront |
| **Badges to review** | Certifications pending your approval |

---

## Badge Approval Workflow

![Workflow](/img/widgets/workflow.png)

Badges go through multiple stages before becoming visible to customers:

| Status | Meaning |
|---|---|
| <span className="badge badge--blue">Verified</span> | Badge authenticity has been confirmed by TilliT AI |
| <span className="badge badge--amber">Ready to Approve</span> | Verified and awaiting your approval |
| <span className="badge badge--green">Live on Store</span> | Approved and visible to customers |
| <span className="badge badge--red">Rejected</span> | Badge failed validation |

:::info
Only approved badges are visible on your storefront.
:::

---

## Certification Examples

Common certification badges supported by TilliT AI:

- **USDA Organic** — verifies compliance with USDA or international organic standards
- **Non-GMO Project Verified** — confirms ingredients are not genetically modified
- **Certified Gluten-Free** — proof of gluten levels below 20ppm
- **Fair Trade International** — validates ethical sourcing and fair labour practices

These certifications indicate compliance with recognised quality and sourcing standards.

---

## Supply Chain & Batch Details

Each product card includes traceable supply chain data:

- **Origin location** — e.g. Sri Lanka, Canada
- **Batch quantity** — number of units per batch
- **Certification per batch** — which badges apply to each batch

This ensures full transparency from sourcing to storefront.

---

## Search & Filters

![Search & Filters](/img/widgets/search-filter.png)

Use search and filtering to quickly locate products in the badge list:

1. Search by **product name**
2. Apply filters based on:
   - Badge status
   - Certification type

---

## Badge Verifications

The **Badge Verifications** tab shows a full record of all badge verification activity across your products — including verification scores, dates, and proof logs.

:::info
This tab will be documented in a future update.
:::

---

<PageFeedback />

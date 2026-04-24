---
id: settings
title: Settings
sidebar_position: 5
---

import PageFeedback from '@site/src/components/PageFeedback';

# Settings

The **Settings** page lets you manage your store's setup wizard, verify your API connection, and troubleshoot common issues.

Navigate to **Settings** in the left sidebar of the TilliT AI app.

---

## Setup Wizard

The Setup Wizard runs automatically the first time you install TilliT AI. It guides you through connecting your store and configuring your products.

**Current Store** shows your active Shopify store domain and its connection status.

You can reset the wizard at any time using the **Reset Setup Wizard** button. This is useful when:

- Testing the wizard flow again
- Changing auto-generation settings
- Re-running product configuration
- Troubleshooting setup issues

:::warning
Resetting the wizard will re-run the initial setup process. Your existing data will not be deleted.
:::

---

## API Configuration

This section shows the status of your connection to the TilliT AI backend.

| Field | Value | Status |
|---|---|---|
| **API Base URL** | `https://tillit.world/agent-api` | <span className="badge badge--green">Connected</span> |
| **API Token** | Configured by TilliT | <span className="badge badge--green">Present</span> |

Use the **Test API Connection** link to verify that your store can reach the TilliT AI servers. If the connection fails, contact TilliT support.

---

## Troubleshooting

### Wizard Shows Every Time

**Issue:** The setup wizard appears every time you open the app.

**Fix:** Click **Reset Setup Wizard** to complete the wizard and mark it as done. If it keeps reappearing, contact TilliT support.

---

### Products Not Loading in Wizard

**Issue:** The product list is empty in Step 2 of the setup wizard.

The wizard was unable to fetch your products from Shopify.

**Possible causes:**
- Shopify API permissions are insufficient
- Your session token has expired
- A GraphQL query error occurred

**What to do:** Check your browser console for detailed error messages. If the issue persists, re-install the app or contact TilliT support.

---

### Generation Stuck at Progress

**Issue:** The progress bar stops updating during AI generation.

The progress polling may have encountered an error.

**Possible causes:**
- Backend service crashed during generation
- Connection to the backend was lost
- API request timed out

**What to do:** Reset the wizard using the **Reset Setup Wizard** button and try again. If the issue keeps occurring, contact TilliT support.

---

## System Information

A quick reference of your store's technical details:

| Field | Value |
|---|---|
| **Shop** | Your Shopify store domain |
| **API Base URL** | `https://tillit.world/agent-api` |
| **Environment** | `production` |

---

<PageFeedback />

export interface FaqItem {
  question: string;
  answer: string;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string }
  | { type: "crosslink"; text: string; slug: string }
  | { type: "internallink"; text: string; href: string };

export interface BlogPost {
  slug: string;
  title: string;
  dek: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readingTime: string;
  content: ContentBlock[];
  faqs: FaqItem[];
}

export const blogPosts: BlogPost[] = [
  // ------------------------------------------------------------------
  // CB-SGP-003 — pillar piece
  // ------------------------------------------------------------------
  {
    slug: "buying-property-india-from-usa-nri-guide",
    title: "Buying Property in India from the USA: The Complete NRI Guide",
    dek: "The payment trail, the Power of Attorney, and the due diligence checklist that decide whether your purchase is smooth or a headache.",
    metaTitle: "Buying Property in India from USA: NRI Guide",
    metaDescription:
      "Everything a US NRI needs before buying India property — FEMA rules, financing, Power of Attorney, and due diligence, explained clearly.",
    publishDate: "2026-07-16",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text: 'Your parents have started saying "the flat" instead of "a flat." That\'s usually the sign someone\'s about to buy Indian property from the USA for the first time, whether they\'ve admitted it to themselves yet or not.',
      },
      {
        type: "p",
        text: "Here's what's actually true: buying property in India as an NRI is legally simple. RBI doesn't need to approve it. Nobody needs to grant you special permission. The rules are clear and have been stable for years.",
      },
      {
        type: "p",
        text: "The risk was never in the legality. It's entirely in the execution — the payment trail, who you trust to act on your behalf 4,000 kilometers away, and whether you actually check what you're buying before the money moves. Get those three things right, and this is a straightforward transaction. Get them wrong, and it's the story every NRI WhatsApp group has at least one version of.",
      },
      { type: "h2", text: "What You Can and Cannot Buy" },
      {
        type: "p",
        text: "Under FEMA (the Foreign Exchange Management Act), NRIs can buy residential and commercial property in India freely — no RBI permission required, no cap on the number of properties.",
      },
      {
        type: "p",
        text: 'What you cannot buy: agricultural land, plantation property, or farmhouses. This restriction catches more people off guard than it should, usually when someone\'s eyeing a "farmhouse" listing that\'s really a weekend property with land attached. If it\'s classified as agricultural or plantation land under local revenue records, NRI ownership rules exclude it — full stop, regardless of what the listing photos suggest.',
      },
      {
        type: "p",
        text: "Everything else — apartments, independent houses, commercial office space, retail units — is fair game.",
      },
      { type: "h2", text: "How Payment Must Flow" },
      {
        type: "p",
        text: "This is the part that determines whether your purchase is clean or a compliance headache waiting to surface.",
      },
      {
        type: "p",
        text: 'Payment for property must come from your NRE, NRO, or FCNR account, or as a direct inward remittance from abroad. Not cash. Not a friend\'s account "for convenience." Not a bulk transfer routed through a relative to save on wire fees.',
      },
      {
        type: "p",
        text: "Why this matters more than it sounds: the payment trail is exactly what banks, registrars, and tax authorities look at if a transaction ever gets questioned — during resale, during an inheritance dispute, or during a routine income tax scrutiny years later. A clean NRE-to-seller payment trail closes that question before it's even asked. An informal route leaves you explaining yourself later, sometimes to people who weren't part of the original decision.",
      },
      { type: "h2", text: "Financing: Getting a Home Loan as an NRI in the USA" },
      {
        type: "p",
        text: "Indian banks do lend to NRIs, and US-based applicants are a well-established customer segment for most major lenders — this isn't a novelty product anyone needs to be talked into offering you.",
      },
      {
        type: "p",
        text: "The loan gets repaid from your NRE or NRO account, or via direct remittance, and eligibility typically factors in your US income (W-2 or 1099), existing obligations, and the property's value. Specific interest rates and loan-to-value ratios vary meaningfully by bank and change with RBI policy rate movements — treat any number you see quoted online as a starting point for a conversation, not a locked-in figure, and confirm current terms directly with the lender before budgeting around them.",
      },
      {
        type: "p",
        text: "One practical note: financing typically moves faster when the property itself is already clean on paper — title-verified, RERA-registered, no pending litigation. Lenders do their own due diligence, and a messy title slows your loan exactly when you don't want it to.",
      },
      { type: "h2", text: "Managing the Purchase Remotely: Power of Attorney Done Right" },
      {
        type: "p",
        text: "This is the single highest-risk step in the entire process, and it gets the least attention in most generic guides.",
      },
      {
        type: "p",
        text: "A Power of Attorney lets someone in India act on your behalf — sign documents, register the property, handle possession — without you flying back for every step. That's genuinely useful. It's also where most NRI property disputes actually originate, not from FEMA violations or tax mistakes.",
      },
      {
        type: "p",
        text: "The difference between a safe PoA and a risky one comes down to three things:",
      },
      {
        type: "p",
        text: 'Scope: A narrow, transaction-specific PoA that covers exactly this purchase — nothing broader — is safe. A general, all-purpose PoA handed to a relative "to handle things" is not, because it grants authority far beyond what the situation requires.',
      },
      {
        type: "p",
        text: "Execution: The PoA needs to be properly drafted (ideally by a lawyer familiar with NRI transactions, not a generic template), then notarized and apostilled under the Hague Apostille Convention or attested through the Indian Embassy in Washington D.C. or an Indian Consulate (SF, NY, Chicago, Houston, Atlanta, Seattle). Skipping proper apostille or attestation is a common shortcut that creates real legal exposure later.",
      },
      {
        type: "p",
        text: "Who holds it: Family is the default choice for most people, and that's fine when the relationship and the scope are both appropriate. It becomes a problem when trust is assumed rather than verified, or when the PoA holder has any financial interest that could conflict with yours.",
      },
      {
        type: "p",
        text: "None of this means avoid PoA. It means treat the drafting and scope decision with the seriousness it deserves, instead of treating it as paperwork to get through quickly.",
      },
      { type: "h2", text: "Due Diligence Checklist Before You Pay a Single Rupee" },
      {
        type: "ul",
        items: [
          "**Title verification.** Confirm the seller actually has clear, marketable title — this means checking the chain of ownership documents going back at least 12-13 years, not just the most recent sale deed.",
          "**RERA registration check.** For any project still under construction, or recently completed, confirm registration on the relevant state RERA portal. An unregistered project for a category that requires registration is an immediate red flag, not a minor paperwork gap.",
          "**Encumbrance certificate.** This document, obtainable from the local sub-registrar, confirms the property isn't mortgaged, under litigation, or otherwise encumbered. Get a current one — not one your relative mentions \"should still be fine.\"",
          "**Physical verification.** Have someone you trust — not just the seller's agent — actually visit the property. Photos and video calls help, but they don't substitute for an independent set of eyes with no financial stake in the sale closing.",
          "**Builder/developer track record.** For new construction specifically, check delivery history on previous projects. A builder's past three completed projects tell you more than any brochure.",
        ],
      },
      { type: "h2", text: "Rental Income and Future Sale: What to Plan For Now" },
      {
        type: "p",
        text: "Buying isn't the end of the compliance story — it's the start of an ownership lifecycle with its own tax obligations at every stage.",
      },
      {
        type: "crosslink",
        text: "If you plan to rent the property out, that income becomes taxable in India from day one, credited to your NRO account, with its own annual filing requirement. If you plan to sell eventually, the sale triggers TDS calculated on the full sale value by default — something you can manage in advance through a Lower Deduction Certificate rather than dealing with after the fact. Our companion guide covers what happens at tax time once you own this property in full detail.",
        slug: "nri-property-tax-filing-usa",
      },
      {
        type: "p",
        text: "Planning for these now — before you've even closed the purchase — puts you ahead of most NRI property owners, who only start learning this when the first tax notice or TDS surprise arrives.",
      },
      {
        type: "cta",
        text: "Ready to meet vetted real estate advisors and legal experts face to face?",
      },
      {
        type: "crosslink",
        text: "Not sure a physical asset is even the right move for your capital? It's worth taking a step back and comparing this to a GIFT City investment before you commit.",
        slug: "gift-city-vs-real-estate-usa-nri",
      },
      { type: "h2", text: "Buying With Confidence, Not Just Hope" },
      {
        type: "p",
        text: "The legal path to owning property in India as a US NRI has been open and clear for years. What separates a smooth purchase from a stressful one isn't luck — it's whether the payment trail, the Power of Attorney, and the due diligence were treated as seriously as the decision to buy in the first place.",
      },
      {
        type: "crosslink",
        text: "Once the tax is settled, moving the proceeds to the USA is a separate process with its own limits and forms — our repatriation guide covers it.",
        slug: "repatriate-money-india-to-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "Before you commit to any project, run it through the public RERA register — our 20-minute verification checklist shows exactly what to read.",
        slug: "rera-verification-checklist-nri-usa",
      },
      {
        type: "crosslink",
        text: "Whichever route you choose, the account you hold the money in changes your tax and repatriation position — see our NRE, NRO and FCNR comparison.",
        slug: "nre-nro-fcnr-accounts-usa-nri",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and does not constitute personalized legal or financial advice. FEMA rules, financing terms, and tax figures referenced above are current as of 2026 and subject to change — confirm your specific situation with a qualified real estate lawyer, CA, or financial advisor before proceeding with a purchase.",
      },
    ],
    faqs: [
      {
        question: "Can NRIs living in the USA buy property in India?",
        answer:
          "Yes. NRIs can buy residential and commercial property in India without RBI permission, but not agricultural land, plantation property, or farmhouses. Payment must come from an NRE, NRO, or FCNR account or direct inward remittance, and the purchase can be managed remotely through a properly drafted Power of Attorney.",
      },
      {
        question: "Do I need to visit India to buy property as an NRI?",
        answer:
          "Not necessarily. With a properly drafted, narrowly scoped Power of Attorney executed by someone you trust, most of the transaction — document signing, registration, possession — can be handled without your physical presence, though many buyers still choose to visit for final verification.",
      },
      {
        question: "Can I get a home loan from the USA to buy Indian property?",
        answer:
          "Yes. Most major Indian banks lend to NRIs, including those based in the USA, with repayment from NRE, NRO accounts, or direct remittance. Loan terms depend on your income, the property value, and current bank policy — confirm exact rates and eligibility directly with the lender.",
      },
      {
        question: "What documents prove clear title on Indian property?",
        answer:
          "A clean chain of ownership documents going back at least 12-13 years, a current encumbrance certificate confirming no mortgage or litigation, and — for under-construction or recent projects — valid RERA registration. Skipping any of these is the most common source of post-purchase disputes.",
      },
      {
        question: "Is a Power of Attorney safe for buying property remotely?",
        answer:
          "It's safe when narrowly scoped to the specific transaction, professionally drafted, and properly attested through the Indian Embassy/Consulates in the US or apostilled under the Hague Convention. It becomes risky when it's overly broad, informally drafted, or given to someone without appropriate due diligence on trust and potential conflicts of interest.",
      },
      {
        question: "How much rental income tax will I owe on Indian property?",
        answer:
          "Rental income is taxable in India from the first rupee earned, after a standard 30% deduction on net annual value and any eligible home loan interest. It must be credited to your NRO account and reported in an annual Indian tax return, and reported on your US tax return with Foreign Tax Credit claimed to prevent double taxation.",
      },
      {
        question: "Can I sell the property later and bring the money back to the USA?",
        answer:
          "Yes, subject to repatriation limits — generally up to USD 1 million per financial year through the NRE route — and documentation including Form 15CA/15CB filed through your bank. TDS at the time of sale is calculated on the full sale value unless you've obtained a Lower Deduction Certificate in advance.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-001
  // ------------------------------------------------------------------
  {
    slug: "gift-city-vs-real-estate-usa-nri",
    title: "GIFT City vs Indian Real Estate: Where Should US NRIs Put Their Next Investment?",
    dek: "GIFT City and Indian real estate aren't actually solving the same problem. Here's how to choose based on what you're optimizing for.",
    metaTitle: "GIFT City vs Real Estate: Where US NRIs Invest",
    metaDescription:
      "A US NRI's real numbers comparison — GIFT City bonds/funds vs Indian property. Tax, liquidity, repatriation, and which one actually fits you.",
    publishDate: "2026-07-16",
    readingTime: "11 min read",
    content: [
      {
        type: "p",
        text: "Well over four million Indians are building careers in the United States right now. A good number of them have a spare $50,000 to $100,000 sitting in a savings account, doing nothing, while they debate two options they keep hearing about at every gathering: a GIFT City bond or fund, or a second flat back home.",
      },
      {
        type: "p",
        text: "Both get recommended constantly. Almost nobody explains how to actually choose between them.",
      },
      {
        type: "p",
        text: "This isn't a \"which is better\" article. It's a \"which is better for you, specifically\" article — because the honest answer depends on what you're actually optimizing for.",
      },
      { type: "h2", text: "The Real Decision US NRIs Are Facing in 2026" },
      {
        type: "p",
        text: "If you already have an NRE fixed deposit and a SIP running, you're past the beginner stage. The next decision is where the next chunk of capital goes — and that's where GIFT City and Indian real estate start competing for the same rupees.",
      },
      {
        type: "p",
        text: "Here's the thing nobody says out loud: these two products aren't actually solving the same problem. One is built for liquidity and tax efficiency. The other is built for a tangible asset your parents can drive past. Confusing the two is why this decision feels harder than it should.",
      },
      { type: "h2", text: "What GIFT City Actually Offers" },
      {
        type: "p",
        text: "GIFT City — the Gujarat International Finance Tec-City, India's dedicated International Financial Services Centre — was built specifically to let NRIs invest in India-linked instruments without routing through India's domestic banking and tax system.",
      },
      { type: "p", text: "For a US NRI, three products matter most:" },
      {
        type: "ul",
        items: [
          "**Rupee-denominated bonds (Masala Bonds).** These are debt instruments issued by Indian corporates and listed on the IFSC exchange. Interest on bonds listed before July 1, 2023 gets taxed at a concessional 4% rate; bonds listed after that date sit at 9% — both far below what NRI interest income normally attracts. You're taking on the issuer's credit risk, not India's sovereign risk, so due diligence on the specific bond still matters.",
          "**Category III AIFs on specified securities.** This is the one most US NRIs haven't heard of, and it's the strongest tax outcome in the entire GIFT City ecosystem — funds that invest in specified securities and derivatives on the IFSC exchange carry zero capital gains tax in India for non-residents. Not a reduced rate. Zero.",
          "**Global Savings Accounts (foreign currency).** IFSC Banking Units let you hold USD, EUR, GBP, and other major currencies directly, earning somewhere in the 4-6% range depending on tenure — with zero rupee currency conversion friction.",
        ],
      },
      {
        type: "p",
        text: "Budget 2025 extended these tax benefits through March 2030, which — for anyone doing five-year planning — is a meaningfully long runway. It won't be permanent. Use the window while it's open.",
      },
      { type: "h2", text: "What India Real Estate Actually Offers" },
      {
        type: "crosslink",
        text: "Buying property in India is legal for NRIs without RBI permission, full stop. You can buy residential or commercial property freely. You cannot buy agricultural land, plantation property, or farmhouses — that restriction surprises people more often than it should, given how long it's been in place. Our complete guide to buying property in India walks through the whole process, from payment rules to Power of Attorney.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "p",
        text: "The tax picture on property is where things get more involved than most GIFT City comparisons ever acknowledge.",
      },
      {
        type: "p",
        text: "**Rental income** goes into your NRO account and is taxable in India from rupee one — no exemption threshold, no grace period. It has to be reported in an Indian return every year you earn it.",
      },
      {
        type: "p",
        text: "**Sale of property** triggers TDS deducted by the buyer, and this is the step that catches people off guard: TDS is calculated on the full sale value, not just your gain, unless you've applied in advance for a Lower Deduction Certificate (Form 13) from the tax department. Skip that step and a chunk of your sale proceeds sits locked up for a year waiting on a refund.",
      },
      {
        type: "p",
        text: "On the actual capital gains rate: property held over 24 months qualifies for long-term treatment, currently taxed at a flat 12.5% without indexation for property acquired on or after July 23, 2024 (property bought earlier may fall under different transition rules — this is genuinely one to confirm with a CA against your specific purchase date). Add applicable surcharge and cess, and the effective rate on larger transactions can land closer to 13-15%. Property held under 24 months is short-term and taxed at 30% plus cess. These figures move with Finance Act updates, so treat them as current-as-of-2026, not permanent.",
      },
      {
        type: "p",
        text: "Repatriation is capped — up to USD 1 million per financial year from NRE-linked proceeds, with documentation (Form 15CA/15CB) required for every transfer.",
      },
      { type: "h2", text: "Side by Side, Without the Spin" },
      {
        type: "table",
        headers: ["", "GIFT City (Bonds/Funds)", "Indian Real Estate"],
        rows: [
          ["Effort to manage remotely", "Low — demat account, no physical presence needed", "High — requires a trusted local contact or Power of Attorney"],
          ["Liquidity", "High for bonds; fund-dependent", "Low — selling takes months, sometimes longer"],
          ["Tax on gains", "4-9% on Masala Bond interest; zero on qualifying AIF capital gains", "12.5%+ LTCG, plus TDS friction on sale"],
          ["Tangible value to family", "None", "Yes — a place, not just a number on a statement"],
          ["Currency exposure", "Foreign-currency instruments avoid INR swings", "Fully INR-denominated, no hedge"],
          ["Regulatory backing", "IFSCA, benefits confirmed through March 2030", "RBI/FEMA, stable but tax rules shift more often"],
        ],
      },
      {
        type: "p",
        text: "Neither column is \"the winner.\" That's the point most comparisons miss by forcing a verdict where none exists.",
      },
      { type: "h2", text: "Which One Fits Which Kind of US NRI" },
      {
        type: "p",
        text: "If you're the person who checks your portfolio during your morning commute and wants clean numbers without a PoA, a lawyer, or a tenant — GIFT City is the more honest fit. It behaves like an investment, because it is one.",
      },
      {
        type: "internallink",
        text: "If your parents keep raising \"the flat\" every time you call home, and you actually want a place in India for eventual return, retirement, or rental income you can point to — real estate does something GIFT City structurally cannot. Our GIFT City Knowledge Pavilion breaks down the tax and compliance side of that decision if you want the fuller picture.",
        href: "/#wealth",
      },
      {
        type: "p",
        text: "There's also a third kind of US NRI, and it's probably the largest group: someone with enough capital to not have to choose.",
      },
      { type: "h2", text: "Can You Do Both?" },
      {
        type: "p",
        text: "For most NRIs in the $150,000+/year income bracket with five-plus years of savings behind them, the answer is a simple allocation split rather than a binary decision. A common pattern among clients we've spoken with: GIFT City for the portion of capital that needs to stay liquid and tax-efficient, real estate for the portion earmarked as a long-term family asset that was always going to be a 10-15 year hold anyway.",
      },
      {
        type: "p",
        text: "The mistake isn't choosing one. The mistake is treating this as an either/or when your actual capital and timeline don't force that constraint.",
      },
      {
        type: "cta",
        text: "Want a GIFT City specialist and a real estate advisor to walk through your specific numbers, in person?",
      },
      { type: "h2", text: "Making the Call With the Right Advice" },
      {
        type: "p",
        text: "Neither GIFT City nor real estate is the objectively correct answer — and anyone who tells you otherwise is selling you something. What matters is being honest about whether you're optimizing for liquidity and tax efficiency, or for a tangible family asset, and building your allocation around that answer instead of guessing.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and does not constitute personalized financial or tax advice. Tax rates, IFSCA regulations, and FEMA rules referenced above are current as of 2026 and subject to change — confirm applicable figures with a qualified CA or financial advisor before making investment decisions.",
      },
    ],
    faqs: [
      {
        question: "Is GIFT City really tax-free for NRIs?",
        answer:
          "Not universally. Rupee-denominated bonds carry a concessional 4-9% tax on interest depending on listing date. Certain Category III AIFs investing in specified securities on the IFSC exchange do carry zero capital gains tax for non-residents — but that specific zero-tax treatment applies to that fund category, not to every GIFT City product.",
      },
      {
        question: "Is real estate still a good investment for NRIs in 2026?",
        answer:
          "It depends on your goal. As a pure return-on-capital play, real estate's TDS friction and low liquidity make it less efficient than several alternatives. As a family asset with rental income and eventual use, it remains a reasonable choice — just go in knowing the tax and repatriation mechanics upfront.",
      },
      {
        question: "Can I invest in GIFT City without visiting India?",
        answer:
          "Yes. GIFT City accounts and investments are designed for remote NRI access — everything from KYC to ongoing transactions can typically be completed without a trip to India, unlike a property purchase which usually needs a local presence or a Power of Attorney.",
      },
      {
        question: "How much money do I need to start with GIFT City?",
        answer:
          "Minimums vary by product and provider — bonds and funds each have their own entry thresholds, and IFSC Banking Unit accounts often have lower minimums than the investment products. Confirm current minimums with the specific provider before committing.",
      },
      {
        question: "Does the India-US DTAA reduce tax on either option?",
        answer:
          "For real estate, no — rental income and capital gains on Indian immovable property are taxed in India regardless of DTAA, since property income is source-state taxed under the treaty. For certain GIFT City fund structures, the tax treatment already sits at zero or near-zero under India's domestic IFSC rules, so DTAA isn't usually the operative mechanism there either.",
      },
      {
        question: "What happens to my GIFT City investment if I move back to India?",
        answer:
          "Your residency status change would affect ongoing tax treatment going forward, since several of these benefits are specifically tied to non-resident status. This is worth discussing with an advisor before a return-to-India move, not after.",
      },
      {
        question: "Is it risky to buy Indian property through a Power of Attorney from the USA?",
        answer:
          "It's manageable risk, not zero risk. A narrowly drafted, transaction-specific PoA, properly apostilled or attested through the Indian Embassy/Consulates in the USA, and paired with independent due diligence, is a well-established and safe path. A broad, informally drafted PoA handed to a relative to handle everything is where NRI property disputes actually originate.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-002
  // ------------------------------------------------------------------
  {
    slug: "nri-property-tax-filing-usa",
    title: "NRI Property Tax Filing Guide: Selling or Renting Out Indian Real Estate from the USA",
    dek: "TDS on a property sale is calculated on the full sale value, not your profit, unless you apply for a certificate in advance. Here's the guide that closes that gap.",
    metaTitle: "NRI Property Tax Filing from USA: TDS & DTAA",
    metaDescription:
      "Renting out or selling Indian property from the USA? Here's exactly what tax applies, what's withheld, and how DTAA stops double taxation.",
    publishDate: "2026-07-16",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text: "Somewhere in the USA right now, an NRI is staring at a TDS deduction on their property sale that's nearly a third higher than they expected. Not because the tax rate changed overnight. Because nobody told them TDS gets calculated on the full sale value, not the profit, unless you apply for a certificate in advance.",
      },
      {
        type: "p",
        text: "That single gap in knowledge costs US NRIs real money every single year. This is the guide that closes it.",
      },
      { type: "h2", text: "Two Scenarios, Two Very Different Tax Treatments" },
      {
        type: "p",
        text: "If you own property in India, you're dealing with tax in one of two moments: while you're renting it out, or when you sell it. Most generic \"NRI taxation\" content blends these together. They shouldn't be blended — the mechanics, the forms, and the mistakes are completely different for each.",
      },
      {
        type: "p",
        text: "Figure out which situation applies to you before you read further. This guide handles both, in order.",
      },
      { type: "h2", text: "If You're Renting Out Your India Property" },
      {
        type: "p",
        text: "Rental income from Indian property is taxable in India for NRIs. There's no exemption threshold and no grace period — it's taxable from the first rupee, every year you earn it.",
      },
      {
        type: "p",
        text: "The mechanics: rent gets credited to your NRO account (not NRE — this trips people up constantly). If your tenant is required to deduct TDS on rent above the applicable threshold, that happens before the money even reaches you. You then have to include the gross rental income in your Indian income tax return, claim the standard deduction (30% of net annual value, after municipal taxes), deduct home loan interest if applicable, and pay tax on the balance at slab rates.",
      },
      {
        type: "p",
        text: "Here's the part that catches US NRIs specifically off guard: while the US taxes worldwide income, India taxes Indian-source property income. That does not mean you are taxed twice. It means you must properly report your rental income on IRS Schedule E while paying Indian advance tax, then claim the Foreign Tax Credit (IRS Form 1116) to offset your US liability.",
      },
      { type: "h2", text: "If You're Selling Your India Property" },
      {
        type: "p",
        text: "This is where the real money is at stake, and where the confusion is worst.",
      },
      {
        type: "p",
        text: "**TDS on sale is deducted by the buyer, on the entire sale value — not your gain.** Under Section 195, this isn't optional for the buyer, and it isn't proportional to your actual profit unless you've done something about it in advance.",
      },
      {
        type: "p",
        text: "For property held over 24 months (long-term), the applicable capital gains rate currently sits at a flat 12.5% without indexation for property acquired on or after 23 July 2024. Property purchased before that date can fall under a different transition treatment — this is genuinely a \"confirm your specific purchase date and structure with a CA\" situation, not a guess-it-yourself one. Add applicable surcharge and cess, and on larger transactions the effective rate can land in the 13-15% range. Property held under 24 months is short-term and taxed at 30% plus cess — noticeably steeper.",
      },
      {
        type: "p",
        text: "Now here's the number that actually matters day-to-day: without any intervention, the buyer withholds TDS calculated against the full sale price, which is almost always far higher than 12.5-15% of your actual gain. If your flat sells for ₹1.5 crore and your actual taxable gain is ₹40 lakhs, a buyer withholding at the default rate against the full ₹1.5 crore locks up an amount that has nothing to do with your real tax liability — for months, until you file and claim the refund.",
      },
      {
        type: "p",
        text: "**The fix is applying for a Lower Deduction Certificate (Form 13) before the sale closes.** This lets the tax department certify a lower — often much lower — TDS rate based on your actual computed gain, so the buyer withholds closer to your true liability instead of a blunt percentage of the sale price. It takes time to process, which means it needs to happen before you're mid-negotiation, not after you've already signed.",
      },
      {
        type: "p",
        text: "One more procedural shift worth knowing: TDS filings for non-resident sellers go through Form 27Q — being renumbered Form 144 from April 2026 — not Form 26QB, which is restricted to resident-seller transactions. If your buyer's CA files the wrong form, expect delays.",
      },
      { type: "h2", text: "How the India-US DTAA Prevents Double Taxation" },
      {
        type: "p",
        text: "Here's the honest version of what DTAA does and doesn't do for real estate, because most explanations get this wrong.",
      },
      {
        type: "p",
        text: "Under Article 6 and Article 13 of the India-US DTAA, rental income and capital gains from Indian immovable property are source-state taxed — meaning India retains primary taxing rights. On your US tax return, you claim Foreign Tax Credit (Form 1116) to offset US taxes.",
      },
      {
        type: "p",
        text: "What protects you from double taxation is Article 25 of the India-US DTAA: taxes paid in India can be claimed as a Foreign Tax Credit (IRS Form 1116) against your US federal income tax on the exact same income. You do not get taxed twice.",
      },
      {
        type: "p",
        text: "To formally substantiate your foreign tax credits with the IRS, you will need your Indian Form 16A (TDS certificate), your Indian ITR acknowledgement (ITR-V), and proof of tax challan payments. Always consult a cross-border CPA to ensure proper reporting on Schedule E and Form 1116.",
      },
      {
        type: "quote",
        text: "This section explains the mechanism, not your specific filing position. Confirm your position with a US CPA alongside your Indian CA.",
      },
      { type: "h2", text: "Step-by-Step: Filing Your Return as a US NRI" },
      {
        type: "p",
        text: "Here is the sequence that keeps things clean:",
      },
      {
        type: "ul",
        items: [
          "Get your Indian PAN linked with your Aadhaar (if you have one) or marked as non-resident in the income tax portal database.",
          "Ensure your tenant deducts TDS under Section 195 (for rental income) and deposits it against your PAN using Form 27Q, generating Form 16A certificates.",
          "Check your Annual Information Statement (AIS) and Form 26AS on the e-filing portal before filing to reconcile all taxes withheld.",
          "File your Indian return (ITR-2) before the 31 July deadline for individual non-audit taxpayers.",
          "Report foreign rental property and income on US IRS Schedule E, declaring gross rent and allowable deductions.",
          "Compute your Foreign Tax Credit on IRS Form 1116 to offset US taxes with taxes paid in India.",
        ],
      },
      { type: "h2", text: "The Traps That Cause Real Problems" },
      {
        type: "p",
        text: "Across hundreds of NRI consultations, the same mistakes surface repeatedly:",
      },
      {
        type: "ul",
        items: [
          "Letting the buyer withhold full 20%+ TDS on a sale when a Lower Deduction Certificate could have cut the upfront cash lockup to a fraction.",
          "Assuming a Lower Deduction Certificate can be requested after the sale agreement is signed. It can't meaningfully help you at that point; the TDS calculation is already locked to the transaction.",
          "Crediting rental income to an NRE account instead of NRO. It's the wrong account category for India-sourced income and creates a paper trail mismatch that tax authorities notice.",
          "Treating foreign tax status as an excuse not to file in India or the US. Both jurisdictions require compliant filings.",
        ],
      },
      {
        type: "crosslink",
        text: "None of this matters until you actually own property in India, of course. If you're still at the purchase stage, our guide to buying property in India as a US NRI covers the payment trail and Power of Attorney decisions that determine whether you land in a clean tax position later.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "cta",
        text: "Want to be matched with a CA and CPA who specialize in US-India NRI tax filing?",
      },
      { type: "h2", text: "Getting This Right the First Time" },
      {
        type: "p",
        text: "The gap between what most US NRIs assume about property tax and what actually applies is exactly where money gets lost — either through over-withheld TDS sitting idle for a year, or through a filing gap that surfaces as a notice much later. Neither outcome is necessary once you know which of the two scenarios you're actually in.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and does not constitute personalized tax advice. Indian tax rates, forms, and DTAA provisions referenced above are current as of 2026 and subject to change with Finance Act updates — confirm your specific filing obligations with a qualified CA experienced in NRI taxation, and confirm your US tax position with a licensed CPA.",
      },
    ],
    faqs: [
      {
        question: "Do NRIs pay tax on rental income from India property?",
        answer:
          "Yes. Rental income from Indian property is taxable in India for NRIs regardless of residency. It must be credited to an NRO account, is subject to TDS where applicable, and must be reported in an Indian income tax return. The India-US DTAA prevents this income from being taxed twice through Foreign Tax Credits, not from being taxed at all.",
      },
      {
        question: "Is TDS on property sale calculated on my profit or the full sale price?",
        answer:
          "By default, TDS is withheld against the full sale value, not your actual gain. Applying for a Lower Deduction Certificate (Form 13) before the sale closes lets the tax department certify a rate closer to your real capital gains liability, avoiding unnecessary cash lock-up.",
      },
      {
        question: "What is a Lower Deduction Certificate and when should I apply?",
        answer:
          "It's a certificate from the Indian tax department authorizing the buyer to withhold TDS at a reduced rate based on your computed capital gain rather than the full sale value. Apply before finalizing the sale agreement — once signed, it's too late to meaningfully reduce the withholding on that transaction.",
      },
      {
        question: "Does the India-US DTAA make my rental income tax-free?",
        answer:
          "No. Rental income and capital gains on Indian immovable property remain taxable in India under the treaty's source-state rules. Under the India-US DTAA (Article 25), you claim Foreign Tax Credit on IRS Form 1116 for taxes paid in India, preventing double taxation.",
      },
      {
        question: "Which account should receive my Indian rental income?",
        answer:
          "Your NRO (Non-Resident Ordinary) account, not your NRE account. NRO is designated for India-sourced income like rent and dividends, while NRE is meant for funds remitted from abroad. Using the wrong account creates compliance mismatches.",
      },
      {
        question: "How much of my property sale proceeds can I send back to the USA?",
        answer:
          "Repatriation of sale proceeds is generally capped at USD 1 million per financial year through the NRE route, subject to documentation including Form 15CA/15CB filed through your bank before the transfer.",
      },
      {
        question: "Do I still need an Indian CA if I understand these rules?",
        answer:
          "Understanding the mechanics helps you ask the right questions and avoid the most common traps, but applying for a Lower Deduction Certificate, computing exact capital gains, and filing correctly is specialist work. Treat this guide as preparation for that conversation, not a replacement for it.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-004
  // ------------------------------------------------------------------
  {
    slug: "best-bangalore-projects-nri-investment-usa",
    title: "Best Real Estate Projects in Bangalore for US NRI Investment (2026)",
    dek: "Sarjapur Road, Devanahalli, Whitefield, and Budigere Cross — which Bangalore micro-market and developer actually fits what you're optimizing for.",
    metaTitle: "Best Bangalore Real Estate Projects for US NRIs",
    metaDescription:
      "Sarjapur Road, Devanahalli, Whitefield — which Bangalore micro-market and developer actually fits your goals as a US NRI investor? Here's the honest breakdown.",
    publishDate: "2026-07-16",
    readingTime: "11 min read",
    content: [
      {
        type: "p",
        text: 'If you\'re a US NRI and Bangalore keeps coming up as "the one to look at," there\'s a reason. It\'s the only Indian city where the tenant pool and the investor pool are practically the same profile — tech professionals who could just as easily be you, five years ago.',
      },
      {
        type: "p",
        text: 'That doesn\'t make every project in Bangalore a good buy. It makes the city worth being specific about, instead of vaguely "interested in."',
      },
      { type: "h2", text: "Why Bangalore Keeps Winning the NRI Conversation" },
      {
        type: "p",
        text: "Most NRI property conversations eventually land on Bangalore, and it's not sentiment — it's the tenant math. A city built around IT parks generates a steady stream of renters with stable, above-average incomes, which is exactly the demand profile that keeps rental yields from collapsing the way they do in oversupplied markets.",
      },
      {
        type: "p",
        text: "The catch: Bangalore isn't one market. It's several micro-markets moving at different speeds, and the developer and location matter more here than almost anywhere else in India.",
      },
      { type: "h2", text: "Sarjapur Road — The Micro-Market Most NRIs Actually Want" },
      {
        type: "p",
        text: "If there's a single most-asked-about location among US-based NRI investors, it's Sarjapur Road. The reasons are consistent across the buyers we hear from: proximity to multiple IT hubs, a growing cluster of international schools (relevant if the plan is eventual return), and rental demand that's held up better than newer, less-established corridors.",
      },
      {
        type: "p",
        text: "Puravankara, Godrej Properties, and Assetz Property Group all have active projects along this stretch. The practical difference between them tends to come down to delivery track record and clubhouse/amenity scale rather than dramatic price gaps — worth comparing directly rather than picking on brand recognition alone.",
      },
      { type: "h2", text: "North Bangalore (Devanahalli) — Where the Appreciation Numbers Are Loudest" },
      {
        type: "p",
        text: "Devanahalli and the broader North Bangalore corridor near Kempegowda International Airport have posted the strongest reported appreciation in the city recently — industry data has cited villa appreciation in the low-to-mid teens percentage range for 2026, though any single-year figure like that should be treated as a data point, not a promise.",
      },
      {
        type: "p",
        text: "Prestige Group has been expanding aggressively here, building lakeside, township-scale developments with wide internal roads and large clubhouse footprints — the kind of large-format project that tends to hold value well precisely because of its scale.",
      },
      {
        type: "p",
        text: "The honest tradeoff: North Bangalore's growth is real, but it's also newer and less proven than Bangalore's established IT corridors. You're buying more upside with a slightly longer patience requirement.",
      },
      { type: "h2", text: "Whitefield — The Steady, Less Exciting Choice (That's Not a Bad Thing)" },
      {
        type: "p",
        text: "Whitefield doesn't generate the same appreciation headlines as Devanahalli, and that's exactly its appeal. It's an established IT corridor with a mature rental market, which means more predictable occupancy and less speculation-driven price volatility.",
      },
      {
        type: "p",
        text: "Sobha has a strong, long-standing presence in and around this belt, including Sobha Infinia in Koramangala and Sobha Neopolis off the Marathahalli-ORR stretch — both frequently cited for construction quality, which matters more in Bangalore than in newer markets where fewer projects have had time to prove out.",
      },
      {
        type: "p",
        text: "For an NRI prioritizing stable rental income over aggressive appreciation, Whitefield-adjacent inventory is the less glamorous, more defensible choice.",
      },
      { type: "h2", text: "East Bangalore — Budigere Cross and Old Madras Road" },
      {
        type: "p",
        text: "Brigade Group has built a significant presence along the Budigere Cross and Old Madras Road corridor. This area sits a notch behind Sarjapur Road and Whitefield in current rental demand, but it's priced accordingly, and the infrastructure investment happening along this stretch is the kind that tends to close the gap over a 5-7 year horizon rather than overnight.",
      },
      { type: "h2", text: "How to Actually Compare These Options" },
      {
        type: "p",
        text: 'Don\'t start with "which project has the best amenities." Start with what you\'re optimizing for:',
      },
      {
        type: "ul",
        items: [
          "**Rental yield now, with less appreciation risk** — Whitefield-adjacent Sobha developments, or established Sarjapur Road inventory.",
          "**Appreciation over the next 5-10 years, with more patience required** — Devanahalli/North Bangalore, Prestige's township-scale projects.",
          "**Balance of both** — Sarjapur Road remains the most-cited answer for a reason, though it's also the most competitively priced corridor as a result.",
        ],
      },
      {
        type: "p",
        text: "None of this is a recommendation to buy a specific unit sight unseen. It's a framework for narrowing four strong developers down to the two or three worth an actual site visit or a detailed conversation with an advisor.",
      },
      { type: "h2", text: "What to Verify Before You Commit to Any of These" },
      {
        type: "ul",
        items: [
          "**RERA registration status** — confirm directly on the Karnataka RERA portal, not from a broker's assurance.",
          "**Current pricing and inventory** — every figure and appreciation percentage cited above reflects reported 2026 market data and changes regularly; treat it as directional, not a quote.",
          "**Builder delivery track record** on their *previous* projects specifically, not just the one being pitched to you.",
          "**Actual rental demand in the immediate vicinity**, not the broader corridor — a project five minutes from an IT park behaves very differently from one twenty minutes away, even with the same area name attached.",
        ],
      },
      {
        type: "crosslink",
        text: "Once you've picked a micro-market, the next decision is execution — how payment must flow, whether you need to fly back for anything, and how to structure a Power of Attorney safely. Our complete guide to buying property in India as a US NRI walks through exactly that.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "Whichever corridor you land on, factor in what happens after you own it — rental income is taxable in India from day one, and a future sale triggers TDS on the full sale value unless you plan ahead. Our guide covers what happens at tax time once you own this property.",
        slug: "nri-property-tax-filing-usa",
      },
      {
        type: "crosslink",
        text: "And if you're still deciding whether a physical asset is even the right move for this portion of your capital, it's worth comparing this to a GIFT City investment before you commit either way.",
        slug: "gift-city-vs-real-estate-usa-nri",
      },
      {
        type: "crosslink",
        text: "Bangalore isn't the only IT-driven city worth comparing on this basis — if you're also weighing Pune or Hyderabad, the yield and diversification tradeoffs work differently there than they do across Bangalore's micro-markets.",
        slug: "pune-vs-hyderabad-property-investment-nri-usa",
      },
      {
        type: "cta",
        text: "Want to compare these micro-markets with a Bangalore real estate advisor face to face?",
      },
      { type: "h2", text: "The Bottom Line for Bangalore" },
      {
        type: "p",
        text: "Bangalore's strength for NRI investors isn't any single project — it's the depth of established developers and proven micro-markets to choose from, which is more than most Indian cities can offer. The work is in matching the right corridor to what you're actually optimizing for, then doing the verification homework before any money moves.",
      },
      {
        type: "crosslink",
        text: "Buying in Bangalore without flying back? The Power of Attorney guide covers how to complete registration from the USA.",
        slug: "power-of-attorney-nri-property-india-usa",
      },
      {
        type: "crosslink",
        text: "Shortlisted a project in either city? Check the promoter's track record on the state RERA register first.",
        slug: "rera-verification-checklist-nri-usa",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and reflects reported market data as of 2026. Project details, pricing, and appreciation figures change frequently and should be independently verified with the developer, a licensed broker, and the Karnataka RERA portal before making any investment decision. This is not personalized investment advice, and no project mentioned here is a paid partner or sponsor of NRI Investment Expo.",
      },
    ],
    faqs: [
      {
        question: "Which area in Bangalore is best for NRI property investment?",
        answer:
          "Sarjapur Road is the most commonly cited micro-market among US-based NRI investors, due to strong IT-hub proximity, international school access, and consistent rental demand. North Bangalore (Devanahalli) has shown stronger recent appreciation, while Whitefield offers steadier, more established rental income.",
      },
      {
        question: "Which developers are considered reliable for NRI investment in Bangalore?",
        answer:
          "Sobha, Prestige Group, Brigade Group, Puravankara, Godrej Properties, and Assetz Property Group are among Bangalore's most established developers, each with a multi-decade delivery track record. Reliability still varies by specific project — check each developer's history on the exact project type you're considering, not just their overall brand name.",
      },
      {
        question: "Is North Bangalore or established areas like Whitefield better for NRI investors?",
        answer:
          "It depends on your priority. North Bangalore near Devanahalli has posted stronger recent appreciation but carries more execution and timeline risk as a newer corridor. Whitefield and similar established areas offer steadier rental income with less appreciation upside — a lower-risk, lower-reward profile by comparison.",
      },
      {
        question: "Can US NRIs buy under-construction projects in Bangalore?",
        answer:
          "Yes, provided the project is RERA-registered, which is now standard practice for legitimate developers in Karnataka. Confirm registration directly on the Karnataka RERA portal before paying any booking amount, and understand that under-construction purchases carry timeline and delivery risk that completed inventory doesn't.",
      },
      {
        question: "What rental yields can NRIs expect from Bangalore property?",
        answer:
          "Yields vary significantly by micro-market and property type, generally landing in a low-single-digit percentage range typical of Indian metro residential real estate, with established IT-corridor locations like Whitefield and Sarjapur Road typically outperforming newer, less-proven corridors on occupancy consistency.",
      },
      {
        question: "How do I verify a Bangalore project is legitimate before investing from the USA?",
        answer:
          "Check RERA registration on the Karnataka RERA portal, request the developer's delivery history on prior projects, verify the encumbrance certificate through the local sub-registrar, and ideally have an independent party physically inspect the site rather than relying solely on the developer's marketing materials or a broker's assurance.",
      },
      {
        question: "Should I choose a project based on the developer or the location first?",
        answer:
          "Location first, developer second — a strong developer in a weak rental micro-market still underperforms a solid mid-tier developer in a high-demand corridor. That said, within any given strong location, developer track record on timely delivery becomes the deciding factor between otherwise similar options.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-005
  // ------------------------------------------------------------------
  {
    slug: "pune-vs-hyderabad-property-investment-nri-usa",
    title: "Pune vs Hyderabad: Where Should US NRIs Invest in Indian Real Estate?",
    dek: "Higher yield in Hyderabad's concentrated IT corridor, or Pune's steadier, more diversified base — the real tradeoff behind a comparison that usually stops too early.",
    metaTitle: "Pune vs Hyderabad: Best City for US NRI Investment",
    metaDescription:
      "Higher yield in Hyderabad or diversified stability in Pune? A real comparison of rental yields, developers, and risk for US-based NRI investors.",
    publishDate: "2026-07-16",
    readingTime: "11 min read",
    content: [
      {
        type: "p",
        text: 'These two cities get compared constantly in NRI investment circles, and the comparison usually stops at "both are good IT cities." That\'s true and also useless — it doesn\'t tell you which one fits your specific goal.',
      },
      {
        type: "p",
        text: "Pune and Hyderabad solve different problems. One is the value-and-appreciation play. The other is the higher-yield, higher-conviction IT bet. Here's the actual difference, not the surface-level version.",
      },
      { type: "h2", text: "The Headline Numbers, With Context" },
      {
        type: "p",
        text: "Reported 2026 rental yields put Hyderabad in a 4-6% band and Pune in a 3-4% band, with select Pune micro-markets touching closer to 5%. Read those numbers as directional, not as a promise for any specific unit — yield depends entirely on the exact building and its distance from actual employment centers, not the city average.",
      },
      {
        type: "p",
        text: "The gap exists for a structural reason: Hyderabad's IT corridor is more concentrated — Financial District, Gachibowli, and HITEC City sit close together and host the Indian offices of Apple, Google, Microsoft, Meta, and Amazon within a tight radius. Pune's tech and auto-corridor employment is more spread out, which softens rental demand concentration even as it broadens the number of viable investment areas.",
      },
      { type: "h2", text: "Pune: The Established, Diversified Choice" },
      {
        type: "p",
        text: "Pune's advantage isn't a single hot corridor — it's that the city has multiple credible micro-markets simultaneously, which spreads risk across auto-sector, IT-sector, and education-driven demand rather than betting on one industry.",
      },
      {
        type: "p",
        text: "Lodha Group has a strong premium presence here, with developments like Lodha Bellissimo and Lodha Codename Goldcrest positioned at the higher end of Pune's residential market — the kind of large-scale branded development that tends to hold resale value better than smaller, independent builders.",
      },
      {
        type: "p",
        text: "Godrej Properties and Kohinoor Group are both active with IT-corridor-adjacent residential projects that lean more toward the mid-to-upper segment — generally the more liquid resale category for an NRI who wants an easier eventual exit than ultra-luxury inventory typically offers.",
      },
      {
        type: "p",
        text: "Pune's honest limitation: entry prices in its most desirable pockets have risen enough that the value gap versus Bangalore or Hyderabad has narrowed. It's still a reasonable buy — it's just no longer the clearly-cheaper option it was several years ago.",
      },
      { type: "h2", text: "Hyderabad: The Concentrated IT Bet" },
      {
        type: "p",
        text: "Hyderabad's Financial District and HITEC City corridor is doing something few Indian cities can match — a tight geographic cluster of the exact multinational employers that produce the NRI-tenant profile in the first place.",
      },
      {
        type: "p",
        text: "Brigade Group's Brigade Gateway development in Kokapet sits close to this corridor, positioned toward the premium end with larger-format units. Godrej Properties has Godrej Regal Pavilion in the Gachibowli belt, closer to the mid-to-upper segment and the kind of ticket size more US NRIs are actually working with on a first India property purchase.",
      },
      {
        type: "p",
        text: "Beyond the two large national developers, the broader Gachibowli-HITEC City-Manikonda-Bachupally corridor has a wide range of active local and regional projects — this is where doing developer-specific homework matters more than in Pune, since Hyderabad's developer landscape includes more regional players alongside the national names, and delivery track records vary more widely as a result.",
      },
      {
        type: "p",
        text: "Hyderabad's honest limitation: the concentration that drives its yield advantage also means it's a more single-industry bet. If the IT sector in that specific corridor slows, the demand pool doesn't have the same diversification Pune's multi-sector base provides.",
      },
      { type: "h2", text: "Side by Side" },
      {
        type: "table",
        headers: ["", "Pune", "Hyderabad"],
        rows: [
          ["Typical rental yield", "3-4% (select areas ~5%)", "4-6%"],
          ["Demand driver", "IT + auto sector + education, diversified", "IT corridor (Financial District/HITEC/Gachibowli), concentrated"],
          ["Entry price trend", "Rising, narrowing value gap", "Still comparatively competitive"],
          ["Developer landscape", "Fewer players, more nationally established", "Mix of national names + more regional players"],
          ["Best fit for", "Diversification-minded, longer patience for appreciation", "Yield-focused, comfortable with concentrated IT-sector exposure"],
        ],
      },
      { type: "h2", text: "Which One Actually Fits a US NRI" },
      {
        type: "p",
        text: "If your priority is rental income relative to purchase price, Hyderabad's numbers currently make a stronger case — the concentration of major tech employers around Financial District and Gachibowli is a genuine structural advantage, not just marketing.",
      },
      {
        type: "p",
        text: "If your priority is a more diversified, lower-single-industry-risk bet with a well-established mid-to-premium developer landscape, Pune remains the steadier choice — you're trading some yield for broader economic base.",
      },
      {
        type: "p",
        text: "Neither is the wrong answer. The mistake is choosing based on which city a WhatsApp group happened to be discussing that week, instead of which risk profile actually matches your goal.",
      },
      { type: "h2", text: "Before You Commit to Either City" },
      {
        type: "ul",
        items: [
          "**Confirm RERA registration on the relevant state portal** — Maharashtra RERA for Pune, Telangana RERA (TS-RERA) for Hyderabad. Registration numbers should be checkable independently, not just quoted to you by a sales team.",
          "**Get the developer's delivery history on their *previous* two or three projects specifically** — not the flagship project they're currently marketing.",
          '**Have someone independently verify the property\'s actual distance to the employment corridor** it\'s being sold against — "10 minutes from Gachibowli" and "10 minutes from Gachibowli in off-peak traffic" are not the same claim.',
        ],
      },
      {
        type: "crosslink",
        text: "Whichever city you lean toward, the execution mechanics are identical — payment through the right account, a properly scoped Power of Attorney if you can't be there in person, and title verification before any money moves. Our complete guide to buying property in India as a US NRI covers all of it.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "And once you own it, rental income and any eventual sale both come with their own tax mechanics — TDS on sale is calculated on the full price, not your gain, unless you plan ahead. Our guide covers what happens at tax time once you own this property.",
        slug: "nri-property-tax-filing-usa",
      },
      {
        type: "crosslink",
        text: "If Bangalore is also on your shortlist, its micro-markets — Sarjapur Road, Devanahalli, Whitefield — carry a different yield-versus-appreciation tradeoff again, worth comparing directly rather than assuming all three IT-driven cities behave the same way.",
        slug: "best-bangalore-projects-nri-investment-usa",
      },
      {
        type: "cta",
        text: "Want a side-by-side breakdown from advisors who cover both cities?",
      },
      { type: "h2", text: "Making the Choice" },
      {
        type: "p",
        text: "Pune and Hyderabad aren't competing for the same investor profile, even though they get compared as if they are. Hyderabad rewards conviction in a concentrated IT bet with a real yield advantage. Pune rewards patience with a broader, steadier economic base. Pick based on which tradeoff you're actually comfortable with — not based on whichever city came up most recently in conversation.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and reflects reported market data as of 2026. Project details, pricing, yields, and RERA status change frequently and should be independently verified with the developer, a licensed broker, and the relevant state RERA portal before making any investment decision. This is not personalized investment advice, and no project mentioned here is a paid partner or sponsor of NRI Investment Expo.",
      },
    ],
    faqs: [
      {
        question: "Which city gives better rental yield for NRIs — Pune or Hyderabad?",
        answer:
          "Hyderabad generally offers higher reported rental yields, in a 4-6% range, driven by the concentrated Financial District/HITEC City/Gachibowli IT corridor. Pune's yields typically run 3-4%, with select micro-markets reaching closer to 5%, reflecting its more diversified but less geographically concentrated employment base.",
      },
      {
        question: "Which developers are established in Pune for NRI investment?",
        answer:
          "Lodha Group has a strong premium presence with developments like Lodha Bellissimo, while Godrej Properties and Kohinoor Group are active in the mid-to-upper IT-corridor segment. Delivery track record on each developer's specific past projects should be verified independently rather than assumed from brand recognition alone.",
      },
      {
        question: "Which areas in Hyderabad are best for NRI property investment?",
        answer:
          "Financial District, Gachibowli, and HITEC City form the core corridor most cited for NRI investment, given their proximity to major multinational employers. Brigade Gateway in Kokapet and Godrej Regal Pavilion in Gachibowli are among the more established national-developer projects in this belt.",
      },
      {
        question: "Is Hyderabad riskier than Pune for real estate investment?",
        answer:
          "Hyderabad's yield advantage comes with more concentrated exposure to a single industry cluster, while Pune's demand is spread across IT, auto, and education sectors. Neither is objectively riskier — the risk profile differs, and the better fit depends on whether you prioritize yield or diversification.",
      },
      {
        question: "How do I verify RERA registration for a property in Pune or Hyderabad?",
        answer:
          "Pune projects are registered under Maharashtra RERA (MahaRERA), and Hyderabad projects under Telangana RERA (TS-RERA). Both maintain public portals where you can independently verify a project's registration number, approved layout, and any complaint history rather than relying on a developer or broker's claim.",
      },
      {
        question: "Do rental yields in Pune and Hyderabad justify the investment compared to Bangalore?",
        answer:
          "It depends on the specific project and micro-market rather than the city broadly. Hyderabad's yield range is currently competitive with or ahead of many Bangalore corridors, while Pune trades some yield for a more diversified economic base — a direct project-to-project comparison matters more than a city-level generalization.",
      },
      {
        question: "Can I manage a Pune or Hyderabad property purchase entirely from the USA?",
        answer:
          "Yes, using the same framework as any NRI property purchase — payment through NRE/NRO/FCNR accounts, a narrowly scoped Power of Attorney for someone handling on-ground steps, and independent verification of title and RERA status before committing funds.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-006
  // ------------------------------------------------------------------
  {
    slug: "luxury-real-estate-mumbai-gurgaon-nri-usa",
    title: "Top Luxury Real Estate Projects in Mumbai and Gurgaon for US NRIs",
    dek: "Scarcity in Mumbai, momentum in Gurgaon — a real comparison for the US NRI where ₹3-5 crore+ ($350k-$600k+) isn't the question, fit is.",
    metaTitle: "Luxury Real Estate in Mumbai & Gurgaon for US NRIs",
    metaDescription:
      "Scarcity in Mumbai or growth momentum in Gurgaon? A real comparison of luxury real estate, top developers, and pricing for US-based NRI buyers.",
    publishDate: "2026-07-16",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text: 'There\'s a specific kind of US NRI this blog is for: senior enough in their career that ₹3-5 crore+ ($350k-$600k+) isn\'t a stretch, and the question isn\'t "can I afford India property" but "which city\'s luxury segment actually holds value the way I expect it to."',
      },
      {
        type: "p",
        text: "Mumbai and Gurgaon are India's two real answers to that question. They're not the same answer, though — and at this price point, the difference matters more than it does at the entry level.",
      },
      { type: "h2", text: "Why Luxury Real Estate Behaves Differently" },
      {
        type: "p",
        text: "Below a certain price point, Indian residential real estate is largely a rental-yield game. Above it, in the true luxury segment, the calculus shifts toward scarcity, brand-name developer premiums, and long-term appreciation in a handful of genuinely limited locations. Yield becomes secondary. Address becomes primary.",
      },
      {
        type: "p",
        text: "That's true globally, and it's especially true in Mumbai and Gurgaon, where the top tier of inventory is small enough that specific buildings — not just neighborhoods — move independently of the broader market.",
      },
      { type: "h2", text: "Mumbai: Scarcity as the Entire Investment Thesis" },
      {
        type: "p",
        text: "Mumbai's luxury market is built on a constraint that doesn't really exist anywhere else in India — there's almost no land left in the addresses that matter, and there never will be more.",
      },
      {
        type: "p",
        text: "Worli, Prabhadevi, Mahalaxmi, Bandra West, and Juhu are the five neighborhoods that consistently anchor Mumbai's luxury conversation. Lodha Group, Godrej Properties, K Raheja Corp, Rustomjee, L&T Realty, and Birla Estates are the developers with the most credible presence across these addresses — each with flagship towers that function almost like their own micro-brand within the broader Mumbai luxury market.",
      },
      {
        type: "p",
        text: "Demand for luxury Mumbai residential has reportedly grown in the low double digits over the past cycle, driven by a mix of domestic wealth creation, NRI capital, and new metro connectivity opening up previously harder-to-reach premium pockets. That growth context matters — it's not purely speculative demand, it's connectivity genuinely changing what's accessible.",
      },
      {
        type: "p",
        text: "The honest tradeoff: Mumbai luxury real estate is expensive in a way that limits your entry options, and liquidity on resale — even in this segment — is slower than in most global luxury property markets. You're buying scarcity, and scarcity cuts both ways when you eventually want to sell.",
      },
      { type: "h2", text: "Gurgaon: Where the Growth Story Is More Active Right Now" },
      {
        type: "p",
        text: "Gurgaon's luxury segment is having a different kind of moment — less about historical scarcity, more about infrastructure inflection points landing at the same time.",
      },
      {
        type: "p",
        text: "The Dwarka Expressway is now operational, cutting commute times to Delhi and the airport corridor meaningfully. The upcoming Jewar (Noida International) Airport is expected to reshape the broader NCR connectivity map further, though its full operational timeline and impact radius are still developing — worth tracking rather than treating as already priced in.",
      },
      {
        type: "p",
        text: "DLF remains the name most associated with Gurgaon luxury, with The Camellias and The Crest widely regarded as among India's most recognized ultra-luxury addresses — the kind of project name that carries weight in conversation the way a handful of Mumbai buildings do. M3M India's Golf Hills and Paras Floret sit in the same premium tier, alongside active luxury development from Emaar India, Sobha, Smartworld Developers, and Elan Group.",
      },
      {
        type: "p",
        text: "Reported pricing across Gurgaon's luxury segment spans roughly ₹3.4 crore at the entry end to ₹30 crore-plus for the top tier — a wider band than Mumbai's luxury market, which means there's more room to find a genuine luxury address without necessarily competing at the very top of the price ladder.",
      },
      { type: "h2", text: "Side by Side, For This Specific Buyer" },
      {
        type: "table",
        headers: ["", "Mumbai", "Gurgaon"],
        rows: [
          ["Core thesis", "Absolute land scarcity in fixed prime addresses", "Infrastructure-driven growth inflection"],
          ["Price band", "Consistently high, narrower entry range", "Wider band — entry-luxury to ultra-luxury"],
          ["Key developers", "Lodha, Godrej, K Raheja Corp, Rustomjee, L&T Realty, Birla Estates", "DLF, M3M India, Emaar India, Sobha, Smartworld, Elan Group"],
          ["Growth driver", "Metro connectivity opening new premium pockets", "Dwarka Expressway (operational), Jewar Airport (developing)"],
          ["Liquidity on resale", "Slower — scarcity cuts both ways", "Generally faster given broader inventory and price range"],
        ],
      },
      { type: "h2", text: "Which One Fits Your Actual Goal" },
      {
        type: "p",
        text: "If the goal is the most defensible, scarcity-backed long-term hold — and you're comfortable with slower liquidity in exchange for that — Mumbai's constrained luxury addresses are the stronger structural bet. This is patient capital, not a five-year flip.",
      },
      {
        type: "p",
        text: "If the goal is exposure to an active growth story with more entry points across the price ladder, Gurgaon currently offers more room to find the right project without needing Mumbai-level capital to get into a genuine luxury address.",
      },
      {
        type: "p",
        text: "Both are legitimate paths. What's not legitimate is treating either city's brand name alone as due diligence — at this price point, the specific building and developer matter as much as the city.",
      },
      { type: "h2", text: "What Changes at This Price Point" },
      {
        type: "p",
        text: "Due diligence gets more specialized, not less. Title verification, RERA registration, and encumbrance checks still apply exactly as they would on a mid-market purchase — high price doesn't exempt a project from needing the same paperwork scrutiny.",
      },
      {
        type: "p",
        text: "Financing structures differ. Many luxury purchases at this level are partly or fully self-funded rather than loan-heavy, which changes how you should think about repatriation planning for both the initial outlay and any eventual sale proceeds.",
      },
      {
        type: "crosslink",
        text: "Legal and tax structuring deserves dedicated advice before you commit, not after — the FEMA and capital gains mechanics are the same rules that apply to any NRI property purchase, but the absolute rupee amounts at stake make getting professional advice upfront considerably cheaper than fixing a structuring mistake later. Our guide to NRI property tax filing from the USA covers the mechanics in full.",
        slug: "nri-property-tax-filing-usa",
      },
      {
        type: "crosslink",
        text: "The payment trail and Power of Attorney rules don't change at this price point either — they just carry more weight when the numbers involved are larger. Our complete guide to buying property in India as a US NRI covers both in detail.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "And if part of this capital could just as easily sit in a liquid, tax-efficient instrument instead of a physical address, it's worth comparing this against a GIFT City allocation before deciding how much goes into bricks and mortar.",
        slug: "gift-city-vs-real-estate-usa-nri",
      },
      {
        type: "cta",
        text: "Want dedicated legal and tax structuring advice for a luxury India property purchase?",
      },
      { type: "h2", text: "Making the Call at This Price Point" },
      {
        type: "p",
        text: "Mumbai and Gurgaon both give a US NRI with serious capital a legitimate path into Indian luxury real estate — they just reward different things. Mumbai rewards patience and conviction in permanent scarcity. Gurgaon rewards being early to an infrastructure story that's still unfolding. Know which one you're actually signing up for before the paperwork starts.",
      },
      {
        type: "crosslink",
        text: "At these price points the exit matters as much as the entry — our repatriation guide covers the annual limits on moving proceeds to the USA.",
        slug: "repatriate-money-india-to-usa-nri-guide",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and reflects reported market data as of 2026. Project details, pricing, and infrastructure timelines change frequently and should be independently verified with the developer, a licensed broker, and the relevant state RERA portal before making any investment decision. This is not personalized investment advice, and no project mentioned here is a paid partner or sponsor of NRI Investment Expo.",
      },
    ],
    faqs: [
      {
        question: "Which is better for NRI investment — Mumbai or Gurgaon luxury real estate?",
        answer:
          "It depends on your priority. Mumbai offers land-scarcity-driven, long-term value in a handful of fixed prime addresses with slower resale liquidity. Gurgaon offers an active infrastructure-driven growth story with a wider price band and generally faster resale liquidity. Neither is universally better — the right fit depends on your time horizon and risk tolerance.",
      },
      {
        question: "What are the top luxury neighborhoods in Mumbai for NRI buyers?",
        answer:
          "Worli, Prabhadevi, Mahalaxmi, Bandra West, and Juhu are the five neighborhoods that most consistently anchor Mumbai's luxury real estate market, with limited available land keeping demand concentrated in these specific addresses.",
      },
      {
        question: "Which developers build the top luxury projects in Gurgaon?",
        answer:
          "DLF is the most established name, with The Camellias and The Crest widely regarded as India's most recognized ultra-luxury addresses. M3M India, Emaar India, Sobha, Smartworld Developers, and Elan Group are also active in Gurgaon's premium and ultra-luxury segment.",
      },
      {
        question: "How much does luxury real estate cost in Gurgaon?",
        answer:
          "Reported pricing spans roughly ₹3.4 crore at the entry-luxury end to ₹30 crore-plus for ultra-luxury inventory, a considerably wider price band than Mumbai's luxury market — giving buyers more room to find a genuine luxury address without competing at the very top price tier.",
      },
      {
        question: "Is Mumbai or Gurgaon luxury property easier to resell?",
        answer:
          "Gurgaon generally offers faster resale liquidity given its broader inventory and wider price range, while Mumbai's scarcity-driven luxury segment tends to move more slowly on resale — the same constraint that supports its long-term value also limits how quickly a sale typically closes.",
      },
      {
        question: "Do the same NRI property rules apply to luxury purchases?",
        answer:
          "Yes. FEMA payment rules, TDS on sale, capital gains treatment, and repatriation limits apply the same way regardless of price point. What changes at higher price points is the importance of getting dedicated legal and tax structuring advice before committing, given the larger absolute amounts involved.",
      },
      {
        question: "Is the Jewar Airport a reason to invest in Gurgaon now?",
        answer:
          "It's a genuine infrastructure catalyst worth tracking, alongside the now-operational Dwarka Expressway, but its full timeline and connectivity impact are still developing. Treat it as a supporting factor in a Gurgaon investment decision, not the sole reason to commit capital.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-BHR-004 — repatriation
  // ------------------------------------------------------------------
  {
    slug: "repatriate-money-india-to-usa-nri-guide",
    title: "Getting Your Money Out: Repatriating Property Sale Proceeds from India to the USA",
    dek: "Selling is the easy part. Moving the proceeds to the USA runs on a separate set of rules — a USD 1 million annual ceiling, two chartered accountant forms, and one account distinction that decides everything.",
    metaTitle: "Repatriate Property Sale Money from India to USA | NRI Guide",
    metaDescription:
      "How US NRIs move Indian property sale proceeds home: the USD 1 million limit, Form 15CA and 15CB, NRE vs NRO routing, and the mistakes that freeze transfers for months.",
    publishDate: "2026-08-31",
    readingTime: "11 min read",
    content: [
      {
        type: "p",
        text: "Most NRI property guides stop at the sale. The cheque clears in Mumbai, the guide ends, and everyone assumes the rest is a bank formality. It isn't. Moving that money to the USA runs on an entirely separate rulebook, and the people who get caught out are almost never the ones who did something wrong at the sale — they're the ones who never planned the exit.",
      },
      {
        type: "p",
        text: "This guide covers the part that actually strands money: how much you can send, which account it has to leave from, and the two forms without which your bank simply will not process the transfer.",
      },
      { type: "h2", text: "The USD 1 Million Rule — And What It Actually Limits" },
      {
        type: "p",
        text: "Under the Reserve Bank of India's remittance scheme, an NRI may repatriate up to **USD 1 million per financial year** from the balances in an NRO account, including proceeds from the sale of immovable property. The financial year runs April to March, not January to December — a distinction that matters if you're timing a large sale.",
      },
      {
        type: "p",
        text: "Two things people commonly get wrong about this ceiling. First, it is a **per-person** limit, not per property or per transaction. If you and your spouse are joint owners, each of you has a separate limit, which effectively doubles the annual capacity for a jointly held asset. Second, the limit applies to the NRO route specifically. Funds already sitting in an NRE account are freely repatriable without counting against it.",
      },
      {
        type: "p",
        text: "Full current wording sits in the RBI's own [Master Direction on Remittance of Assets](https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx). Rules here are revised periodically — treat any figure you read anywhere, including this page, as a starting point to confirm rather than a settled fact.",
      },
      { type: "h2", text: "NRE or NRO: The Distinction That Decides Everything" },
      {
        type: "p",
        text: "This is the single most consequential decision, and it's made years before the sale — at the moment you paid for the property.",
      },
      {
        type: "table",
        headers: ["", "NRE account", "NRO account"],
        rows: [
          ["Holds", "Foreign earnings remitted into India", "Income arising in India — rent, dividends, sale proceeds"],
          ["Repatriation", "Freely repatriable, principal and interest", "Capped at USD 1 million per financial year"],
          ["Paperwork to send abroad", "Minimal", "Form 15CA + Form 15CB required"],
          ["Interest taxed in India", "No", "Yes"],
        ],
      },
      {
        type: "p",
        text: "Here's the rule that catches people: if you originally bought the property using funds remitted from abroad through banking channels, the sale proceeds of up to two residential properties can be credited straight to your **NRE account** and repatriated without touching the USD 1 million ceiling. If you bought using rupee funds, or through an NRO account, or you've already used that two-property allowance, the proceeds go to NRO and the ceiling applies.",
      },
      {
        type: "quote",
        text: "The payment trail you created when buying determines the exit route available when selling. This is the strongest practical argument for paying through clean banking channels from day one.",
      },
      {
        type: "crosslink",
        text: "This is exactly why the payment trail matters so much at the purchase stage — our guide to buying property in India from the USA covers how to set it up correctly.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      { type: "h2", text: "Form 15CA and Form 15CB: The Gatekeepers" },
      {
        type: "p",
        text: "No Indian bank will remit funds abroad from an NRO account without these two documents. They exist so the tax department can confirm tax was paid before money leaves the country.",
      },
      {
        type: "ul",
        items: [
          "**Form 15CB** is a certificate from a practising Chartered Accountant confirming the nature of the remittance, the tax deducted, and the applicable treaty position. Your CA files it.",
          "**Form 15CA** is your own declaration, submitted on the [income tax e-filing portal](https://www.incometax.gov.in/iec/foportal/), referencing the 15CB acknowledgement number.",
          "Order matters: 15CB is filed first, then 15CA quotes it. Attempting them the other way round is the most common cause of a rejected submission.",
        ],
      },
      {
        type: "p",
        text: "Budget genuine time for this. Between arranging the CA, obtaining the certificate, filing, and the bank's own compliance review, two to four weeks is realistic. People who plan for two days are the ones who end up calling the branch daily.",
      },
      { type: "h2", text: "Tax First, Transfer Second" },
      {
        type: "p",
        text: "Repatriation does not settle your tax position; it assumes you already have. When a buyer purchases from an NRI, TDS is deducted at source on the **full sale value**, not the gain — unless you obtained a lower deduction certificate in advance. Recovering the excess means filing an Indian return and waiting for a refund.",
      },
      {
        type: "crosslink",
        text: "The TDS mechanics, the lower deduction certificate, and how the India–US treaty actually applies are covered in full in our NRI property tax filing guide.",
        slug: "nri-property-tax-filing-usa",
      },
      {
        type: "p",
        text: "Cross-border tax clarity: Under the India-US DTAA, you claim Foreign Tax Credit (IRS Form 1116) for taxes paid in India to prevent double taxation when declaring the sale on your US tax return. Your entire tax exposure sits on the Indian side. That is a genuine structural advantage over NRIs remitting to the UK, the US or Australia — but it does not reduce what India is owed.",
      },
      { type: "h2", text: "Four Mistakes That Strand Money" },
      {
        type: "ul",
        items: [
          "**Selling in March.** A sale completing near the financial year end leaves no room to use the current year's USD 1 million limit before it resets. Selling in April gives you a full year of headroom.",
          "**Assuming joint ownership is automatic.** Both owners need their own NRO accounts and their own 15CA/15CB filings to use both limits.",
          "**No lower deduction certificate.** Skipping it means excess TDS locked with the tax department until a refund is processed — often the better part of a year.",
          "**A muddled payment trail.** If you cannot evidence how the original purchase was funded, the NRE route closes and you fall back to the capped NRO route.",
        ],
      },
      {
        type: "quote",
        text: "This article explains the mechanism, not your filing position. RBI limits, forms and treaty provisions change. Confirm your specific situation with a CA experienced in NRI remittances before you commit to a timeline.",
      },
      {
        type: "cta",
        text: "Bringing a sale — or a purchase — to the expo? Book a one-on-one repatriation and tax session when you RSVP.",
      },
    ],
    faqs: [
      {
        question: "How much money can I send from India to the USA in a year?",
        answer:
          "Up to USD 1 million per financial year from NRO account balances, including property sale proceeds. It is a per-person limit, so joint owners each have their own. Funds in an NRE account are freely repatriable and do not count against this ceiling.",
      },
      {
        question: "Do I need Form 15CA and 15CB for every transfer?",
        answer:
          "For remittances abroad from an NRO account, yes — Form 15CB from a Chartered Accountant, then Form 15CA filed by you quoting it. Banks will not process the remittance without both. Transfers from an NRE account generally do not require them.",
      },
      {
        question: "Can property sale proceeds go directly to my NRE account?",
        answer:
          "Only if the property was originally purchased with funds remitted from abroad through banking channels, and only for up to two residential properties. Otherwise proceeds are credited to NRO and the USD 1 million annual ceiling applies.",
      },
      {
        question: "Will the US tax the money when it arrives in my bank account?",
        answer:
          "The repatriated principal amount itself is not taxed upon entering your US bank account. However, the capital gain from the Indian sale must be reported on IRS Form 1040 Schedule D, with Foreign Tax Credit claimed for Indian taxes paid.",
      },
      {
        question: "How long does repatriation actually take?",
        answer:
          "Plan for two to four weeks once the sale has completed and tax is settled — arranging the CA certificate, filing both forms, and the bank's compliance review each take time. Sales completing close to the March financial year end can face additional delay.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-BHR-005 — NRE / NRO / FCNR
  // ------------------------------------------------------------------
  {
    slug: "nre-nro-fcnr-accounts-usa-nri",
    title: "NRE, NRO or FCNR: Which Account a US NRI Actually Needs",
    dek: "Three account types, one decision that quietly determines your tax bill, your repatriation freedom and your currency risk for the next decade.",
    metaTitle: "NRE vs NRO vs FCNR Accounts for US NRIs | Which to Use",
    metaDescription:
      "A plain comparison of NRE, NRO and FCNR accounts for NRIs in the USA — taxation, repatriation limits, currency risk, and which account to route property money through.",
    publishDate: "2026-08-31",
    readingTime: "9 min read",
    content: [
      {
        type: "p",
        text: "Ask ten US-based NRIs which account their Indian rent goes into and roughly three will say \"the normal one.\" There is no normal one. Once you become a non-resident, your old resident savings account is no longer valid for you to operate, and the account you open in its place quietly sets your tax exposure and your ability to move money home for years afterwards.",
      },
      {
        type: "p",
        text: "This is the short version, without the bank marketing.",
      },
      { type: "h2", text: "The Three Accounts, Side by Side" },
      {
        type: "table",
        headers: ["", "NRE", "NRO", "FCNR (B)"],
        rows: [
          ["Held in", "Indian rupees", "Indian rupees", "Foreign currency — USD, GBP, EUR and others"],
          ["What you put in", "Foreign earnings sent from abroad", "Income arising in India: rent, dividends, sale proceeds, pension", "Foreign earnings sent from abroad, as a term deposit"],
          ["Interest taxed in India", "No", "Yes, at applicable rates with TDS", "No"],
          ["Repatriation", "Free — principal and interest", "Capped at USD 1 million per financial year", "Free"],
          ["Currency risk", "You carry it — rupee balance", "You carry it — rupee balance", "None until maturity — held in foreign currency"],
          ["Joint holding", "With another NRI; with a resident relative on former-or-survivor basis", "With residents or NRIs", "With another NRI"],
        ],
      },
      { type: "h2", text: "The Rule of Thumb" },
      {
        type: "ul",
        items: [
          "**Money coming from the USA into India** → NRE. Tax-free interest in India, freely repatriable, no ceiling.",
          "**Money arising inside India** → NRO. You have no choice here: Indian rent and sale proceeds legally must be credited to an NRO account.",
          "**Money you want to keep in dollars** → FCNR. Useful if you expect to bring the funds back out and don't want a rupee round trip in between.",
        ],
      },
      {
        type: "p",
        text: "Most US NRIs who own Indian property end up needing **both** an NRE and an NRO account. That is normal, not a sign something has gone wrong.",
      },
      { type: "h2", text: "The Currency Point Nobody Raises" },
      {
        type: "p",
        text: "As an NRI earning in US Dollars, your base currency is global benchmark USD. Converting USD into rupees to buy Indian property means thinking about long-term exchange rates, but holding rental yield or reserve funds in an FCNR deposit locks in fixed dollar returns without rupee depreciation risk.",
      },
      {
        type: "p",
        text: "An NRE fixed deposit paying a headline rate well above what you'd earn on dollars looks compelling until you account for rupee depreciation over the deposit's life. FCNR sidesteps that by holding the deposit in foreign currency — you accept a lower nominal rate in exchange for removing the currency variable entirely. Neither is automatically correct; it depends on whether the money is coming back out or staying in India permanently.",
      },
      {
        type: "quote",
        text: "A higher interest rate in a depreciating currency is not the same as a higher return. Compare after currency, not before it.",
      },
      { type: "h2", text: "What Changed When You Moved" },
      {
        type: "p",
        text: "Under FEMA, once you qualify as a non-resident, resident accounts must be redesignated — usually to NRO — rather than simply left running. Banks are increasingly systematic about enforcing this, and an un-redesignated account can complicate a property transaction at exactly the wrong moment.",
      },
      {
        type: "p",
        text: "The [Reserve Bank of India's deposit regulations](https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx) set out the current position. If you moved to the USA and never told your Indian bank, that's the first call to make.",
      },
      { type: "h2", text: "How This Plays Into Property" },
      {
        type: "p",
        text: "The account you pay from is not an administrative detail — it determines your exit. Property purchased with funds remitted through banking channels can have its sale proceeds credited back to NRE and repatriated freely, for up to two residential properties. Property paid for from NRO balances routes the proceeds back to NRO, where the annual ceiling applies.",
      },
      {
        type: "crosslink",
        text: "The full repatriation mechanics — limits, Form 15CA and 15CB, and the timing traps — are covered in our guide to moving money from India to the USA.",
        slug: "repatriate-money-india-to-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "And if you're at the buying stage, the payment trail chapter of our US NRI purchase guide explains how to set this up from the first instalment.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "quote",
        text: "Account rules, tax treatment and RBI limits change. This is a general explanation, not advice on your situation — confirm with your bank and a CA familiar with NRI accounts.",
      },
      {
        type: "cta",
        text: "Bring your account questions to the expo — tax and banking advisors run one-on-one sessions for RSVP'd guests.",
      },
    ],
    faqs: [
      {
        question: "Can I keep my old Indian savings account after moving to the USA?",
        answer:
          "No. Under FEMA, once you become a non-resident your resident account must be redesignated, typically to an NRO account. Continuing to operate it as a resident account is not compliant and can complicate property transactions later.",
      },
      {
        question: "Where does rent from my Indian property have to go?",
        answer:
          "Into an NRO account. Income arising in India must be credited to NRO, not NRE. Interest on NRO balances is taxable in India and TDS applies.",
      },
      {
        question: "Is NRE or FCNR better for a US NRI?",
        answer:
          "It depends on whether the money is coming back out. NRE pays higher nominal rupee rates but leaves you carrying rupee depreciation risk. FCNR holds the deposit in US dollars at a lower rate with no currency risk until maturity — since you already earn and spend in dollars, an FCNR dollar deposit is fully currency-neutral for you.",
      },
      {
        question: "Do I need both an NRE and an NRO account?",
        answer:
          "Most US NRIs who own Indian property do. NRE receives money sent from the US; NRO receives income arising in India such as rent or sale proceeds. They serve different legal purposes and are not interchangeable.",
      },
      {
        question: "Is NRE interest really tax-free?",
        answer:
          "Interest on NRE and FCNR deposits is exempt from Indian income tax while you remain a non-resident. NRO interest is taxable in India. For US tax residents, global income is reportable on IRS Form 1040, but you can claim Foreign Tax Credits (IRS Form 1116) against US tax for Indian taxes withheld on NRO interest.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-BHR-006 — Power of Attorney
  // ------------------------------------------------------------------
  {
    slug: "power-of-attorney-nri-property-india-usa",
    title: "Power of Attorney from the USA: Buying Indian Property Without Flying Back",
    dek: "A PoA is the document that lets a purchase complete while you're at work in the USA. Drafted loosely, it's also the document that hands someone else control of your asset.",
    metaTitle: "NRI Power of Attorney for Indian Property from USA | Guide",
    metaDescription:
      "How US NRIs execute a Power of Attorney for Indian property: apostille vs consular attestation, special vs general PoA, stamping in India, and the clauses that protect you.",
    publishDate: "2026-08-31",
    readingTime: "10 min read",
    content: [
      {
        type: "p",
        text: "Registration in India requires someone to physically appear at the sub-registrar's office. If that someone can't be you, it has to be a person you have formally authorised — and the document doing the authorising is a Power of Attorney.",
      },
      {
        type: "p",
        text: "Most US NRIs treat the PoA as a formality to be rushed through so the deal can close. It is the opposite: it is the single most powerful document you will sign in the entire transaction, and the one where loose drafting causes the most damage.",
      },
      { type: "h2", text: "Special PoA, Not General PoA" },
      {
        type: "p",
        text: "This is the decision that matters most, and it takes one sentence to explain.",
      },
      {
        type: "ul",
        items: [
          "A **General Power of Attorney** grants broad authority over your affairs — potentially including the power to sell, mortgage or lease property you haven't even bought yet.",
          "A **Special (or Specific) Power of Attorney** grants narrowly defined powers for one named transaction: this property, this act, this window of time.",
        ],
      },
      {
        type: "p",
        text: "For a property purchase, use a Special PoA. Name the property by its full legal description. List the exact acts permitted — sign the sale deed, present it for registration, receive the registered document. State an expiry date. If the power to sell is not needed, do not include it.",
      },
      {
        type: "quote",
        text: "A General PoA given to a relative \"to keep things simple\" is how people lose control of assets. The convenience is real; so is the exposure.",
      },
      { type: "h2", text: "Executing It from the USA: Two Valid Routes" },
      {
        type: "p",
        text: "A PoA signed in the United States must be made legally recognisable in India. Because both nations are signatories to the Hague Apostille Convention, you have two established routes: Hague apostille via your US Secretary of State, or consular attestation at the Indian Embassy/Consulate.",
      },
      {
        type: "table",
        headers: ["", "Consular route", "Apostille route"],
        rows: [
          ["Where you sign", "At the Indian Embassy (DC) or Consulate (SF, NY, Chicago, Houston, Atlanta, Seattle)", "Before a certified Public Notary in your US state"],
          ["Then", "Embassy attests the document", "Apostille certificate attached under the Hague Convention"],
          ["On arrival in India", "Stamped and, where required, registered", "Stamped and, where required, registered"],
          ["Typical use", "The conventional, widely accepted route for NRIs", "Available where both countries operate the Hague apostille framework"],
        ],
      },
      {
        type: "p",
        text: "Confirm current consular or apostille procedures with the [Embassy of India in Washington D.C.](https://www.indianembassyusa.gov.in/) or your regional consulate. Consular procedures and appointment systems change, and sub-registrar offices in different Indian states are not uniformly flexible about which form of authentication they will accept.",
      },
      { type: "h2", text: "The Step Everyone Forgets: Stamping in India" },
      {
        type: "p",
        text: "Attestation abroad is not the finish line. Once the PoA reaches India it generally must be **stamped** under the relevant state's Stamp Act, typically within a short window of arrival — often cited as three months. Stamp duty on a PoA varies by state and by whether the holder is a close relative.",
      },
      {
        type: "p",
        text: "An unstamped or improperly stamped PoA can be refused at the sub-registrar's counter on the day of registration, with the seller waiting and your travel already booked. This is the most common practical failure point, and it is entirely avoidable.",
      },
      { type: "h2", text: "Clauses Worth Insisting On" },
      {
        type: "ul",
        items: [
          "**Full property identification** — survey number, project, unit, boundaries. Not \"a flat in Bangalore.\"",
          "**An exhaustive list of permitted acts**, with anything not listed expressly excluded.",
          "**An expiry date** tied to the expected completion, not left open-ended.",
          "**A no-sale clause** where the PoA exists only to complete a purchase.",
          "**A named attorney**, with passport or Aadhaar details, and no power to delegate onward to a third party.",
          "**A revocation mechanism** you can actually execute from the USA.",
        ],
      },
      { type: "h2", text: "A Note on Buying Through a PoA" },
      {
        type: "p",
        text: "There is a separate and important distinction: giving a PoA so someone can act for you is normal practice. **Buying a property where the seller is transferring through a \"GPA sale\"** is a different thing entirely, and the Supreme Court of India has held that such arrangements do not convey valid title. If a seller offers a General Power of Attorney transfer instead of a registered sale deed, that is a reason to stop, not to negotiate.",
      },
      {
        type: "crosslink",
        text: "How to check a project's registration and title before you get anywhere near a PoA is covered in our RERA verification guide.",
        slug: "rera-verification-checklist-nri-usa",
      },
      {
        type: "crosslink",
        text: "And the wider purchase sequence — payment trail, banking channels, documentation — sits in our US NRI buying guide.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "quote",
        text: "PoA requirements differ by Indian state and change over time. Have the draft reviewed by an Indian property lawyer before you sign anything at the embassy — reviewing a draft costs a fraction of unwinding a bad one.",
      },
      {
        type: "cta",
        text: "Legal advisors run one-on-one PoA and documentation sessions at the expo. Reserve a slot when you RSVP.",
      },
    ],
    faqs: [
      {
        question: "Can I buy property in India without travelling from the USA?",
        answer:
          "Yes, by executing a Power of Attorney authorising someone in India to sign and present the documents for registration on your behalf. Use a Special PoA naming the specific property and the specific acts permitted, not a General PoA.",
      },
      {
        question: "Does a PoA signed in the USA need consular attestation or apostille?",
        answer:
          "It must be made legally recognisable in India, either by execution and attestation at the Indian Embassy in Washington D.C. or your regional Indian Consulate, or via notarisation and apostille through your US Secretary of State where that route applies. Confirm the currently accepted route with the embassy, as procedures change.",
      },
      {
        question: "Does the PoA need stamping in India as well?",
        answer:
          "Yes. Attestation abroad is not sufficient on its own. The document generally must be stamped under the relevant state's Stamp Act after arriving in India, often within about three months. An unstamped PoA can be rejected at the sub-registrar's office.",
      },
      {
        question: "Should I give a General or Special Power of Attorney?",
        answer:
          "Special, in almost every case. It limits authority to one named property, an explicit list of acts, and a defined time window. A General PoA grants far broader control than a single purchase requires.",
      },
      {
        question: "Is buying a property on GPA safe?",
        answer:
          "No. Buying where the seller transfers via a General Power of Attorney rather than a registered sale deed does not convey valid title under Indian law. Insist on a registered sale deed. This is separate from giving your own PoA to act on your behalf, which is normal practice.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-BHR-007 — RERA verification
  // ------------------------------------------------------------------
  {
    slug: "rera-verification-checklist-nri-usa",
    title: "Verifying an Indian Project from the USA: The RERA Checklist That Takes 20 Minutes",
    dek: "Every Indian state runs a free public RERA portal listing registered projects, promoter track records and filed complaints. Most NRI buyers never open one.",
    metaTitle: "RERA Check for NRI Buyers from USA | Verification Checklist",
    metaDescription:
      "A practical RERA verification checklist for US NRIs buying Indian property: how to find the registration number, read the promoter's complaint history, and spot the red flags.",
    publishDate: "2026-08-31",
    readingTime: "9 min read",
    content: [
      {
        type: "p",
        text: "The single biggest advantage NRI buyers have gained in the last decade has nothing to do with prices or interest rates. It's that since the Real Estate (Regulation and Development) Act came into force, every state maintains a **public, free, searchable register** of real estate projects — with the promoter's other projects, declared completion dates, and complaints filed against them.",
      },
      {
        type: "p",
        text: "You can check all of it from a laptop anywhere in the USA, before you speak to anyone. Twenty minutes of this is worth more than a month of brochures.",
      },
      { type: "h2", text: "Start Here: Find the Registration Number" },
      {
        type: "p",
        text: "Any project being marketed to you should have a RERA registration number, and by law it should appear on the advertising itself. If a brochure, a hoarding photo or a WhatsApp forward doesn't show one, that is your first data point.",
      },
      {
        type: "p",
        text: "There is no single all-India RERA website — the Act is administered state by state, and each state runs its own register. You need the portal for the state the property sits in.",
      },
      {
        type: "ul",
        items: [
          "**Maharashtra** (Mumbai, Pune) — [MahaRERA](https://maharera.maharashtra.gov.in/), generally the most detailed public record",
          "**Karnataka** (Bangalore) — [K-RERA](https://rera.karnataka.gov.in/)",
          "**Telangana** (Hyderabad) — [TG-RERA](https://rera.telangana.gov.in/)",
          "**Haryana** (Gurgaon) — [HRERA](https://haryanarera.gov.in/), with separate Gurugram and Panchkula benches",
        ],
      },
      { type: "h2", text: "What to Actually Read Once You're In" },
      {
        type: "p",
        text: "Finding the listing is the easy part. Most buyers see \"registered\" and stop. The value is in the detail behind it.",
      },
      {
        type: "table",
        headers: ["Check", "What good looks like", "What should worry you"],
        rows: [
          ["Registration status", "Active, covering the tower or phase you're buying", "Expired, or covers a different phase of the same development"],
          ["Declared completion date", "Realistic, and consistent with what sales staff told you", "A date already passed, or months earlier than the brochure claims"],
          ["Promoter's other projects", "A record of delivered projects with dates met", "Multiple projects with repeatedly extended timelines"],
          ["Complaints filed", "Few, resolved, minor in nature", "A pattern of similar complaints across several projects"],
          ["Approved plan vs marketing", "Unit mix and amenities match what you were shown", "Amenities in the brochure that appear nowhere in the filing"],
          ["Land title documents", "Uploaded and clean", "Missing, or showing an unresolved encumbrance"],
        ],
      },
      {
        type: "quote",
        text: "The promoter's complaint history across all their projects tells you more than any single project's brochure. Patterns repeat; marketing doesn't.",
      },
      { type: "h2", text: "The Phase Trick" },
      {
        type: "p",
        text: "One pattern worth knowing specifically. A large development is often registered in phases. A promoter can legitimately advertise a well-established, registered Phase 1 while selling units in a Phase 3 that is registered separately — or not yet registered at all.",
      },
      {
        type: "p",
        text: "Always confirm that the registration number you were given covers **the specific tower, phase and unit** you are buying. Ask for it in writing. This is a routine question for a legitimate developer and an awkward one otherwise.",
      },
      { type: "h2", text: "What RERA Does Not Do" },
      {
        type: "p",
        text: "Being registered is a floor, not a guarantee. RERA registration confirms the project is declared and disclosed. It does not certify construction quality, guarantee delivery on time, or validate that the price is reasonable. Nor does it remove the need for an independent title search by a lawyer.",
      },
      {
        type: "ul",
        items: [
          "It **does** give you disclosure, a complaints mechanism, and a promoter track record you can read.",
          "It **does not** replace legal due diligence, a title search, or an independent valuation.",
        ],
      },
      { type: "h2", text: "Why This Matters More From Abroad" },
      {
        type: "p",
        text: "A buyer in Pune can visit the site on a Saturday and ask neighbours what they've heard. From the USA you rely on online portals and public records. That asymmetry is exactly why the public record is worth using properly — it is the one source that isn't being presented to you by someone earning a commission on the sale.",
      },
      {
        type: "crosslink",
        text: "Once a project checks out, the purchase mechanics — payment trail, banking channels, documentation — are covered in our US NRI buying guide.",
        slug: "buying-property-india-from-usa-nri-guide",
      },
      {
        type: "crosslink",
        text: "And if you plan to complete without travelling, read the Power of Attorney guide before signing anything.",
        slug: "power-of-attorney-nri-property-india-usa",
      },
      {
        type: "quote",
        text: "RERA rules, portals and disclosure requirements differ by state and change over time. Use the register as a starting point, then have an Indian property lawyer run an independent title check before you commit funds.",
      },
      {
        type: "cta",
        text: "Every developer exhibiting at the expo is asked for project documentation. RSVP and we'll shortlist by the cities you're actually considering.",
      },
    ],
    faqs: [
      {
        question: "How do I check if an Indian project is RERA registered from the USA?",
        answer:
          "Go to the RERA portal for the state the property is in — MahaRERA for Mumbai and Pune, K-RERA for Bangalore, TG-RERA for Hyderabad, HRERA for Gurgaon — and search by project name, promoter name or registration number. The registers are public and free to search from anywhere.",
      },
      {
        question: "Does RERA registration mean a project is safe to buy?",
        answer:
          "No. Registration means the project is declared and disclosed, and gives you a complaints mechanism and a promoter track record. It does not certify construction quality, guarantee delivery dates, or replace an independent title search by a lawyer.",
      },
      {
        question: "What is the most useful thing on a RERA listing?",
        answer:
          "The promoter's history across all their projects — declared versus actual completion dates, and the pattern of complaints filed. A single project's brochure tells you what is promised; the promoter's record tells you what tends to happen.",
      },
      {
        question: "The developer gave me a registration number but it looks like a different phase.",
        answer:
          "Large developments are often registered phase by phase. Confirm in writing that the number covers the specific tower, phase and unit you are buying. A registered Phase 1 says nothing about an unregistered Phase 3.",
      },
      {
        question: "Do I still need a lawyer if the project is RERA registered?",
        answer:
          "Yes. RERA disclosure and an independent title search are different things. A property lawyer verifies ownership history, encumbrances and approvals in a way the public register does not.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

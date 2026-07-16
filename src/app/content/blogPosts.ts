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
    slug: "buying-property-india-from-singapore-nri-guide",
    title: "Buying Property in India from Singapore: The Complete NRI Guide",
    dek: "The payment trail, the Power of Attorney, and the due diligence checklist that decide whether your purchase is smooth or a headache.",
    metaTitle: "Buying Property in India from Singapore: NRI Guide",
    metaDescription:
      "Everything a Singapore NRI needs before buying India property — FEMA rules, financing, Power of Attorney, and due diligence, explained clearly.",
    publishDate: "2026-07-16",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text: 'Your parents have started saying "the flat" instead of "a flat." That\'s usually the sign someone\'s about to buy Indian property from Singapore for the first time, whether they\'ve admitted it to themselves yet or not.',
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
      { type: "h2", text: "Financing: Getting a Home Loan as an NRI in Singapore" },
      {
        type: "p",
        text: "Indian banks do lend to NRIs, and Singapore-based applicants are a well-established customer segment for most major lenders — this isn't a novelty product anyone needs to be talked into offering you.",
      },
      {
        type: "p",
        text: "The loan gets repaid from your NRE or NRO account, or via direct remittance, and eligibility typically factors in your Singapore income, existing obligations, and the property's value. Specific interest rates and loan-to-value ratios vary meaningfully by bank and change with RBI policy rate movements — treat any number you see quoted online as a starting point for a conversation, not a locked-in figure, and confirm current terms directly with the lender before budgeting around them.",
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
        text: "Execution: The PoA needs to be properly drafted (ideally by a lawyer familiar with NRI transactions, not a generic template), then notarized and attested through the Indian High Commission in Singapore. Skipping proper attestation is a common shortcut that creates real legal exposure later.",
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
        slug: "nri-property-tax-filing-singapore",
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
        slug: "gift-city-vs-real-estate-singapore-nri",
      },
      { type: "h2", text: "Buying With Confidence, Not Just Hope" },
      {
        type: "p",
        text: "The legal path to owning property in India as a Singapore NRI has been open and clear for years. What separates a smooth purchase from a stressful one isn't luck — it's whether the payment trail, the Power of Attorney, and the due diligence were treated as seriously as the decision to buy in the first place.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and does not constitute personalized legal or financial advice. FEMA rules, financing terms, and tax figures referenced above are current as of 2026 and subject to change — confirm your specific situation with a qualified real estate lawyer, CA, or financial advisor before proceeding with a purchase.",
      },
    ],
    faqs: [
      {
        question: "Can NRIs in Singapore buy property in India?",
        answer:
          "Yes. NRIs can buy residential and commercial property in India without RBI permission, but not agricultural land, plantation property, or farmhouses. Payment must come from an NRE, NRO, or FCNR account or direct inward remittance, and the purchase can be managed remotely through a properly drafted Power of Attorney.",
      },
      {
        question: "Do I need to visit India to buy property as an NRI?",
        answer:
          "Not necessarily. With a properly drafted, narrowly scoped Power of Attorney executed by someone you trust, most of the transaction — document signing, registration, possession — can be handled without your physical presence, though many buyers still choose to visit for final verification.",
      },
      {
        question: "Can I get a home loan from Singapore to buy Indian property?",
        answer:
          "Yes. Most major Indian banks lend to NRIs, including those based in Singapore, with repayment from NRE, NRO accounts, or direct remittance. Loan terms depend on your income, the property value, and current bank policy — confirm exact rates and eligibility directly with the lender.",
      },
      {
        question: "What documents prove clear title on Indian property?",
        answer:
          "A clean chain of ownership documents going back at least 12-13 years, a current encumbrance certificate confirming no mortgage or litigation, and — for under-construction or recent projects — valid RERA registration. Skipping any of these is the most common source of post-purchase disputes.",
      },
      {
        question: "Is a Power of Attorney safe for buying property remotely?",
        answer:
          "It's safe when narrowly scoped to the specific transaction, professionally drafted, and properly attested through the Indian High Commission in Singapore. It becomes risky when it's overly broad, informally drafted, or given to someone without appropriate due diligence on trust and potential conflicts of interest.",
      },
      {
        question: "How much rental income tax will I owe on Indian property?",
        answer:
          "Rental income is taxable in India from the first rupee earned, after a standard 30% deduction on net annual value and any eligible home loan interest. It must be credited to your NRO account and reported in an annual Indian tax return, regardless of whether Singapore separately taxes the income.",
      },
      {
        question: "Can I sell the property later and bring the money back to Singapore?",
        answer:
          "Yes, subject to repatriation limits — generally up to USD 1 million per financial year through the NRE route — and documentation including Form 15CA/15CB filed through your bank. TDS at the time of sale is calculated on the full sale value unless you've obtained a Lower Deduction Certificate in advance.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-001
  // ------------------------------------------------------------------
  {
    slug: "gift-city-vs-real-estate-singapore-nri",
    title: "GIFT City vs Indian Real Estate: Where Should Singapore NRIs Put Their Next Investment?",
    dek: "GIFT City and Indian real estate aren't actually solving the same problem. Here's how to choose based on what you're optimizing for.",
    metaTitle: "GIFT City vs Real Estate: Where Singapore NRIs Invest",
    metaDescription:
      "A Singapore NRI's real numbers comparison — GIFT City bonds/funds vs Indian property. Tax, liquidity, repatriation, and which one actually fits you.",
    publishDate: "2026-07-16",
    readingTime: "11 min read",
    content: [
      {
        type: "p",
        text: "Three hundred and fifty thousand Indians are building careers in Singapore right now. A good number of them have a spare SGD 80,000 to 150,000 sitting in a savings account, doing nothing, while they debate two options they keep hearing about at every dinner party: a GIFT City bond or fund, or a second flat back home.",
      },
      {
        type: "p",
        text: "Both get recommended constantly. Almost nobody explains how to actually choose between them.",
      },
      {
        type: "p",
        text: "This isn't a \"which is better\" article. It's a \"which is better for you, specifically\" article — because the honest answer depends on what you're actually optimizing for.",
      },
      { type: "h2", text: "The Real Decision Singapore NRIs Are Facing in 2026" },
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
      { type: "p", text: "For a Singapore NRI, three products matter most:" },
      {
        type: "ul",
        items: [
          "**Rupee-denominated bonds (Masala Bonds).** These are debt instruments issued by Indian corporates and listed on the IFSC exchange. Interest on bonds listed before July 1, 2023 gets taxed at a concessional 4% rate; bonds listed after that date sit at 9% — both far below what NRI interest income normally attracts. You're taking on the issuer's credit risk, not India's sovereign risk, so due diligence on the specific bond still matters.",
          "**Category III AIFs on specified securities.** This is the one most Singapore NRIs haven't heard of, and it's the strongest tax outcome in the entire GIFT City ecosystem — funds that invest in specified securities and derivatives on the IFSC exchange carry zero capital gains tax in India for non-residents. Not a reduced rate. Zero.",
          "**Global Savings Accounts (foreign currency).** IFSC Banking Units let you hold USD, SGD, GBP, and a few other currencies directly, earning somewhere in the 2.5-5% range depending on currency and tenure — lower than rupee deposits, but with none of the currency conversion friction.",
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
        slug: "buying-property-india-from-singapore-nri-guide",
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
      { type: "h2", text: "Which One Fits Which Kind of Singapore NRI" },
      {
        type: "p",
        text: "If you're the person who checks your portfolio during your Singapore commute and wants clean numbers without a PoA, a lawyer, or a tenant — GIFT City is the more honest fit. It behaves like an investment, because it is one.",
      },
      {
        type: "internallink",
        text: "If your parents keep raising \"the flat\" every time you call home, and you actually want a place in India for eventual return, retirement, or rental income you can point to — real estate does something GIFT City structurally cannot. Our GIFT City Knowledge Pavilion breaks down the tax and compliance side of that decision if you want the fuller picture.",
        href: "/#wealth",
      },
      {
        type: "p",
        text: "There's also a third kind of Singapore NRI, and it's probably the largest group: someone with enough capital to not have to choose.",
      },
      { type: "h2", text: "Can You Do Both?" },
      {
        type: "p",
        text: "For most NRIs in the SGD 12,000+/month income bracket with five-plus years of savings behind them, the answer is a simple allocation split rather than a binary decision. A common pattern among clients we've spoken with: GIFT City for the portion of capital that needs to stay liquid and tax-efficient, real estate for the portion earmarked as a long-term family asset that was always going to be a 10-15 year hold anyway.",
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
        question: "Does the India-Singapore DTAA reduce tax on either option?",
        answer:
          "For real estate, no — rental income and capital gains on Indian immovable property are taxed in India regardless of DTAA, since property income is source-state taxed under the treaty. For certain GIFT City fund structures, the tax treatment already sits at zero or near-zero under India's domestic IFSC rules, so DTAA isn't usually the operative mechanism there either.",
      },
      {
        question: "What happens to my GIFT City investment if I move back to India?",
        answer:
          "Your residency status change would affect ongoing tax treatment going forward, since several of these benefits are specifically tied to non-resident status. This is worth discussing with an advisor before a return-to-India move, not after.",
      },
      {
        question: "Is it risky to buy Indian property through a Power of Attorney from Singapore?",
        answer:
          "It's manageable risk, not zero risk. A narrowly drafted, transaction-specific PoA, properly attested through the Indian High Commission in Singapore, and paired with independent due diligence, is a well-established and safe path. A broad, informally drafted PoA handed to a relative to handle everything is where NRI property disputes actually originate.",
      },
    ],
  },

  // ------------------------------------------------------------------
  // CB-SGP-002
  // ------------------------------------------------------------------
  {
    slug: "nri-property-tax-filing-singapore",
    title: "NRI Property Tax Filing Guide: Selling or Renting Out Indian Real Estate from Singapore",
    dek: "TDS on a property sale is calculated on the full sale value, not your profit, unless you apply for a certificate in advance. Here's the guide that closes that gap.",
    metaTitle: "NRI Property Tax Filing from Singapore: TDS & DTAA",
    metaDescription:
      "Renting out or selling Indian property from Singapore? Here's exactly what tax applies, what's withheld, and how DTAA stops double taxation.",
    publishDate: "2026-07-16",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text: "Somewhere in Singapore right now, someone is staring at a TDS deduction on their property sale that's nearly a third higher than they expected. Not because the tax rate changed overnight. Because nobody told them TDS gets calculated on the full sale value, not the profit, unless you apply for a certificate in advance.",
      },
      {
        type: "p",
        text: "That single gap in knowledge costs Singapore NRIs real money every single year. This is the guide that closes it.",
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
        text: "Here's the part that catches Singapore NRIs specifically off guard: Singapore's tax system is territorial. Foreign-sourced income — including your Indian rental income — generally isn't taxed in Singapore unless it's actually received in Singapore. That doesn't mean it's tax-free. It means the tax obligation sits entirely on the Indian side, and skipping the Indian filing because \"Singapore doesn't tax it anyway\" is exactly the mistake that gets flagged years later.",
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
      { type: "h2", text: "How the India-Singapore DTAA Prevents Double Taxation" },
      {
        type: "p",
        text: "Here's the honest version of what DTAA does and doesn't do for real estate, because most explanations get this wrong.",
      },
      {
        type: "p",
        text: "Under Article 6 and Article 13 of the India-Singapore DTAA, rental income and capital gains from Indian immovable property are source-state taxed — meaning India retains the right to tax them, full stop. The DTAA doesn't move that tax obligation to Singapore or exempt you from it.",
      },
      {
        type: "p",
        text: "What the DTAA actually does, combined with Singapore's territorial tax system, is prevent that same income from being taxed again in Singapore — since Singapore generally doesn't tax foreign-sourced income unless it's remitted there. That's a meaningfully different thing from \"DTAA makes my rental income tax-free,\" which is the version that circulates in NRI WhatsApp groups and isn't quite right.",
      },
      {
        type: "p",
        text: "To formally claim DTAA benefits — relevant mostly for other income categories, since property income is source-taxed regardless — you'd typically need to establish Singapore tax residency (183+ days in the relevant year), file Form 10F with Indian tax authorities, and submit a Certificate of Residence from Singapore's tax authority. Worth having on file even for property transactions, since it supports your overall residency position.",
      },
      {
        type: "quote",
        text: "This section explains the mechanism, not your specific filing position. Confirm your obligations under IRAS rules with a Singapore tax advisor alongside your Indian CA.",
      },
      { type: "h2", text: "Step-by-Step: Filing Your Return as a Singapore NRI" },
      {
        type: "ul",
        items: [
          "Determine your residential status for the Indian financial year (April-March) — this affects which income is taxable in India",
          "Gather all rental income statements or sale deed and consideration details",
          "Apply for a Lower Deduction Certificate (Form 13) before a sale closes, if applicable — not after",
          "Confirm your NRO account has received the correct net amount after any TDS",
          "Compute capital gains (for sale) or net rental income after standard deduction (for rent)",
          "File your Indian ITR by the applicable due date (July 31 for most non-audit cases, subject to any extension announced for the year)",
          "If TDS withheld exceeds actual liability, claim the refund in the same return",
          "For repatriating proceeds beyond routine limits, arrange Form 15CA/15CB through your bank before initiating the transfer",
        ],
      },
      { type: "h2", text: "Common Mistakes That Trigger a Tax Notice" },
      {
        type: "ul",
        items: [
          "Skipping the Indian filing entirely because rent or sale proceeds \"already got taxed\" through TDS. TDS is a withholding, not a final settlement — the return is still required.",
          "Assuming a Lower Deduction Certificate can be requested after the sale agreement is signed. It can't meaningfully help you at that point; the TDS calculation is already locked to the transaction.",
          "Crediting rental income to an NRE account instead of NRO. It's the wrong account category for India-sourced income and creates a paper trail mismatch that tax authorities notice.",
          "Treating \"Singapore doesn't tax foreign income\" as equivalent to \"I don't need to file in India.\" These are unrelated facts that happen to sit next to each other in the same sentence far too often.",
        ],
      },
      {
        type: "crosslink",
        text: "None of this matters until you actually own property in India, of course. If you're still at the purchase stage, our guide to buying property in India as a Singapore NRI covers the payment trail and Power of Attorney decisions that determine whether you land in a clean tax position later.",
        slug: "buying-property-india-from-singapore-nri-guide",
      },
      {
        type: "cta",
        text: "Want to be matched with a CA who specializes in Singapore-India NRI tax filing?",
      },
      { type: "h2", text: "Getting This Right the First Time" },
      {
        type: "p",
        text: "The gap between what most Singapore NRIs assume about property tax and what actually applies is exactly where money gets lost — either through over-withheld TDS sitting idle for a year, or through a filing gap that surfaces as a notice much later. Neither outcome is necessary once you know which of the two scenarios you're actually in.",
      },
      {
        type: "quote",
        text: "This article is for informational purposes and does not constitute personalized tax advice. Indian tax rates, forms, and DTAA provisions referenced above are current as of 2026 and subject to change with Finance Act updates — confirm your specific filing obligations with a qualified CA experienced in NRI taxation, and consult a Singapore tax advisor on your IRAS position.",
      },
    ],
    faqs: [
      {
        question: "Do NRIs pay tax on rental income from India property?",
        answer:
          "Yes. Rental income from Indian property is taxable in India for NRIs regardless of residency. It must be credited to an NRO account, is subject to TDS where applicable, and must be reported in an Indian income tax return. The India-Singapore DTAA prevents this income from being taxed twice, not from being taxed at all.",
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
        question: "Does the India-Singapore DTAA make my rental income tax-free?",
        answer:
          "No. Rental income and capital gains on Indian immovable property remain taxable in India under the treaty's source-state rules. What the DTAA and Singapore's territorial tax system together prevent is India-taxed property income being taxed a second time in Singapore.",
      },
      {
        question: "Which account should receive my Indian rental income?",
        answer:
          "Your NRO (Non-Resident Ordinary) account, not your NRE account. NRO is designated for India-sourced income like rent and dividends, while NRE is meant for funds remitted from abroad. Using the wrong account creates compliance mismatches.",
      },
      {
        question: "How much of my property sale proceeds can I send back to Singapore?",
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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

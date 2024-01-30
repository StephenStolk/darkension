import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
const Sidepanel = () => {
  return (
    <section className="w-[85%] flex justify-evenly mx-auto my-[2rem] bg-sky-500">
      <div className="w-[1/3] bg-sky-800 px-[3rem]">
       <a href="#BS"> <span className="bgspan">{data[0].name}</span></a>
        <span className="bgspan">{data[1].name}</span>
        <span className="bgspan">{data[2].name}</span>
        <span className="bgspan">{data[3].name}</span>
        <span className="bgspan">{data[4].name}</span>
        <span className="bgspan">{data[5].name}</span>
        <span className="bgspan">{data[6].name}</span>
        <span className="bgspan">{data[7].name}</span>
        <span className="bgspan">{data[8].name}</span>
      </div>
      <div className="w-[2/3] bg-sky-900 px-[10%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        officiis praesentium error harum quidem autem asperiores, maiores velit
        facilis, laborum fugiat labore. Corporis temporibus maiores, incidunt
        repellat necessitatibus nulla saepe!
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[0].name}</h1>
          <h1 className="text-xl">
            
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[1].name}</h1>
          <h1 className="text-xl">
            Fake Urgency" is a deceptive design tactic in which a sense of
            urgency is artificially created or exaggerated to encourage users to
            take immediate action. This technique is commonly employed in
            various online platforms, websites, or applications to prompt users
            to make decisions quickly, often leading to conversions, sign-ups,
            or purchases. The urgency is not based on real constraints but is
            designed to manipulate users into thinking that they need to act
            swiftly. Examples of Fake Urgency in UI/UX design include:
            Limited-Time Offers: Displaying messages such as "Limited time only"
            or "Sale ends soon" to create a sense of urgency. In reality, the
            offer might be available for an extended period, or it may be a
            recurring promotion. Countdown Timers: Introducing countdown timers
            next to certain actions or deals, implying that users have a limited
            timeframe to complete a task. These timers may reset or reappear,
            creating a false sense of urgency. False Scarcity: Claiming limited
            availability of a product or service to suggest high demand. This
            may involve stating that only a few items remain in stock, even if
            the inventory is regularly replenished. Flash Sales: Announcing
            sudden, short-duration sales events with the implication that users
            must act immediately to take advantage of special discounts. These
            sales may be frequent or predictable rather than genuinely
            spontaneous. Pop-Up Notifications: Displaying pop-ups that declare
            "Last chance" or "Final offer" to pressure users into making a
            decision promptly. These notifications may appear repeatedly to
            emphasize the urgency. While creating a sense of urgency can be a
            legitimate marketing strategy, it's crucial for designers to use it
            ethically. Misusing Fake Urgency can lead to a loss of trust if
            users feel they were misled or pressured into decisions without
            genuine urgency. Designers should ensure that urgency claims are
            truthful and transparent to maintain a positive user experience.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[2].name}</h1>
          <h1 className="text-xl">
            {/* {data[2].desc} */}
            "Drip pricing" is a pricing strategy where additional fees or
            charges are incrementally disclosed to consumers throughout the
            purchasing process, rather than being presented upfront. The term
            "drip" refers to the gradual reveal of costs, which may lead
            consumers to perceive the initial price as lower than the total cost
            they eventually pay. This pricing model can be considered deceptive
            if it obscures the true price of a product or service. Examples of
            drip pricing include: Ticket Sales: In the travel industry, airlines
            or online travel agencies might initially display a base fare for a
            flight but only reveal additional charges like taxes, fees, and
            baggage costs later in the booking process. Online Shopping:
            E-commerce websites may showcase a product with a low price, but as
            users progress through the checkout process, extra charges such as
            shipping fees, handling fees, or taxes are gradually added. Event
            Tickets: When purchasing tickets for events online, consumers may
            encounter service fees, processing fees, or convenience fees that
            are not immediately apparent when they view the initial ticket
            price. Hotel Bookings: Hotels may initially advertise a nightly
            rate, but as users proceed with the reservation, they may encounter
            resort fees, parking fees, or other additional charges. Drip pricing
            can be problematic because it can mislead consumers, making it
            challenging for them to make informed decisions based on the true
            overall cost. To address concerns related to transparency and
            fairness, regulations and consumer protection laws in some regions
            require businesses to be more upfront about the total costs
            associated with their products or services. It's essential for
            businesses to be transparent about all relevant charges to maintain
            trust and provide a positive customer experience.
          </h1>
        </div>
        <div id="#BS" className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[3].name}</h1>
          <h1 className="text-xl">
            "Basket Sneaking" is a deceptive design practice where items are
            added to a user's online shopping cart without their explicit
            consent or knowledge. This dark pattern is employed to increase the
            perceived value of a transaction or to encourage users to make a
            purchase they might not have intended. Example of Basket Sneaking:
            Let's say a user is browsing an e-commerce website and clicks on a
            product to view its details. Instead of a straightforward product
            page, the website employs basket sneaking by automatically adding
            the item to the user's shopping cart without displaying a clear
            confirmation or giving the user an opportunity to review their
            choice. Here's how it might unfold: User Interaction: The user
            clicks on a product image or link to view more details. Automatic
            Addition: Without explicit consent, the product is automatically
            added to the user's shopping cart. Lack of Confirmation: The website
            does not provide a visible confirmation or notification that the
            item has been added to the cart. Encouragement to Checkout: The
            user, unaware that an item has been added, continues browsing or
            navigating the site. However, the shopping cart now contains the
            additional item. This technique can be employed to create a sense of
            momentum or urgency for the user to complete the purchase. The user
            might only realize that extra items are in their cart when they
            proceed to the checkout, potentially leading to unintentional
            purchases. Basket sneaking is generally considered a dark pattern
            because it lacks transparency and exploits the user's trust by
            manipulating their actions. Ethical design principles prioritize
            clarity, consent, and transparency to ensure users have control over
            their interactions and decisions.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[4].name}</h1>
          <h1 className="text-xl">
            "Confirmshaming" is a dark pattern in user interface design where
            the wording or design of a dialog box attempts to shame or guilt the
            user into selecting a particular option, usually by making the
            alternative option seem socially unacceptable. The goal is to
            manipulate the user into taking a specific action, such as signing
            up for a newsletter, accepting cookies, or subscribing to a service.
            Examples of Confirmshaming: Newsletter Subscription: Dialog Box:
            "Yes, I want to save money and receive exclusive offers"
            (Affirmative Button) / "No, I prefer to pay full price and remain
            ignorant" (Negative Button) In this example, the negative option is
            phrased in a way that may make the user feel guilty for choosing it.
            Cookie Consent: Dialog Box: "Yes, I love personalized content and a
            better user experience" (Affirmative Button) / "No, I prefer a less
            user-friendly website" (Negative Button) The negative option is
            framed to make the user feel as though they are making an
            undesirable choice. Account Deactivation: Dialog Box: "Yes, I give
            up on having a secure and fun account" (Affirmative Button) / "No, I
            want to continue enjoying the benefits of my account" (Negative
            Button) The negative option is designed to make the user question
            their decision to avoid deactivating the account. Confirmshaming
            relies on persuasive language and emotional manipulation to guide
            users towards a specific choice. While it may increase the
            likelihood of users selecting the desired option, it can also lead
            to a negative user experience, as users may feel pressured or
            manipulated. Ethical UI/UX design emphasizes transparency, clear
            communication, and respect for users' choices, avoiding manipulative
            tactics like confirmshaming.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[5].name}</h1>
          <h1 className="text-xl">
            "Bait and switch" is a deceptive dark pattern in user interface
            design where users are presented with one option or offer initially,
            but once engaged, they are redirected to a different, often less
            favorable, option. This technique is intended to lure users in with
            an attractive or appealing choice and then switch it for an
            alternative that may not be as desirable. Example of Bait and
            Switch: Product Advertisement: A website displays a prominent
            advertisement for a high-end electronic device at a remarkably low
            price, enticing users to click on the ad. Product Page: Upon
            clicking the ad, the user is redirected to a product page that
            suggests the device is out of stock or unavailable at the advertised
            price. Suggested Alternative: The website then offers a different,
            lower-quality product or an older model at the original price or
            even a higher price. Limited Availability Claims: The website may
            justify the switch by claiming limited availability of the initially
            advertised product or citing unexpected demand. This dark pattern
            aims to capitalize on users' initial interest in a desirable option
            and then redirect them to a less appealing alternative. Bait and
            switch can harm user trust and satisfaction, as users may feel
            deceived or misled by the initial advertisement. Ethical design
            principles emphasize transparency, honesty, and clear communication
            to ensure that users are provided with accurate information and have
            a positive experience on the platform. Bait and switch practices are
            generally frowned upon as they undermine these principles and can
            damage the reputation of a website or service.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[6].name}</h1>
          <h1 className="text-xl">
            "Disguised advertising" refers to the practice of presenting
            promotional content in a way that makes it look like non-promotional
            or editorial content. The goal is to blend advertisements seamlessly
            into the surrounding content to make them less distinguishable as
            marketing messages. This technique is used to increase the
            likelihood of user engagement and interaction by making the ads
            appear more natural and less intrusive. Common forms of disguised
            advertising include: Native Advertising: Ads that mimic the look and
            feel of the content around them, often appearing as articles,
            product reviews, or sponsored posts. They are designed to match the
            visual and stylistic elements of the platform. Advertorials: Content
            that resembles editorial or journalistic articles but is actually
            created to promote a product, service, or brand. Advertorials often
            appear in magazines, newspapers, or online publications. Branded
            Content: Content created by or for a brand that is integrated into a
            platform in a way that aligns with the platform's regular content.
            This can include videos, articles, or other media. Influencer
            Marketing: Influencers may promote products or services within their
            content, making it look like a natural part of their usual posts
            rather than a paid advertisement. Example of Disguised Advertising:
            Suppose you are reading a lifestyle blog, and within the blog posts,
            there are articles that discuss the benefits of a particular
            skincare product. These articles may appear to be informative and
            unbiased but are, in fact, sponsored by the company that produces
            the skincare product. The goal is to make the promotional content
            appear as genuine advice or recommendations rather than explicit
            advertising. While disguised advertising can be effective in
            capturing user attention, it is essential for ethical advertising
            practices to ensure transparency. Users should be able to recognize
            when they are interacting with promotional content to make informed
            decisions. Misleading users by blurring the lines between
            advertising and regular content can erode trust and harm the user
            experience.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[8].name}</h1>
          <h1 className="text-xl">
            A "subscription trap" is a deceptive practice in which users are
            lured into subscribing to a service under the guise of a one-time
            purchase, free trial, or a nominal fee. However, once users
            subscribe, they often find it difficult to cancel the subscription,
            leading to unexpected and recurring charges. Subscription traps can
            result in financial harm to users who may unknowingly continue to be
            billed for a service they no longer want. Key characteristics of a
            subscription trap include: Misleading Terms: The terms and
            conditions may be unclear or deliberately misleading, making it
            difficult for users to understand that they are committing to an
            ongoing subscription. Free Trials: Some subscription traps offer a
            free trial period, but users may be required to provide payment
            information upfront. If users don't cancel before the trial period
            ends, they are automatically enrolled in a paid subscription.
            Obscure Cancellation Processes: Cancelling the subscription may be
            intentionally complicated, involving multiple steps, obscure links,
            or interactions with customer support. This makes it challenging for
            users to opt out. Hidden Auto-Renewals: Subscriptions may
            automatically renew without clear notification to the user, leading
            to surprise charges. Difficult Refund Policies: Even if users
            discover the subscription trap and attempt to seek a refund, the
            service may have strict refund policies or make the process
            cumbersome. It's crucial for users to carefully review terms and
            conditions, especially when entering payment information online.
            Additionally, designers and businesses should prioritize
            transparency in their subscription models, ensuring that users are
            well-informed about the terms of their subscriptions, including
            cancellation procedures and renewal policies. Subscription traps are
            generally considered unethical and can result in negative
            consequences for both users and businesses in terms of trust and
            reputation.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[9].name}</h1>
          <h1 className="text-xl">
            It seems there might be a small error or confusion in your question.
            The terms "interface" and "interference" are distinct concepts in
            different contexts. Let me provide explanations for both terms:
            Interface: In the context of technology and computing, an interface
            refers to the point of interaction between a user and a system or
            between different components within a system. It can involve
            graphical user interfaces (GUIs) that users interact with on a
            computer screen, command-line interfaces (CLIs) where users enter
            text commands, or hardware interfaces that connect different devices
            or components. The goal of an interface is to facilitate
            communication and interaction between different entities.
            Interference: In a general sense, interference refers to the act of
            disrupting or hindering a process or system. In physics,
            interference occurs when two or more waves overlap and combine to
            form a new wave pattern. In a broader context, interference can
            refer to any external factors or actions that disrupt or impede the
            normal functioning of a process, system, or communication. If you
            have a specific context or industry in mind for the terms
            "interface" and "interference," please provide additional details so
            that I can offer more tailored information.
          </h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[10].name}</h1>
          <h1 className="text-xl">{data[10].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[11].name}</h1>
          <h1 className="text-xl">{data[11].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[12].name}</h1>
          <h1 className="text-xl">{data[12].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[13].name}</h1>
          <h1 className="text-xl">{data[13].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[14].name}</h1>
          <h1 className="text-xl">{data[14].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[15].name}</h1>
          <h1 className="text-xl">{data[15].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[16].name}</h1>
          <h1 className="text-xl">{data[17].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[18].name}</h1>
          <h1 className="text-xl">{data[18].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[19].name}</h1>
          <h1 className="text-xl">{data[19].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[20].name}</h1>
          <h1 className="text-xl">{data[20].desc}</h1>
        </div>
        <div className="w-full flex flex-col justify-items-center">
          <h1 className="text-2xl">{data[21].name}</h1>
          <h1 className="text-xl">{data[21].desc}</h1>
        </div>
      </div>
    </section>
  );
};

export default Sidepanel;

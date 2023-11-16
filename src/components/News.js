import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Entertainment Tonight"
            },
            "author": "Miguel A. Melendez",
            "title": "See Travis Kelce React to Taylor Swift's Sweet 'Karma' Lyric Change - Entertainment Tonight",
            "description": "The crowd at Estadio Monumental went wild when Swift altered her 'Karma' lyrics to include Kelce.",
            "url": "https://www.etonline.com/see-travis-kelce-react-to-taylor-swifts-sweet-karma-lyric-change-214724",
            "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-11/1280_Taylor_Swift_travis_kelce.jpg?h=c673cd1c",
            "publishedAt": "2023-11-13T12:17:00Z",
            "content": "Taylor Swift just elevated her surprise songs to a whole new level when she changed her \"Karma\" lyrics to include her boyfriend, Travis Kelce. \r\nThe Midnights singer was in the middle of her performa… [+1708 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rob Picheta",
            "title": "Suella Braverman, Britain’s hardline home secretary, fired as ex-PM David Cameron makes surprise return to government - CNN",
            "description": "Britain’s beleaguered Prime Minister Rishi Sunak carried out a dramatic reshuffle to his Cabinet on Monday, firing his divisive home secretary and bringing back former premier David Cameron to the heart of government after a seven-year absence from politics.",
            "url": "https://www.cnn.com/2023/11/13/uk/suella-braverman-leaves-government-rishi-sunak-gbr-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231113101752-cameron-sunak-braverman-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-11-13T12:01:00Z",
            "content": "Britains beleaguered Prime Minister Rishi Sunak carried out a dramatic Cabinet reshuffle on Monday, firing his divisive home secretary and bringing back former premier David Cameron to the heart of g… [+8793 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Natasha Turak",
            "title": "Emirates announces $52 billion order for 95 Boeing aircraft - CNBC",
            "description": "Both Boeing and Airbus have highlighted the Middle East region as a major source of demand for wide-body aircraft.",
            "url": "https://www.cnbc.com/2023/11/13/emirates-announces-52-billion-order-for-95-boeing-aircraft-.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107117764-1663087218628-emirates.jpg?v=1699872858&w=1920&h=1080",
            "publishedAt": "2023-11-13T11:54:33Z",
            "content": "DUBAI, United Arab Emirates Emirates Airline on Monday announced an order for 95 Boeing aircraft at a value of $52 billion, kicking off the first major deal of the 2023 Dubai Airshow.\r\nThe state-owne… [+1943 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Tanvi Mehta",
            "title": "Three Indian cities amongst world's 10 most polluted after Diwali - Reuters.com",
            "description": "Two Indian cities joined New Delhi to become among the world's top 10 most polluted cities on Monday, with smoke heavy in the air a day after revellers let loose with firecrackers for Diwali, the annual Hindu festival of light.",
            "url": "https://www.reuters.com/markets/commodities/three-indian-cities-amongst-worlds-10-most-polluted-after-diwali-2023-11-13/",
            "urlToImage": "https://www.reuters.com/resizer/C96PfA5qisgjNkDmrAQGJNjdF4w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HNQ46WRAGNIMHH4A76TOPBFCJQ.jpg",
            "publishedAt": "2023-11-13T11:54:00Z",
            "content": "NEW DELHI, Nov 13 (Reuters) - Two Indian cities joined New Delhi to become among the world's top 10 most polluted cities on Monday, with smoke heavy in the air a day after revellers let loose with fi… [+1889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "cleveland.com"
            },
            "author": "Tim Bielik, cleveland.com",
            "title": "Can Deshaun Watson and the Browns win the AFC North after stunning the Ravens? NFL Week 10 fact or fiction - cleveland.com",
            "description": "Check out the top storylines from Week 10 around the NFL as we decide whether the narratives from Sunday's games are fact or fiction.",
            "url": "https://www.cleveland.com/browns/2023/11/can-deshaun-watson-win-the-browns-the-afc-north-after-his-second-half-performance-nfl-week-10-fact-or-fiction.html",
            "urlToImage": "https://www.cleveland.com/resizer/IGCL_4dv5AEGNPBu0J-dDfKgeeY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BT2QDDKIFRDWVDNI55IEVK6UDE.JPG",
            "publishedAt": "2023-11-13T11:42:00Z",
            "content": "CLEVELAND, Ohio The Browns came back from a 15-point deficit to stun the Ravens in Baltimore on Sunday, 33-31. But there was more going on around the NFL than just what was happening in this AFC Nort… [+9197 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jason Samenow",
            "title": "D.C.-area forecast: Temperatures head back into above-normal territory this week - The Washington Post",
            "description": "Highs could approach 70 by Friday, while rain chances hold off until Friday night.",
            "url": "https://www.washingtonpost.com/weather/2023/11/13/dc-forecast-rising-temperatures-dry/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/T66I2SIOC5E5NHI2P7XMGL6J4A.jpg&w=1440",
            "publishedAt": "2023-11-13T11:33:36Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nA somewhat subjective rating of the days weather, on a scale of 0 to 10.\r\n7/10: Bright sunshine, 50s and a fine November day overall.\r… [+2781 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Lorenzo Reyes",
            "title": "NFL Week 10 winners, losers: Jets' season is slipping away - USA TODAY",
            "description": "The Jets had hoped they could keep things afloat for a possible late-season playoff push, but New York is paying for its stubbornness on Zach Wilson.",
            "url": "https://www.usatoday.com/story/sports/nfl/2023/11/13/nfl-winners-losers-jets-week-10/71560936007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/13/USAT/71565119007-ap-jets-raiders-football.jpg?crop=4042,2274,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-11-13T11:10:28Z",
            "content": "The Week 10 slate initially appeared to be rather dull, but a few thrilling comebacks in the early slate helped spice things up.\r\nIn particular, an AFC North battle saw the Baltimore Ravens again sel… [+8631 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GovExec.com"
            },
            "author": "Eric Katz",
            "title": "House GOP floats telework restrictions, drastic spending cuts as Congress weighs options to avert shutdown - Government Executive",
            "description": "House and Senate have diverging plans to temporarily keep agencies afloat as Republicans propose budget rescissions and civilian job reductions.",
            "url": "https://www.govexec.com/management/2023/11/house-gop-floats-telework-restrictions-drastic-spending-cuts-congress-weighs-options-avert-shutdown/391920/",
            "urlToImage": "https://cdn.govexec.com/media/img/cd/2023/11/09/11092023HouseGOP/open-graph.jpg",
            "publishedAt": "2023-11-13T11:00:00Z",
            "content": "House Republicans on Thursday hit another snag toward passing fiscal 2024 funding bills, pulling a measure that would have funded the Internal Revenue Service, Office of Personnel Management and othe… [+7635 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "WAFAA SHURAFA, SAMY MAGDY",
            "title": "Hundreds trapped in Gaza’s main hospital as Israeli forces and Palestinian militants battle outside - The Associated Press",
            "description": "Health officials say that critically wounded patients, including newborns, and their caregivers are stranded with dwindling supplies and no electricity.",
            "url": "https://apnews.com/article/israel-hamas-war-news-11-13-2023-c98faefe9d5bb213d3e44cf9defd5990",
            "urlToImage": "https://dims.apnews.com/dims4/default/a6c3e39/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F86%2F1e%2F0e8d4bb0cbda16a01fb25d68611d%2Fa5ed55260e9f4f5da0e56246475f8be8",
            "publishedAt": "2023-11-13T10:38:00Z",
            "content": "DEIR AL-BALAH, Gaza Strip (AP) Battles around hospitals have forced thousands of Palestinians to flee from some of the last shelters in northern Gaza while stranding critically wounded patients, incl… [+5923 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Rachel Pannett, Niha Masih, Jennifer Hassan, Leo Sands, Shira Rubin, Joby Warrick, Kelly Kasulis Cho, Claire Parker, Hazem Balousha, Dan Lamothe, Kyle Rempfer, Miriam Berger, Maham Javaid",
            "title": "Israel-Hamas war: Latest news on Gaza hospital strikes and invasion - The Washington Post",
            "description": "The World Health Organization says al-Shifa Hospital is no longer operational after days without water or power and fierce fighting in the area.",
            "url": "https://www.washingtonpost.com/world/2023/11/13/israel-hamas-war-gaza-palestine-live/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/11-13-2023/t_b4da4348912f4854add12e58983fc2f2_name_STILL_doctor.jpg&w=1440",
            "publishedAt": "2023-11-13T10:33:51Z",
            "content": "Israel-Gaza war\r\nIsraeli tanks, amid explosions and falling shells, surrounded overcrowded hospitals in Gaza City on Friday. Israeli Prime Minister Benjamin Netanyahu said Israel does not seek to occ… [+999 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KABC-TV"
            },
            "author": null,
            "title": "10 Freeway closed: Detours announced as commuters brace for traffic nightmare in downtown LA - KABC-TV",
            "description": "As a stretch of the 10 Freeway remained shut down in downtown Los Angeles, officials announced detours and transit alternatives -- and commuters braced for snarled traffic.",
            "url": "https://abc7.com/downtown-la-fire-10-freeway-closed/14048377/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/14048527_111223-kabc-dtla-alameda-fire-2.jpg?w=1600",
            "publishedAt": "2023-11-13T10:07:30Z",
            "content": "DOWNTOWN LOS ANGELES (KABC) -- As a stretch of the 10 Freeway in downtown Los Angeles remained closed in the aftermath of a fire that erupted under the interstate, officials announced detours and tra… [+6494 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Michael Copley",
            "title": "Fossil fuel producers work to shape U.N. treaty to cut plastics - NPR",
            "description": "Groups connected to the fossil fuel industry are trying to shape an international treaty to cut plastic pollution. And oil- and gas-producing nations are at the negotiating table.",
            "url": "https://www.npr.org/2023/11/13/1211843512/plastic-pollution-waste-treaty-united-nations-fossil-fuel-oil-gas",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/10/gettyimages-955528500_wide-0c45e0288a0416edce2bfe902efb0a9c2f5ffb0a-s1400-c100.jpg",
            "publishedAt": "2023-11-13T10:00:59Z",
            "content": "People work at a landfill in India that's full of plastic bags. Members of the United Nations are negotiating a treaty that's aimed at cutting plastic pollution globally.\r\nShammi Mehra/AFP via Getty … [+16397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Long COVID's effects on the brain help explain many long-haulers' symptoms : Shots - Health News - NPR",
            "description": "The neurological symptoms of COVID can persist for years after an infection. Scientists are just beginning to understand why.",
            "url": "https://www.npr.org/sections/health-shots/2023/11/13/1211989263/pain-fatigue-brain-fog-long-covid-neurological-effects",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/09/gettyimages-1317793963_wide-eef2eab422ea0c009b11a5916d217d43f17635c3-s1400-c100.jpg",
            "publishedAt": "2023-11-13T10:00:59Z",
            "content": "Scientists are learning more about how long COVID affects the brain.\r\nDavid Wall/Getty Images\r\nMichelle Wilson got COVID three years ago. She's still waiting for her brain and nervous system to recov… [+7065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Wearing hearing aids can reduce the risk of falls in older adults : Shots - Health News - NPR",
            "description": "Falling is the top cause of injury for older adults and even mild hearing loss can increase the risk. But consistently wearing hearing aids may improve balance and prevent falls, a study finds.",
            "url": "https://www.npr.org/sections/health-shots/2023/11/13/1212051086/hearing-aids-hearing-loss-falls-injury-aging-older-adults",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/09/gettyimages-1689512349-3-_wide-1f12f060c80660325389c9ed1887bfdb02933aa5-s1400-c100.jpg",
            "publishedAt": "2023-11-13T10:00:31Z",
            "content": "People who consistently wear hearing aids have a lower chance of falling, a new study finds.\r\npicture alliance/dpa/picture alliance via Getty I\r\nIf your hearing begins to decline, your risk of fallin… [+4656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "iPhone App Sideloading Coming to Users in the EU in First Half of 2024 - MacRumors",
            "description": "iPhone users in the EU next year will be able to download apps hosted outside of Apple's official App Store to comply with European regulations,...",
            "url": "https://www.macrumors.com/2023/11/13/eu-iphone-app-sideloading-coming-2024/",
            "urlToImage": "https://images.macrumors.com/t/F7oTqlQN4Z9JS9HdjKPoRgxasG0=/2250x/article-new/2023/06/General-iOS-17-Feature-Blue-Green.jpg",
            "publishedAt": "2023-11-13T10:00:05Z",
            "content": "iPhone users in the EU next year will be able to download apps hosted outside of Apple's official App Store to comply with European regulations, according to Bloomberg's Mark Gurman.\r\nOtherwise known… [+2111 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Here's How Biden Can Turn It Around - POLITICO",
            "description": "Top Democrats agree that the president needs more aggressiveness, more help from his friends and a few more friends. Liz Cheney, Rahm Emanuel and Mitt Romney can help.",
            "url": "https://www.politico.com/news/magazine/2023/11/13/biden-2024-reelection-challenges-strategy-00126776",
            "urlToImage": "https://static.politico.com/57/e1/c974044d4ddabd68b83aa5901973/ap23138431281545.jpg",
            "publishedAt": "2023-11-13T10:00:00Z",
            "content": "Whats notable is both the uniformity of these anxieties theres no faction in denial and how they mirror the discontent of the broader public.\r\nFar from being merely the stuff of Beltway chatter, as B… [+17788 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Aaron Pellish, Jeff Zeleny, Eva McKend",
            "title": "Republican Sen. Tim Scott suspends presidential campaign - CNN",
            "description": "Sen. Tim Scott of South Carolina is ending his presidential campaign, he announced in an interview with Fox News on Sunday.",
            "url": "https://www.cnn.com/2023/11/12/politics/tim-scott-ends-presidential-campaign/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231113103857-tim-scott-1108.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-11-13T09:53:00Z",
            "content": "Sen. Tim Scott of South Carolina is suspending his presidential campaign, he announced in an interview with Fox News on Sunday.\r\nI love America more today than I did on May 22. But when I go back to … [+8570 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "New Study Reveals Universal Blood Pressure Reduction Strategy, Effective Even With Medication - SciTechDaily",
            "description": "Most everyone can lower blood pressure by reducing salt intake, even those on BP drugs. Nearly everyone can lower their blood pressure, even people currently on blood pressure-reducing drugs, by lowering their sodium intake. This is according to a new researc…",
            "url": "https://scitechdaily.com/?p=327525",
            "urlToImage": "https://scitechdaily.com/images/Blood-Pressure-Cardiology-Concept.jpg",
            "publishedAt": "2023-11-13T09:31:04Z",
            "content": "ByVanderbilt University Medical CenterNovember 13, 2023\r\nA recent study shows that reducing sodium intake can significantly lower blood pressure, even in individuals on hypertension medication. By de… [+6429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Audrina Patridge's 15-Year-Old Niece Died from Drug Overdose, Cops Investigating - TMZ",
            "description": "It's been 9 months since the tragic death of Audrina Patridge's 15-year-old niece, Sadie, and cops are working to find out who may have supplied the drugs that killed the young girl.",
            "url": "https://www.tmz.com/2023/11/13/audrina-patridge-niece-died-drug-overdose-cops-investigating/",
            "urlToImage": "https://imagez.tmz.com/image/96/16by9/2023/11/10/96f9e18cbd0b4e06bb570849540fde4e_xl.jpg",
            "publishedAt": "2023-11-13T09:00:00Z",
            "content": "It's been 9 months since the tragic death of Audrina Patridge's 15-year-old niece, Sadie, and cops are working to find out who may have supplied the drugs that killed the young girl.\r\nLaw enforcement… [+1336 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Israel-Hamas war: List of key events, day 38 - Al Jazeera English",
            "description": "As the conflict between Israel and Gaza enters its 38th day, these are the main developments.",
            "url": "https://www.aljazeera.com/news/2023/11/13/israel-hamas-war-list-of-key-events-day-38",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-12T140414Z_1808996801_RC2LB4AF9UQR_RTRMADP_3_ISRAEL-PALESTINIANS-1699850375.jpg?resize=1920%2C1440",
            "publishedAt": "2023-11-13T07:59:27Z",
            "content": "Here is the situation on Monday, November 13, 2023:\r\nLatest on human impact and fighting\r\n<ul><li>The collapse of medical centres and communication services across Gaza has left the Ministry of Healt… [+3610 chars]"
        }
    ]
    constructor(){
        super();
        console.log("constr")
        this.state ={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
        <>
        <div className="container my-3">
        <h2>Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0, 35)} description={element.description.slice(0, 90)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
            
            
            
            
        </div>
        </div>
        </>
      
    )
  }
}

export default News
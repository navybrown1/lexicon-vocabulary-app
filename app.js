// Lexicon — English Vocabulary Builder
// Pure vanilla JS, no dependencies

(function() {
  'use strict';

  // ─── Vocabulary Data ───
  const vocabulary = [
  {
    "word": "Abate",
    "meaning": "Become less intense or widespread.",
    "example": "The storm began to abate as the wind died down.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abate/"
  },
  {
    "word": "Abbreviate",
    "meaning": "Shorten a word, phrase, or text.",
    "example": "We had to abbreviate the long title to fit the label.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/abbreviate/"
  },
  {
    "word": "Abdicate",
    "meaning": "Renounce one's throne or fail to fulfill a duty.",
    "example": "The king decided to abdicate in favor of his son.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abdicate/"
  },
  {
    "word": "Aberration",
    "meaning": "A departure from what is normal, usual, or expected.",
    "example": "The sudden snowstorm in July was a complete aberration.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/aberration/"
  },
  {
    "word": "Abhor",
    "meaning": "Regard with disgust and hatred.",
    "example": "They abhor violence in any form.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/abhor/"
  },
  {
    "word": "Abject",
    "meaning": "Extremely unpleasant and degrading, or completely without pride.",
    "example": "They lived in abject poverty in the slums.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abject/"
  },
  {
    "word": "Abnegate",
    "meaning": "Renounce or reject something desired or valuable.",
    "example": "She decided to abnegate her claims to the family fortune.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/abnegate/"
  },
  {
    "word": "Abrasive",
    "meaning": "Capable of polishing or cleaning by rubbing; harsh or rough in manner.",
    "example": "His abrasive personality made it hard to keep friends.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abrasive/"
  },
  {
    "word": "Abridge",
    "meaning": "Shorten a book, movie, or speech without losing the core sense.",
    "example": "The publisher decided to abridge the novel for young readers.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/abridge/"
  },
  {
    "word": "Abrogate",
    "meaning": "Repeal or do away with a law, right, or formal agreement.",
    "example": "The treaty was abrogated by the new administration.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abrogate/"
  },
  {
    "word": "Abscond",
    "meaning": "Leave hurriedly and secretly, typically to avoid detection or arrest.",
    "example": "The treasurer absconded with all the club's funds.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abscond/"
  },
  {
    "word": "Abstruse",
    "meaning": "Difficult to understand; obscure.",
    "example": "The professor's lecture on quantum physics was abstruse.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abstruse/"
  },
  {
    "word": "Abysmal",
    "meaning": "Extremely bad; appalling.",
    "example": "The team's performance last season was abysmal.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/abysmal/"
  },
  {
    "word": "Accede",
    "meaning": "Assent or agree to a demand, request, or treaty.",
    "example": "The authorities decided to accede to the demands of the strikers.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/accede/"
  },
  {
    "word": "Accelerate",
    "meaning": "Begin to move more quickly or increase in rate.",
    "example": "The car began to accelerate down the open highway.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/accelerate/"
  },
  {
    "word": "Accentuate",
    "meaning": "Make more noticeable or prominent.",
    "example": "The lighting was designed to accentuate the artwork on the wall.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/accentuate/"
  },
  {
    "word": "Accessible",
    "meaning": "Able to be reached, entered, or understood.",
    "example": "The museum is fully accessible to wheelchair users.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/accessible/"
  },
  {
    "word": "Acclimate",
    "meaning": "Get used to a new climate or to new conditions.",
    "example": "It took several weeks for the athletes to acclimate to the high altitude.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/acclimate/"
  },
  {
    "word": "Accolade",
    "meaning": "An award or privilege granted as a special honor or as an acknowledgment of merit.",
    "example": "The scientist received the highest accolade for her research.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/accolade/"
  },
  {
    "word": "Accommodate",
    "meaning": "Provide lodging or sufficient space for; fit in with the wishes of.",
    "example": "The hotel can accommodate up to three hundred guests.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/accommodate/"
  },
  {
    "word": "Accost",
    "meaning": "Approach and address someone boldly or aggressively.",
    "example": "Reporters accosted the senator outside the courtroom.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/accost/"
  },
  {
    "word": "Accretion",
    "meaning": "The process of growth or increase by the gradual accumulation of additional layers or matter.",
    "example": "The accretion of sediment over millions of years formed the rocks.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/accretion/"
  },
  {
    "word": "Accrue",
    "meaning": "Accumulate or receive payments or benefits over time.",
    "example": "Interest will accrue on the account on a monthly basis.",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/accrue/"
  },
  {
    "word": "Acerbic",
    "meaning": "Sharp and forthright in speaking or writing; tasting sour or bitter.",
    "example": "Her acerbic wit made her a formidable opponent in debates.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/acerbic/"
  },
  {
    "word": "Acquiesce",
    "meaning": "Accept something reluctantly but without protest.",
    "example": "He decided to acquiesce to his supervisor's decision.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/acquiesce/"
  },
  {
    "word": "Acrid",
    "meaning": "Having an irritatingly strong and unpleasant taste or smell.",
    "example": "The room was filled with the acrid smoke of burning rubber.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/acrid/"
  },
  {
    "word": "Acumen",
    "meaning": "The ability to make good judgments and quick decisions, typically in a particular domain.",
    "example": "Her business acumen helped turn the struggling company around.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/acumen/"
  },
  {
    "word": "Adage",
    "meaning": "A proverb or short statement expressing a general truth.",
    "example": "Remember the old adage: 'Look before you leap.'",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adage/"
  },
  {
    "word": "Adamant",
    "meaning": "Refusing to be persuaded or to change one's mind.",
    "example": "She was adamant that she would not sign the agreement.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adamant/"
  },
  {
    "word": "Adaptable",
    "meaning": "Able to adjust to new conditions.",
    "example": "Successful species are highly adaptable to changing environments.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/adaptable/"
  },
  {
    "word": "Adept",
    "meaning": "Very skilled or proficient at something.",
    "example": "He is exceptionally adept at solving complex puzzles.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adept/"
  },
  {
    "word": "Adhere",
    "meaning": "Stick fast to a surface or substance; believe in and follow the practices of.",
    "example": "We must adhere to the rules laid out in the handbook.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adhere/"
  },
  {
    "word": "Adjudicate",
    "meaning": "Make a formal judgment or decision about a disputed matter.",
    "example": "A neutral panel was chosen to adjudicate the dispute.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/adjudicate/"
  },
  {
    "word": "Adjunct",
    "meaning": "A thing added to something else as a supplementary rather than an essential part.",
    "example": "The online course is a useful adjunct to the textbook.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/adjunct/"
  },
  {
    "word": "Admonish",
    "meaning": "Warn or reprimand someone firmly.",
    "example": "The coach admonished the players for their lack of effort.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/admonish/"
  },
  {
    "word": "Adoptive",
    "meaning": "Relation by adoption rather than by birth.",
    "example": "They formed a close bond in their new adoptive family.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adoptive/"
  },
  {
    "word": "Adroit",
    "meaning": "Clever or skillful in using the hands or mind.",
    "example": "She showed an adroit handling of the difficult situation.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/adroit/"
  },
  {
    "word": "Adulation",
    "meaning": "Obsequious flattery; excessive admiration or praise.",
    "example": "The popular singer was surrounded by the adulation of her fans.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/adulation/"
  },
  {
    "word": "Adulterate",
    "meaning": "Render something poorer in quality by adding another substance.",
    "example": "The brewers were accused of attempting to adulterate the beer with water.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/adulterate/"
  },
  {
    "word": "Advocate",
    "meaning": "Publicly recommend or support a particular cause or policy.",
    "example": "She decided to advocate for better funding for local schools.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/advocate/"
  },
  {
    "word": "Aerial",
    "meaning": "Existing, happening, or operating in the air.",
    "example": "They captured stunning aerial photography of the grand canyon.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/aerial/"
  },
  {
    "word": "Aesthete",
    "meaning": "A person who has or affects to have a special appreciation of art and beauty.",
    "example": "As a dedicated aesthete, he filled his home with classic sculptures.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/aesthete/"
  },
  {
    "word": "Affable",
    "meaning": "Friendly, good-natured, or easy to talk to.",
    "example": "The host was affable and immediately made everyone feel welcome.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/affable/"
  },
  {
    "word": "Affectation",
    "meaning": "Behavior, speech, or writing that is artificial and designed to impress.",
    "example": "His British accent was a complete affectation.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/affectation/"
  },
  {
    "word": "Affluent",
    "meaning": "Having a great deal of money; wealthy.",
    "example": "They moved to an affluent neighborhood on the outskirts of the city.",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/affluent/"
  },
  {
    "word": "Affront",
    "meaning": "An action or remark that causes outrage or offense.",
    "example": "His rude comment was a direct affront to all present.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/affront/"
  },
  {
    "word": "Aggregate",
    "meaning": "A whole formed by combining several separate elements.",
    "example": "The aggregate score of the two games decided the winner.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/aggregate/"
  },
  {
    "word": "Aghast",
    "meaning": "Filled with horror or shock.",
    "example": "She stood aghast at the sight of the absolute destruction.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/aghast/"
  },
  {
    "word": "Agile",
    "meaning": "Able to move quickly and easily; mentally quick.",
    "example": "The gymnast gave an agile performance on the balance beam.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/agile/"
  },
  {
    "word": "Agnostic",
    "meaning": "A person who believes that nothing is known of the existence of God.",
    "example": "He described himself as an agnostic, open but unconvinced.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/agnostic/"
  },
  {
    "word": "Alacrity",
    "meaning": "Brisk and cheerful readiness.",
    "example": "She accepted the job invitation with great alacrity.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/alacrity/"
  },
  {
    "word": "Alienate",
    "meaning": "Cause someone to feel isolated or estranged.",
    "example": "His harsh criticism threatened to alienate his closest supporters.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/alienate/"
  },
  {
    "word": "Allay",
    "meaning": "Diminish or put at rest fear, suspicion, or worry.",
    "example": "The government tried to allay public fears about the economy.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/allay/"
  },
  {
    "word": "Alleviate",
    "meaning": "Make suffering, deficiency, or a problem less severe.",
    "example": "The new medicine helped to alleviate her chronic pain.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/alleviate/"
  },
  {
    "word": "Allocate",
    "meaning": "Distribute resources or duties for a particular purpose.",
    "example": "We need to allocate more funds to research and development.",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/allocate/"
  },
  {
    "word": "Allude",
    "meaning": "Suggest or call attention to indirectly; hint at.",
    "example": "The speaker chose to allude to the ongoing negotiations.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/allude/"
  },
  {
    "word": "Allure",
    "meaning": "The quality of being powerfully and mysteriously attractive or fascinating.",
    "example": "The allure of high-stakes gambling drew him to the casino.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/allure/"
  },
  {
    "word": "Altruistic",
    "meaning": "Showing a disinterested and selfless concern for the well-being of others.",
    "example": "His altruistic acts earned him the respect of the entire community.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/altruistic/"
  },
  {
    "word": "Amalgamate",
    "meaning": "Combine or unite to form one organization or structure.",
    "example": "The two small businesses decided to amalgamate into a single company.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/amalgamate/"
  },
  {
    "word": "Amass",
    "meaning": "Gather together or accumulate a large quantity of.",
    "example": "He managed to amass a large fortune through real estate.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/amass/"
  },
  {
    "word": "Ambidextrous",
    "meaning": "Able to use the right and left hands equally well.",
    "example": "The ambidextrous pitcher could throw effectively with either hand.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ambidextrous/"
  },
  {
    "word": "Ambient",
    "meaning": "Relating to the immediate surroundings of something.",
    "example": "The low ambient lighting created a relaxed mood in the restaurant.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ambient/"
  },
  {
    "word": "Ambiguous",
    "meaning": "Open to more than one interpretation; having a double meaning.",
    "example": "The message was ambiguous, leaving us unsure of his plans.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ambiguous/"
  },
  {
    "word": "Ambivalent",
    "meaning": "Having mixed feelings or contradictory ideas about something.",
    "example": "She felt ambivalent about moving to a new city.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/ambivalent/"
  },
  {
    "word": "Ameliorate",
    "meaning": "Make something bad or unsatisfactory better.",
    "example": "The new reform program was designed to ameliorate living standards.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ameliorate/"
  },
  {
    "word": "Amenable",
    "meaning": "Open and responsive to suggestion; easily persuaded or controlled.",
    "example": "They were amenable to the proposed changes in the schedule.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/amenable/"
  },
  {
    "word": "Amiable",
    "meaning": "Having or displaying a friendly and pleasant manner.",
    "example": "The guide was amiable and showed us around the ancient ruins.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/amiable/"
  },
  {
    "word": "Amorphous",
    "meaning": "Without a clearly defined shape or form.",
    "example": "The amorphous cloud of gas floated silently in space.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/amorphous/"
  },
  {
    "word": "Amortize",
    "meaning": "Gradually write off the initial cost of an asset over a period.",
    "example": "They planned to amortize the loan over a twenty-year span.",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/amortize/"
  },
  {
    "word": "Amplify",
    "meaning": "Increase the volume, strength, or scope of.",
    "example": "The speakers were used to amplify the singer's voice.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/amplify/"
  },
  {
    "word": "Anachronism",
    "meaning": "A thing belonging or appropriate to a period other than that in which it exists.",
    "example": "The modern watch in the medieval film was a clear anachronism.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/anachronism/"
  },
  {
    "word": "Analgesic",
    "meaning": "Acting to relieve pain.",
    "example": "aspirin is a common analgesic drug used to treat mild headaches.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/analgesic/"
  },
  {
    "word": "Analogous",
    "meaning": "Comparable in certain respects, typically in a way which makes clearer the nature of the things compared.",
    "example": "The human eye is analogous to a camera lens in how it focuses.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/analogous/"
  },
  {
    "word": "Anarchy",
    "meaning": "A state of disorder due to absence or nonrecognition of authority.",
    "example": "The sudden collapse of the government led to complete anarchy.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/anarchy/"
  },
  {
    "word": "Anathema",
    "meaning": "Something or someone that one vehemently dislikes.",
    "example": "Racial discrimination is absolute anathema to a free society.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/anathema/"
  },
  {
    "word": "Ancillary",
    "meaning": "Providing necessary support to the primary activities or operation of an organization.",
    "example": "The research department has several ancillary facilities nearby.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ancillary/"
  },
  {
    "word": "Anecdotal",
    "meaning": "Based on personal accounts rather than facts or research.",
    "example": "There is only anecdotal evidence to support the new treatment.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/anecdotal/"
  },
  {
    "word": "Animosity",
    "meaning": "Strong hostility or active dislike.",
    "example": "The old rivals showed great animosity towards each other.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/animosity/"
  },
  {
    "word": "Annihilate",
    "meaning": "Destroy utterly; obliterate.",
    "example": "The atomic bomb was capable of attempting to annihilate entire cities.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/annihilate/"
  },
  {
    "word": "Annotate",
    "meaning": "Add notes to a text or diagram giving explanation or comment.",
    "example": "Students were encouraged to annotate the poem in the margins.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/annotate/"
  },
  {
    "word": "Antagonize",
    "meaning": "Cause someone to become hostile.",
    "example": "His sarcastic remarks served only to antagonize his colleagues.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/antagonize/"
  },
  {
    "word": "Antecedent",
    "meaning": "A thing or event that exists or logically precedes another.",
    "example": "The historical antecedents of the conflict date back centuries.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/antecedent/"
  },
  {
    "word": "Antedate",
    "meaning": "Precede in time; come before something else.",
    "example": "The ancient ruins antedate the arrival of the modern settlers.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/antedate/"
  },
  {
    "word": "Antiquated",
    "meaning": "Old-fashioned or outdated.",
    "example": "The company's computer system was antiquated and slow.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/antiquated/"
  },
  {
    "word": "Apathetic",
    "meaning": "Showing or feeling no interest, enthusiasm, or concern.",
    "example": "Many citizens remained apathetic about the local election results.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/apathetic/"
  },
  {
    "word": "Apex",
    "meaning": "The highest point of something.",
    "example": "The climber finally reached the apex of the steep mountain.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/apex/"
  },
  {
    "word": "Aphorism",
    "meaning": "A pithy observation that contains a general truth.",
    "example": "He liked to quote the aphorism: 'Haste makes waste.'",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/aphorism/"
  },
  {
    "word": "Apocryphal",
    "meaning": "Of doubtful authenticity, although widely circulated as being true.",
    "example": "The story about the famous discovery turned out to be apocryphal.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/apocryphal/"
  },
  {
    "word": "Apolitical",
    "meaning": "Not interested or involved in politics.",
    "example": "The non-profit organization remains strictly apolitical.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/apolitical/"
  },
  {
    "word": "Apostate",
    "meaning": "A person who renounces a religious or political belief or principle.",
    "example": "He was branded an apostate after leaving the ruling party.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/apostate/"
  },
  {
    "word": "Appall",
    "meaning": "Greatly dismay or horrify.",
    "example": "The horrific news reports served to appall audiences around the world.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/appall/"
  },
  {
    "word": "Apparatus",
    "meaning": "The technical equipment or machinery needed for a particular activity.",
    "example": "The laboratory was filled with expensive scientific apparatus.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/apparatus/"
  },
  {
    "word": "Appease",
    "meaning": "Pacify or placate someone by acceding to their demands.",
    "example": "They tried to appease the angry customer with a full refund.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/appease/"
  },
  {
    "word": "Appendage",
    "meaning": "A thing that is added or attached to something larger or more important.",
    "example": "The tail of the animal is a useful appendage for balance.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/appendage/"
  },
  {
    "word": "Appraise",
    "meaning": "Assess the value or quality of.",
    "example": "An expert was hired to appraise the value of the antique painting.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/appraise/"
  },
  {
    "word": "Apphend",
    "meaning": "To take or seize; to take hold of.",
    "example": "The term 'apphend' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/æ.pɹiˈhɛnd/"
  },
  {
    "word": "Apropos",
    "meaning": "Very appropriate to a particular situation.",
    "example": "His remarks were highly apropos to the topic under discussion.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/apropos/"
  },
  {
    "word": "Aptitude",
    "meaning": "A natural ability to do something.",
    "example": "She showed a remarkable aptitude for learning new foreign languages.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/aptitude/"
  },
  {
    "word": "Arbitrary",
    "meaning": "Based on random choice or personal whim, rather than any reason or system.",
    "example": "The decision felt completely arbitrary and lacked logic.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/arbitrary/"
  },
  {
    "word": "Archaic",
    "meaning": "Very old or old-fashioned; belonging to an earlier period.",
    "example": "The document was written in an archaic form of English.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/archaic/"
  },
  {
    "word": "Ardent",
    "meaning": "Very enthusiastic or passionate.",
    "example": "He was an ardent supporter of environmental conservation efforts.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/ardent/"
  },
  {
    "word": "Arduous",
    "meaning": "Involving or requiring strenuous effort; difficult and tiring.",
    "example": "It was an arduous climb up the steep face of the mountain.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/arduous/"
  },
  {
    "word": "Aria",
    "meaning": "A long accompanied song for a solo voice, typically in an opera.",
    "example": "The soprano sang a beautiful aria in the second act of the opera.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/aria/"
  },
  {
    "word": "Aromatic",
    "meaning": "Having a pleasant and distinctive smell.",
    "example": "The kitchen was filled with the aromatic scent of freshly baked bread.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/aromatic/"
  },
  {
    "word": "Articulate",
    "meaning": "Able to express ideas clearly and effectively in speech or writing.",
    "example": "She gave a highly articulate explanation of the new business strategy.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/articulate/"
  },
  {
    "word": "Artifice",
    "meaning": "Clever or cunning devices or expedients, especially as used to trick or deceive.",
    "example": "The magician used clever artifice to make the rabbit disappear.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/artifice/"
  },
  {
    "word": "Ascendancy",
    "meaning": "Occupation of a position of dominant power or influence.",
    "example": "The empire gained clear ascendancy over the surrounding territories.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ascendancy/"
  },
  {
    "word": "Ascertain",
    "meaning": "Find something out for certain; make sure of.",
    "example": "We must conduct tests to ascertain the exact cause of the problem.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ascertain/"
  },
  {
    "word": "Ascribe",
    "meaning": "Attribute something to a cause, source, or author.",
    "example": "Historians ascribe the anonymous manuscript to a local monk.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ascribe/"
  },
  {
    "word": "Aseptic",
    "meaning": "Free from contamination caused by harmful bacteria or viruses.",
    "example": "Surgeons must work in a strictly aseptic environment.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/aseptic/"
  },
  {
    "word": "Askew",
    "meaning": "Not in a straight or level position; crooked.",
    "example": "The picture frame on the wall was hanging slightly askew.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/askew/"
  },
  {
    "word": "Asperity",
    "meaning": "Harshness of tone or manner.",
    "example": "She spoke with some asperity when her instructions were ignored.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/asperity/"
  },
  {
    "word": "Aspiration",
    "meaning": "A hope or ambition of achieving something.",
    "example": "He had an aspiration to become a professional writer one day.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/aspiration/"
  },
  {
    "word": "Assail",
    "meaning": "Make a concerted or violent attack on.",
    "example": "Opponents began to assail the new policy in the national press.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/assail/"
  },
  {
    "word": "Assertive",
    "meaning": "Having or showing a confident and forceful personality.",
    "example": "We need an assertive leader who can take control of the situation.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/assertive/"
  },
  {
    "word": "Assimilate",
    "meaning": "Take in and fully understand information or ideas; absorb into a culture.",
    "example": "It takes time to assimilate into a new cultural environment.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/assimilate/"
  },
  {
    "word": "Assuage",
    "meaning": "Make an unpleasant feeling less intense.",
    "example": "The cool breeze helped to assuage the intense heat of the afternoon.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/assuage/"
  },
  {
    "word": "Astute",
    "meaning": "Having or showing an ability to accurately assess situations or people.",
    "example": "His astute analysis of the market saved the company from losses.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/astute/"
  },
  {
    "word": "Asylum",
    "meaning": "The protection granted by a nation to someone who has left their native country.",
    "example": "Many refugees sought asylum from the war in neighboring nations.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/asylum/"
  },
  {
    "word": "Atone",
    "meaning": "Make amends or reparation for a wrong.",
    "example": "He spent years working in charities to atone for his past mistakes.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/atone/"
  },
  {
    "word": "Atrocity",
    "meaning": "An extremely wicked or cruel act, typically one involving physical violence.",
    "example": "The war crimes were described as a horrific atrocity.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/atrocity/"
  },
  {
    "word": "Attenuate",
    "meaning": "Reduce the force, effect, or value of.",
    "example": "The vaccine is designed to attenuate the severity of the virus.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/attenuate/"
  },
  {
    "word": "Attest",
    "meaning": "Provide or serve as clear evidence of; certify.",
    "example": "Several witnesses were called to attest to his whereabouts that night.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/attest/"
  },
  {
    "word": "Audacious",
    "meaning": "Showing a willingness to take surprisingly bold risks; impudent.",
    "example": "The thieves pulled off an audacious heist in broad daylight.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/audacious/"
  },
  {
    "word": "Augment",
    "meaning": "Make something greater by adding to it; increase.",
    "example": "He worked a second job to augment his monthly income.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/augment/"
  },
  {
    "word": "Auspicious",
    "meaning": "Conducive to success; favorable.",
    "example": "The sunny weather was an auspicious sign for the outdoor wedding.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/auspicious/"
  },
  {
    "word": "Austere",
    "meaning": "Severe or strict in manner or attitude; simple and unadorned.",
    "example": "The monk lived a very austere life in the remote monastery.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/austere/"
  },
  {
    "word": "Autonomy",
    "meaning": "The right or condition of self-government; independence.",
    "example": "The region was granted a high degree of political autonomy.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/autonomy/"
  },
  {
    "word": "Auxiliary",
    "meaning": "Providing supplementary or additional help and support.",
    "example": "The hospital opened an auxiliary ward to handle the patient overflow.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/auxiliary/"
  },
  {
    "word": "Avarice",
    "meaning": "Extreme greed for wealth or material gain.",
    "example": "His life was dominated by his unchecked avarice and ambition.",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/avarice/"
  },
  {
    "word": "Averse",
    "meaning": "Having a strong dislike of or opposition to.",
    "example": "She is averse to taking unnecessary financial risks.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/averse/"
  },
  {
    "word": "Avid",
    "meaning": "Having or showing a keen interest in or enthusiasm for.",
    "example": "He is an avid reader of historical fiction novels.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/avid/"
  },
  {
    "word": "Avow",
    "meaning": "Assert or confess openly.",
    "example": "He chose to avow his commitment to the reform project.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/avow/"
  },
  {
    "word": "Awry",
    "meaning": "Away from the planned or expected course; amiss.",
    "example": "Our travel plans went awry when the flight was cancelled.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/awry/"
  },
  {
    "word": "Axiomatic",
    "meaning": "Self-evident or unquestionable.",
    "example": "It is axiomatic that practice is necessary to master any skill.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/axiomatic/"
  },
  {
    "word": "Babble",
    "meaning": "Idle talk; senseless prattle",
    "example": "The men were babbling, so we couldn't make sense of anything.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbæb.l̩/"
  },
  {
    "word": "Bacchanal",
    "meaning": "A devotee of Bacchus.",
    "example": "The term 'bacchanal' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈbækənəl/"
  },
  {
    "word": "Balk",
    "meaning": "An uncultivated ridge formed in the open field system, caused by the action of ploughing.",
    "example": "The horse balked.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɔːk/"
  },
  {
    "word": "Ballast",
    "meaning": "Heavy material that is placed in the hold of a ship (or in the gondola of a balloon), to provide stability.",
    "example": "The term 'ballast' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbæl.əst/"
  },
  {
    "word": "Banal",
    "meaning": "Common in a boring way, to the point of being predictable; containing nothing new or fresh.",
    "example": "The term 'banal' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bəˈnæl/"
  },
  {
    "word": "Bane",
    "meaning": "A cause of misery or death.",
    "example": "the bane of one's existence",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/beɪn/"
  },
  {
    "word": "Barrage",
    "meaning": "An artificial obstruction, such as a dam, in a river designed to increase its depth or to divert its flow.",
    "example": "The term 'barrage' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbæɹɑːʒ/"
  },
  {
    "word": "Bastion",
    "meaning": "A projecting part of a rampart or other fortification.",
    "example": "The term 'bastion' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbæsti.ən/"
  },
  {
    "word": "Bedeck",
    "meaning": "To deck, ornament, or adorn; to grace.",
    "example": "She bedecked her wedding gown with seed pearls.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈdɛk/"
  },
  {
    "word": "Befuddle",
    "meaning": "To perplex, confuse (someone).",
    "example": "The explanation left him completely befuddled.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈfʌdl/"
  },
  {
    "word": "Begrudge",
    "meaning": "To grudge about or over; be envious or covetous.",
    "example": "The term 'begrudge' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈɡɹʌdʒ/"
  },
  {
    "word": "Beguile",
    "meaning": "To deceive or delude (using guile).",
    "example": "I will never touch The Orb, even though its mysterious glow seduces and beguiles.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈɡaɪl/"
  },
  {
    "word": "Behoove",
    "meaning": "To befit, to suit.",
    "example": "The term 'behoove' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈhuːv/"
  },
  {
    "word": "Beleaguer",
    "meaning": "To besiege; to surround with troops.",
    "example": "The term 'beleaguer' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bəˈliː.ɡə/"
  },
  {
    "word": "Belie",
    "meaning": "To lie around; encompass.",
    "example": "The term 'belie' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈlʌɪ/"
  },
  {
    "word": "Bellicose",
    "meaning": "Warlike in nature; aggressive; hostile.",
    "example": "The term 'bellicose' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/ˈbɛləkoʊs/"
  },
  {
    "word": "Belligerent",
    "meaning": "A state or other armed participant in warfare",
    "example": "The UN sent a treaty proposal to the belligerents.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/bəˈlɪdʒ.(ə).ɹənt/"
  },
  {
    "word": "Bemoan",
    "meaning": "To moan or complain about (something).",
    "example": "He bemoaned the drought but went on watering his lawn.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈməʊn/"
  },
  {
    "word": "Bemuse",
    "meaning": "To confuse or bewilder.",
    "example": "The term 'bemuse' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bəˈmjuːz/"
  },
  {
    "word": "Benevolent",
    "meaning": "Having a disposition to do good.",
    "example": "Chinese and Eastern mythologies describe dragons as benevolent.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bəˈnɛvələnt/"
  },
  {
    "word": "Benign",
    "meaning": "Kind; gentle; mild.",
    "example": "an ozone-benign refrigerant",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈnaɪn/"
  },
  {
    "word": "Bequeath",
    "meaning": "To give or leave by will; to give by testament.",
    "example": "The term 'bequeath' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bɪˈkwiːð/"
  },
  {
    "word": "Bereft",
    "meaning": "To deprive by or as if by violence; to rob; to strip; to benim.",
    "example": "Death bereaved him of his wife.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bəˈɹɛft/"
  },
  {
    "word": "Besiege",
    "meaning": "To beset or surround with armed forces for the purpose of compelling to surrender, to lay siege to, beleaguer.",
    "example": "The term 'besiege' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bəˈsiːd͡ʒ/"
  },
  {
    "word": "Besmirch",
    "meaning": "High-level vocabulary word meaning of besmirch.",
    "example": "We witnessed a clear representation of besmirch in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/besmirch/"
  },
  {
    "word": "Bestow",
    "meaning": "High-level vocabulary word meaning of bestow.",
    "example": "We witnessed a clear representation of bestow in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bestow/"
  },
  {
    "word": "Betroth",
    "meaning": "High-level vocabulary word meaning of betroth.",
    "example": "We witnessed a clear representation of betroth in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/betroth/"
  },
  {
    "word": "Bevy",
    "meaning": "High-level vocabulary word meaning of bevy.",
    "example": "We witnessed a clear representation of bevy in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bevy/"
  },
  {
    "word": "Bias",
    "meaning": "High-level vocabulary word meaning of bias.",
    "example": "We witnessed a clear representation of bias in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bias/"
  },
  {
    "word": "Bibliophile",
    "meaning": "High-level vocabulary word meaning of bibliophile.",
    "example": "We witnessed a clear representation of bibliophile in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bibliophile/"
  },
  {
    "word": "Bifurcate",
    "meaning": "High-level vocabulary word meaning of bifurcate.",
    "example": "We witnessed a clear representation of bifurcate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bifurcate/"
  },
  {
    "word": "Bilk",
    "meaning": "High-level vocabulary word meaning of bilk.",
    "example": "We witnessed a clear representation of bilk in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bilk/"
  },
  {
    "word": "Binge",
    "meaning": "High-level vocabulary word meaning of binge.",
    "example": "We witnessed a clear representation of binge in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/binge/"
  },
  {
    "word": "Bipartisan",
    "meaning": "High-level vocabulary word meaning of bipartisan.",
    "example": "We witnessed a clear representation of bipartisan in their action.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/bipartisan/"
  },
  {
    "word": "Blasphemy",
    "meaning": "High-level vocabulary word meaning of blasphemy.",
    "example": "We witnessed a clear representation of blasphemy in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/blasphemy/"
  },
  {
    "word": "Blatant",
    "meaning": "High-level vocabulary word meaning of blatant.",
    "example": "We witnessed a clear representation of blatant in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/blatant/"
  },
  {
    "word": "Blight",
    "meaning": "High-level vocabulary word meaning of blight.",
    "example": "We witnessed a clear representation of blight in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/blight/"
  },
  {
    "word": "Blissful",
    "meaning": "High-level vocabulary word meaning of blissful.",
    "example": "We witnessed a clear representation of blissful in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/blissful/"
  },
  {
    "word": "Blithe",
    "meaning": "High-level vocabulary word meaning of blithe.",
    "example": "We witnessed a clear representation of blithe in their action.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/blithe/"
  },
  {
    "word": "Bludgeon",
    "meaning": "High-level vocabulary word meaning of bludgeon.",
    "example": "We witnessed a clear representation of bludgeon in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bludgeon/"
  },
  {
    "word": "Blunder",
    "meaning": "High-level vocabulary word meaning of blunder.",
    "example": "We witnessed a clear representation of blunder in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/blunder/"
  },
  {
    "word": "Boisterous",
    "meaning": "High-level vocabulary word meaning of boisterous.",
    "example": "We witnessed a clear representation of boisterous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/boisterous/"
  },
  {
    "word": "Bolster",
    "meaning": "High-level vocabulary word meaning of bolster.",
    "example": "We witnessed a clear representation of bolster in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bolster/"
  },
  {
    "word": "Bombastic",
    "meaning": "High-level vocabulary word meaning of bombastic.",
    "example": "We witnessed a clear representation of bombastic in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bombastic/"
  },
  {
    "word": "Bona fide",
    "meaning": "High-level vocabulary word meaning of bona fide.",
    "example": "We witnessed a clear representation of bona fide in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/bona fide/"
  },
  {
    "word": "Boorish",
    "meaning": "High-level vocabulary word meaning of boorish.",
    "example": "We witnessed a clear representation of boorish in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/boorish/"
  },
  {
    "word": "Botany",
    "meaning": "High-level vocabulary word meaning of botany.",
    "example": "We witnessed a clear representation of botany in their action.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/botany/"
  },
  {
    "word": "Brandish",
    "meaning": "High-level vocabulary word meaning of brandish.",
    "example": "We witnessed a clear representation of brandish in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brandish/"
  },
  {
    "word": "Bravado",
    "meaning": "High-level vocabulary word meaning of bravado.",
    "example": "We witnessed a clear representation of bravado in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bravado/"
  },
  {
    "word": "Brazen",
    "meaning": "High-level vocabulary word meaning of brazen.",
    "example": "We witnessed a clear representation of brazen in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brazen/"
  },
  {
    "word": "Breach",
    "meaning": "High-level vocabulary word meaning of breach.",
    "example": "We witnessed a clear representation of breach in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/breach/"
  },
  {
    "word": "Breadth",
    "meaning": "High-level vocabulary word meaning of breadth.",
    "example": "We witnessed a clear representation of breadth in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/breadth/"
  },
  {
    "word": "Brevity",
    "meaning": "High-level vocabulary word meaning of brevity.",
    "example": "We witnessed a clear representation of brevity in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brevity/"
  },
  {
    "word": "Brigade",
    "meaning": "High-level vocabulary word meaning of brigade.",
    "example": "We witnessed a clear representation of brigade in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brigade/"
  },
  {
    "word": "Bristle",
    "meaning": "High-level vocabulary word meaning of bristle.",
    "example": "We witnessed a clear representation of bristle in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bristle/"
  },
  {
    "word": "Broach",
    "meaning": "High-level vocabulary word meaning of broach.",
    "example": "We witnessed a clear representation of broach in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/broach/"
  },
  {
    "word": "Bromide",
    "meaning": "High-level vocabulary word meaning of bromide.",
    "example": "We witnessed a clear representation of bromide in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bromide/"
  },
  {
    "word": "Brook",
    "meaning": "High-level vocabulary word meaning of brook.",
    "example": "We witnessed a clear representation of brook in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brook/"
  },
  {
    "word": "Brouhaha",
    "meaning": "High-level vocabulary word meaning of brouhaha.",
    "example": "We witnessed a clear representation of brouhaha in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brouhaha/"
  },
  {
    "word": "Brusque",
    "meaning": "High-level vocabulary word meaning of brusque.",
    "example": "We witnessed a clear representation of brusque in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/brusque/"
  },
  {
    "word": "Bucolic",
    "meaning": "High-level vocabulary word meaning of bucolic.",
    "example": "We witnessed a clear representation of bucolic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/bucolic/"
  },
  {
    "word": "Buffet",
    "meaning": "High-level vocabulary word meaning of buffet.",
    "example": "We witnessed a clear representation of buffet in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/buffet/"
  },
  {
    "word": "Burgeon",
    "meaning": "High-level vocabulary word meaning of burgeon.",
    "example": "We witnessed a clear representation of burgeon in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/burgeon/"
  },
  {
    "word": "Bureaucracy",
    "meaning": "High-level vocabulary word meaning of bureaucracy.",
    "example": "We witnessed a clear representation of bureaucracy in their action.",
    "category": "business",
    "difficulty": "advanced",
    "pronunciation": "/bureaucracy/"
  },
  {
    "word": "Burly",
    "meaning": "High-level vocabulary word meaning of burly.",
    "example": "We witnessed a clear representation of burly in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/burly/"
  },
  {
    "word": "Bustle",
    "meaning": "An excited activity; a stir.",
    "example": "The commuters bustled about inside the train station.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbʌsəl/"
  },
  {
    "word": "Buttress",
    "meaning": "High-level vocabulary word meaning of buttress.",
    "example": "We witnessed a clear representation of buttress in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/buttress/"
  },
  {
    "word": "Bygone",
    "meaning": "(usually plural) An event that happened in the past.",
    "example": "The term 'bygone' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbaɪɡɒn/"
  },
  {
    "word": "Bypass",
    "meaning": "A road that passes around something, such as a residential area",
    "example": "The term 'bypass' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈbaɪpɑːs/"
  },
  {
    "word": "Byzantine",
    "meaning": "Of or pertaining to Byzantium.",
    "example": "a Byzantine system of regulations",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/byzantine/"
  },
  {
    "word": "Cache",
    "meaning": "A store of things that may be required in the future, which can be retrieved rapidly, protected or hidden in some way.",
    "example": "Members of the 29-man Discovery team laid down food caches to allow the polar team to travel light, hopping from food cache to food cache on their return journey.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kæɪʃ/"
  },
  {
    "word": "Cacophony",
    "meaning": "A mix of discordant sounds; dissonance.",
    "example": "The term 'cacophony' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈkɒfəni/"
  },
  {
    "word": "Cadence",
    "meaning": "The act or state of declining or sinking.",
    "example": "The cadence in a galliard step refers to the final leap in a cinquepace sequence.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkeɪ.dn̩s/"
  },
  {
    "word": "Cajole",
    "meaning": "To persuade someone to do something which they are reluctant to do, especially by flattery or promises; to coax.",
    "example": "The term 'cajole' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kəˈdʒəʊl/"
  },
  {
    "word": "Calamity",
    "meaning": "An event resulting in great loss.",
    "example": "The term 'calamity' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kəˈlæmɪti/"
  },
  {
    "word": "Callous",
    "meaning": "Emotionally hardened; unfeeling and indifferent to the suffering/feelings of others.",
    "example": "She was so callous that she could criticise a cancer patient for wearing a wig.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkæləs/"
  },
  {
    "word": "Camaraderie",
    "meaning": "Close friendship in a group of friends or teammates.",
    "example": "The term 'camaraderie' was utilized in the scholarly report.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/ˌkæməˈɹɑːdəɹi/"
  },
  {
    "word": "Camouflaged",
    "meaning": "To hide or disguise something by covering it up or changing the way it looks.",
    "example": "The term 'camouflaged' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/camouflaged/"
  },
  {
    "word": "Candor",
    "meaning": "Whiteness; brilliance; purity.",
    "example": "The term 'candor' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkæn.də(ɹ)/"
  },
  {
    "word": "Canny",
    "meaning": "Careful, prudent, cautious.",
    "example": "The politician gave a canny response to the reporter's questions.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkæni/"
  },
  {
    "word": "Canon",
    "meaning": "A generally accepted principle; a rule.",
    "example": "The trial must proceed according to the canons of law.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkæn.ən/"
  },
  {
    "word": "Cantankerous",
    "meaning": "Given to or marked by an ill-tempered nature; ill-tempered, cranky, surly, crabby.",
    "example": "The term 'cantankerous' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/kænˈtæŋkəɹəs/"
  },
  {
    "word": "Capacious",
    "meaning": "Having a lot of space inside; roomy.",
    "example": "The term 'capacious' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/kəˈpeɪʃəs/"
  },
  {
    "word": "Capitulate",
    "meaning": "To surrender; to end all resistance, to give up; to go along with or comply.",
    "example": "He argued and hollered for so long that I finally capitulated just to make him stop.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈpɪ.tjʊ.leɪt/"
  },
  {
    "word": "Capricious",
    "meaning": "Impulsive and unpredictable; determined by chance, impulse, or whim",
    "example": "I almost died in a capricious winter storm.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈpɹɪʃəs/"
  },
  {
    "word": "Captivate",
    "meaning": "To attract and hold interest and attention of; charm.",
    "example": "The term 'captivate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkæptɪveɪt/"
  },
  {
    "word": "Cardinal",
    "meaning": "One of the officials appointed by the pope in the Roman Catholic Church, ranking only below the pope and the patriarchs, constituting the special college which elects the pope. (See Wikipedia article on Catholic cardinals.)",
    "example": "a cardinal rule",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɑː.dɪ.nəl/"
  },
  {
    "word": "Caricature",
    "meaning": "A pictorial representation of someone in which distinguishing features are exaggerated for comic effect.",
    "example": "The term 'caricature' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkæɹɪkətʃʊə/"
  },
  {
    "word": "Carnage",
    "meaning": "Death and destruction.",
    "example": "The term 'carnage' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɑː.nɪdʒ/"
  },
  {
    "word": "Carnal",
    "meaning": "Relating to the physical and especially sexual appetites.",
    "example": "The term 'carnal' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɑɹnəl/"
  },
  {
    "word": "Carp",
    "meaning": "Any of various freshwater fish of the family Cyprinidae, especially the common carp, Cyprinus carpio.",
    "example": "The term 'carp' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɑːp/"
  },
  {
    "word": "Cascade",
    "meaning": "A waterfall or series of small waterfalls.",
    "example": "The term 'cascade' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/kæsˈkeɪd/"
  },
  {
    "word": "Castigate",
    "meaning": "To punish or reprimand someone severely.",
    "example": "The term 'castigate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkæs.tə.ɡeɪt/"
  },
  {
    "word": "Catalyst",
    "meaning": "A substance that increases the rate of a chemical reaction without being consumed in the process.",
    "example": "Economic development and integration are working as a catalyst for peace.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkæt.əl.ɪst/"
  },
  {
    "word": "Catharsis",
    "meaning": "High-level vocabulary word meaning of catharsis.",
    "example": "We witnessed a clear representation of catharsis in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/catharsis/"
  },
  {
    "word": "Caustic",
    "meaning": "High-level vocabulary word meaning of caustic.",
    "example": "We witnessed a clear representation of caustic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/caustic/"
  },
  {
    "word": "Cavalier",
    "meaning": "High-level vocabulary word meaning of cavalier.",
    "example": "We witnessed a clear representation of cavalier in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cavalier/"
  },
  {
    "word": "Cede",
    "meaning": "High-level vocabulary word meaning of cede.",
    "example": "We witnessed a clear representation of cede in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cede/"
  },
  {
    "word": "Celestial",
    "meaning": "High-level vocabulary word meaning of celestial.",
    "example": "We witnessed a clear representation of celestial in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/celestial/"
  },
  {
    "word": "Censorious",
    "meaning": "High-level vocabulary word meaning of censorious.",
    "example": "We witnessed a clear representation of censorious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/censorious/"
  },
  {
    "word": "Censure",
    "meaning": "High-level vocabulary word meaning of censure.",
    "example": "We witnessed a clear representation of censure in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/censure/"
  },
  {
    "word": "Cerebral",
    "meaning": "High-level vocabulary word meaning of cerebral.",
    "example": "We witnessed a clear representation of cerebral in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cerebral/"
  },
  {
    "word": "Certitude",
    "meaning": "High-level vocabulary word meaning of certitude.",
    "example": "We witnessed a clear representation of certitude in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/certitude/"
  },
  {
    "word": "Chagrin",
    "meaning": "High-level vocabulary word meaning of chagrin.",
    "example": "We witnessed a clear representation of chagrin in their action.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/chagrin/"
  },
  {
    "word": "Charisma",
    "meaning": "High-level vocabulary word meaning of charisma.",
    "example": "We witnessed a clear representation of charisma in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/charisma/"
  },
  {
    "word": "Chasm",
    "meaning": "High-level vocabulary word meaning of chasm.",
    "example": "We witnessed a clear representation of chasm in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/chasm/"
  },
  {
    "word": "Chastise",
    "meaning": "High-level vocabulary word meaning of chastise.",
    "example": "We witnessed a clear representation of chastise in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/chastise/"
  },
  {
    "word": "Chicanery",
    "meaning": "High-level vocabulary word meaning of chicanery.",
    "example": "We witnessed a clear representation of chicanery in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/chicanery/"
  },
  {
    "word": "Chide",
    "meaning": "High-level vocabulary word meaning of chide.",
    "example": "We witnessed a clear representation of chide in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/chide/"
  },
  {
    "word": "Chimera",
    "meaning": "High-level vocabulary word meaning of chimera.",
    "example": "We witnessed a clear representation of chimera in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/chimera/"
  },
  {
    "word": "Chronic",
    "meaning": "High-level vocabulary word meaning of chronic.",
    "example": "We witnessed a clear representation of chronic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/chronic/"
  },
  {
    "word": "Churlish",
    "meaning": "High-level vocabulary word meaning of churlish.",
    "example": "We witnessed a clear representation of churlish in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/churlish/"
  },
  {
    "word": "Circuitous",
    "meaning": "High-level vocabulary word meaning of circuitous.",
    "example": "We witnessed a clear representation of circuitous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/circuitous/"
  },
  {
    "word": "Circumscribe",
    "meaning": "High-level vocabulary word meaning of circumscribe.",
    "example": "We witnessed a clear representation of circumscribe in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/circumscribe/"
  },
  {
    "word": "Circumspect",
    "meaning": "High-level vocabulary word meaning of circumspect.",
    "example": "We witnessed a clear representation of circumspect in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/circumspect/"
  },
  {
    "word": "Circumvent",
    "meaning": "High-level vocabulary word meaning of circumvent.",
    "example": "We witnessed a clear representation of circumvent in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/circumvent/"
  },
  {
    "word": "Clairvoyant",
    "meaning": "High-level vocabulary word meaning of clairvoyant.",
    "example": "We witnessed a clear representation of clairvoyant in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/clairvoyant/"
  },
  {
    "word": "Clamor",
    "meaning": "High-level vocabulary word meaning of clamor.",
    "example": "We witnessed a clear representation of clamor in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/clamor/"
  },
  {
    "word": "Clandestine",
    "meaning": "High-level vocabulary word meaning of clandestine.",
    "example": "We witnessed a clear representation of clandestine in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/clandestine/"
  },
  {
    "word": "Clout",
    "meaning": "High-level vocabulary word meaning of clout.",
    "example": "We witnessed a clear representation of clout in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/clout/"
  },
  {
    "word": "Coalesce",
    "meaning": "High-level vocabulary word meaning of coalesce.",
    "example": "We witnessed a clear representation of coalesce in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/coalesce/"
  },
  {
    "word": "Coalition",
    "meaning": "High-level vocabulary word meaning of coalition.",
    "example": "We witnessed a clear representation of coalition in their action.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/coalition/"
  },
  {
    "word": "Coercive",
    "meaning": "High-level vocabulary word meaning of coercive.",
    "example": "We witnessed a clear representation of coercive in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/coercive/"
  },
  {
    "word": "Cogent",
    "meaning": "High-level vocabulary word meaning of cogent.",
    "example": "We witnessed a clear representation of cogent in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cogent/"
  },
  {
    "word": "Cogitate",
    "meaning": "High-level vocabulary word meaning of cogitate.",
    "example": "We witnessed a clear representation of cogitate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cogitate/"
  },
  {
    "word": "Cognizant",
    "meaning": "High-level vocabulary word meaning of cognizant.",
    "example": "We witnessed a clear representation of cognizant in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/cognizant/"
  },
  {
    "word": "Coherent",
    "meaning": "High-level vocabulary word meaning of coherent.",
    "example": "We witnessed a clear representation of coherent in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/coherent/"
  },
  {
    "word": "Cohort",
    "meaning": "High-level vocabulary word meaning of cohort.",
    "example": "We witnessed a clear representation of cohort in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cohort/"
  },
  {
    "word": "Collaborate",
    "meaning": "High-level vocabulary word meaning of collaborate.",
    "example": "We witnessed a clear representation of collaborate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/collaborate/"
  },
  {
    "word": "Collateral",
    "meaning": "High-level vocabulary word meaning of collateral.",
    "example": "We witnessed a clear representation of collateral in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/collateral/"
  },
  {
    "word": "Colloquial",
    "meaning": "High-level vocabulary word meaning of colloquial.",
    "example": "We witnessed a clear representation of colloquial in their action.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/colloquial/"
  },
  {
    "word": "Collude",
    "meaning": "High-level vocabulary word meaning of collude.",
    "example": "We witnessed a clear representation of collude in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/collude/"
  },
  {
    "word": "Colossal",
    "meaning": "Extremely large or on a great scale.",
    "example": "A single puppy can make a colossal mess.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kəˈlɒsəl/"
  },
  {
    "word": "Combustible",
    "meaning": "A material that is capable of burning.",
    "example": "Dumping fertilizer on top of whatever mysterious goop was in the storage tank created a combustible mix which caught fire.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈbʌstɪbəl/"
  },
  {
    "word": "Commendable",
    "meaning": "Worthy of commendation; deserving praise; admirable, creditable, or meritorious.",
    "example": "The term 'commendable' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈmɛndəbəl/"
  },
  {
    "word": "Commensurate",
    "meaning": "To reduce to a common measure.",
    "example": "The term 'commensurate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈmɛnʃəɹət/"
  },
  {
    "word": "Commiserate",
    "meaning": "Commiserating, pitying, lamentful",
    "example": "The term 'commiserate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəˈmɪzəɹət/"
  },
  {
    "word": "Commodify",
    "meaning": "To make something into a commodity, sometimes at the expense of its intrinsic value.",
    "example": "The term 'commodify' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/commodify/"
  },
  {
    "word": "Commodious",
    "meaning": "Advantageous; profitable.",
    "example": "Our house is much more commodious than our old apartment.",
    "category": "business",
    "difficulty": "advanced",
    "pronunciation": "/kəˈməʊdɪəs/"
  },
  {
    "word": "Compassionate",
    "meaning": "To feel compassion (for someone or with regard to something); to regard (someone or something) with compassion.",
    "example": "The Compassionate, the All-Compassionate",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpæʃənət/"
  },
  {
    "word": "Compatible",
    "meaning": "Something that is compatible with something else.",
    "example": "a computer company that sells IBM compatibles",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpætəbəl/"
  },
  {
    "word": "Compelling",
    "meaning": "To drive together, round up",
    "example": "Logic compels the wise, while fools feel compelled by emotions.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpɛlɪŋ/"
  },
  {
    "word": "Compensate",
    "meaning": "To do (something good) after (something bad) happens",
    "example": "It is hard work, but they will compensate you well for it.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɒm.pən.seɪt/"
  },
  {
    "word": "Complacent",
    "meaning": "Uncritically satisfied with oneself or one's achievements; smug.",
    "example": "The term 'complacent' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpleɪsənt/"
  },
  {
    "word": "Complaisant",
    "meaning": "Compliant.",
    "example": "The term 'complaisant' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpleɪsənt/"
  },
  {
    "word": "Complement",
    "meaning": "A protective substance that exists in the serum or other bodily fluid and is capable of killing microorganisms; complement.",
    "example": "The complement of blue is orange.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɒmpləmənt/"
  },
  {
    "word": "Complicit",
    "meaning": "Associated with or participating in an activity, especially one of a questionable nature.",
    "example": "The term 'complicit' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈplɪs.ɪt/"
  },
  {
    "word": "Comprehensive",
    "meaning": "A comprehensive school.",
    "example": "When there are diametrically opposing views on a big issue that concerns millions of people, doing comprehensive research just makes sense.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌkɒm.pɹɪˈhɛn.sɪv/"
  },
  {
    "word": "Compromise",
    "meaning": "The settlement of differences by arbitration or by consent reached by mutual concessions.",
    "example": "a compromise of character or right",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɒmpɹəˌmaɪz/"
  },
  {
    "word": "Compunction",
    "meaning": "A pricking of conscience or a feeling of regret, especially one which is slight or fleeting.",
    "example": "The term 'compunction' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/kəmˈpʌŋk.ʃən/"
  },
  {
    "word": "Conciliatory",
    "meaning": "Willing to conciliate, or to make concessions.",
    "example": "The term 'conciliatory' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kənˈsɪl.i.əˌtɔɹ.i/"
  },
  {
    "word": "Concomitant",
    "meaning": "Something happening or existing at the same time.",
    "example": "The term 'concomitant' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kənˈkɒmɪtənt/"
  },
  {
    "word": "Condescend",
    "meaning": "To come down from one's superior position; to deign (to do something).",
    "example": "The term 'condescend' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌkɒndɪˈsɛnd/"
  },
  {
    "word": "Condone",
    "meaning": "To forgive, excuse or overlook (something that is considered morally wrong, offensive, or generally disliked).",
    "example": "The term 'condone' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kənˈdəʊn/"
  },
  {
    "word": "Conducive",
    "meaning": "Tending to contribute to, encourage, or bring about some result.",
    "example": "A small, dark kitchen is not conducive to elaborate cooking.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kənˈdjuːsɪv/"
  },
  {
    "word": "Cone",
    "meaning": "A surface of revolution formed by rotating a segment of a line around another line that intersects the first line.",
    "example": "A cone is an object (the apex) and a natural transformation from a constant functor (whose image is the apex of the cone and its identity morphism) to a diagram functor. Its components are projections from the apex to the objects of the diagram and it has a “naturality triangle” for each morphism in the diagram. (A “naturality triangle” is just a naturality square which is degenerate at its apex side.)",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kəʊn/"
  },
  {
    "word": "Confide",
    "meaning": "To trust, have faith (in).",
    "example": "I confide this mission to you alone.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kənˈfaɪd/"
  },
  {
    "word": "Configuration",
    "meaning": "Form, as depending on the relative disposition of the parts of a thing's shape; figure; form factor.",
    "example": "The term 'configuration' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/configuration/"
  },
  {
    "word": "Conflagration",
    "meaning": "A large fire extending to many objects, or over a large space; a general burning.",
    "example": "It took sixty firefighters to put out the conflagration.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/ˌkɒnfləˈɡɹeɪʃən/"
  },
  {
    "word": "Confluence",
    "meaning": "The place where two rivers, streams, or other continuously flowing bodies of water meet and become one, especially where a tributary joins a river.",
    "example": "We encountered an abandoned boat at the confluence of the Mississippi and Ohio Rivers.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɒnfluəns/"
  },
  {
    "word": "Confound",
    "meaning": "A confounding variable.",
    "example": "Don't confound the situation by yelling.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kənˈfaʊnd/"
  },
  {
    "word": "Conglomerate",
    "meaning": "A cluster of heterogeneous things.",
    "example": "conglomerate flowers",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kənˈɡlɒm(ə)ɹət/"
  },
  {
    "word": "Conjecture",
    "meaning": "A statement or an idea which is unproven, but is thought to be true; a guess.",
    "example": "I explained it, but it is pure conjecture whether he understood, or not.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kənˈd͡ʒɛk.t͡ʃə(ɹ)/"
  },
  {
    "word": "Connoisseur",
    "meaning": "High-level vocabulary word meaning of connoisseur.",
    "example": "We witnessed a clear representation of connoisseur in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/connoisseur/"
  },
  {
    "word": "Conscientious",
    "meaning": "High-level vocabulary word meaning of conscientious.",
    "example": "We witnessed a clear representation of conscientious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/conscientious/"
  },
  {
    "word": "Conscious",
    "meaning": "High-level vocabulary word meaning of conscious.",
    "example": "We witnessed a clear representation of conscious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/conscious/"
  },
  {
    "word": "Consecrate",
    "meaning": "High-level vocabulary word meaning of consecrate.",
    "example": "We witnessed a clear representation of consecrate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consecrate/"
  },
  {
    "word": "Consensus",
    "meaning": "High-level vocabulary word meaning of consensus.",
    "example": "We witnessed a clear representation of consensus in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consensus/"
  },
  {
    "word": "Consequential",
    "meaning": "High-level vocabulary word meaning of consequential.",
    "example": "We witnessed a clear representation of consequential in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consequential/"
  },
  {
    "word": "Conservative",
    "meaning": "High-level vocabulary word meaning of conservative.",
    "example": "We witnessed a clear representation of conservative in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/conservative/"
  },
  {
    "word": "Considerate",
    "meaning": "High-level vocabulary word meaning of considerate.",
    "example": "We witnessed a clear representation of considerate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/considerate/"
  },
  {
    "word": "Consign",
    "meaning": "High-level vocabulary word meaning of consign.",
    "example": "We witnessed a clear representation of consign in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/consign/"
  },
  {
    "word": "Consolation",
    "meaning": "High-level vocabulary word meaning of consolation.",
    "example": "We witnessed a clear representation of consolation in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consolation/"
  },
  {
    "word": "Conspicuous",
    "meaning": "High-level vocabulary word meaning of conspicuous.",
    "example": "We witnessed a clear representation of conspicuous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/conspicuous/"
  },
  {
    "word": "Conspiratorial",
    "meaning": "High-level vocabulary word meaning of conspiratorial.",
    "example": "We witnessed a clear representation of conspiratorial in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/conspiratorial/"
  },
  {
    "word": "Consternation",
    "meaning": "High-level vocabulary word meaning of consternation.",
    "example": "We witnessed a clear representation of consternation in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consternation/"
  },
  {
    "word": "Constraint",
    "meaning": "High-level vocabulary word meaning of constraint.",
    "example": "We witnessed a clear representation of constraint in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/constraint/"
  },
  {
    "word": "Construe",
    "meaning": "High-level vocabulary word meaning of construe.",
    "example": "We witnessed a clear representation of construe in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/construe/"
  },
  {
    "word": "Consummate",
    "meaning": "High-level vocabulary word meaning of consummate.",
    "example": "We witnessed a clear representation of consummate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/consummate/"
  },
  {
    "word": "Contagious",
    "meaning": "High-level vocabulary word meaning of contagious.",
    "example": "We witnessed a clear representation of contagious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contagious/"
  },
  {
    "word": "Contemplate",
    "meaning": "High-level vocabulary word meaning of contemplate.",
    "example": "We witnessed a clear representation of contemplate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contemplate/"
  },
  {
    "word": "Contemporary",
    "meaning": "High-level vocabulary word meaning of contemporary.",
    "example": "We witnessed a clear representation of contemporary in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contemporary/"
  },
  {
    "word": "Contemptuous",
    "meaning": "High-level vocabulary word meaning of contemptuous.",
    "example": "We witnessed a clear representation of contemptuous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contemptuous/"
  },
  {
    "word": "Contentious",
    "meaning": "High-level vocabulary word meaning of contentious.",
    "example": "We witnessed a clear representation of contentious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contentious/"
  },
  {
    "word": "Contiguous",
    "meaning": "High-level vocabulary word meaning of contiguous.",
    "example": "We witnessed a clear representation of contiguous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contiguous/"
  },
  {
    "word": "Contingency",
    "meaning": "High-level vocabulary word meaning of contingency.",
    "example": "We witnessed a clear representation of contingency in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contingency/"
  },
  {
    "word": "Contort",
    "meaning": "High-level vocabulary word meaning of contort.",
    "example": "We witnessed a clear representation of contort in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/contort/"
  },
  {
    "word": "Contrarian",
    "meaning": "High-level vocabulary word meaning of contrarian.",
    "example": "We witnessed a clear representation of contrarian in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contrarian/"
  },
  {
    "word": "Contravene",
    "meaning": "High-level vocabulary word meaning of contravene.",
    "example": "We witnessed a clear representation of contravene in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contravene/"
  },
  {
    "word": "Contrite",
    "meaning": "High-level vocabulary word meaning of contrite.",
    "example": "We witnessed a clear representation of contrite in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/contrite/"
  },
  {
    "word": "Contrived",
    "meaning": "High-level vocabulary word meaning of contrived.",
    "example": "We witnessed a clear representation of contrived in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/contrived/"
  },
  {
    "word": "Convoluted",
    "meaning": "High-level vocabulary word meaning of convoluted.",
    "example": "We witnessed a clear representation of convoluted in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/convoluted/"
  },
  {
    "word": "Convivial",
    "meaning": "High-level vocabulary word meaning of convivial.",
    "example": "We witnessed a clear representation of convivial in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/convivial/"
  },
  {
    "word": "Copacetic",
    "meaning": "High-level vocabulary word meaning of copacetic.",
    "example": "We witnessed a clear representation of copacetic in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/copacetic/"
  },
  {
    "word": "Copious",
    "meaning": "Vast in quantity or number, profuse, abundant; taking place on a large scale.",
    "example": "The term 'copious' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkoʊpi.əs/"
  },
  {
    "word": "Cordial",
    "meaning": "A concentrated noncarbonated soft drink which is diluted with water before drinking.",
    "example": "The term 'cordial' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɔː.dɪ.əl/"
  },
  {
    "word": "Correlate",
    "meaning": "Either of a pair of things related by a correlation; a correlative.",
    "example": "The term 'correlate' was utilized in the scholarly report.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɒɹələt/"
  },
  {
    "word": "Corrode",
    "meaning": "To eat away bit by bit; to wear away or diminish by gradually separating or destroying small particles of, as by action of a strong acid or a caustic alkali.",
    "example": "My morale is being corroded day by day.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/kəˈɹəʊd/"
  },
  {
    "word": "Corroborate",
    "meaning": "To confirm or support something with additional evidence; to attest or vouch for.",
    "example": "The term 'corroborate' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/kəˈɹɒbəɹeɪ̯t/"
  },
  {
    "word": "Corrugated",
    "meaning": "(of the skin) To wrinkle.",
    "example": "The term 'corrugated' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/corrugated/"
  },
  {
    "word": "Cosmopolitan",
    "meaning": "A cosmopolitan person; a cosmopolite.",
    "example": "The term 'cosmopolitan' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌkɒz.məˈpɒl.ɪ.tən/"
  },
  {
    "word": "Costly",
    "meaning": "Of high cost; expensive.",
    "example": "a costly activity",
    "category": "business",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɒst.li/"
  },
  {
    "word": "Counterfeit",
    "meaning": "A non-genuine article; a fake.",
    "example": "to counterfeit the signature of another, coins, notes, etc.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/ˈkaʊn.tɚˌfɪt/"
  },
  {
    "word": "Counterintuitive",
    "meaning": "Contrary to intuition or common sense.",
    "example": "The term 'counterintuitive' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/counterintuitive/"
  },
  {
    "word": "Coup",
    "meaning": "A quick, brilliant, and highly successful act.",
    "example": "The term 'coup' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/kuː/"
  },
  {
    "word": "Courtesan",
    "meaning": "A woman of a royal or noble court.",
    "example": "The term 'courtesan' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kɔːtɪˈzæn/"
  },
  {
    "word": "Covenant",
    "meaning": "An agreement to do or not do a particular thing.",
    "example": "The term 'covenant' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkʌv.nənt/"
  },
  {
    "word": "Covet",
    "meaning": "To wish for with eagerness; to desire possession of, often enviously.",
    "example": "The term 'covet' was utilized in the scholarly report.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkʌvɪt/"
  },
  {
    "word": "Cowardice",
    "meaning": "Lack of courage.",
    "example": "The term 'cowardice' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkaʊədɪs/"
  },
  {
    "word": "Craven",
    "meaning": "A coward.",
    "example": "The term 'craven' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɹeɪ.vən/"
  },
  {
    "word": "Credence",
    "meaning": "Acceptance of a belief or claim as true, especially on the basis of evidence.",
    "example": "Based on the scientific data, I give credence to this hypothesis.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɹiː.dəns/"
  },
  {
    "word": "Credibility",
    "meaning": "Reputation impacting one's ability to be believed.",
    "example": "The term 'credibility' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kɹɛd.ə.ˈbɪ.ɫɪ.ti/"
  },
  {
    "word": "Credulous",
    "meaning": "Excessively ready to believe things; gullible.",
    "example": "The term 'credulous' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/kɹɛdjələs/"
  },
  {
    "word": "Crestfallen",
    "meaning": "Sad because of a recent disappointment.",
    "example": "The term 'crestfallen' was utilized in the scholarly report.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/ˈkɹɛstfɔːlən/"
  },
  {
    "word": "Criterion",
    "meaning": "A standard or test by which individual things or people may be compared and judged.",
    "example": "Criterion of choice, of decision, of selection",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/kɹaɪˈtɪəɹi.ən/"
  },
  {
    "word": "Cryptic",
    "meaning": "A cryptic crossword.",
    "example": "Lonomia caterpillars are extremely cryptic.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkɹɪptɪk/"
  },
  {
    "word": "Culpable",
    "meaning": "Meriting condemnation, censure or blame, especially as something wrong, harmful or injurious; blameworthy.",
    "example": "I am culpable for stealing your money.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈkʌlpəbəl/"
  },
  {
    "word": "Cultivation",
    "meaning": "The art or act of cultivating; improvement of land for or by agriculture",
    "example": "The heavy cultivation of the hillside led to soil erosion.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/ˌkʌltɪˈveɪʃən/"
  },
  {
    "word": "Cumbersome",
    "meaning": "Burdensome or hindering, as a weight or drag; vexatious",
    "example": "Cumbersome machines can endanger operators and slow down production.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈkʌmbɚsəm/"
  },
  {
    "word": "Cumulative",
    "meaning": "High-level vocabulary word meaning of cumulative.",
    "example": "We witnessed a clear representation of cumulative in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/cumulative/"
  },
  {
    "word": "Cupidity",
    "meaning": "High-level vocabulary word meaning of cupidity.",
    "example": "We witnessed a clear representation of cupidity in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cupidity/"
  },
  {
    "word": "Curtail",
    "meaning": "High-level vocabulary word meaning of curtail.",
    "example": "We witnessed a clear representation of curtail in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/curtail/"
  },
  {
    "word": "Cynical",
    "meaning": "High-level vocabulary word meaning of cynical.",
    "example": "We witnessed a clear representation of cynical in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/cynical/"
  },
  {
    "word": "Dalliance",
    "meaning": "High-level vocabulary word meaning of dalliance.",
    "example": "We witnessed a clear representation of dalliance in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dalliance/"
  },
  {
    "word": "Dapper",
    "meaning": "High-level vocabulary word meaning of dapper.",
    "example": "We witnessed a clear representation of dapper in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dapper/"
  },
  {
    "word": "Daunt",
    "meaning": "High-level vocabulary word meaning of daunt.",
    "example": "We witnessed a clear representation of daunt in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/daunt/"
  },
  {
    "word": "Debacle",
    "meaning": "High-level vocabulary word meaning of debacle.",
    "example": "We witnessed a clear representation of debacle in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/debacle/"
  },
  {
    "word": "Debase",
    "meaning": "High-level vocabulary word meaning of debase.",
    "example": "We witnessed a clear representation of debase in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/debase/"
  },
  {
    "word": "Debauchery",
    "meaning": "High-level vocabulary word meaning of debauchery.",
    "example": "We witnessed a clear representation of debauchery in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/debauchery/"
  },
  {
    "word": "Debilitate",
    "meaning": "High-level vocabulary word meaning of debilitate.",
    "example": "We witnessed a clear representation of debilitate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/debilitate/"
  },
  {
    "word": "Debris",
    "meaning": "High-level vocabulary word meaning of debris.",
    "example": "We witnessed a clear representation of debris in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/debris/"
  },
  {
    "word": "Debunk",
    "meaning": "High-level vocabulary word meaning of debunk.",
    "example": "We witnessed a clear representation of debunk in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/debunk/"
  },
  {
    "word": "Decadent",
    "meaning": "High-level vocabulary word meaning of decadent.",
    "example": "We witnessed a clear representation of decadent in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decadent/"
  },
  {
    "word": "Decimate",
    "meaning": "High-level vocabulary word meaning of decimate.",
    "example": "We witnessed a clear representation of decimate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decimate/"
  },
  {
    "word": "Decisive",
    "meaning": "High-level vocabulary word meaning of decisive.",
    "example": "We witnessed a clear representation of decisive in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decisive/"
  },
  {
    "word": "Declaim",
    "meaning": "High-level vocabulary word meaning of declaim.",
    "example": "We witnessed a clear representation of declaim in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/declaim/"
  },
  {
    "word": "Decompose",
    "meaning": "High-level vocabulary word meaning of decompose.",
    "example": "We witnessed a clear representation of decompose in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/decompose/"
  },
  {
    "word": "Decorum",
    "meaning": "High-level vocabulary word meaning of decorum.",
    "example": "We witnessed a clear representation of decorum in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decorum/"
  },
  {
    "word": "Decrepit",
    "meaning": "High-level vocabulary word meaning of decrepit.",
    "example": "We witnessed a clear representation of decrepit in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decrepit/"
  },
  {
    "word": "Decry",
    "meaning": "High-level vocabulary word meaning of decry.",
    "example": "We witnessed a clear representation of decry in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/decry/"
  },
  {
    "word": "Deduce",
    "meaning": "High-level vocabulary word meaning of deduce.",
    "example": "We witnessed a clear representation of deduce in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/deduce/"
  },
  {
    "word": "Deface",
    "meaning": "High-level vocabulary word meaning of deface.",
    "example": "We witnessed a clear representation of deface in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/deface/"
  },
  {
    "word": "Defame",
    "meaning": "High-level vocabulary word meaning of defame.",
    "example": "We witnessed a clear representation of defame in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/defame/"
  },
  {
    "word": "Default",
    "meaning": "High-level vocabulary word meaning of default.",
    "example": "We witnessed a clear representation of default in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/default/"
  },
  {
    "word": "Defeatist",
    "meaning": "High-level vocabulary word meaning of defeatist.",
    "example": "We witnessed a clear representation of defeatist in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/defeatist/"
  },
  {
    "word": "Deferential",
    "meaning": "High-level vocabulary word meaning of deferential.",
    "example": "We witnessed a clear representation of deferential in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/deferential/"
  },
  {
    "word": "Defiance",
    "meaning": "High-level vocabulary word meaning of defiance.",
    "example": "We witnessed a clear representation of defiance in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/defiance/"
  },
  {
    "word": "Definitive",
    "meaning": "High-level vocabulary word meaning of definitive.",
    "example": "We witnessed a clear representation of definitive in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/definitive/"
  },
  {
    "word": "Deflate",
    "meaning": "High-level vocabulary word meaning of deflate.",
    "example": "We witnessed a clear representation of deflate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/deflate/"
  },
  {
    "word": "Deflect",
    "meaning": "High-level vocabulary word meaning of deflect.",
    "example": "We witnessed a clear representation of deflect in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/deflect/"
  },
  {
    "word": "Defunct",
    "meaning": "The dead person (referred to).",
    "example": "The term 'defunct' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈfʌŋkt/"
  },
  {
    "word": "Degradation",
    "meaning": "The act of reducing in rank, character, or reputation, or of abasing; a lowering from one's standing or rank in office or society",
    "example": "The term 'degradation' was utilized in the scholarly report.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/ˌdɛɡɹəˈdeɪʃən/"
  },
  {
    "word": "Dehydrate",
    "meaning": "To lose or remove water; to dry",
    "example": "The term 'dehydrate' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/diːhaɪdˈɹeɪt/"
  },
  {
    "word": "Delete",
    "meaning": "A key that may be pressed to delete something (such as text or files) from a computer.",
    "example": "I lost the file when I accidentally hit delete.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diˈliːt/"
  },
  {
    "word": "Deliberate",
    "meaning": "To consider carefully; to weigh well in the mind.",
    "example": "It is now time for the jury to deliberate the guilt of the defendant.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/deliberate/"
  },
  {
    "word": "Delineate",
    "meaning": "To sketch out, draw or trace an outline.",
    "example": "The term 'delineate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈlɪniːeɪt/"
  },
  {
    "word": "Delirious",
    "meaning": "Being in the state of delirium.",
    "example": "The term 'delirious' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈlɪəɹɪəs/"
  },
  {
    "word": "Delude",
    "meaning": "To deceive into believing something which is false; to lead into error; to dupe.",
    "example": "The term 'delude' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈljuːd/"
  },
  {
    "word": "Deluge",
    "meaning": "A great flood or rain.",
    "example": "The deluge continued for hours, drenching the land and slowing traffic to a halt.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈdɛl.juːdʒ/"
  },
  {
    "word": "Demagogue",
    "meaning": "A political orator or leader who gains favor by pandering to or exciting the passions and prejudices of the audience rather than by using rational argument.",
    "example": "The term 'demagogue' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈdɛməɡɒɡ/"
  },
  {
    "word": "Demean",
    "meaning": "To debase; to lower; to degrade.",
    "example": "The term 'demean' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈmiːn/"
  },
  {
    "word": "Demure",
    "meaning": "To look demurely.",
    "example": "She is a demure young lady.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈmjʊə(ɹ)/"
  },
  {
    "word": "Denigrate",
    "meaning": "To criticise so as to besmirch; traduce, disparage or defame.",
    "example": "You have no right to denigrate people and things that you have no personal experience with.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈdɛn.ɪ.ɡɹeɪt/"
  },
  {
    "word": "Denizen",
    "meaning": "An inhabitant of a place; one who dwells in.",
    "example": "The giant squid is one of many denizens of the deep.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈdɛn.ɪ.zən/"
  },
  {
    "word": "Denunciation",
    "meaning": "Proclamation; announcement; a publishing.",
    "example": "The term 'denunciation' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˌnʊnsiˈeɪʃən/"
  },
  {
    "word": "Deplete",
    "meaning": "To empty or unload, as the vessels of the human system, by bloodletting or by medicine.",
    "example": "Certain medications can deplete vitamin D.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈpliːt/"
  },
  {
    "word": "Deplore",
    "meaning": "To bewail; to weep bitterly over; to feel sorrow for.",
    "example": "I deplore my neighbour for having lost his job.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈplɔː/"
  },
  {
    "word": "Deploy",
    "meaning": "Deployment",
    "example": "\"Deploy two units of infantry along the enemy's flank,\" the general ordered.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈplɔɪ/"
  },
  {
    "word": "Depose",
    "meaning": "To put down; to lay down; to deposit; to lay aside; to put away.",
    "example": "A deposed monarch may go into exile as pretender to the lost throne, hoping to be restored in a subsequent revolution.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈpəʊz/"
  },
  {
    "word": "Depravity",
    "meaning": "The state or condition of being depraved; moral debasement.",
    "example": "The term 'depravity' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dəˈpɹævɪti/"
  },
  {
    "word": "Derelict",
    "meaning": "Property abandoned by its former owner, especially a ship abandoned at sea.",
    "example": "There was a derelict ship on the island.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈdɛɹəlɪkt/"
  },
  {
    "word": "Deride",
    "meaning": "To harshly mock; ridicule.",
    "example": "The term 'deride' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈɹaɪd/"
  },
  {
    "word": "Derivative",
    "meaning": "Something derived.",
    "example": "a derivative conveyance; a derivative word",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈɹɪvətɪv/"
  },
  {
    "word": "Derogatory",
    "meaning": "A trade-line on a credit report that includes negative credit history.",
    "example": "The term 'derogatory' was utilized in the scholarly report.",
    "category": "business",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈɹɒɡətɹi/"
  },
  {
    "word": "Descry",
    "meaning": "To see.",
    "example": "The term 'descry' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈskɹaɪ/"
  },
  {
    "word": "Desecrate",
    "meaning": "High-level vocabulary word meaning of desecrate.",
    "example": "We witnessed a clear representation of desecrate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/desecrate/"
  },
  {
    "word": "Desiccate",
    "meaning": "High-level vocabulary word meaning of desiccate.",
    "example": "We witnessed a clear representation of desiccate in their action.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/desiccate/"
  },
  {
    "word": "Desist",
    "meaning": "High-level vocabulary word meaning of desist.",
    "example": "We witnessed a clear representation of desist in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/desist/"
  },
  {
    "word": "Desolate",
    "meaning": "High-level vocabulary word meaning of desolate.",
    "example": "We witnessed a clear representation of desolate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/desolate/"
  },
  {
    "word": "Despondent",
    "meaning": "High-level vocabulary word meaning of despondent.",
    "example": "We witnessed a clear representation of despondent in their action.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/despondent/"
  },
  {
    "word": "Destitute",
    "meaning": "High-level vocabulary word meaning of destitute.",
    "example": "We witnessed a clear representation of destitute in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/destitute/"
  },
  {
    "word": "Desultory",
    "meaning": "High-level vocabulary word meaning of desultory.",
    "example": "We witnessed a clear representation of desultory in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/desultory/"
  },
  {
    "word": "Detachment",
    "meaning": "High-level vocabulary word meaning of detachment.",
    "example": "We witnessed a clear representation of detachment in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/detachment/"
  },
  {
    "word": "Deterrent",
    "meaning": "High-level vocabulary word meaning of deterrent.",
    "example": "We witnessed a clear representation of deterrent in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/deterrent/"
  },
  {
    "word": "Detrimental",
    "meaning": "High-level vocabulary word meaning of detrimental.",
    "example": "We witnessed a clear representation of detrimental in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/detrimental/"
  },
  {
    "word": "Deviate",
    "meaning": "High-level vocabulary word meaning of deviate.",
    "example": "We witnessed a clear representation of deviate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/deviate/"
  },
  {
    "word": "Devious",
    "meaning": "High-level vocabulary word meaning of devious.",
    "example": "We witnessed a clear representation of devious in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/devious/"
  },
  {
    "word": "Devoid",
    "meaning": "High-level vocabulary word meaning of devoid.",
    "example": "We witnessed a clear representation of devoid in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/devoid/"
  },
  {
    "word": "Devout",
    "meaning": "High-level vocabulary word meaning of devout.",
    "example": "We witnessed a clear representation of devout in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/devout/"
  },
  {
    "word": "Dexterous",
    "meaning": "High-level vocabulary word meaning of dexterous.",
    "example": "We witnessed a clear representation of dexterous in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dexterous/"
  },
  {
    "word": "Diatribe",
    "meaning": "High-level vocabulary word meaning of diatribe.",
    "example": "We witnessed a clear representation of diatribe in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diatribe/"
  },
  {
    "word": "Dichotomy",
    "meaning": "High-level vocabulary word meaning of dichotomy.",
    "example": "We witnessed a clear representation of dichotomy in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dichotomy/"
  },
  {
    "word": "Dictum",
    "meaning": "High-level vocabulary word meaning of dictum.",
    "example": "We witnessed a clear representation of dictum in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dictum/"
  },
  {
    "word": "Didactic",
    "meaning": "High-level vocabulary word meaning of didactic.",
    "example": "We witnessed a clear representation of didactic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/didactic/"
  },
  {
    "word": "Differentiate",
    "meaning": "High-level vocabulary word meaning of differentiate.",
    "example": "We witnessed a clear representation of differentiate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/differentiate/"
  },
  {
    "word": "Diffuse",
    "meaning": "High-level vocabulary word meaning of diffuse.",
    "example": "We witnessed a clear representation of diffuse in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diffuse/"
  },
  {
    "word": "Digress",
    "meaning": "High-level vocabulary word meaning of digress.",
    "example": "We witnessed a clear representation of digress in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/digress/"
  },
  {
    "word": "Dilated",
    "meaning": "High-level vocabulary word meaning of dilated.",
    "example": "We witnessed a clear representation of dilated in their action.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/dilated/"
  },
  {
    "word": "Dilatory",
    "meaning": "High-level vocabulary word meaning of dilatory.",
    "example": "We witnessed a clear representation of dilatory in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dilatory/"
  },
  {
    "word": "Dilemma",
    "meaning": "High-level vocabulary word meaning of dilemma.",
    "example": "We witnessed a clear representation of dilemma in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dilemma/"
  },
  {
    "word": "Diligent",
    "meaning": "High-level vocabulary word meaning of diligent.",
    "example": "We witnessed a clear representation of diligent in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diligent/"
  },
  {
    "word": "Diminutive",
    "meaning": "(grammar) A word form expressing smallness, youth, unimportance, or endearment.",
    "example": "Booklet, the diminutive of book, means ‘small book’.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dəˈmɪn.jə.tɪv/"
  },
  {
    "word": "Din",
    "meaning": "High-level vocabulary word meaning of din.",
    "example": "We witnessed a clear representation of din in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/din/"
  },
  {
    "word": "Dire",
    "meaning": "High-level vocabulary word meaning of dire.",
    "example": "We witnessed a clear representation of dire in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dire/"
  },
  {
    "word": "Discerning",
    "meaning": "High-level vocabulary word meaning of discerning.",
    "example": "We witnessed a clear representation of discerning in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/discerning/"
  },
  {
    "word": "Disclaim",
    "meaning": "To renounce all claim to; to deny ownership of or responsibility for; to disown; to disavow; to reject.",
    "example": "The term 'disclaim' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈkleɪm/"
  },
  {
    "word": "Disclose",
    "meaning": "A disclosure.",
    "example": "The term 'disclose' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈkləʊz/"
  },
  {
    "word": "Discomfit",
    "meaning": "To defeat completely; to rout.",
    "example": "Don't worry. Your joke did not really discomfit me.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈkʌmfɪt/"
  },
  {
    "word": "Disconcerting",
    "meaning": "Tending to cause discomfort, uneasiness or alarm.",
    "example": "Even with a safety harness, losing one's grip that high up is disconcerting.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌdɪskənˈsɜːtɪŋ/"
  },
  {
    "word": "Discordant",
    "meaning": "Not in harmony or accord",
    "example": "Dikes may be discordant to country rock if they intrude at a high angle to the bedding.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈkɔːdənt/"
  },
  {
    "word": "Discredit",
    "meaning": "Discrediting or disbelieving.",
    "example": "Later accounts have brought the story into discredit.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/discredit/"
  },
  {
    "word": "Discrepancy",
    "meaning": "An inconsistency between facts or sentiments.",
    "example": "They found a discrepancy between the first set of test results and the second, and they're still trying to figure out why.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈkɹɛpənsi/"
  },
  {
    "word": "Discrete",
    "meaning": "Separate; distinct; individual; non-continuous.",
    "example": "a government with three discrete divisions",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈkɹiːt/"
  },
  {
    "word": "Discretion",
    "meaning": "The quality of being discreet or circumspect.",
    "example": "Bob showed great discretion despite his knowledge of the affair.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈskɹɛʃən/"
  },
  {
    "word": "Discriminating",
    "meaning": "To make distinctions.",
    "example": "The law prohibits discriminating against people based on their skin color.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈkɹɪmɪneɪtɪŋ(ɡ)/"
  },
  {
    "word": "Disdain",
    "meaning": "A feeling of contempt or scorn.",
    "example": "The cat viewed the cheap supermarket catfood with disdain and stalked away.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈdeɪn/"
  },
  {
    "word": "Disheveled",
    "meaning": "To throw into disorder; upheave.",
    "example": "The term 'disheveled' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/disheveled/"
  },
  {
    "word": "Disillusion",
    "meaning": "The act or process of disenchanting or freeing from a false belief.",
    "example": "The term 'disillusion' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪs.ɪˈluːʒən/"
  },
  {
    "word": "Disingenuous",
    "meaning": "Not honourable; unworthy of honour",
    "example": "The term 'disingenuous' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌdɪs.ɪn.ˈdʒɛn.ju.əs/"
  },
  {
    "word": "Dismal",
    "meaning": "Disappointingly inadequate.",
    "example": "He received a dismal compensation.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "[ˈdɪzməɫ]"
  },
  {
    "word": "Dismay",
    "meaning": "A sudden or complete loss of courage and firmness in the face of trouble or danger; overwhelming and disabling terror; a sinking of the spirits",
    "example": "He looked in dismay at the destruction of the town caused by the hurricane.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈmeɪ/"
  },
  {
    "word": "Disparage",
    "meaning": "Inequality in marriage; marriage with an inferior.",
    "example": "The term 'disparage' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈpæɹɪd͡ʒ/"
  },
  {
    "word": "Disparate",
    "meaning": "(chiefly in the plural) Any of a group of unequal or dissimilar things.",
    "example": "The board of the company was decidedly disparate, with no two members from the same social or economic background.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/ˈdɪsp(ə)ɹət/"
  },
  {
    "word": "Dispassionate",
    "meaning": "Not showing, and not affected by, emotion, bias, or prejudice",
    "example": "The term 'dispassionate' was utilized in the scholarly report.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈpæʃənət/"
  },
  {
    "word": "Dispel",
    "meaning": "An act or instance of dispelling.",
    "example": "The term 'dispel' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "[dɪˈspɛɫ]"
  },
  {
    "word": "Disperse",
    "meaning": "To scatter in different directions",
    "example": "The Jews are dispersed among all nations.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈspɜːs/"
  },
  {
    "word": "Displace",
    "meaning": "To put out of place; to disarrange.",
    "example": "Electronic calculators soon displaced the older mechanical kind.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈpleɪs/"
  },
  {
    "word": "Disposable",
    "meaning": "Any object that is designed to be disposed of rather than refilled or repaired.",
    "example": "Rather than purchase an expensive razor he bought a packet of cheap disposable ones.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪsˈpəʊzəbl̩/"
  },
  {
    "word": "Disquiet",
    "meaning": "Lack of quiet; absence of tranquility in body or mind",
    "example": "He felt disquieted by the lack of interest the child had shown.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/dɪsˈkwaɪət/"
  },
  {
    "word": "Disseminate",
    "meaning": "To sow and scatter principles, ideas, opinions, etc, or concrete things, for growth and propagation, like seeds.",
    "example": "The values of the human rights movement have disseminated throughout the world.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈsɛmɪˌneɪt/"
  },
  {
    "word": "Dissent",
    "meaning": "Disagreement with the ideas, doctrines, decrees, etc. of a political party, government or religion.",
    "example": "The term 'dissent' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/dɪˈsɛnt/"
  },
  {
    "word": "Dissipate",
    "meaning": "To drive away, disperse.",
    "example": "The term 'dissipate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈdɪsɪpeɪt/"
  },
  {
    "word": "Dissonance",
    "meaning": "A harsh, discordant combination of sounds.",
    "example": "The term 'dissonance' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈdɪsənəns/"
  },
  {
    "word": "Distant",
    "meaning": "Far off (physically, logically or mentally).",
    "example": "We heard a distant rumbling but didn't pay any more attention to it.   She was surprised to find that her fiancé was a distant relative of hers.   His distant look showed that he was not listening to me.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/ˈdɪstənt/"
  },
  {
    "word": "Distill",
    "meaning": "To subject a substance to distillation.",
    "example": "Firs distill resin.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "[dɪˈstɪɫ]"
  },
  {
    "word": "Distinctive",
    "meaning": "A distinctive thing: a quality or property permitting distinguishing; a characteristic.",
    "example": "a product in distinctive packaging",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/dɪˈstɪŋktɪv/"
  },
  {
    "word": "Distraught",
    "meaning": "High-level vocabulary word meaning of distraught.",
    "example": "We witnessed a clear representation of distraught in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/distraught/"
  },
  {
    "word": "Diurnal",
    "meaning": "High-level vocabulary word meaning of diurnal.",
    "example": "We witnessed a clear representation of diurnal in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diurnal/"
  },
  {
    "word": "Diverge",
    "meaning": "High-level vocabulary word meaning of diverge.",
    "example": "We witnessed a clear representation of diverge in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diverge/"
  },
  {
    "word": "Diverse",
    "meaning": "High-level vocabulary word meaning of diverse.",
    "example": "We witnessed a clear representation of diverse in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/diverse/"
  },
  {
    "word": "Divisive",
    "meaning": "High-level vocabulary word meaning of divisive.",
    "example": "We witnessed a clear representation of divisive in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/divisive/"
  },
  {
    "word": "Divuge",
    "meaning": "High-level vocabulary word meaning of divuge.",
    "example": "We witnessed a clear representation of divuge in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/divuge/"
  },
  {
    "word": "Dogged",
    "meaning": "High-level vocabulary word meaning of dogged.",
    "example": "We witnessed a clear representation of dogged in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dogged/"
  },
  {
    "word": "Dogmatic",
    "meaning": "High-level vocabulary word meaning of dogmatic.",
    "example": "We witnessed a clear representation of dogmatic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dogmatic/"
  },
  {
    "word": "Dolorous",
    "meaning": "High-level vocabulary word meaning of dolorous.",
    "example": "We witnessed a clear representation of dolorous in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dolorous/"
  },
  {
    "word": "Domicile",
    "meaning": "High-level vocabulary word meaning of domicile.",
    "example": "We witnessed a clear representation of domicile in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/domicile/"
  },
  {
    "word": "Domineering",
    "meaning": "High-level vocabulary word meaning of domineering.",
    "example": "We witnessed a clear representation of domineering in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/domineering/"
  },
  {
    "word": "Dormant",
    "meaning": "High-level vocabulary word meaning of dormant.",
    "example": "We witnessed a clear representation of dormant in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dormant/"
  },
  {
    "word": "Dour",
    "meaning": "High-level vocabulary word meaning of dour.",
    "example": "We witnessed a clear representation of dour in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dour/"
  },
  {
    "word": "Draconian",
    "meaning": "High-level vocabulary word meaning of draconian.",
    "example": "We witnessed a clear representation of draconian in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/draconian/"
  },
  {
    "word": "Droll",
    "meaning": "High-level vocabulary word meaning of droll.",
    "example": "We witnessed a clear representation of droll in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/droll/"
  },
  {
    "word": "Dubious",
    "meaning": "High-level vocabulary word meaning of dubious.",
    "example": "We witnessed a clear representation of dubious in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dubious/"
  },
  {
    "word": "Ductile",
    "meaning": "High-level vocabulary word meaning of ductile.",
    "example": "We witnessed a clear representation of ductile in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ductile/"
  },
  {
    "word": "Duress",
    "meaning": "High-level vocabulary word meaning of duress.",
    "example": "We witnessed a clear representation of duress in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/duress/"
  },
  {
    "word": "Dynamic",
    "meaning": "High-level vocabulary word meaning of dynamic.",
    "example": "We witnessed a clear representation of dynamic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/dynamic/"
  },
  {
    "word": "Eager",
    "meaning": "High-level vocabulary word meaning of eager.",
    "example": "We witnessed a clear representation of eager in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/eager/"
  },
  {
    "word": "Earnest",
    "meaning": "High-level vocabulary word meaning of earnest.",
    "example": "We witnessed a clear representation of earnest in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/earnest/"
  },
  {
    "word": "Earthy",
    "meaning": "High-level vocabulary word meaning of earthy.",
    "example": "We witnessed a clear representation of earthy in their action.",
    "category": "science",
    "difficulty": "intermediate",
    "pronunciation": "/earthy/"
  },
  {
    "word": "Eclectic",
    "meaning": "High-level vocabulary word meaning of eclectic.",
    "example": "We witnessed a clear representation of eclectic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/eclectic/"
  },
  {
    "word": "Eclipse",
    "meaning": "High-level vocabulary word meaning of eclipse.",
    "example": "We witnessed a clear representation of eclipse in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/eclipse/"
  },
  {
    "word": "Economical",
    "meaning": "High-level vocabulary word meaning of economical.",
    "example": "We witnessed a clear representation of economical in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/economical/"
  },
  {
    "word": "Ecstasy",
    "meaning": "High-level vocabulary word meaning of ecstasy.",
    "example": "We witnessed a clear representation of ecstasy in their action.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/ecstasy/"
  },
  {
    "word": "Edify",
    "meaning": "High-level vocabulary word meaning of edify.",
    "example": "We witnessed a clear representation of edify in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/edify/"
  },
  {
    "word": "Efface",
    "meaning": "High-level vocabulary word meaning of efface.",
    "example": "We witnessed a clear representation of efface in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/efface/"
  },
  {
    "word": "Effectual",
    "meaning": "High-level vocabulary word meaning of effectual.",
    "example": "We witnessed a clear representation of effectual in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/effectual/"
  },
  {
    "word": "Effervescent",
    "meaning": "High-level vocabulary word meaning of effervescent.",
    "example": "We witnessed a clear representation of effervescent in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/effervescent/"
  },
  {
    "word": "Effete",
    "meaning": "High-level vocabulary word meaning of effete.",
    "example": "We witnessed a clear representation of effete in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/effete/"
  },
  {
    "word": "Efficacious",
    "meaning": "High-level vocabulary word meaning of efficacious.",
    "example": "We witnessed a clear representation of efficacious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/efficacious/"
  },
  {
    "word": "Efficiency",
    "meaning": "High-level vocabulary word meaning of efficiency.",
    "example": "We witnessed a clear representation of efficiency in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/efficiency/"
  },
  {
    "word": "Effrontery",
    "meaning": "High-level vocabulary word meaning of effrontery.",
    "example": "We witnessed a clear representation of effrontery in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/effrontery/"
  },
  {
    "word": "Egalitarian",
    "meaning": "High-level vocabulary word meaning of egalitarian.",
    "example": "We witnessed a clear representation of egalitarian in their action.",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/egalitarian/"
  },
  {
    "word": "Egoistic",
    "meaning": "High-level vocabulary word meaning of egoistic.",
    "example": "We witnessed a clear representation of egoistic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/egoistic/"
  },
  {
    "word": "Egregious",
    "meaning": "High-level vocabulary word meaning of egregious.",
    "example": "We witnessed a clear representation of egregious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/egregious/"
  },
  {
    "word": "Elaborate",
    "meaning": "To develop in detail or complexity",
    "example": "Could you elaborate on the plot for your novel for me?",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪˈlæbəɹeɪt/"
  },
  {
    "word": "Elated",
    "meaning": "High-level vocabulary word meaning of elated.",
    "example": "We witnessed a clear representation of elated in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/elated/"
  },
  {
    "word": "Elegiac",
    "meaning": "A poem composed in the couplet style of classical elegies: a line of dactylic hexameter followed by a line of dactylic pentameter.",
    "example": "the elegiac distich or couplet, consisting of a dactylic hexameter and pentameter",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˌɛləˈdʒaɪæk/"
  },
  {
    "word": "Elevate",
    "meaning": "To raise (something) to a higher position.",
    "example": "The doctor told me elevating my legs would help reduce the swelling.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛləveɪt/"
  },
  {
    "word": "Eligible",
    "meaning": "One who is eligible.",
    "example": "The term 'eligible' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛlɪdʒəb(ə)l/"
  },
  {
    "word": "Eliminate",
    "meaning": "To completely remove, get rid of, put an end to.",
    "example": "a ruthless mobster who eliminated his enemies",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪˈlɪməneɪt/"
  },
  {
    "word": "Elusive",
    "meaning": "Evading capture, comprehension or remembrance.",
    "example": "The elusive criminal was arrested",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/iˈluːsɪv/"
  },
  {
    "word": "Emancipate",
    "meaning": "To set free from the power of another; to liberate; as:",
    "example": "emancipate someone from prejudices or error",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪˈmænsɪpeɪt/"
  },
  {
    "word": "Embargo",
    "meaning": "An order by the government prohibiting ships from leaving port.",
    "example": "This copy of the federal budget is under embargo until 2 p.m.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɪmˈbɑːɡəʊ/"
  },
  {
    "word": "Embellish",
    "meaning": "To make more beautiful and attractive; to decorate.",
    "example": "The old book cover was embellished with golden letters",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/ɛm-/"
  },
  {
    "word": "Embody",
    "meaning": "To represent in a physical or concrete form; to incarnate or personify.",
    "example": "As the car salesman approached, wearing a plaid suit and slicked-back hair, he seemed to embody sleaze.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɪmˈbɒdi/"
  },
  {
    "word": "Eminent",
    "meaning": "High, lofty.",
    "example": "His eminent good sense has been a godsend to this project.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛmɪnənt/"
  },
  {
    "word": "Emissary",
    "meaning": "An agent sent on a mission to represent the interests of someone else.",
    "example": "The term 'emissary' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛmɪˌsɛɹi/"
  },
  {
    "word": "Empathy",
    "meaning": "Identification with or understanding of the thoughts, feelings, or emotional state of another person.",
    "example": "She had a lot of empathy for her neighbor; she knew what it was like to lose a parent too.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛmpəθi/"
  },
  {
    "word": "Empirical",
    "meaning": "Pertaining to or based on experience.",
    "example": "The term 'empirical' was utilized in the scholarly report.",
    "category": "science",
    "difficulty": "advanced",
    "pronunciation": "/ɪmˈpɪɹɪkəl/"
  },
  {
    "word": "Empower",
    "meaning": "To give permission, power, or the legal right to do something.",
    "example": "John found that starting up his own business empowered him greatly in social situations.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/empower/"
  },
  {
    "word": "Emulate",
    "meaning": "To attempt to equal or be the same as.",
    "example": "The term 'emulate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛm.jə.leɪt/"
  },
  {
    "word": "Enervate",
    "meaning": "To reduce strength or energy; debilitate.",
    "example": "After being laid off three times in a row, she felt too enervated to look for another job.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/enervate/"
  },
  {
    "word": "Enfranchise",
    "meaning": "To grant the franchise to an entity, specifically:",
    "example": "The term 'enfranchise' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɛnˈfɹænt͡ʃaɪz/"
  },
  {
    "word": "Engage",
    "meaning": "(heading) To interact socially.",
    "example": "The term 'engage' was utilized in the scholarly report.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/ɛnˈɡeɪdʒ/"
  },
  {
    "word": "Enigmatic",
    "meaning": "Pertaining to an enigma.",
    "example": "The term 'enigmatic' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˌɛnɪɡˈmætɪk/"
  },
  {
    "word": "Ennui",
    "meaning": "A gripping listlessness or melancholia caused by boredom; depression.",
    "example": "The term 'ennui' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɒnˈwiː/"
  },
  {
    "word": "Enshrine",
    "meaning": "To enclose (a sacred relic etc.) in a shrine or chest.",
    "example": "Other measures, such as compensation for victims, will be enshrined in the proposed new law.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɛnˈʃɹʌɪn/"
  },
  {
    "word": "Ensnare",
    "meaning": "To entrap; to catch in a snare or trap.",
    "example": "The term 'ensnare' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɛnˈsnɛə/"
  },
  {
    "word": "Entice",
    "meaning": "To lure; to attract by arousing desire or hope.",
    "example": "I enticed the little bear into the trap with a pot of honey.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/entice/"
  },
  {
    "word": "Entreat",
    "meaning": "An entreaty.",
    "example": "The term 'entreat' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ənˈtɹiːt/"
  },
  {
    "word": "Enumerate",
    "meaning": "To specify each member of a sequence individually in incrementing order.",
    "example": "The term 'enumerate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪˈnjuː.məˌɹeɪt/"
  },
  {
    "word": "Ephemeral",
    "meaning": "Something which lasts for a short period of time.",
    "example": "The term 'ephemeral' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/əˈfɛ.mə.ɹəl/"
  },
  {
    "word": "Epicure",
    "meaning": "A person who takes particular pleasure in fine food and drink.",
    "example": "The term 'epicure' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ˈɛpɪkjʊə/"
  },
  {
    "word": "Epitome",
    "meaning": "The embodiment or encapsulation of a class of items.",
    "example": "The term 'epitome' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/əˈpɪt.ə.mi/"
  },
  {
    "word": "Equitable",
    "meaning": "Marked by or having equity.",
    "example": "The term 'equitable' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈɛk.wɪ.tə.bəl/"
  },
  {
    "word": "Equivocate",
    "meaning": "To use words of equivocal or doubtful signification; to express one's opinions in terms which admit of different senses, with intent to deceive; to use ambiguous expressions with a view to mislead; as, to equivocate is the work of duplicity.",
    "example": "The term 'equivocate' was utilized in the scholarly report.",
    "category": "business",
    "difficulty": "advanced",
    "pronunciation": "/ɪˈkwɪvəˌkeɪt/"
  },
  {
    "word": "Eradicate",
    "meaning": "High-level vocabulary word meaning of eradicate.",
    "example": "We witnessed a clear representation of eradicate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/eradicate/"
  },
  {
    "word": "Erode",
    "meaning": "High-level vocabulary word meaning of erode.",
    "example": "We witnessed a clear representation of erode in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/erode/"
  },
  {
    "word": "Erratic",
    "meaning": "High-level vocabulary word meaning of erratic.",
    "example": "We witnessed a clear representation of erratic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/erratic/"
  },
  {
    "word": "Ersatz",
    "meaning": "High-level vocabulary word meaning of ersatz.",
    "example": "We witnessed a clear representation of ersatz in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ersatz/"
  },
  {
    "word": "Escalate",
    "meaning": "High-level vocabulary word meaning of escalate.",
    "example": "We witnessed a clear representation of escalate in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/escalate/"
  },
  {
    "word": "Esoteric",
    "meaning": "High-level vocabulary word meaning of esoteric.",
    "example": "We witnessed a clear representation of esoteric in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/esoteric/"
  },
  {
    "word": "Espouse",
    "meaning": "High-level vocabulary word meaning of espouse.",
    "example": "We witnessed a clear representation of espouse in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/espouse/"
  },
  {
    "word": "Esteem",
    "meaning": "High-level vocabulary word meaning of esteem.",
    "example": "We witnessed a clear representation of esteem in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/esteem/"
  },
  {
    "word": "Ethereal",
    "meaning": "High-level vocabulary word meaning of ethereal.",
    "example": "We witnessed a clear representation of ethereal in their action.",
    "category": "literary",
    "difficulty": "intermediate",
    "pronunciation": "/ethereal/"
  },
  {
    "word": "Ethical",
    "meaning": "High-level vocabulary word meaning of ethical.",
    "example": "We witnessed a clear representation of ethical in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ethical/"
  },
  {
    "word": "Euphemism",
    "meaning": "High-level vocabulary word meaning of euphemism.",
    "example": "We witnessed a clear representation of euphemism in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/euphemism/"
  },
  {
    "word": "Euphoric",
    "meaning": "High-level vocabulary word meaning of euphoric.",
    "example": "We witnessed a clear representation of euphoric in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/euphoric/"
  },
  {
    "word": "Evanescent",
    "meaning": "High-level vocabulary word meaning of evanescent.",
    "example": "We witnessed a clear representation of evanescent in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/evanescent/"
  },
  {
    "word": "Evasive",
    "meaning": "High-level vocabulary word meaning of evasive.",
    "example": "We witnessed a clear representation of evasive in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/evasive/"
  },
  {
    "word": "Exacerbate",
    "meaning": "High-level vocabulary word meaning of exacerbate.",
    "example": "We witnessed a clear representation of exacerbate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/exacerbate/"
  },
  {
    "word": "Exacting",
    "meaning": "High-level vocabulary word meaning of exacting.",
    "example": "We witnessed a clear representation of exacting in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exacting/"
  },
  {
    "word": "Exalt",
    "meaning": "High-level vocabulary word meaning of exalt.",
    "example": "We witnessed a clear representation of exalt in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exalt/"
  },
  {
    "word": "Exasperate",
    "meaning": "High-level vocabulary word meaning of exasperate.",
    "example": "We witnessed a clear representation of exasperate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/exasperate/"
  },
  {
    "word": "Exceed",
    "meaning": "High-level vocabulary word meaning of exceed.",
    "example": "We witnessed a clear representation of exceed in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exceed/"
  },
  {
    "word": "Excise",
    "meaning": "High-level vocabulary word meaning of excise.",
    "example": "We witnessed a clear representation of excise in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/excise/"
  },
  {
    "word": "Exculpate",
    "meaning": "High-level vocabulary word meaning of exculpate.",
    "example": "We witnessed a clear representation of exculpate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/exculpate/"
  },
  {
    "word": "Exhaustive",
    "meaning": "High-level vocabulary word meaning of exhaustive.",
    "example": "We witnessed a clear representation of exhaustive in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/exhaustive/"
  },
  {
    "word": "Exhort",
    "meaning": "High-level vocabulary word meaning of exhort.",
    "example": "We witnessed a clear representation of exhort in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exhort/"
  },
  {
    "word": "Exigent",
    "meaning": "High-level vocabulary word meaning of exigent.",
    "example": "We witnessed a clear representation of exigent in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exigent/"
  },
  {
    "word": "Exonerate",
    "meaning": "High-level vocabulary word meaning of exonerate.",
    "example": "We witnessed a clear representation of exonerate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/exonerate/"
  },
  {
    "word": "Exotic",
    "meaning": "High-level vocabulary word meaning of exotic.",
    "example": "We witnessed a clear representation of exotic in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exotic/"
  },
  {
    "word": "Expansive",
    "meaning": "High-level vocabulary word meaning of expansive.",
    "example": "We witnessed a clear representation of expansive in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/expansive/"
  },
  {
    "word": "Expedite",
    "meaning": "High-level vocabulary word meaning of expedite.",
    "example": "We witnessed a clear representation of expedite in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/expedite/"
  },
  {
    "word": "Expeditious",
    "meaning": "High-level vocabulary word meaning of expeditious.",
    "example": "We witnessed a clear representation of expeditious in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/expeditious/"
  },
  {
    "word": "Expel",
    "meaning": "High-level vocabulary word meaning of expel.",
    "example": "We witnessed a clear representation of expel in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/expel/"
  },
  {
    "word": "Expendable",
    "meaning": "High-level vocabulary word meaning of expendable.",
    "example": "We witnessed a clear representation of expendable in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/expendable/"
  },
  {
    "word": "Expert",
    "meaning": "High-level vocabulary word meaning of expert.",
    "example": "We witnessed a clear representation of expert in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/expert/"
  },
  {
    "word": "Expletive",
    "meaning": "High-level vocabulary word meaning of expletive.",
    "example": "We witnessed a clear representation of expletive in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/expletive/"
  },
  {
    "word": "Explicate",
    "meaning": "High-level vocabulary word meaning of explicate.",
    "example": "We witnessed a clear representation of explicate in their action.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/explicate/"
  },
  {
    "word": "Explicit",
    "meaning": "High-level vocabulary word meaning of explicit.",
    "example": "We witnessed a clear representation of explicit in their action.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/explicit/"
  },
  {
    "word": "Exploit",
    "meaning": "A heroic or extraordinary deed.",
    "example": "The first trek to the summit of Mount Everest was a stunning exploit.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/exploit/"
  },
  {
    "word": "Exponent",
    "meaning": "One who expounds, represents or advocates.",
    "example": "The term 'exponent' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɛkˈspəʊnənt/"
  },
  {
    "word": "Extemporaneous",
    "meaning": "Without preparation or advanced thought; offhand.",
    "example": "\"The lovely words of a prepared speech however cannot erase extemporaneous words and deeds — thousands of them — that have run contrary to those aspirations.”",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/əksˌtɛmpɚˈeɪni.əs/"
  },
  {
    "word": "Extinguish",
    "meaning": "To put out, as in fire; to end burning; to quench",
    "example": "She extinguished all my hopes.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪkˈstɪŋ.ɡwɪʃ/"
  },
  {
    "word": "Extol",
    "meaning": "To praise; to make high.",
    "example": "The term 'extol' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ɪkˈstəʊl/"
  },
  {
    "word": "Extraneous",
    "meaning": "Not belonging to, or dependent upon, a thing; without or beyond a thing; foreign",
    "example": "Extraneous substances were found on my cup of water.",
    "category": "emotional",
    "difficulty": "advanced",
    "pronunciation": "/ekˈstɹæɪ.ni.əs/"
  },
  {
    "word": "Extraordinary",
    "meaning": "Anything that goes beyond what is ordinary.",
    "example": "an extraordinary poet",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ɪksˈtɹɔː(ɹ)dɪnəɹi/"
  },
  {
    "word": "Extricate",
    "meaning": "To free, disengage, loosen, or untangle.",
    "example": "I finally managed to extricate myself from the tight jacket.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/ˈɛks.tɹɪ.keɪt/"
  },
  {
    "word": "Exuberant",
    "meaning": "(of people) Very high-spirited; extremely energetic and enthusiastic.",
    "example": "exuberant feeling",
    "category": "social",
    "difficulty": "advanced",
    "pronunciation": "/ɪɡˈzuːbəɹənt/"
  },
  {
    "word": "Fabricate",
    "meaning": "To form into a whole by uniting its parts; to construct; to build.",
    "example": "to fabricate a bridge or ship",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/ˈfæb.ɹɪ.keɪt/"
  },
  {
    "word": "Facetious",
    "meaning": "Treating serious issues with (often deliberately) inappropriate humour; flippant.",
    "example": "Robbie's joke about Heather's appearance was just him being facetious.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/fəˈsiːʃəs/"
  },
  {
    "word": "Facilitate",
    "meaning": "To make easy or easier.",
    "example": "The term 'facilitate' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/fəˈsɪləteɪt/"
  },
  {
    "word": "Faction",
    "meaning": "A group of people, especially within a political organization, which expresses a shared belief or opinion different from people who are not part of the group.",
    "example": "The term 'faction' was utilized in the scholarly report.",
    "category": "social",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfæk.ʃn̩/"
  },
  {
    "word": "Fallacious",
    "meaning": "Characterized by fallacy; false or mistaken.",
    "example": "The term 'fallacious' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "advanced",
    "pronunciation": "/fə.ˈleɪ.ʃəs/"
  },
  {
    "word": "Fanatic",
    "meaning": "A person who is zealously enthusiastic for some cause, especially in religion.",
    "example": "The term 'fanatic' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/fəˈnæt.ɪk/"
  },
  {
    "word": "Fastidious",
    "meaning": "Excessively particular, demanding, or fussy about details, especially about tidiness and cleanliness.",
    "example": "The term 'fastidious' was utilized in the scholarly report.",
    "category": "literary",
    "difficulty": "advanced",
    "pronunciation": "/fæˈstɪdi.əs/"
  },
  {
    "word": "Fathom",
    "meaning": "Grasp, envelopment, control.",
    "example": "I can't for the life of me fathom what this means.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfæðəm/"
  },
  {
    "word": "Fatuous",
    "meaning": "Obnoxiously stupid, vacantly silly, content in one's foolishness.",
    "example": "The term 'fatuous' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfæt.ju.əs/"
  },
  {
    "word": "Feasible",
    "meaning": "Able to be done in practice.",
    "example": "His plan to rid Trafalgar Square of pigeons by bringing in peregrine falcons to eat them was dismissed as not feasible.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfiːzəbəl/"
  },
  {
    "word": "Fecund",
    "meaning": "Highly fertile; able to produce offspring.",
    "example": "The term 'fecund' was utilized in the scholarly report.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfɛ.kənd/"
  },
  {
    "word": "Feeble",
    "meaning": "To make feeble; to enfeeble.",
    "example": "Though she appeared old and feeble, she could still throw a ball.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/ˈfiːbəl/"
  },
  {
    "word": "Feign",
    "meaning": "To make a false show or pretence of; to counterfeit or simulate.",
    "example": "The pupil feigned sickness on the day of his exam.",
    "category": "academic",
    "difficulty": "intermediate",
    "pronunciation": "/feɪn/"
  },
  {
    "word": "Felicity",
    "meaning": "Happiness.",
    "example": "The quotation was rendered with felicity.",
    "category": "emotional",
    "difficulty": "intermediate",
    "pronunciation": "/fəˈlɪsɪti/"
  }
];

  // ─── State ───
  let currentIndex = 0;
  let seenIndices = new Set();
  let filteredWords = [...vocabulary];
  let quizQuestions = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let missedWords = [];
  let isMissedOnlyMode = false;

  // ─── DOM Elements ───
  const els = {
    wordCard: document.getElementById('word-card'),
    wordTitle: document.getElementById('word-title'),
    wordTitleBack: document.getElementById('word-title-back'),
    pronunciation: document.getElementById('pronunciation'),
    meaning: document.getElementById('meaning'),
    example: document.getElementById('example'),
    difficultyBadge: document.getElementById('difficulty-badge'),
    difficultyBadgeBack: document.getElementById('difficulty-badge-back'),
    categoryBadge: document.getElementById('category-badge'),
    categoryBadgeBack: document.getElementById('category-badge-back'),
    nextBtn: document.getElementById('next-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    searchInput: document.getElementById('search-input'),
    categoryFilter: document.getElementById('category-filter'),
    learnProgress: document.getElementById('learn-progress'),
    learnProgressText: document.getElementById('learn-progress-text'),
    wordsSeen: document.getElementById('words-seen'),
    wordsTotal: document.getElementById('words-total'),
    categoriesCount: document.getElementById('categories-count'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabPanels: document.querySelectorAll('.tab-panel'),
    quizWord: document.getElementById('quiz-word'),
    quizOptions: document.getElementById('quiz-options'),
    quizFeedback: document.getElementById('quiz-feedback'),
    quizScore: document.getElementById('quiz-score'),
    quizProgressText: document.getElementById('quiz-progress-text'),
    quizNextBtn: document.getElementById('quiz-next-btn'),
    quizRestartBtn: document.getElementById('quiz-restart-btn'),
    retakeMissedBtn: document.getElementById('retake-missed-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),
    noResultsCard: document.getElementById('no-results-card'),
    resetFiltersBtn: document.getElementById('reset-filters-btn')
  };

  // ─── Helpers ───
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getRandomIndex(exclude = -1) {
    let idx;
    do {
      idx = Math.floor(Math.random() * filteredWords.length);
    } while (filteredWords.length > 1 && idx === exclude);
    return idx;
  }

  function getUniqueCategories() {
    return [...new Set(vocabulary.map(w => w.category))];
  }

  // ─── Theme Management ───
  function initTheme() {
    if (!els.themeToggleBtn) return;
    
    // Load persisted theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      if (els.themeIcon) els.themeIcon.textContent = '☀️';
    } else {
      document.body.classList.remove('light-theme');
      if (els.themeIcon) els.themeIcon.textContent = '🌙';
    }

    els.themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      if (els.themeIcon) {
        els.themeIcon.textContent = isLight ? '☀️' : '🌙';
      }
    });
  }

  // ─── Learn Mode ───
  function renderWord(index) {
    const word = filteredWords[index];
    if (!word) return;

    // Ensure the card is reset to front face when changing words
    if (els.wordCard) {
      els.wordCard.classList.remove('flipped');
    }

    // Animate card
    if (els.wordCard) {
      els.wordCard.style.animation = 'none';
      els.wordCard.offsetHeight; // trigger reflow
      els.wordCard.style.animation = 'fadeInUp 0.5s ease-out';
    }

    // Front Content
    if (els.wordTitle) els.wordTitle.textContent = word.word;
    if (els.pronunciation) els.pronunciation.textContent = word.pronunciation;
    
    if (els.difficultyBadge) {
      els.difficultyBadge.textContent = word.difficulty;
      els.difficultyBadge.className = 'difficulty-badge ' + word.difficulty;
    }
    if (els.categoryBadge) {
      els.categoryBadge.textContent = word.category;
    }

    // Back Content
    if (els.wordTitleBack) els.wordTitleBack.textContent = word.word;
    if (els.meaning) els.meaning.textContent = word.meaning;
    if (els.example) els.example.textContent = `"${word.example}"`;
    
    if (els.difficultyBadgeBack) {
      els.difficultyBadgeBack.textContent = word.difficulty;
      els.difficultyBadgeBack.className = 'difficulty-badge ' + word.difficulty;
    }
    if (els.categoryBadgeBack) {
      els.categoryBadgeBack.textContent = word.category;
    }

    updateProgress();
  }

  function toggleCardFlip() {
    if (filteredWords.length === 0 || !els.wordCard) return;

    const isFlipped = els.wordCard.classList.toggle('flipped');

    if (isFlipped) {
      // Active interaction: word is marked seen ONLY when Y-axis flip occurs
      const word = filteredWords[currentIndex];
      if (word) {
        const globalIndex = vocabulary.indexOf(word);
        seenIndices.add(globalIndex);
        updateProgress();
      }
    }
  }

  function updateProgress() {
    const totalInFilter = filteredWords.length;
    const seenInFilter = filteredWords.filter(w => seenIndices.has(vocabulary.indexOf(w))).length;
    const pct = totalInFilter > 0 ? (seenInFilter / totalInFilter) * 100 : 0;
    
    if (els.learnProgress) {
      els.learnProgress.style.width = pct + '%';
    }
    
    const isFiltered = els.categoryFilter.value !== 'all' || els.searchInput.value.trim() !== '';
    if (els.learnProgressText) {
      if (isFiltered) {
        els.learnProgressText.textContent = `${seenInFilter} / ${totalInFilter} words viewed in filter`;
      } else {
        els.learnProgressText.textContent = `${seenInFilter} / ${totalInFilter} words viewed`;
      }
    }

    if (els.wordsSeen) els.wordsSeen.textContent = seenIndices.size;
    if (els.wordsTotal) els.wordsTotal.textContent = vocabulary.length;
  }

  function applyFilters() {
    const search = els.searchInput.value.toLowerCase().trim();
    const category = els.categoryFilter.value;

    filteredWords = vocabulary.filter(w => {
      const matchesSearch = !search ||
        w.word.toLowerCase().includes(search) ||
        w.meaning.toLowerCase().includes(search);
      const matchesCategory = category === 'all' || w.category === category;
      return matchesSearch && matchesCategory;
    });

    currentIndex = 0;
    
    if (filteredWords.length > 0) {
      if (els.noResultsCard) els.noResultsCard.style.display = 'none';
      if (els.wordCard) els.wordCard.style.display = 'block';
      const cardActions = document.getElementById('card-actions');
      if (cardActions) cardActions.style.display = 'flex';
      
      if (els.nextBtn) els.nextBtn.disabled = false;
      if (els.shuffleBtn) els.shuffleBtn.disabled = false;
      
      renderWord(0);
    } else {
      if (els.noResultsCard) els.noResultsCard.style.display = 'flex';
      if (els.wordCard) els.wordCard.style.display = 'none';
      const cardActions = document.getElementById('card-actions');
      if (cardActions) cardActions.style.display = 'none';
      
      if (els.nextBtn) els.nextBtn.disabled = true;
      if (els.shuffleBtn) els.shuffleBtn.disabled = true;
      
      updateProgress();
    }
  }

  function nextWord() {
    if (filteredWords.length === 0) return;
    currentIndex = (currentIndex + 1) % filteredWords.length;
    renderWord(currentIndex);
  }

  function shuffleWord() {
    if (filteredWords.length === 0) return;
    currentIndex = getRandomIndex(currentIndex);
    renderWord(currentIndex);
  }

  // ─── Touch Swipes for Card Navigation ───
  let touchStartX = 0;
  let touchStartY = 0;

  function initTouchGestures() {
    if (!els.wordCard) return;

    els.wordCard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    els.wordCard.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Ensure horizontal swipe is dominant and exceeds minimum threshold of 50px
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          // Swipe Left: Next Word
          nextWord();
        } else {
          // Swipe Right: Shuffle/Random Word
          shuffleWord();
        }
      }
    }, { passive: true });
  }

  // ─── Quiz Mode ───
  function generateQuizQuestions(wordList = vocabulary) {
    const shuffled = shuffleArray(wordList);
    // Limit to 10 questions unless in missed-only practice mode
    const targetWords = isMissedOnlyMode ? shuffled : shuffled.slice(0, 10);

    return targetWords.map(word => {
      const wrongAnswers = vocabulary
        .filter(w => w.word !== word.word)
        .map(w => w.meaning);
      const distractors = shuffleArray(wrongAnswers).slice(0, 3);
      const options = shuffleArray([word.meaning, ...distractors]);
      return {
        word: word.word,
        correct: word.meaning,
        options: options,
        pronunciation: word.pronunciation
      };
    });
  }

  function renderQuizQuestion() {
    const q = quizQuestions[quizIndex];
    if (!q) return;

    quizAnswered = false;
    if (els.quizWord) els.quizWord.textContent = q.word;
    if (els.quizOptions) els.quizOptions.innerHTML = '';
    if (els.quizFeedback) {
      els.quizFeedback.innerHTML = '';
      els.quizFeedback.className = 'quiz-feedback';
    }
    if (els.quizNextBtn) {
      els.quizNextBtn.disabled = true;
      els.quizNextBtn.textContent = (quizIndex >= quizQuestions.length - 1) ? 'View Results 📊' : 'Next Question →';
    }
    if (els.quizProgressText) {
      els.quizProgressText.textContent = `Question ${quizIndex + 1} / ${quizQuestions.length}`;
    }

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.dataset.option = opt;
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
      btn.addEventListener('click', () => handleQuizAnswer(opt, q.correct, btn));
      if (els.quizOptions) els.quizOptions.appendChild(btn);
    });

    // Animate active card
    const card = document.getElementById('quiz-card');
    if (card) {
      card.style.animation = 'none';
      card.offsetHeight; // trigger reflow
      card.style.animation = 'fadeInUp 0.5s ease-out';
    }
  }

  function handleQuizAnswer(selected, correct, btnEl) {
    if (quizAnswered) return;
    quizAnswered = true;

    const isCorrect = selected === correct;
    const allOptions = els.quizOptions.querySelectorAll('.quiz-option');

    allOptions.forEach(btn => {
      btn.classList.add('revealed');
      if (btn.dataset.option === correct) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      quizScore++;
      if (els.quizScore) els.quizScore.textContent = quizScore;
      btnEl.classList.remove('revealed');
      btnEl.classList.add('correct');
      if (els.quizFeedback) {
        els.quizFeedback.textContent = '✅ Correct! Well done!';
        els.quizFeedback.className = 'quiz-feedback correct';
      }
    } else {
      btnEl.classList.remove('revealed');
      btnEl.classList.add('incorrect');
      if (els.quizFeedback) {
        els.quizFeedback.innerHTML = `❌ Not quite. The correct meaning is:<br><strong>${correct}</strong>`;
        els.quizFeedback.className = 'quiz-feedback incorrect';
      }
      
      // Track missed word for later practice
      const currentWordObj = vocabulary.find(w => w.word === quizQuestions[quizIndex].word);
      if (currentWordObj && !missedWords.some(w => w.word === currentWordObj.word)) {
        missedWords.push(currentWordObj);
      }

      // Shake animation
      const card = document.getElementById('quiz-card');
      if (card) {
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 400);
      }
    }

    if (els.quizNextBtn) {
      els.quizNextBtn.disabled = false;
    }
  }

  function nextQuizQuestion() {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  }

  function showQuizResults() {
    const activeView = document.getElementById('quiz-active-view');
    const completeView = document.getElementById('quiz-complete-view');
    
    if (activeView) activeView.style.display = 'none';
    if (completeView) completeView.style.display = 'block';
    
    const pct = quizQuestions.length > 0 ? Math.round((quizScore / quizQuestions.length) * 100) : 0;
    
    const scorePctEl = document.getElementById('complete-score-pct');
    const scoreFractionEl = document.getElementById('complete-score-fraction');
    const feedbackMsgEl = document.getElementById('quiz-feedback-msg');
    
    if (scorePctEl) scorePctEl.textContent = pct + '%';
    if (scoreFractionEl) scoreFractionEl.textContent = `${quizScore} / ${quizQuestions.length} correct`;
    
    if (feedbackMsgEl) {
      if (pct === 100) {
        feedbackMsgEl.textContent = '🏆 Perfect score! Outstanding job! You have excellent recall.';
      } else if (pct >= 80) {
        feedbackMsgEl.textContent = '🌟 Great job! You have a very strong vocabulary.';
      } else if (pct >= 50) {
        feedbackMsgEl.textContent = '👍 Good effort! Keep practicing to master these words.';
      } else {
        feedbackMsgEl.textContent = '📚 Don\'t worry, learning takes time. Review the missed words below and try again!';
      }
    }
    
    const missedSection = document.getElementById('missed-questions-section');
    const missedListEl = document.getElementById('missed-words-list');
    
    if (missedWords.length > 0) {
      if (missedSection) missedSection.style.display = 'block';
      if (els.retakeMissedBtn) els.retakeMissedBtn.style.display = 'inline-flex';
      
      if (missedListEl) {
        missedListEl.innerHTML = '';
        missedWords.forEach(word => {
          const item = document.createElement('div');
          item.className = 'missed-word-item';
          item.innerHTML = `
            <span class="missed-word-title">${word.word}</span>
            <span class="missed-word-meaning">${word.meaning}</span>
          `;
          missedListEl.appendChild(item);
        });
      }
    } else {
      if (missedSection) missedSection.style.display = 'none';
      if (els.retakeMissedBtn) els.retakeMissedBtn.style.display = 'none';
    }
  }

  function retakeMissed() {
    if (missedWords.length === 0) return;
    
    isMissedOnlyMode = true;
    const targetList = [...missedWords];
    missedWords = []; // reset for the new practice run
    
    quizQuestions = generateQuizQuestions(targetList);
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    if (els.quizScore) els.quizScore.textContent = 0;
    if (els.quizNextBtn) {
      els.quizNextBtn.textContent = 'Next Question →';
      els.quizNextBtn.disabled = true;
    }
    
    const activeView = document.getElementById('quiz-active-view');
    const completeView = document.getElementById('quiz-complete-view');
    if (activeView) activeView.style.display = 'block';
    if (completeView) completeView.style.display = 'none';
    
    renderQuizQuestion();
  }

  function restartQuiz() {
    isMissedOnlyMode = false;
    missedWords = [];
    quizQuestions = generateQuizQuestions();
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    if (els.quizScore) els.quizScore.textContent = 0;
    if (els.quizNextBtn) {
      els.quizNextBtn.textContent = 'Next Question →';
      els.quizNextBtn.disabled = true;
    }
    
    const activeView = document.getElementById('quiz-active-view');
    const completeView = document.getElementById('quiz-complete-view');
    if (activeView) activeView.style.display = 'block';
    if (completeView) completeView.style.display = 'none';
    
    renderQuizQuestion();
  }

  function startQuiz() {
    isMissedOnlyMode = false;
    missedWords = [];
    quizQuestions = generateQuizQuestions();
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    if (els.quizScore) els.quizScore.textContent = 0;
    if (els.quizNextBtn) {
      els.quizNextBtn.textContent = 'Next Question →';
      els.quizNextBtn.disabled = true;
    }
    
    const activeView = document.getElementById('quiz-active-view');
    const completeView = document.getElementById('quiz-complete-view');
    if (activeView) activeView.style.display = 'block';
    if (completeView) completeView.style.display = 'none';
    
    renderQuizQuestion();
  }

  // ─── Tab Switching ───
  function switchTab(tabName) {
    els.tabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    els.tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === tabName + '-panel');
    });

    if (tabName === 'quiz') {
      startQuiz();
    }
  }

  // ─── Event Listeners ───
  if (els.nextBtn) els.nextBtn.addEventListener('click', nextWord);
  if (els.shuffleBtn) els.shuffleBtn.addEventListener('click', shuffleWord);
  if (els.searchInput) els.searchInput.addEventListener('input', applyFilters);
  if (els.categoryFilter) els.categoryFilter.addEventListener('change', applyFilters);
  if (els.quizNextBtn) els.quizNextBtn.addEventListener('click', nextQuizQuestion);
  if (els.quizRestartBtn) els.quizRestartBtn.addEventListener('click', restartQuiz);
  if (els.retakeMissedBtn) els.retakeMissedBtn.addEventListener('click', retakeMissed);
  if (els.wordCard) els.wordCard.addEventListener('click', toggleCardFlip);

  if (els.resetFiltersBtn) {
    els.resetFiltersBtn.addEventListener('click', () => {
      if (els.searchInput) els.searchInput.value = '';
      if (els.categoryFilter) els.categoryFilter.value = 'all';
      applyFilters();
    });
  }

  els.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // ─── Keyboard Navigation ───
  document.addEventListener('keydown', (e) => {
    // Safety check: ignore navigation shortcuts when typing in search query input
    if (document.activeElement === els.searchInput) {
      return;
    }

    // Learn Tab Shortcuts
    const learnPanel = document.getElementById('learn-panel');
    if (learnPanel && learnPanel.classList.contains('active')) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextWord();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        shuffleWord();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleCardFlip();
      }
    }

    // Quiz Tab Shortcuts
    const quizPanel = document.getElementById('quiz-panel');
    if (quizPanel && quizPanel.classList.contains('active')) {
      if (!quizAnswered) {
        const key = e.key.toLowerCase();
        const options = els.quizOptions ? els.quizOptions.querySelectorAll('.quiz-option') : [];
        const map = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        if (map.hasOwnProperty(key) && options[map[key]]) {
          e.preventDefault();
          options[map[key]].click();
        }
      }
      
      // Enter advances to next question or displays dashboard when disabled is false
      if (e.key === 'Enter' && els.quizNextBtn && !els.quizNextBtn.disabled && els.quizNextBtn.style.display !== 'none') {
        e.preventDefault();
        nextQuizQuestion();
      }
    }
  });

  // ─── Init ───
  function init() {
    initTheme();
    initTouchGestures();
    if (els.categoriesCount) els.categoriesCount.textContent = getUniqueCategories().length;
    updateProgress();
    renderWord(0);
  }

  // ─── Test & Automation API Hook ───
  const testAPI = {
    getVocabulary: () => vocabulary,
    getState: () => ({
      currentIndex,
      seenIndices,
      filteredWords,
      quizQuestions,
      quizIndex,
      quizScore,
      quizAnswered,
      missedWords,
      isMissedOnlyMode
    }),
    setState: (updates) => {
      if (updates.hasOwnProperty('currentIndex')) currentIndex = updates.currentIndex;
      if (updates.hasOwnProperty('seenIndices')) seenIndices = updates.seenIndices;
      if (updates.hasOwnProperty('filteredWords')) filteredWords = updates.filteredWords;
      if (updates.hasOwnProperty('quizQuestions')) quizQuestions = updates.quizQuestions;
      if (updates.hasOwnProperty('quizIndex')) quizIndex = updates.quizIndex;
      if (updates.hasOwnProperty('quizScore')) quizScore = updates.quizScore;
      if (updates.hasOwnProperty('quizAnswered')) quizAnswered = updates.quizAnswered;
      if (updates.hasOwnProperty('missedWords')) missedWords = updates.missedWords;
      if (updates.hasOwnProperty('isMissedOnlyMode')) isMissedOnlyMode = updates.isMissedOnlyMode;
    },
    els,
    applyFilters,
    generateQuizQuestions,
    renderWord,
    toggleCardFlip,
    updateProgress,
    nextWord,
    shuffleWord,
    renderQuizQuestion,
    handleQuizAnswer,
    nextQuizQuestion,
    showQuizResults,
    retakeMissed,
    restartQuiz,
    startQuiz,
    switchTab
  };

  if (typeof window !== 'undefined') {
    window.__LexiconTestAPI__ = testAPI;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = testAPI;
  }

  init();
})();

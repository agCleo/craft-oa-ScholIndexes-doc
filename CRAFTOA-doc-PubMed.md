# PubMed

*Last version: 2024-08-13*

PubMed is a free resource supporting the search and retrieval of biomedical and life sciences literature with the aim of improving health–both globally and personally. The PubMed database contains more than 37 million citations and abstracts of biomedical literature. It does not include full text journal articles; however, links to the full text are often present when available from other sources, such as the publisher's website or PubMed Central (PMC).

## General Information

| Name | PubMed |
| :---- | :---- |
| **Website** | [https://pubmed.ncbi.nlm.nih.gov/](https://pubmed.ncbi.nlm.nih.gov/) |
| **Owner** | US National library of Medecine (NLM) |
| **Owner type** | Public research organization |
| **Owner country** | USA |
| **Launch year** | 1996 |
| **Scope** | Biomedecine and health, life sciences, behavioral sciences, chemical sciences and bioengineering |
| **Number of items** | More than 37 million citations and abstracts  |
| **Access for index users** | Free |
| **Access for index data providers** | Free |
| **Documentation** | [https://www.nlm.nih.gov/medline/medline\_how\_to\_include.html](https://www.nlm.nih.gov/medline/medline\_how\_to\_include.html)  |
| **Application form for providers** | [https://www.ncbi.nlm.nih.gov/medline/publisherportal/](https://www.ncbi.nlm.nih.gov/medline/publisherportal/) |

## Content and Service

| Content type | Articles |
| :---- | :---- |
| **Content language** | Any |
| **Content geographical provenance** | Any |
| **Indexing level for publications** | Journals, articles |
| **Full text** | Link to the full text when available |
| **Index sources** | Journals |
| **Supported standards** | Dublin Core <br/>PMC (PubMedCentral) |
| **Bibliodiversity support** | Website available only in English. English mandatory for abstracts and titles. Content from all countries and languages (mainly in English) in open and restricted access. |

**Additional services:**  
NLM Gateway (Web-based metasearch engine for many resources of the National Library of Medicine (NLM)):   
[https://www.nlm.nih.gov/](https://www.nlm.nih.gov/) 

Bookshelf Free online access to books and documents in life science and healthcare):  
[https://www.ncbi.nlm.nih.gov/books/](https://www.ncbi.nlm.nih.gov/books/)

PubMed Central (free full-text archive of biomedical and life sciences journal literature):  
[https://www.ncbi.nlm.nih.gov/pmc/?db=PMC](https://www.ncbi.nlm.nih.gov/pmc/?db=PMC) 

PubChem (Collection of freely accessible chemical information: chemical and physical properties, biological activities, citations and more):  
[https://pubchem.ncbi.nlm.nih.gov/](https://pubchem.ncbi.nlm.nih.gov/) 

## Requirements for Academic Publications

### Joining Process

Completion of an application form for journal suggestion after registration on the platform. ([https://www.ncbi.nlm.nih.gov/medline/publisherportal/](https://www.ncbi.nlm.nih.gov/medline/publisherportal/))   
Journals must successfully pass both a Scientific Quality Review and a Technical and Indexing Requirements Check to be indexed (more informations in the criteria documentation:  [https://www.nlm.nih.gov/medline/medline\_how\_to\_include.html\#scientificquality](https://www.nlm.nih.gov/medline/medline\_how\_to\_include.html\#scientificquality) .) 

**Data Collection process**

Journals and articles metadata are collected upon submission. Publishers of journals in PubMed must submit citations and abstract data electronically. PubMed only accepts citation and abstract data uploaded by Secure File Transfer Protocol (SFTP) in the PubMed XML tagged format described here: [https://www.ncbi.nlm.nih.gov/books/NBK3828/\#publisherhelp.PubMed\_XML\_Tagged\_Format](https://www.ncbi.nlm.nih.gov/books/NBK3828/\#publisherhelp.PubMed\_XML\_Tagged\_Format) 

### Minimum Requirements

**Editorial Minimum Requirements**

*Journal and Publishing History*

* The journal must have been published for at least 12 month in the format that will be used for the review  
* The journal must have published a minimum of 40 peer-reviewed articles (original research or review articles, clinical case reports) in final form

*Publishing Policy*

The journal must publish abstracts for all peer-reviewed content (minimum all peer-reviewed content in the past 12 months must contain abstracts.)
The journal must meet MEDLINE's language guidelines.

**Technical Minimum Requirements**

*Data File Format* 

HTML (no PDF)

*Metadata File Format* 

* XML  
* SGML  
* TXT  
* ZIP  
* TAR

*Metadata Mandatory Fields*

* Journal Title  
* Publisher Name  
* ISSN  
* Volume  
* Issue  
* Pagination  
* Publication Date  
* Author List  
* Author Affiliation  
* Author Identifiers  
* Investigators/Collaborators  
* Publication Type  
* DOI/PII  
* Abstract  
* Conflict of Interest Statement  
* ClinicalTrials.gov and other databank identifiers  
* Grants/Funding information  
* PMID/DOI/PII for related articles, e.g., errata, retractions, comments

### Additional Criteria

**Technical Additional Specifications**

*Metadata Recommended Fields*

<Abstract> <AbstractText> found in <Abstract>; uses Label and NlmCategory attributes <AccessionNumber> found in <DatabankList> <AccessionNumberList> found in <DatabankList> <Acronym> found in <GrantList> <Affiliation> found in <AuthorList> and <InvestigatorList> <AffiliationInfo> found in <AuthorList> and <InvestigatorList>; includes <Affiliation> and <Identifier> <Agency> found in <GrantList> <Article> uses PubModel attribute <ArticleDate> uses DateType attribute <ArticleId> found in <ArticleIdList> <ArticleTitle> <Author> found in <AuthorList> <AuthorList> uses CompleteYN attribute <Chemical> found in <ChemicalList> <ChemicalList> <CitationSubset> CitedMedium attribute for <JournalIssue> <CollectiveName> found in <Authorlist> <CoiStatement> <CommentsCorrections> CompleteYN attribute for <AuthorList>, <DataBankList> and <GrantList> <CopyrightInformation> found in <Abstract>, <OtherAbstract> <Country> <DataBank> found in <DataBankList> <DataBankList> uses CompleteYN attribute <DataBankName> found in <DataBankList> <DateCompleted> <DateCreated> <DateRevised> DateType attribute for <ArticleDate> <Day> found in <ArticleDate>, <DateCompleted>, <DateCreated>, <DateRevised>,<PubDate> <DeleteCitation> <DescriptorName> found in <MeshHeadingList>; uses MajorTopicYN, Type and UI attributes <ELocationID> <ForeName> found in <AuthorList>, <InvestigatorList>, <PersonalNameSubjectList> <GeneralNote> uses Owner attribute <GeneSymbol> found in <GeneSymbolList> <GeneSymbolList> <Grant> found in <GrantList> <GrantID> found in <GrantList> <GrantList> uses CompleteYN attribute <History> <Identifier> found in <AuthorList> and <InvestigatorList> <Initials> found in <AuthorList>, <InvestigatorList>, <PersonalNameSubjectList> <Investigator> found in <InvestigatorList> <InvestigatorList> <ISOAbbreviation> <ISSN> uses ISSNType attribute <ISSNLinking> ISSNType attribute for <ISSN> <Issue> <Journal> <JournalIssue> uses CitedMedium attribute <Keyword> found in <KeywordList>; uses MajorTopicYN attribute <KeywordList> uses Owner attribute Label attribute for <AbstractText> <Language> <LastName> found in <AuthorList>, <InvestigatorList>, <PersonalNameSubjectList> MajorTopicYN attribute for <DescriptorName> and <QualiferName> <MedlineCitation> uses Owner, Status, VersionID, and VersionDate attributes <MedlineDate> found in <PubDate> <MedlinePgn> found in <Pagination> <MedlineTA> <MeshHeading> found in <MeshHeadingList> <MeshHeadingList> <Month> found in <ArticleDate>, <DateCompleted>, <DateCreated>, <DateRevised>, <PubDate> <NameOfSubstance> found in <ChemicalList>; uses UI attribute NlmCategory attribute for <AbstractText> <NlmUniqueID> <Note> found in <CommentsCorrections> <NumberOfReferences> <OtherAbstract> uses Type and Language attributes <OtherID> uses Source attribute Owner attribute for <GeneralNote>, <KeywordList> and <MedlineCitation> <Pagination> <PersonalNameSubject> found in <PersonalNameSubjectList> <PersonalNameSubjectList> <PMID> also found in <CommentsCorrections>; uses Version attribute PrintYN attribute for <JournalIssue> <PubDate> <PublicationStatus> <PublicationType> found in <PublicationTypeList>; uses UI attribute <PublicationTypeList> <PubmedArticle> <PubmedData> <PubmedPubDate> PubModel attribute for <Article> <QualifierName> found in <MeshHeadingList>; uses MajorTopicYN and UI attributes <RefSource> found in <CommentsCorrections> <RefType> attribute for <CommentsCorrections> <RegistryNumber> found in <ChemicalList> <SpaceFlightMission> Source attribute for <OtherID> Status attribute for <MedineCitation> <Suffix> found in <AuthorList>, <InvestigatorList>, <PersonalNameSubjectList> <SupplMeshList> <SupplMeshName> found in <SupplMeshList>; uses Type and UI attributes <Title> Type attribute for <Descriptor Name>, <OtherAbstract>, and <SupplMeshName> <VernacularTitle> VersionDate attribute for <MedlineCitation> VersionID attribute for <MedlineCitation> <Volume> <Year> found in <ArticleDate>, <DateCompleted>, <DateCreated>, <DateRevised>,<PubDate>

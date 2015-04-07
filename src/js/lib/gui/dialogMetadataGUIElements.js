[
	[
		["Text", CBI18n.gettext("Title"), "metadata-text"], ["Input", "title","metadata-box"],
        ["Text", CBI18n.gettext("Subject"), "metadata-text"], ["Input", "subject","metadata-box"], ["Text", CBI18n.gettext("Description"), "metadata-text"], ["Input", "description","metadata-box"],
        ["Text", CBI18n.gettext("Type"), "metadata-text"], ["Input", "type","metadata-box"],["Text", CBI18n.gettext("Source"), "metadata-text"], ["Input", "source","metadata-box"],
        ["Text", CBI18n.gettext("Relation"), "metadata-text"], ["Input", "relation","metadata-box"],["Text", CBI18n.gettext("Coverage"), "metadata-text"], ["Input", "coverage","metadata-box"]
    ],
	[
		["Text", CBI18n.gettext("Creator"), "metadata-text"], ["Input", "creator","metadata-box"],["Text", CBI18n.gettext("Publisher"), "metadata-text"], ["Input", "publisher","metadata-box"],
		["Text", CBI18n.gettext("Contributor"), "metadata-text"], ["Input", "contributor","metadata-box"],["Text", CBI18n.gettext("Rights"), "metadata-text"], ["Input", "rights","metadata-box"]
    ],
    [
    	["Text", CBI18n.gettext("Date"), "metadata-text"], ["Date", "date","metadata-box"],
      	["Text", CBI18n.gettext("Format"), "metadata-text"], ["Input", "formatData","metadata-box"],["Text", CBI18n.gettext("Identifier"), "metadata-text"], ["Input", "identifier","metadata-box"],
      	["Text", CBI18n.gettext("Language"), "metadata-text"], ["SelectLanguage", "language","metadata-box"]
    ],
    [
    	["Span", CBI18n.gettext("Catalog"), "spanCatalog_1", "metadata-text"],["Input", "catalog_1","metadata-box-half"], ["Span", CBI18n.gettext("Entry"), "spanEntry_1", "metadata-text-right"],
        ["Input", "entry_1","metadata-box-half"], ["AddButton", "addCatalog_1", "ui-icon-locked", "cat_1"],["DeleteButton", "deleteCatalog_1", "ui-icon-locked", "cat_1"]
    ],
    [
    	["Input", "title_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "titleLang_1","metadata-box-half"],
    	["AddButton", "addtitle_1", "ui-icon-locked", "tit_1"],["DeleteButton", "deletetitle_1", "ui-icon-locked", "tit_1"]
    ],
    [
    	["SelectLanguage", "mainLang_1","metadata-box-long"],["AddButton", "addLanguage_1", "ui-icon-locked", "idiom_1"], ["DeleteButton", "deleteLanguage_1", "ui-icon-locked", "idiom_1"]
    ],
    [
    	["Input", "Description_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "descGeneralLang_1","metadata-box-half"],
    	 ["AddButton", "addGeneralDesc_1", "ui-icon-locked", "descGeneral_1"], ["DeleteButton", "deleteGeneralDesc_1", "ui-icon-locked", "descGeneral_1"]
    ],
    [
    	["Input", "keywordGeneral1_1","metadata-box-half-plus"],
        ["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "keywordGeneralLang_1","metadata-box-half"], ["AddButton", "addKeywordGeneral_1", "ui-icon-locked", "keywordGeneral_1"],
        ["DeleteButton", "deleteKeywordGeneral_1", "ui-icon-locked", "keywordGeneral_1"]
    ],
    [
    	["Input", "coverage1_1","metadata-box-half-plus"],
        ["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "coverageLang_1","metadata-box-half"], ["AddButton", "addCoverage_1", "ui-icon-locked", "coverage_1"],
        ["DeleteButton", "deleteCoverage_1", "ui-icon-locked", "coverage_1"]
    ],
    [
    	["Select", "structuresGeneral_1","Structures", "metadata-box-all"]
    ],
    [
    	["Select", "aggregationLevels_1","Agregations", "metadata-box-all"]
    ],
    [
    	["Input", "versionlifecycle1_1", "metadata-box-half-plus"],
        ["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"], ["SelectLanguage", "lifeCycleLang_1","metadata-box-half"],
        ["AddButton", "addLifeCycleVersion_1", "ui-icon-locked", "versionlifecycle_1"], ["DeleteButton", "deleteLifeCycleVersion_1", "ui-icon-locked", "versionlifecycle_1"]
    ],
    [
    	["Select", "statusLifeCycle_1_1","Status", "metadata-box-all"]
   	],
   	[
   		["Span", CBI18n.gettext("Role"), "spanRole_1", "metadata-text"],["Select", "rolesLifeCycle_1", "Roles", "metadata-box"],
        ["AddButton", "addContribLifeCycle_1", "ui-icon-locked", "contrLyfeCycle_1"], ["DeleteButton", "deleteContribLifeCycle_1", "ui-icon-locked", "contrLyfeCycle_1"],
        ["Span", CBI18n.gettext("Name"), "spanName_1", "metadata-text"],["Input", "nameContribLifeCycle_1", "metadata-box"],["Span", CBI18n.gettext("Organization"), "spanOrgan_1", "metadata-text"],
        ["Input", "organContribLifeCycle_1", "metadata-box"],["Span", CBI18n.gettext("Email"), "spanemail_1", "metadata-text"],["Input", "emailContribLifeCycle_1", "metadata-box"],
        ["Span", CBI18n.gettext("Date"), "spanDate_1", "metadata-text"],["Date", "dateContribLifeCycle_1", "metadata-box"],["Div", "DIVdescContribLifeCycle_1_1", [
        	["Span", CBI18n.gettext("Description"), "spanDescription_1_1", "metadata-text"],["Input", "DescriptionContribLifeCycle_1_1", "metadata-box-half"], 
        	["Span", CBI18n.gettext("Language"), "spanLanguage_1_1", "metadata-text-right"],["SelectLanguage", "ContribLifeCycleLang_1_1","metadata-box-half"], 
        	["AddButtonDiv", "addContribLifeCycle_1_1", "ui-icon-locked", "DIVdescContribLifeCycle_1_1"],["DeleteButtonDiv", "deleteContribLifeCycle_1_1", "ui-icon-locked", "DIVdescContribLifeCycle_1_1"]]
       	]
    ],
    [
    	["Span", CBI18n.gettext("Catalog"), "spanCatalog_1", "metadata-text"],
        ["Input", "metametadataCatalog_1","metadata-box-half"], ["Span", CBI18n.gettext("Entry"), "spanEntry_1", "metadata-text-right"],
        ["Input", "metametadataEntry_1","metadata-box-half"], ["AddButton", "addMetametadataCatalog_1", "ui-icon-locked", "catMetadata_1"],
        ["DeleteButton", "deleteMetametadataCatalog_1", "ui-icon-locked", "catMetadata_1"]
    ],
    [
    	["Input", "schemaMetametadataValue_1","metadata-box-all"]
    ],
    [
    	["SelectLanguage", "langMetametadataValue_1","metadata-box-all"]
    ],
    [
    	["Span", CBI18n.gettext("Role"), "spanRole_1", "metadata-text"],["Select", "rolesMetametadata_1", "RolesMetadata", "metadata-box"],
        ["AddButton", "addContribMetametadata_1", "ui-icon-locked", "contrMetametadata_1"], ["DeleteButton", "deleteContribMetametadata_1", "ui-icon-locked", "contrMetametadata_1"],
        ["Span", CBI18n.gettext("Name"), "spanName_1", "metadata-text"],["Input", "nameContribMetametadata_1", "metadata-box"],["Span", CBI18n.gettext("Organization"), "spanOrgan_1", "metadata-text"],
        ["Input", "organContribMetametadata_1", "metadata-box"],["Span", CBI18n.gettext("Email"), "spanemail_1", "metadata-text"],["Input", "emailContribMetametadata_1", "metadata-box"],
        ["Span", CBI18n.gettext("Date"), "spanDate_1", "metadata-text"],["Date", "dateContribMetametadata_1", "metadata-box"],["Div", "DIVdescContribMetametadata_1_1", [
        	["Span", CBI18n.gettext("Description"), "spanDescription_1_1", "metadata-text"],["Input", "DescriptionContribMetametadata_1_1", "metadata-box-half"], 
        	["Span", CBI18n.gettext("Language"), "spanLanguage_1_1", "metadata-text-right"],["SelectLanguage", "ContribMetametadataLang_1_1","metadata-box-half"], 
        	["AddButtonDiv", "addContribMetametadata_1_1", "ui-icon-locked", "DIVdescContribMetametadata_1_1"],
        	["DeleteButtonDiv", "deleteContribMetametadata_1_1", "ui-icon-locked", "DIVdescContribMetametadata_1_1"]]
        ]
    ],
    [
    	["Input", "formatTechnicalValue_1","metadata-box-long"],["AddButton", "addFormatTechnical_1", "ui-icon-locked", "formatTechnical_1"], 
    	["DeleteButton", "deleteFormatTechnical_1", "ui-icon-locked", "formatTechnical_1"]
    ],
    [
    	["Input", "sizeTechnicalValue_1","metadata-box-all"]
    ],
    [
    	["Input", "locationTechnicalValue_1","metadata-box-long"],["AddButton", "addTechnicalLoc_1", "ui-icon-locked", "locationTechnical_1"],
    	["DeleteButton", "deleteTechnicalLoc_1", "ui-icon-locked", "locationTechnical_1"]
    ],
    [
    	["Span", CBI18n.gettext("Type"), "spanType_1", "metadata-text"],["SelectWithDependency", "typeTechnicalReq_1", "TechnicalType", "metadata-box-half", "changeNames(this)"],
        ["AddButton", "addReqTechnical_1", "ui-icon-locked", "requirementsTechnical_1"], ["DeleteButton", "deleteReqTechnical_1", "ui-icon-locked", "requirementsTechnical_1"],
        ["Span", CBI18n.gettext("Name"), "spanName_1", "metadata-text-right"],["Select", "nameTechnicalReq_1","NamesOS", "metadata-box-half"],["Span", CBI18n.gettext("Min. Version"), "spanVersMin_1", "metadata-text"],
        ["InputWithBr", "minVerTechnicalReq_1", "metadata-box"],["Span", CBI18n.gettext("Max Version"), "spanVersMax_1", "metadata-text"],["Input", "versmaxTechnicalReq_1", "metadata-box"]
    ],
    [
    	["Input", "installRemTechValue_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],
    	["SelectLanguage", "LangRemTech_1","metadata-box-half"],["AddButton", "addRemTech_1", "ui-icon-locked", "installRemTech_1"],
    	["DeleteButton", "deleteRemTech_1", "ui-icon-locked", "installRemTech_1"]
    ],
    [
    	["Input", "requirementsRemTechValue_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"]
        ,["SelectLanguage", "LangOtherTech_1","metadata-box-half"],["AddButton", "addOtherTech_1", "ui-icon-locked", "requirementsRemTech_1"]
        ,["DeleteButton", "deleteOtherTech_1", "ui-icon-locked", "requirementsRemTech_1"]
    ],
    [
    	["Span", CBI18n.gettext("Years"), "spanYears_1", "metadata-text"],["Input", "durationYearsDurTech_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Months"), "spanMonths_1", "metadata-text-right"],["InputWithBr", "durationMonthsDurTech_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Days"), "spanDays_1", "metadata-text"],["Input", "durationDaysDurTech_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Hours"), "spanHours_1", "metadata-text-right"],["InputWithBr", "durationHoursDurTech_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Minutes"), "spanMinutes_1", "metadata-text"],["Input", "durationminutesDurTech_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Seconds"), "spanSeconds_1", "metadata-text-right"],["InputWithBr", "durationsecondsDurTech_1", "metadata-box-half"],
        ["Div", "descdurationDurTech_1", [
        	["Span", CBI18n.gettext("Description"), "spanDescription_1", "metadata-text"],["Input", "DescriptionDurTech_1", "metadata-box-half"],
        	["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "languageDescDurTech_1","metadata-box-half"], 
        	["AddButton", "addDescDurTech_1", "ui-icon-locked", "descdurationDurTech_1"],["DeleteButtonDiv", "deleteDescDurTech_1", "ui-icon-locked", "descdurationDurTech_1"]]
        ]
    ],
    [
    	["Select", "intTypeEducationalValue_1", "InterType","metadata-box-all"]
    ],
    [
    	["Select", "resourceTypeEducationalValue_1","ResourceType" ,"metadata-box-long"],["AddButton", "addresourceTypeEducational_1", "ui-icon-locked", "resourceTypeEducational_1"],
    	["DeleteButton", "deleteresourceTypeEducational_1", "ui-icon-locked", "resourceTypeEducational_1"]
   	],
   	[
   		["Select", "levelIntEducationalValue_1", "InteractivityLevel","metadata-box-all"]
   	],
   	[
   		["Select", "levelDensEducationalValue_1", "SemanticDensity","metadata-box-all"]
   	],
   	[
   		["Select", "endUserEducationalValue_1","EndUser" ,"metadata-box-long"], ["AddButton", "addEndUserEducational_1", "ui-icon-locked", "endUserEducational_1"],
   		["DeleteButton", "deleteEndUserEducational_1", "ui-icon-locked", "endUserEducational_1"]
   	],
   	[
   		["Select", "contextEducationalValue_1","Context" ,"metadata-box-long"], ["AddButton", "addContextEducational_1", "ui-icon-locked", "contextEducational_1"],
   		["DeleteButton", "deleteContextEducational_1", "ui-icon-locked", "contextEducational_1"]
   	],
   	[
   		["Input", "rangeAgeEducationalValue_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguageRangeEducational_1", "metadata-text-right"],
   		["SelectLanguage", "languageRangeEducational_1","metadata-box-half"],["AddButton", "addrangeAgeEducational_1", "ui-icon-locked", "rangeAgeEducational_1"],
   		["DeleteButton", "deleterangeAgeEducational_1", "ui-icon-locked", "rangeAgeEducational_1"]
   	],
   	[
   		["Select", "difficultyEducationalValue_1", "Difficulty","metadata-box-all"]
   	],
   	[
   		["Span", CBI18n.gettext("Years"), "spanYears_1", "metadata-text"],["Input", "durationYearsEducational_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Months"), "spanMonths_1", "metadata-text-right"],["InputWithBr", "durationMonthsEducational_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Days"), "spanDays_1", "metadata-text"],["Input", "durationDaysEducational_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Hours"), "spanHours_1", "metadata-text-right"],["InputWithBr", "durationHoursEducational_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Minutes"), "spanMinutes_1", "metadata-text"],["Input", "durationminutesEducational_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Seconds"), "spanSeconds_1", "metadata-text-right"],["InputWithBr", "durationsecondsEducational_1", "metadata-box-half"],
        ["Div", "descLearningTimeEducational_1", [["Span", CBI18n.gettext("Description"), "spanDescriptionLearningEducational_1", "metadata-text"],
        ["Input", "DescriptionLearningEducational_1", "metadata-box-half"], ["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],
        ["SelectLanguage", "langDurationEducational_1","metadata-box-half"], ["AddButton", "adddescDuracionEducational_1", "ui-icon-locked", "descLearningTimeEducational_1"],
        ["DeleteButtonDiv", "deletedescDuracionEducational_1", "ui-icon-locked", "descLearningTimeEducational_1"]]]
    ],
    [
    	["Input", "descEducationUseValue_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],
    	["SelectLanguage", "langDescrEducational_1","metadata-box-half"],["AddButton", "addDescrEducational_1", "ui-icon-locked", "descEducationUse_1"],
    	["DeleteButton", "deleteDescrEducational_1", "ui-icon-locked", "descEducationUse_1"]
    ],
    [
    	["SelectLanguage", "languageEducationalUseValue_1","metadata-box-long"],["AddButton", "addLanguageEducationalUse_1", "ui-icon-locked", "languageEducationalUse_1"], 
    	["DeleteButton", "deleteLanguageLanguageEducationalUse_1", "ui-icon-locked", "languageEducationalUse_1"]
    ],
    [
    	["Select", "processcogEducationalValue_1", "CognitiveProcess","metadata-box-long"],
        ["AddButton", "addProcessCogEducational_1", "ui-icon-locked", "processcogEducational_1"],["DeleteButton", "deleteProcessCogEducational_1", "ui-icon-locked", "processcogEducational_1"]
    ],
    [
    	["Select", "costRightsValue_1", "Cost","metadata-box-all"]
    ],
    [
    	["Select", "copyrightRightsValue_1", "AuthorRights","metadata-box-all"]
    ],
    [
    	["Input", "descRightsValue_1","metadata-box-half-plus"],["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "descRightsLang_1","metadata-box-half-special"]
    ],
    [
    	["Span", CBI18n.gettext("Access Type"), "spanAccess_1", "metadata-text"],["Select", "accessTypeRights_1","Accesstype","metadata-box-long-wtext"], 
    	["Span", CBI18n.gettext("Description"), "spanDescription_1", "metadata-text"],["Input", "DescriptionAccessRights_1", "metadata-box-half-wbuttons"], 
    	["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"],["SelectLanguage", "langAccessRights_1","metadata-box-half-wbuttons"]
    ],
    [
    	["Span", CBI18n.gettext("Kind"), "spanKindRel_1", "metadata-text"],
        ["Select", "relationRelationsValue_1","RelationType","metadata-box"], ["AddButton", "addRelationRelations_1", "ui-icon-locked", "relationRelations_1"],
        ["DeleteButton", "deleteRelationRelations_1", "ui-icon-locked", "relationRelations_1"], ["Span", CBI18n.gettext("Catalog"), "spanCatalog_1", "metadata-text"],
        ["Input", "catalogRelations_1", "metadata-box"] , ["Span", CBI18n.gettext("Entry"), "spanEntry_1", "metadata-text"],["Input", "entryRelations_1", "metadata-box"],
        ["Span", CBI18n.gettext("Description"), "spanDescription_1", "metadata-text"],["Input", "DescriptionRelationRelations_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Language"), "spanLanguage_1", "metadata-text-right"], ["SelectLanguage", "relationRelationsLang_1","metadata-box-half"]
    ],
    [
    	["Span", CBI18n.gettext("Name"), "spanName_1", "metadata-text"],
        ["Input", "nameAnnotations_1", "metadata-box"], ["AddButton", "addAnnotationAnnotations_1", "ui-icon-locked", "annotationAnnotations_1"],
        ["DeleteButton", "deleteAnnotations_1", "ui-icon-locked", "annotationAnnotations_1"], ["Span", CBI18n.gettext("Organization"), "spanOrgan_1", "metadata-text"],
        ["Input", "organAnnotations_1","metadata-box"], ["Span", CBI18n.gettext("Email"), "spanemail_1", "metadata-text"],
        ["Input", "emailAnnotations_1", "metadata-box"] , ["Span", CBI18n.gettext("Date"), "spanDate_1", "metadata-text"],["Date", "dateAnnotations_1", "metadata-box"],
        ["Span", CBI18n.gettext("Date Descr."), "spanDescriptionDate_1", "metadata-text"],["Input", "DescriptionDateAnnotations_1", "metadata-box-half"],
        ["Span", CBI18n.gettext("Date Language"), "spanLanguage_1", "metadata-text-right"], ["SelectLanguage", "langDateAnnotations_1","metadata-box-half"],
        ["Span", CBI18n.gettext("Description"), "spanDescription_1", "metadata-text"], ["Input", "DescriptionAnnotations_1","metadata-box-half"],
        ["Span", CBI18n.gettext("Language"), "spanLanguageDesc_1", "metadata-text-right"],["SelectLanguage", "LangAnnotations_1","metadata-box-half"]
    ],
    [
    	["Span", CBI18n.gettext("Purpose"), "spanPurpose_1", "metadata-text"],
        ["Select", "typePurposeClassification_1","Purposes",  "metadata-box"], ["AddButton", "addPurposeClassification_1", "ui-icon-locked", "classificationsClassification_1"],
        ["DeleteButtonWithBr", "deletePurposeClassification_1", "ui-icon-locked", "classificationsClassification_1"], ["Span", CBI18n.gettext("Description"), "spanDescriptionTaxon_1_1", "metadata-text"], 
        ["Input", "DescriptionTaxonClassification_1","metadata-box-half"],["Span", CBI18n.gettext("Language"), "spanLanguageTaxon_1", "metadata-text-right"],["SelectLanguageWithBr", "tituloLangTaxonClassification_1", "metadata-box-half"] ,
        ["Div", "DIVkeyClassification_1_1", [["Span", CBI18n.gettext("Keyword"), "spanKeywordTaxon_1_1", "metadata-text"],
        ["Input", "KeywordTaxonClassification_1_1", "metadata-box-half"], ["Span", CBI18n.gettext("Language"), "spanLanguageKeywordTaxon_1_1", "metadata-text-right"],
        ["SelectLanguage", "titleLangKeywordTaxonClassification_1_1", "metadata-box-half"], ["AddButtonDiv", "adddescClassification_1_1", "ui-icon-locked", "DIVkeyClassification_1_1"],
        ["DeleteButton", "deletedescClassification_1_1", "ui-icon-locked", "DIVkeyClassification_1_1"]]],["Div", "DIVpathClassification_1_1", [["Span", CBI18n.gettext("Source"), "spanSource_1_1", "metadata-text"],
        ["Input", "sourceNameClassification_1_1", "metadata-box-half"], ["Span", CBI18n.gettext("Language"), "spanLanguage_1_1", "metadata-text-right"],
        ["SelectLanguageWithBr", "langClassification_1_1","metadata-box-half"], ["AddButtonDiv", "addpathClassification_1_1", "ui-icon-locked", "DIVpathClassification_1_1"],
        ["DeleteButton", "deletepathClassification_1_1", "ui-icon-locked", "DIVpathClassification_1_1"], ["Span", CBI18n.gettext("Entry"), "spanTaxon_1_1", "metadata-text"],
        ["Input", "nameTaxonClassification_1_1", "metadata-box-half"],["Span", CBI18n.gettext("Id"), "spanIdTaxon_1_1", "metadata-text-right"],["Input", "idTaxonClassification_1_1", "metadata-box-half"], 
        ["Span", CBI18n.gettext("Language"), "spanLanguageTaxon_1_1", "metadata-text"], ["SelectLanguage", "langClassificationTaxon_1_1","metadata-box"]]]
    ],
    ["title","subject","description","type","source","relation","coverage","creator","publisher","contributor","rights","date","formatData","identifier","language"],
    [
        ["cat_", ["catalog_", "entry_"] , "addCatalog_"],["tit_", ["title_", "titleLang_"] , "addtitle_"], 
        ["idiom_", ["mainLang_"] , "addLanguage_"], ["descGeneral_", ["Description_", "descGeneralLang_"], "addGeneralDesc_"], 
        ["keywordGeneral_", ["keywordGeneral1_", "keywordGeneralLang_"], "addKeywordGeneral_"], ["coverage_", ["coverage1_", "coverageLang_"], "addCoverage_"], 
        ["structuresGeneral_1"], ["aggregationLevels_1"], ["versionlifecycle_", ["versionlifecycle1_", "lifeCycleLang_"] , "addLifeCycleVersion_"], 
        ["statusLifeCycle_1_1"], ["contrLyfeCycle_", ["rolesLifeCycle_", "nameContribLifeCycle_", "organContribLifeCycle_", "emailContribLifeCycle_", "dateContribLifeCycle_", 
        ["DIVdescContribLifeCycle_1_", ["DescriptionContribLifeCycle_1_", "ContribLifeCycleLang_1_"], "addContribLifeCycle_1_"]], "addContribLifeCycle_"],
        ["catMetadata_", ["metametadataCatalog_", "metametadataEntry_"] , "addMetametadataCatalog_"], ["schemaMetametadataValue_1"],["langMetametadataValue_1"], 
        ["contrMetametadata_", ["rolesMetametadata_", "nameContribMetametadata_", "organContribMetametadata_", "emailContribMetametadata_", "dateContribMetametadata_", 
        ["DIVdescContribMetametadata_1_", ["DescriptionContribMetametadata_1_", "ContribMetametadataLang_1_"], "addContribMetametadata_1_"]],"addContribMetametadata_"],
        ["formatTechnical_", ["formatTechnicalValue_"], "addFormatTechnical_"], ["sizeTechnicalValue_1"], ["locationTechnical_", ["locationTechnicalValue_"],"addTechnicalLoc_"],
        ["requirementsTechnical_", ["typeTechnicalReq_","nameTechnicalReq_","minVerTechnicalReq_","versmaxTechnicalReq_"],"addReqTechnical_"], ["installRemTech_",["installRemTechValue_", "LangRemTech_"],
        "addRemTech_"], ["requirementsRemTech_", ["requirementsRemTechValue_", "LangOtherTech_"], "addOtherTech_"], ["durationYearsDurTech_1"], ["durationMonthsDurTech_1"],
        ["durationDaysDurTech_1"], ["durationHoursDurTech_1"],["durationminutesDurTech_1"], ["durationsecondsDurTech_1"], ["descdurationDurTech_", ["DescriptionDurTech_", "languageDescDurTech_"],
        "addDescDurTech_"], ["intTypeEducationalValue_1"], ["resourceTypeEducational_", ["resourceTypeEducationalValue_"], "addresourceTypeEducational_"], ["levelIntEducationalValue_1"],
        ["levelDensEducationalValue_1"], ["endUserEducational_", ["endUserEducationalValue_"], "addEndUserEducational_"], ["contextEducational_", ["contextEducationalValue_"], "addContextEducational_"],
        ["rangeAgeEducational_", ["rangeAgeEducationalValue_","languageRangeEducational_"], "addrangeAgeEducational_"], ["difficultyEducationalValue_1"], ["durationYearsEducational_1"],
        ["durationMonthsEducational_1"], ["durationDaysEducational_1"], ["durationHoursEducational_1"],["durationminutesEducational_1"],["durationsecondsEducational_1"],["descLearningTimeEducational_", 
        ["DescriptionLearningEducational_", "langDurationEducational_"], "adddescDuracionEducational_"], ["descEducationUse_", ["descEducationUseValue_","langDescrEducational_"], 
        "addDescrEducational_"], ["languageEducationalUse_", ["languageEducationalUseValue_"] , "addLanguageEducationalUse_"], ["processcogEducational_", ["processcogEducationalValue_"], "addProcessCogEducational_"],
        ["costRightsValue_1"], ["copyrightRightsValue_1"], ["descRights_", ["descRightsValue_", "descRightsLang_"], "addDescRights_"], ["accessTypeRights_1"],["DescriptionAccessRights_1"],
        ["langAccessRights_1"], ["relationRelations_", ["relationRelationsValue_", "catalogRelations_", "entryRelations_", "DescriptionRelationRelations_", "relationRelationsLang_"], "addRelationRelations_"],
        ["annotationAnnotations_", ["nameAnnotations_", "organAnnotations_", "emailAnnotations_" , "dateAnnotations_", "DescriptionDateAnnotations_", "langDateAnnotations_","DescriptionAnnotations_", 
         "LangAnnotations_"], "addAnnotationAnnotations_"], ["classificationsClassification_", ["typePurposeClassification_", "DescriptionTaxonClassification_","tituloLangTaxonClassification_", ["DIVkeyClassification_1_",
         ["KeywordTaxonClassification_1_","titleLangKeywordTaxonClassification_1_"], "adddescClassification_1_"],["DIVpathClassification_1_", ["sourceNameClassification_1_", "langClassification_1_","nameTaxonClassification_1_",
          "idTaxonClassification_1_", "langClassificationTaxon_1_"], "addpathClassification_1_"]], "addPurposeClassification_"]
    ]
]
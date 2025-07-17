import { AxiosRequestConfig } from 'axios';
import {ReadStream} from "fs";

export * from './aBTestSendStrategy';
export * from './aPIJobErrorPayload';
export * from './aPIMethodFilter';
export * from './abTestAction';
export * from './abTestActionData';
export * from './abTestActionDataCurrentExperiment';
export * from './abTestActionDataMainAction';
export * from './abTestCampaignEnum';
export * from './abTestEnum';
export * from './accountEnum';
export * from './accountResponseObjectResource';
export * from './accountResponseObjectResourceAttributes';
export * from './alltimeDateFilter';
export * from './anniversaryDateFilter';
export * from './anyEnum';
export * from './apiEnum';
export * from './attributionEnum';
export * from './attributionResponseObjectResource';
export * from './attributionResponseObjectResourceRelationships';
export * from './attributionResponseObjectResourceRelationshipsAttributedEvent';
export * from './attributionResponseObjectResourceRelationshipsAttributedEventData';
export * from './attributionResponseObjectResourceRelationshipsCampaign';
export * from './attributionResponseObjectResourceRelationshipsCampaignData';
export * from './attributionResponseObjectResourceRelationshipsCampaignMessage';
export * from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
export * from './attributionResponseObjectResourceRelationshipsEvent';
export * from './attributionResponseObjectResourceRelationshipsEventData';
export * from './attributionResponseObjectResourceRelationshipsFlow';
export * from './attributionResponseObjectResourceRelationshipsFlowData';
export * from './attributionResponseObjectResourceRelationshipsFlowMessage';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageData';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
export * from './audiences';
export * from './audiencesUpdate';
export * from './automaticWinnerSelectionSettings';
export * from './backInStockDelayAction';
export * from './backInStockDelayEnum';
export * from './backInStockEnum';
export * from './backInStockMethodFilter';
export * from './backInStockSubscriptionEnum';
export * from './baseEventCreateQueryBulkEntryResourceObject';
export * from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
export * from './blockDisplayOptions';
export * from './blockEnum';
export * from './booleanBranchLinks';
export * from './booleanEnum';
export * from './booleanFilter';
export * from './bounceDateEnum';
export * from './bounceDateFilter';
export * from './bounceDateFilterFilter';
export * from './branchAction';
export * from './branchEnum';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResource';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
export * from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
export * from './bulkRemoveEnum';
export * from './bulkRemoveMethodFilter';
export * from './buttonBlock';
export * from './buttonEnum';
export * from './calendarDateFilter';
export * from './campaignCloneQuery';
export * from './campaignCloneQueryResourceObject';
export * from './campaignCloneQueryResourceObjectAttributes';
export * from './campaignCreateQuery';
export * from './campaignCreateQueryResourceObject';
export * from './campaignCreateQueryResourceObjectAttributes';
export * from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
export * from './campaignCreateQueryResourceObjectAttributesSendOptions';
export * from './campaignCreateQueryResourceObjectAttributesSendStrategy';
export * from './campaignEnum';
export * from './campaignMessageAssignTemplateQuery';
export * from './campaignMessageAssignTemplateQueryResourceObject';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
export * from './campaignMessageCreateQueryResourceObject';
export * from './campaignMessageCreateQueryResourceObjectAttributes';
export * from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
export * from './campaignMessageCreateQueryResourceObjectRelationships';
export * from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
export * from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
export * from './campaignMessageEnum';
export * from './campaignMessageImageUpdateQuery';
export * from './campaignMessageImageUpdateQueryData';
export * from './campaignMessageIncrement';
export * from './campaignMessagePartialUpdateQuery';
export * from './campaignMessagePartialUpdateQueryResourceObject';
export * from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
export * from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
export * from './campaignMessageProperty';
export * from './campaignMessageResponseObjectResource';
export * from './campaignMessageResponseObjectResourceAttributes';
export * from './campaignMessageResponseObjectResourceAttributesDefinition';
export * from './campaignMessageStaticCount';
export * from './campaignPartialUpdateQuery';
export * from './campaignPartialUpdateQueryResourceObject';
export * from './campaignPartialUpdateQueryResourceObjectAttributes';
export * from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
export * from './campaignRecipientEstimationEnum';
export * from './campaignRecipientEstimationJobCreateQuery';
export * from './campaignRecipientEstimationJobCreateQueryResourceObject';
export * from './campaignRecipientEstimationJobEnum';
export * from './campaignRecipientEstimationJobResponseObjectResource';
export * from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
export * from './campaignRecipientEstimationResponseObjectResource';
export * from './campaignRecipientEstimationResponseObjectResourceAttributes';
export * from './campaignResponseObjectResource';
export * from './campaignResponseObjectResourceAttributes';
export * from './campaignResponseObjectResourceAttributesSendOptions';
export * from './campaignResponseObjectResourceAttributesSendStrategy';
export * from './campaignResponseObjectResourceAttributesTrackingOptions';
export * from './campaignSendJobCreateQuery';
export * from './campaignSendJobCreateQueryResourceObject';
export * from './campaignSendJobEnum';
export * from './campaignSendJobPartialUpdateQuery';
export * from './campaignSendJobPartialUpdateQueryResourceObject';
export * from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
export * from './campaignSendJobResponseObjectResource';
export * from './campaignSendJobResponseObjectResourceAttributes';
export * from './campaignTrackingSettingDynamicParam';
export * from './campaignTrackingSettingStaticParam';
export * from './campaignValuesReportEnum';
export * from './campaignValuesRequestDTO';
export * from './campaignValuesRequestDTOResourceObject';
export * from './campaignValuesRequestDTOResourceObjectAttributes';
export * from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
export * from './campaignsEmailTrackingOptions';
export * from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
export * from './campaignsSMSTrackingOptions';
export * from './carrierDeactivationEnum';
export * from './carrierDeactivationMethodFilter';
export * from './catalogCategoryBulkCreateJobEnum';
export * from './catalogCategoryBulkDeleteJobEnum';
export * from './catalogCategoryBulkUpdateJobEnum';
export * from './catalogCategoryCreateJobCreateQuery';
export * from './catalogCategoryCreateJobCreateQueryResourceObject';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryCreateJobResponseObjectResource';
export * from './catalogCategoryCreateQuery';
export * from './catalogCategoryCreateQueryResourceObject';
export * from './catalogCategoryCreateQueryResourceObjectAttributes';
export * from './catalogCategoryCreateQueryResourceObjectRelationships';
export * from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
export * from './catalogCategoryDeleteJobCreateQuery';
export * from './catalogCategoryDeleteJobCreateQueryResourceObject';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryDeleteJobResponseObjectResource';
export * from './catalogCategoryDeleteQueryResourceObject';
export * from './catalogCategoryEnum';
export * from './catalogCategoryItemOp';
export * from './catalogCategoryItemOpDataInner';
export * from './catalogCategoryResponseObjectResource';
export * from './catalogCategoryResponseObjectResourceAttributes';
export * from './catalogCategoryUpdateJobCreateQuery';
export * from './catalogCategoryUpdateJobCreateQueryResourceObject';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryUpdateJobResponseObjectResource';
export * from './catalogCategoryUpdateQuery';
export * from './catalogCategoryUpdateQueryResourceObject';
export * from './catalogCategoryUpdateQueryResourceObjectAttributes';
export * from './catalogItemBulkCreateJobEnum';
export * from './catalogItemBulkDeleteJobEnum';
export * from './catalogItemBulkUpdateJobEnum';
export * from './catalogItemCategoryOp';
export * from './catalogItemCreateJobCreateQuery';
export * from './catalogItemCreateJobCreateQueryResourceObject';
export * from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemCreateJobResponseObjectResource';
export * from './catalogItemCreateQuery';
export * from './catalogItemCreateQueryResourceObject';
export * from './catalogItemCreateQueryResourceObjectAttributes';
export * from './catalogItemCreateQueryResourceObjectRelationships';
export * from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
export * from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
export * from './catalogItemDeleteJobCreateQuery';
export * from './catalogItemDeleteJobCreateQueryResourceObject';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemDeleteJobResponseObjectResource';
export * from './catalogItemDeleteQueryResourceObject';
export * from './catalogItemEnum';
export * from './catalogItemResponseObjectResource';
export * from './catalogItemResponseObjectResourceAttributes';
export * from './catalogItemUpdateJobCreateQuery';
export * from './catalogItemUpdateJobCreateQueryResourceObject';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemUpdateJobResponseObjectResource';
export * from './catalogItemUpdateQuery';
export * from './catalogItemUpdateQueryResourceObject';
export * from './catalogItemUpdateQueryResourceObjectAttributes';
export * from './catalogVariantBulkCreateJobEnum';
export * from './catalogVariantBulkDeleteJobEnum';
export * from './catalogVariantBulkUpdateJobEnum';
export * from './catalogVariantCreateJobCreateQuery';
export * from './catalogVariantCreateJobCreateQueryResourceObject';
export * from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantCreateJobResponseObjectResource';
export * from './catalogVariantCreateQuery';
export * from './catalogVariantCreateQueryResourceObject';
export * from './catalogVariantCreateQueryResourceObjectAttributes';
export * from './catalogVariantCreateQueryResourceObjectRelationships';
export * from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
export * from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
export * from './catalogVariantDeleteJobCreateQuery';
export * from './catalogVariantDeleteJobCreateQueryResourceObject';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantDeleteJobResponseObjectResource';
export * from './catalogVariantDeleteQueryResourceObject';
export * from './catalogVariantEnum';
export * from './catalogVariantResponseObjectResource';
export * from './catalogVariantResponseObjectResourceAttributes';
export * from './catalogVariantUpdateJobCreateQuery';
export * from './catalogVariantUpdateJobCreateQueryResourceObject';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantUpdateJobResponseObjectResource';
export * from './catalogVariantUpdateQuery';
export * from './catalogVariantUpdateQueryResourceObject';
export * from './catalogVariantUpdateQueryResourceObjectAttributes';
export * from './checkoutEnum';
export * from './checkoutMethodFilter';
export * from './codeAction';
export * from './codeEnum';
export * from './collectionLinks';
export * from './conditionGroup';
export * from './conditionGroupConditionsInner';
export * from './conditionalBranchAction';
export * from './conditionalBranchActionData';
export * from './conditionalBranchActionDataProfileFilter';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
export * from './conditionalSplitEnum';
export * from './constantContactEnum';
export * from './constantContactIntegrationFilter';
export * from './constantContactIntegrationMethodFilter';
export * from './contactInformation';
export * from './contentRepeat';
export * from './countdownDelayAction';
export * from './countdownDelayActionData';
export * from './countdownDelayEnum';
export * from './couponCodeBulkCreateJobEnum';
export * from './couponCodeCreateJobCreateQuery';
export * from './couponCodeCreateJobCreateQueryResourceObject';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
export * from './couponCodeCreateJobResponseObjectResource';
export * from './couponCodeCreateJobResponseObjectResourceAttributes';
export * from './couponCodeCreateQuery';
export * from './couponCodeCreateQueryResourceObject';
export * from './couponCodeCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateQueryResourceObjectRelationships';
export * from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
export * from './couponCodeEnum';
export * from './couponCodeResponseObjectResource';
export * from './couponCodeResponseObjectResourceAttributes';
export * from './couponCodeUpdateQuery';
export * from './couponCodeUpdateQueryResourceObject';
export * from './couponCodeUpdateQueryResourceObjectAttributes';
export * from './couponCreateQuery';
export * from './couponCreateQueryResourceObject';
export * from './couponEnum';
export * from './couponResponseObjectResource';
export * from './couponResponseObjectResourceAttributes';
export * from './couponUpdateQuery';
export * from './couponUpdateQueryResourceObject';
export * from './couponUpdateQueryResourceObjectAttributes';
export * from './customMetricCondition';
export * from './customMetricConditionFilter';
export * from './customMetricCreateQuery';
export * from './customMetricCreateQueryResourceObject';
export * from './customMetricCreateQueryResourceObjectAttributes';
export * from './customMetricDefinition';
export * from './customMetricEnum';
export * from './customMetricGroup';
export * from './customMetricPartialUpdateQuery';
export * from './customMetricPartialUpdateQueryResourceObject';
export * from './customMetricPartialUpdateQueryResourceObjectAttributes';
export * from './customMetricResponseObjectResource';
export * from './customMetricResponseObjectResourceAttributes';
export * from './customSourceEnum';
export * from './customSourceFilter';
export * from './customTimeframe';
export * from './customTrackingParamDTO';
export * from './dataPrivacyCreateDeletionJobQuery';
export * from './dataPrivacyCreateDeletionJobQueryResourceObject';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
export * from './dataPrivacyDeletionJobEnum';
export * from './dataPrivacyProfileQueryResourceObject';
export * from './dataPrivacyProfileQueryResourceObjectAttributes';
export * from './dataSourceCreateQuery';
export * from './dataSourceCreateQueryResourceObject';
export * from './dataSourceCreateQueryResourceObjectAttributes';
export * from './dataSourceEnum';
export * from './dataSourceRecordBulkCreateJobCreateQuery';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
export * from './dataSourceRecordBulkCreateJobEnum';
export * from './dataSourceRecordEnum';
export * from './dataSourceRecordResourceObject';
export * from './dataSourceRecordResourceObjectAttributes';
export * from './dataSourceResponseObjectResource';
export * from './dataSourceResponseObjectResourceAttributes';
export * from './dateEnum';
export * from './deepLinkEnum';
export * from './deleteTagGroupResponse';
export * from './deviceMetadata';
export * from './doubleOptinFilter';
export * from './dropShadowBlock';
export * from './dropShadowEnum';
export * from './dynamicEnum';
export * from './dynamicTrackingParam';
export * from './emailChannel';
export * from './emailContent';
export * from './emailContentSubObject';
export * from './emailEnum';
export * from './emailMarketing';
export * from './emailMarketingListSuppression';
export * from './emailMarketingSuppression';
export * from './emailMessageContent';
export * from './emailMessageDefinition';
export * from './emailSendOptions';
export * from './emailSubscriptionParameters';
export * from './emailUnsubscriptionParameters';
export * from './equalsEnum';
export * from './equalsStringFilter';
export * from './errorSource';
export * from './eventBulkCreateEnum';
export * from './eventBulkCreateJobEnum';
export * from './eventCreateQueryV2';
export * from './eventCreateQueryV2ResourceObject';
export * from './eventCreateQueryV2ResourceObjectAttributes';
export * from './eventCreateQueryV2ResourceObjectAttributesMetric';
export * from './eventCreateQueryV2ResourceObjectAttributesProfile';
export * from './eventEnum';
export * from './eventProfileCreateQueryResourceObject';
export * from './eventProfileCreateQueryResourceObjectAttributes';
export * from './eventResponseObjectResource';
export * from './eventResponseObjectResourceAttributes';
export * from './eventsBulkCreateJob';
export * from './eventsBulkCreateJobResourceObject';
export * from './eventsBulkCreateJobResourceObjectAttributes';
export * from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
export * from './eventsBulkCreateQueryResourceObject';
export * from './eventsBulkCreateQueryResourceObjectAttributes';
export * from './eventsBulkCreateQueryResourceObjectAttributesEvents';
export * from './eventsBulkCreateQueryResourceObjectAttributesProfile';
export * from './existenceEnum';
export * from './existenceOperatorFilter';
export * from './failedAgeGateEnum';
export * from './failedAgeGateMethodFilter';
export * from './fakeEnum';
export * from './falseOrMisleadingEnum';
export * from './featuredEnum';
export * from './flowActionEnum';
export * from './flowActionResponseObjectResource';
export * from './flowActionResponseObjectResourceAttributes';
export * from './flowActionResponseObjectResourceAttributesBadgeOptions';
export * from './flowActionResponseObjectResourceAttributesTrackingOptions';
export * from './flowCreateQuery';
export * from './flowCreateQueryResourceObject';
export * from './flowCreateQueryResourceObjectAttributes';
export * from './flowDefinition';
export * from './flowDefinitionActionsInner';
export * from './flowDefinitionProfileFilter';
export * from './flowDefinitionProfileFilterConditionGroupsInner';
export * from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
export * from './flowDefinitionTriggersInner';
export * from './flowEmail';
export * from './flowEmailAdditionalFilters';
export * from './flowEmailAdditionalFiltersConditionGroupsInner';
export * from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowEmailTrackingOptions';
export * from './flowEnum';
export * from './flowInternalAlert';
export * from './flowMessageEnum';
export * from './flowMessageResponseObjectResource';
export * from './flowMessageResponseObjectResourceAttributes';
export * from './flowMessageResponseObjectResourceAttributesContent';
export * from './flowPushNotification';
export * from './flowPushNotificationAdditionalFilters';
export * from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
export * from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowPushNotificationBadgeOptions';
export * from './flowResponseObjectResource';
export * from './flowResponseObjectResourceAttributes';
export * from './flowSeriesReportEnum';
export * from './flowSeriesRequestDTO';
export * from './flowSeriesRequestDTOResourceObject';
export * from './flowSeriesRequestDTOResourceObjectAttributes';
export * from './flowSms';
export * from './flowSmsAdditionalFilters';
export * from './flowSmsAdditionalFiltersConditionGroupsInner';
export * from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowTrackingSettingDynamicParam';
export * from './flowTrackingSettingStaticParam';
export * from './flowUpdateQuery';
export * from './flowUpdateQueryResourceObject';
export * from './flowUpdateQueryResourceObjectAttributes';
export * from './flowV2ResponseObjectResourceAttributes';
export * from './flowV2ResponseObjectResourceExtended';
export * from './flowV2ResponseObjectResourceExtendedAttributes';
export * from './flowValuesReportEnum';
export * from './flowValuesRequestDTO';
export * from './flowValuesRequestDTOResourceObject';
export * from './flowValuesRequestDTOResourceObjectAttributes';
export * from './flowWebhook';
export * from './flowsProfileMetricCondition';
export * from './flowsProfileMetricConditionTimeframeFilter';
export * from './flowsSMSTrackingOptions';
export * from './formEnum';
export * from './formMethodFilter';
export * from './formResponseObjectResource';
export * from './formResponseObjectResourceAttributes';
export * from './formSeriesReportEnum';
export * from './formSeriesRequestDTO';
export * from './formSeriesRequestDTOResourceObject';
export * from './formSeriesRequestDTOResourceObjectAttributes';
export * from './formValuesReportEnum';
export * from './formValuesRequestDTO';
export * from './formValuesRequestDTOResourceObject';
export * from './formValuesRequestDTOResourceObjectAttributes';
export * from './formVersionABTest';
export * from './formVersionEnum';
export * from './formVersionResponseObjectResource';
export * from './formVersionResponseObjectResourceAttributes';
export * from './getAccountResponse';
export * from './getAccountResponseCollection';
export * from './getAccounts4XXResponse';
export * from './getAccounts4XXResponseErrorsInner';
export * from './getAccounts4XXResponseErrorsInnerSource';
export * from './getBulkProfileSuppressionsCreateJobResponse';
export * from './getBulkProfileSuppressionsCreateJobResponseCollection';
export * from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
export * from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
export * from './getBulkProfileSuppressionsRemoveJobResponse';
export * from './getBulkProfileSuppressionsRemoveJobResponseCollection';
export * from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
export * from './getCampaignMessageCampaignRelationshipResponse';
export * from './getCampaignMessageCampaignRelationshipResponseData';
export * from './getCampaignMessageImageRelationshipResponse';
export * from './getCampaignMessageImageRelationshipResponseData';
export * from './getCampaignMessageResponseCollectionCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocumentData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
export * from './getCampaignMessageResponseCompoundDocumentIncludedInner';
export * from './getCampaignMessageTemplateRelationshipResponse';
export * from './getCampaignMessagesRelationshipsResponseCollection';
export * from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
export * from './getCampaignRecipientEstimationJobResponse';
export * from './getCampaignRecipientEstimationResponse';
export * from './getCampaignResponse';
export * from './getCampaignResponseCollectionCompoundDocument';
export * from './getCampaignResponseCollectionCompoundDocumentDataInner';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
export * from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
export * from './getCampaignResponseCompoundDocument';
export * from './getCampaignResponseData';
export * from './getCampaignResponseDataAllOfRelationships';
export * from './getCampaignSendJobResponse';
export * from './getCampaignTagsRelationshipsResponseCollection';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
export * from './getCatalogCategoryCreateJobResponseCompoundDocument';
export * from './getCatalogCategoryDeleteJobResponse';
export * from './getCatalogCategoryDeleteJobResponseCollection';
export * from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
export * from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogCategoryItemsRelationshipsResponseCollection';
export * from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
export * from './getCatalogCategoryResponse';
export * from './getCatalogCategoryResponseCollection';
export * from './getCatalogCategoryResponseCollectionDataInner';
export * from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
export * from './getCatalogCategoryUpdateJobResponseCompoundDocument';
export * from './getCatalogItemCategoriesRelationshipsResponseCollection';
export * from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
export * from './getCatalogItemCreateJobResponseCompoundDocument';
export * from './getCatalogItemDeleteJobResponse';
export * from './getCatalogItemDeleteJobResponseCollection';
export * from './getCatalogItemDeleteJobResponseCollectionDataInner';
export * from './getCatalogItemResponseCollectionCompoundDocument';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogItemResponseCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
export * from './getCatalogItemUpdateJobResponseCompoundDocument';
export * from './getCatalogItemVariantsRelationshipsResponseCollection';
export * from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogVariantCreateJobResponseCompoundDocument';
export * from './getCatalogVariantDeleteJobResponse';
export * from './getCatalogVariantDeleteJobResponseCollection';
export * from './getCatalogVariantDeleteJobResponseCollectionDataInner';
export * from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogVariantResponse';
export * from './getCatalogVariantResponseCollection';
export * from './getCatalogVariantResponseCollectionDataInner';
export * from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogVariantUpdateJobResponseCompoundDocument';
export * from './getCouponCodeCouponRelationshipResponse';
export * from './getCouponCodeCouponRelationshipResponseData';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
export * from './getCouponCodeCreateJobResponseCompoundDocument';
export * from './getCouponCodeResponseCollection';
export * from './getCouponCodeResponseCollectionCompoundDocument';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getCouponCodeResponseCollectionDataInner';
export * from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
export * from './getCouponCodeResponseCompoundDocument';
export * from './getCouponCodesRelationshipsResponseCollection';
export * from './getCouponCodesRelationshipsResponseCollectionDataInner';
export * from './getCouponResponse';
export * from './getCouponResponseCollection';
export * from './getCustomMetricMetricsRelationshipsResponseCollection';
export * from './getCustomMetricResponse';
export * from './getCustomMetricResponseCollectionCompoundDocument';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
export * from './getCustomMetricResponseCompoundDocument';
export * from './getCustomMetricResponseData';
export * from './getCustomMetricResponseDataAllOfRelationships';
export * from './getDataSourceResponse';
export * from './getDataSourceResponseCollection';
export * from './getEventMetricRelationshipResponse';
export * from './getEventProfileRelationshipResponse';
export * from './getEventProfileRelationshipResponseData';
export * from './getEventResponseCollectionCompoundDocument';
export * from './getEventResponseCollectionCompoundDocumentDataInner';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
export * from './getEventResponseCollectionCompoundDocumentIncludedInner';
export * from './getEventResponseCompoundDocument';
export * from './getFlowActionFlowMessageRelationshipResponseCollection';
export * from './getFlowActionFlowRelationshipResponse';
export * from './getFlowActionResponse';
export * from './getFlowActionResponseCollection';
export * from './getFlowActionResponseCollectionDataInner';
export * from './getFlowActionResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowActionResponseCompoundDocument';
export * from './getFlowActionResponseCompoundDocumentData';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationships';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
export * from './getFlowActionResponseCompoundDocumentIncludedInner';
export * from './getFlowFlowActionRelationshipListResponseCollection';
export * from './getFlowMessageActionRelationshipResponse';
export * from './getFlowMessageResponseCollection';
export * from './getFlowMessageResponseCollectionDataInner';
export * from './getFlowMessageResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowMessageResponseCompoundDocument';
export * from './getFlowMessageResponseCompoundDocumentData';
export * from './getFlowMessageResponseCompoundDocumentDataAllOfRelationships';
export * from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
export * from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export * from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
export * from './getFlowMessageResponseCompoundDocumentIncludedInner';
export * from './getFlowMessageTemplateRelationshipResponse';
export * from './getFlowMessageTemplateRelationshipResponseData';
export * from './getFlowResponse';
export * from './getFlowResponseCollection';
export * from './getFlowResponseCollectionCompoundDocument';
export * from './getFlowResponseCollectionCompoundDocumentDataInner';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
export * from './getFlowResponseCollectionCompoundDocumentIncludedInner';
export * from './getFlowResponseCollectionDataInner';
export * from './getFlowResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowTagsRelationshipsResponseCollection';
export * from './getFlowV2ResponseCompoundDocument';
export * from './getFlowV2ResponseCompoundDocumentData';
export * from './getFormResponse';
export * from './getFormResponseCollectionCompoundDocument';
export * from './getFormResponseCollectionCompoundDocumentDataInner';
export * from './getFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getFormResponseCompoundDocument';
export * from './getFormResponseCompoundDocumentData';
export * from './getFormResponseCompoundDocumentDataAllOfRelationships';
export * from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions';
export * from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner';
export * from './getFormVersionFormRelationshipResponse';
export * from './getFormVersionFormRelationshipResponseData';
export * from './getFormVersionResponse';
export * from './getFormVersionResponseCollection';
export * from './getFormVersionsRelationshipsResponseCollection';
export * from './getFormVersionsRelationshipsResponseCollectionDataInner';
export * from './getImageResponse';
export * from './getImageResponseCollection';
export * from './getImportErrorResponseCollection';
export * from './getListFlowTriggersRelationshipsResponseCollection';
export * from './getListListResponseCollectionCompoundDocument';
export * from './getListListResponseCollectionCompoundDocumentDataInner';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
export * from './getListListResponseCollectionCompoundDocumentIncludedInner';
export * from './getListMemberResponseCollection';
export * from './getListMemberResponseCollectionDataInner';
export * from './getListProfilesRelationshipsResponseCollection';
export * from './getListResponseCollection';
export * from './getListResponseCollectionDataInner';
export * from './getListResponseCollectionDataInnerAllOfRelationships';
export * from './getListRetrieveResponseCompoundDocument';
export * from './getListRetrieveResponseCompoundDocumentData';
export * from './getListTagsRelationshipsResponseCollection';
export * from './getListTagsRelationshipsResponseCollectionDataInner';
export * from './getMappedMetricCustomMetricRelationshipResponse';
export * from './getMappedMetricCustomMetricRelationshipResponseData';
export * from './getMappedMetricMetricRelationshipResponse';
export * from './getMappedMetricResponseCollectionCompoundDocument';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
export * from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
export * from './getMappedMetricResponseCompoundDocument';
export * from './getMetricFlowTriggersRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
export * from './getMetricPropertyMetricRelationshipResponse';
export * from './getMetricPropertyResponseCollection';
export * from './getMetricPropertyResponseCollectionDataInner';
export * from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
export * from './getMetricPropertyResponseCompoundDocument';
export * from './getMetricPropertyResponseCompoundDocumentData';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
export * from './getMetricResponse';
export * from './getMetricResponseCollection';
export * from './getMetricResponseCollectionCompoundDocument';
export * from './getMetricResponseCollectionCompoundDocumentDataInner';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
export * from './getMetricResponseCompoundDocument';
export * from './getMetricResponseData';
export * from './getMetricResponseDataAllOfRelationships';
export * from './getProfileBulkImportJobListsRelationshipsResponseCollection';
export * from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
export * from './getProfileImportJobResponseCollectionCompoundDocument';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
export * from './getProfileImportJobResponseCompoundDocument';
export * from './getProfileListsRelationshipsResponseCollection';
export * from './getProfileListsRelationshipsResponseCollectionDataInner';
export * from './getProfilePushTokensRelationshipsResponseCollection';
export * from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
export * from './getProfileResponse';
export * from './getProfileResponseCollection';
export * from './getProfileResponseCollectionCompoundDocument';
export * from './getProfileResponseCollectionCompoundDocumentDataInner';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
export * from './getProfileResponseCompoundDocument';
export * from './getProfileResponseCompoundDocumentData';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationships';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
export * from './getProfileResponseCompoundDocumentIncludedInner';
export * from './getProfileResponseData';
export * from './getProfileResponseDataAllOfRelationships';
export * from './getProfileSegmentsRelationshipsResponseCollection';
export * from './getPushTokenProfileRelationshipResponse';
export * from './getPushTokenResponseCollection';
export * from './getPushTokenResponseCollectionCompoundDocument';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInner';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
export * from './getPushTokenResponseCollectionDataInner';
export * from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
export * from './getPushTokenResponseCompoundDocument';
export * from './getReviewResponseDTOCollectionCompoundDocument';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
export * from './getReviewResponseDTOCompoundDocument';
export * from './getSegmentFlowTriggersRelationshipsResponseCollection';
export * from './getSegmentListResponseCollectionCompoundDocument';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInner';
export * from './getSegmentMemberResponseCollection';
export * from './getSegmentMemberResponseCollectionDataInner';
export * from './getSegmentProfilesRelationshipsResponseCollection';
export * from './getSegmentResponseCollection';
export * from './getSegmentResponseCollectionDataInner';
export * from './getSegmentRetrieveResponseCompoundDocument';
export * from './getSegmentRetrieveResponseCompoundDocumentData';
export * from './getSegmentTagsRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollectionDataInner';
export * from './getTagFlowRelationshipsResponseCollection';
export * from './getTagFlowRelationshipsResponseCollectionDataInner';
export * from './getTagGroupRelationshipResponse';
export * from './getTagGroupRelationshipResponseData';
export * from './getTagGroupResponse';
export * from './getTagGroupResponseCollection';
export * from './getTagGroupResponseCollectionDataInner';
export * from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
export * from './getTagGroupTagsRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollectionDataInner';
export * from './getTagResponseCollection';
export * from './getTagResponseCollectionCompoundDocument';
export * from './getTagResponseCollectionCompoundDocumentDataInner';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
export * from './getTagResponseCollectionDataInner';
export * from './getTagResponseCollectionDataInnerAllOfRelationships';
export * from './getTagResponseCompoundDocument';
export * from './getTagSegmentRelationshipsResponseCollection';
export * from './getTagSegmentRelationshipsResponseCollectionDataInner';
export * from './getTemplateResponse';
export * from './getTemplateResponseCollection';
export * from './getTrackingSettingResponse';
export * from './getTrackingSettingResponseCollection';
export * from './getUniversalContentResponse';
export * from './getUniversalContentResponseCollection';
export * from './getWebFeedResponse';
export * from './getWebFeedResponseCollection';
export * from './getWebhookResponseCollectionCompoundDocument';
export * from './getWebhookResponseCollectionCompoundDocumentDataInner';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
export * from './getWebhookResponseCompoundDocument';
export * from './getWebhookTopicResponse';
export * from './getWebhookTopicResponseCollection';
export * from './greaterThanEnum';
export * from './greaterThanPositiveNumericFilter';
export * from './hTMLBlock';
export * from './hTMLBlockData';
export * from './hasEmailMarketing';
export * from './hasEmailMarketingConsent';
export * from './hasEmailMarketingConsentConsentStatus';
export * from './hasEmailMarketingNeverSubscribed';
export * from './hasEmailMarketingSubscribed';
export * from './hasEmailMarketingSubscribedFiltersInner';
export * from './hasPushMarketing';
export * from './hasPushMarketingConsent';
export * from './hasSMSMarketingConsent';
export * from './hasSMSMarketingSubscribed';
export * from './hasSMSMarketingSubscribedFiltersInner';
export * from './headerBlock';
export * from './headerEnum';
export * from './horizontalRuleBlock';
export * from './horizontalRuleEnum';
export * from './htmlEnum';
export * from './imageBlock';
export * from './imageCreateQuery';
export * from './imageCreateQueryResourceObject';
export * from './imageCreateQueryResourceObjectAttributes';
export * from './imageEnum';
export * from './imagePartialUpdateQuery';
export * from './imagePartialUpdateQueryResourceObject';
export * from './imagePartialUpdateQueryResourceObjectAttributes';
export * from './imageResponseObjectResource';
export * from './imageResponseObjectResourceAttributes';
export * from './immediateEnum';
export * from './immediateSendStrategy';
export * from './importErrorEnum';
export * from './importErrorResponseObjectResource';
export * from './importErrorResponseObjectResourceAttributes';
export * from './inEnum';
export * from './inStringArrayFilter';
export * from './inTheLastBaseRelativeDateFilter';
export * from './inTheLastEnum';
export * from './inboundMessageEnum';
export * from './inboundMessageMethodFilter';
export * from './increment';
export * from './incrementOneEnum';
export * from './integrationEnum';
export * from './internalServiceAction';
export * from './internalServiceEnum';
export * from './invalidEmailDateEnum';
export * from './invalidEmailDateFilter';
export * from './isDoubleOptInEnum';
export * from './isSetEnum';
export * from './isSetExistenceFilter';
export * from './lessThanEnum';
export * from './lessThanPositiveNumericFilter';
export * from './link';
export * from './listContainsOperatorFilter';
export * from './listCreateQuery';
export * from './listCreateQueryResourceObject';
export * from './listCreateQueryResourceObjectAttributes';
export * from './listEnum';
export * from './listLengthFilter';
export * from './listListResponseObjectResource';
export * from './listListResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceExtended';
export * from './listMemberResponseObjectResourceExtendedAttributes';
export * from './listMembersAddQuery';
export * from './listMembersDeleteQuery';
export * from './listPartialUpdateQuery';
export * from './listPartialUpdateQueryResourceObject';
export * from './listRegexOperatorContainsFilter';
export * from './listResponseObjectResource';
export * from './listRetrieveResponseObjectResourceAttributes';
export * from './listRetrieveResponseObjectResourceExtended';
export * from './listRetrieveResponseObjectResourceExtendedAttributes';
export * from './listSetFilter';
export * from './listSubstringFilter';
export * from './listTrigger';
export * from './listUpdateAction';
export * from './listUpdateActionData';
export * from './listUpdateEnum';
export * from './localStaticSend';
export * from './lowInventoryCondition';
export * from './lowInventoryConditionFilter';
export * from './lowInventoryConditionGroup';
export * from './lowInventoryEnum';
export * from './lowInventoryPropertyEnum';
export * from './lowInventoryTrigger';
export * from './mailboxProviderEnum';
export * from './mailboxProviderMethodFilter';
export * from './manualAddEnum';
export * from './manualAddMethodFilter';
export * from './manualImportEnum';
export * from './manualImportMethodFilter';
export * from './manualRemoveEnum';
export * from './manualRemoveMethodFilter';
export * from './manualSuppressionDateEnum';
export * from './manualSuppressionDateFilter';
export * from './mappedMetricEnum';
export * from './mappedMetricPartialUpdateQuery';
export * from './mappedMetricPartialUpdateQueryResourceObject';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
export * from './mappedMetricResponseObjectResource';
export * from './mappedMetricResponseObjectResourceAttributes';
export * from './messageBlockedEnum';
export * from './messageBlockedMethodFilter';
export * from './methodEnum';
export * from './metricAggregateEnum';
export * from './metricAggregateQuery';
export * from './metricAggregateQueryResourceObject';
export * from './metricAggregateQueryResourceObjectAttributes';
export * from './metricAggregateRowDTO';
export * from './metricCreateQueryResourceObject';
export * from './metricCreateQueryResourceObjectAttributes';
export * from './metricEnum';
export * from './metricPropertyCondition';
export * from './metricPropertyConditionFilter';
export * from './metricPropertyConditionGroup';
export * from './metricPropertyEnum';
export * from './metricPropertyResponseObjectResourceAttributes';
export * from './metricPropertyResponseObjectResourceExtended';
export * from './metricPropertyResponseObjectResourceExtendedAttributes';
export * from './metricResponseObjectResource';
export * from './metricResponseObjectResourceAttributes';
export * from './metricTrigger';
export * from './mobilePushBadge';
export * from './mobilePushBadgeBadgeOptions';
export * from './mobilePushContent';
export * from './mobilePushContentCreate';
export * from './mobilePushContentUpdate';
export * from './mobilePushEnum';
export * from './mobilePushMessageContent';
export * from './mobilePushMessageSilentDefinition';
export * from './mobilePushMessageSilentDefinitionCreate';
export * from './mobilePushMessageSilentDefinitionUpdate';
export * from './mobilePushMessageStandardDefinition';
export * from './mobilePushMessageStandardDefinitionCreate';
export * from './mobilePushMessageStandardDefinitionUpdate';
export * from './mobilePushNoBadge';
export * from './mobilePushOptions';
export * from './mobilePushOptionsBadge';
export * from './mobilePushOptionsOnOpen';
export * from './neverSubscribedEnum';
export * from './noEmailMarketing';
export * from './noEmailMarketingConsent';
export * from './noEmailMarketingConsentConsentStatus';
export * from './noEmailMarketingFiltersInner';
export * from './noEmailMarketingNeverSubscribed';
export * from './noEmailMarketingSubscribed';
export * from './noEmailMarketingUnsubscribed';
export * from './noEmailMarketingUnsubscribedFiltersInner';
export * from './noPushMarketing';
export * from './noPushMarketingConsent';
export * from './noSMSMarketing';
export * from './noSMSMarketingConsent';
export * from './noSMSMarketingConsentConsentStatus';
export * from './noSMSMarketingNeverSubscribed';
export * from './noSMSMarketingUnsubscribed';
export * from './noSMSMarketingUnsubscribedFiltersInner';
export * from './nonLocalStaticSend';
export * from './notEqualsEnum';
export * from './numericEnum';
export * from './numericOperatorFilter';
export * from './numericRangeFilter';
export * from './objectLinks';
export * from './onlyRelatedLinks';
export * from './onsiteProfileCreateQueryResourceObject';
export * from './onsiteProfileCreateQueryResourceObjectAttributes';
export * from './onsiteProfileMeta';
export * from './openAppEnum';
export * from './otherEnum';
export * from './patchCampaignMessageResponse';
export * from './patchCampaignMessageResponseData';
export * from './patchCampaignResponse';
export * from './patchCatalogCategoryResponse';
export * from './patchCatalogItemResponse';
export * from './patchCatalogVariantResponse';
export * from './patchCouponCodeResponse';
export * from './patchCouponResponse';
export * from './patchCustomMetricResponse';
export * from './patchFlowResponse';
export * from './patchFlowResponseData';
export * from './patchImageResponse';
export * from './patchListPartialUpdateResponse';
export * from './patchMappedMetricResponse';
export * from './patchMappedMetricResponseData';
export * from './patchProfileResponse';
export * from './patchReviewResponseDTO';
export * from './patchReviewResponseDTOData';
export * from './patchReviewResponseDTODataRelationships';
export * from './patchReviewResponseDTODataRelationshipsItem';
export * from './patchReviewResponseDTODataRelationshipsItemData';
export * from './patchSegmentPartialUpdateResponse';
export * from './patchTagGroupResponse';
export * from './patchTemplateResponse';
export * from './patchTrackingSettingResponse';
export * from './patchTrackingSettingResponseData';
export * from './patchUniversalContentResponse';
export * from './patchWebFeedResponse';
export * from './patchWebhookResponse';
export * from './pendingEnum';
export * from './postBulkProfileSuppressionsCreateJobResponse';
export * from './postBulkProfileSuppressionsCreateJobResponseData';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
export * from './postBulkProfileSuppressionsRemoveJobResponse';
export * from './postBulkProfileSuppressionsRemoveJobResponseData';
export * from './postCampaignMessageResponse';
export * from './postCampaignMessageResponseData';
export * from './postCampaignMessageResponseDataAttributes';
export * from './postCampaignMessageResponseDataAttributesContent';
export * from './postCampaignMessageResponseDataRelationships';
export * from './postCampaignRecipientEstimationJobResponse';
export * from './postCampaignRecipientEstimationJobResponseData';
export * from './postCampaignResponse';
export * from './postCampaignResponseData';
export * from './postCampaignSendJobResponse';
export * from './postCampaignSendJobResponseData';
export * from './postCampaignValuesResponseDTO';
export * from './postCampaignValuesResponseDTOData';
export * from './postCampaignValuesResponseDTODataAttributes';
export * from './postCampaignValuesResponseDTODataRelationships';
export * from './postCatalogCategoryCreateJobResponse';
export * from './postCatalogCategoryCreateJobResponseData';
export * from './postCatalogCategoryDeleteJobResponse';
export * from './postCatalogCategoryDeleteJobResponseData';
export * from './postCatalogCategoryDeleteJobResponseDataRelationships';
export * from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
export * from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
export * from './postCatalogCategoryResponse';
export * from './postCatalogCategoryResponseData';
export * from './postCatalogCategoryResponseDataRelationships';
export * from './postCatalogCategoryResponseDataRelationshipsItems';
export * from './postCatalogCategoryUpdateJobResponse';
export * from './postCatalogCategoryUpdateJobResponseData';
export * from './postCatalogItemCreateJobResponse';
export * from './postCatalogItemCreateJobResponseData';
export * from './postCatalogItemDeleteJobResponse';
export * from './postCatalogItemDeleteJobResponseData';
export * from './postCatalogItemDeleteJobResponseDataRelationships';
export * from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
export * from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
export * from './postCatalogItemResponse';
export * from './postCatalogItemResponseData';
export * from './postCatalogItemUpdateJobResponse';
export * from './postCatalogItemUpdateJobResponseData';
export * from './postCatalogVariantCreateJobResponse';
export * from './postCatalogVariantCreateJobResponseData';
export * from './postCatalogVariantDeleteJobResponse';
export * from './postCatalogVariantDeleteJobResponseData';
export * from './postCatalogVariantDeleteJobResponseDataRelationships';
export * from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
export * from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
export * from './postCatalogVariantResponse';
export * from './postCatalogVariantResponseData';
export * from './postCatalogVariantResponseDataRelationships';
export * from './postCatalogVariantResponseDataRelationshipsItem';
export * from './postCatalogVariantResponseDataRelationshipsItemData';
export * from './postCatalogVariantUpdateJobResponse';
export * from './postCatalogVariantUpdateJobResponseData';
export * from './postCouponCodeCreateJobResponse';
export * from './postCouponCodeCreateJobResponseData';
export * from './postCouponCodeResponse';
export * from './postCouponCodeResponseData';
export * from './postCouponCodeResponseDataRelationships';
export * from './postCouponCodeResponseDataRelationshipsProfile';
export * from './postCouponCodeResponseDataRelationshipsProfileData';
export * from './postCouponResponse';
export * from './postCouponResponseData';
export * from './postCustomMetricResponse';
export * from './postCustomMetricResponseData';
export * from './postDataSourceResponse';
export * from './postDataSourceResponseData';
export * from './postFlowSeriesResponseDTO';
export * from './postFlowSeriesResponseDTOData';
export * from './postFlowSeriesResponseDTODataAttributes';
export * from './postFlowV2Response';
export * from './postFlowV2ResponseData';
export * from './postFlowV2ResponseDataAttributes';
export * from './postFlowValuesResponseDTO';
export * from './postFlowValuesResponseDTOData';
export * from './postFlowValuesResponseDTODataAttributes';
export * from './postFlowValuesResponseDTODataRelationships';
export * from './postFormSeriesResponseDTO';
export * from './postFormSeriesResponseDTOData';
export * from './postFormSeriesResponseDTODataAttributes';
export * from './postFormValuesResponseDTO';
export * from './postFormValuesResponseDTOData';
export * from './postFormValuesResponseDTODataAttributes';
export * from './postImageResponse';
export * from './postImageResponseData';
export * from './postListCreateResponse';
export * from './postListCreateResponseData';
export * from './postListCreateResponseDataRelationships';
export * from './postListCreateResponseDataRelationshipsProfiles';
export * from './postListCreateResponseDataRelationshipsProfilesDataInner';
export * from './postMetricAggregateResponse';
export * from './postMetricAggregateResponseData';
export * from './postMetricAggregateResponseDataAttributes';
export * from './postProfileImportJobResponse';
export * from './postProfileImportJobResponseData';
export * from './postProfileImportJobResponseDataRelationships';
export * from './postProfileImportJobResponseDataRelationshipsImportErrors';
export * from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
export * from './postProfileImportJobResponseDataRelationshipsProfiles';
export * from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
export * from './postProfileMergeResponse';
export * from './postProfileMergeResponseData';
export * from './postProfileResponse';
export * from './postProfileResponseData';
export * from './postProfileResponseDataAttributes';
export * from './postSegmentCreateResponse';
export * from './postSegmentCreateResponseData';
export * from './postSegmentSeriesResponseDTO';
export * from './postSegmentSeriesResponseDTOData';
export * from './postSegmentSeriesResponseDTODataAttributes';
export * from './postSegmentValuesResponseDTO';
export * from './postSegmentValuesResponseDTOData';
export * from './postSegmentValuesResponseDTODataAttributes';
export * from './postTagGroupResponse';
export * from './postTagGroupResponseData';
export * from './postTagGroupResponseDataRelationships';
export * from './postTagResponse';
export * from './postTagResponseData';
export * from './postTagResponseDataRelationships';
export * from './postTagResponseDataRelationshipsCampaigns';
export * from './postTagResponseDataRelationshipsCampaignsDataInner';
export * from './postTemplateResponse';
export * from './postTemplateResponseData';
export * from './postUniversalContentResponse';
export * from './postUniversalContentResponseData';
export * from './postWebFeedResponse';
export * from './postWebFeedResponseData';
export * from './postWebhookResponse';
export * from './postWebhookResponseData';
export * from './predictiveAnalytics';
export * from './preferencePageEnum';
export * from './preferencePageFilter';
export * from './preferencePageMethodFilter';
export * from './priceDropCondition';
export * from './priceDropConditionFilter';
export * from './priceDropConditionGroup';
export * from './priceDropEnum';
export * from './priceDropPropertyEnum';
export * from './priceDropTrigger';
export * from './priorityEnum';
export * from './privateInformationEnum';
export * from './productBlock';
export * from './productEnum';
export * from './profanityOrInappropriateEnum';
export * from './profileBulkImportJobEnum';
export * from './profileCreateQuery';
export * from './profileCreateQueryResourceObject';
export * from './profileCreateQueryResourceObjectAttributes';
export * from './profileEnum';
export * from './profileGroupMembershipEnum';
export * from './profileHasGroupMembershipCondition';
export * from './profileHasGroupMembershipConditionTimeframeFilter';
export * from './profileHasNotReceivedEmailMessageCondition';
export * from './profileHasNotReceivedPushMessageCondition';
export * from './profileHasNotReceivedSmsMessageCondition';
export * from './profileIdentifierDTOResourceObject';
export * from './profileIdentifierDTOResourceObjectAttributes';
export * from './profileImportJobCreateQuery';
export * from './profileImportJobCreateQueryResourceObject';
export * from './profileImportJobCreateQueryResourceObjectAttributes';
export * from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
export * from './profileImportJobCreateQueryResourceObjectRelationships';
export * from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
export * from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
export * from './profileImportJobResponseObjectResource';
export * from './profileImportJobResponseObjectResourceAttributes';
export * from './profileLocation';
export * from './profileMarketingConsentCondition';
export * from './profileMarketingConsentConditionConsent';
export * from './profileMarketingConsentEnum';
export * from './profileMergeEnum';
export * from './profileMergeQuery';
export * from './profileMergeQueryResourceObject';
export * from './profileMergeQueryResourceObjectRelationships';
export * from './profileMergeQueryResourceObjectRelationshipsProfiles';
export * from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
export * from './profileMeta';
export * from './profileMetaPatchProperties';
export * from './profileMetricEnum';
export * from './profileMetricPropertyFilter';
export * from './profileMetricPropertyFilterFilter';
export * from './profileNoGroupMembershipCondition';
export * from './profileNotInFlowCondition';
export * from './profileNotInFlowConditionTimeframeFilter';
export * from './profileNotInFlowEnum';
export * from './profileNotSentEmailEnum';
export * from './profileNotSentPushEnum';
export * from './profileNotSentSmsEnum';
export * from './profileOperationDelete';
export * from './profileOperationUpdateOrCreateBoolean';
export * from './profileOperationUpdateOrCreateDate';
export * from './profileOperationUpdateOrCreateList';
export * from './profileOperationUpdateOrCreateNumeric';
export * from './profileOperationUpdateOrCreateString';
export * from './profilePartialUpdateQuery';
export * from './profilePartialUpdateQueryResourceObject';
export * from './profilePartialUpdateQueryResourceObjectAttributes';
export * from './profilePostalCodeDistanceCondition';
export * from './profilePostalCodeDistanceConditionFilter';
export * from './profilePostalCodeDistanceEnum';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
export * from './profilePredictiveAnalyticsChannelAffinityRankCondition';
export * from './profilePredictiveAnalyticsChannelAffinityRankFilter';
export * from './profilePredictiveAnalyticsDateCondition';
export * from './profilePredictiveAnalyticsEnum';
export * from './profilePredictiveAnalyticsNumericCondition';
export * from './profilePredictiveAnalyticsStringCondition';
export * from './profilePredictiveAnalyticsStringFilter';
export * from './profilePredictiveAnalyticsStringFilterOperator';
export * from './profilePropertyCondition';
export * from './profilePropertyConditionFilter';
export * from './profilePropertyDateTrigger';
export * from './profilePropertyEnum';
export * from './profileRandomSampleCondition';
export * from './profileRegionCondition';
export * from './profileRegionEnum';
export * from './profileResponseObjectResource';
export * from './profileResponseObjectResourceAttributes';
export * from './profileResponseObjectResourceExtended';
export * from './profileResponseObjectResourceExtendedAttributes';
export * from './profileSampleEnum';
export * from './profileSubscriptionBulkCreateJobEnum';
export * from './profileSubscriptionBulkDeleteJobEnum';
export * from './profileSubscriptionCreateQueryResourceObject';
export * from './profileSubscriptionCreateQueryResourceObjectAttributes';
export * from './profileSubscriptionDeleteQueryResourceObject';
export * from './profileSubscriptionDeleteQueryResourceObjectAttributes';
export * from './profileSuppressionBulkCreateJobEnum';
export * from './profileSuppressionBulkDeleteJobEnum';
export * from './profileSuppressionCreateQueryResourceObject';
export * from './profileSuppressionCreateQueryResourceObjectAttributes';
export * from './profileSuppressionDeleteQueryResourceObject';
export * from './profileSuppressionDeleteQueryResourceObjectAttributes';
export * from './profileUpsertQuery';
export * from './profileUpsertQueryResourceObject';
export * from './profileUpsertQueryResourceObjectAttributes';
export * from './property';
export * from './providedLandlineEnum';
export * from './providedLandlineMethodFilter';
export * from './providedNoAgeEnum';
export * from './providedNoAgeMethodFilter';
export * from './publishedEnum';
export * from './pushChannel';
export * from './pushEnum';
export * from './pushMarketing';
export * from './pushOnOpenApp';
export * from './pushOnOpenDeepLink';
export * from './pushProfileUpsertQueryResourceObject';
export * from './pushProfileUpsertQueryResourceObjectAttributes';
export * from './pushSendOptions';
export * from './pushTokenCreateQuery';
export * from './pushTokenCreateQueryResourceObject';
export * from './pushTokenCreateQueryResourceObjectAttributes';
export * from './pushTokenCreateQueryResourceObjectAttributesProfile';
export * from './pushTokenEnum';
export * from './pushTokenResponseObjectResource';
export * from './pushTokenResponseObjectResourceAttributes';
export * from './rankEnum';
export * from './rejectReasonFake';
export * from './rejectReasonMisleading';
export * from './rejectReasonOther';
export * from './rejectReasonPrivateInformation';
export * from './rejectReasonProfanity';
export * from './rejectReasonUnrelated';
export * from './rejectedEnum';
export * from './relationshipLinks';
export * from './relativeAnniversaryDateFilter';
export * from './relativeDateOperatorBaseFilter';
export * from './relativeDateRangeFilter';
export * from './renderOptions';
export * from './renderOptionsSubObject';
export * from './reviewBlock';
export * from './reviewEnum';
export * from './reviewPatchQuery';
export * from './reviewPatchQueryResourceObject';
export * from './reviewPatchQueryResourceObjectAttributes';
export * from './reviewPatchQueryResourceObjectAttributesStatus';
export * from './reviewProductDTO';
export * from './reviewPublicReply';
export * from './reviewResponseDTOObjectResource';
export * from './reviewResponseDTOObjectResourceAttributes';
export * from './reviewResponseDTOObjectResourceAttributesStatus';
export * from './reviewStatusFeatured';
export * from './reviewStatusPending';
export * from './reviewStatusPublished';
export * from './reviewStatusRejected';
export * from './reviewStatusRejectedRejectionReason';
export * from './reviewStatusUnpublished';
export * from './sMSChannel';
export * from './sMSContent';
export * from './sMSContentCreate';
export * from './sMSContentSubObject';
export * from './sMSMarketing';
export * from './sMSMessageContent';
export * from './sMSMessageDefinition';
export * from './sMSMessageDefinitionCreate';
export * from './sMSRenderOptions';
export * from './sMSSendOptions';
export * from './sMSSubscriptionParameters';
export * from './sMSTransactional';
export * from './sMSUnsubscriptionParameters';
export * from './section';
export * from './sectionEnum';
export * from './segmentCreateQuery';
export * from './segmentCreateQueryResourceObject';
export * from './segmentCreateQueryResourceObjectAttributes';
export * from './segmentDefinition';
export * from './segmentEnum';
export * from './segmentListResponseObjectResource';
export * from './segmentListResponseObjectResourceAttributes';
export * from './segmentMemberResponseObjectResourceAttributes';
export * from './segmentMemberResponseObjectResourceExtended';
export * from './segmentMemberResponseObjectResourceExtendedAttributes';
export * from './segmentPartialUpdateQuery';
export * from './segmentPartialUpdateQueryResourceObject';
export * from './segmentPartialUpdateQueryResourceObjectAttributes';
export * from './segmentResponseObjectResource';
export * from './segmentRetrieveResponseObjectResourceAttributes';
export * from './segmentRetrieveResponseObjectResourceExtended';
export * from './segmentRetrieveResponseObjectResourceExtendedAttributes';
export * from './segmentSeriesReportEnum';
export * from './segmentSeriesRequestDTO';
export * from './segmentSeriesRequestDTOResourceObject';
export * from './segmentSeriesRequestDTOResourceObjectAttributes';
export * from './segmentTrigger';
export * from './segmentValuesReportEnum';
export * from './segmentValuesRequestDTO';
export * from './segmentValuesRequestDTOResourceObject';
export * from './segmentValuesRequestDTOResourceObjectAttributes';
export * from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
export * from './segmentsProfileMetricCondition';
export * from './segmentsProfileMetricConditionTimeframeFilter';
export * from './sendEmailAction';
export * from './sendEmailActionData';
export * from './sendEmailEnum';
export * from './sendInternalAlertAction';
export * from './sendInternalAlertActionData';
export * from './sendInternalAlertEnum';
export * from './sendMobilePushEnum';
export * from './sendOptions';
export * from './sendPushNotificationAction';
export * from './sendPushNotificationActionData';
export * from './sendSmsAction';
export * from './sendSmsActionData';
export * from './sendSmsEnum';
export * from './sendTime';
export * from './sendTimeSubObject';
export * from './sendWebhookAction';
export * from './sendWebhookActionData';
export * from './sendWebhookEnum';
export * from './seriesData';
export * from './serverBISSubscriptionCreateQuery';
export * from './serverBISSubscriptionCreateQueryResourceObject';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
export * from './setCountEnum';
export * from './setPropertyEnum';
export * from './sftpEnum';
export * from './sftpMethodFilter';
export * from './shopifyEnum';
export * from './shopifyIntegrationFilter';
export * from './shopifyIntegrationMethodFilter';
export * from './silentEnum';
export * from './sinceFlowStartDateFilter';
export * from './smartSendTimeEnum';
export * from './smartSendTimeStrategy';
export * from './smsEnum';
export * from './socialBlock';
export * from './socialEnum';
export * from './spacerBlock';
export * from './spacerEnum';
export * from './spamComplaintEnum';
export * from './spamComplaintMethodFilter';
export * from './splitAction';
export * from './splitBlock';
export * from './splitEnum';
export * from './splitLinks';
export * from './standardEnum';
export * from './staticCount';
export * from './staticDateFilter';
export * from './staticDateRangeFilter';
export * from './staticEnum';
export * from './staticSendStrategy';
export * from './staticSendStrategyOptions';
export * from './staticTrackingParam';
export * from './statusDateEnum';
export * from './statusDateFilter';
export * from './statusDateFilterFilter';
export * from './streetAddress';
export * from './stringArrayOperatorFilter';
export * from './stringEnum';
export * from './stringInArrayFilter';
export * from './stringOperatorFilter';
export * from './stringPhoneOperatorArrayFilter';
export * from './subscribedEnum';
export * from './subscriptionChannels';
export * from './subscriptionCreateJobCreateQuery';
export * from './subscriptionCreateJobCreateQueryResourceObject';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
export * from './subscriptionDeleteJobCreateQuery';
export * from './subscriptionDeleteJobCreateQueryResourceObject';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
export * from './subscriptionParameters';
export * from './subscriptions';
export * from './suppressionCreateJobCreateQuery';
export * from './suppressionCreateJobCreateQueryResourceObject';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributes';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationships';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
export * from './suppressionDeleteJobCreateQuery';
export * from './suppressionDeleteJobCreateQueryResourceObject';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
export * from './tableBlock';
export * from './tableEnum';
export * from './tagCampaignOp';
export * from './tagCampaignOpDataInner';
export * from './tagCreateQuery';
export * from './tagCreateQueryResourceObject';
export * from './tagCreateQueryResourceObjectRelationships';
export * from './tagCreateQueryResourceObjectRelationshipsTagGroup';
export * from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
export * from './tagEnum';
export * from './tagFlowOp';
export * from './tagFlowOpDataInner';
export * from './tagGroupCreateQuery';
export * from './tagGroupCreateQueryResourceObject';
export * from './tagGroupCreateQueryResourceObjectAttributes';
export * from './tagGroupEnum';
export * from './tagGroupResponseObjectResource';
export * from './tagGroupResponseObjectResourceAttributes';
export * from './tagGroupUpdateQuery';
export * from './tagGroupUpdateQueryResourceObject';
export * from './tagGroupUpdateQueryResourceObjectAttributes';
export * from './tagListOp';
export * from './tagListOpDataInner';
export * from './tagResponseObjectResource';
export * from './tagResponseObjectResourceAttributes';
export * from './tagSegmentOp';
export * from './tagSegmentOpDataInner';
export * from './tagUpdateQuery';
export * from './tagUpdateQueryResourceObject';
export * from './targetDateAction';
export * from './targetDateActionData';
export * from './targetDateEnum';
export * from './templateCloneQuery';
export * from './templateCloneQueryResourceObject';
export * from './templateCloneQueryResourceObjectAttributes';
export * from './templateCreateQuery';
export * from './templateCreateQueryResourceObject';
export * from './templateCreateQueryResourceObjectAttributes';
export * from './templateEnum';
export * from './templateRenderQuery';
export * from './templateRenderQueryResourceObject';
export * from './templateRenderQueryResourceObjectAttributes';
export * from './templateResponseObjectResource';
export * from './templateResponseObjectResourceAttributes';
export * from './templateUniversalContentEnum';
export * from './templateUpdateQuery';
export * from './templateUpdateQueryResourceObject';
export * from './templateUpdateQueryResourceObjectAttributes';
export * from './textBlock';
export * from './textBlockData';
export * from './textBlockStyles';
export * from './textEnum';
export * from './throttledEnum';
export * from './throttledSendStrategy';
export * from './timeDelayAction';
export * from './timeDelayActionData';
export * from './timeDelayEnum';
export * from './timeframe';
export * from './trackingParamDTO';
export * from './trackingParamDTOCampaign';
export * from './trackingParamDTOFlow';
export * from './trackingSettingEnum';
export * from './trackingSettingPartialUpdateQuery';
export * from './trackingSettingPartialUpdateQueryResourceObject';
export * from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
export * from './trackingSettingResponseObjectResource';
export * from './trackingSettingResponseObjectResourceAttributes';
export * from './triggerBranchAction';
export * from './triggerBranchActionData';
export * from './triggerSplitEnum';
export * from './universalContentCreateQuery';
export * from './universalContentCreateQueryResourceObject';
export * from './universalContentCreateQueryResourceObjectAttributes';
export * from './universalContentCreateQueryResourceObjectAttributesDefinition';
export * from './universalContentPartialUpdateQuery';
export * from './universalContentPartialUpdateQueryResourceObject';
export * from './universalContentPartialUpdateQueryResourceObjectAttributes';
export * from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
export * from './universalContentResponseObjectResource';
export * from './universalContentResponseObjectResourceAttributes';
export * from './universalContentResponseObjectResourceAttributesDefinition';
export * from './unpublishedEnum';
export * from './unrelatedEnum';
export * from './unsubscribedEnum';
export * from './unsubscriptionChannels';
export * from './unsubscriptionParameters';
export * from './unsupportedBlock';
export * from './unsupportedEnum';
export * from './unsupportedSendStrategy';
export * from './updateProfileAction';
export * from './updateProfileActionData';
export * from './updateProfileActionDataProfileOperationsInner';
export * from './updateProfileEnum';
export * from './utmParam';
export * from './utmParamInfo';
export * from './valuesData';
export * from './videoBlock';
export * from './videoEnum';
export * from './webFeedCreateQuery';
export * from './webFeedCreateQueryResourceObject';
export * from './webFeedCreateQueryResourceObjectAttributes';
export * from './webFeedEnum';
export * from './webFeedPartialUpdateQuery';
export * from './webFeedPartialUpdateQueryResourceObject';
export * from './webFeedPartialUpdateQueryResourceObjectAttributes';
export * from './webFeedResponseObjectResource';
export * from './webFeedResponseObjectResourceAttributes';
export * from './webhookCreateQuery';
export * from './webhookCreateQueryResourceObject';
export * from './webhookCreateQueryResourceObjectAttributes';
export * from './webhookCreateQueryResourceObjectRelationships';
export * from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
export * from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
export * from './webhookEnum';
export * from './webhookPartialUpdateQuery';
export * from './webhookPartialUpdateQueryResourceObject';
export * from './webhookPartialUpdateQueryResourceObjectAttributes';
export * from './webhookPartialUpdateQueryResourceObjectRelationships';
export * from './webhookResponseObjectResource';
export * from './webhookResponseObjectResourceAttributes';
export * from './webhookTopicEnum';
export * from './webhookTopicResponseObjectResource';

export type RequestFile = ReadStream;


import { ABTestSendStrategy } from './aBTestSendStrategy';
import { APIJobErrorPayload } from './aPIJobErrorPayload';
import { APIMethodFilter } from './aPIMethodFilter';
import { AbTestAction } from './abTestAction';
import { AbTestActionData } from './abTestActionData';
import { AbTestActionDataCurrentExperiment } from './abTestActionDataCurrentExperiment';
import { AbTestActionDataMainAction } from './abTestActionDataMainAction';
import { AbTestCampaignEnum } from './abTestCampaignEnum';
import { AbTestEnum } from './abTestEnum';
import { AccountEnum } from './accountEnum';
import { AccountResponseObjectResource } from './accountResponseObjectResource';
import { AccountResponseObjectResourceAttributes } from './accountResponseObjectResourceAttributes';
import { AlltimeDateFilter } from './alltimeDateFilter';
import { AnniversaryDateFilter } from './anniversaryDateFilter';
import { AnyEnum } from './anyEnum';
import { ApiEnum } from './apiEnum';
import { AttributionEnum } from './attributionEnum';
import { AttributionResponseObjectResource } from './attributionResponseObjectResource';
import { AttributionResponseObjectResourceRelationships } from './attributionResponseObjectResourceRelationships';
import { AttributionResponseObjectResourceRelationshipsAttributedEvent } from './attributionResponseObjectResourceRelationshipsAttributedEvent';
import { AttributionResponseObjectResourceRelationshipsAttributedEventData } from './attributionResponseObjectResourceRelationshipsAttributedEventData';
import { AttributionResponseObjectResourceRelationshipsCampaign } from './attributionResponseObjectResourceRelationshipsCampaign';
import { AttributionResponseObjectResourceRelationshipsCampaignData } from './attributionResponseObjectResourceRelationshipsCampaignData';
import { AttributionResponseObjectResourceRelationshipsCampaignMessage } from './attributionResponseObjectResourceRelationshipsCampaignMessage';
import { AttributionResponseObjectResourceRelationshipsCampaignMessageData } from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
import { AttributionResponseObjectResourceRelationshipsEvent } from './attributionResponseObjectResourceRelationshipsEvent';
import { AttributionResponseObjectResourceRelationshipsEventData } from './attributionResponseObjectResourceRelationshipsEventData';
import { AttributionResponseObjectResourceRelationshipsFlow } from './attributionResponseObjectResourceRelationshipsFlow';
import { AttributionResponseObjectResourceRelationshipsFlowData } from './attributionResponseObjectResourceRelationshipsFlowData';
import { AttributionResponseObjectResourceRelationshipsFlowMessage } from './attributionResponseObjectResourceRelationshipsFlowMessage';
import { AttributionResponseObjectResourceRelationshipsFlowMessageData } from './attributionResponseObjectResourceRelationshipsFlowMessageData';
import { AttributionResponseObjectResourceRelationshipsFlowMessageVariation } from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
import { AttributionResponseObjectResourceRelationshipsFlowMessageVariationData } from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
import { Audiences } from './audiences';
import { AudiencesUpdate } from './audiencesUpdate';
import { AutomaticWinnerSelectionSettings } from './automaticWinnerSelectionSettings';
import { BackInStockDelayAction } from './backInStockDelayAction';
import { BackInStockDelayEnum } from './backInStockDelayEnum';
import { BackInStockEnum } from './backInStockEnum';
import { BackInStockMethodFilter } from './backInStockMethodFilter';
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { BaseEventCreateQueryBulkEntryResourceObject } from './baseEventCreateQueryBulkEntryResourceObject';
import { BaseEventCreateQueryBulkEntryResourceObjectAttributes } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import { BlockDisplayOptions } from './blockDisplayOptions';
import { BlockEnum } from './blockEnum';
import { BooleanBranchLinks } from './booleanBranchLinks';
import { BooleanEnum } from './booleanEnum';
import { BooleanFilter } from './booleanFilter';
import { BounceDateEnum } from './bounceDateEnum';
import { BounceDateFilter } from './bounceDateFilter';
import { BounceDateFilterFilter } from './bounceDateFilterFilter';
import { BranchAction } from './branchAction';
import { BranchEnum } from './branchEnum';
import { BulkProfileSuppressionsCreateJobResponseObjectResource } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import { BulkProfileSuppressionsRemoveJobResponseObjectResource } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import { BulkRemoveEnum } from './bulkRemoveEnum';
import { BulkRemoveMethodFilter } from './bulkRemoveMethodFilter';
import { ButtonBlock } from './buttonBlock';
import { ButtonEnum } from './buttonEnum';
import { CalendarDateFilter } from './calendarDateFilter';
import { CampaignCloneQuery } from './campaignCloneQuery';
import { CampaignCloneQueryResourceObject } from './campaignCloneQueryResourceObject';
import { CampaignCloneQueryResourceObjectAttributes } from './campaignCloneQueryResourceObjectAttributes';
import { CampaignCreateQuery } from './campaignCreateQuery';
import { CampaignCreateQueryResourceObject } from './campaignCreateQueryResourceObject';
import { CampaignCreateQueryResourceObjectAttributes } from './campaignCreateQueryResourceObjectAttributes';
import { CampaignCreateQueryResourceObjectAttributesCampaignMessages } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import { CampaignCreateQueryResourceObjectAttributesSendOptions } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import { CampaignCreateQueryResourceObjectAttributesSendStrategy } from './campaignCreateQueryResourceObjectAttributesSendStrategy';
import { CampaignEnum } from './campaignEnum';
import { CampaignMessageAssignTemplateQuery } from './campaignMessageAssignTemplateQuery';
import { CampaignMessageAssignTemplateQueryResourceObject } from './campaignMessageAssignTemplateQueryResourceObject';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationships } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import { CampaignMessageCreateQueryResourceObject } from './campaignMessageCreateQueryResourceObject';
import { CampaignMessageCreateQueryResourceObjectAttributes } from './campaignMessageCreateQueryResourceObjectAttributes';
import { CampaignMessageCreateQueryResourceObjectAttributesDefinition } from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
import { CampaignMessageCreateQueryResourceObjectRelationships } from './campaignMessageCreateQueryResourceObjectRelationships';
import { CampaignMessageCreateQueryResourceObjectRelationshipsImage } from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
import { CampaignMessageCreateQueryResourceObjectRelationshipsImageData } from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
import { CampaignMessageEnum } from './campaignMessageEnum';
import { CampaignMessageImageUpdateQuery } from './campaignMessageImageUpdateQuery';
import { CampaignMessageImageUpdateQueryData } from './campaignMessageImageUpdateQueryData';
import { CampaignMessageIncrement } from './campaignMessageIncrement';
import { CampaignMessagePartialUpdateQuery } from './campaignMessagePartialUpdateQuery';
import { CampaignMessagePartialUpdateQueryResourceObject } from './campaignMessagePartialUpdateQueryResourceObject';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributes } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributesDefinition } from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
import { CampaignMessageProperty } from './campaignMessageProperty';
import { CampaignMessageResponseObjectResource } from './campaignMessageResponseObjectResource';
import { CampaignMessageResponseObjectResourceAttributes } from './campaignMessageResponseObjectResourceAttributes';
import { CampaignMessageResponseObjectResourceAttributesDefinition } from './campaignMessageResponseObjectResourceAttributesDefinition';
import { CampaignMessageStaticCount } from './campaignMessageStaticCount';
import { CampaignPartialUpdateQuery } from './campaignPartialUpdateQuery';
import { CampaignPartialUpdateQueryResourceObject } from './campaignPartialUpdateQueryResourceObject';
import { CampaignPartialUpdateQueryResourceObjectAttributes } from './campaignPartialUpdateQueryResourceObjectAttributes';
import { CampaignPartialUpdateQueryResourceObjectAttributesSendStrategy } from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
import { CampaignRecipientEstimationEnum } from './campaignRecipientEstimationEnum';
import { CampaignRecipientEstimationJobCreateQuery } from './campaignRecipientEstimationJobCreateQuery';
import { CampaignRecipientEstimationJobCreateQueryResourceObject } from './campaignRecipientEstimationJobCreateQueryResourceObject';
import { CampaignRecipientEstimationJobEnum } from './campaignRecipientEstimationJobEnum';
import { CampaignRecipientEstimationJobResponseObjectResource } from './campaignRecipientEstimationJobResponseObjectResource';
import { CampaignRecipientEstimationJobResponseObjectResourceAttributes } from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
import { CampaignRecipientEstimationResponseObjectResource } from './campaignRecipientEstimationResponseObjectResource';
import { CampaignRecipientEstimationResponseObjectResourceAttributes } from './campaignRecipientEstimationResponseObjectResourceAttributes';
import { CampaignResponseObjectResource } from './campaignResponseObjectResource';
import { CampaignResponseObjectResourceAttributes } from './campaignResponseObjectResourceAttributes';
import { CampaignResponseObjectResourceAttributesSendOptions } from './campaignResponseObjectResourceAttributesSendOptions';
import { CampaignResponseObjectResourceAttributesSendStrategy } from './campaignResponseObjectResourceAttributesSendStrategy';
import { CampaignResponseObjectResourceAttributesTrackingOptions } from './campaignResponseObjectResourceAttributesTrackingOptions';
import { CampaignSendJobCreateQuery } from './campaignSendJobCreateQuery';
import { CampaignSendJobCreateQueryResourceObject } from './campaignSendJobCreateQueryResourceObject';
import { CampaignSendJobEnum } from './campaignSendJobEnum';
import { CampaignSendJobPartialUpdateQuery } from './campaignSendJobPartialUpdateQuery';
import { CampaignSendJobPartialUpdateQueryResourceObject } from './campaignSendJobPartialUpdateQueryResourceObject';
import { CampaignSendJobPartialUpdateQueryResourceObjectAttributes } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import { CampaignSendJobResponseObjectResource } from './campaignSendJobResponseObjectResource';
import { CampaignSendJobResponseObjectResourceAttributes } from './campaignSendJobResponseObjectResourceAttributes';
import { CampaignTrackingSettingDynamicParam } from './campaignTrackingSettingDynamicParam';
import { CampaignTrackingSettingStaticParam } from './campaignTrackingSettingStaticParam';
import { CampaignValuesReportEnum } from './campaignValuesReportEnum';
import { CampaignValuesRequestDTO } from './campaignValuesRequestDTO';
import { CampaignValuesRequestDTOResourceObject } from './campaignValuesRequestDTOResourceObject';
import { CampaignValuesRequestDTOResourceObjectAttributes } from './campaignValuesRequestDTOResourceObjectAttributes';
import { CampaignValuesRequestDTOResourceObjectAttributesTimeframe } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
import { CampaignsEmailTrackingOptions } from './campaignsEmailTrackingOptions';
import { CampaignsEmailTrackingOptionsCustomTrackingParamsInner } from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
import { CampaignsSMSTrackingOptions } from './campaignsSMSTrackingOptions';
import { CarrierDeactivationEnum } from './carrierDeactivationEnum';
import { CarrierDeactivationMethodFilter } from './carrierDeactivationMethodFilter';
import { CatalogCategoryBulkCreateJobEnum } from './catalogCategoryBulkCreateJobEnum';
import { CatalogCategoryBulkDeleteJobEnum } from './catalogCategoryBulkDeleteJobEnum';
import { CatalogCategoryBulkUpdateJobEnum } from './catalogCategoryBulkUpdateJobEnum';
import { CatalogCategoryCreateJobCreateQuery } from './catalogCategoryCreateJobCreateQuery';
import { CatalogCategoryCreateJobCreateQueryResourceObject } from './catalogCategoryCreateJobCreateQueryResourceObject';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributes } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryCreateJobResponseObjectResource } from './catalogCategoryCreateJobResponseObjectResource';
import { CatalogCategoryCreateQuery } from './catalogCategoryCreateQuery';
import { CatalogCategoryCreateQueryResourceObject } from './catalogCategoryCreateQueryResourceObject';
import { CatalogCategoryCreateQueryResourceObjectAttributes } from './catalogCategoryCreateQueryResourceObjectAttributes';
import { CatalogCategoryCreateQueryResourceObjectRelationships } from './catalogCategoryCreateQueryResourceObjectRelationships';
import { CatalogCategoryCreateQueryResourceObjectRelationshipsItems } from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
import { CatalogCategoryDeleteJobCreateQuery } from './catalogCategoryDeleteJobCreateQuery';
import { CatalogCategoryDeleteJobCreateQueryResourceObject } from './catalogCategoryDeleteJobCreateQueryResourceObject';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryDeleteJobResponseObjectResource } from './catalogCategoryDeleteJobResponseObjectResource';
import { CatalogCategoryDeleteQueryResourceObject } from './catalogCategoryDeleteQueryResourceObject';
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryItemOp } from './catalogCategoryItemOp';
import { CatalogCategoryItemOpDataInner } from './catalogCategoryItemOpDataInner';
import { CatalogCategoryResponseObjectResource } from './catalogCategoryResponseObjectResource';
import { CatalogCategoryResponseObjectResourceAttributes } from './catalogCategoryResponseObjectResourceAttributes';
import { CatalogCategoryUpdateJobCreateQuery } from './catalogCategoryUpdateJobCreateQuery';
import { CatalogCategoryUpdateJobCreateQueryResourceObject } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryUpdateJobResponseObjectResource } from './catalogCategoryUpdateJobResponseObjectResource';
import { CatalogCategoryUpdateQuery } from './catalogCategoryUpdateQuery';
import { CatalogCategoryUpdateQueryResourceObject } from './catalogCategoryUpdateQueryResourceObject';
import { CatalogCategoryUpdateQueryResourceObjectAttributes } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import { CatalogItemBulkCreateJobEnum } from './catalogItemBulkCreateJobEnum';
import { CatalogItemBulkDeleteJobEnum } from './catalogItemBulkDeleteJobEnum';
import { CatalogItemBulkUpdateJobEnum } from './catalogItemBulkUpdateJobEnum';
import { CatalogItemCategoryOp } from './catalogItemCategoryOp';
import { CatalogItemCreateJobCreateQuery } from './catalogItemCreateJobCreateQuery';
import { CatalogItemCreateJobCreateQueryResourceObject } from './catalogItemCreateJobCreateQueryResourceObject';
import { CatalogItemCreateJobCreateQueryResourceObjectAttributes } from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
import { CatalogItemCreateJobCreateQueryResourceObjectAttributesItems } from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemCreateJobResponseObjectResource } from './catalogItemCreateJobResponseObjectResource';
import { CatalogItemCreateQuery } from './catalogItemCreateQuery';
import { CatalogItemCreateQueryResourceObject } from './catalogItemCreateQueryResourceObject';
import { CatalogItemCreateQueryResourceObjectAttributes } from './catalogItemCreateQueryResourceObjectAttributes';
import { CatalogItemCreateQueryResourceObjectRelationships } from './catalogItemCreateQueryResourceObjectRelationships';
import { CatalogItemCreateQueryResourceObjectRelationshipsCategories } from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
import { CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner } from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
import { CatalogItemDeleteJobCreateQuery } from './catalogItemDeleteJobCreateQuery';
import { CatalogItemDeleteJobCreateQueryResourceObject } from './catalogItemDeleteJobCreateQueryResourceObject';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributes } from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems } from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemDeleteJobResponseObjectResource } from './catalogItemDeleteJobResponseObjectResource';
import { CatalogItemDeleteQueryResourceObject } from './catalogItemDeleteQueryResourceObject';
import { CatalogItemEnum } from './catalogItemEnum';
import { CatalogItemResponseObjectResource } from './catalogItemResponseObjectResource';
import { CatalogItemResponseObjectResourceAttributes } from './catalogItemResponseObjectResourceAttributes';
import { CatalogItemUpdateJobCreateQuery } from './catalogItemUpdateJobCreateQuery';
import { CatalogItemUpdateJobCreateQueryResourceObject } from './catalogItemUpdateJobCreateQueryResourceObject';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributes } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemUpdateJobResponseObjectResource } from './catalogItemUpdateJobResponseObjectResource';
import { CatalogItemUpdateQuery } from './catalogItemUpdateQuery';
import { CatalogItemUpdateQueryResourceObject } from './catalogItemUpdateQueryResourceObject';
import { CatalogItemUpdateQueryResourceObjectAttributes } from './catalogItemUpdateQueryResourceObjectAttributes';
import { CatalogVariantBulkCreateJobEnum } from './catalogVariantBulkCreateJobEnum';
import { CatalogVariantBulkDeleteJobEnum } from './catalogVariantBulkDeleteJobEnum';
import { CatalogVariantBulkUpdateJobEnum } from './catalogVariantBulkUpdateJobEnum';
import { CatalogVariantCreateJobCreateQuery } from './catalogVariantCreateJobCreateQuery';
import { CatalogVariantCreateJobCreateQueryResourceObject } from './catalogVariantCreateJobCreateQueryResourceObject';
import { CatalogVariantCreateJobCreateQueryResourceObjectAttributes } from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantCreateJobResponseObjectResource } from './catalogVariantCreateJobResponseObjectResource';
import { CatalogVariantCreateQuery } from './catalogVariantCreateQuery';
import { CatalogVariantCreateQueryResourceObject } from './catalogVariantCreateQueryResourceObject';
import { CatalogVariantCreateQueryResourceObjectAttributes } from './catalogVariantCreateQueryResourceObjectAttributes';
import { CatalogVariantCreateQueryResourceObjectRelationships } from './catalogVariantCreateQueryResourceObjectRelationships';
import { CatalogVariantCreateQueryResourceObjectRelationshipsItem } from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
import { CatalogVariantCreateQueryResourceObjectRelationshipsItemData } from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
import { CatalogVariantDeleteJobCreateQuery } from './catalogVariantDeleteJobCreateQuery';
import { CatalogVariantDeleteJobCreateQueryResourceObject } from './catalogVariantDeleteJobCreateQueryResourceObject';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributes } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantDeleteJobResponseObjectResource } from './catalogVariantDeleteJobResponseObjectResource';
import { CatalogVariantDeleteQueryResourceObject } from './catalogVariantDeleteQueryResourceObject';
import { CatalogVariantEnum } from './catalogVariantEnum';
import { CatalogVariantResponseObjectResource } from './catalogVariantResponseObjectResource';
import { CatalogVariantResponseObjectResourceAttributes } from './catalogVariantResponseObjectResourceAttributes';
import { CatalogVariantUpdateJobCreateQuery } from './catalogVariantUpdateJobCreateQuery';
import { CatalogVariantUpdateJobCreateQueryResourceObject } from './catalogVariantUpdateJobCreateQueryResourceObject';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributes } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantUpdateJobResponseObjectResource } from './catalogVariantUpdateJobResponseObjectResource';
import { CatalogVariantUpdateQuery } from './catalogVariantUpdateQuery';
import { CatalogVariantUpdateQueryResourceObject } from './catalogVariantUpdateQueryResourceObject';
import { CatalogVariantUpdateQueryResourceObjectAttributes } from './catalogVariantUpdateQueryResourceObjectAttributes';
import { CheckoutEnum } from './checkoutEnum';
import { CheckoutMethodFilter } from './checkoutMethodFilter';
import { CodeAction } from './codeAction';
import { CodeEnum } from './codeEnum';
import { CollectionLinks } from './collectionLinks';
import { ConditionGroup } from './conditionGroup';
import { ConditionGroupConditionsInner } from './conditionGroupConditionsInner';
import { ConditionalBranchAction } from './conditionalBranchAction';
import { ConditionalBranchActionData } from './conditionalBranchActionData';
import { ConditionalBranchActionDataProfileFilter } from './conditionalBranchActionDataProfileFilter';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import { ConditionalSplitEnum } from './conditionalSplitEnum';
import { ConstantContactEnum } from './constantContactEnum';
import { ConstantContactIntegrationFilter } from './constantContactIntegrationFilter';
import { ConstantContactIntegrationMethodFilter } from './constantContactIntegrationMethodFilter';
import { ContactInformation } from './contactInformation';
import { ContentRepeat } from './contentRepeat';
import { CountdownDelayAction } from './countdownDelayAction';
import { CountdownDelayActionData } from './countdownDelayActionData';
import { CountdownDelayEnum } from './countdownDelayEnum';
import { CouponCodeBulkCreateJobEnum } from './couponCodeBulkCreateJobEnum';
import { CouponCodeCreateJobCreateQuery } from './couponCodeCreateJobCreateQuery';
import { CouponCodeCreateJobCreateQueryResourceObject } from './couponCodeCreateJobCreateQueryResourceObject';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributes } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import { CouponCodeCreateJobResponseObjectResource } from './couponCodeCreateJobResponseObjectResource';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { CouponCodeCreateQuery } from './couponCodeCreateQuery';
import { CouponCodeCreateQueryResourceObject } from './couponCodeCreateQueryResourceObject';
import { CouponCodeCreateQueryResourceObjectAttributes } from './couponCodeCreateQueryResourceObjectAttributes';
import { CouponCodeCreateQueryResourceObjectRelationships } from './couponCodeCreateQueryResourceObjectRelationships';
import { CouponCodeCreateQueryResourceObjectRelationshipsCoupon } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import { CouponCodeEnum } from './couponCodeEnum';
import { CouponCodeResponseObjectResource } from './couponCodeResponseObjectResource';
import { CouponCodeResponseObjectResourceAttributes } from './couponCodeResponseObjectResourceAttributes';
import { CouponCodeUpdateQuery } from './couponCodeUpdateQuery';
import { CouponCodeUpdateQueryResourceObject } from './couponCodeUpdateQueryResourceObject';
import { CouponCodeUpdateQueryResourceObjectAttributes } from './couponCodeUpdateQueryResourceObjectAttributes';
import { CouponCreateQuery } from './couponCreateQuery';
import { CouponCreateQueryResourceObject } from './couponCreateQueryResourceObject';
import { CouponEnum } from './couponEnum';
import { CouponResponseObjectResource } from './couponResponseObjectResource';
import { CouponResponseObjectResourceAttributes } from './couponResponseObjectResourceAttributes';
import { CouponUpdateQuery } from './couponUpdateQuery';
import { CouponUpdateQueryResourceObject } from './couponUpdateQueryResourceObject';
import { CouponUpdateQueryResourceObjectAttributes } from './couponUpdateQueryResourceObjectAttributes';
import { CustomMetricCondition } from './customMetricCondition';
import { CustomMetricConditionFilter } from './customMetricConditionFilter';
import { CustomMetricCreateQuery } from './customMetricCreateQuery';
import { CustomMetricCreateQueryResourceObject } from './customMetricCreateQueryResourceObject';
import { CustomMetricCreateQueryResourceObjectAttributes } from './customMetricCreateQueryResourceObjectAttributes';
import { CustomMetricDefinition } from './customMetricDefinition';
import { CustomMetricEnum } from './customMetricEnum';
import { CustomMetricGroup } from './customMetricGroup';
import { CustomMetricPartialUpdateQuery } from './customMetricPartialUpdateQuery';
import { CustomMetricPartialUpdateQueryResourceObject } from './customMetricPartialUpdateQueryResourceObject';
import { CustomMetricPartialUpdateQueryResourceObjectAttributes } from './customMetricPartialUpdateQueryResourceObjectAttributes';
import { CustomMetricResponseObjectResource } from './customMetricResponseObjectResource';
import { CustomMetricResponseObjectResourceAttributes } from './customMetricResponseObjectResourceAttributes';
import { CustomSourceEnum } from './customSourceEnum';
import { CustomSourceFilter } from './customSourceFilter';
import { CustomTimeframe } from './customTimeframe';
import { CustomTrackingParamDTO } from './customTrackingParamDTO';
import { DataPrivacyCreateDeletionJobQuery } from './dataPrivacyCreateDeletionJobQuery';
import { DataPrivacyCreateDeletionJobQueryResourceObject } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';
import { DataPrivacyProfileQueryResourceObject } from './dataPrivacyProfileQueryResourceObject';
import { DataPrivacyProfileQueryResourceObjectAttributes } from './dataPrivacyProfileQueryResourceObjectAttributes';
import { DataSourceCreateQuery } from './dataSourceCreateQuery';
import { DataSourceCreateQueryResourceObject } from './dataSourceCreateQueryResourceObject';
import { DataSourceCreateQueryResourceObjectAttributes } from './dataSourceCreateQueryResourceObjectAttributes';
import { DataSourceEnum } from './dataSourceEnum';
import { DataSourceRecordBulkCreateJobCreateQuery } from './dataSourceRecordBulkCreateJobCreateQuery';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObject } from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
import { DataSourceRecordBulkCreateJobEnum } from './dataSourceRecordBulkCreateJobEnum';
import { DataSourceRecordEnum } from './dataSourceRecordEnum';
import { DataSourceRecordResourceObject } from './dataSourceRecordResourceObject';
import { DataSourceRecordResourceObjectAttributes } from './dataSourceRecordResourceObjectAttributes';
import { DataSourceResponseObjectResource } from './dataSourceResponseObjectResource';
import { DataSourceResponseObjectResourceAttributes } from './dataSourceResponseObjectResourceAttributes';
import { DateEnum } from './dateEnum';
import { DeepLinkEnum } from './deepLinkEnum';
import { DeleteTagGroupResponse } from './deleteTagGroupResponse';
import { DeviceMetadata } from './deviceMetadata';
import { DoubleOptinFilter } from './doubleOptinFilter';
import { DropShadowBlock } from './dropShadowBlock';
import { DropShadowEnum } from './dropShadowEnum';
import { DynamicEnum } from './dynamicEnum';
import { DynamicTrackingParam } from './dynamicTrackingParam';
import { EmailChannel } from './emailChannel';
import { EmailContent } from './emailContent';
import { EmailContentSubObject } from './emailContentSubObject';
import { EmailEnum } from './emailEnum';
import { EmailMarketing } from './emailMarketing';
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';
import { EmailMessageContent } from './emailMessageContent';
import { EmailMessageDefinition } from './emailMessageDefinition';
import { EmailSendOptions } from './emailSendOptions';
import { EmailSubscriptionParameters } from './emailSubscriptionParameters';
import { EmailUnsubscriptionParameters } from './emailUnsubscriptionParameters';
import { EqualsEnum } from './equalsEnum';
import { EqualsStringFilter } from './equalsStringFilter';
import { ErrorSource } from './errorSource';
import { EventBulkCreateEnum } from './eventBulkCreateEnum';
import { EventBulkCreateJobEnum } from './eventBulkCreateJobEnum';
import { EventCreateQueryV2 } from './eventCreateQueryV2';
import { EventCreateQueryV2ResourceObject } from './eventCreateQueryV2ResourceObject';
import { EventCreateQueryV2ResourceObjectAttributes } from './eventCreateQueryV2ResourceObjectAttributes';
import { EventCreateQueryV2ResourceObjectAttributesMetric } from './eventCreateQueryV2ResourceObjectAttributesMetric';
import { EventCreateQueryV2ResourceObjectAttributesProfile } from './eventCreateQueryV2ResourceObjectAttributesProfile';
import { EventEnum } from './eventEnum';
import { EventProfileCreateQueryResourceObject } from './eventProfileCreateQueryResourceObject';
import { EventProfileCreateQueryResourceObjectAttributes } from './eventProfileCreateQueryResourceObjectAttributes';
import { EventResponseObjectResource } from './eventResponseObjectResource';
import { EventResponseObjectResourceAttributes } from './eventResponseObjectResourceAttributes';
import { EventsBulkCreateJob } from './eventsBulkCreateJob';
import { EventsBulkCreateJobResourceObject } from './eventsBulkCreateJobResourceObject';
import { EventsBulkCreateJobResourceObjectAttributes } from './eventsBulkCreateJobResourceObjectAttributes';
import { EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import { EventsBulkCreateQueryResourceObject } from './eventsBulkCreateQueryResourceObject';
import { EventsBulkCreateQueryResourceObjectAttributes } from './eventsBulkCreateQueryResourceObjectAttributes';
import { EventsBulkCreateQueryResourceObjectAttributesEvents } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import { EventsBulkCreateQueryResourceObjectAttributesProfile } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import { ExistenceEnum } from './existenceEnum';
import { ExistenceOperatorFilter } from './existenceOperatorFilter';
import { FailedAgeGateEnum } from './failedAgeGateEnum';
import { FailedAgeGateMethodFilter } from './failedAgeGateMethodFilter';
import { FakeEnum } from './fakeEnum';
import { FalseOrMisleadingEnum } from './falseOrMisleadingEnum';
import { FeaturedEnum } from './featuredEnum';
import { FlowActionEnum } from './flowActionEnum';
import { FlowActionResponseObjectResource } from './flowActionResponseObjectResource';
import { FlowActionResponseObjectResourceAttributes } from './flowActionResponseObjectResourceAttributes';
import { FlowActionResponseObjectResourceAttributesBadgeOptions } from './flowActionResponseObjectResourceAttributesBadgeOptions';
import { FlowActionResponseObjectResourceAttributesTrackingOptions } from './flowActionResponseObjectResourceAttributesTrackingOptions';
import { FlowCreateQuery } from './flowCreateQuery';
import { FlowCreateQueryResourceObject } from './flowCreateQueryResourceObject';
import { FlowCreateQueryResourceObjectAttributes } from './flowCreateQueryResourceObjectAttributes';
import { FlowDefinition } from './flowDefinition';
import { FlowDefinitionActionsInner } from './flowDefinitionActionsInner';
import { FlowDefinitionProfileFilter } from './flowDefinitionProfileFilter';
import { FlowDefinitionProfileFilterConditionGroupsInner } from './flowDefinitionProfileFilterConditionGroupsInner';
import { FlowDefinitionProfileFilterConditionGroupsInnerConditionsInner } from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
import { FlowDefinitionTriggersInner } from './flowDefinitionTriggersInner';
import { FlowEmail } from './flowEmail';
import { FlowEmailAdditionalFilters } from './flowEmailAdditionalFilters';
import { FlowEmailAdditionalFiltersConditionGroupsInner } from './flowEmailAdditionalFiltersConditionGroupsInner';
import { FlowEmailAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowEmailTrackingOptions } from './flowEmailTrackingOptions';
import { FlowEnum } from './flowEnum';
import { FlowInternalAlert } from './flowInternalAlert';
import { FlowMessageEnum } from './flowMessageEnum';
import { FlowMessageResponseObjectResource } from './flowMessageResponseObjectResource';
import { FlowMessageResponseObjectResourceAttributes } from './flowMessageResponseObjectResourceAttributes';
import { FlowMessageResponseObjectResourceAttributesContent } from './flowMessageResponseObjectResourceAttributesContent';
import { FlowPushNotification } from './flowPushNotification';
import { FlowPushNotificationAdditionalFilters } from './flowPushNotificationAdditionalFilters';
import { FlowPushNotificationAdditionalFiltersConditionGroupsInner } from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
import { FlowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowPushNotificationBadgeOptions } from './flowPushNotificationBadgeOptions';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { FlowResponseObjectResourceAttributes } from './flowResponseObjectResourceAttributes';
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { FlowSeriesRequestDTO } from './flowSeriesRequestDTO';
import { FlowSeriesRequestDTOResourceObject } from './flowSeriesRequestDTOResourceObject';
import { FlowSeriesRequestDTOResourceObjectAttributes } from './flowSeriesRequestDTOResourceObjectAttributes';
import { FlowSms } from './flowSms';
import { FlowSmsAdditionalFilters } from './flowSmsAdditionalFilters';
import { FlowSmsAdditionalFiltersConditionGroupsInner } from './flowSmsAdditionalFiltersConditionGroupsInner';
import { FlowSmsAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowTrackingSettingDynamicParam } from './flowTrackingSettingDynamicParam';
import { FlowTrackingSettingStaticParam } from './flowTrackingSettingStaticParam';
import { FlowUpdateQuery } from './flowUpdateQuery';
import { FlowUpdateQueryResourceObject } from './flowUpdateQueryResourceObject';
import { FlowUpdateQueryResourceObjectAttributes } from './flowUpdateQueryResourceObjectAttributes';
import { FlowV2ResponseObjectResourceAttributes } from './flowV2ResponseObjectResourceAttributes';
import { FlowV2ResponseObjectResourceExtended } from './flowV2ResponseObjectResourceExtended';
import { FlowV2ResponseObjectResourceExtendedAttributes } from './flowV2ResponseObjectResourceExtendedAttributes';
import { FlowValuesReportEnum } from './flowValuesReportEnum';
import { FlowValuesRequestDTO } from './flowValuesRequestDTO';
import { FlowValuesRequestDTOResourceObject } from './flowValuesRequestDTOResourceObject';
import { FlowValuesRequestDTOResourceObjectAttributes } from './flowValuesRequestDTOResourceObjectAttributes';
import { FlowWebhook } from './flowWebhook';
import { FlowsProfileMetricCondition } from './flowsProfileMetricCondition';
import { FlowsProfileMetricConditionTimeframeFilter } from './flowsProfileMetricConditionTimeframeFilter';
import { FlowsSMSTrackingOptions } from './flowsSMSTrackingOptions';
import { FormEnum } from './formEnum';
import { FormMethodFilter } from './formMethodFilter';
import { FormResponseObjectResource } from './formResponseObjectResource';
import { FormResponseObjectResourceAttributes } from './formResponseObjectResourceAttributes';
import { FormSeriesReportEnum } from './formSeriesReportEnum';
import { FormSeriesRequestDTO } from './formSeriesRequestDTO';
import { FormSeriesRequestDTOResourceObject } from './formSeriesRequestDTOResourceObject';
import { FormSeriesRequestDTOResourceObjectAttributes } from './formSeriesRequestDTOResourceObjectAttributes';
import { FormValuesReportEnum } from './formValuesReportEnum';
import { FormValuesRequestDTO } from './formValuesRequestDTO';
import { FormValuesRequestDTOResourceObject } from './formValuesRequestDTOResourceObject';
import { FormValuesRequestDTOResourceObjectAttributes } from './formValuesRequestDTOResourceObjectAttributes';
import { FormVersionABTest } from './formVersionABTest';
import { FormVersionEnum } from './formVersionEnum';
import { FormVersionResponseObjectResource } from './formVersionResponseObjectResource';
import { FormVersionResponseObjectResourceAttributes } from './formVersionResponseObjectResourceAttributes';
import { GetAccountResponse } from './getAccountResponse';
import { GetAccountResponseCollection } from './getAccountResponseCollection';
import { GetAccounts4XXResponse } from './getAccounts4XXResponse';
import { GetAccounts4XXResponseErrorsInner } from './getAccounts4XXResponseErrorsInner';
import { GetAccounts4XXResponseErrorsInnerSource } from './getAccounts4XXResponseErrorsInnerSource';
import { GetBulkProfileSuppressionsCreateJobResponse } from './getBulkProfileSuppressionsCreateJobResponse';
import { GetBulkProfileSuppressionsCreateJobResponseCollection } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import { GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
import { GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
import { GetBulkProfileSuppressionsRemoveJobResponse } from './getBulkProfileSuppressionsRemoveJobResponse';
import { GetBulkProfileSuppressionsRemoveJobResponseCollection } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import { GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner } from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
import { GetCampaignMessageCampaignRelationshipResponse } from './getCampaignMessageCampaignRelationshipResponse';
import { GetCampaignMessageCampaignRelationshipResponseData } from './getCampaignMessageCampaignRelationshipResponseData';
import { GetCampaignMessageImageRelationshipResponse } from './getCampaignMessageImageRelationshipResponse';
import { GetCampaignMessageImageRelationshipResponseData } from './getCampaignMessageImageRelationshipResponseData';
import { GetCampaignMessageResponseCollectionCompoundDocument } from './getCampaignMessageResponseCollectionCompoundDocument';
import { GetCampaignMessageResponseCompoundDocument } from './getCampaignMessageResponseCompoundDocument';
import { GetCampaignMessageResponseCompoundDocumentData } from './getCampaignMessageResponseCompoundDocumentData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import {  } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import { GetCampaignMessageTemplateRelationshipResponse } from './getCampaignMessageTemplateRelationshipResponse';
import { GetCampaignMessagesRelationshipsResponseCollection } from './getCampaignMessagesRelationshipsResponseCollection';
import { GetCampaignMessagesRelationshipsResponseCollectionDataInner } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import { GetCampaignRecipientEstimationJobResponse } from './getCampaignRecipientEstimationJobResponse';
import { GetCampaignRecipientEstimationResponse } from './getCampaignRecipientEstimationResponse';
import { GetCampaignResponse } from './getCampaignResponse';
import { GetCampaignResponseCollectionCompoundDocument } from './getCampaignResponseCollectionCompoundDocument';
import { GetCampaignResponseCollectionCompoundDocumentDataInner } from './getCampaignResponseCollectionCompoundDocumentDataInner';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
import {  } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import { GetCampaignResponseCompoundDocument } from './getCampaignResponseCompoundDocument';
import { GetCampaignResponseData } from './getCampaignResponseData';
import { GetCampaignResponseDataAllOfRelationships } from './getCampaignResponseDataAllOfRelationships';
import { GetCampaignSendJobResponse } from './getCampaignSendJobResponse';
import { GetCampaignTagsRelationshipsResponseCollection } from './getCampaignTagsRelationshipsResponseCollection';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocument } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import { GetCatalogCategoryCreateJobResponseCompoundDocument } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import { GetCatalogCategoryDeleteJobResponse } from './getCatalogCategoryDeleteJobResponse';
import { GetCatalogCategoryDeleteJobResponseCollection } from './getCatalogCategoryDeleteJobResponseCollection';
import { GetCatalogCategoryDeleteJobResponseCollectionDataInner } from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
import { GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships } from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogCategoryItemsRelationshipsResponseCollection } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import { GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import { GetCatalogCategoryResponse } from './getCatalogCategoryResponse';
import { GetCatalogCategoryResponseCollection } from './getCatalogCategoryResponseCollection';
import { GetCatalogCategoryResponseCollectionDataInner } from './getCatalogCategoryResponseCollectionDataInner';
import { GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships } from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import { GetCatalogCategoryUpdateJobResponseCompoundDocument } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import { GetCatalogItemCategoriesRelationshipsResponseCollection } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import { GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocument } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import { GetCatalogItemCreateJobResponseCompoundDocument } from './getCatalogItemCreateJobResponseCompoundDocument';
import { GetCatalogItemDeleteJobResponse } from './getCatalogItemDeleteJobResponse';
import { GetCatalogItemDeleteJobResponseCollection } from './getCatalogItemDeleteJobResponseCollection';
import { GetCatalogItemDeleteJobResponseCollectionDataInner } from './getCatalogItemDeleteJobResponseCollectionDataInner';
import { GetCatalogItemResponseCollectionCompoundDocument } from './getCatalogItemResponseCollectionCompoundDocument';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogItemResponseCompoundDocument } from './getCatalogItemResponseCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocument } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import { GetCatalogItemUpdateJobResponseCompoundDocument } from './getCatalogItemUpdateJobResponseCompoundDocument';
import { GetCatalogItemVariantsRelationshipsResponseCollection } from './getCatalogItemVariantsRelationshipsResponseCollection';
import { GetCatalogItemVariantsRelationshipsResponseCollectionDataInner } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocument } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogVariantCreateJobResponseCompoundDocument } from './getCatalogVariantCreateJobResponseCompoundDocument';
import { GetCatalogVariantDeleteJobResponse } from './getCatalogVariantDeleteJobResponse';
import { GetCatalogVariantDeleteJobResponseCollection } from './getCatalogVariantDeleteJobResponseCollection';
import { GetCatalogVariantDeleteJobResponseCollectionDataInner } from './getCatalogVariantDeleteJobResponseCollectionDataInner';
import { GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships } from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogVariantResponse } from './getCatalogVariantResponse';
import { GetCatalogVariantResponseCollection } from './getCatalogVariantResponseCollection';
import { GetCatalogVariantResponseCollectionDataInner } from './getCatalogVariantResponseCollectionDataInner';
import { GetCatalogVariantResponseCollectionDataInnerAllOfRelationships } from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocument } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogVariantUpdateJobResponseCompoundDocument } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import { GetCouponCodeCouponRelationshipResponse } from './getCouponCodeCouponRelationshipResponse';
import { GetCouponCodeCouponRelationshipResponseData } from './getCouponCodeCouponRelationshipResponseData';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocument } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import { GetCouponCodeCreateJobResponseCompoundDocument } from './getCouponCodeCreateJobResponseCompoundDocument';
import { GetCouponCodeResponseCollection } from './getCouponCodeResponseCollection';
import { GetCouponCodeResponseCollectionCompoundDocument } from './getCouponCodeResponseCollectionCompoundDocument';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInner } from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetCouponCodeResponseCollectionDataInner } from './getCouponCodeResponseCollectionDataInner';
import { GetCouponCodeResponseCollectionDataInnerAllOfRelationships } from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
import { GetCouponCodeResponseCompoundDocument } from './getCouponCodeResponseCompoundDocument';
import { GetCouponCodesRelationshipsResponseCollection } from './getCouponCodesRelationshipsResponseCollection';
import { GetCouponCodesRelationshipsResponseCollectionDataInner } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import { GetCouponResponse } from './getCouponResponse';
import { GetCouponResponseCollection } from './getCouponResponseCollection';
import { GetCustomMetricMetricsRelationshipsResponseCollection } from './getCustomMetricMetricsRelationshipsResponseCollection';
import { GetCustomMetricResponse } from './getCustomMetricResponse';
import { GetCustomMetricResponseCollectionCompoundDocument } from './getCustomMetricResponseCollectionCompoundDocument';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInner } from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
import { GetCustomMetricResponseCompoundDocument } from './getCustomMetricResponseCompoundDocument';
import { GetCustomMetricResponseData } from './getCustomMetricResponseData';
import { GetCustomMetricResponseDataAllOfRelationships } from './getCustomMetricResponseDataAllOfRelationships';
import { GetDataSourceResponse } from './getDataSourceResponse';
import { GetDataSourceResponseCollection } from './getDataSourceResponseCollection';
import { GetEventMetricRelationshipResponse } from './getEventMetricRelationshipResponse';
import { GetEventProfileRelationshipResponse } from './getEventProfileRelationshipResponse';
import { GetEventProfileRelationshipResponseData } from './getEventProfileRelationshipResponseData';
import { GetEventResponseCollectionCompoundDocument } from './getEventResponseCollectionCompoundDocument';
import { GetEventResponseCollectionCompoundDocumentDataInner } from './getEventResponseCollectionCompoundDocumentDataInner';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import {  } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import { GetEventResponseCompoundDocument } from './getEventResponseCompoundDocument';
import { GetFlowActionFlowMessageRelationshipResponseCollection } from './getFlowActionFlowMessageRelationshipResponseCollection';
import { GetFlowActionFlowRelationshipResponse } from './getFlowActionFlowRelationshipResponse';
import { GetFlowActionResponse } from './getFlowActionResponse';
import { GetFlowActionResponseCollection } from './getFlowActionResponseCollection';
import { GetFlowActionResponseCollectionDataInner } from './getFlowActionResponseCollectionDataInner';
import { GetFlowActionResponseCollectionDataInnerAllOfRelationships } from './getFlowActionResponseCollectionDataInnerAllOfRelationships';
import { GetFlowActionResponseCompoundDocument } from './getFlowActionResponseCompoundDocument';
import { GetFlowActionResponseCompoundDocumentData } from './getFlowActionResponseCompoundDocumentData';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationships } from './getFlowActionResponseCompoundDocumentDataAllOfRelationships';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import {  } from './getFlowActionResponseCompoundDocumentIncludedInner';
import { GetFlowFlowActionRelationshipListResponseCollection } from './getFlowFlowActionRelationshipListResponseCollection';
import { GetFlowMessageActionRelationshipResponse } from './getFlowMessageActionRelationshipResponse';
import { GetFlowMessageResponseCollection } from './getFlowMessageResponseCollection';
import { GetFlowMessageResponseCollectionDataInner } from './getFlowMessageResponseCollectionDataInner';
import { GetFlowMessageResponseCollectionDataInnerAllOfRelationships } from './getFlowMessageResponseCollectionDataInnerAllOfRelationships';
import { GetFlowMessageResponseCompoundDocument } from './getFlowMessageResponseCompoundDocument';
import { GetFlowMessageResponseCompoundDocumentData } from './getFlowMessageResponseCompoundDocumentData';
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationships } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationships';
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import {  } from './getFlowMessageResponseCompoundDocumentIncludedInner';
import { GetFlowMessageTemplateRelationshipResponse } from './getFlowMessageTemplateRelationshipResponse';
import { GetFlowMessageTemplateRelationshipResponseData } from './getFlowMessageTemplateRelationshipResponseData';
import { GetFlowResponse } from './getFlowResponse';
import { GetFlowResponseCollection } from './getFlowResponseCollection';
import { GetFlowResponseCollectionCompoundDocument } from './getFlowResponseCollectionCompoundDocument';
import { GetFlowResponseCollectionCompoundDocumentDataInner } from './getFlowResponseCollectionCompoundDocumentDataInner';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import { GetFlowResponseCollectionDataInner } from './getFlowResponseCollectionDataInner';
import { GetFlowResponseCollectionDataInnerAllOfRelationships } from './getFlowResponseCollectionDataInnerAllOfRelationships';
import { GetFlowTagsRelationshipsResponseCollection } from './getFlowTagsRelationshipsResponseCollection';
import { GetFlowV2ResponseCompoundDocument } from './getFlowV2ResponseCompoundDocument';
import { GetFlowV2ResponseCompoundDocumentData } from './getFlowV2ResponseCompoundDocumentData';
import { GetFormResponse } from './getFormResponse';
import { GetFormResponseCollectionCompoundDocument } from './getFormResponseCollectionCompoundDocument';
import { GetFormResponseCollectionCompoundDocumentDataInner } from './getFormResponseCollectionCompoundDocumentDataInner';
import { GetFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetFormResponseCompoundDocument } from './getFormResponseCompoundDocument';
import { GetFormResponseCompoundDocumentData } from './getFormResponseCompoundDocumentData';
import { GetFormResponseCompoundDocumentDataAllOfRelationships } from './getFormResponseCompoundDocumentDataAllOfRelationships';
import { GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions } from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions';
import { GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner } from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner';
import { GetFormVersionFormRelationshipResponse } from './getFormVersionFormRelationshipResponse';
import { GetFormVersionFormRelationshipResponseData } from './getFormVersionFormRelationshipResponseData';
import { GetFormVersionResponse } from './getFormVersionResponse';
import { GetFormVersionResponseCollection } from './getFormVersionResponseCollection';
import { GetFormVersionsRelationshipsResponseCollection } from './getFormVersionsRelationshipsResponseCollection';
import { GetFormVersionsRelationshipsResponseCollectionDataInner } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import { GetImageResponse } from './getImageResponse';
import { GetImageResponseCollection } from './getImageResponseCollection';
import { GetImportErrorResponseCollection } from './getImportErrorResponseCollection';
import { GetListFlowTriggersRelationshipsResponseCollection } from './getListFlowTriggersRelationshipsResponseCollection';
import { GetListListResponseCollectionCompoundDocument } from './getListListResponseCollectionCompoundDocument';
import { GetListListResponseCollectionCompoundDocumentDataInner } from './getListListResponseCollectionCompoundDocumentDataInner';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import {  } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import { GetListMemberResponseCollection } from './getListMemberResponseCollection';
import { GetListMemberResponseCollectionDataInner } from './getListMemberResponseCollectionDataInner';
import { GetListProfilesRelationshipsResponseCollection } from './getListProfilesRelationshipsResponseCollection';
import { GetListResponseCollection } from './getListResponseCollection';
import { GetListResponseCollectionDataInner } from './getListResponseCollectionDataInner';
import { GetListResponseCollectionDataInnerAllOfRelationships } from './getListResponseCollectionDataInnerAllOfRelationships';
import { GetListRetrieveResponseCompoundDocument } from './getListRetrieveResponseCompoundDocument';
import { GetListRetrieveResponseCompoundDocumentData } from './getListRetrieveResponseCompoundDocumentData';
import { GetListTagsRelationshipsResponseCollection } from './getListTagsRelationshipsResponseCollection';
import { GetListTagsRelationshipsResponseCollectionDataInner } from './getListTagsRelationshipsResponseCollectionDataInner';
import { GetMappedMetricCustomMetricRelationshipResponse } from './getMappedMetricCustomMetricRelationshipResponse';
import { GetMappedMetricCustomMetricRelationshipResponseData } from './getMappedMetricCustomMetricRelationshipResponseData';
import { GetMappedMetricMetricRelationshipResponse } from './getMappedMetricMetricRelationshipResponse';
import { GetMappedMetricResponseCollectionCompoundDocument } from './getMappedMetricResponseCollectionCompoundDocument';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInner } from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import { GetMappedMetricResponseCompoundDocument } from './getMappedMetricResponseCompoundDocument';
import { GetMetricFlowTriggersRelationshipsResponseCollection } from './getMetricFlowTriggersRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollection } from './getMetricPropertiesRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollectionDataInner } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import { GetMetricPropertyMetricRelationshipResponse } from './getMetricPropertyMetricRelationshipResponse';
import { GetMetricPropertyResponseCollection } from './getMetricPropertyResponseCollection';
import { GetMetricPropertyResponseCollectionDataInner } from './getMetricPropertyResponseCollectionDataInner';
import { GetMetricPropertyResponseCollectionDataInnerAllOfRelationships } from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
import { GetMetricPropertyResponseCompoundDocument } from './getMetricPropertyResponseCompoundDocument';
import { GetMetricPropertyResponseCompoundDocumentData } from './getMetricPropertyResponseCompoundDocumentData';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
import { GetMetricResponse } from './getMetricResponse';
import { GetMetricResponseCollection } from './getMetricResponseCollection';
import { GetMetricResponseCollectionCompoundDocument } from './getMetricResponseCollectionCompoundDocument';
import { GetMetricResponseCollectionCompoundDocumentDataInner } from './getMetricResponseCollectionCompoundDocumentDataInner';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
import { GetMetricResponseCompoundDocument } from './getMetricResponseCompoundDocument';
import { GetMetricResponseData } from './getMetricResponseData';
import { GetMetricResponseDataAllOfRelationships } from './getMetricResponseDataAllOfRelationships';
import { GetProfileBulkImportJobListsRelationshipsResponseCollection } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import { GetProfileBulkImportJobProfilesRelationshipsResponseCollection } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import { GetProfileImportJobResponseCollectionCompoundDocument } from './getProfileImportJobResponseCollectionCompoundDocument';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import { GetProfileImportJobResponseCompoundDocument } from './getProfileImportJobResponseCompoundDocument';
import { GetProfileListsRelationshipsResponseCollection } from './getProfileListsRelationshipsResponseCollection';
import { GetProfileListsRelationshipsResponseCollectionDataInner } from './getProfileListsRelationshipsResponseCollectionDataInner';
import { GetProfilePushTokensRelationshipsResponseCollection } from './getProfilePushTokensRelationshipsResponseCollection';
import { GetProfilePushTokensRelationshipsResponseCollectionDataInner } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import { GetProfileResponse } from './getProfileResponse';
import { GetProfileResponseCollection } from './getProfileResponseCollection';
import { GetProfileResponseCollectionCompoundDocument } from './getProfileResponseCollectionCompoundDocument';
import { GetProfileResponseCollectionCompoundDocumentDataInner } from './getProfileResponseCollectionCompoundDocumentDataInner';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
import { GetProfileResponseCompoundDocument } from './getProfileResponseCompoundDocument';
import { GetProfileResponseCompoundDocumentData } from './getProfileResponseCompoundDocumentData';
import { GetProfileResponseCompoundDocumentDataAllOfRelationships } from './getProfileResponseCompoundDocumentDataAllOfRelationships';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
import {  } from './getProfileResponseCompoundDocumentIncludedInner';
import { GetProfileResponseData } from './getProfileResponseData';
import { GetProfileResponseDataAllOfRelationships } from './getProfileResponseDataAllOfRelationships';
import { GetProfileSegmentsRelationshipsResponseCollection } from './getProfileSegmentsRelationshipsResponseCollection';
import { GetPushTokenProfileRelationshipResponse } from './getPushTokenProfileRelationshipResponse';
import { GetPushTokenResponseCollection } from './getPushTokenResponseCollection';
import { GetPushTokenResponseCollectionCompoundDocument } from './getPushTokenResponseCollectionCompoundDocument';
import { GetPushTokenResponseCollectionCompoundDocumentDataInner } from './getPushTokenResponseCollectionCompoundDocumentDataInner';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import { GetPushTokenResponseCollectionDataInner } from './getPushTokenResponseCollectionDataInner';
import { GetPushTokenResponseCollectionDataInnerAllOfRelationships } from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
import { GetPushTokenResponseCompoundDocument } from './getPushTokenResponseCompoundDocument';
import { GetReviewResponseDTOCollectionCompoundDocument } from './getReviewResponseDTOCollectionCompoundDocument';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInner } from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
import { GetReviewResponseDTOCompoundDocument } from './getReviewResponseDTOCompoundDocument';
import { GetSegmentFlowTriggersRelationshipsResponseCollection } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import { GetSegmentListResponseCollectionCompoundDocument } from './getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentListResponseCollectionCompoundDocumentDataInner } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import { GetSegmentMemberResponseCollection } from './getSegmentMemberResponseCollection';
import { GetSegmentMemberResponseCollectionDataInner } from './getSegmentMemberResponseCollectionDataInner';
import { GetSegmentProfilesRelationshipsResponseCollection } from './getSegmentProfilesRelationshipsResponseCollection';
import { GetSegmentResponseCollection } from './getSegmentResponseCollection';
import { GetSegmentResponseCollectionDataInner } from './getSegmentResponseCollectionDataInner';
import { GetSegmentRetrieveResponseCompoundDocument } from './getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentRetrieveResponseCompoundDocumentData } from './getSegmentRetrieveResponseCompoundDocumentData';
import { GetSegmentTagsRelationshipsResponseCollection } from './getSegmentTagsRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollection } from './getTagCampaignRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollectionDataInner } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import { GetTagFlowRelationshipsResponseCollection } from './getTagFlowRelationshipsResponseCollection';
import { GetTagFlowRelationshipsResponseCollectionDataInner } from './getTagFlowRelationshipsResponseCollectionDataInner';
import { GetTagGroupRelationshipResponse } from './getTagGroupRelationshipResponse';
import { GetTagGroupRelationshipResponseData } from './getTagGroupRelationshipResponseData';
import { GetTagGroupResponse } from './getTagGroupResponse';
import { GetTagGroupResponseCollection } from './getTagGroupResponseCollection';
import { GetTagGroupResponseCollectionDataInner } from './getTagGroupResponseCollectionDataInner';
import { GetTagGroupResponseCollectionDataInnerAllOfRelationships } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import { GetTagGroupTagsRelationshipsResponseCollection } from './getTagGroupTagsRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollection } from './getTagListRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollectionDataInner } from './getTagListRelationshipsResponseCollectionDataInner';
import { GetTagResponseCollection } from './getTagResponseCollection';
import { GetTagResponseCollectionCompoundDocument } from './getTagResponseCollectionCompoundDocument';
import { GetTagResponseCollectionCompoundDocumentDataInner } from './getTagResponseCollectionCompoundDocumentDataInner';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
import { GetTagResponseCollectionDataInner } from './getTagResponseCollectionDataInner';
import { GetTagResponseCollectionDataInnerAllOfRelationships } from './getTagResponseCollectionDataInnerAllOfRelationships';
import { GetTagResponseCompoundDocument } from './getTagResponseCompoundDocument';
import { GetTagSegmentRelationshipsResponseCollection } from './getTagSegmentRelationshipsResponseCollection';
import { GetTagSegmentRelationshipsResponseCollectionDataInner } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import { GetTemplateResponse } from './getTemplateResponse';
import { GetTemplateResponseCollection } from './getTemplateResponseCollection';
import { GetTrackingSettingResponse } from './getTrackingSettingResponse';
import { GetTrackingSettingResponseCollection } from './getTrackingSettingResponseCollection';
import { GetUniversalContentResponse } from './getUniversalContentResponse';
import { GetUniversalContentResponseCollection } from './getUniversalContentResponseCollection';
import { GetWebFeedResponse } from './getWebFeedResponse';
import { GetWebFeedResponseCollection } from './getWebFeedResponseCollection';
import { GetWebhookResponseCollectionCompoundDocument } from './getWebhookResponseCollectionCompoundDocument';
import { GetWebhookResponseCollectionCompoundDocumentDataInner } from './getWebhookResponseCollectionCompoundDocumentDataInner';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
import { GetWebhookResponseCompoundDocument } from './getWebhookResponseCompoundDocument';
import { GetWebhookTopicResponse } from './getWebhookTopicResponse';
import { GetWebhookTopicResponseCollection } from './getWebhookTopicResponseCollection';
import { GreaterThanEnum } from './greaterThanEnum';
import { GreaterThanPositiveNumericFilter } from './greaterThanPositiveNumericFilter';
import { HTMLBlock } from './hTMLBlock';
import { HTMLBlockData } from './hTMLBlockData';
import { HasEmailMarketing } from './hasEmailMarketing';
import { HasEmailMarketingConsent } from './hasEmailMarketingConsent';
import { HasEmailMarketingConsentConsentStatus } from './hasEmailMarketingConsentConsentStatus';
import { HasEmailMarketingNeverSubscribed } from './hasEmailMarketingNeverSubscribed';
import { HasEmailMarketingSubscribed } from './hasEmailMarketingSubscribed';
import { HasEmailMarketingSubscribedFiltersInner } from './hasEmailMarketingSubscribedFiltersInner';
import { HasPushMarketing } from './hasPushMarketing';
import { HasPushMarketingConsent } from './hasPushMarketingConsent';
import { HasSMSMarketingConsent } from './hasSMSMarketingConsent';
import { HasSMSMarketingSubscribed } from './hasSMSMarketingSubscribed';
import { HasSMSMarketingSubscribedFiltersInner } from './hasSMSMarketingSubscribedFiltersInner';
import { HeaderBlock } from './headerBlock';
import { HeaderEnum } from './headerEnum';
import { HorizontalRuleBlock } from './horizontalRuleBlock';
import { HorizontalRuleEnum } from './horizontalRuleEnum';
import { HtmlEnum } from './htmlEnum';
import { ImageBlock } from './imageBlock';
import { ImageCreateQuery } from './imageCreateQuery';
import { ImageCreateQueryResourceObject } from './imageCreateQueryResourceObject';
import { ImageCreateQueryResourceObjectAttributes } from './imageCreateQueryResourceObjectAttributes';
import { ImageEnum } from './imageEnum';
import { ImagePartialUpdateQuery } from './imagePartialUpdateQuery';
import { ImagePartialUpdateQueryResourceObject } from './imagePartialUpdateQueryResourceObject';
import { ImagePartialUpdateQueryResourceObjectAttributes } from './imagePartialUpdateQueryResourceObjectAttributes';
import { ImageResponseObjectResource } from './imageResponseObjectResource';
import { ImageResponseObjectResourceAttributes } from './imageResponseObjectResourceAttributes';
import { ImmediateEnum } from './immediateEnum';
import { ImmediateSendStrategy } from './immediateSendStrategy';
import { ImportErrorEnum } from './importErrorEnum';
import { ImportErrorResponseObjectResource } from './importErrorResponseObjectResource';
import { ImportErrorResponseObjectResourceAttributes } from './importErrorResponseObjectResourceAttributes';
import { InEnum } from './inEnum';
import { InStringArrayFilter } from './inStringArrayFilter';
import { InTheLastBaseRelativeDateFilter } from './inTheLastBaseRelativeDateFilter';
import { InTheLastEnum } from './inTheLastEnum';
import { InboundMessageEnum } from './inboundMessageEnum';
import { InboundMessageMethodFilter } from './inboundMessageMethodFilter';
import { Increment } from './increment';
import { IncrementOneEnum } from './incrementOneEnum';
import { IntegrationEnum } from './integrationEnum';
import { InternalServiceAction } from './internalServiceAction';
import { InternalServiceEnum } from './internalServiceEnum';
import { InvalidEmailDateEnum } from './invalidEmailDateEnum';
import { InvalidEmailDateFilter } from './invalidEmailDateFilter';
import { IsDoubleOptInEnum } from './isDoubleOptInEnum';
import { IsSetEnum } from './isSetEnum';
import { IsSetExistenceFilter } from './isSetExistenceFilter';
import { LessThanEnum } from './lessThanEnum';
import { LessThanPositiveNumericFilter } from './lessThanPositiveNumericFilter';
import { Link } from './link';
import { ListContainsOperatorFilter } from './listContainsOperatorFilter';
import { ListCreateQuery } from './listCreateQuery';
import { ListCreateQueryResourceObject } from './listCreateQueryResourceObject';
import { ListCreateQueryResourceObjectAttributes } from './listCreateQueryResourceObjectAttributes';
import { ListEnum } from './listEnum';
import { ListLengthFilter } from './listLengthFilter';
import { ListListResponseObjectResource } from './listListResponseObjectResource';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceAttributes } from './listMemberResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceExtended } from './listMemberResponseObjectResourceExtended';
import { ListMemberResponseObjectResourceExtendedAttributes } from './listMemberResponseObjectResourceExtendedAttributes';
import { ListMembersAddQuery } from './listMembersAddQuery';
import { ListMembersDeleteQuery } from './listMembersDeleteQuery';
import { ListPartialUpdateQuery } from './listPartialUpdateQuery';
import { ListPartialUpdateQueryResourceObject } from './listPartialUpdateQueryResourceObject';
import { ListRegexOperatorContainsFilter } from './listRegexOperatorContainsFilter';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';
import { ListRetrieveResponseObjectResourceExtended } from './listRetrieveResponseObjectResourceExtended';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { ListSetFilter } from './listSetFilter';
import { ListSubstringFilter } from './listSubstringFilter';
import { ListTrigger } from './listTrigger';
import { ListUpdateAction } from './listUpdateAction';
import { ListUpdateActionData } from './listUpdateActionData';
import { ListUpdateEnum } from './listUpdateEnum';
import { LocalStaticSend } from './localStaticSend';
import { LowInventoryCondition } from './lowInventoryCondition';
import { LowInventoryConditionFilter } from './lowInventoryConditionFilter';
import { LowInventoryConditionGroup } from './lowInventoryConditionGroup';
import { LowInventoryEnum } from './lowInventoryEnum';
import { LowInventoryPropertyEnum } from './lowInventoryPropertyEnum';
import { LowInventoryTrigger } from './lowInventoryTrigger';
import { MailboxProviderEnum } from './mailboxProviderEnum';
import { MailboxProviderMethodFilter } from './mailboxProviderMethodFilter';
import { ManualAddEnum } from './manualAddEnum';
import { ManualAddMethodFilter } from './manualAddMethodFilter';
import { ManualImportEnum } from './manualImportEnum';
import { ManualImportMethodFilter } from './manualImportMethodFilter';
import { ManualRemoveEnum } from './manualRemoveEnum';
import { ManualRemoveMethodFilter } from './manualRemoveMethodFilter';
import { ManualSuppressionDateEnum } from './manualSuppressionDateEnum';
import { ManualSuppressionDateFilter } from './manualSuppressionDateFilter';
import { MappedMetricEnum } from './mappedMetricEnum';
import { MappedMetricPartialUpdateQuery } from './mappedMetricPartialUpdateQuery';
import { MappedMetricPartialUpdateQueryResourceObject } from './mappedMetricPartialUpdateQueryResourceObject';
import { MappedMetricPartialUpdateQueryResourceObjectRelationships } from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
import { MappedMetricResponseObjectResource } from './mappedMetricResponseObjectResource';
import { MappedMetricResponseObjectResourceAttributes } from './mappedMetricResponseObjectResourceAttributes';
import { MessageBlockedEnum } from './messageBlockedEnum';
import { MessageBlockedMethodFilter } from './messageBlockedMethodFilter';
import { MethodEnum } from './methodEnum';
import { MetricAggregateEnum } from './metricAggregateEnum';
import { MetricAggregateQuery } from './metricAggregateQuery';
import { MetricAggregateQueryResourceObject } from './metricAggregateQueryResourceObject';
import { MetricAggregateQueryResourceObjectAttributes } from './metricAggregateQueryResourceObjectAttributes';
import { MetricAggregateRowDTO } from './metricAggregateRowDTO';
import { MetricCreateQueryResourceObject } from './metricCreateQueryResourceObject';
import { MetricCreateQueryResourceObjectAttributes } from './metricCreateQueryResourceObjectAttributes';
import { MetricEnum } from './metricEnum';
import { MetricPropertyCondition } from './metricPropertyCondition';
import { MetricPropertyConditionFilter } from './metricPropertyConditionFilter';
import { MetricPropertyConditionGroup } from './metricPropertyConditionGroup';
import { MetricPropertyEnum } from './metricPropertyEnum';
import { MetricPropertyResponseObjectResourceAttributes } from './metricPropertyResponseObjectResourceAttributes';
import { MetricPropertyResponseObjectResourceExtended } from './metricPropertyResponseObjectResourceExtended';
import { MetricPropertyResponseObjectResourceExtendedAttributes } from './metricPropertyResponseObjectResourceExtendedAttributes';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { MetricResponseObjectResourceAttributes } from './metricResponseObjectResourceAttributes';
import { MetricTrigger } from './metricTrigger';
import { MobilePushBadge } from './mobilePushBadge';
import { MobilePushBadgeBadgeOptions } from './mobilePushBadgeBadgeOptions';
import { MobilePushContent } from './mobilePushContent';
import { MobilePushContentCreate } from './mobilePushContentCreate';
import { MobilePushContentUpdate } from './mobilePushContentUpdate';
import { MobilePushEnum } from './mobilePushEnum';
import { MobilePushMessageContent } from './mobilePushMessageContent';
import { MobilePushMessageSilentDefinition } from './mobilePushMessageSilentDefinition';
import { MobilePushMessageSilentDefinitionCreate } from './mobilePushMessageSilentDefinitionCreate';
import { MobilePushMessageSilentDefinitionUpdate } from './mobilePushMessageSilentDefinitionUpdate';
import { MobilePushMessageStandardDefinition } from './mobilePushMessageStandardDefinition';
import { MobilePushMessageStandardDefinitionCreate } from './mobilePushMessageStandardDefinitionCreate';
import { MobilePushMessageStandardDefinitionUpdate } from './mobilePushMessageStandardDefinitionUpdate';
import { MobilePushNoBadge } from './mobilePushNoBadge';
import { MobilePushOptions } from './mobilePushOptions';
import { MobilePushOptionsBadge } from './mobilePushOptionsBadge';
import { MobilePushOptionsOnOpen } from './mobilePushOptionsOnOpen';
import { NeverSubscribedEnum } from './neverSubscribedEnum';
import { NoEmailMarketing } from './noEmailMarketing';
import { NoEmailMarketingConsent } from './noEmailMarketingConsent';
import { NoEmailMarketingConsentConsentStatus } from './noEmailMarketingConsentConsentStatus';
import { NoEmailMarketingFiltersInner } from './noEmailMarketingFiltersInner';
import { NoEmailMarketingNeverSubscribed } from './noEmailMarketingNeverSubscribed';
import { NoEmailMarketingSubscribed } from './noEmailMarketingSubscribed';
import { NoEmailMarketingUnsubscribed } from './noEmailMarketingUnsubscribed';
import { NoEmailMarketingUnsubscribedFiltersInner } from './noEmailMarketingUnsubscribedFiltersInner';
import { NoPushMarketing } from './noPushMarketing';
import { NoPushMarketingConsent } from './noPushMarketingConsent';
import { NoSMSMarketing } from './noSMSMarketing';
import { NoSMSMarketingConsent } from './noSMSMarketingConsent';
import { NoSMSMarketingConsentConsentStatus } from './noSMSMarketingConsentConsentStatus';
import { NoSMSMarketingNeverSubscribed } from './noSMSMarketingNeverSubscribed';
import { NoSMSMarketingUnsubscribed } from './noSMSMarketingUnsubscribed';
import { NoSMSMarketingUnsubscribedFiltersInner } from './noSMSMarketingUnsubscribedFiltersInner';
import { NonLocalStaticSend } from './nonLocalStaticSend';
import { NotEqualsEnum } from './notEqualsEnum';
import { NumericEnum } from './numericEnum';
import { NumericOperatorFilter } from './numericOperatorFilter';
import { NumericRangeFilter } from './numericRangeFilter';
import { ObjectLinks } from './objectLinks';
import { OnlyRelatedLinks } from './onlyRelatedLinks';
import { OnsiteProfileCreateQueryResourceObject } from './onsiteProfileCreateQueryResourceObject';
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { OnsiteProfileMeta } from './onsiteProfileMeta';
import { OpenAppEnum } from './openAppEnum';
import { OtherEnum } from './otherEnum';
import { PatchCampaignMessageResponse } from './patchCampaignMessageResponse';
import { PatchCampaignMessageResponseData } from './patchCampaignMessageResponseData';
import { PatchCampaignResponse } from './patchCampaignResponse';
import { PatchCatalogCategoryResponse } from './patchCatalogCategoryResponse';
import { PatchCatalogItemResponse } from './patchCatalogItemResponse';
import { PatchCatalogVariantResponse } from './patchCatalogVariantResponse';
import { PatchCouponCodeResponse } from './patchCouponCodeResponse';
import { PatchCouponResponse } from './patchCouponResponse';
import { PatchCustomMetricResponse } from './patchCustomMetricResponse';
import { PatchFlowResponse } from './patchFlowResponse';
import { PatchFlowResponseData } from './patchFlowResponseData';
import { PatchImageResponse } from './patchImageResponse';
import { PatchListPartialUpdateResponse } from './patchListPartialUpdateResponse';
import { PatchMappedMetricResponse } from './patchMappedMetricResponse';
import { PatchMappedMetricResponseData } from './patchMappedMetricResponseData';
import { PatchProfileResponse } from './patchProfileResponse';
import { PatchReviewResponseDTO } from './patchReviewResponseDTO';
import { PatchReviewResponseDTOData } from './patchReviewResponseDTOData';
import { PatchReviewResponseDTODataRelationships } from './patchReviewResponseDTODataRelationships';
import { PatchReviewResponseDTODataRelationshipsItem } from './patchReviewResponseDTODataRelationshipsItem';
import { PatchReviewResponseDTODataRelationshipsItemData } from './patchReviewResponseDTODataRelationshipsItemData';
import { PatchSegmentPartialUpdateResponse } from './patchSegmentPartialUpdateResponse';
import { PatchTagGroupResponse } from './patchTagGroupResponse';
import { PatchTemplateResponse } from './patchTemplateResponse';
import { PatchTrackingSettingResponse } from './patchTrackingSettingResponse';
import { PatchTrackingSettingResponseData } from './patchTrackingSettingResponseData';
import { PatchUniversalContentResponse } from './patchUniversalContentResponse';
import { PatchWebFeedResponse } from './patchWebFeedResponse';
import { PatchWebhookResponse } from './patchWebhookResponse';
import { PendingEnum } from './pendingEnum';
import { PostBulkProfileSuppressionsCreateJobResponse } from './postBulkProfileSuppressionsCreateJobResponse';
import { PostBulkProfileSuppressionsCreateJobResponseData } from './postBulkProfileSuppressionsCreateJobResponseData';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationships } from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
import { PostBulkProfileSuppressionsRemoveJobResponse } from './postBulkProfileSuppressionsRemoveJobResponse';
import { PostBulkProfileSuppressionsRemoveJobResponseData } from './postBulkProfileSuppressionsRemoveJobResponseData';
import { PostCampaignMessageResponse } from './postCampaignMessageResponse';
import { PostCampaignMessageResponseData } from './postCampaignMessageResponseData';
import { PostCampaignMessageResponseDataAttributes } from './postCampaignMessageResponseDataAttributes';
import { PostCampaignMessageResponseDataAttributesContent } from './postCampaignMessageResponseDataAttributesContent';
import { PostCampaignMessageResponseDataRelationships } from './postCampaignMessageResponseDataRelationships';
import { PostCampaignRecipientEstimationJobResponse } from './postCampaignRecipientEstimationJobResponse';
import { PostCampaignRecipientEstimationJobResponseData } from './postCampaignRecipientEstimationJobResponseData';
import { PostCampaignResponse } from './postCampaignResponse';
import { PostCampaignResponseData } from './postCampaignResponseData';
import { PostCampaignSendJobResponse } from './postCampaignSendJobResponse';
import { PostCampaignSendJobResponseData } from './postCampaignSendJobResponseData';
import { PostCampaignValuesResponseDTO } from './postCampaignValuesResponseDTO';
import { PostCampaignValuesResponseDTOData } from './postCampaignValuesResponseDTOData';
import { PostCampaignValuesResponseDTODataAttributes } from './postCampaignValuesResponseDTODataAttributes';
import { PostCampaignValuesResponseDTODataRelationships } from './postCampaignValuesResponseDTODataRelationships';
import { PostCatalogCategoryCreateJobResponse } from './postCatalogCategoryCreateJobResponse';
import { PostCatalogCategoryCreateJobResponseData } from './postCatalogCategoryCreateJobResponseData';
import { PostCatalogCategoryDeleteJobResponse } from './postCatalogCategoryDeleteJobResponse';
import { PostCatalogCategoryDeleteJobResponseData } from './postCatalogCategoryDeleteJobResponseData';
import { PostCatalogCategoryDeleteJobResponseDataRelationships } from './postCatalogCategoryDeleteJobResponseDataRelationships';
import { PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
import { PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
import { PostCatalogCategoryResponse } from './postCatalogCategoryResponse';
import { PostCatalogCategoryResponseData } from './postCatalogCategoryResponseData';
import { PostCatalogCategoryResponseDataRelationships } from './postCatalogCategoryResponseDataRelationships';
import { PostCatalogCategoryResponseDataRelationshipsItems } from './postCatalogCategoryResponseDataRelationshipsItems';
import { PostCatalogCategoryUpdateJobResponse } from './postCatalogCategoryUpdateJobResponse';
import { PostCatalogCategoryUpdateJobResponseData } from './postCatalogCategoryUpdateJobResponseData';
import { PostCatalogItemCreateJobResponse } from './postCatalogItemCreateJobResponse';
import { PostCatalogItemCreateJobResponseData } from './postCatalogItemCreateJobResponseData';
import { PostCatalogItemDeleteJobResponse } from './postCatalogItemDeleteJobResponse';
import { PostCatalogItemDeleteJobResponseData } from './postCatalogItemDeleteJobResponseData';
import { PostCatalogItemDeleteJobResponseDataRelationships } from './postCatalogItemDeleteJobResponseDataRelationships';
import { PostCatalogItemDeleteJobResponseDataRelationshipsItems } from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
import { PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner } from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
import { PostCatalogItemResponse } from './postCatalogItemResponse';
import { PostCatalogItemResponseData } from './postCatalogItemResponseData';
import { PostCatalogItemUpdateJobResponse } from './postCatalogItemUpdateJobResponse';
import { PostCatalogItemUpdateJobResponseData } from './postCatalogItemUpdateJobResponseData';
import { PostCatalogVariantCreateJobResponse } from './postCatalogVariantCreateJobResponse';
import { PostCatalogVariantCreateJobResponseData } from './postCatalogVariantCreateJobResponseData';
import { PostCatalogVariantDeleteJobResponse } from './postCatalogVariantDeleteJobResponse';
import { PostCatalogVariantDeleteJobResponseData } from './postCatalogVariantDeleteJobResponseData';
import { PostCatalogVariantDeleteJobResponseDataRelationships } from './postCatalogVariantDeleteJobResponseDataRelationships';
import { PostCatalogVariantDeleteJobResponseDataRelationshipsVariants } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
import { PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
import { PostCatalogVariantResponse } from './postCatalogVariantResponse';
import { PostCatalogVariantResponseData } from './postCatalogVariantResponseData';
import { PostCatalogVariantResponseDataRelationships } from './postCatalogVariantResponseDataRelationships';
import { PostCatalogVariantResponseDataRelationshipsItem } from './postCatalogVariantResponseDataRelationshipsItem';
import { PostCatalogVariantResponseDataRelationshipsItemData } from './postCatalogVariantResponseDataRelationshipsItemData';
import { PostCatalogVariantUpdateJobResponse } from './postCatalogVariantUpdateJobResponse';
import { PostCatalogVariantUpdateJobResponseData } from './postCatalogVariantUpdateJobResponseData';
import { PostCouponCodeCreateJobResponse } from './postCouponCodeCreateJobResponse';
import { PostCouponCodeCreateJobResponseData } from './postCouponCodeCreateJobResponseData';
import { PostCouponCodeResponse } from './postCouponCodeResponse';
import { PostCouponCodeResponseData } from './postCouponCodeResponseData';
import { PostCouponCodeResponseDataRelationships } from './postCouponCodeResponseDataRelationships';
import { PostCouponCodeResponseDataRelationshipsProfile } from './postCouponCodeResponseDataRelationshipsProfile';
import { PostCouponCodeResponseDataRelationshipsProfileData } from './postCouponCodeResponseDataRelationshipsProfileData';
import { PostCouponResponse } from './postCouponResponse';
import { PostCouponResponseData } from './postCouponResponseData';
import { PostCustomMetricResponse } from './postCustomMetricResponse';
import { PostCustomMetricResponseData } from './postCustomMetricResponseData';
import { PostDataSourceResponse } from './postDataSourceResponse';
import { PostDataSourceResponseData } from './postDataSourceResponseData';
import { PostFlowSeriesResponseDTO } from './postFlowSeriesResponseDTO';
import { PostFlowSeriesResponseDTOData } from './postFlowSeriesResponseDTOData';
import { PostFlowSeriesResponseDTODataAttributes } from './postFlowSeriesResponseDTODataAttributes';
import { PostFlowV2Response } from './postFlowV2Response';
import { PostFlowV2ResponseData } from './postFlowV2ResponseData';
import { PostFlowV2ResponseDataAttributes } from './postFlowV2ResponseDataAttributes';
import { PostFlowValuesResponseDTO } from './postFlowValuesResponseDTO';
import { PostFlowValuesResponseDTOData } from './postFlowValuesResponseDTOData';
import { PostFlowValuesResponseDTODataAttributes } from './postFlowValuesResponseDTODataAttributes';
import { PostFlowValuesResponseDTODataRelationships } from './postFlowValuesResponseDTODataRelationships';
import { PostFormSeriesResponseDTO } from './postFormSeriesResponseDTO';
import { PostFormSeriesResponseDTOData } from './postFormSeriesResponseDTOData';
import { PostFormSeriesResponseDTODataAttributes } from './postFormSeriesResponseDTODataAttributes';
import { PostFormValuesResponseDTO } from './postFormValuesResponseDTO';
import { PostFormValuesResponseDTOData } from './postFormValuesResponseDTOData';
import { PostFormValuesResponseDTODataAttributes } from './postFormValuesResponseDTODataAttributes';
import { PostImageResponse } from './postImageResponse';
import { PostImageResponseData } from './postImageResponseData';
import { PostListCreateResponse } from './postListCreateResponse';
import { PostListCreateResponseData } from './postListCreateResponseData';
import { PostListCreateResponseDataRelationships } from './postListCreateResponseDataRelationships';
import { PostListCreateResponseDataRelationshipsProfiles } from './postListCreateResponseDataRelationshipsProfiles';
import { PostListCreateResponseDataRelationshipsProfilesDataInner } from './postListCreateResponseDataRelationshipsProfilesDataInner';
import { PostMetricAggregateResponse } from './postMetricAggregateResponse';
import { PostMetricAggregateResponseData } from './postMetricAggregateResponseData';
import { PostMetricAggregateResponseDataAttributes } from './postMetricAggregateResponseDataAttributes';
import { PostProfileImportJobResponse } from './postProfileImportJobResponse';
import { PostProfileImportJobResponseData } from './postProfileImportJobResponseData';
import { PostProfileImportJobResponseDataRelationships } from './postProfileImportJobResponseDataRelationships';
import { PostProfileImportJobResponseDataRelationshipsImportErrors } from './postProfileImportJobResponseDataRelationshipsImportErrors';
import { PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner } from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
import { PostProfileImportJobResponseDataRelationshipsProfiles } from './postProfileImportJobResponseDataRelationshipsProfiles';
import { PostProfileImportJobResponseDataRelationshipsProfilesDataInner } from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
import { PostProfileMergeResponse } from './postProfileMergeResponse';
import { PostProfileMergeResponseData } from './postProfileMergeResponseData';
import { PostProfileResponse } from './postProfileResponse';
import { PostProfileResponseData } from './postProfileResponseData';
import { PostProfileResponseDataAttributes } from './postProfileResponseDataAttributes';
import { PostSegmentCreateResponse } from './postSegmentCreateResponse';
import { PostSegmentCreateResponseData } from './postSegmentCreateResponseData';
import { PostSegmentSeriesResponseDTO } from './postSegmentSeriesResponseDTO';
import { PostSegmentSeriesResponseDTOData } from './postSegmentSeriesResponseDTOData';
import { PostSegmentSeriesResponseDTODataAttributes } from './postSegmentSeriesResponseDTODataAttributes';
import { PostSegmentValuesResponseDTO } from './postSegmentValuesResponseDTO';
import { PostSegmentValuesResponseDTOData } from './postSegmentValuesResponseDTOData';
import { PostSegmentValuesResponseDTODataAttributes } from './postSegmentValuesResponseDTODataAttributes';
import { PostTagGroupResponse } from './postTagGroupResponse';
import { PostTagGroupResponseData } from './postTagGroupResponseData';
import { PostTagGroupResponseDataRelationships } from './postTagGroupResponseDataRelationships';
import { PostTagResponse } from './postTagResponse';
import { PostTagResponseData } from './postTagResponseData';
import { PostTagResponseDataRelationships } from './postTagResponseDataRelationships';
import { PostTagResponseDataRelationshipsCampaigns } from './postTagResponseDataRelationshipsCampaigns';
import { PostTagResponseDataRelationshipsCampaignsDataInner } from './postTagResponseDataRelationshipsCampaignsDataInner';
import { PostTemplateResponse } from './postTemplateResponse';
import { PostTemplateResponseData } from './postTemplateResponseData';
import { PostUniversalContentResponse } from './postUniversalContentResponse';
import { PostUniversalContentResponseData } from './postUniversalContentResponseData';
import { PostWebFeedResponse } from './postWebFeedResponse';
import { PostWebFeedResponseData } from './postWebFeedResponseData';
import { PostWebhookResponse } from './postWebhookResponse';
import { PostWebhookResponseData } from './postWebhookResponseData';
import { PredictiveAnalytics } from './predictiveAnalytics';
import { PreferencePageEnum } from './preferencePageEnum';
import { PreferencePageFilter } from './preferencePageFilter';
import { PreferencePageMethodFilter } from './preferencePageMethodFilter';
import { PriceDropCondition } from './priceDropCondition';
import { PriceDropConditionFilter } from './priceDropConditionFilter';
import { PriceDropConditionGroup } from './priceDropConditionGroup';
import { PriceDropEnum } from './priceDropEnum';
import { PriceDropPropertyEnum } from './priceDropPropertyEnum';
import { PriceDropTrigger } from './priceDropTrigger';
import { PriorityEnum } from './priorityEnum';
import { PrivateInformationEnum } from './privateInformationEnum';
import { ProductBlock } from './productBlock';
import { ProductEnum } from './productEnum';
import { ProfanityOrInappropriateEnum } from './profanityOrInappropriateEnum';
import { ProfileBulkImportJobEnum } from './profileBulkImportJobEnum';
import { ProfileCreateQuery } from './profileCreateQuery';
import { ProfileCreateQueryResourceObject } from './profileCreateQueryResourceObject';
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
import { ProfileGroupMembershipEnum } from './profileGroupMembershipEnum';
import { ProfileHasGroupMembershipCondition } from './profileHasGroupMembershipCondition';
import { ProfileHasGroupMembershipConditionTimeframeFilter } from './profileHasGroupMembershipConditionTimeframeFilter';
import { ProfileHasNotReceivedEmailMessageCondition } from './profileHasNotReceivedEmailMessageCondition';
import { ProfileHasNotReceivedPushMessageCondition } from './profileHasNotReceivedPushMessageCondition';
import { ProfileHasNotReceivedSmsMessageCondition } from './profileHasNotReceivedSmsMessageCondition';
import { ProfileIdentifierDTOResourceObject } from './profileIdentifierDTOResourceObject';
import { ProfileIdentifierDTOResourceObjectAttributes } from './profileIdentifierDTOResourceObjectAttributes';
import { ProfileImportJobCreateQuery } from './profileImportJobCreateQuery';
import { ProfileImportJobCreateQueryResourceObject } from './profileImportJobCreateQueryResourceObject';
import { ProfileImportJobCreateQueryResourceObjectAttributes } from './profileImportJobCreateQueryResourceObjectAttributes';
import { ProfileImportJobCreateQueryResourceObjectAttributesProfiles } from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
import { ProfileImportJobCreateQueryResourceObjectRelationships } from './profileImportJobCreateQueryResourceObjectRelationships';
import { ProfileImportJobCreateQueryResourceObjectRelationshipsLists } from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
import { ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner } from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
import { ProfileImportJobResponseObjectResource } from './profileImportJobResponseObjectResource';
import { ProfileImportJobResponseObjectResourceAttributes } from './profileImportJobResponseObjectResourceAttributes';
import { ProfileLocation } from './profileLocation';
import { ProfileMarketingConsentCondition } from './profileMarketingConsentCondition';
import { ProfileMarketingConsentConditionConsent } from './profileMarketingConsentConditionConsent';
import { ProfileMarketingConsentEnum } from './profileMarketingConsentEnum';
import { ProfileMergeEnum } from './profileMergeEnum';
import { ProfileMergeQuery } from './profileMergeQuery';
import { ProfileMergeQueryResourceObject } from './profileMergeQueryResourceObject';
import { ProfileMergeQueryResourceObjectRelationships } from './profileMergeQueryResourceObjectRelationships';
import { ProfileMergeQueryResourceObjectRelationshipsProfiles } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import { ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import { ProfileMeta } from './profileMeta';
import { ProfileMetaPatchProperties } from './profileMetaPatchProperties';
import { ProfileMetricEnum } from './profileMetricEnum';
import { ProfileMetricPropertyFilter } from './profileMetricPropertyFilter';
import { ProfileMetricPropertyFilterFilter } from './profileMetricPropertyFilterFilter';
import { ProfileNoGroupMembershipCondition } from './profileNoGroupMembershipCondition';
import { ProfileNotInFlowCondition } from './profileNotInFlowCondition';
import { ProfileNotInFlowConditionTimeframeFilter } from './profileNotInFlowConditionTimeframeFilter';
import { ProfileNotInFlowEnum } from './profileNotInFlowEnum';
import { ProfileNotSentEmailEnum } from './profileNotSentEmailEnum';
import { ProfileNotSentPushEnum } from './profileNotSentPushEnum';
import { ProfileNotSentSmsEnum } from './profileNotSentSmsEnum';
import { ProfileOperationDelete } from './profileOperationDelete';
import { ProfileOperationUpdateOrCreateBoolean } from './profileOperationUpdateOrCreateBoolean';
import { ProfileOperationUpdateOrCreateDate } from './profileOperationUpdateOrCreateDate';
import { ProfileOperationUpdateOrCreateList } from './profileOperationUpdateOrCreateList';
import { ProfileOperationUpdateOrCreateNumeric } from './profileOperationUpdateOrCreateNumeric';
import { ProfileOperationUpdateOrCreateString } from './profileOperationUpdateOrCreateString';
import { ProfilePartialUpdateQuery } from './profilePartialUpdateQuery';
import { ProfilePartialUpdateQueryResourceObject } from './profilePartialUpdateQueryResourceObject';
import { ProfilePartialUpdateQueryResourceObjectAttributes } from './profilePartialUpdateQueryResourceObjectAttributes';
import { ProfilePostalCodeDistanceCondition } from './profilePostalCodeDistanceCondition';
import { ProfilePostalCodeDistanceConditionFilter } from './profilePostalCodeDistanceConditionFilter';
import { ProfilePostalCodeDistanceEnum } from './profilePostalCodeDistanceEnum';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityCondition } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityFilter } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import { ProfilePredictiveAnalyticsChannelAffinityRankCondition } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import { ProfilePredictiveAnalyticsChannelAffinityRankFilter } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import { ProfilePredictiveAnalyticsDateCondition } from './profilePredictiveAnalyticsDateCondition';
import { ProfilePredictiveAnalyticsEnum } from './profilePredictiveAnalyticsEnum';
import { ProfilePredictiveAnalyticsNumericCondition } from './profilePredictiveAnalyticsNumericCondition';
import { ProfilePredictiveAnalyticsStringCondition } from './profilePredictiveAnalyticsStringCondition';
import { ProfilePredictiveAnalyticsStringFilter } from './profilePredictiveAnalyticsStringFilter';
import { ProfilePredictiveAnalyticsStringFilterOperator } from './profilePredictiveAnalyticsStringFilterOperator';
import { ProfilePropertyCondition } from './profilePropertyCondition';
import { ProfilePropertyConditionFilter } from './profilePropertyConditionFilter';
import { ProfilePropertyDateTrigger } from './profilePropertyDateTrigger';
import { ProfilePropertyEnum } from './profilePropertyEnum';
import { ProfileRandomSampleCondition } from './profileRandomSampleCondition';
import { ProfileRegionCondition } from './profileRegionCondition';
import { ProfileRegionEnum } from './profileRegionEnum';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { ProfileResponseObjectResourceExtended } from './profileResponseObjectResourceExtended';
import { ProfileResponseObjectResourceExtendedAttributes } from './profileResponseObjectResourceExtendedAttributes';
import { ProfileSampleEnum } from './profileSampleEnum';
import { ProfileSubscriptionBulkCreateJobEnum } from './profileSubscriptionBulkCreateJobEnum';
import { ProfileSubscriptionBulkDeleteJobEnum } from './profileSubscriptionBulkDeleteJobEnum';
import { ProfileSubscriptionCreateQueryResourceObject } from './profileSubscriptionCreateQueryResourceObject';
import { ProfileSubscriptionCreateQueryResourceObjectAttributes } from './profileSubscriptionCreateQueryResourceObjectAttributes';
import { ProfileSubscriptionDeleteQueryResourceObject } from './profileSubscriptionDeleteQueryResourceObject';
import { ProfileSubscriptionDeleteQueryResourceObjectAttributes } from './profileSubscriptionDeleteQueryResourceObjectAttributes';
import { ProfileSuppressionBulkCreateJobEnum } from './profileSuppressionBulkCreateJobEnum';
import { ProfileSuppressionBulkDeleteJobEnum } from './profileSuppressionBulkDeleteJobEnum';
import { ProfileSuppressionCreateQueryResourceObject } from './profileSuppressionCreateQueryResourceObject';
import { ProfileSuppressionCreateQueryResourceObjectAttributes } from './profileSuppressionCreateQueryResourceObjectAttributes';
import { ProfileSuppressionDeleteQueryResourceObject } from './profileSuppressionDeleteQueryResourceObject';
import { ProfileSuppressionDeleteQueryResourceObjectAttributes } from './profileSuppressionDeleteQueryResourceObjectAttributes';
import { ProfileUpsertQuery } from './profileUpsertQuery';
import { ProfileUpsertQueryResourceObject } from './profileUpsertQueryResourceObject';
import { ProfileUpsertQueryResourceObjectAttributes } from './profileUpsertQueryResourceObjectAttributes';
import { Property } from './property';
import { ProvidedLandlineEnum } from './providedLandlineEnum';
import { ProvidedLandlineMethodFilter } from './providedLandlineMethodFilter';
import { ProvidedNoAgeEnum } from './providedNoAgeEnum';
import { ProvidedNoAgeMethodFilter } from './providedNoAgeMethodFilter';
import { PublishedEnum } from './publishedEnum';
import { PushChannel } from './pushChannel';
import { PushEnum } from './pushEnum';
import { PushMarketing } from './pushMarketing';
import { PushOnOpenApp } from './pushOnOpenApp';
import { PushOnOpenDeepLink } from './pushOnOpenDeepLink';
import { PushProfileUpsertQueryResourceObject } from './pushProfileUpsertQueryResourceObject';
import { PushProfileUpsertQueryResourceObjectAttributes } from './pushProfileUpsertQueryResourceObjectAttributes';
import { PushSendOptions } from './pushSendOptions';
import { PushTokenCreateQuery } from './pushTokenCreateQuery';
import { PushTokenCreateQueryResourceObject } from './pushTokenCreateQueryResourceObject';
import { PushTokenCreateQueryResourceObjectAttributes } from './pushTokenCreateQueryResourceObjectAttributes';
import { PushTokenCreateQueryResourceObjectAttributesProfile } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import { PushTokenEnum } from './pushTokenEnum';
import { PushTokenResponseObjectResource } from './pushTokenResponseObjectResource';
import { PushTokenResponseObjectResourceAttributes } from './pushTokenResponseObjectResourceAttributes';
import { RankEnum } from './rankEnum';
import { RejectReasonFake } from './rejectReasonFake';
import { RejectReasonMisleading } from './rejectReasonMisleading';
import { RejectReasonOther } from './rejectReasonOther';
import { RejectReasonPrivateInformation } from './rejectReasonPrivateInformation';
import { RejectReasonProfanity } from './rejectReasonProfanity';
import { RejectReasonUnrelated } from './rejectReasonUnrelated';
import { RejectedEnum } from './rejectedEnum';
import { RelationshipLinks } from './relationshipLinks';
import { RelativeAnniversaryDateFilter } from './relativeAnniversaryDateFilter';
import { RelativeDateOperatorBaseFilter } from './relativeDateOperatorBaseFilter';
import { RelativeDateRangeFilter } from './relativeDateRangeFilter';
import { RenderOptions } from './renderOptions';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { ReviewBlock } from './reviewBlock';
import { ReviewEnum } from './reviewEnum';
import { ReviewPatchQuery } from './reviewPatchQuery';
import { ReviewPatchQueryResourceObject } from './reviewPatchQueryResourceObject';
import { ReviewPatchQueryResourceObjectAttributes } from './reviewPatchQueryResourceObjectAttributes';
import { ReviewPatchQueryResourceObjectAttributesStatus } from './reviewPatchQueryResourceObjectAttributesStatus';
import { ReviewProductDTO } from './reviewProductDTO';
import { ReviewPublicReply } from './reviewPublicReply';
import { ReviewResponseDTOObjectResource } from './reviewResponseDTOObjectResource';
import { ReviewResponseDTOObjectResourceAttributes } from './reviewResponseDTOObjectResourceAttributes';
import { ReviewResponseDTOObjectResourceAttributesStatus } from './reviewResponseDTOObjectResourceAttributesStatus';
import { ReviewStatusFeatured } from './reviewStatusFeatured';
import { ReviewStatusPending } from './reviewStatusPending';
import { ReviewStatusPublished } from './reviewStatusPublished';
import { ReviewStatusRejected } from './reviewStatusRejected';
import { ReviewStatusRejectedRejectionReason } from './reviewStatusRejectedRejectionReason';
import { ReviewStatusUnpublished } from './reviewStatusUnpublished';
import { SMSChannel } from './sMSChannel';
import { SMSContent } from './sMSContent';
import { SMSContentCreate } from './sMSContentCreate';
import { SMSContentSubObject } from './sMSContentSubObject';
import { SMSMarketing } from './sMSMarketing';
import { SMSMessageContent } from './sMSMessageContent';
import { SMSMessageDefinition } from './sMSMessageDefinition';
import { SMSMessageDefinitionCreate } from './sMSMessageDefinitionCreate';
import { SMSRenderOptions } from './sMSRenderOptions';
import { SMSSendOptions } from './sMSSendOptions';
import { SMSSubscriptionParameters } from './sMSSubscriptionParameters';
import { SMSTransactional } from './sMSTransactional';
import { SMSUnsubscriptionParameters } from './sMSUnsubscriptionParameters';
import { Section } from './section';
import { SectionEnum } from './sectionEnum';
import { SegmentCreateQuery } from './segmentCreateQuery';
import { SegmentCreateQueryResourceObject } from './segmentCreateQueryResourceObject';
import { SegmentCreateQueryResourceObjectAttributes } from './segmentCreateQueryResourceObjectAttributes';
import { SegmentDefinition } from './segmentDefinition';
import { SegmentEnum } from './segmentEnum';
import { SegmentListResponseObjectResource } from './segmentListResponseObjectResource';
import { SegmentListResponseObjectResourceAttributes } from './segmentListResponseObjectResourceAttributes';
import { SegmentMemberResponseObjectResourceAttributes } from './segmentMemberResponseObjectResourceAttributes';
import { SegmentMemberResponseObjectResourceExtended } from './segmentMemberResponseObjectResourceExtended';
import { SegmentMemberResponseObjectResourceExtendedAttributes } from './segmentMemberResponseObjectResourceExtendedAttributes';
import { SegmentPartialUpdateQuery } from './segmentPartialUpdateQuery';
import { SegmentPartialUpdateQueryResourceObject } from './segmentPartialUpdateQueryResourceObject';
import { SegmentPartialUpdateQueryResourceObjectAttributes } from './segmentPartialUpdateQueryResourceObjectAttributes';
import { SegmentResponseObjectResource } from './segmentResponseObjectResource';
import { SegmentRetrieveResponseObjectResourceAttributes } from './segmentRetrieveResponseObjectResourceAttributes';
import { SegmentRetrieveResponseObjectResourceExtended } from './segmentRetrieveResponseObjectResourceExtended';
import { SegmentRetrieveResponseObjectResourceExtendedAttributes } from './segmentRetrieveResponseObjectResourceExtendedAttributes';
import { SegmentSeriesReportEnum } from './segmentSeriesReportEnum';
import { SegmentSeriesRequestDTO } from './segmentSeriesRequestDTO';
import { SegmentSeriesRequestDTOResourceObject } from './segmentSeriesRequestDTOResourceObject';
import { SegmentSeriesRequestDTOResourceObjectAttributes } from './segmentSeriesRequestDTOResourceObjectAttributes';
import { SegmentTrigger } from './segmentTrigger';
import { SegmentValuesReportEnum } from './segmentValuesReportEnum';
import { SegmentValuesRequestDTO } from './segmentValuesRequestDTO';
import { SegmentValuesRequestDTOResourceObject } from './segmentValuesRequestDTOResourceObject';
import { SegmentValuesRequestDTOResourceObjectAttributes } from './segmentValuesRequestDTOResourceObjectAttributes';
import { SegmentValuesRequestDTOResourceObjectAttributesTimeframe } from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
import { SegmentsProfileMetricCondition } from './segmentsProfileMetricCondition';
import { SegmentsProfileMetricConditionTimeframeFilter } from './segmentsProfileMetricConditionTimeframeFilter';
import { SendEmailAction } from './sendEmailAction';
import { SendEmailActionData } from './sendEmailActionData';
import { SendEmailEnum } from './sendEmailEnum';
import { SendInternalAlertAction } from './sendInternalAlertAction';
import { SendInternalAlertActionData } from './sendInternalAlertActionData';
import { SendInternalAlertEnum } from './sendInternalAlertEnum';
import { SendMobilePushEnum } from './sendMobilePushEnum';
import { SendOptions } from './sendOptions';
import { SendPushNotificationAction } from './sendPushNotificationAction';
import { SendPushNotificationActionData } from './sendPushNotificationActionData';
import { SendSmsAction } from './sendSmsAction';
import { SendSmsActionData } from './sendSmsActionData';
import { SendSmsEnum } from './sendSmsEnum';
import { SendTime } from './sendTime';
import { SendTimeSubObject } from './sendTimeSubObject';
import { SendWebhookAction } from './sendWebhookAction';
import { SendWebhookActionData } from './sendWebhookActionData';
import { SendWebhookEnum } from './sendWebhookEnum';
import { SeriesData } from './seriesData';
import { ServerBISSubscriptionCreateQuery } from './serverBISSubscriptionCreateQuery';
import { ServerBISSubscriptionCreateQueryResourceObject } from './serverBISSubscriptionCreateQueryResourceObject';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import { SetCountEnum } from './setCountEnum';
import { SetPropertyEnum } from './setPropertyEnum';
import { SftpEnum } from './sftpEnum';
import { SftpMethodFilter } from './sftpMethodFilter';
import { ShopifyEnum } from './shopifyEnum';
import { ShopifyIntegrationFilter } from './shopifyIntegrationFilter';
import { ShopifyIntegrationMethodFilter } from './shopifyIntegrationMethodFilter';
import { SilentEnum } from './silentEnum';
import { SinceFlowStartDateFilter } from './sinceFlowStartDateFilter';
import { SmartSendTimeEnum } from './smartSendTimeEnum';
import { SmartSendTimeStrategy } from './smartSendTimeStrategy';
import { SmsEnum } from './smsEnum';
import { SocialBlock } from './socialBlock';
import { SocialEnum } from './socialEnum';
import { SpacerBlock } from './spacerBlock';
import { SpacerEnum } from './spacerEnum';
import { SpamComplaintEnum } from './spamComplaintEnum';
import { SpamComplaintMethodFilter } from './spamComplaintMethodFilter';
import { SplitAction } from './splitAction';
import { SplitBlock } from './splitBlock';
import { SplitEnum } from './splitEnum';
import { SplitLinks } from './splitLinks';
import { StandardEnum } from './standardEnum';
import { StaticCount } from './staticCount';
import { StaticDateFilter } from './staticDateFilter';
import { StaticDateRangeFilter } from './staticDateRangeFilter';
import { StaticEnum } from './staticEnum';
import { StaticSendStrategy } from './staticSendStrategy';
import { StaticSendStrategyOptions } from './staticSendStrategyOptions';
import { StaticTrackingParam } from './staticTrackingParam';
import { StatusDateEnum } from './statusDateEnum';
import { StatusDateFilter } from './statusDateFilter';
import { StatusDateFilterFilter } from './statusDateFilterFilter';
import { StreetAddress } from './streetAddress';
import { StringArrayOperatorFilter } from './stringArrayOperatorFilter';
import { StringEnum } from './stringEnum';
import { StringInArrayFilter } from './stringInArrayFilter';
import { StringOperatorFilter } from './stringOperatorFilter';
import { StringPhoneOperatorArrayFilter } from './stringPhoneOperatorArrayFilter';
import { SubscribedEnum } from './subscribedEnum';
import { SubscriptionChannels } from './subscriptionChannels';
import { SubscriptionCreateJobCreateQuery } from './subscriptionCreateJobCreateQuery';
import { SubscriptionCreateJobCreateQueryResourceObject } from './subscriptionCreateJobCreateQueryResourceObject';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributes } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationships } from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
import { SubscriptionDeleteJobCreateQuery } from './subscriptionDeleteJobCreateQuery';
import { SubscriptionDeleteJobCreateQueryResourceObject } from './subscriptionDeleteJobCreateQueryResourceObject';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributes } from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationships } from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import { SubscriptionParameters } from './subscriptionParameters';
import { Subscriptions } from './subscriptions';
import { SuppressionCreateJobCreateQuery } from './suppressionCreateJobCreateQuery';
import { SuppressionCreateJobCreateQueryResourceObject } from './suppressionCreateJobCreateQueryResourceObject';
import { SuppressionCreateJobCreateQueryResourceObjectAttributes } from './suppressionCreateJobCreateQueryResourceObjectAttributes';
import { SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles } from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SuppressionCreateJobCreateQueryResourceObjectRelationships } from './suppressionCreateJobCreateQueryResourceObjectRelationships';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsList } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
import { SuppressionDeleteJobCreateQuery } from './suppressionDeleteJobCreateQuery';
import { SuppressionDeleteJobCreateQueryResourceObject } from './suppressionDeleteJobCreateQueryResourceObject';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributes } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationships } from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
import { TableBlock } from './tableBlock';
import { TableEnum } from './tableEnum';
import { TagCampaignOp } from './tagCampaignOp';
import { TagCampaignOpDataInner } from './tagCampaignOpDataInner';
import { TagCreateQuery } from './tagCreateQuery';
import { TagCreateQueryResourceObject } from './tagCreateQueryResourceObject';
import { TagCreateQueryResourceObjectRelationships } from './tagCreateQueryResourceObjectRelationships';
import { TagCreateQueryResourceObjectRelationshipsTagGroup } from './tagCreateQueryResourceObjectRelationshipsTagGroup';
import { TagCreateQueryResourceObjectRelationshipsTagGroupData } from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
import { TagEnum } from './tagEnum';
import { TagFlowOp } from './tagFlowOp';
import { TagFlowOpDataInner } from './tagFlowOpDataInner';
import { TagGroupCreateQuery } from './tagGroupCreateQuery';
import { TagGroupCreateQueryResourceObject } from './tagGroupCreateQueryResourceObject';
import { TagGroupCreateQueryResourceObjectAttributes } from './tagGroupCreateQueryResourceObjectAttributes';
import { TagGroupEnum } from './tagGroupEnum';
import { TagGroupResponseObjectResource } from './tagGroupResponseObjectResource';
import { TagGroupResponseObjectResourceAttributes } from './tagGroupResponseObjectResourceAttributes';
import { TagGroupUpdateQuery } from './tagGroupUpdateQuery';
import { TagGroupUpdateQueryResourceObject } from './tagGroupUpdateQueryResourceObject';
import { TagGroupUpdateQueryResourceObjectAttributes } from './tagGroupUpdateQueryResourceObjectAttributes';
import { TagListOp } from './tagListOp';
import { TagListOpDataInner } from './tagListOpDataInner';
import { TagResponseObjectResource } from './tagResponseObjectResource';
import { TagResponseObjectResourceAttributes } from './tagResponseObjectResourceAttributes';
import { TagSegmentOp } from './tagSegmentOp';
import { TagSegmentOpDataInner } from './tagSegmentOpDataInner';
import { TagUpdateQuery } from './tagUpdateQuery';
import { TagUpdateQueryResourceObject } from './tagUpdateQueryResourceObject';
import { TargetDateAction } from './targetDateAction';
import { TargetDateActionData } from './targetDateActionData';
import { TargetDateEnum } from './targetDateEnum';
import { TemplateCloneQuery } from './templateCloneQuery';
import { TemplateCloneQueryResourceObject } from './templateCloneQueryResourceObject';
import { TemplateCloneQueryResourceObjectAttributes } from './templateCloneQueryResourceObjectAttributes';
import { TemplateCreateQuery } from './templateCreateQuery';
import { TemplateCreateQueryResourceObject } from './templateCreateQueryResourceObject';
import { TemplateCreateQueryResourceObjectAttributes } from './templateCreateQueryResourceObjectAttributes';
import { TemplateEnum } from './templateEnum';
import { TemplateRenderQuery } from './templateRenderQuery';
import { TemplateRenderQueryResourceObject } from './templateRenderQueryResourceObject';
import { TemplateRenderQueryResourceObjectAttributes } from './templateRenderQueryResourceObjectAttributes';
import { TemplateResponseObjectResource } from './templateResponseObjectResource';
import { TemplateResponseObjectResourceAttributes } from './templateResponseObjectResourceAttributes';
import { TemplateUniversalContentEnum } from './templateUniversalContentEnum';
import { TemplateUpdateQuery } from './templateUpdateQuery';
import { TemplateUpdateQueryResourceObject } from './templateUpdateQueryResourceObject';
import { TemplateUpdateQueryResourceObjectAttributes } from './templateUpdateQueryResourceObjectAttributes';
import { TextBlock } from './textBlock';
import { TextBlockData } from './textBlockData';
import { TextBlockStyles } from './textBlockStyles';
import { TextEnum } from './textEnum';
import { ThrottledEnum } from './throttledEnum';
import { ThrottledSendStrategy } from './throttledSendStrategy';
import { TimeDelayAction } from './timeDelayAction';
import { TimeDelayActionData } from './timeDelayActionData';
import { TimeDelayEnum } from './timeDelayEnum';
import { Timeframe } from './timeframe';
import { TrackingParamDTO } from './trackingParamDTO';
import { TrackingParamDTOCampaign } from './trackingParamDTOCampaign';
import { TrackingParamDTOFlow } from './trackingParamDTOFlow';
import { TrackingSettingEnum } from './trackingSettingEnum';
import { TrackingSettingPartialUpdateQuery } from './trackingSettingPartialUpdateQuery';
import { TrackingSettingPartialUpdateQueryResourceObject } from './trackingSettingPartialUpdateQueryResourceObject';
import { TrackingSettingPartialUpdateQueryResourceObjectAttributes } from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
import { TrackingSettingResponseObjectResource } from './trackingSettingResponseObjectResource';
import { TrackingSettingResponseObjectResourceAttributes } from './trackingSettingResponseObjectResourceAttributes';
import { TriggerBranchAction } from './triggerBranchAction';
import { TriggerBranchActionData } from './triggerBranchActionData';
import { TriggerSplitEnum } from './triggerSplitEnum';
import { UniversalContentCreateQuery } from './universalContentCreateQuery';
import { UniversalContentCreateQueryResourceObject } from './universalContentCreateQueryResourceObject';
import { UniversalContentCreateQueryResourceObjectAttributes } from './universalContentCreateQueryResourceObjectAttributes';
import { UniversalContentCreateQueryResourceObjectAttributesDefinition } from './universalContentCreateQueryResourceObjectAttributesDefinition';
import { UniversalContentPartialUpdateQuery } from './universalContentPartialUpdateQuery';
import { UniversalContentPartialUpdateQueryResourceObject } from './universalContentPartialUpdateQueryResourceObject';
import { UniversalContentPartialUpdateQueryResourceObjectAttributes } from './universalContentPartialUpdateQueryResourceObjectAttributes';
import { UniversalContentPartialUpdateQueryResourceObjectAttributesDefinition } from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
import { UniversalContentResponseObjectResource } from './universalContentResponseObjectResource';
import { UniversalContentResponseObjectResourceAttributes } from './universalContentResponseObjectResourceAttributes';
import { UniversalContentResponseObjectResourceAttributesDefinition } from './universalContentResponseObjectResourceAttributesDefinition';
import { UnpublishedEnum } from './unpublishedEnum';
import { UnrelatedEnum } from './unrelatedEnum';
import { UnsubscribedEnum } from './unsubscribedEnum';
import { UnsubscriptionChannels } from './unsubscriptionChannels';
import { UnsubscriptionParameters } from './unsubscriptionParameters';
import { UnsupportedBlock } from './unsupportedBlock';
import { UnsupportedEnum } from './unsupportedEnum';
import { UnsupportedSendStrategy } from './unsupportedSendStrategy';
import { UpdateProfileAction } from './updateProfileAction';
import { UpdateProfileActionData } from './updateProfileActionData';
import { UpdateProfileActionDataProfileOperationsInner } from './updateProfileActionDataProfileOperationsInner';
import { UpdateProfileEnum } from './updateProfileEnum';
import { UtmParam } from './utmParam';
import { UtmParamInfo } from './utmParamInfo';
import { ValuesData } from './valuesData';
import { VideoBlock } from './videoBlock';
import { VideoEnum } from './videoEnum';
import { WebFeedCreateQuery } from './webFeedCreateQuery';
import { WebFeedCreateQueryResourceObject } from './webFeedCreateQueryResourceObject';
import { WebFeedCreateQueryResourceObjectAttributes } from './webFeedCreateQueryResourceObjectAttributes';
import { WebFeedEnum } from './webFeedEnum';
import { WebFeedPartialUpdateQuery } from './webFeedPartialUpdateQuery';
import { WebFeedPartialUpdateQueryResourceObject } from './webFeedPartialUpdateQueryResourceObject';
import { WebFeedPartialUpdateQueryResourceObjectAttributes } from './webFeedPartialUpdateQueryResourceObjectAttributes';
import { WebFeedResponseObjectResource } from './webFeedResponseObjectResource';
import { WebFeedResponseObjectResourceAttributes } from './webFeedResponseObjectResourceAttributes';
import { WebhookCreateQuery } from './webhookCreateQuery';
import { WebhookCreateQueryResourceObject } from './webhookCreateQueryResourceObject';
import { WebhookCreateQueryResourceObjectAttributes } from './webhookCreateQueryResourceObjectAttributes';
import { WebhookCreateQueryResourceObjectRelationships } from './webhookCreateQueryResourceObjectRelationships';
import { WebhookCreateQueryResourceObjectRelationshipsWebhookTopics } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
import { WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
import { WebhookEnum } from './webhookEnum';
import { WebhookPartialUpdateQuery } from './webhookPartialUpdateQuery';
import { WebhookPartialUpdateQueryResourceObject } from './webhookPartialUpdateQueryResourceObject';
import { WebhookPartialUpdateQueryResourceObjectAttributes } from './webhookPartialUpdateQueryResourceObjectAttributes';
import { WebhookPartialUpdateQueryResourceObjectRelationships } from './webhookPartialUpdateQueryResourceObjectRelationships';
import { WebhookResponseObjectResource } from './webhookResponseObjectResource';
import { WebhookResponseObjectResourceAttributes } from './webhookResponseObjectResourceAttributes';
import { WebhookTopicEnum } from './webhookTopicEnum';
import { WebhookTopicResponseObjectResource } from './webhookTopicResponseObjectResource';
import {  } from './aBTestSendStrategy';
import {  } from './aPIJobErrorPayload';
import {  } from './aPIMethodFilter';
import {  } from './abTestAction';
import {  } from './abTestActionData';
import {  } from './abTestActionDataCurrentExperiment';
import {  } from './abTestActionDataMainAction';
import {  } from './abTestCampaignEnum';
import {  } from './abTestEnum';
import {  } from './accountEnum';
import {  } from './accountResponseObjectResource';
import {  } from './accountResponseObjectResourceAttributes';
import {  } from './alltimeDateFilter';
import {  } from './anniversaryDateFilter';
import {  } from './anyEnum';
import {  } from './apiEnum';
import {  } from './attributionEnum';
import {  } from './attributionResponseObjectResource';
import {  } from './attributionResponseObjectResourceRelationships';
import {  } from './attributionResponseObjectResourceRelationshipsAttributedEvent';
import {  } from './attributionResponseObjectResourceRelationshipsAttributedEventData';
import {  } from './attributionResponseObjectResourceRelationshipsCampaign';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignData';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignMessage';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
import {  } from './attributionResponseObjectResourceRelationshipsEvent';
import {  } from './attributionResponseObjectResourceRelationshipsEventData';
import {  } from './attributionResponseObjectResourceRelationshipsFlow';
import {  } from './attributionResponseObjectResourceRelationshipsFlowData';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessage';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageData';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
import {  } from './audiences';
import {  } from './audiencesUpdate';
import {  } from './automaticWinnerSelectionSettings';
import {  } from './backInStockDelayAction';
import {  } from './backInStockDelayEnum';
import {  } from './backInStockEnum';
import {  } from './backInStockMethodFilter';
import {  } from './backInStockSubscriptionEnum';
import {  } from './baseEventCreateQueryBulkEntryResourceObject';
import {  } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import {  } from './blockDisplayOptions';
import {  } from './blockEnum';
import {  } from './booleanBranchLinks';
import {  } from './booleanEnum';
import {  } from './booleanFilter';
import {  } from './bounceDateEnum';
import {  } from './bounceDateFilter';
import {  } from './bounceDateFilterFilter';
import {  } from './branchAction';
import {  } from './branchEnum';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import {  } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import {  } from './bulkRemoveEnum';
import {  } from './bulkRemoveMethodFilter';
import {  } from './buttonBlock';
import {  } from './buttonEnum';
import {  } from './calendarDateFilter';
import {  } from './campaignCloneQuery';
import {  } from './campaignCloneQueryResourceObject';
import {  } from './campaignCloneQueryResourceObjectAttributes';
import {  } from './campaignCreateQuery';
import {  } from './campaignCreateQueryResourceObject';
import {  } from './campaignCreateQueryResourceObjectAttributes';
import {  } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import {  } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import {  } from './campaignCreateQueryResourceObjectAttributesSendStrategy';
import {  } from './campaignEnum';
import {  } from './campaignMessageAssignTemplateQuery';
import {  } from './campaignMessageAssignTemplateQueryResourceObject';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import {  } from './campaignMessageCreateQueryResourceObject';
import {  } from './campaignMessageCreateQueryResourceObjectAttributes';
import {  } from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
import {  } from './campaignMessageCreateQueryResourceObjectRelationships';
import {  } from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
import {  } from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
import {  } from './campaignMessageEnum';
import {  } from './campaignMessageImageUpdateQuery';
import {  } from './campaignMessageImageUpdateQueryData';
import {  } from './campaignMessageIncrement';
import {  } from './campaignMessagePartialUpdateQuery';
import {  } from './campaignMessagePartialUpdateQueryResourceObject';
import {  } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
import {  } from './campaignMessageProperty';
import {  } from './campaignMessageResponseObjectResource';
import {  } from './campaignMessageResponseObjectResourceAttributes';
import {  } from './campaignMessageResponseObjectResourceAttributesDefinition';
import {  } from './campaignMessageStaticCount';
import {  } from './campaignPartialUpdateQuery';
import {  } from './campaignPartialUpdateQueryResourceObject';
import {  } from './campaignPartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
import {  } from './campaignRecipientEstimationEnum';
import {  } from './campaignRecipientEstimationJobCreateQuery';
import {  } from './campaignRecipientEstimationJobCreateQueryResourceObject';
import {  } from './campaignRecipientEstimationJobEnum';
import {  } from './campaignRecipientEstimationJobResponseObjectResource';
import {  } from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
import {  } from './campaignRecipientEstimationResponseObjectResource';
import {  } from './campaignRecipientEstimationResponseObjectResourceAttributes';
import {  } from './campaignResponseObjectResource';
import {  } from './campaignResponseObjectResourceAttributes';
import {  } from './campaignResponseObjectResourceAttributesSendOptions';
import {  } from './campaignResponseObjectResourceAttributesSendStrategy';
import {  } from './campaignResponseObjectResourceAttributesTrackingOptions';
import {  } from './campaignSendJobCreateQuery';
import {  } from './campaignSendJobCreateQueryResourceObject';
import {  } from './campaignSendJobEnum';
import {  } from './campaignSendJobPartialUpdateQuery';
import {  } from './campaignSendJobPartialUpdateQueryResourceObject';
import {  } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignSendJobResponseObjectResource';
import {  } from './campaignSendJobResponseObjectResourceAttributes';
import {  } from './campaignTrackingSettingDynamicParam';
import {  } from './campaignTrackingSettingStaticParam';
import {  } from './campaignValuesReportEnum';
import {  } from './campaignValuesRequestDTO';
import {  } from './campaignValuesRequestDTOResourceObject';
import {  } from './campaignValuesRequestDTOResourceObjectAttributes';
import {  } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
import {  } from './campaignsEmailTrackingOptions';
import {  } from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
import {  } from './campaignsSMSTrackingOptions';
import {  } from './carrierDeactivationEnum';
import {  } from './carrierDeactivationMethodFilter';
import {  } from './catalogCategoryBulkCreateJobEnum';
import {  } from './catalogCategoryBulkDeleteJobEnum';
import {  } from './catalogCategoryBulkUpdateJobEnum';
import {  } from './catalogCategoryCreateJobCreateQuery';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObject';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryCreateJobResponseObjectResource';
import {  } from './catalogCategoryCreateQuery';
import {  } from './catalogCategoryCreateQueryResourceObject';
import {  } from './catalogCategoryCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryCreateQueryResourceObjectRelationships';
import {  } from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
import {  } from './catalogCategoryDeleteJobCreateQuery';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObject';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryDeleteJobResponseObjectResource';
import {  } from './catalogCategoryDeleteQueryResourceObject';
import {  } from './catalogCategoryEnum';
import {  } from './catalogCategoryItemOp';
import {  } from './catalogCategoryItemOpDataInner';
import {  } from './catalogCategoryResponseObjectResource';
import {  } from './catalogCategoryResponseObjectResourceAttributes';
import {  } from './catalogCategoryUpdateJobCreateQuery';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryUpdateJobResponseObjectResource';
import {  } from './catalogCategoryUpdateQuery';
import {  } from './catalogCategoryUpdateQueryResourceObject';
import {  } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import {  } from './catalogItemBulkCreateJobEnum';
import {  } from './catalogItemBulkDeleteJobEnum';
import {  } from './catalogItemBulkUpdateJobEnum';
import {  } from './catalogItemCategoryOp';
import {  } from './catalogItemCreateJobCreateQuery';
import {  } from './catalogItemCreateJobCreateQueryResourceObject';
import {  } from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemCreateJobResponseObjectResource';
import {  } from './catalogItemCreateQuery';
import {  } from './catalogItemCreateQueryResourceObject';
import {  } from './catalogItemCreateQueryResourceObjectAttributes';
import {  } from './catalogItemCreateQueryResourceObjectRelationships';
import {  } from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
import {  } from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
import {  } from './catalogItemDeleteJobCreateQuery';
import {  } from './catalogItemDeleteJobCreateQueryResourceObject';
import {  } from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemDeleteJobResponseObjectResource';
import {  } from './catalogItemDeleteQueryResourceObject';
import {  } from './catalogItemEnum';
import {  } from './catalogItemResponseObjectResource';
import {  } from './catalogItemResponseObjectResourceAttributes';
import {  } from './catalogItemUpdateJobCreateQuery';
import {  } from './catalogItemUpdateJobCreateQueryResourceObject';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemUpdateJobResponseObjectResource';
import {  } from './catalogItemUpdateQuery';
import {  } from './catalogItemUpdateQueryResourceObject';
import {  } from './catalogItemUpdateQueryResourceObjectAttributes';
import {  } from './catalogVariantBulkCreateJobEnum';
import {  } from './catalogVariantBulkDeleteJobEnum';
import {  } from './catalogVariantBulkUpdateJobEnum';
import {  } from './catalogVariantCreateJobCreateQuery';
import {  } from './catalogVariantCreateJobCreateQueryResourceObject';
import {  } from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantCreateJobResponseObjectResource';
import {  } from './catalogVariantCreateQuery';
import {  } from './catalogVariantCreateQueryResourceObject';
import {  } from './catalogVariantCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantCreateQueryResourceObjectRelationships';
import {  } from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
import {  } from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
import {  } from './catalogVariantDeleteJobCreateQuery';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObject';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantDeleteJobResponseObjectResource';
import {  } from './catalogVariantDeleteQueryResourceObject';
import {  } from './catalogVariantEnum';
import {  } from './catalogVariantResponseObjectResource';
import {  } from './catalogVariantResponseObjectResourceAttributes';
import {  } from './catalogVariantUpdateJobCreateQuery';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObject';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantUpdateJobResponseObjectResource';
import {  } from './catalogVariantUpdateQuery';
import {  } from './catalogVariantUpdateQueryResourceObject';
import {  } from './catalogVariantUpdateQueryResourceObjectAttributes';
import {  } from './checkoutEnum';
import {  } from './checkoutMethodFilter';
import {  } from './codeAction';
import {  } from './codeEnum';
import {  } from './collectionLinks';
import {  } from './conditionGroup';
import {  } from './conditionGroupConditionsInner';
import {  } from './conditionalBranchAction';
import {  } from './conditionalBranchActionData';
import {  } from './conditionalBranchActionDataProfileFilter';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import {  } from './conditionalSplitEnum';
import {  } from './constantContactEnum';
import {  } from './constantContactIntegrationFilter';
import {  } from './constantContactIntegrationMethodFilter';
import {  } from './contactInformation';
import {  } from './contentRepeat';
import {  } from './countdownDelayAction';
import {  } from './countdownDelayActionData';
import {  } from './countdownDelayEnum';
import {  } from './couponCodeBulkCreateJobEnum';
import {  } from './couponCodeCreateJobCreateQuery';
import {  } from './couponCodeCreateJobCreateQueryResourceObject';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import {  } from './couponCodeCreateJobResponseObjectResource';
import {  } from './couponCodeCreateJobResponseObjectResourceAttributes';
import {  } from './couponCodeCreateQuery';
import {  } from './couponCodeCreateQueryResourceObject';
import {  } from './couponCodeCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateQueryResourceObjectRelationships';
import {  } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import {  } from './couponCodeEnum';
import {  } from './couponCodeResponseObjectResource';
import {  } from './couponCodeResponseObjectResourceAttributes';
import {  } from './couponCodeUpdateQuery';
import {  } from './couponCodeUpdateQueryResourceObject';
import {  } from './couponCodeUpdateQueryResourceObjectAttributes';
import {  } from './couponCreateQuery';
import {  } from './couponCreateQueryResourceObject';
import {  } from './couponEnum';
import {  } from './couponResponseObjectResource';
import {  } from './couponResponseObjectResourceAttributes';
import {  } from './couponUpdateQuery';
import {  } from './couponUpdateQueryResourceObject';
import {  } from './couponUpdateQueryResourceObjectAttributes';
import {  } from './customMetricCondition';
import {  } from './customMetricConditionFilter';
import {  } from './customMetricCreateQuery';
import {  } from './customMetricCreateQueryResourceObject';
import {  } from './customMetricCreateQueryResourceObjectAttributes';
import {  } from './customMetricDefinition';
import {  } from './customMetricEnum';
import {  } from './customMetricGroup';
import {  } from './customMetricPartialUpdateQuery';
import {  } from './customMetricPartialUpdateQueryResourceObject';
import {  } from './customMetricPartialUpdateQueryResourceObjectAttributes';
import {  } from './customMetricResponseObjectResource';
import {  } from './customMetricResponseObjectResourceAttributes';
import {  } from './customSourceEnum';
import {  } from './customSourceFilter';
import {  } from './customTimeframe';
import {  } from './customTrackingParamDTO';
import {  } from './dataPrivacyCreateDeletionJobQuery';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import {  } from './dataPrivacyDeletionJobEnum';
import {  } from './dataPrivacyProfileQueryResourceObject';
import {  } from './dataPrivacyProfileQueryResourceObjectAttributes';
import {  } from './dataSourceCreateQuery';
import {  } from './dataSourceCreateQueryResourceObject';
import {  } from './dataSourceCreateQueryResourceObjectAttributes';
import {  } from './dataSourceEnum';
import {  } from './dataSourceRecordBulkCreateJobCreateQuery';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
import {  } from './dataSourceRecordBulkCreateJobEnum';
import {  } from './dataSourceRecordEnum';
import {  } from './dataSourceRecordResourceObject';
import {  } from './dataSourceRecordResourceObjectAttributes';
import {  } from './dataSourceResponseObjectResource';
import {  } from './dataSourceResponseObjectResourceAttributes';
import {  } from './dateEnum';
import {  } from './deepLinkEnum';
import {  } from './deleteTagGroupResponse';
import {  } from './deviceMetadata';
import {  } from './doubleOptinFilter';
import {  } from './dropShadowBlock';
import {  } from './dropShadowEnum';
import {  } from './dynamicEnum';
import {  } from './dynamicTrackingParam';
import {  } from './emailChannel';
import {  } from './emailContent';
import {  } from './emailContentSubObject';
import {  } from './emailEnum';
import {  } from './emailMarketing';
import {  } from './emailMarketingListSuppression';
import {  } from './emailMarketingSuppression';
import {  } from './emailMessageContent';
import {  } from './emailMessageDefinition';
import {  } from './emailSendOptions';
import {  } from './emailSubscriptionParameters';
import {  } from './emailUnsubscriptionParameters';
import {  } from './equalsEnum';
import {  } from './equalsStringFilter';
import {  } from './errorSource';
import {  } from './eventBulkCreateEnum';
import {  } from './eventBulkCreateJobEnum';
import {  } from './eventCreateQueryV2';
import {  } from './eventCreateQueryV2ResourceObject';
import {  } from './eventCreateQueryV2ResourceObjectAttributes';
import {  } from './eventCreateQueryV2ResourceObjectAttributesMetric';
import {  } from './eventCreateQueryV2ResourceObjectAttributesProfile';
import {  } from './eventEnum';
import {  } from './eventProfileCreateQueryResourceObject';
import {  } from './eventProfileCreateQueryResourceObjectAttributes';
import {  } from './eventResponseObjectResource';
import {  } from './eventResponseObjectResourceAttributes';
import {  } from './eventsBulkCreateJob';
import {  } from './eventsBulkCreateJobResourceObject';
import {  } from './eventsBulkCreateJobResourceObjectAttributes';
import {  } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import {  } from './eventsBulkCreateQueryResourceObject';
import {  } from './eventsBulkCreateQueryResourceObjectAttributes';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import {  } from './existenceEnum';
import {  } from './existenceOperatorFilter';
import {  } from './failedAgeGateEnum';
import {  } from './failedAgeGateMethodFilter';
import {  } from './fakeEnum';
import {  } from './falseOrMisleadingEnum';
import {  } from './featuredEnum';
import {  } from './flowActionEnum';
import {  } from './flowActionResponseObjectResource';
import {  } from './flowActionResponseObjectResourceAttributes';
import {  } from './flowActionResponseObjectResourceAttributesBadgeOptions';
import {  } from './flowActionResponseObjectResourceAttributesTrackingOptions';
import {  } from './flowCreateQuery';
import {  } from './flowCreateQueryResourceObject';
import {  } from './flowCreateQueryResourceObjectAttributes';
import {  } from './flowDefinition';
import {  } from './flowDefinitionActionsInner';
import {  } from './flowDefinitionProfileFilter';
import {  } from './flowDefinitionProfileFilterConditionGroupsInner';
import {  } from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
import {  } from './flowDefinitionTriggersInner';
import {  } from './flowEmail';
import {  } from './flowEmailAdditionalFilters';
import {  } from './flowEmailAdditionalFiltersConditionGroupsInner';
import {  } from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowEmailTrackingOptions';
import {  } from './flowEnum';
import {  } from './flowInternalAlert';
import {  } from './flowMessageEnum';
import {  } from './flowMessageResponseObjectResource';
import {  } from './flowMessageResponseObjectResourceAttributes';
import {  } from './flowMessageResponseObjectResourceAttributesContent';
import {  } from './flowPushNotification';
import {  } from './flowPushNotificationAdditionalFilters';
import {  } from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
import {  } from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowPushNotificationBadgeOptions';
import {  } from './flowResponseObjectResource';
import {  } from './flowResponseObjectResourceAttributes';
import {  } from './flowSeriesReportEnum';
import {  } from './flowSeriesRequestDTO';
import {  } from './flowSeriesRequestDTOResourceObject';
import {  } from './flowSeriesRequestDTOResourceObjectAttributes';
import {  } from './flowSms';
import {  } from './flowSmsAdditionalFilters';
import {  } from './flowSmsAdditionalFiltersConditionGroupsInner';
import {  } from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowTrackingSettingDynamicParam';
import {  } from './flowTrackingSettingStaticParam';
import {  } from './flowUpdateQuery';
import {  } from './flowUpdateQueryResourceObject';
import {  } from './flowUpdateQueryResourceObjectAttributes';
import {  } from './flowV2ResponseObjectResourceAttributes';
import {  } from './flowV2ResponseObjectResourceExtended';
import {  } from './flowV2ResponseObjectResourceExtendedAttributes';
import {  } from './flowValuesReportEnum';
import {  } from './flowValuesRequestDTO';
import {  } from './flowValuesRequestDTOResourceObject';
import {  } from './flowValuesRequestDTOResourceObjectAttributes';
import {  } from './flowWebhook';
import {  } from './flowsProfileMetricCondition';
import {  } from './flowsProfileMetricConditionTimeframeFilter';
import {  } from './flowsSMSTrackingOptions';
import {  } from './formEnum';
import {  } from './formMethodFilter';
import {  } from './formResponseObjectResource';
import {  } from './formResponseObjectResourceAttributes';
import {  } from './formSeriesReportEnum';
import {  } from './formSeriesRequestDTO';
import {  } from './formSeriesRequestDTOResourceObject';
import {  } from './formSeriesRequestDTOResourceObjectAttributes';
import {  } from './formValuesReportEnum';
import {  } from './formValuesRequestDTO';
import {  } from './formValuesRequestDTOResourceObject';
import {  } from './formValuesRequestDTOResourceObjectAttributes';
import {  } from './formVersionABTest';
import {  } from './formVersionEnum';
import {  } from './formVersionResponseObjectResource';
import {  } from './formVersionResponseObjectResourceAttributes';
import {  } from './getAccountResponse';
import {  } from './getAccountResponseCollection';
import {  } from './getAccounts4XXResponse';
import {  } from './getAccounts4XXResponseErrorsInner';
import {  } from './getAccounts4XXResponseErrorsInnerSource';
import {  } from './getBulkProfileSuppressionsCreateJobResponse';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getBulkProfileSuppressionsRemoveJobResponse';
import {  } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import {  } from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
import {  } from './getCampaignMessageCampaignRelationshipResponse';
import {  } from './getCampaignMessageCampaignRelationshipResponseData';
import {  } from './getCampaignMessageImageRelationshipResponse';
import {  } from './getCampaignMessageImageRelationshipResponseData';
import {  } from './getCampaignMessageResponseCollectionCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocumentData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import { GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import {  } from './getCampaignMessageTemplateRelationshipResponse';
import {  } from './getCampaignMessagesRelationshipsResponseCollection';
import {  } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import {  } from './getCampaignRecipientEstimationJobResponse';
import {  } from './getCampaignRecipientEstimationResponse';
import {  } from './getCampaignResponse';
import {  } from './getCampaignResponseCollectionCompoundDocument';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInner';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
import { GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getCampaignResponseCompoundDocument';
import {  } from './getCampaignResponseData';
import {  } from './getCampaignResponseDataAllOfRelationships';
import {  } from './getCampaignSendJobResponse';
import {  } from './getCampaignTagsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import {  } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import {  } from './getCatalogCategoryDeleteJobResponse';
import {  } from './getCatalogCategoryDeleteJobResponseCollection';
import {  } from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogCategoryResponse';
import {  } from './getCatalogCategoryResponseCollection';
import {  } from './getCatalogCategoryResponseCollectionDataInner';
import {  } from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import {  } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import {  } from './getCatalogItemCreateJobResponseCompoundDocument';
import {  } from './getCatalogItemDeleteJobResponse';
import {  } from './getCatalogItemDeleteJobResponseCollection';
import {  } from './getCatalogItemDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogItemResponseCollectionCompoundDocument';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogItemResponseCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import {  } from './getCatalogItemUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollection';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogVariantCreateJobResponseCompoundDocument';
import {  } from './getCatalogVariantDeleteJobResponse';
import {  } from './getCatalogVariantDeleteJobResponseCollection';
import {  } from './getCatalogVariantDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogVariantResponse';
import {  } from './getCatalogVariantResponseCollection';
import {  } from './getCatalogVariantResponseCollectionDataInner';
import {  } from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import {  } from './getCouponCodeCouponRelationshipResponse';
import {  } from './getCouponCodeCouponRelationshipResponseData';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import {  } from './getCouponCodeCreateJobResponseCompoundDocument';
import {  } from './getCouponCodeResponseCollection';
import {  } from './getCouponCodeResponseCollectionCompoundDocument';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getCouponCodeResponseCollectionDataInner';
import {  } from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCouponCodeResponseCompoundDocument';
import {  } from './getCouponCodesRelationshipsResponseCollection';
import {  } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import {  } from './getCouponResponse';
import {  } from './getCouponResponseCollection';
import {  } from './getCustomMetricMetricsRelationshipsResponseCollection';
import {  } from './getCustomMetricResponse';
import {  } from './getCustomMetricResponseCollectionCompoundDocument';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
import {  } from './getCustomMetricResponseCompoundDocument';
import {  } from './getCustomMetricResponseData';
import {  } from './getCustomMetricResponseDataAllOfRelationships';
import {  } from './getDataSourceResponse';
import {  } from './getDataSourceResponseCollection';
import {  } from './getEventMetricRelationshipResponse';
import {  } from './getEventProfileRelationshipResponse';
import {  } from './getEventProfileRelationshipResponseData';
import {  } from './getEventResponseCollectionCompoundDocument';
import {  } from './getEventResponseCollectionCompoundDocumentDataInner';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import { GetEventResponseCollectionCompoundDocumentIncludedInnerHelper } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getEventResponseCompoundDocument';
import {  } from './getFlowActionFlowMessageRelationshipResponseCollection';
import {  } from './getFlowActionFlowRelationshipResponse';
import {  } from './getFlowActionResponse';
import {  } from './getFlowActionResponseCollection';
import {  } from './getFlowActionResponseCollectionDataInner';
import {  } from './getFlowActionResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowActionResponseCompoundDocument';
import {  } from './getFlowActionResponseCompoundDocumentData';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import { GetFlowActionResponseCompoundDocumentIncludedInnerHelper } from './getFlowActionResponseCompoundDocumentIncludedInner';
import {  } from './getFlowFlowActionRelationshipListResponseCollection';
import {  } from './getFlowMessageActionRelationshipResponse';
import {  } from './getFlowMessageResponseCollection';
import {  } from './getFlowMessageResponseCollectionDataInner';
import {  } from './getFlowMessageResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowMessageResponseCompoundDocument';
import {  } from './getFlowMessageResponseCompoundDocumentData';
import {  } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
import {  } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import {  } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import { GetFlowMessageResponseCompoundDocumentIncludedInnerHelper } from './getFlowMessageResponseCompoundDocumentIncludedInner';
import {  } from './getFlowMessageTemplateRelationshipResponse';
import {  } from './getFlowMessageTemplateRelationshipResponseData';
import {  } from './getFlowResponse';
import {  } from './getFlowResponseCollection';
import {  } from './getFlowResponseCollectionCompoundDocument';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import { GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getFlowResponseCollectionDataInner';
import {  } from './getFlowResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowTagsRelationshipsResponseCollection';
import {  } from './getFlowV2ResponseCompoundDocument';
import {  } from './getFlowV2ResponseCompoundDocumentData';
import {  } from './getFormResponse';
import {  } from './getFormResponseCollectionCompoundDocument';
import {  } from './getFormResponseCollectionCompoundDocumentDataInner';
import {  } from './getFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getFormResponseCompoundDocument';
import {  } from './getFormResponseCompoundDocumentData';
import {  } from './getFormResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions';
import {  } from './getFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner';
import {  } from './getFormVersionFormRelationshipResponse';
import {  } from './getFormVersionFormRelationshipResponseData';
import {  } from './getFormVersionResponse';
import {  } from './getFormVersionResponseCollection';
import {  } from './getFormVersionsRelationshipsResponseCollection';
import {  } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import {  } from './getImageResponse';
import {  } from './getImageResponseCollection';
import {  } from './getImportErrorResponseCollection';
import {  } from './getListFlowTriggersRelationshipsResponseCollection';
import {  } from './getListListResponseCollectionCompoundDocument';
import {  } from './getListListResponseCollectionCompoundDocumentDataInner';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import { GetListListResponseCollectionCompoundDocumentIncludedInnerHelper } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getListMemberResponseCollection';
import {  } from './getListMemberResponseCollectionDataInner';
import {  } from './getListProfilesRelationshipsResponseCollection';
import {  } from './getListResponseCollection';
import {  } from './getListResponseCollectionDataInner';
import {  } from './getListResponseCollectionDataInnerAllOfRelationships';
import {  } from './getListRetrieveResponseCompoundDocument';
import {  } from './getListRetrieveResponseCompoundDocumentData';
import {  } from './getListTagsRelationshipsResponseCollection';
import {  } from './getListTagsRelationshipsResponseCollectionDataInner';
import {  } from './getMappedMetricCustomMetricRelationshipResponse';
import {  } from './getMappedMetricCustomMetricRelationshipResponseData';
import {  } from './getMappedMetricMetricRelationshipResponse';
import {  } from './getMappedMetricResponseCollectionCompoundDocument';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import { GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getMappedMetricResponseCompoundDocument';
import {  } from './getMetricFlowTriggersRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import {  } from './getMetricPropertyMetricRelationshipResponse';
import {  } from './getMetricPropertyResponseCollection';
import {  } from './getMetricPropertyResponseCollectionDataInner';
import {  } from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
import {  } from './getMetricPropertyResponseCompoundDocument';
import {  } from './getMetricPropertyResponseCompoundDocumentData';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
import {  } from './getMetricResponse';
import {  } from './getMetricResponseCollection';
import {  } from './getMetricResponseCollectionCompoundDocument';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
import {  } from './getMetricResponseCompoundDocument';
import {  } from './getMetricResponseData';
import {  } from './getMetricResponseDataAllOfRelationships';
import {  } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import {  } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import {  } from './getProfileImportJobResponseCollectionCompoundDocument';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import {  } from './getProfileImportJobResponseCompoundDocument';
import {  } from './getProfileListsRelationshipsResponseCollection';
import {  } from './getProfileListsRelationshipsResponseCollectionDataInner';
import {  } from './getProfilePushTokensRelationshipsResponseCollection';
import {  } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import {  } from './getProfileResponse';
import {  } from './getProfileResponseCollection';
import {  } from './getProfileResponseCollectionCompoundDocument';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInner';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
import {  } from './getProfileResponseCompoundDocument';
import {  } from './getProfileResponseCompoundDocumentData';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
import { GetProfileResponseCompoundDocumentIncludedInnerHelper } from './getProfileResponseCompoundDocumentIncludedInner';
import {  } from './getProfileResponseData';
import {  } from './getProfileResponseDataAllOfRelationships';
import {  } from './getProfileSegmentsRelationshipsResponseCollection';
import {  } from './getPushTokenProfileRelationshipResponse';
import {  } from './getPushTokenResponseCollection';
import {  } from './getPushTokenResponseCollectionCompoundDocument';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInner';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import {  } from './getPushTokenResponseCollectionDataInner';
import {  } from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
import {  } from './getPushTokenResponseCompoundDocument';
import {  } from './getReviewResponseDTOCollectionCompoundDocument';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
import {  } from './getReviewResponseDTOCompoundDocument';
import {  } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import {  } from './getSegmentListResponseCollectionCompoundDocument';
import {  } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import {  } from './getSegmentMemberResponseCollection';
import {  } from './getSegmentMemberResponseCollectionDataInner';
import {  } from './getSegmentProfilesRelationshipsResponseCollection';
import {  } from './getSegmentResponseCollection';
import {  } from './getSegmentResponseCollectionDataInner';
import {  } from './getSegmentRetrieveResponseCompoundDocument';
import {  } from './getSegmentRetrieveResponseCompoundDocumentData';
import {  } from './getSegmentTagsRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import {  } from './getTagFlowRelationshipsResponseCollection';
import {  } from './getTagFlowRelationshipsResponseCollectionDataInner';
import {  } from './getTagGroupRelationshipResponse';
import {  } from './getTagGroupRelationshipResponseData';
import {  } from './getTagGroupResponse';
import {  } from './getTagGroupResponseCollection';
import {  } from './getTagGroupResponseCollectionDataInner';
import {  } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import {  } from './getTagGroupTagsRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollectionDataInner';
import {  } from './getTagResponseCollection';
import {  } from './getTagResponseCollectionCompoundDocument';
import {  } from './getTagResponseCollectionCompoundDocumentDataInner';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
import {  } from './getTagResponseCollectionDataInner';
import {  } from './getTagResponseCollectionDataInnerAllOfRelationships';
import {  } from './getTagResponseCompoundDocument';
import {  } from './getTagSegmentRelationshipsResponseCollection';
import {  } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import {  } from './getTemplateResponse';
import {  } from './getTemplateResponseCollection';
import {  } from './getTrackingSettingResponse';
import {  } from './getTrackingSettingResponseCollection';
import {  } from './getUniversalContentResponse';
import {  } from './getUniversalContentResponseCollection';
import {  } from './getWebFeedResponse';
import {  } from './getWebFeedResponseCollection';
import {  } from './getWebhookResponseCollectionCompoundDocument';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInner';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
import {  } from './getWebhookResponseCompoundDocument';
import {  } from './getWebhookTopicResponse';
import {  } from './getWebhookTopicResponseCollection';
import {  } from './greaterThanEnum';
import {  } from './greaterThanPositiveNumericFilter';
import {  } from './hTMLBlock';
import {  } from './hTMLBlockData';
import {  } from './hasEmailMarketing';
import {  } from './hasEmailMarketingConsent';
import {  } from './hasEmailMarketingConsentConsentStatus';
import {  } from './hasEmailMarketingNeverSubscribed';
import {  } from './hasEmailMarketingSubscribed';
import {  } from './hasEmailMarketingSubscribedFiltersInner';
import {  } from './hasPushMarketing';
import {  } from './hasPushMarketingConsent';
import {  } from './hasSMSMarketingConsent';
import {  } from './hasSMSMarketingSubscribed';
import {  } from './hasSMSMarketingSubscribedFiltersInner';
import {  } from './headerBlock';
import {  } from './headerEnum';
import {  } from './horizontalRuleBlock';
import {  } from './horizontalRuleEnum';
import {  } from './htmlEnum';
import {  } from './imageBlock';
import {  } from './imageCreateQuery';
import {  } from './imageCreateQueryResourceObject';
import {  } from './imageCreateQueryResourceObjectAttributes';
import {  } from './imageEnum';
import {  } from './imagePartialUpdateQuery';
import {  } from './imagePartialUpdateQueryResourceObject';
import {  } from './imagePartialUpdateQueryResourceObjectAttributes';
import {  } from './imageResponseObjectResource';
import {  } from './imageResponseObjectResourceAttributes';
import {  } from './immediateEnum';
import {  } from './immediateSendStrategy';
import {  } from './importErrorEnum';
import {  } from './importErrorResponseObjectResource';
import {  } from './importErrorResponseObjectResourceAttributes';
import {  } from './inEnum';
import {  } from './inStringArrayFilter';
import {  } from './inTheLastBaseRelativeDateFilter';
import {  } from './inTheLastEnum';
import {  } from './inboundMessageEnum';
import {  } from './inboundMessageMethodFilter';
import {  } from './increment';
import {  } from './incrementOneEnum';
import {  } from './integrationEnum';
import {  } from './internalServiceAction';
import {  } from './internalServiceEnum';
import {  } from './invalidEmailDateEnum';
import {  } from './invalidEmailDateFilter';
import {  } from './isDoubleOptInEnum';
import {  } from './isSetEnum';
import {  } from './isSetExistenceFilter';
import {  } from './lessThanEnum';
import {  } from './lessThanPositiveNumericFilter';
import {  } from './link';
import {  } from './listContainsOperatorFilter';
import {  } from './listCreateQuery';
import {  } from './listCreateQueryResourceObject';
import {  } from './listCreateQueryResourceObjectAttributes';
import {  } from './listEnum';
import {  } from './listLengthFilter';
import {  } from './listListResponseObjectResource';
import {  } from './listListResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceExtended';
import {  } from './listMemberResponseObjectResourceExtendedAttributes';
import {  } from './listMembersAddQuery';
import {  } from './listMembersDeleteQuery';
import {  } from './listPartialUpdateQuery';
import {  } from './listPartialUpdateQueryResourceObject';
import {  } from './listRegexOperatorContainsFilter';
import {  } from './listResponseObjectResource';
import {  } from './listRetrieveResponseObjectResourceAttributes';
import {  } from './listRetrieveResponseObjectResourceExtended';
import {  } from './listRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './listSetFilter';
import {  } from './listSubstringFilter';
import {  } from './listTrigger';
import {  } from './listUpdateAction';
import {  } from './listUpdateActionData';
import {  } from './listUpdateEnum';
import {  } from './localStaticSend';
import {  } from './lowInventoryCondition';
import {  } from './lowInventoryConditionFilter';
import {  } from './lowInventoryConditionGroup';
import {  } from './lowInventoryEnum';
import {  } from './lowInventoryPropertyEnum';
import {  } from './lowInventoryTrigger';
import {  } from './mailboxProviderEnum';
import {  } from './mailboxProviderMethodFilter';
import {  } from './manualAddEnum';
import {  } from './manualAddMethodFilter';
import {  } from './manualImportEnum';
import {  } from './manualImportMethodFilter';
import {  } from './manualRemoveEnum';
import {  } from './manualRemoveMethodFilter';
import {  } from './manualSuppressionDateEnum';
import {  } from './manualSuppressionDateFilter';
import {  } from './mappedMetricEnum';
import {  } from './mappedMetricPartialUpdateQuery';
import {  } from './mappedMetricPartialUpdateQueryResourceObject';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
import {  } from './mappedMetricResponseObjectResource';
import {  } from './mappedMetricResponseObjectResourceAttributes';
import {  } from './messageBlockedEnum';
import {  } from './messageBlockedMethodFilter';
import {  } from './methodEnum';
import {  } from './metricAggregateEnum';
import {  } from './metricAggregateQuery';
import {  } from './metricAggregateQueryResourceObject';
import {  } from './metricAggregateQueryResourceObjectAttributes';
import {  } from './metricAggregateRowDTO';
import {  } from './metricCreateQueryResourceObject';
import {  } from './metricCreateQueryResourceObjectAttributes';
import {  } from './metricEnum';
import {  } from './metricPropertyCondition';
import {  } from './metricPropertyConditionFilter';
import {  } from './metricPropertyConditionGroup';
import {  } from './metricPropertyEnum';
import {  } from './metricPropertyResponseObjectResourceAttributes';
import {  } from './metricPropertyResponseObjectResourceExtended';
import {  } from './metricPropertyResponseObjectResourceExtendedAttributes';
import {  } from './metricResponseObjectResource';
import {  } from './metricResponseObjectResourceAttributes';
import {  } from './metricTrigger';
import {  } from './mobilePushBadge';
import {  } from './mobilePushBadgeBadgeOptions';
import {  } from './mobilePushContent';
import {  } from './mobilePushContentCreate';
import {  } from './mobilePushContentUpdate';
import {  } from './mobilePushEnum';
import {  } from './mobilePushMessageContent';
import {  } from './mobilePushMessageSilentDefinition';
import {  } from './mobilePushMessageSilentDefinitionCreate';
import {  } from './mobilePushMessageSilentDefinitionUpdate';
import {  } from './mobilePushMessageStandardDefinition';
import {  } from './mobilePushMessageStandardDefinitionCreate';
import {  } from './mobilePushMessageStandardDefinitionUpdate';
import {  } from './mobilePushNoBadge';
import {  } from './mobilePushOptions';
import {  } from './mobilePushOptionsBadge';
import {  } from './mobilePushOptionsOnOpen';
import {  } from './neverSubscribedEnum';
import {  } from './noEmailMarketing';
import {  } from './noEmailMarketingConsent';
import {  } from './noEmailMarketingConsentConsentStatus';
import {  } from './noEmailMarketingFiltersInner';
import {  } from './noEmailMarketingNeverSubscribed';
import {  } from './noEmailMarketingSubscribed';
import {  } from './noEmailMarketingUnsubscribed';
import {  } from './noEmailMarketingUnsubscribedFiltersInner';
import {  } from './noPushMarketing';
import {  } from './noPushMarketingConsent';
import {  } from './noSMSMarketing';
import {  } from './noSMSMarketingConsent';
import {  } from './noSMSMarketingConsentConsentStatus';
import {  } from './noSMSMarketingNeverSubscribed';
import {  } from './noSMSMarketingUnsubscribed';
import {  } from './noSMSMarketingUnsubscribedFiltersInner';
import {  } from './nonLocalStaticSend';
import {  } from './notEqualsEnum';
import {  } from './numericEnum';
import {  } from './numericOperatorFilter';
import {  } from './numericRangeFilter';
import {  } from './objectLinks';
import {  } from './onlyRelatedLinks';
import {  } from './onsiteProfileCreateQueryResourceObject';
import {  } from './onsiteProfileCreateQueryResourceObjectAttributes';
import {  } from './onsiteProfileMeta';
import {  } from './openAppEnum';
import {  } from './otherEnum';
import {  } from './patchCampaignMessageResponse';
import {  } from './patchCampaignMessageResponseData';
import {  } from './patchCampaignResponse';
import {  } from './patchCatalogCategoryResponse';
import {  } from './patchCatalogItemResponse';
import {  } from './patchCatalogVariantResponse';
import {  } from './patchCouponCodeResponse';
import {  } from './patchCouponResponse';
import {  } from './patchCustomMetricResponse';
import {  } from './patchFlowResponse';
import {  } from './patchFlowResponseData';
import {  } from './patchImageResponse';
import {  } from './patchListPartialUpdateResponse';
import {  } from './patchMappedMetricResponse';
import {  } from './patchMappedMetricResponseData';
import {  } from './patchProfileResponse';
import {  } from './patchReviewResponseDTO';
import {  } from './patchReviewResponseDTOData';
import {  } from './patchReviewResponseDTODataRelationships';
import {  } from './patchReviewResponseDTODataRelationshipsItem';
import {  } from './patchReviewResponseDTODataRelationshipsItemData';
import {  } from './patchSegmentPartialUpdateResponse';
import {  } from './patchTagGroupResponse';
import {  } from './patchTemplateResponse';
import {  } from './patchTrackingSettingResponse';
import {  } from './patchTrackingSettingResponseData';
import {  } from './patchUniversalContentResponse';
import {  } from './patchWebFeedResponse';
import {  } from './patchWebhookResponse';
import {  } from './pendingEnum';
import {  } from './postBulkProfileSuppressionsCreateJobResponse';
import {  } from './postBulkProfileSuppressionsCreateJobResponseData';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
import {  } from './postBulkProfileSuppressionsRemoveJobResponse';
import {  } from './postBulkProfileSuppressionsRemoveJobResponseData';
import {  } from './postCampaignMessageResponse';
import {  } from './postCampaignMessageResponseData';
import {  } from './postCampaignMessageResponseDataAttributes';
import {  } from './postCampaignMessageResponseDataAttributesContent';
import {  } from './postCampaignMessageResponseDataRelationships';
import {  } from './postCampaignRecipientEstimationJobResponse';
import {  } from './postCampaignRecipientEstimationJobResponseData';
import {  } from './postCampaignResponse';
import {  } from './postCampaignResponseData';
import {  } from './postCampaignSendJobResponse';
import {  } from './postCampaignSendJobResponseData';
import {  } from './postCampaignValuesResponseDTO';
import {  } from './postCampaignValuesResponseDTOData';
import {  } from './postCampaignValuesResponseDTODataAttributes';
import {  } from './postCampaignValuesResponseDTODataRelationships';
import {  } from './postCatalogCategoryCreateJobResponse';
import {  } from './postCatalogCategoryCreateJobResponseData';
import {  } from './postCatalogCategoryDeleteJobResponse';
import {  } from './postCatalogCategoryDeleteJobResponseData';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationships';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
import {  } from './postCatalogCategoryResponse';
import {  } from './postCatalogCategoryResponseData';
import {  } from './postCatalogCategoryResponseDataRelationships';
import {  } from './postCatalogCategoryResponseDataRelationshipsItems';
import {  } from './postCatalogCategoryUpdateJobResponse';
import {  } from './postCatalogCategoryUpdateJobResponseData';
import {  } from './postCatalogItemCreateJobResponse';
import {  } from './postCatalogItemCreateJobResponseData';
import {  } from './postCatalogItemDeleteJobResponse';
import {  } from './postCatalogItemDeleteJobResponseData';
import {  } from './postCatalogItemDeleteJobResponseDataRelationships';
import {  } from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
import {  } from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
import {  } from './postCatalogItemResponse';
import {  } from './postCatalogItemResponseData';
import {  } from './postCatalogItemUpdateJobResponse';
import {  } from './postCatalogItemUpdateJobResponseData';
import {  } from './postCatalogVariantCreateJobResponse';
import {  } from './postCatalogVariantCreateJobResponseData';
import {  } from './postCatalogVariantDeleteJobResponse';
import {  } from './postCatalogVariantDeleteJobResponseData';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationships';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
import {  } from './postCatalogVariantResponse';
import {  } from './postCatalogVariantResponseData';
import {  } from './postCatalogVariantResponseDataRelationships';
import {  } from './postCatalogVariantResponseDataRelationshipsItem';
import {  } from './postCatalogVariantResponseDataRelationshipsItemData';
import {  } from './postCatalogVariantUpdateJobResponse';
import {  } from './postCatalogVariantUpdateJobResponseData';
import {  } from './postCouponCodeCreateJobResponse';
import {  } from './postCouponCodeCreateJobResponseData';
import {  } from './postCouponCodeResponse';
import {  } from './postCouponCodeResponseData';
import {  } from './postCouponCodeResponseDataRelationships';
import {  } from './postCouponCodeResponseDataRelationshipsProfile';
import {  } from './postCouponCodeResponseDataRelationshipsProfileData';
import {  } from './postCouponResponse';
import {  } from './postCouponResponseData';
import {  } from './postCustomMetricResponse';
import {  } from './postCustomMetricResponseData';
import {  } from './postDataSourceResponse';
import {  } from './postDataSourceResponseData';
import {  } from './postFlowSeriesResponseDTO';
import {  } from './postFlowSeriesResponseDTOData';
import {  } from './postFlowSeriesResponseDTODataAttributes';
import {  } from './postFlowV2Response';
import {  } from './postFlowV2ResponseData';
import {  } from './postFlowV2ResponseDataAttributes';
import {  } from './postFlowValuesResponseDTO';
import {  } from './postFlowValuesResponseDTOData';
import {  } from './postFlowValuesResponseDTODataAttributes';
import {  } from './postFlowValuesResponseDTODataRelationships';
import {  } from './postFormSeriesResponseDTO';
import {  } from './postFormSeriesResponseDTOData';
import {  } from './postFormSeriesResponseDTODataAttributes';
import {  } from './postFormValuesResponseDTO';
import {  } from './postFormValuesResponseDTOData';
import {  } from './postFormValuesResponseDTODataAttributes';
import {  } from './postImageResponse';
import {  } from './postImageResponseData';
import {  } from './postListCreateResponse';
import {  } from './postListCreateResponseData';
import {  } from './postListCreateResponseDataRelationships';
import {  } from './postListCreateResponseDataRelationshipsProfiles';
import {  } from './postListCreateResponseDataRelationshipsProfilesDataInner';
import {  } from './postMetricAggregateResponse';
import {  } from './postMetricAggregateResponseData';
import {  } from './postMetricAggregateResponseDataAttributes';
import {  } from './postProfileImportJobResponse';
import {  } from './postProfileImportJobResponseData';
import {  } from './postProfileImportJobResponseDataRelationships';
import {  } from './postProfileImportJobResponseDataRelationshipsImportErrors';
import {  } from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
import {  } from './postProfileImportJobResponseDataRelationshipsProfiles';
import {  } from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
import {  } from './postProfileMergeResponse';
import {  } from './postProfileMergeResponseData';
import {  } from './postProfileResponse';
import {  } from './postProfileResponseData';
import {  } from './postProfileResponseDataAttributes';
import {  } from './postSegmentCreateResponse';
import {  } from './postSegmentCreateResponseData';
import {  } from './postSegmentSeriesResponseDTO';
import {  } from './postSegmentSeriesResponseDTOData';
import {  } from './postSegmentSeriesResponseDTODataAttributes';
import {  } from './postSegmentValuesResponseDTO';
import {  } from './postSegmentValuesResponseDTOData';
import {  } from './postSegmentValuesResponseDTODataAttributes';
import {  } from './postTagGroupResponse';
import {  } from './postTagGroupResponseData';
import {  } from './postTagGroupResponseDataRelationships';
import {  } from './postTagResponse';
import {  } from './postTagResponseData';
import {  } from './postTagResponseDataRelationships';
import {  } from './postTagResponseDataRelationshipsCampaigns';
import {  } from './postTagResponseDataRelationshipsCampaignsDataInner';
import {  } from './postTemplateResponse';
import {  } from './postTemplateResponseData';
import {  } from './postUniversalContentResponse';
import {  } from './postUniversalContentResponseData';
import {  } from './postWebFeedResponse';
import {  } from './postWebFeedResponseData';
import {  } from './postWebhookResponse';
import {  } from './postWebhookResponseData';
import {  } from './predictiveAnalytics';
import {  } from './preferencePageEnum';
import {  } from './preferencePageFilter';
import {  } from './preferencePageMethodFilter';
import {  } from './priceDropCondition';
import {  } from './priceDropConditionFilter';
import {  } from './priceDropConditionGroup';
import {  } from './priceDropEnum';
import {  } from './priceDropPropertyEnum';
import {  } from './priceDropTrigger';
import {  } from './priorityEnum';
import {  } from './privateInformationEnum';
import {  } from './productBlock';
import {  } from './productEnum';
import {  } from './profanityOrInappropriateEnum';
import {  } from './profileBulkImportJobEnum';
import {  } from './profileCreateQuery';
import {  } from './profileCreateQueryResourceObject';
import {  } from './profileCreateQueryResourceObjectAttributes';
import {  } from './profileEnum';
import {  } from './profileGroupMembershipEnum';
import {  } from './profileHasGroupMembershipCondition';
import {  } from './profileHasGroupMembershipConditionTimeframeFilter';
import {  } from './profileHasNotReceivedEmailMessageCondition';
import {  } from './profileHasNotReceivedPushMessageCondition';
import {  } from './profileHasNotReceivedSmsMessageCondition';
import {  } from './profileIdentifierDTOResourceObject';
import {  } from './profileIdentifierDTOResourceObjectAttributes';
import {  } from './profileImportJobCreateQuery';
import {  } from './profileImportJobCreateQueryResourceObject';
import {  } from './profileImportJobCreateQueryResourceObjectAttributes';
import {  } from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './profileImportJobCreateQueryResourceObjectRelationships';
import {  } from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
import {  } from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
import {  } from './profileImportJobResponseObjectResource';
import {  } from './profileImportJobResponseObjectResourceAttributes';
import {  } from './profileLocation';
import {  } from './profileMarketingConsentCondition';
import {  } from './profileMarketingConsentConditionConsent';
import {  } from './profileMarketingConsentEnum';
import {  } from './profileMergeEnum';
import {  } from './profileMergeQuery';
import {  } from './profileMergeQueryResourceObject';
import {  } from './profileMergeQueryResourceObjectRelationships';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import {  } from './profileMeta';
import {  } from './profileMetaPatchProperties';
import {  } from './profileMetricEnum';
import {  } from './profileMetricPropertyFilter';
import {  } from './profileMetricPropertyFilterFilter';
import {  } from './profileNoGroupMembershipCondition';
import {  } from './profileNotInFlowCondition';
import {  } from './profileNotInFlowConditionTimeframeFilter';
import {  } from './profileNotInFlowEnum';
import {  } from './profileNotSentEmailEnum';
import {  } from './profileNotSentPushEnum';
import {  } from './profileNotSentSmsEnum';
import {  } from './profileOperationDelete';
import {  } from './profileOperationUpdateOrCreateBoolean';
import {  } from './profileOperationUpdateOrCreateDate';
import {  } from './profileOperationUpdateOrCreateList';
import {  } from './profileOperationUpdateOrCreateNumeric';
import {  } from './profileOperationUpdateOrCreateString';
import {  } from './profilePartialUpdateQuery';
import {  } from './profilePartialUpdateQueryResourceObject';
import {  } from './profilePartialUpdateQueryResourceObjectAttributes';
import {  } from './profilePostalCodeDistanceCondition';
import {  } from './profilePostalCodeDistanceConditionFilter';
import {  } from './profilePostalCodeDistanceEnum';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import {  } from './profilePredictiveAnalyticsDateCondition';
import {  } from './profilePredictiveAnalyticsEnum';
import {  } from './profilePredictiveAnalyticsNumericCondition';
import {  } from './profilePredictiveAnalyticsStringCondition';
import {  } from './profilePredictiveAnalyticsStringFilter';
import {  } from './profilePredictiveAnalyticsStringFilterOperator';
import {  } from './profilePropertyCondition';
import {  } from './profilePropertyConditionFilter';
import {  } from './profilePropertyDateTrigger';
import {  } from './profilePropertyEnum';
import {  } from './profileRandomSampleCondition';
import {  } from './profileRegionCondition';
import {  } from './profileRegionEnum';
import {  } from './profileResponseObjectResource';
import {  } from './profileResponseObjectResourceAttributes';
import {  } from './profileResponseObjectResourceExtended';
import {  } from './profileResponseObjectResourceExtendedAttributes';
import {  } from './profileSampleEnum';
import {  } from './profileSubscriptionBulkCreateJobEnum';
import {  } from './profileSubscriptionBulkDeleteJobEnum';
import {  } from './profileSubscriptionCreateQueryResourceObject';
import {  } from './profileSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './profileSubscriptionDeleteQueryResourceObject';
import {  } from './profileSubscriptionDeleteQueryResourceObjectAttributes';
import {  } from './profileSuppressionBulkCreateJobEnum';
import {  } from './profileSuppressionBulkDeleteJobEnum';
import {  } from './profileSuppressionCreateQueryResourceObject';
import {  } from './profileSuppressionCreateQueryResourceObjectAttributes';
import {  } from './profileSuppressionDeleteQueryResourceObject';
import {  } from './profileSuppressionDeleteQueryResourceObjectAttributes';
import {  } from './profileUpsertQuery';
import {  } from './profileUpsertQueryResourceObject';
import {  } from './profileUpsertQueryResourceObjectAttributes';
import {  } from './property';
import {  } from './providedLandlineEnum';
import {  } from './providedLandlineMethodFilter';
import {  } from './providedNoAgeEnum';
import {  } from './providedNoAgeMethodFilter';
import {  } from './publishedEnum';
import {  } from './pushChannel';
import {  } from './pushEnum';
import {  } from './pushMarketing';
import {  } from './pushOnOpenApp';
import {  } from './pushOnOpenDeepLink';
import {  } from './pushProfileUpsertQueryResourceObject';
import {  } from './pushProfileUpsertQueryResourceObjectAttributes';
import {  } from './pushSendOptions';
import {  } from './pushTokenCreateQuery';
import {  } from './pushTokenCreateQueryResourceObject';
import {  } from './pushTokenCreateQueryResourceObjectAttributes';
import {  } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import {  } from './pushTokenEnum';
import {  } from './pushTokenResponseObjectResource';
import {  } from './pushTokenResponseObjectResourceAttributes';
import {  } from './rankEnum';
import {  } from './rejectReasonFake';
import {  } from './rejectReasonMisleading';
import {  } from './rejectReasonOther';
import {  } from './rejectReasonPrivateInformation';
import {  } from './rejectReasonProfanity';
import {  } from './rejectReasonUnrelated';
import {  } from './rejectedEnum';
import {  } from './relationshipLinks';
import {  } from './relativeAnniversaryDateFilter';
import {  } from './relativeDateOperatorBaseFilter';
import {  } from './relativeDateRangeFilter';
import {  } from './renderOptions';
import {  } from './renderOptionsSubObject';
import {  } from './reviewBlock';
import {  } from './reviewEnum';
import {  } from './reviewPatchQuery';
import {  } from './reviewPatchQueryResourceObject';
import {  } from './reviewPatchQueryResourceObjectAttributes';
import {  } from './reviewPatchQueryResourceObjectAttributesStatus';
import {  } from './reviewProductDTO';
import {  } from './reviewPublicReply';
import {  } from './reviewResponseDTOObjectResource';
import {  } from './reviewResponseDTOObjectResourceAttributes';
import {  } from './reviewResponseDTOObjectResourceAttributesStatus';
import {  } from './reviewStatusFeatured';
import {  } from './reviewStatusPending';
import {  } from './reviewStatusPublished';
import {  } from './reviewStatusRejected';
import {  } from './reviewStatusRejectedRejectionReason';
import {  } from './reviewStatusUnpublished';
import {  } from './sMSChannel';
import {  } from './sMSContent';
import {  } from './sMSContentCreate';
import {  } from './sMSContentSubObject';
import {  } from './sMSMarketing';
import {  } from './sMSMessageContent';
import {  } from './sMSMessageDefinition';
import {  } from './sMSMessageDefinitionCreate';
import {  } from './sMSRenderOptions';
import {  } from './sMSSendOptions';
import {  } from './sMSSubscriptionParameters';
import {  } from './sMSTransactional';
import {  } from './sMSUnsubscriptionParameters';
import {  } from './section';
import {  } from './sectionEnum';
import {  } from './segmentCreateQuery';
import {  } from './segmentCreateQueryResourceObject';
import {  } from './segmentCreateQueryResourceObjectAttributes';
import {  } from './segmentDefinition';
import {  } from './segmentEnum';
import {  } from './segmentListResponseObjectResource';
import {  } from './segmentListResponseObjectResourceAttributes';
import {  } from './segmentMemberResponseObjectResourceAttributes';
import {  } from './segmentMemberResponseObjectResourceExtended';
import {  } from './segmentMemberResponseObjectResourceExtendedAttributes';
import {  } from './segmentPartialUpdateQuery';
import {  } from './segmentPartialUpdateQueryResourceObject';
import {  } from './segmentPartialUpdateQueryResourceObjectAttributes';
import {  } from './segmentResponseObjectResource';
import {  } from './segmentRetrieveResponseObjectResourceAttributes';
import {  } from './segmentRetrieveResponseObjectResourceExtended';
import {  } from './segmentRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './segmentSeriesReportEnum';
import {  } from './segmentSeriesRequestDTO';
import {  } from './segmentSeriesRequestDTOResourceObject';
import {  } from './segmentSeriesRequestDTOResourceObjectAttributes';
import {  } from './segmentTrigger';
import {  } from './segmentValuesReportEnum';
import {  } from './segmentValuesRequestDTO';
import {  } from './segmentValuesRequestDTOResourceObject';
import {  } from './segmentValuesRequestDTOResourceObjectAttributes';
import {  } from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
import {  } from './segmentsProfileMetricCondition';
import {  } from './segmentsProfileMetricConditionTimeframeFilter';
import {  } from './sendEmailAction';
import {  } from './sendEmailActionData';
import {  } from './sendEmailEnum';
import {  } from './sendInternalAlertAction';
import {  } from './sendInternalAlertActionData';
import {  } from './sendInternalAlertEnum';
import {  } from './sendMobilePushEnum';
import {  } from './sendOptions';
import {  } from './sendPushNotificationAction';
import {  } from './sendPushNotificationActionData';
import {  } from './sendSmsAction';
import {  } from './sendSmsActionData';
import {  } from './sendSmsEnum';
import {  } from './sendTime';
import {  } from './sendTimeSubObject';
import {  } from './sendWebhookAction';
import {  } from './sendWebhookActionData';
import {  } from './sendWebhookEnum';
import {  } from './seriesData';
import {  } from './serverBISSubscriptionCreateQuery';
import {  } from './serverBISSubscriptionCreateQueryResourceObject';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import {  } from './setCountEnum';
import {  } from './setPropertyEnum';
import {  } from './sftpEnum';
import {  } from './sftpMethodFilter';
import {  } from './shopifyEnum';
import {  } from './shopifyIntegrationFilter';
import {  } from './shopifyIntegrationMethodFilter';
import {  } from './silentEnum';
import {  } from './sinceFlowStartDateFilter';
import {  } from './smartSendTimeEnum';
import {  } from './smartSendTimeStrategy';
import {  } from './smsEnum';
import {  } from './socialBlock';
import {  } from './socialEnum';
import {  } from './spacerBlock';
import {  } from './spacerEnum';
import {  } from './spamComplaintEnum';
import {  } from './spamComplaintMethodFilter';
import {  } from './splitAction';
import {  } from './splitBlock';
import {  } from './splitEnum';
import {  } from './splitLinks';
import {  } from './standardEnum';
import {  } from './staticCount';
import {  } from './staticDateFilter';
import {  } from './staticDateRangeFilter';
import {  } from './staticEnum';
import {  } from './staticSendStrategy';
import {  } from './staticSendStrategyOptions';
import {  } from './staticTrackingParam';
import {  } from './statusDateEnum';
import {  } from './statusDateFilter';
import {  } from './statusDateFilterFilter';
import {  } from './streetAddress';
import {  } from './stringArrayOperatorFilter';
import {  } from './stringEnum';
import {  } from './stringInArrayFilter';
import {  } from './stringOperatorFilter';
import {  } from './stringPhoneOperatorArrayFilter';
import {  } from './subscribedEnum';
import {  } from './subscriptionChannels';
import {  } from './subscriptionCreateJobCreateQuery';
import {  } from './subscriptionCreateJobCreateQueryResourceObject';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './subscriptionDeleteJobCreateQuery';
import {  } from './subscriptionDeleteJobCreateQueryResourceObject';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './subscriptionParameters';
import {  } from './subscriptions';
import {  } from './suppressionCreateJobCreateQuery';
import {  } from './suppressionCreateJobCreateQueryResourceObject';
import {  } from './suppressionCreateJobCreateQueryResourceObjectAttributes';
import {  } from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationships';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
import {  } from './suppressionDeleteJobCreateQuery';
import {  } from './suppressionDeleteJobCreateQueryResourceObject';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
import {  } from './tableBlock';
import {  } from './tableEnum';
import {  } from './tagCampaignOp';
import {  } from './tagCampaignOpDataInner';
import {  } from './tagCreateQuery';
import {  } from './tagCreateQueryResourceObject';
import {  } from './tagCreateQueryResourceObjectRelationships';
import {  } from './tagCreateQueryResourceObjectRelationshipsTagGroup';
import {  } from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
import {  } from './tagEnum';
import {  } from './tagFlowOp';
import {  } from './tagFlowOpDataInner';
import {  } from './tagGroupCreateQuery';
import {  } from './tagGroupCreateQueryResourceObject';
import {  } from './tagGroupCreateQueryResourceObjectAttributes';
import {  } from './tagGroupEnum';
import {  } from './tagGroupResponseObjectResource';
import {  } from './tagGroupResponseObjectResourceAttributes';
import {  } from './tagGroupUpdateQuery';
import {  } from './tagGroupUpdateQueryResourceObject';
import {  } from './tagGroupUpdateQueryResourceObjectAttributes';
import {  } from './tagListOp';
import {  } from './tagListOpDataInner';
import {  } from './tagResponseObjectResource';
import {  } from './tagResponseObjectResourceAttributes';
import {  } from './tagSegmentOp';
import {  } from './tagSegmentOpDataInner';
import {  } from './tagUpdateQuery';
import {  } from './tagUpdateQueryResourceObject';
import {  } from './targetDateAction';
import {  } from './targetDateActionData';
import {  } from './targetDateEnum';
import {  } from './templateCloneQuery';
import {  } from './templateCloneQueryResourceObject';
import {  } from './templateCloneQueryResourceObjectAttributes';
import {  } from './templateCreateQuery';
import {  } from './templateCreateQueryResourceObject';
import {  } from './templateCreateQueryResourceObjectAttributes';
import {  } from './templateEnum';
import {  } from './templateRenderQuery';
import {  } from './templateRenderQueryResourceObject';
import {  } from './templateRenderQueryResourceObjectAttributes';
import {  } from './templateResponseObjectResource';
import {  } from './templateResponseObjectResourceAttributes';
import {  } from './templateUniversalContentEnum';
import {  } from './templateUpdateQuery';
import {  } from './templateUpdateQueryResourceObject';
import {  } from './templateUpdateQueryResourceObjectAttributes';
import {  } from './textBlock';
import {  } from './textBlockData';
import {  } from './textBlockStyles';
import {  } from './textEnum';
import {  } from './throttledEnum';
import {  } from './throttledSendStrategy';
import {  } from './timeDelayAction';
import {  } from './timeDelayActionData';
import {  } from './timeDelayEnum';
import {  } from './timeframe';
import {  } from './trackingParamDTO';
import {  } from './trackingParamDTOCampaign';
import {  } from './trackingParamDTOFlow';
import {  } from './trackingSettingEnum';
import {  } from './trackingSettingPartialUpdateQuery';
import {  } from './trackingSettingPartialUpdateQueryResourceObject';
import {  } from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
import {  } from './trackingSettingResponseObjectResource';
import {  } from './trackingSettingResponseObjectResourceAttributes';
import {  } from './triggerBranchAction';
import {  } from './triggerBranchActionData';
import {  } from './triggerSplitEnum';
import {  } from './universalContentCreateQuery';
import {  } from './universalContentCreateQueryResourceObject';
import {  } from './universalContentCreateQueryResourceObjectAttributes';
import {  } from './universalContentCreateQueryResourceObjectAttributesDefinition';
import {  } from './universalContentPartialUpdateQuery';
import {  } from './universalContentPartialUpdateQueryResourceObject';
import {  } from './universalContentPartialUpdateQueryResourceObjectAttributes';
import {  } from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
import {  } from './universalContentResponseObjectResource';
import {  } from './universalContentResponseObjectResourceAttributes';
import {  } from './universalContentResponseObjectResourceAttributesDefinition';
import {  } from './unpublishedEnum';
import {  } from './unrelatedEnum';
import {  } from './unsubscribedEnum';
import {  } from './unsubscriptionChannels';
import {  } from './unsubscriptionParameters';
import {  } from './unsupportedBlock';
import {  } from './unsupportedEnum';
import {  } from './unsupportedSendStrategy';
import {  } from './updateProfileAction';
import {  } from './updateProfileActionData';
import {  } from './updateProfileActionDataProfileOperationsInner';
import {  } from './updateProfileEnum';
import {  } from './utmParam';
import {  } from './utmParamInfo';
import {  } from './valuesData';
import {  } from './videoBlock';
import {  } from './videoEnum';
import {  } from './webFeedCreateQuery';
import {  } from './webFeedCreateQueryResourceObject';
import {  } from './webFeedCreateQueryResourceObjectAttributes';
import {  } from './webFeedEnum';
import {  } from './webFeedPartialUpdateQuery';
import {  } from './webFeedPartialUpdateQueryResourceObject';
import {  } from './webFeedPartialUpdateQueryResourceObjectAttributes';
import {  } from './webFeedResponseObjectResource';
import {  } from './webFeedResponseObjectResourceAttributes';
import {  } from './webhookCreateQuery';
import {  } from './webhookCreateQueryResourceObject';
import {  } from './webhookCreateQueryResourceObjectAttributes';
import {  } from './webhookCreateQueryResourceObjectRelationships';
import {  } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
import {  } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
import {  } from './webhookEnum';
import {  } from './webhookPartialUpdateQuery';
import {  } from './webhookPartialUpdateQueryResourceObject';
import {  } from './webhookPartialUpdateQueryResourceObjectAttributes';
import {  } from './webhookPartialUpdateQueryResourceObjectRelationships';
import {  } from './webhookResponseObjectResource';
import {  } from './webhookResponseObjectResourceAttributes';
import {  } from './webhookTopicEnum';
import {  } from './webhookTopicResponseObjectResource';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AbTestActionData.StatusEnum": AbTestActionData.StatusEnum,
        "AbTestActionData.ExperimentStatusEnum": AbTestActionData.ExperimentStatusEnum,
        "AbTestActionDataCurrentExperiment.WinnerMetricEnum": AbTestActionDataCurrentExperiment.WinnerMetricEnum,
        "AbTestCampaignEnum": AbTestCampaignEnum,
        "AbTestEnum": AbTestEnum,
        "AccountEnum": AccountEnum,
        "AlltimeDateFilter.OperatorEnum": AlltimeDateFilter.OperatorEnum,
        "AnniversaryDateFilter.OperatorEnum": AnniversaryDateFilter.OperatorEnum,
        "AnyEnum": AnyEnum,
        "ApiEnum": ApiEnum,
        "AttributionEnum": AttributionEnum,
        "BackInStockDelayEnum": BackInStockDelayEnum,
        "BackInStockEnum": BackInStockEnum,
        "BackInStockSubscriptionEnum": BackInStockSubscriptionEnum,
        "BlockDisplayOptions.ShowOnEnum": BlockDisplayOptions.ShowOnEnum,
        "BlockEnum": BlockEnum,
        "BooleanEnum": BooleanEnum,
        "BooleanFilter.OperatorEnum": BooleanFilter.OperatorEnum,
        "BounceDateEnum": BounceDateEnum,
        "BranchEnum": BranchEnum,
        "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum,
        "BulkRemoveEnum": BulkRemoveEnum,
        "ButtonEnum": ButtonEnum,
        "CalendarDateFilter.OperatorEnum": CalendarDateFilter.OperatorEnum,
        "CampaignEnum": CampaignEnum,
        "CampaignMessageEnum": CampaignMessageEnum,
        "CampaignMessageIncrement.BadgeConfigEnum": CampaignMessageIncrement.BadgeConfigEnum,
        "CampaignMessageProperty.BadgeConfigEnum": CampaignMessageProperty.BadgeConfigEnum,
        "CampaignMessageStaticCount.BadgeConfigEnum": CampaignMessageStaticCount.BadgeConfigEnum,
        "CampaignRecipientEstimationEnum": CampaignRecipientEstimationEnum,
        "CampaignRecipientEstimationJobEnum": CampaignRecipientEstimationJobEnum,
        "CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum": CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignResponseObjectResourceAttributes.StatusEnum": CampaignResponseObjectResourceAttributes.StatusEnum,
        "CampaignSendJobEnum": CampaignSendJobEnum,
        "CampaignSendJobPartialUpdateQueryResourceObjectAttributes.ActionEnum": CampaignSendJobPartialUpdateQueryResourceObjectAttributes.ActionEnum,
        "CampaignSendJobResponseObjectResourceAttributes.StatusEnum": CampaignSendJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignTrackingSettingDynamicParam.ValueEnum": CampaignTrackingSettingDynamicParam.ValueEnum,
        "CampaignValuesReportEnum": CampaignValuesReportEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum": CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "CarrierDeactivationEnum": CarrierDeactivationEnum,
        "CatalogCategoryBulkCreateJobEnum": CatalogCategoryBulkCreateJobEnum,
        "CatalogCategoryBulkDeleteJobEnum": CatalogCategoryBulkDeleteJobEnum,
        "CatalogCategoryBulkUpdateJobEnum": CatalogCategoryBulkUpdateJobEnum,
        "CatalogCategoryCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogCategoryCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogCategoryEnum": CatalogCategoryEnum,
        "CatalogItemBulkCreateJobEnum": CatalogItemBulkCreateJobEnum,
        "CatalogItemBulkDeleteJobEnum": CatalogItemBulkDeleteJobEnum,
        "CatalogItemBulkUpdateJobEnum": CatalogItemBulkUpdateJobEnum,
        "CatalogItemCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogItemCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogItemEnum": CatalogItemEnum,
        "CatalogVariantBulkCreateJobEnum": CatalogVariantBulkCreateJobEnum,
        "CatalogVariantBulkDeleteJobEnum": CatalogVariantBulkDeleteJobEnum,
        "CatalogVariantBulkUpdateJobEnum": CatalogVariantBulkUpdateJobEnum,
        "CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "CatalogVariantEnum": CatalogVariantEnum,
        "CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum": CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum,
        "CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "CheckoutEnum": CheckoutEnum,
        "CodeEnum": CodeEnum,
        "ConditionalSplitEnum": ConditionalSplitEnum,
        "ConstantContactEnum": ConstantContactEnum,
        "CountdownDelayActionData.UnitEnum": CountdownDelayActionData.UnitEnum,
        "CountdownDelayActionData.TimezoneEnum": CountdownDelayActionData.TimezoneEnum,
        "CountdownDelayActionData.DelayUntilWeekdaysEnum": CountdownDelayActionData.DelayUntilWeekdaysEnum,
        "CountdownDelayEnum": CountdownDelayEnum,
        "CouponCodeBulkCreateJobEnum": CouponCodeBulkCreateJobEnum,
        "CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum": CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeEnum": CouponCodeEnum,
        "CouponCodeResponseObjectResourceAttributes.StatusEnum": CouponCodeResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum": CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum,
        "CouponEnum": CouponEnum,
        "CustomMetricDefinition.AggregationMethodEnum": CustomMetricDefinition.AggregationMethodEnum,
        "CustomMetricEnum": CustomMetricEnum,
        "CustomSourceEnum": CustomSourceEnum,
        "DataPrivacyDeletionJobEnum": DataPrivacyDeletionJobEnum,
        "DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum": DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum,
        "DataSourceEnum": DataSourceEnum,
        "DataSourceRecordBulkCreateJobEnum": DataSourceRecordBulkCreateJobEnum,
        "DataSourceRecordEnum": DataSourceRecordEnum,
        "DataSourceResponseObjectResourceAttributes.VisibilityEnum": DataSourceResponseObjectResourceAttributes.VisibilityEnum,
        "DateEnum": DateEnum,
        "DeepLinkEnum": DeepLinkEnum,
        "DeviceMetadata.KlaviyoSdkEnum": DeviceMetadata.KlaviyoSdkEnum,
        "DeviceMetadata.OsNameEnum": DeviceMetadata.OsNameEnum,
        "DeviceMetadata.EnvironmentEnum": DeviceMetadata.EnvironmentEnum,
        "DropShadowEnum": DropShadowEnum,
        "DynamicEnum": DynamicEnum,
        "DynamicTrackingParam.ValueEnum": DynamicTrackingParam.ValueEnum,
        "EmailEnum": EmailEnum,
        "EmailMarketingSuppression.ReasonEnum": EmailMarketingSuppression.ReasonEnum,
        "EqualsEnum": EqualsEnum,
        "EventBulkCreateEnum": EventBulkCreateEnum,
        "EventBulkCreateJobEnum": EventBulkCreateJobEnum,
        "EventEnum": EventEnum,
        "ExistenceEnum": ExistenceEnum,
        "ExistenceOperatorFilter.OperatorEnum": ExistenceOperatorFilter.OperatorEnum,
        "FailedAgeGateEnum": FailedAgeGateEnum,
        "FakeEnum": FakeEnum,
        "FalseOrMisleadingEnum": FalseOrMisleadingEnum,
        "FeaturedEnum": FeaturedEnum,
        "FlowActionEnum": FlowActionEnum,
        "FlowEnum": FlowEnum,
        "FlowMessageEnum": FlowMessageEnum,
        "FlowPushNotification.OnOpenEnum": FlowPushNotification.OnOpenEnum,
        "FlowResponseObjectResourceAttributes.TriggerTypeEnum": FlowResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowSeriesReportEnum": FlowSeriesReportEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FlowTrackingSettingDynamicParam.ValueEnum": FlowTrackingSettingDynamicParam.ValueEnum,
        "FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum": FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowValuesReportEnum": FlowValuesReportEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowsProfileMetricCondition.MeasurementEnum": FlowsProfileMetricCondition.MeasurementEnum,
        "FormEnum": FormEnum,
        "FormResponseObjectResourceAttributes.StatusEnum": FormResponseObjectResourceAttributes.StatusEnum,
        "FormSeriesReportEnum": FormSeriesReportEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum": FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormValuesReportEnum": FormValuesReportEnum,
        "FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormValuesRequestDTOResourceObjectAttributes.GroupByEnum": FormValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormVersionEnum": FormVersionEnum,
        "FormVersionResponseObjectResourceAttributes.FormTypeEnum": FormVersionResponseObjectResourceAttributes.FormTypeEnum,
        "FormVersionResponseObjectResourceAttributes.StatusEnum": FormVersionResponseObjectResourceAttributes.StatusEnum,
        "GreaterThanEnum": GreaterThanEnum,
        "HasEmailMarketingConsent.CanReceiveMarketingEnum": HasEmailMarketingConsent.CanReceiveMarketingEnum,
        "HasPushMarketingConsent.CanReceiveMarketingEnum": HasPushMarketingConsent.CanReceiveMarketingEnum,
        "HasSMSMarketingConsent.CanReceiveMarketingEnum": HasSMSMarketingConsent.CanReceiveMarketingEnum,
        "HeaderEnum": HeaderEnum,
        "HorizontalRuleEnum": HorizontalRuleEnum,
        "HtmlEnum": HtmlEnum,
        "ImageEnum": ImageEnum,
        "ImmediateEnum": ImmediateEnum,
        "ImportErrorEnum": ImportErrorEnum,
        "InEnum": InEnum,
        "InTheLastBaseRelativeDateFilter.UnitEnum": InTheLastBaseRelativeDateFilter.UnitEnum,
        "InTheLastEnum": InTheLastEnum,
        "InboundMessageEnum": InboundMessageEnum,
        "IncrementOneEnum": IncrementOneEnum,
        "IntegrationEnum": IntegrationEnum,
        "InternalServiceEnum": InternalServiceEnum,
        "InvalidEmailDateEnum": InvalidEmailDateEnum,
        "IsDoubleOptInEnum": IsDoubleOptInEnum,
        "IsSetEnum": IsSetEnum,
        "LessThanEnum": LessThanEnum,
        "ListContainsOperatorFilter.OperatorEnum": ListContainsOperatorFilter.OperatorEnum,
        "ListEnum": ListEnum,
        "ListLengthFilter.OperatorEnum": ListLengthFilter.OperatorEnum,
        "ListListResponseObjectResourceAttributes.OptInProcessEnum": ListListResponseObjectResourceAttributes.OptInProcessEnum,
        "ListRegexOperatorContainsFilter.OperatorEnum": ListRegexOperatorContainsFilter.OperatorEnum,
        "ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum": ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum,
        "ListSetFilter.OperatorEnum": ListSetFilter.OperatorEnum,
        "ListSubstringFilter.OperatorEnum": ListSubstringFilter.OperatorEnum,
        "ListUpdateActionData.StatusEnum": ListUpdateActionData.StatusEnum,
        "ListUpdateEnum": ListUpdateEnum,
        "LocalStaticSend.IsLocalEnum": LocalStaticSend.IsLocalEnum,
        "LowInventoryEnum": LowInventoryEnum,
        "LowInventoryPropertyEnum": LowInventoryPropertyEnum,
        "LowInventoryTrigger.ProductLevelEnum": LowInventoryTrigger.ProductLevelEnum,
        "LowInventoryTrigger.AudienceEnum": LowInventoryTrigger.AudienceEnum,
        "MailboxProviderEnum": MailboxProviderEnum,
        "ManualAddEnum": ManualAddEnum,
        "ManualImportEnum": ManualImportEnum,
        "ManualRemoveEnum": ManualRemoveEnum,
        "ManualSuppressionDateEnum": ManualSuppressionDateEnum,
        "MappedMetricEnum": MappedMetricEnum,
        "MappedMetricPartialUpdateQueryResourceObject.IdEnum": MappedMetricPartialUpdateQueryResourceObject.IdEnum,
        "MappedMetricResponseObjectResource.IdEnum": MappedMetricResponseObjectResource.IdEnum,
        "MessageBlockedEnum": MessageBlockedEnum,
        "MethodEnum": MethodEnum,
        "MetricAggregateEnum": MetricAggregateEnum,
        "MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum": MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum,
        "MetricAggregateQueryResourceObjectAttributes.IntervalEnum": MetricAggregateQueryResourceObjectAttributes.IntervalEnum,
        "MetricAggregateQueryResourceObjectAttributes.ByEnum": MetricAggregateQueryResourceObjectAttributes.ByEnum,
        "MetricAggregateQueryResourceObjectAttributes.SortEnum": MetricAggregateQueryResourceObjectAttributes.SortEnum,
        "MetricEnum": MetricEnum,
        "MetricPropertyEnum": MetricPropertyEnum,
        "MobilePushBadge.DisplayEnum": MobilePushBadge.DisplayEnum,
        "MobilePushEnum": MobilePushEnum,
        "MobilePushNoBadge.DisplayEnum": MobilePushNoBadge.DisplayEnum,
        "NeverSubscribedEnum": NeverSubscribedEnum,
        "NoEmailMarketingConsent.CanReceiveMarketingEnum": NoEmailMarketingConsent.CanReceiveMarketingEnum,
        "NoPushMarketingConsent.CanReceiveMarketingEnum": NoPushMarketingConsent.CanReceiveMarketingEnum,
        "NoSMSMarketingConsent.CanReceiveMarketingEnum": NoSMSMarketingConsent.CanReceiveMarketingEnum,
        "NonLocalStaticSend.IsLocalEnum": NonLocalStaticSend.IsLocalEnum,
        "NotEqualsEnum": NotEqualsEnum,
        "NumericEnum": NumericEnum,
        "NumericOperatorFilter.OperatorEnum": NumericOperatorFilter.OperatorEnum,
        "NumericRangeFilter.OperatorEnum": NumericRangeFilter.OperatorEnum,
        "OpenAppEnum": OpenAppEnum,
        "OtherEnum": OtherEnum,
        "PatchMappedMetricResponseData.IdEnum": PatchMappedMetricResponseData.IdEnum,
        "PendingEnum": PendingEnum,
        "PostFlowV2ResponseDataAttributes.TriggerTypeEnum": PostFlowV2ResponseDataAttributes.TriggerTypeEnum,
        "PreferencePageEnum": PreferencePageEnum,
        "PriceDropEnum": PriceDropEnum,
        "PriceDropPropertyEnum": PriceDropPropertyEnum,
        "PriceDropTrigger.PriceDropAmountUnitEnum": PriceDropTrigger.PriceDropAmountUnitEnum,
        "PriceDropTrigger.AudienceEnum": PriceDropTrigger.AudienceEnum,
        "PriceDropTrigger.CurrencyTypeEnum": PriceDropTrigger.CurrencyTypeEnum,
        "PriorityEnum": PriorityEnum,
        "PrivateInformationEnum": PrivateInformationEnum,
        "ProductEnum": ProductEnum,
        "ProfanityOrInappropriateEnum": ProfanityOrInappropriateEnum,
        "ProfileBulkImportJobEnum": ProfileBulkImportJobEnum,
        "ProfileEnum": ProfileEnum,
        "ProfileGroupMembershipEnum": ProfileGroupMembershipEnum,
        "ProfileHasGroupMembershipCondition.IsMemberEnum": ProfileHasGroupMembershipCondition.IsMemberEnum,
        "ProfileImportJobResponseObjectResourceAttributes.StatusEnum": ProfileImportJobResponseObjectResourceAttributes.StatusEnum,
        "ProfileMarketingConsentEnum": ProfileMarketingConsentEnum,
        "ProfileMergeEnum": ProfileMergeEnum,
        "ProfileMetricEnum": ProfileMetricEnum,
        "ProfileNoGroupMembershipCondition.IsMemberEnum": ProfileNoGroupMembershipCondition.IsMemberEnum,
        "ProfileNotInFlowEnum": ProfileNotInFlowEnum,
        "ProfileNotSentEmailEnum": ProfileNotSentEmailEnum,
        "ProfileNotSentPushEnum": ProfileNotSentPushEnum,
        "ProfileNotSentSmsEnum": ProfileNotSentSmsEnum,
        "ProfileOperationDelete.OperatorEnum": ProfileOperationDelete.OperatorEnum,
        "ProfileOperationUpdateOrCreateBoolean.OperatorEnum": ProfileOperationUpdateOrCreateBoolean.OperatorEnum,
        "ProfileOperationUpdateOrCreateDate.OperatorEnum": ProfileOperationUpdateOrCreateDate.OperatorEnum,
        "ProfileOperationUpdateOrCreateList.OperatorEnum": ProfileOperationUpdateOrCreateList.OperatorEnum,
        "ProfileOperationUpdateOrCreateList.PropertyOperationEnum": ProfileOperationUpdateOrCreateList.PropertyOperationEnum,
        "ProfileOperationUpdateOrCreateNumeric.OperatorEnum": ProfileOperationUpdateOrCreateNumeric.OperatorEnum,
        "ProfileOperationUpdateOrCreateString.OperatorEnum": ProfileOperationUpdateOrCreateString.OperatorEnum,
        "ProfilePostalCodeDistanceCondition.UnitEnum": ProfilePostalCodeDistanceCondition.UnitEnum,
        "ProfilePostalCodeDistanceEnum": ProfilePostalCodeDistanceEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum,
        "ProfilePredictiveAnalyticsDateCondition.DimensionEnum": ProfilePredictiveAnalyticsDateCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsEnum": ProfilePredictiveAnalyticsEnum,
        "ProfilePredictiveAnalyticsNumericCondition.DimensionEnum": ProfilePredictiveAnalyticsNumericCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringCondition.DimensionEnum": ProfilePredictiveAnalyticsStringCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringFilter.ValueEnum": ProfilePredictiveAnalyticsStringFilter.ValueEnum,
        "ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum": ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum,
        "ProfilePropertyDateTrigger.RecurrenceFrequencyEnum": ProfilePropertyDateTrigger.RecurrenceFrequencyEnum,
        "ProfilePropertyDateTrigger.TimezoneEnum": ProfilePropertyDateTrigger.TimezoneEnum,
        "ProfilePropertyDateTrigger.TriggerDaysEnum": ProfilePropertyDateTrigger.TriggerDaysEnum,
        "ProfilePropertyEnum": ProfilePropertyEnum,
        "ProfileRegionCondition.RegionEnum": ProfileRegionCondition.RegionEnum,
        "ProfileRegionEnum": ProfileRegionEnum,
        "ProfileSampleEnum": ProfileSampleEnum,
        "ProfileSubscriptionBulkCreateJobEnum": ProfileSubscriptionBulkCreateJobEnum,
        "ProfileSubscriptionBulkDeleteJobEnum": ProfileSubscriptionBulkDeleteJobEnum,
        "ProfileSuppressionBulkCreateJobEnum": ProfileSuppressionBulkCreateJobEnum,
        "ProfileSuppressionBulkDeleteJobEnum": ProfileSuppressionBulkDeleteJobEnum,
        "ProvidedLandlineEnum": ProvidedLandlineEnum,
        "ProvidedNoAgeEnum": ProvidedNoAgeEnum,
        "PublishedEnum": PublishedEnum,
        "PushEnum": PushEnum,
        "PushTokenCreateQueryResourceObjectAttributes.PlatformEnum": PushTokenCreateQueryResourceObjectAttributes.PlatformEnum,
        "PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum": PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum,
        "PushTokenCreateQueryResourceObjectAttributes.VendorEnum": PushTokenCreateQueryResourceObjectAttributes.VendorEnum,
        "PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum": PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum,
        "PushTokenEnum": PushTokenEnum,
        "PushTokenResponseObjectResourceAttributes.EnablementStatusEnum": PushTokenResponseObjectResourceAttributes.EnablementStatusEnum,
        "PushTokenResponseObjectResourceAttributes.PlatformEnum": PushTokenResponseObjectResourceAttributes.PlatformEnum,
        "RankEnum": RankEnum,
        "RejectedEnum": RejectedEnum,
        "RelativeAnniversaryDateFilter.OperatorEnum": RelativeAnniversaryDateFilter.OperatorEnum,
        "RelativeAnniversaryDateFilter.UnitEnum": RelativeAnniversaryDateFilter.UnitEnum,
        "RelativeDateOperatorBaseFilter.OperatorEnum": RelativeDateOperatorBaseFilter.OperatorEnum,
        "RelativeDateOperatorBaseFilter.UnitEnum": RelativeDateOperatorBaseFilter.UnitEnum,
        "RelativeDateRangeFilter.OperatorEnum": RelativeDateRangeFilter.OperatorEnum,
        "RelativeDateRangeFilter.UnitEnum": RelativeDateRangeFilter.UnitEnum,
        "ReviewEnum": ReviewEnum,
        "ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum": ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum,
        "SectionEnum": SectionEnum,
        "SegmentEnum": SegmentEnum,
        "SegmentSeriesReportEnum": SegmentSeriesReportEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum": SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "SegmentValuesReportEnum": SegmentValuesReportEnum,
        "SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentsProfileMetricCondition.MeasurementEnum": SegmentsProfileMetricCondition.MeasurementEnum,
        "SendEmailActionData.StatusEnum": SendEmailActionData.StatusEnum,
        "SendEmailEnum": SendEmailEnum,
        "SendInternalAlertActionData.StatusEnum": SendInternalAlertActionData.StatusEnum,
        "SendInternalAlertEnum": SendInternalAlertEnum,
        "SendMobilePushEnum": SendMobilePushEnum,
        "SendPushNotificationActionData.StatusEnum": SendPushNotificationActionData.StatusEnum,
        "SendSmsActionData.StatusEnum": SendSmsActionData.StatusEnum,
        "SendSmsEnum": SendSmsEnum,
        "SendWebhookActionData.StatusEnum": SendWebhookActionData.StatusEnum,
        "SendWebhookEnum": SendWebhookEnum,
        "ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum": ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum,
        "SetCountEnum": SetCountEnum,
        "SetPropertyEnum": SetPropertyEnum,
        "SftpEnum": SftpEnum,
        "ShopifyEnum": ShopifyEnum,
        "SilentEnum": SilentEnum,
        "SinceFlowStartDateFilter.OperatorEnum": SinceFlowStartDateFilter.OperatorEnum,
        "SmartSendTimeEnum": SmartSendTimeEnum,
        "SmsEnum": SmsEnum,
        "SocialEnum": SocialEnum,
        "SpacerEnum": SpacerEnum,
        "SpamComplaintEnum": SpamComplaintEnum,
        "SplitEnum": SplitEnum,
        "StandardEnum": StandardEnum,
        "StaticDateFilter.OperatorEnum": StaticDateFilter.OperatorEnum,
        "StaticDateRangeFilter.OperatorEnum": StaticDateRangeFilter.OperatorEnum,
        "StaticEnum": StaticEnum,
        "StatusDateEnum": StatusDateEnum,
        "StringArrayOperatorFilter.OperatorEnum": StringArrayOperatorFilter.OperatorEnum,
        "StringEnum": StringEnum,
        "StringOperatorFilter.OperatorEnum": StringOperatorFilter.OperatorEnum,
        "StringPhoneOperatorArrayFilter.OperatorEnum": StringPhoneOperatorArrayFilter.OperatorEnum,
        "SubscribedEnum": SubscribedEnum,
        "SubscriptionParameters.ConsentEnum": SubscriptionParameters.ConsentEnum,
        "TableEnum": TableEnum,
        "TagEnum": TagEnum,
        "TagGroupEnum": TagGroupEnum,
        "TargetDateActionData.TimezoneEnum": TargetDateActionData.TimezoneEnum,
        "TargetDateActionData.TargetDaysEnum": TargetDateActionData.TargetDaysEnum,
        "TargetDateEnum": TargetDateEnum,
        "TemplateEnum": TemplateEnum,
        "TemplateUniversalContentEnum": TemplateUniversalContentEnum,
        "TextBlockStyles.BlockBorderStyleEnum": TextBlockStyles.BlockBorderStyleEnum,
        "TextBlockStyles.FontStyleEnum": TextBlockStyles.FontStyleEnum,
        "TextBlockStyles.TextAlignEnum": TextBlockStyles.TextAlignEnum,
        "TextBlockStyles.TextTableLayoutEnum": TextBlockStyles.TextTableLayoutEnum,
        "TextEnum": TextEnum,
        "ThrottledEnum": ThrottledEnum,
        "ThrottledSendStrategy.ThrottlePercentageEnum": ThrottledSendStrategy.ThrottlePercentageEnum,
        "TimeDelayActionData.UnitEnum": TimeDelayActionData.UnitEnum,
        "TimeDelayActionData.TimezoneEnum": TimeDelayActionData.TimezoneEnum,
        "TimeDelayActionData.DelayUntilWeekdaysEnum": TimeDelayActionData.DelayUntilWeekdaysEnum,
        "TimeDelayEnum": TimeDelayEnum,
        "Timeframe.KeyEnum": Timeframe.KeyEnum,
        "TrackingSettingEnum": TrackingSettingEnum,
        "TriggerBranchActionData.TriggerTypeEnum": TriggerBranchActionData.TriggerTypeEnum,
        "TriggerBranchActionData.TriggerSubtypeEnum": TriggerBranchActionData.TriggerSubtypeEnum,
        "TriggerSplitEnum": TriggerSplitEnum,
        "UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum": UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum,
        "UnpublishedEnum": UnpublishedEnum,
        "UnrelatedEnum": UnrelatedEnum,
        "UnsubscribedEnum": UnsubscribedEnum,
        "UnsubscriptionParameters.ConsentEnum": UnsubscriptionParameters.ConsentEnum,
        "UnsupportedEnum": UnsupportedEnum,
        "UpdateProfileActionData.StatusEnum": UpdateProfileActionData.StatusEnum,
        "UpdateProfileEnum": UpdateProfileEnum,
        "VideoEnum": VideoEnum,
        "WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum": WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum,
        "WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum": WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum,
        "WebFeedEnum": WebFeedEnum,
        "WebFeedPartialUpdateQueryResourceObjectAttributes.RequestMethodEnum": WebFeedPartialUpdateQueryResourceObjectAttributes.RequestMethodEnum,
        "WebFeedPartialUpdateQueryResourceObjectAttributes.ContentTypeEnum": WebFeedPartialUpdateQueryResourceObjectAttributes.ContentTypeEnum,
        "WebFeedResponseObjectResourceAttributes.RequestMethodEnum": WebFeedResponseObjectResourceAttributes.RequestMethodEnum,
        "WebFeedResponseObjectResourceAttributes.ContentTypeEnum": WebFeedResponseObjectResourceAttributes.ContentTypeEnum,
        "WebFeedResponseObjectResourceAttributes.StatusEnum": WebFeedResponseObjectResourceAttributes.StatusEnum,
        "WebhookEnum": WebhookEnum,
        "WebhookTopicEnum": WebhookTopicEnum,
}

let typeMap: {[index: string]: any} = {
    "ABTestSendStrategy": ABTestSendStrategy,
    "APIJobErrorPayload": APIJobErrorPayload,
    "APIMethodFilter": APIMethodFilter,
    "AbTestAction": AbTestAction,
    "AbTestActionData": AbTestActionData,
    "AbTestActionDataCurrentExperiment": AbTestActionDataCurrentExperiment,
    "AccountResponseObjectResource": AccountResponseObjectResource,
    "AccountResponseObjectResourceAttributes": AccountResponseObjectResourceAttributes,
    "AlltimeDateFilter": AlltimeDateFilter,
    "AnniversaryDateFilter": AnniversaryDateFilter,
    "AttributionResponseObjectResource": AttributionResponseObjectResource,
    "AttributionResponseObjectResourceRelationships": AttributionResponseObjectResourceRelationships,
    "AttributionResponseObjectResourceRelationshipsAttributedEvent": AttributionResponseObjectResourceRelationshipsAttributedEvent,
    "AttributionResponseObjectResourceRelationshipsAttributedEventData": AttributionResponseObjectResourceRelationshipsAttributedEventData,
    "AttributionResponseObjectResourceRelationshipsCampaign": AttributionResponseObjectResourceRelationshipsCampaign,
    "AttributionResponseObjectResourceRelationshipsCampaignData": AttributionResponseObjectResourceRelationshipsCampaignData,
    "AttributionResponseObjectResourceRelationshipsCampaignMessage": AttributionResponseObjectResourceRelationshipsCampaignMessage,
    "AttributionResponseObjectResourceRelationshipsCampaignMessageData": AttributionResponseObjectResourceRelationshipsCampaignMessageData,
    "AttributionResponseObjectResourceRelationshipsEvent": AttributionResponseObjectResourceRelationshipsEvent,
    "AttributionResponseObjectResourceRelationshipsEventData": AttributionResponseObjectResourceRelationshipsEventData,
    "AttributionResponseObjectResourceRelationshipsFlow": AttributionResponseObjectResourceRelationshipsFlow,
    "AttributionResponseObjectResourceRelationshipsFlowData": AttributionResponseObjectResourceRelationshipsFlowData,
    "AttributionResponseObjectResourceRelationshipsFlowMessage": AttributionResponseObjectResourceRelationshipsFlowMessage,
    "AttributionResponseObjectResourceRelationshipsFlowMessageData": AttributionResponseObjectResourceRelationshipsFlowMessageData,
    "AttributionResponseObjectResourceRelationshipsFlowMessageVariation": AttributionResponseObjectResourceRelationshipsFlowMessageVariation,
    "AttributionResponseObjectResourceRelationshipsFlowMessageVariationData": AttributionResponseObjectResourceRelationshipsFlowMessageVariationData,
    "Audiences": Audiences,
    "AudiencesUpdate": AudiencesUpdate,
    "AutomaticWinnerSelectionSettings": AutomaticWinnerSelectionSettings,
    "BackInStockDelayAction": BackInStockDelayAction,
    "BackInStockMethodFilter": BackInStockMethodFilter,
    "BaseEventCreateQueryBulkEntryResourceObject": BaseEventCreateQueryBulkEntryResourceObject,
    "BaseEventCreateQueryBulkEntryResourceObjectAttributes": BaseEventCreateQueryBulkEntryResourceObjectAttributes,
    "BlockDisplayOptions": BlockDisplayOptions,
    "BooleanBranchLinks": BooleanBranchLinks,
    "BooleanFilter": BooleanFilter,
    "BounceDateFilter": BounceDateFilter,
    "BranchAction": BranchAction,
    "BulkProfileSuppressionsCreateJobResponseObjectResource": BulkProfileSuppressionsCreateJobResponseObjectResource,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes,
    "BulkProfileSuppressionsRemoveJobResponseObjectResource": BulkProfileSuppressionsRemoveJobResponseObjectResource,
    "BulkRemoveMethodFilter": BulkRemoveMethodFilter,
    "ButtonBlock": ButtonBlock,
    "CalendarDateFilter": CalendarDateFilter,
    "CampaignCloneQuery": CampaignCloneQuery,
    "CampaignCloneQueryResourceObject": CampaignCloneQueryResourceObject,
    "CampaignCloneQueryResourceObjectAttributes": CampaignCloneQueryResourceObjectAttributes,
    "CampaignCreateQuery": CampaignCreateQuery,
    "CampaignCreateQueryResourceObject": CampaignCreateQueryResourceObject,
    "CampaignCreateQueryResourceObjectAttributes": CampaignCreateQueryResourceObjectAttributes,
    "CampaignCreateQueryResourceObjectAttributesCampaignMessages": CampaignCreateQueryResourceObjectAttributesCampaignMessages,
    "CampaignMessageAssignTemplateQuery": CampaignMessageAssignTemplateQuery,
    "CampaignMessageAssignTemplateQueryResourceObject": CampaignMessageAssignTemplateQueryResourceObject,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationships": CampaignMessageAssignTemplateQueryResourceObjectRelationships,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData,
    "CampaignMessageCreateQueryResourceObject": CampaignMessageCreateQueryResourceObject,
    "CampaignMessageCreateQueryResourceObjectAttributes": CampaignMessageCreateQueryResourceObjectAttributes,
    "CampaignMessageCreateQueryResourceObjectRelationships": CampaignMessageCreateQueryResourceObjectRelationships,
    "CampaignMessageCreateQueryResourceObjectRelationshipsImage": CampaignMessageCreateQueryResourceObjectRelationshipsImage,
    "CampaignMessageCreateQueryResourceObjectRelationshipsImageData": CampaignMessageCreateQueryResourceObjectRelationshipsImageData,
    "CampaignMessageImageUpdateQuery": CampaignMessageImageUpdateQuery,
    "CampaignMessageImageUpdateQueryData": CampaignMessageImageUpdateQueryData,
    "CampaignMessageIncrement": CampaignMessageIncrement,
    "CampaignMessagePartialUpdateQuery": CampaignMessagePartialUpdateQuery,
    "CampaignMessagePartialUpdateQueryResourceObject": CampaignMessagePartialUpdateQueryResourceObject,
    "CampaignMessagePartialUpdateQueryResourceObjectAttributes": CampaignMessagePartialUpdateQueryResourceObjectAttributes,
    "CampaignMessageProperty": CampaignMessageProperty,
    "CampaignMessageResponseObjectResource": CampaignMessageResponseObjectResource,
    "CampaignMessageResponseObjectResourceAttributes": CampaignMessageResponseObjectResourceAttributes,
    "CampaignMessageStaticCount": CampaignMessageStaticCount,
    "CampaignPartialUpdateQuery": CampaignPartialUpdateQuery,
    "CampaignPartialUpdateQueryResourceObject": CampaignPartialUpdateQueryResourceObject,
    "CampaignPartialUpdateQueryResourceObjectAttributes": CampaignPartialUpdateQueryResourceObjectAttributes,
    "CampaignRecipientEstimationJobCreateQuery": CampaignRecipientEstimationJobCreateQuery,
    "CampaignRecipientEstimationJobCreateQueryResourceObject": CampaignRecipientEstimationJobCreateQueryResourceObject,
    "CampaignRecipientEstimationJobResponseObjectResource": CampaignRecipientEstimationJobResponseObjectResource,
    "CampaignRecipientEstimationJobResponseObjectResourceAttributes": CampaignRecipientEstimationJobResponseObjectResourceAttributes,
    "CampaignRecipientEstimationResponseObjectResource": CampaignRecipientEstimationResponseObjectResource,
    "CampaignRecipientEstimationResponseObjectResourceAttributes": CampaignRecipientEstimationResponseObjectResourceAttributes,
    "CampaignResponseObjectResource": CampaignResponseObjectResource,
    "CampaignResponseObjectResourceAttributes": CampaignResponseObjectResourceAttributes,
    "CampaignSendJobCreateQuery": CampaignSendJobCreateQuery,
    "CampaignSendJobCreateQueryResourceObject": CampaignSendJobCreateQueryResourceObject,
    "CampaignSendJobPartialUpdateQuery": CampaignSendJobPartialUpdateQuery,
    "CampaignSendJobPartialUpdateQueryResourceObject": CampaignSendJobPartialUpdateQueryResourceObject,
    "CampaignSendJobPartialUpdateQueryResourceObjectAttributes": CampaignSendJobPartialUpdateQueryResourceObjectAttributes,
    "CampaignSendJobResponseObjectResource": CampaignSendJobResponseObjectResource,
    "CampaignSendJobResponseObjectResourceAttributes": CampaignSendJobResponseObjectResourceAttributes,
    "CampaignTrackingSettingDynamicParam": CampaignTrackingSettingDynamicParam,
    "CampaignTrackingSettingStaticParam": CampaignTrackingSettingStaticParam,
    "CampaignValuesRequestDTO": CampaignValuesRequestDTO,
    "CampaignValuesRequestDTOResourceObject": CampaignValuesRequestDTOResourceObject,
    "CampaignValuesRequestDTOResourceObjectAttributes": CampaignValuesRequestDTOResourceObjectAttributes,
    "CampaignsEmailTrackingOptions": CampaignsEmailTrackingOptions,
    "CampaignsSMSTrackingOptions": CampaignsSMSTrackingOptions,
    "CarrierDeactivationMethodFilter": CarrierDeactivationMethodFilter,
    "CatalogCategoryCreateJobCreateQuery": CatalogCategoryCreateJobCreateQuery,
    "CatalogCategoryCreateJobCreateQueryResourceObject": CatalogCategoryCreateJobCreateQueryResourceObject,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributes": CatalogCategoryCreateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryCreateJobResponseObjectResource": CatalogCategoryCreateJobResponseObjectResource,
    "CatalogCategoryCreateQuery": CatalogCategoryCreateQuery,
    "CatalogCategoryCreateQueryResourceObject": CatalogCategoryCreateQueryResourceObject,
    "CatalogCategoryCreateQueryResourceObjectAttributes": CatalogCategoryCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateQueryResourceObjectRelationships": CatalogCategoryCreateQueryResourceObjectRelationships,
    "CatalogCategoryCreateQueryResourceObjectRelationshipsItems": CatalogCategoryCreateQueryResourceObjectRelationshipsItems,
    "CatalogCategoryDeleteJobCreateQuery": CatalogCategoryDeleteJobCreateQuery,
    "CatalogCategoryDeleteJobCreateQueryResourceObject": CatalogCategoryDeleteJobCreateQueryResourceObject,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryDeleteJobResponseObjectResource": CatalogCategoryDeleteJobResponseObjectResource,
    "CatalogCategoryDeleteQueryResourceObject": CatalogCategoryDeleteQueryResourceObject,
    "CatalogCategoryItemOp": CatalogCategoryItemOp,
    "CatalogCategoryItemOpDataInner": CatalogCategoryItemOpDataInner,
    "CatalogCategoryResponseObjectResource": CatalogCategoryResponseObjectResource,
    "CatalogCategoryResponseObjectResourceAttributes": CatalogCategoryResponseObjectResourceAttributes,
    "CatalogCategoryUpdateJobCreateQuery": CatalogCategoryUpdateJobCreateQuery,
    "CatalogCategoryUpdateJobCreateQueryResourceObject": CatalogCategoryUpdateJobCreateQueryResourceObject,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryUpdateJobResponseObjectResource": CatalogCategoryUpdateJobResponseObjectResource,
    "CatalogCategoryUpdateQuery": CatalogCategoryUpdateQuery,
    "CatalogCategoryUpdateQueryResourceObject": CatalogCategoryUpdateQueryResourceObject,
    "CatalogCategoryUpdateQueryResourceObjectAttributes": CatalogCategoryUpdateQueryResourceObjectAttributes,
    "CatalogItemCategoryOp": CatalogItemCategoryOp,
    "CatalogItemCreateJobCreateQuery": CatalogItemCreateJobCreateQuery,
    "CatalogItemCreateJobCreateQueryResourceObject": CatalogItemCreateJobCreateQueryResourceObject,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributes": CatalogItemCreateJobCreateQueryResourceObjectAttributes,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributesItems": CatalogItemCreateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemCreateJobResponseObjectResource": CatalogItemCreateJobResponseObjectResource,
    "CatalogItemCreateQuery": CatalogItemCreateQuery,
    "CatalogItemCreateQueryResourceObject": CatalogItemCreateQueryResourceObject,
    "CatalogItemCreateQueryResourceObjectAttributes": CatalogItemCreateQueryResourceObjectAttributes,
    "CatalogItemCreateQueryResourceObjectRelationships": CatalogItemCreateQueryResourceObjectRelationships,
    "CatalogItemCreateQueryResourceObjectRelationshipsCategories": CatalogItemCreateQueryResourceObjectRelationshipsCategories,
    "CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner": CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner,
    "CatalogItemDeleteJobCreateQuery": CatalogItemDeleteJobCreateQuery,
    "CatalogItemDeleteJobCreateQueryResourceObject": CatalogItemDeleteJobCreateQueryResourceObject,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributes": CatalogItemDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems": CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemDeleteJobResponseObjectResource": CatalogItemDeleteJobResponseObjectResource,
    "CatalogItemDeleteQueryResourceObject": CatalogItemDeleteQueryResourceObject,
    "CatalogItemResponseObjectResource": CatalogItemResponseObjectResource,
    "CatalogItemResponseObjectResourceAttributes": CatalogItemResponseObjectResourceAttributes,
    "CatalogItemUpdateJobCreateQuery": CatalogItemUpdateJobCreateQuery,
    "CatalogItemUpdateJobCreateQueryResourceObject": CatalogItemUpdateJobCreateQueryResourceObject,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributes": CatalogItemUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems": CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemUpdateJobResponseObjectResource": CatalogItemUpdateJobResponseObjectResource,
    "CatalogItemUpdateQuery": CatalogItemUpdateQuery,
    "CatalogItemUpdateQueryResourceObject": CatalogItemUpdateQueryResourceObject,
    "CatalogItemUpdateQueryResourceObjectAttributes": CatalogItemUpdateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQuery": CatalogVariantCreateJobCreateQuery,
    "CatalogVariantCreateJobCreateQueryResourceObject": CatalogVariantCreateJobCreateQueryResourceObject,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributes": CatalogVariantCreateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantCreateJobResponseObjectResource": CatalogVariantCreateJobResponseObjectResource,
    "CatalogVariantCreateQuery": CatalogVariantCreateQuery,
    "CatalogVariantCreateQueryResourceObject": CatalogVariantCreateQueryResourceObject,
    "CatalogVariantCreateQueryResourceObjectAttributes": CatalogVariantCreateQueryResourceObjectAttributes,
    "CatalogVariantCreateQueryResourceObjectRelationships": CatalogVariantCreateQueryResourceObjectRelationships,
    "CatalogVariantCreateQueryResourceObjectRelationshipsItem": CatalogVariantCreateQueryResourceObjectRelationshipsItem,
    "CatalogVariantCreateQueryResourceObjectRelationshipsItemData": CatalogVariantCreateQueryResourceObjectRelationshipsItemData,
    "CatalogVariantDeleteJobCreateQuery": CatalogVariantDeleteJobCreateQuery,
    "CatalogVariantDeleteJobCreateQueryResourceObject": CatalogVariantDeleteJobCreateQueryResourceObject,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributes": CatalogVariantDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants": CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantDeleteJobResponseObjectResource": CatalogVariantDeleteJobResponseObjectResource,
    "CatalogVariantDeleteQueryResourceObject": CatalogVariantDeleteQueryResourceObject,
    "CatalogVariantResponseObjectResource": CatalogVariantResponseObjectResource,
    "CatalogVariantResponseObjectResourceAttributes": CatalogVariantResponseObjectResourceAttributes,
    "CatalogVariantUpdateJobCreateQuery": CatalogVariantUpdateJobCreateQuery,
    "CatalogVariantUpdateJobCreateQueryResourceObject": CatalogVariantUpdateJobCreateQueryResourceObject,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributes": CatalogVariantUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantUpdateJobResponseObjectResource": CatalogVariantUpdateJobResponseObjectResource,
    "CatalogVariantUpdateQuery": CatalogVariantUpdateQuery,
    "CatalogVariantUpdateQueryResourceObject": CatalogVariantUpdateQueryResourceObject,
    "CatalogVariantUpdateQueryResourceObjectAttributes": CatalogVariantUpdateQueryResourceObjectAttributes,
    "CheckoutMethodFilter": CheckoutMethodFilter,
    "CodeAction": CodeAction,
    "CollectionLinks": CollectionLinks,
    "ConditionGroup": ConditionGroup,
    "ConditionalBranchAction": ConditionalBranchAction,
    "ConditionalBranchActionData": ConditionalBranchActionData,
    "ConditionalBranchActionDataProfileFilter": ConditionalBranchActionDataProfileFilter,
    "ConditionalBranchActionDataProfileFilterConditionGroupsInner": ConditionalBranchActionDataProfileFilterConditionGroupsInner,
    "ConstantContactIntegrationFilter": ConstantContactIntegrationFilter,
    "ConstantContactIntegrationMethodFilter": ConstantContactIntegrationMethodFilter,
    "ContactInformation": ContactInformation,
    "ContentRepeat": ContentRepeat,
    "CountdownDelayAction": CountdownDelayAction,
    "CountdownDelayActionData": CountdownDelayActionData,
    "CouponCodeCreateJobCreateQuery": CouponCodeCreateJobCreateQuery,
    "CouponCodeCreateJobCreateQueryResourceObject": CouponCodeCreateJobCreateQueryResourceObject,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributes": CouponCodeCreateJobCreateQueryResourceObjectAttributes,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes": CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes,
    "CouponCodeCreateJobResponseObjectResource": CouponCodeCreateJobResponseObjectResource,
    "CouponCodeCreateJobResponseObjectResourceAttributes": CouponCodeCreateJobResponseObjectResourceAttributes,
    "CouponCodeCreateQuery": CouponCodeCreateQuery,
    "CouponCodeCreateQueryResourceObject": CouponCodeCreateQueryResourceObject,
    "CouponCodeCreateQueryResourceObjectAttributes": CouponCodeCreateQueryResourceObjectAttributes,
    "CouponCodeCreateQueryResourceObjectRelationships": CouponCodeCreateQueryResourceObjectRelationships,
    "CouponCodeCreateQueryResourceObjectRelationshipsCoupon": CouponCodeCreateQueryResourceObjectRelationshipsCoupon,
    "CouponCodeResponseObjectResource": CouponCodeResponseObjectResource,
    "CouponCodeResponseObjectResourceAttributes": CouponCodeResponseObjectResourceAttributes,
    "CouponCodeUpdateQuery": CouponCodeUpdateQuery,
    "CouponCodeUpdateQueryResourceObject": CouponCodeUpdateQueryResourceObject,
    "CouponCodeUpdateQueryResourceObjectAttributes": CouponCodeUpdateQueryResourceObjectAttributes,
    "CouponCreateQuery": CouponCreateQuery,
    "CouponCreateQueryResourceObject": CouponCreateQueryResourceObject,
    "CouponResponseObjectResource": CouponResponseObjectResource,
    "CouponResponseObjectResourceAttributes": CouponResponseObjectResourceAttributes,
    "CouponUpdateQuery": CouponUpdateQuery,
    "CouponUpdateQueryResourceObject": CouponUpdateQueryResourceObject,
    "CouponUpdateQueryResourceObjectAttributes": CouponUpdateQueryResourceObjectAttributes,
    "CustomMetricCondition": CustomMetricCondition,
    "CustomMetricCreateQuery": CustomMetricCreateQuery,
    "CustomMetricCreateQueryResourceObject": CustomMetricCreateQueryResourceObject,
    "CustomMetricCreateQueryResourceObjectAttributes": CustomMetricCreateQueryResourceObjectAttributes,
    "CustomMetricDefinition": CustomMetricDefinition,
    "CustomMetricGroup": CustomMetricGroup,
    "CustomMetricPartialUpdateQuery": CustomMetricPartialUpdateQuery,
    "CustomMetricPartialUpdateQueryResourceObject": CustomMetricPartialUpdateQueryResourceObject,
    "CustomMetricPartialUpdateQueryResourceObjectAttributes": CustomMetricPartialUpdateQueryResourceObjectAttributes,
    "CustomMetricResponseObjectResource": CustomMetricResponseObjectResource,
    "CustomMetricResponseObjectResourceAttributes": CustomMetricResponseObjectResourceAttributes,
    "CustomSourceFilter": CustomSourceFilter,
    "CustomTimeframe": CustomTimeframe,
    "CustomTrackingParamDTO": CustomTrackingParamDTO,
    "DataPrivacyCreateDeletionJobQuery": DataPrivacyCreateDeletionJobQuery,
    "DataPrivacyCreateDeletionJobQueryResourceObject": DataPrivacyCreateDeletionJobQueryResourceObject,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes": DataPrivacyCreateDeletionJobQueryResourceObjectAttributes,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile": DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile,
    "DataPrivacyProfileQueryResourceObject": DataPrivacyProfileQueryResourceObject,
    "DataPrivacyProfileQueryResourceObjectAttributes": DataPrivacyProfileQueryResourceObjectAttributes,
    "DataSourceCreateQuery": DataSourceCreateQuery,
    "DataSourceCreateQueryResourceObject": DataSourceCreateQueryResourceObject,
    "DataSourceCreateQueryResourceObjectAttributes": DataSourceCreateQueryResourceObjectAttributes,
    "DataSourceRecordBulkCreateJobCreateQuery": DataSourceRecordBulkCreateJobCreateQuery,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObject": DataSourceRecordBulkCreateJobCreateQueryResourceObject,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes": DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords": DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData,
    "DataSourceRecordResourceObject": DataSourceRecordResourceObject,
    "DataSourceRecordResourceObjectAttributes": DataSourceRecordResourceObjectAttributes,
    "DataSourceResponseObjectResource": DataSourceResponseObjectResource,
    "DataSourceResponseObjectResourceAttributes": DataSourceResponseObjectResourceAttributes,
    "DeleteTagGroupResponse": DeleteTagGroupResponse,
    "DeviceMetadata": DeviceMetadata,
    "DoubleOptinFilter": DoubleOptinFilter,
    "DropShadowBlock": DropShadowBlock,
    "DynamicTrackingParam": DynamicTrackingParam,
    "EmailChannel": EmailChannel,
    "EmailContent": EmailContent,
    "EmailContentSubObject": EmailContentSubObject,
    "EmailMarketing": EmailMarketing,
    "EmailMarketingListSuppression": EmailMarketingListSuppression,
    "EmailMarketingSuppression": EmailMarketingSuppression,
    "EmailMessageContent": EmailMessageContent,
    "EmailMessageDefinition": EmailMessageDefinition,
    "EmailSendOptions": EmailSendOptions,
    "EmailSubscriptionParameters": EmailSubscriptionParameters,
    "EmailUnsubscriptionParameters": EmailUnsubscriptionParameters,
    "EqualsStringFilter": EqualsStringFilter,
    "ErrorSource": ErrorSource,
    "EventCreateQueryV2": EventCreateQueryV2,
    "EventCreateQueryV2ResourceObject": EventCreateQueryV2ResourceObject,
    "EventCreateQueryV2ResourceObjectAttributes": EventCreateQueryV2ResourceObjectAttributes,
    "EventCreateQueryV2ResourceObjectAttributesMetric": EventCreateQueryV2ResourceObjectAttributesMetric,
    "EventCreateQueryV2ResourceObjectAttributesProfile": EventCreateQueryV2ResourceObjectAttributesProfile,
    "EventProfileCreateQueryResourceObject": EventProfileCreateQueryResourceObject,
    "EventProfileCreateQueryResourceObjectAttributes": EventProfileCreateQueryResourceObjectAttributes,
    "EventResponseObjectResource": EventResponseObjectResource,
    "EventResponseObjectResourceAttributes": EventResponseObjectResourceAttributes,
    "EventsBulkCreateJob": EventsBulkCreateJob,
    "EventsBulkCreateJobResourceObject": EventsBulkCreateJobResourceObject,
    "EventsBulkCreateJobResourceObjectAttributes": EventsBulkCreateJobResourceObjectAttributes,
    "EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate": EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate,
    "EventsBulkCreateQueryResourceObject": EventsBulkCreateQueryResourceObject,
    "EventsBulkCreateQueryResourceObjectAttributes": EventsBulkCreateQueryResourceObjectAttributes,
    "EventsBulkCreateQueryResourceObjectAttributesEvents": EventsBulkCreateQueryResourceObjectAttributesEvents,
    "EventsBulkCreateQueryResourceObjectAttributesProfile": EventsBulkCreateQueryResourceObjectAttributesProfile,
    "ExistenceOperatorFilter": ExistenceOperatorFilter,
    "FailedAgeGateMethodFilter": FailedAgeGateMethodFilter,
    "FlowActionResponseObjectResource": FlowActionResponseObjectResource,
    "FlowActionResponseObjectResourceAttributes": FlowActionResponseObjectResourceAttributes,
    "FlowCreateQuery": FlowCreateQuery,
    "FlowCreateQueryResourceObject": FlowCreateQueryResourceObject,
    "FlowCreateQueryResourceObjectAttributes": FlowCreateQueryResourceObjectAttributes,
    "FlowDefinition": FlowDefinition,
    "FlowDefinitionProfileFilter": FlowDefinitionProfileFilter,
    "FlowDefinitionProfileFilterConditionGroupsInner": FlowDefinitionProfileFilterConditionGroupsInner,
    "FlowEmail": FlowEmail,
    "FlowEmailAdditionalFilters": FlowEmailAdditionalFilters,
    "FlowEmailAdditionalFiltersConditionGroupsInner": FlowEmailAdditionalFiltersConditionGroupsInner,
    "FlowEmailTrackingOptions": FlowEmailTrackingOptions,
    "FlowInternalAlert": FlowInternalAlert,
    "FlowMessageResponseObjectResource": FlowMessageResponseObjectResource,
    "FlowMessageResponseObjectResourceAttributes": FlowMessageResponseObjectResourceAttributes,
    "FlowPushNotification": FlowPushNotification,
    "FlowPushNotificationAdditionalFilters": FlowPushNotificationAdditionalFilters,
    "FlowPushNotificationAdditionalFiltersConditionGroupsInner": FlowPushNotificationAdditionalFiltersConditionGroupsInner,
    "FlowResponseObjectResource": FlowResponseObjectResource,
    "FlowResponseObjectResourceAttributes": FlowResponseObjectResourceAttributes,
    "FlowSeriesRequestDTO": FlowSeriesRequestDTO,
    "FlowSeriesRequestDTOResourceObject": FlowSeriesRequestDTOResourceObject,
    "FlowSeriesRequestDTOResourceObjectAttributes": FlowSeriesRequestDTOResourceObjectAttributes,
    "FlowSms": FlowSms,
    "FlowSmsAdditionalFilters": FlowSmsAdditionalFilters,
    "FlowSmsAdditionalFiltersConditionGroupsInner": FlowSmsAdditionalFiltersConditionGroupsInner,
    "FlowTrackingSettingDynamicParam": FlowTrackingSettingDynamicParam,
    "FlowTrackingSettingStaticParam": FlowTrackingSettingStaticParam,
    "FlowUpdateQuery": FlowUpdateQuery,
    "FlowUpdateQueryResourceObject": FlowUpdateQueryResourceObject,
    "FlowUpdateQueryResourceObjectAttributes": FlowUpdateQueryResourceObjectAttributes,
    "FlowV2ResponseObjectResourceAttributes": FlowV2ResponseObjectResourceAttributes,
    "FlowV2ResponseObjectResourceExtended": FlowV2ResponseObjectResourceExtended,
    "FlowV2ResponseObjectResourceExtendedAttributes": FlowV2ResponseObjectResourceExtendedAttributes,
    "FlowValuesRequestDTO": FlowValuesRequestDTO,
    "FlowValuesRequestDTOResourceObject": FlowValuesRequestDTOResourceObject,
    "FlowValuesRequestDTOResourceObjectAttributes": FlowValuesRequestDTOResourceObjectAttributes,
    "FlowWebhook": FlowWebhook,
    "FlowsProfileMetricCondition": FlowsProfileMetricCondition,
    "FlowsSMSTrackingOptions": FlowsSMSTrackingOptions,
    "FormMethodFilter": FormMethodFilter,
    "FormResponseObjectResource": FormResponseObjectResource,
    "FormResponseObjectResourceAttributes": FormResponseObjectResourceAttributes,
    "FormSeriesRequestDTO": FormSeriesRequestDTO,
    "FormSeriesRequestDTOResourceObject": FormSeriesRequestDTOResourceObject,
    "FormSeriesRequestDTOResourceObjectAttributes": FormSeriesRequestDTOResourceObjectAttributes,
    "FormValuesRequestDTO": FormValuesRequestDTO,
    "FormValuesRequestDTOResourceObject": FormValuesRequestDTOResourceObject,
    "FormValuesRequestDTOResourceObjectAttributes": FormValuesRequestDTOResourceObjectAttributes,
    "FormVersionABTest": FormVersionABTest,
    "FormVersionResponseObjectResource": FormVersionResponseObjectResource,
    "FormVersionResponseObjectResourceAttributes": FormVersionResponseObjectResourceAttributes,
    "GetAccountResponse": GetAccountResponse,
    "GetAccountResponseCollection": GetAccountResponseCollection,
    "GetAccounts4XXResponse": GetAccounts4XXResponse,
    "GetAccounts4XXResponseErrorsInner": GetAccounts4XXResponseErrorsInner,
    "GetAccounts4XXResponseErrorsInnerSource": GetAccounts4XXResponseErrorsInnerSource,
    "GetBulkProfileSuppressionsCreateJobResponse": GetBulkProfileSuppressionsCreateJobResponse,
    "GetBulkProfileSuppressionsCreateJobResponseCollection": GetBulkProfileSuppressionsCreateJobResponseCollection,
    "GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner": GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner,
    "GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships": GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships,
    "GetBulkProfileSuppressionsRemoveJobResponse": GetBulkProfileSuppressionsRemoveJobResponse,
    "GetBulkProfileSuppressionsRemoveJobResponseCollection": GetBulkProfileSuppressionsRemoveJobResponseCollection,
    "GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner": GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner,
    "GetCampaignMessageCampaignRelationshipResponse": GetCampaignMessageCampaignRelationshipResponse,
    "GetCampaignMessageCampaignRelationshipResponseData": GetCampaignMessageCampaignRelationshipResponseData,
    "GetCampaignMessageImageRelationshipResponse": GetCampaignMessageImageRelationshipResponse,
    "GetCampaignMessageImageRelationshipResponseData": GetCampaignMessageImageRelationshipResponseData,
    "GetCampaignMessageResponseCollectionCompoundDocument": GetCampaignMessageResponseCollectionCompoundDocument,
    "GetCampaignMessageResponseCompoundDocument": GetCampaignMessageResponseCompoundDocument,
    "GetCampaignMessageResponseCompoundDocumentData": GetCampaignMessageResponseCompoundDocumentData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData,
    "GetCampaignMessageTemplateRelationshipResponse": GetCampaignMessageTemplateRelationshipResponse,
    "GetCampaignMessagesRelationshipsResponseCollection": GetCampaignMessagesRelationshipsResponseCollection,
    "GetCampaignMessagesRelationshipsResponseCollectionDataInner": GetCampaignMessagesRelationshipsResponseCollectionDataInner,
    "GetCampaignRecipientEstimationJobResponse": GetCampaignRecipientEstimationJobResponse,
    "GetCampaignRecipientEstimationResponse": GetCampaignRecipientEstimationResponse,
    "GetCampaignResponse": GetCampaignResponse,
    "GetCampaignResponseCollectionCompoundDocument": GetCampaignResponseCollectionCompoundDocument,
    "GetCampaignResponseCollectionCompoundDocumentDataInner": GetCampaignResponseCollectionCompoundDocumentDataInner,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner,
    "GetCampaignResponseCompoundDocument": GetCampaignResponseCompoundDocument,
    "GetCampaignResponseData": GetCampaignResponseData,
    "GetCampaignResponseDataAllOfRelationships": GetCampaignResponseDataAllOfRelationships,
    "GetCampaignSendJobResponse": GetCampaignSendJobResponse,
    "GetCampaignTagsRelationshipsResponseCollection": GetCampaignTagsRelationshipsResponseCollection,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocument": GetCatalogCategoryCreateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner,
    "GetCatalogCategoryCreateJobResponseCompoundDocument": GetCatalogCategoryCreateJobResponseCompoundDocument,
    "GetCatalogCategoryDeleteJobResponse": GetCatalogCategoryDeleteJobResponse,
    "GetCatalogCategoryDeleteJobResponseCollection": GetCatalogCategoryDeleteJobResponseCollection,
    "GetCatalogCategoryDeleteJobResponseCollectionDataInner": GetCatalogCategoryDeleteJobResponseCollectionDataInner,
    "GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships": GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogCategoryItemsRelationshipsResponseCollection": GetCatalogCategoryItemsRelationshipsResponseCollection,
    "GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner": GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner,
    "GetCatalogCategoryResponse": GetCatalogCategoryResponse,
    "GetCatalogCategoryResponseCollection": GetCatalogCategoryResponseCollection,
    "GetCatalogCategoryResponseCollectionDataInner": GetCatalogCategoryResponseCollectionDataInner,
    "GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships": GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner,
    "GetCatalogCategoryUpdateJobResponseCompoundDocument": GetCatalogCategoryUpdateJobResponseCompoundDocument,
    "GetCatalogItemCategoriesRelationshipsResponseCollection": GetCatalogItemCategoriesRelationshipsResponseCollection,
    "GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner": GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocument": GetCatalogItemCreateJobResponseCollectionCompoundDocument,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner,
    "GetCatalogItemCreateJobResponseCompoundDocument": GetCatalogItemCreateJobResponseCompoundDocument,
    "GetCatalogItemDeleteJobResponse": GetCatalogItemDeleteJobResponse,
    "GetCatalogItemDeleteJobResponseCollection": GetCatalogItemDeleteJobResponseCollection,
    "GetCatalogItemDeleteJobResponseCollectionDataInner": GetCatalogItemDeleteJobResponseCollectionDataInner,
    "GetCatalogItemResponseCollectionCompoundDocument": GetCatalogItemResponseCollectionCompoundDocument,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogItemResponseCompoundDocument": GetCatalogItemResponseCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocument": GetCatalogItemUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner,
    "GetCatalogItemUpdateJobResponseCompoundDocument": GetCatalogItemUpdateJobResponseCompoundDocument,
    "GetCatalogItemVariantsRelationshipsResponseCollection": GetCatalogItemVariantsRelationshipsResponseCollection,
    "GetCatalogItemVariantsRelationshipsResponseCollectionDataInner": GetCatalogItemVariantsRelationshipsResponseCollectionDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocument": GetCatalogVariantCreateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogVariantCreateJobResponseCompoundDocument": GetCatalogVariantCreateJobResponseCompoundDocument,
    "GetCatalogVariantDeleteJobResponse": GetCatalogVariantDeleteJobResponse,
    "GetCatalogVariantDeleteJobResponseCollection": GetCatalogVariantDeleteJobResponseCollection,
    "GetCatalogVariantDeleteJobResponseCollectionDataInner": GetCatalogVariantDeleteJobResponseCollectionDataInner,
    "GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships": GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogVariantResponse": GetCatalogVariantResponse,
    "GetCatalogVariantResponseCollection": GetCatalogVariantResponseCollection,
    "GetCatalogVariantResponseCollectionDataInner": GetCatalogVariantResponseCollectionDataInner,
    "GetCatalogVariantResponseCollectionDataInnerAllOfRelationships": GetCatalogVariantResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocument": GetCatalogVariantUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogVariantUpdateJobResponseCompoundDocument": GetCatalogVariantUpdateJobResponseCompoundDocument,
    "GetCouponCodeCouponRelationshipResponse": GetCouponCodeCouponRelationshipResponse,
    "GetCouponCodeCouponRelationshipResponseData": GetCouponCodeCouponRelationshipResponseData,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocument": GetCouponCodeCreateJobResponseCollectionCompoundDocument,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner,
    "GetCouponCodeCreateJobResponseCompoundDocument": GetCouponCodeCreateJobResponseCompoundDocument,
    "GetCouponCodeResponseCollection": GetCouponCodeResponseCollection,
    "GetCouponCodeResponseCollectionCompoundDocument": GetCouponCodeResponseCollectionCompoundDocument,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInner": GetCouponCodeResponseCollectionCompoundDocumentDataInner,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetCouponCodeResponseCollectionDataInner": GetCouponCodeResponseCollectionDataInner,
    "GetCouponCodeResponseCollectionDataInnerAllOfRelationships": GetCouponCodeResponseCollectionDataInnerAllOfRelationships,
    "GetCouponCodeResponseCompoundDocument": GetCouponCodeResponseCompoundDocument,
    "GetCouponCodesRelationshipsResponseCollection": GetCouponCodesRelationshipsResponseCollection,
    "GetCouponCodesRelationshipsResponseCollectionDataInner": GetCouponCodesRelationshipsResponseCollectionDataInner,
    "GetCouponResponse": GetCouponResponse,
    "GetCouponResponseCollection": GetCouponResponseCollection,
    "GetCustomMetricMetricsRelationshipsResponseCollection": GetCustomMetricMetricsRelationshipsResponseCollection,
    "GetCustomMetricResponse": GetCustomMetricResponse,
    "GetCustomMetricResponseCollectionCompoundDocument": GetCustomMetricResponseCollectionCompoundDocument,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInner": GetCustomMetricResponseCollectionCompoundDocumentDataInner,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner,
    "GetCustomMetricResponseCompoundDocument": GetCustomMetricResponseCompoundDocument,
    "GetCustomMetricResponseData": GetCustomMetricResponseData,
    "GetCustomMetricResponseDataAllOfRelationships": GetCustomMetricResponseDataAllOfRelationships,
    "GetDataSourceResponse": GetDataSourceResponse,
    "GetDataSourceResponseCollection": GetDataSourceResponseCollection,
    "GetEventMetricRelationshipResponse": GetEventMetricRelationshipResponse,
    "GetEventProfileRelationshipResponse": GetEventProfileRelationshipResponse,
    "GetEventProfileRelationshipResponseData": GetEventProfileRelationshipResponseData,
    "GetEventResponseCollectionCompoundDocument": GetEventResponseCollectionCompoundDocument,
    "GetEventResponseCollectionCompoundDocumentDataInner": GetEventResponseCollectionCompoundDocumentDataInner,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData,
    "GetEventResponseCompoundDocument": GetEventResponseCompoundDocument,
    "GetFlowActionFlowMessageRelationshipResponseCollection": GetFlowActionFlowMessageRelationshipResponseCollection,
    "GetFlowActionFlowRelationshipResponse": GetFlowActionFlowRelationshipResponse,
    "GetFlowActionResponse": GetFlowActionResponse,
    "GetFlowActionResponseCollection": GetFlowActionResponseCollection,
    "GetFlowActionResponseCollectionDataInner": GetFlowActionResponseCollectionDataInner,
    "GetFlowActionResponseCollectionDataInnerAllOfRelationships": GetFlowActionResponseCollectionDataInnerAllOfRelationships,
    "GetFlowActionResponseCompoundDocument": GetFlowActionResponseCompoundDocument,
    "GetFlowActionResponseCompoundDocumentData": GetFlowActionResponseCompoundDocumentData,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationships": GetFlowActionResponseCompoundDocumentDataAllOfRelationships,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner,
    "GetFlowFlowActionRelationshipListResponseCollection": GetFlowFlowActionRelationshipListResponseCollection,
    "GetFlowMessageActionRelationshipResponse": GetFlowMessageActionRelationshipResponse,
    "GetFlowMessageResponseCollection": GetFlowMessageResponseCollection,
    "GetFlowMessageResponseCollectionDataInner": GetFlowMessageResponseCollectionDataInner,
    "GetFlowMessageResponseCollectionDataInnerAllOfRelationships": GetFlowMessageResponseCollectionDataInnerAllOfRelationships,
    "GetFlowMessageResponseCompoundDocument": GetFlowMessageResponseCompoundDocument,
    "GetFlowMessageResponseCompoundDocumentData": GetFlowMessageResponseCompoundDocumentData,
    "GetFlowMessageResponseCompoundDocumentDataAllOfRelationships": GetFlowMessageResponseCompoundDocumentDataAllOfRelationships,
    "GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction": GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction,
    "GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate": GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate,
    "GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData": GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData,
    "GetFlowMessageTemplateRelationshipResponse": GetFlowMessageTemplateRelationshipResponse,
    "GetFlowMessageTemplateRelationshipResponseData": GetFlowMessageTemplateRelationshipResponseData,
    "GetFlowResponse": GetFlowResponse,
    "GetFlowResponseCollection": GetFlowResponseCollection,
    "GetFlowResponseCollectionCompoundDocument": GetFlowResponseCollectionCompoundDocument,
    "GetFlowResponseCollectionCompoundDocumentDataInner": GetFlowResponseCollectionCompoundDocumentDataInner,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner,
    "GetFlowResponseCollectionDataInner": GetFlowResponseCollectionDataInner,
    "GetFlowResponseCollectionDataInnerAllOfRelationships": GetFlowResponseCollectionDataInnerAllOfRelationships,
    "GetFlowTagsRelationshipsResponseCollection": GetFlowTagsRelationshipsResponseCollection,
    "GetFlowV2ResponseCompoundDocument": GetFlowV2ResponseCompoundDocument,
    "GetFlowV2ResponseCompoundDocumentData": GetFlowV2ResponseCompoundDocumentData,
    "GetFormResponse": GetFormResponse,
    "GetFormResponseCollectionCompoundDocument": GetFormResponseCollectionCompoundDocument,
    "GetFormResponseCollectionCompoundDocumentDataInner": GetFormResponseCollectionCompoundDocumentDataInner,
    "GetFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetFormResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetFormResponseCompoundDocument": GetFormResponseCompoundDocument,
    "GetFormResponseCompoundDocumentData": GetFormResponseCompoundDocumentData,
    "GetFormResponseCompoundDocumentDataAllOfRelationships": GetFormResponseCompoundDocumentDataAllOfRelationships,
    "GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions": GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersions,
    "GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner": GetFormResponseCompoundDocumentDataAllOfRelationshipsFormVersionsDataInner,
    "GetFormVersionFormRelationshipResponse": GetFormVersionFormRelationshipResponse,
    "GetFormVersionFormRelationshipResponseData": GetFormVersionFormRelationshipResponseData,
    "GetFormVersionResponse": GetFormVersionResponse,
    "GetFormVersionResponseCollection": GetFormVersionResponseCollection,
    "GetFormVersionsRelationshipsResponseCollection": GetFormVersionsRelationshipsResponseCollection,
    "GetFormVersionsRelationshipsResponseCollectionDataInner": GetFormVersionsRelationshipsResponseCollectionDataInner,
    "GetImageResponse": GetImageResponse,
    "GetImageResponseCollection": GetImageResponseCollection,
    "GetImportErrorResponseCollection": GetImportErrorResponseCollection,
    "GetListFlowTriggersRelationshipsResponseCollection": GetListFlowTriggersRelationshipsResponseCollection,
    "GetListListResponseCollectionCompoundDocument": GetListListResponseCollectionCompoundDocument,
    "GetListListResponseCollectionCompoundDocumentDataInner": GetListListResponseCollectionCompoundDocumentDataInner,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner,
    "GetListMemberResponseCollection": GetListMemberResponseCollection,
    "GetListMemberResponseCollectionDataInner": GetListMemberResponseCollectionDataInner,
    "GetListProfilesRelationshipsResponseCollection": GetListProfilesRelationshipsResponseCollection,
    "GetListResponseCollection": GetListResponseCollection,
    "GetListResponseCollectionDataInner": GetListResponseCollectionDataInner,
    "GetListResponseCollectionDataInnerAllOfRelationships": GetListResponseCollectionDataInnerAllOfRelationships,
    "GetListRetrieveResponseCompoundDocument": GetListRetrieveResponseCompoundDocument,
    "GetListRetrieveResponseCompoundDocumentData": GetListRetrieveResponseCompoundDocumentData,
    "GetListTagsRelationshipsResponseCollection": GetListTagsRelationshipsResponseCollection,
    "GetListTagsRelationshipsResponseCollectionDataInner": GetListTagsRelationshipsResponseCollectionDataInner,
    "GetMappedMetricCustomMetricRelationshipResponse": GetMappedMetricCustomMetricRelationshipResponse,
    "GetMappedMetricCustomMetricRelationshipResponseData": GetMappedMetricCustomMetricRelationshipResponseData,
    "GetMappedMetricMetricRelationshipResponse": GetMappedMetricMetricRelationshipResponse,
    "GetMappedMetricResponseCollectionCompoundDocument": GetMappedMetricResponseCollectionCompoundDocument,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInner": GetMappedMetricResponseCollectionCompoundDocumentDataInner,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData,
    "GetMappedMetricResponseCompoundDocument": GetMappedMetricResponseCompoundDocument,
    "GetMetricFlowTriggersRelationshipsResponseCollection": GetMetricFlowTriggersRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollection": GetMetricPropertiesRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollectionDataInner": GetMetricPropertiesRelationshipsResponseCollectionDataInner,
    "GetMetricPropertyMetricRelationshipResponse": GetMetricPropertyMetricRelationshipResponse,
    "GetMetricPropertyResponseCollection": GetMetricPropertyResponseCollection,
    "GetMetricPropertyResponseCollectionDataInner": GetMetricPropertyResponseCollectionDataInner,
    "GetMetricPropertyResponseCollectionDataInnerAllOfRelationships": GetMetricPropertyResponseCollectionDataInnerAllOfRelationships,
    "GetMetricPropertyResponseCompoundDocument": GetMetricPropertyResponseCompoundDocument,
    "GetMetricPropertyResponseCompoundDocumentData": GetMetricPropertyResponseCompoundDocumentData,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData,
    "GetMetricResponse": GetMetricResponse,
    "GetMetricResponseCollection": GetMetricResponseCollection,
    "GetMetricResponseCollectionCompoundDocument": GetMetricResponseCollectionCompoundDocument,
    "GetMetricResponseCollectionCompoundDocumentDataInner": GetMetricResponseCollectionCompoundDocumentDataInner,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner,
    "GetMetricResponseCompoundDocument": GetMetricResponseCompoundDocument,
    "GetMetricResponseData": GetMetricResponseData,
    "GetMetricResponseDataAllOfRelationships": GetMetricResponseDataAllOfRelationships,
    "GetProfileBulkImportJobListsRelationshipsResponseCollection": GetProfileBulkImportJobListsRelationshipsResponseCollection,
    "GetProfileBulkImportJobProfilesRelationshipsResponseCollection": GetProfileBulkImportJobProfilesRelationshipsResponseCollection,
    "GetProfileImportJobResponseCollectionCompoundDocument": GetProfileImportJobResponseCollectionCompoundDocument,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInner,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner,
    "GetProfileImportJobResponseCompoundDocument": GetProfileImportJobResponseCompoundDocument,
    "GetProfileListsRelationshipsResponseCollection": GetProfileListsRelationshipsResponseCollection,
    "GetProfileListsRelationshipsResponseCollectionDataInner": GetProfileListsRelationshipsResponseCollectionDataInner,
    "GetProfilePushTokensRelationshipsResponseCollection": GetProfilePushTokensRelationshipsResponseCollection,
    "GetProfilePushTokensRelationshipsResponseCollectionDataInner": GetProfilePushTokensRelationshipsResponseCollectionDataInner,
    "GetProfileResponse": GetProfileResponse,
    "GetProfileResponseCollection": GetProfileResponseCollection,
    "GetProfileResponseCollectionCompoundDocument": GetProfileResponseCollectionCompoundDocument,
    "GetProfileResponseCollectionCompoundDocumentDataInner": GetProfileResponseCollectionCompoundDocumentDataInner,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner,
    "GetProfileResponseCompoundDocument": GetProfileResponseCompoundDocument,
    "GetProfileResponseCompoundDocumentData": GetProfileResponseCompoundDocumentData,
    "GetProfileResponseCompoundDocumentDataAllOfRelationships": GetProfileResponseCompoundDocumentDataAllOfRelationships,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists": GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner,
    "GetProfileResponseData": GetProfileResponseData,
    "GetProfileResponseDataAllOfRelationships": GetProfileResponseDataAllOfRelationships,
    "GetProfileSegmentsRelationshipsResponseCollection": GetProfileSegmentsRelationshipsResponseCollection,
    "GetPushTokenProfileRelationshipResponse": GetPushTokenProfileRelationshipResponse,
    "GetPushTokenResponseCollection": GetPushTokenResponseCollection,
    "GetPushTokenResponseCollectionCompoundDocument": GetPushTokenResponseCollectionCompoundDocument,
    "GetPushTokenResponseCollectionCompoundDocumentDataInner": GetPushTokenResponseCollectionCompoundDocumentDataInner,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData,
    "GetPushTokenResponseCollectionDataInner": GetPushTokenResponseCollectionDataInner,
    "GetPushTokenResponseCollectionDataInnerAllOfRelationships": GetPushTokenResponseCollectionDataInnerAllOfRelationships,
    "GetPushTokenResponseCompoundDocument": GetPushTokenResponseCompoundDocument,
    "GetReviewResponseDTOCollectionCompoundDocument": GetReviewResponseDTOCollectionCompoundDocument,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInner": GetReviewResponseDTOCollectionCompoundDocumentDataInner,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner,
    "GetReviewResponseDTOCompoundDocument": GetReviewResponseDTOCompoundDocument,
    "GetSegmentFlowTriggersRelationshipsResponseCollection": GetSegmentFlowTriggersRelationshipsResponseCollection,
    "GetSegmentListResponseCollectionCompoundDocument": GetSegmentListResponseCollectionCompoundDocument,
    "GetSegmentListResponseCollectionCompoundDocumentDataInner": GetSegmentListResponseCollectionCompoundDocumentDataInner,
    "GetSegmentMemberResponseCollection": GetSegmentMemberResponseCollection,
    "GetSegmentMemberResponseCollectionDataInner": GetSegmentMemberResponseCollectionDataInner,
    "GetSegmentProfilesRelationshipsResponseCollection": GetSegmentProfilesRelationshipsResponseCollection,
    "GetSegmentResponseCollection": GetSegmentResponseCollection,
    "GetSegmentResponseCollectionDataInner": GetSegmentResponseCollectionDataInner,
    "GetSegmentRetrieveResponseCompoundDocument": GetSegmentRetrieveResponseCompoundDocument,
    "GetSegmentRetrieveResponseCompoundDocumentData": GetSegmentRetrieveResponseCompoundDocumentData,
    "GetSegmentTagsRelationshipsResponseCollection": GetSegmentTagsRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollection": GetTagCampaignRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollectionDataInner": GetTagCampaignRelationshipsResponseCollectionDataInner,
    "GetTagFlowRelationshipsResponseCollection": GetTagFlowRelationshipsResponseCollection,
    "GetTagFlowRelationshipsResponseCollectionDataInner": GetTagFlowRelationshipsResponseCollectionDataInner,
    "GetTagGroupRelationshipResponse": GetTagGroupRelationshipResponse,
    "GetTagGroupRelationshipResponseData": GetTagGroupRelationshipResponseData,
    "GetTagGroupResponse": GetTagGroupResponse,
    "GetTagGroupResponseCollection": GetTagGroupResponseCollection,
    "GetTagGroupResponseCollectionDataInner": GetTagGroupResponseCollectionDataInner,
    "GetTagGroupResponseCollectionDataInnerAllOfRelationships": GetTagGroupResponseCollectionDataInnerAllOfRelationships,
    "GetTagGroupTagsRelationshipsResponseCollection": GetTagGroupTagsRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollection": GetTagListRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollectionDataInner": GetTagListRelationshipsResponseCollectionDataInner,
    "GetTagResponseCollection": GetTagResponseCollection,
    "GetTagResponseCollectionCompoundDocument": GetTagResponseCollectionCompoundDocument,
    "GetTagResponseCollectionCompoundDocumentDataInner": GetTagResponseCollectionCompoundDocumentDataInner,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData,
    "GetTagResponseCollectionDataInner": GetTagResponseCollectionDataInner,
    "GetTagResponseCollectionDataInnerAllOfRelationships": GetTagResponseCollectionDataInnerAllOfRelationships,
    "GetTagResponseCompoundDocument": GetTagResponseCompoundDocument,
    "GetTagSegmentRelationshipsResponseCollection": GetTagSegmentRelationshipsResponseCollection,
    "GetTagSegmentRelationshipsResponseCollectionDataInner": GetTagSegmentRelationshipsResponseCollectionDataInner,
    "GetTemplateResponse": GetTemplateResponse,
    "GetTemplateResponseCollection": GetTemplateResponseCollection,
    "GetTrackingSettingResponse": GetTrackingSettingResponse,
    "GetTrackingSettingResponseCollection": GetTrackingSettingResponseCollection,
    "GetUniversalContentResponse": GetUniversalContentResponse,
    "GetUniversalContentResponseCollection": GetUniversalContentResponseCollection,
    "GetWebFeedResponse": GetWebFeedResponse,
    "GetWebFeedResponseCollection": GetWebFeedResponseCollection,
    "GetWebhookResponseCollectionCompoundDocument": GetWebhookResponseCollectionCompoundDocument,
    "GetWebhookResponseCollectionCompoundDocumentDataInner": GetWebhookResponseCollectionCompoundDocumentDataInner,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner,
    "GetWebhookResponseCompoundDocument": GetWebhookResponseCompoundDocument,
    "GetWebhookTopicResponse": GetWebhookTopicResponse,
    "GetWebhookTopicResponseCollection": GetWebhookTopicResponseCollection,
    "GreaterThanPositiveNumericFilter": GreaterThanPositiveNumericFilter,
    "HTMLBlock": HTMLBlock,
    "HTMLBlockData": HTMLBlockData,
    "HasEmailMarketing": HasEmailMarketing,
    "HasEmailMarketingConsent": HasEmailMarketingConsent,
    "HasEmailMarketingNeverSubscribed": HasEmailMarketingNeverSubscribed,
    "HasEmailMarketingSubscribed": HasEmailMarketingSubscribed,
    "HasPushMarketing": HasPushMarketing,
    "HasPushMarketingConsent": HasPushMarketingConsent,
    "HasSMSMarketingConsent": HasSMSMarketingConsent,
    "HasSMSMarketingSubscribed": HasSMSMarketingSubscribed,
    "HeaderBlock": HeaderBlock,
    "HorizontalRuleBlock": HorizontalRuleBlock,
    "ImageBlock": ImageBlock,
    "ImageCreateQuery": ImageCreateQuery,
    "ImageCreateQueryResourceObject": ImageCreateQueryResourceObject,
    "ImageCreateQueryResourceObjectAttributes": ImageCreateQueryResourceObjectAttributes,
    "ImagePartialUpdateQuery": ImagePartialUpdateQuery,
    "ImagePartialUpdateQueryResourceObject": ImagePartialUpdateQueryResourceObject,
    "ImagePartialUpdateQueryResourceObjectAttributes": ImagePartialUpdateQueryResourceObjectAttributes,
    "ImageResponseObjectResource": ImageResponseObjectResource,
    "ImageResponseObjectResourceAttributes": ImageResponseObjectResourceAttributes,
    "ImmediateSendStrategy": ImmediateSendStrategy,
    "ImportErrorResponseObjectResource": ImportErrorResponseObjectResource,
    "ImportErrorResponseObjectResourceAttributes": ImportErrorResponseObjectResourceAttributes,
    "InStringArrayFilter": InStringArrayFilter,
    "InTheLastBaseRelativeDateFilter": InTheLastBaseRelativeDateFilter,
    "InboundMessageMethodFilter": InboundMessageMethodFilter,
    "Increment": Increment,
    "InternalServiceAction": InternalServiceAction,
    "InvalidEmailDateFilter": InvalidEmailDateFilter,
    "IsSetExistenceFilter": IsSetExistenceFilter,
    "LessThanPositiveNumericFilter": LessThanPositiveNumericFilter,
    "Link": Link,
    "ListContainsOperatorFilter": ListContainsOperatorFilter,
    "ListCreateQuery": ListCreateQuery,
    "ListCreateQueryResourceObject": ListCreateQueryResourceObject,
    "ListCreateQueryResourceObjectAttributes": ListCreateQueryResourceObjectAttributes,
    "ListLengthFilter": ListLengthFilter,
    "ListListResponseObjectResource": ListListResponseObjectResource,
    "ListListResponseObjectResourceAttributes": ListListResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceAttributes": ListMemberResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceExtended": ListMemberResponseObjectResourceExtended,
    "ListMemberResponseObjectResourceExtendedAttributes": ListMemberResponseObjectResourceExtendedAttributes,
    "ListMembersAddQuery": ListMembersAddQuery,
    "ListMembersDeleteQuery": ListMembersDeleteQuery,
    "ListPartialUpdateQuery": ListPartialUpdateQuery,
    "ListPartialUpdateQueryResourceObject": ListPartialUpdateQueryResourceObject,
    "ListRegexOperatorContainsFilter": ListRegexOperatorContainsFilter,
    "ListResponseObjectResource": ListResponseObjectResource,
    "ListRetrieveResponseObjectResourceAttributes": ListRetrieveResponseObjectResourceAttributes,
    "ListRetrieveResponseObjectResourceExtended": ListRetrieveResponseObjectResourceExtended,
    "ListRetrieveResponseObjectResourceExtendedAttributes": ListRetrieveResponseObjectResourceExtendedAttributes,
    "ListSetFilter": ListSetFilter,
    "ListSubstringFilter": ListSubstringFilter,
    "ListTrigger": ListTrigger,
    "ListUpdateAction": ListUpdateAction,
    "ListUpdateActionData": ListUpdateActionData,
    "LocalStaticSend": LocalStaticSend,
    "LowInventoryCondition": LowInventoryCondition,
    "LowInventoryConditionFilter": LowInventoryConditionFilter,
    "LowInventoryConditionGroup": LowInventoryConditionGroup,
    "LowInventoryTrigger": LowInventoryTrigger,
    "MailboxProviderMethodFilter": MailboxProviderMethodFilter,
    "ManualAddMethodFilter": ManualAddMethodFilter,
    "ManualImportMethodFilter": ManualImportMethodFilter,
    "ManualRemoveMethodFilter": ManualRemoveMethodFilter,
    "ManualSuppressionDateFilter": ManualSuppressionDateFilter,
    "MappedMetricPartialUpdateQuery": MappedMetricPartialUpdateQuery,
    "MappedMetricPartialUpdateQueryResourceObject": MappedMetricPartialUpdateQueryResourceObject,
    "MappedMetricPartialUpdateQueryResourceObjectRelationships": MappedMetricPartialUpdateQueryResourceObjectRelationships,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric": MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData": MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric": MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData": MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData,
    "MappedMetricResponseObjectResource": MappedMetricResponseObjectResource,
    "MappedMetricResponseObjectResourceAttributes": MappedMetricResponseObjectResourceAttributes,
    "MessageBlockedMethodFilter": MessageBlockedMethodFilter,
    "MetricAggregateQuery": MetricAggregateQuery,
    "MetricAggregateQueryResourceObject": MetricAggregateQueryResourceObject,
    "MetricAggregateQueryResourceObjectAttributes": MetricAggregateQueryResourceObjectAttributes,
    "MetricAggregateRowDTO": MetricAggregateRowDTO,
    "MetricCreateQueryResourceObject": MetricCreateQueryResourceObject,
    "MetricCreateQueryResourceObjectAttributes": MetricCreateQueryResourceObjectAttributes,
    "MetricPropertyCondition": MetricPropertyCondition,
    "MetricPropertyConditionGroup": MetricPropertyConditionGroup,
    "MetricPropertyResponseObjectResourceAttributes": MetricPropertyResponseObjectResourceAttributes,
    "MetricPropertyResponseObjectResourceExtended": MetricPropertyResponseObjectResourceExtended,
    "MetricPropertyResponseObjectResourceExtendedAttributes": MetricPropertyResponseObjectResourceExtendedAttributes,
    "MetricResponseObjectResource": MetricResponseObjectResource,
    "MetricResponseObjectResourceAttributes": MetricResponseObjectResourceAttributes,
    "MetricTrigger": MetricTrigger,
    "MobilePushBadge": MobilePushBadge,
    "MobilePushContent": MobilePushContent,
    "MobilePushContentCreate": MobilePushContentCreate,
    "MobilePushContentUpdate": MobilePushContentUpdate,
    "MobilePushMessageContent": MobilePushMessageContent,
    "MobilePushMessageSilentDefinition": MobilePushMessageSilentDefinition,
    "MobilePushMessageSilentDefinitionCreate": MobilePushMessageSilentDefinitionCreate,
    "MobilePushMessageSilentDefinitionUpdate": MobilePushMessageSilentDefinitionUpdate,
    "MobilePushMessageStandardDefinition": MobilePushMessageStandardDefinition,
    "MobilePushMessageStandardDefinitionCreate": MobilePushMessageStandardDefinitionCreate,
    "MobilePushMessageStandardDefinitionUpdate": MobilePushMessageStandardDefinitionUpdate,
    "MobilePushNoBadge": MobilePushNoBadge,
    "MobilePushOptions": MobilePushOptions,
    "NoEmailMarketing": NoEmailMarketing,
    "NoEmailMarketingConsent": NoEmailMarketingConsent,
    "NoEmailMarketingNeverSubscribed": NoEmailMarketingNeverSubscribed,
    "NoEmailMarketingSubscribed": NoEmailMarketingSubscribed,
    "NoEmailMarketingUnsubscribed": NoEmailMarketingUnsubscribed,
    "NoPushMarketing": NoPushMarketing,
    "NoPushMarketingConsent": NoPushMarketingConsent,
    "NoSMSMarketing": NoSMSMarketing,
    "NoSMSMarketingConsent": NoSMSMarketingConsent,
    "NoSMSMarketingNeverSubscribed": NoSMSMarketingNeverSubscribed,
    "NoSMSMarketingUnsubscribed": NoSMSMarketingUnsubscribed,
    "NonLocalStaticSend": NonLocalStaticSend,
    "NumericOperatorFilter": NumericOperatorFilter,
    "NumericRangeFilter": NumericRangeFilter,
    "ObjectLinks": ObjectLinks,
    "OnlyRelatedLinks": OnlyRelatedLinks,
    "OnsiteProfileCreateQueryResourceObject": OnsiteProfileCreateQueryResourceObject,
    "OnsiteProfileCreateQueryResourceObjectAttributes": OnsiteProfileCreateQueryResourceObjectAttributes,
    "OnsiteProfileMeta": OnsiteProfileMeta,
    "PatchCampaignMessageResponse": PatchCampaignMessageResponse,
    "PatchCampaignMessageResponseData": PatchCampaignMessageResponseData,
    "PatchCampaignResponse": PatchCampaignResponse,
    "PatchCatalogCategoryResponse": PatchCatalogCategoryResponse,
    "PatchCatalogItemResponse": PatchCatalogItemResponse,
    "PatchCatalogVariantResponse": PatchCatalogVariantResponse,
    "PatchCouponCodeResponse": PatchCouponCodeResponse,
    "PatchCouponResponse": PatchCouponResponse,
    "PatchCustomMetricResponse": PatchCustomMetricResponse,
    "PatchFlowResponse": PatchFlowResponse,
    "PatchFlowResponseData": PatchFlowResponseData,
    "PatchImageResponse": PatchImageResponse,
    "PatchListPartialUpdateResponse": PatchListPartialUpdateResponse,
    "PatchMappedMetricResponse": PatchMappedMetricResponse,
    "PatchMappedMetricResponseData": PatchMappedMetricResponseData,
    "PatchProfileResponse": PatchProfileResponse,
    "PatchReviewResponseDTO": PatchReviewResponseDTO,
    "PatchReviewResponseDTOData": PatchReviewResponseDTOData,
    "PatchReviewResponseDTODataRelationships": PatchReviewResponseDTODataRelationships,
    "PatchReviewResponseDTODataRelationshipsItem": PatchReviewResponseDTODataRelationshipsItem,
    "PatchReviewResponseDTODataRelationshipsItemData": PatchReviewResponseDTODataRelationshipsItemData,
    "PatchSegmentPartialUpdateResponse": PatchSegmentPartialUpdateResponse,
    "PatchTagGroupResponse": PatchTagGroupResponse,
    "PatchTemplateResponse": PatchTemplateResponse,
    "PatchTrackingSettingResponse": PatchTrackingSettingResponse,
    "PatchTrackingSettingResponseData": PatchTrackingSettingResponseData,
    "PatchUniversalContentResponse": PatchUniversalContentResponse,
    "PatchWebFeedResponse": PatchWebFeedResponse,
    "PatchWebhookResponse": PatchWebhookResponse,
    "PostBulkProfileSuppressionsCreateJobResponse": PostBulkProfileSuppressionsCreateJobResponse,
    "PostBulkProfileSuppressionsCreateJobResponseData": PostBulkProfileSuppressionsCreateJobResponseData,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationships": PostBulkProfileSuppressionsCreateJobResponseDataRelationships,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner,
    "PostBulkProfileSuppressionsRemoveJobResponse": PostBulkProfileSuppressionsRemoveJobResponse,
    "PostBulkProfileSuppressionsRemoveJobResponseData": PostBulkProfileSuppressionsRemoveJobResponseData,
    "PostCampaignMessageResponse": PostCampaignMessageResponse,
    "PostCampaignMessageResponseData": PostCampaignMessageResponseData,
    "PostCampaignMessageResponseDataAttributes": PostCampaignMessageResponseDataAttributes,
    "PostCampaignMessageResponseDataRelationships": PostCampaignMessageResponseDataRelationships,
    "PostCampaignRecipientEstimationJobResponse": PostCampaignRecipientEstimationJobResponse,
    "PostCampaignRecipientEstimationJobResponseData": PostCampaignRecipientEstimationJobResponseData,
    "PostCampaignResponse": PostCampaignResponse,
    "PostCampaignResponseData": PostCampaignResponseData,
    "PostCampaignSendJobResponse": PostCampaignSendJobResponse,
    "PostCampaignSendJobResponseData": PostCampaignSendJobResponseData,
    "PostCampaignValuesResponseDTO": PostCampaignValuesResponseDTO,
    "PostCampaignValuesResponseDTOData": PostCampaignValuesResponseDTOData,
    "PostCampaignValuesResponseDTODataAttributes": PostCampaignValuesResponseDTODataAttributes,
    "PostCampaignValuesResponseDTODataRelationships": PostCampaignValuesResponseDTODataRelationships,
    "PostCatalogCategoryCreateJobResponse": PostCatalogCategoryCreateJobResponse,
    "PostCatalogCategoryCreateJobResponseData": PostCatalogCategoryCreateJobResponseData,
    "PostCatalogCategoryDeleteJobResponse": PostCatalogCategoryDeleteJobResponse,
    "PostCatalogCategoryDeleteJobResponseData": PostCatalogCategoryDeleteJobResponseData,
    "PostCatalogCategoryDeleteJobResponseDataRelationships": PostCatalogCategoryDeleteJobResponseDataRelationships,
    "PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories": PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories,
    "PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner": PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner,
    "PostCatalogCategoryResponse": PostCatalogCategoryResponse,
    "PostCatalogCategoryResponseData": PostCatalogCategoryResponseData,
    "PostCatalogCategoryResponseDataRelationships": PostCatalogCategoryResponseDataRelationships,
    "PostCatalogCategoryResponseDataRelationshipsItems": PostCatalogCategoryResponseDataRelationshipsItems,
    "PostCatalogCategoryUpdateJobResponse": PostCatalogCategoryUpdateJobResponse,
    "PostCatalogCategoryUpdateJobResponseData": PostCatalogCategoryUpdateJobResponseData,
    "PostCatalogItemCreateJobResponse": PostCatalogItemCreateJobResponse,
    "PostCatalogItemCreateJobResponseData": PostCatalogItemCreateJobResponseData,
    "PostCatalogItemDeleteJobResponse": PostCatalogItemDeleteJobResponse,
    "PostCatalogItemDeleteJobResponseData": PostCatalogItemDeleteJobResponseData,
    "PostCatalogItemDeleteJobResponseDataRelationships": PostCatalogItemDeleteJobResponseDataRelationships,
    "PostCatalogItemDeleteJobResponseDataRelationshipsItems": PostCatalogItemDeleteJobResponseDataRelationshipsItems,
    "PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner": PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner,
    "PostCatalogItemResponse": PostCatalogItemResponse,
    "PostCatalogItemResponseData": PostCatalogItemResponseData,
    "PostCatalogItemUpdateJobResponse": PostCatalogItemUpdateJobResponse,
    "PostCatalogItemUpdateJobResponseData": PostCatalogItemUpdateJobResponseData,
    "PostCatalogVariantCreateJobResponse": PostCatalogVariantCreateJobResponse,
    "PostCatalogVariantCreateJobResponseData": PostCatalogVariantCreateJobResponseData,
    "PostCatalogVariantDeleteJobResponse": PostCatalogVariantDeleteJobResponse,
    "PostCatalogVariantDeleteJobResponseData": PostCatalogVariantDeleteJobResponseData,
    "PostCatalogVariantDeleteJobResponseDataRelationships": PostCatalogVariantDeleteJobResponseDataRelationships,
    "PostCatalogVariantDeleteJobResponseDataRelationshipsVariants": PostCatalogVariantDeleteJobResponseDataRelationshipsVariants,
    "PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner": PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner,
    "PostCatalogVariantResponse": PostCatalogVariantResponse,
    "PostCatalogVariantResponseData": PostCatalogVariantResponseData,
    "PostCatalogVariantResponseDataRelationships": PostCatalogVariantResponseDataRelationships,
    "PostCatalogVariantResponseDataRelationshipsItem": PostCatalogVariantResponseDataRelationshipsItem,
    "PostCatalogVariantResponseDataRelationshipsItemData": PostCatalogVariantResponseDataRelationshipsItemData,
    "PostCatalogVariantUpdateJobResponse": PostCatalogVariantUpdateJobResponse,
    "PostCatalogVariantUpdateJobResponseData": PostCatalogVariantUpdateJobResponseData,
    "PostCouponCodeCreateJobResponse": PostCouponCodeCreateJobResponse,
    "PostCouponCodeCreateJobResponseData": PostCouponCodeCreateJobResponseData,
    "PostCouponCodeResponse": PostCouponCodeResponse,
    "PostCouponCodeResponseData": PostCouponCodeResponseData,
    "PostCouponCodeResponseDataRelationships": PostCouponCodeResponseDataRelationships,
    "PostCouponCodeResponseDataRelationshipsProfile": PostCouponCodeResponseDataRelationshipsProfile,
    "PostCouponCodeResponseDataRelationshipsProfileData": PostCouponCodeResponseDataRelationshipsProfileData,
    "PostCouponResponse": PostCouponResponse,
    "PostCouponResponseData": PostCouponResponseData,
    "PostCustomMetricResponse": PostCustomMetricResponse,
    "PostCustomMetricResponseData": PostCustomMetricResponseData,
    "PostDataSourceResponse": PostDataSourceResponse,
    "PostDataSourceResponseData": PostDataSourceResponseData,
    "PostFlowSeriesResponseDTO": PostFlowSeriesResponseDTO,
    "PostFlowSeriesResponseDTOData": PostFlowSeriesResponseDTOData,
    "PostFlowSeriesResponseDTODataAttributes": PostFlowSeriesResponseDTODataAttributes,
    "PostFlowV2Response": PostFlowV2Response,
    "PostFlowV2ResponseData": PostFlowV2ResponseData,
    "PostFlowV2ResponseDataAttributes": PostFlowV2ResponseDataAttributes,
    "PostFlowValuesResponseDTO": PostFlowValuesResponseDTO,
    "PostFlowValuesResponseDTOData": PostFlowValuesResponseDTOData,
    "PostFlowValuesResponseDTODataAttributes": PostFlowValuesResponseDTODataAttributes,
    "PostFlowValuesResponseDTODataRelationships": PostFlowValuesResponseDTODataRelationships,
    "PostFormSeriesResponseDTO": PostFormSeriesResponseDTO,
    "PostFormSeriesResponseDTOData": PostFormSeriesResponseDTOData,
    "PostFormSeriesResponseDTODataAttributes": PostFormSeriesResponseDTODataAttributes,
    "PostFormValuesResponseDTO": PostFormValuesResponseDTO,
    "PostFormValuesResponseDTOData": PostFormValuesResponseDTOData,
    "PostFormValuesResponseDTODataAttributes": PostFormValuesResponseDTODataAttributes,
    "PostImageResponse": PostImageResponse,
    "PostImageResponseData": PostImageResponseData,
    "PostListCreateResponse": PostListCreateResponse,
    "PostListCreateResponseData": PostListCreateResponseData,
    "PostListCreateResponseDataRelationships": PostListCreateResponseDataRelationships,
    "PostListCreateResponseDataRelationshipsProfiles": PostListCreateResponseDataRelationshipsProfiles,
    "PostListCreateResponseDataRelationshipsProfilesDataInner": PostListCreateResponseDataRelationshipsProfilesDataInner,
    "PostMetricAggregateResponse": PostMetricAggregateResponse,
    "PostMetricAggregateResponseData": PostMetricAggregateResponseData,
    "PostMetricAggregateResponseDataAttributes": PostMetricAggregateResponseDataAttributes,
    "PostProfileImportJobResponse": PostProfileImportJobResponse,
    "PostProfileImportJobResponseData": PostProfileImportJobResponseData,
    "PostProfileImportJobResponseDataRelationships": PostProfileImportJobResponseDataRelationships,
    "PostProfileImportJobResponseDataRelationshipsImportErrors": PostProfileImportJobResponseDataRelationshipsImportErrors,
    "PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner": PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner,
    "PostProfileImportJobResponseDataRelationshipsProfiles": PostProfileImportJobResponseDataRelationshipsProfiles,
    "PostProfileImportJobResponseDataRelationshipsProfilesDataInner": PostProfileImportJobResponseDataRelationshipsProfilesDataInner,
    "PostProfileMergeResponse": PostProfileMergeResponse,
    "PostProfileMergeResponseData": PostProfileMergeResponseData,
    "PostProfileResponse": PostProfileResponse,
    "PostProfileResponseData": PostProfileResponseData,
    "PostProfileResponseDataAttributes": PostProfileResponseDataAttributes,
    "PostSegmentCreateResponse": PostSegmentCreateResponse,
    "PostSegmentCreateResponseData": PostSegmentCreateResponseData,
    "PostSegmentSeriesResponseDTO": PostSegmentSeriesResponseDTO,
    "PostSegmentSeriesResponseDTOData": PostSegmentSeriesResponseDTOData,
    "PostSegmentSeriesResponseDTODataAttributes": PostSegmentSeriesResponseDTODataAttributes,
    "PostSegmentValuesResponseDTO": PostSegmentValuesResponseDTO,
    "PostSegmentValuesResponseDTOData": PostSegmentValuesResponseDTOData,
    "PostSegmentValuesResponseDTODataAttributes": PostSegmentValuesResponseDTODataAttributes,
    "PostTagGroupResponse": PostTagGroupResponse,
    "PostTagGroupResponseData": PostTagGroupResponseData,
    "PostTagGroupResponseDataRelationships": PostTagGroupResponseDataRelationships,
    "PostTagResponse": PostTagResponse,
    "PostTagResponseData": PostTagResponseData,
    "PostTagResponseDataRelationships": PostTagResponseDataRelationships,
    "PostTagResponseDataRelationshipsCampaigns": PostTagResponseDataRelationshipsCampaigns,
    "PostTagResponseDataRelationshipsCampaignsDataInner": PostTagResponseDataRelationshipsCampaignsDataInner,
    "PostTemplateResponse": PostTemplateResponse,
    "PostTemplateResponseData": PostTemplateResponseData,
    "PostUniversalContentResponse": PostUniversalContentResponse,
    "PostUniversalContentResponseData": PostUniversalContentResponseData,
    "PostWebFeedResponse": PostWebFeedResponse,
    "PostWebFeedResponseData": PostWebFeedResponseData,
    "PostWebhookResponse": PostWebhookResponse,
    "PostWebhookResponseData": PostWebhookResponseData,
    "PredictiveAnalytics": PredictiveAnalytics,
    "PreferencePageFilter": PreferencePageFilter,
    "PreferencePageMethodFilter": PreferencePageMethodFilter,
    "PriceDropCondition": PriceDropCondition,
    "PriceDropConditionFilter": PriceDropConditionFilter,
    "PriceDropConditionGroup": PriceDropConditionGroup,
    "PriceDropTrigger": PriceDropTrigger,
    "ProductBlock": ProductBlock,
    "ProfileCreateQuery": ProfileCreateQuery,
    "ProfileCreateQueryResourceObject": ProfileCreateQueryResourceObject,
    "ProfileCreateQueryResourceObjectAttributes": ProfileCreateQueryResourceObjectAttributes,
    "ProfileHasGroupMembershipCondition": ProfileHasGroupMembershipCondition,
    "ProfileHasNotReceivedEmailMessageCondition": ProfileHasNotReceivedEmailMessageCondition,
    "ProfileHasNotReceivedPushMessageCondition": ProfileHasNotReceivedPushMessageCondition,
    "ProfileHasNotReceivedSmsMessageCondition": ProfileHasNotReceivedSmsMessageCondition,
    "ProfileIdentifierDTOResourceObject": ProfileIdentifierDTOResourceObject,
    "ProfileIdentifierDTOResourceObjectAttributes": ProfileIdentifierDTOResourceObjectAttributes,
    "ProfileImportJobCreateQuery": ProfileImportJobCreateQuery,
    "ProfileImportJobCreateQueryResourceObject": ProfileImportJobCreateQueryResourceObject,
    "ProfileImportJobCreateQueryResourceObjectAttributes": ProfileImportJobCreateQueryResourceObjectAttributes,
    "ProfileImportJobCreateQueryResourceObjectAttributesProfiles": ProfileImportJobCreateQueryResourceObjectAttributesProfiles,
    "ProfileImportJobCreateQueryResourceObjectRelationships": ProfileImportJobCreateQueryResourceObjectRelationships,
    "ProfileImportJobCreateQueryResourceObjectRelationshipsLists": ProfileImportJobCreateQueryResourceObjectRelationshipsLists,
    "ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner": ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner,
    "ProfileImportJobResponseObjectResource": ProfileImportJobResponseObjectResource,
    "ProfileImportJobResponseObjectResourceAttributes": ProfileImportJobResponseObjectResourceAttributes,
    "ProfileLocation": ProfileLocation,
    "ProfileMarketingConsentCondition": ProfileMarketingConsentCondition,
    "ProfileMergeQuery": ProfileMergeQuery,
    "ProfileMergeQueryResourceObject": ProfileMergeQueryResourceObject,
    "ProfileMergeQueryResourceObjectRelationships": ProfileMergeQueryResourceObjectRelationships,
    "ProfileMergeQueryResourceObjectRelationshipsProfiles": ProfileMergeQueryResourceObjectRelationshipsProfiles,
    "ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner": ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner,
    "ProfileMeta": ProfileMeta,
    "ProfileMetaPatchProperties": ProfileMetaPatchProperties,
    "ProfileMetricPropertyFilter": ProfileMetricPropertyFilter,
    "ProfileNoGroupMembershipCondition": ProfileNoGroupMembershipCondition,
    "ProfileNotInFlowCondition": ProfileNotInFlowCondition,
    "ProfileOperationDelete": ProfileOperationDelete,
    "ProfileOperationUpdateOrCreateBoolean": ProfileOperationUpdateOrCreateBoolean,
    "ProfileOperationUpdateOrCreateDate": ProfileOperationUpdateOrCreateDate,
    "ProfileOperationUpdateOrCreateList": ProfileOperationUpdateOrCreateList,
    "ProfileOperationUpdateOrCreateNumeric": ProfileOperationUpdateOrCreateNumeric,
    "ProfileOperationUpdateOrCreateString": ProfileOperationUpdateOrCreateString,
    "ProfilePartialUpdateQuery": ProfilePartialUpdateQuery,
    "ProfilePartialUpdateQueryResourceObject": ProfilePartialUpdateQueryResourceObject,
    "ProfilePartialUpdateQueryResourceObjectAttributes": ProfilePartialUpdateQueryResourceObjectAttributes,
    "ProfilePostalCodeDistanceCondition": ProfilePostalCodeDistanceCondition,
    "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition,
    "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter,
    "ProfilePredictiveAnalyticsChannelAffinityRankCondition": ProfilePredictiveAnalyticsChannelAffinityRankCondition,
    "ProfilePredictiveAnalyticsChannelAffinityRankFilter": ProfilePredictiveAnalyticsChannelAffinityRankFilter,
    "ProfilePredictiveAnalyticsDateCondition": ProfilePredictiveAnalyticsDateCondition,
    "ProfilePredictiveAnalyticsNumericCondition": ProfilePredictiveAnalyticsNumericCondition,
    "ProfilePredictiveAnalyticsStringCondition": ProfilePredictiveAnalyticsStringCondition,
    "ProfilePredictiveAnalyticsStringFilter": ProfilePredictiveAnalyticsStringFilter,
    "ProfilePropertyCondition": ProfilePropertyCondition,
    "ProfilePropertyDateTrigger": ProfilePropertyDateTrigger,
    "ProfileRandomSampleCondition": ProfileRandomSampleCondition,
    "ProfileRegionCondition": ProfileRegionCondition,
    "ProfileResponseObjectResource": ProfileResponseObjectResource,
    "ProfileResponseObjectResourceAttributes": ProfileResponseObjectResourceAttributes,
    "ProfileResponseObjectResourceExtended": ProfileResponseObjectResourceExtended,
    "ProfileResponseObjectResourceExtendedAttributes": ProfileResponseObjectResourceExtendedAttributes,
    "ProfileSubscriptionCreateQueryResourceObject": ProfileSubscriptionCreateQueryResourceObject,
    "ProfileSubscriptionCreateQueryResourceObjectAttributes": ProfileSubscriptionCreateQueryResourceObjectAttributes,
    "ProfileSubscriptionDeleteQueryResourceObject": ProfileSubscriptionDeleteQueryResourceObject,
    "ProfileSubscriptionDeleteQueryResourceObjectAttributes": ProfileSubscriptionDeleteQueryResourceObjectAttributes,
    "ProfileSuppressionCreateQueryResourceObject": ProfileSuppressionCreateQueryResourceObject,
    "ProfileSuppressionCreateQueryResourceObjectAttributes": ProfileSuppressionCreateQueryResourceObjectAttributes,
    "ProfileSuppressionDeleteQueryResourceObject": ProfileSuppressionDeleteQueryResourceObject,
    "ProfileSuppressionDeleteQueryResourceObjectAttributes": ProfileSuppressionDeleteQueryResourceObjectAttributes,
    "ProfileUpsertQuery": ProfileUpsertQuery,
    "ProfileUpsertQueryResourceObject": ProfileUpsertQueryResourceObject,
    "ProfileUpsertQueryResourceObjectAttributes": ProfileUpsertQueryResourceObjectAttributes,
    "Property": Property,
    "ProvidedLandlineMethodFilter": ProvidedLandlineMethodFilter,
    "ProvidedNoAgeMethodFilter": ProvidedNoAgeMethodFilter,
    "PushChannel": PushChannel,
    "PushMarketing": PushMarketing,
    "PushOnOpenApp": PushOnOpenApp,
    "PushOnOpenDeepLink": PushOnOpenDeepLink,
    "PushProfileUpsertQueryResourceObject": PushProfileUpsertQueryResourceObject,
    "PushProfileUpsertQueryResourceObjectAttributes": PushProfileUpsertQueryResourceObjectAttributes,
    "PushSendOptions": PushSendOptions,
    "PushTokenCreateQuery": PushTokenCreateQuery,
    "PushTokenCreateQueryResourceObject": PushTokenCreateQueryResourceObject,
    "PushTokenCreateQueryResourceObjectAttributes": PushTokenCreateQueryResourceObjectAttributes,
    "PushTokenCreateQueryResourceObjectAttributesProfile": PushTokenCreateQueryResourceObjectAttributesProfile,
    "PushTokenResponseObjectResource": PushTokenResponseObjectResource,
    "PushTokenResponseObjectResourceAttributes": PushTokenResponseObjectResourceAttributes,
    "RejectReasonFake": RejectReasonFake,
    "RejectReasonMisleading": RejectReasonMisleading,
    "RejectReasonOther": RejectReasonOther,
    "RejectReasonPrivateInformation": RejectReasonPrivateInformation,
    "RejectReasonProfanity": RejectReasonProfanity,
    "RejectReasonUnrelated": RejectReasonUnrelated,
    "RelationshipLinks": RelationshipLinks,
    "RelativeAnniversaryDateFilter": RelativeAnniversaryDateFilter,
    "RelativeDateOperatorBaseFilter": RelativeDateOperatorBaseFilter,
    "RelativeDateRangeFilter": RelativeDateRangeFilter,
    "RenderOptions": RenderOptions,
    "RenderOptionsSubObject": RenderOptionsSubObject,
    "ReviewBlock": ReviewBlock,
    "ReviewPatchQuery": ReviewPatchQuery,
    "ReviewPatchQueryResourceObject": ReviewPatchQueryResourceObject,
    "ReviewPatchQueryResourceObjectAttributes": ReviewPatchQueryResourceObjectAttributes,
    "ReviewProductDTO": ReviewProductDTO,
    "ReviewPublicReply": ReviewPublicReply,
    "ReviewResponseDTOObjectResource": ReviewResponseDTOObjectResource,
    "ReviewResponseDTOObjectResourceAttributes": ReviewResponseDTOObjectResourceAttributes,
    "ReviewStatusFeatured": ReviewStatusFeatured,
    "ReviewStatusPending": ReviewStatusPending,
    "ReviewStatusPublished": ReviewStatusPublished,
    "ReviewStatusRejected": ReviewStatusRejected,
    "ReviewStatusUnpublished": ReviewStatusUnpublished,
    "SMSChannel": SMSChannel,
    "SMSContent": SMSContent,
    "SMSContentCreate": SMSContentCreate,
    "SMSContentSubObject": SMSContentSubObject,
    "SMSMarketing": SMSMarketing,
    "SMSMessageContent": SMSMessageContent,
    "SMSMessageDefinition": SMSMessageDefinition,
    "SMSMessageDefinitionCreate": SMSMessageDefinitionCreate,
    "SMSRenderOptions": SMSRenderOptions,
    "SMSSendOptions": SMSSendOptions,
    "SMSSubscriptionParameters": SMSSubscriptionParameters,
    "SMSTransactional": SMSTransactional,
    "SMSUnsubscriptionParameters": SMSUnsubscriptionParameters,
    "Section": Section,
    "SegmentCreateQuery": SegmentCreateQuery,
    "SegmentCreateQueryResourceObject": SegmentCreateQueryResourceObject,
    "SegmentCreateQueryResourceObjectAttributes": SegmentCreateQueryResourceObjectAttributes,
    "SegmentDefinition": SegmentDefinition,
    "SegmentListResponseObjectResource": SegmentListResponseObjectResource,
    "SegmentListResponseObjectResourceAttributes": SegmentListResponseObjectResourceAttributes,
    "SegmentMemberResponseObjectResourceAttributes": SegmentMemberResponseObjectResourceAttributes,
    "SegmentMemberResponseObjectResourceExtended": SegmentMemberResponseObjectResourceExtended,
    "SegmentMemberResponseObjectResourceExtendedAttributes": SegmentMemberResponseObjectResourceExtendedAttributes,
    "SegmentPartialUpdateQuery": SegmentPartialUpdateQuery,
    "SegmentPartialUpdateQueryResourceObject": SegmentPartialUpdateQueryResourceObject,
    "SegmentPartialUpdateQueryResourceObjectAttributes": SegmentPartialUpdateQueryResourceObjectAttributes,
    "SegmentResponseObjectResource": SegmentResponseObjectResource,
    "SegmentRetrieveResponseObjectResourceAttributes": SegmentRetrieveResponseObjectResourceAttributes,
    "SegmentRetrieveResponseObjectResourceExtended": SegmentRetrieveResponseObjectResourceExtended,
    "SegmentRetrieveResponseObjectResourceExtendedAttributes": SegmentRetrieveResponseObjectResourceExtendedAttributes,
    "SegmentSeriesRequestDTO": SegmentSeriesRequestDTO,
    "SegmentSeriesRequestDTOResourceObject": SegmentSeriesRequestDTOResourceObject,
    "SegmentSeriesRequestDTOResourceObjectAttributes": SegmentSeriesRequestDTOResourceObjectAttributes,
    "SegmentTrigger": SegmentTrigger,
    "SegmentValuesRequestDTO": SegmentValuesRequestDTO,
    "SegmentValuesRequestDTOResourceObject": SegmentValuesRequestDTOResourceObject,
    "SegmentValuesRequestDTOResourceObjectAttributes": SegmentValuesRequestDTOResourceObjectAttributes,
    "SegmentsProfileMetricCondition": SegmentsProfileMetricCondition,
    "SendEmailAction": SendEmailAction,
    "SendEmailActionData": SendEmailActionData,
    "SendInternalAlertAction": SendInternalAlertAction,
    "SendInternalAlertActionData": SendInternalAlertActionData,
    "SendOptions": SendOptions,
    "SendPushNotificationAction": SendPushNotificationAction,
    "SendPushNotificationActionData": SendPushNotificationActionData,
    "SendSmsAction": SendSmsAction,
    "SendSmsActionData": SendSmsActionData,
    "SendTime": SendTime,
    "SendTimeSubObject": SendTimeSubObject,
    "SendWebhookAction": SendWebhookAction,
    "SendWebhookActionData": SendWebhookActionData,
    "SeriesData": SeriesData,
    "ServerBISSubscriptionCreateQuery": ServerBISSubscriptionCreateQuery,
    "ServerBISSubscriptionCreateQueryResourceObject": ServerBISSubscriptionCreateQueryResourceObject,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributes": ServerBISSubscriptionCreateQueryResourceObjectAttributes,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile": ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationships": ServerBISSubscriptionCreateQueryResourceObjectRelationships,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData,
    "SftpMethodFilter": SftpMethodFilter,
    "ShopifyIntegrationFilter": ShopifyIntegrationFilter,
    "ShopifyIntegrationMethodFilter": ShopifyIntegrationMethodFilter,
    "SinceFlowStartDateFilter": SinceFlowStartDateFilter,
    "SmartSendTimeStrategy": SmartSendTimeStrategy,
    "SocialBlock": SocialBlock,
    "SpacerBlock": SpacerBlock,
    "SpamComplaintMethodFilter": SpamComplaintMethodFilter,
    "SplitAction": SplitAction,
    "SplitBlock": SplitBlock,
    "SplitLinks": SplitLinks,
    "StaticCount": StaticCount,
    "StaticDateFilter": StaticDateFilter,
    "StaticDateRangeFilter": StaticDateRangeFilter,
    "StaticSendStrategy": StaticSendStrategy,
    "StaticTrackingParam": StaticTrackingParam,
    "StatusDateFilter": StatusDateFilter,
    "StreetAddress": StreetAddress,
    "StringArrayOperatorFilter": StringArrayOperatorFilter,
    "StringInArrayFilter": StringInArrayFilter,
    "StringOperatorFilter": StringOperatorFilter,
    "StringPhoneOperatorArrayFilter": StringPhoneOperatorArrayFilter,
    "SubscriptionChannels": SubscriptionChannels,
    "SubscriptionCreateJobCreateQuery": SubscriptionCreateJobCreateQuery,
    "SubscriptionCreateJobCreateQueryResourceObject": SubscriptionCreateJobCreateQueryResourceObject,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributes": SubscriptionCreateJobCreateQueryResourceObjectAttributes,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles": SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationships": SubscriptionCreateJobCreateQueryResourceObjectRelationships,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList": SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData": SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData,
    "SubscriptionDeleteJobCreateQuery": SubscriptionDeleteJobCreateQuery,
    "SubscriptionDeleteJobCreateQueryResourceObject": SubscriptionDeleteJobCreateQueryResourceObject,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributes": SubscriptionDeleteJobCreateQueryResourceObjectAttributes,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles": SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationships": SubscriptionDeleteJobCreateQueryResourceObjectRelationships,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData,
    "SubscriptionParameters": SubscriptionParameters,
    "Subscriptions": Subscriptions,
    "SuppressionCreateJobCreateQuery": SuppressionCreateJobCreateQuery,
    "SuppressionCreateJobCreateQueryResourceObject": SuppressionCreateJobCreateQueryResourceObject,
    "SuppressionCreateJobCreateQueryResourceObjectAttributes": SuppressionCreateJobCreateQueryResourceObjectAttributes,
    "SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles": SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SuppressionCreateJobCreateQueryResourceObjectRelationships": SuppressionCreateJobCreateQueryResourceObjectRelationships,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsList": SuppressionCreateJobCreateQueryResourceObjectRelationshipsList,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData": SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment": SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData": SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData,
    "SuppressionDeleteJobCreateQuery": SuppressionDeleteJobCreateQuery,
    "SuppressionDeleteJobCreateQueryResourceObject": SuppressionDeleteJobCreateQueryResourceObject,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributes": SuppressionDeleteJobCreateQueryResourceObjectAttributes,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles": SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationships": SuppressionDeleteJobCreateQueryResourceObjectRelationships,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData,
    "TableBlock": TableBlock,
    "TagCampaignOp": TagCampaignOp,
    "TagCampaignOpDataInner": TagCampaignOpDataInner,
    "TagCreateQuery": TagCreateQuery,
    "TagCreateQueryResourceObject": TagCreateQueryResourceObject,
    "TagCreateQueryResourceObjectRelationships": TagCreateQueryResourceObjectRelationships,
    "TagCreateQueryResourceObjectRelationshipsTagGroup": TagCreateQueryResourceObjectRelationshipsTagGroup,
    "TagCreateQueryResourceObjectRelationshipsTagGroupData": TagCreateQueryResourceObjectRelationshipsTagGroupData,
    "TagFlowOp": TagFlowOp,
    "TagFlowOpDataInner": TagFlowOpDataInner,
    "TagGroupCreateQuery": TagGroupCreateQuery,
    "TagGroupCreateQueryResourceObject": TagGroupCreateQueryResourceObject,
    "TagGroupCreateQueryResourceObjectAttributes": TagGroupCreateQueryResourceObjectAttributes,
    "TagGroupResponseObjectResource": TagGroupResponseObjectResource,
    "TagGroupResponseObjectResourceAttributes": TagGroupResponseObjectResourceAttributes,
    "TagGroupUpdateQuery": TagGroupUpdateQuery,
    "TagGroupUpdateQueryResourceObject": TagGroupUpdateQueryResourceObject,
    "TagGroupUpdateQueryResourceObjectAttributes": TagGroupUpdateQueryResourceObjectAttributes,
    "TagListOp": TagListOp,
    "TagListOpDataInner": TagListOpDataInner,
    "TagResponseObjectResource": TagResponseObjectResource,
    "TagResponseObjectResourceAttributes": TagResponseObjectResourceAttributes,
    "TagSegmentOp": TagSegmentOp,
    "TagSegmentOpDataInner": TagSegmentOpDataInner,
    "TagUpdateQuery": TagUpdateQuery,
    "TagUpdateQueryResourceObject": TagUpdateQueryResourceObject,
    "TargetDateAction": TargetDateAction,
    "TargetDateActionData": TargetDateActionData,
    "TemplateCloneQuery": TemplateCloneQuery,
    "TemplateCloneQueryResourceObject": TemplateCloneQueryResourceObject,
    "TemplateCloneQueryResourceObjectAttributes": TemplateCloneQueryResourceObjectAttributes,
    "TemplateCreateQuery": TemplateCreateQuery,
    "TemplateCreateQueryResourceObject": TemplateCreateQueryResourceObject,
    "TemplateCreateQueryResourceObjectAttributes": TemplateCreateQueryResourceObjectAttributes,
    "TemplateRenderQuery": TemplateRenderQuery,
    "TemplateRenderQueryResourceObject": TemplateRenderQueryResourceObject,
    "TemplateRenderQueryResourceObjectAttributes": TemplateRenderQueryResourceObjectAttributes,
    "TemplateResponseObjectResource": TemplateResponseObjectResource,
    "TemplateResponseObjectResourceAttributes": TemplateResponseObjectResourceAttributes,
    "TemplateUpdateQuery": TemplateUpdateQuery,
    "TemplateUpdateQueryResourceObject": TemplateUpdateQueryResourceObject,
    "TemplateUpdateQueryResourceObjectAttributes": TemplateUpdateQueryResourceObjectAttributes,
    "TextBlock": TextBlock,
    "TextBlockData": TextBlockData,
    "TextBlockStyles": TextBlockStyles,
    "ThrottledSendStrategy": ThrottledSendStrategy,
    "TimeDelayAction": TimeDelayAction,
    "TimeDelayActionData": TimeDelayActionData,
    "Timeframe": Timeframe,
    "TrackingParamDTO": TrackingParamDTO,
    "TrackingSettingPartialUpdateQuery": TrackingSettingPartialUpdateQuery,
    "TrackingSettingPartialUpdateQueryResourceObject": TrackingSettingPartialUpdateQueryResourceObject,
    "TrackingSettingPartialUpdateQueryResourceObjectAttributes": TrackingSettingPartialUpdateQueryResourceObjectAttributes,
    "TrackingSettingResponseObjectResource": TrackingSettingResponseObjectResource,
    "TrackingSettingResponseObjectResourceAttributes": TrackingSettingResponseObjectResourceAttributes,
    "TriggerBranchAction": TriggerBranchAction,
    "TriggerBranchActionData": TriggerBranchActionData,
    "UniversalContentCreateQuery": UniversalContentCreateQuery,
    "UniversalContentCreateQueryResourceObject": UniversalContentCreateQueryResourceObject,
    "UniversalContentCreateQueryResourceObjectAttributes": UniversalContentCreateQueryResourceObjectAttributes,
    "UniversalContentPartialUpdateQuery": UniversalContentPartialUpdateQuery,
    "UniversalContentPartialUpdateQueryResourceObject": UniversalContentPartialUpdateQueryResourceObject,
    "UniversalContentPartialUpdateQueryResourceObjectAttributes": UniversalContentPartialUpdateQueryResourceObjectAttributes,
    "UniversalContentResponseObjectResource": UniversalContentResponseObjectResource,
    "UniversalContentResponseObjectResourceAttributes": UniversalContentResponseObjectResourceAttributes,
    "UnsubscriptionChannels": UnsubscriptionChannels,
    "UnsubscriptionParameters": UnsubscriptionParameters,
    "UnsupportedBlock": UnsupportedBlock,
    "UnsupportedSendStrategy": UnsupportedSendStrategy,
    "UpdateProfileAction": UpdateProfileAction,
    "UpdateProfileActionData": UpdateProfileActionData,
    "UtmParam": UtmParam,
    "UtmParamInfo": UtmParamInfo,
    "ValuesData": ValuesData,
    "VideoBlock": VideoBlock,
    "WebFeedCreateQuery": WebFeedCreateQuery,
    "WebFeedCreateQueryResourceObject": WebFeedCreateQueryResourceObject,
    "WebFeedCreateQueryResourceObjectAttributes": WebFeedCreateQueryResourceObjectAttributes,
    "WebFeedPartialUpdateQuery": WebFeedPartialUpdateQuery,
    "WebFeedPartialUpdateQueryResourceObject": WebFeedPartialUpdateQueryResourceObject,
    "WebFeedPartialUpdateQueryResourceObjectAttributes": WebFeedPartialUpdateQueryResourceObjectAttributes,
    "WebFeedResponseObjectResource": WebFeedResponseObjectResource,
    "WebFeedResponseObjectResourceAttributes": WebFeedResponseObjectResourceAttributes,
    "WebhookCreateQuery": WebhookCreateQuery,
    "WebhookCreateQueryResourceObject": WebhookCreateQueryResourceObject,
    "WebhookCreateQueryResourceObjectAttributes": WebhookCreateQueryResourceObjectAttributes,
    "WebhookCreateQueryResourceObjectRelationships": WebhookCreateQueryResourceObjectRelationships,
    "WebhookCreateQueryResourceObjectRelationshipsWebhookTopics": WebhookCreateQueryResourceObjectRelationshipsWebhookTopics,
    "WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner": WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner,
    "WebhookPartialUpdateQuery": WebhookPartialUpdateQuery,
    "WebhookPartialUpdateQueryResourceObject": WebhookPartialUpdateQueryResourceObject,
    "WebhookPartialUpdateQueryResourceObjectAttributes": WebhookPartialUpdateQueryResourceObjectAttributes,
    "WebhookPartialUpdateQueryResourceObjectRelationships": WebhookPartialUpdateQueryResourceObjectRelationships,
    "WebhookResponseObjectResource": WebhookResponseObjectResource,
    "WebhookResponseObjectResourceAttributes": WebhookResponseObjectResourceAttributes,
    "WebhookTopicResponseObjectResource": WebhookTopicResponseObjectResource,
}

const oneOfMap: {[index: string]: any} = {
    "GetCampaignMessageResponseCompoundDocumentIncludedInner": GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetCampaignResponseCollectionCompoundDocumentIncludedInner": GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetEventResponseCollectionCompoundDocumentIncludedInner": GetEventResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetFlowActionResponseCompoundDocumentIncludedInner": GetFlowActionResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowMessageResponseCompoundDocumentIncludedInner": GetFlowMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowResponseCollectionCompoundDocumentIncludedInner": GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetListListResponseCollectionCompoundDocumentIncludedInner": GetListListResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetMappedMetricResponseCollectionCompoundDocumentIncludedInner": GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetProfileResponseCompoundDocumentIncludedInner": GetProfileResponseCompoundDocumentIncludedInnerHelper,
}

const oneOfMapNoDiscriminator: {[index: string]: Array<any>} = {
    "AbTestActionDataMainAction": [
            "SendEmailAction",
            "SendSmsAction",
    ],
    "BounceDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "IsSetExistenceFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "CampaignCreateQueryResourceObjectAttributesSendOptions": [
            "EmailSendOptions",
            "PushSendOptions",
            "SMSSendOptions",
    ],
    "CampaignCreateQueryResourceObjectAttributesSendStrategy": [
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
    ],
    "CampaignMessageCreateQueryResourceObjectAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinitionCreate",
            "MobilePushMessageStandardDefinitionCreate",
            "SMSMessageDefinitionCreate",
    ],
    "CampaignMessagePartialUpdateQueryResourceObjectAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinitionUpdate",
            "MobilePushMessageStandardDefinitionUpdate",
            "SMSMessageDefinitionCreate",
    ],
    "CampaignMessageResponseObjectResourceAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinition",
            "MobilePushMessageStandardDefinition",
            "SMSMessageDefinition",
    ],
    "CampaignPartialUpdateQueryResourceObjectAttributesSendStrategy": [
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
    ],
    "CampaignResponseObjectResourceAttributesSendOptions": [
            "EmailSendOptions",
            "PushSendOptions",
            "SMSSendOptions",
    ],
    "CampaignResponseObjectResourceAttributesSendStrategy": [
            "ABTestSendStrategy",
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
            "UnsupportedSendStrategy",
    ],
    "CampaignResponseObjectResourceAttributesTrackingOptions": [
            "CampaignsEmailTrackingOptions",
            "CampaignsSMSTrackingOptions",
    ],
    "CampaignValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "CampaignsEmailTrackingOptionsCustomTrackingParamsInner": [
            "DynamicTrackingParam",
            "StaticTrackingParam",
    ],
    "ConditionGroupConditionsInner": [
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRegionCondition",
            "SegmentsProfileMetricCondition",
    ],
    "ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "CustomMetricConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorFilter",
            "ListContainsOperatorFilter",
            "ListRegexOperatorContainsFilter",
            "ListSubstringFilter",
            "NumericOperatorFilter",
            "StringInArrayFilter",
            "StringOperatorFilter",
    ],
    "FlowActionResponseObjectResourceAttributesBadgeOptions": [
            "CampaignMessageIncrement",
            "CampaignMessageProperty",
            "CampaignMessageStaticCount",
    ],
    "FlowActionResponseObjectResourceAttributesTrackingOptions": [
            "FlowEmailTrackingOptions",
            "FlowsSMSTrackingOptions",
    ],
    "FlowDefinitionActionsInner": [
            "AbTestAction",
            "BackInStockDelayAction",
            "BranchAction",
            "CodeAction",
            "ConditionalBranchAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SplitAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowDefinitionProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfileNotInFlowCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowDefinitionTriggersInner": [
            "ListTrigger",
            "LowInventoryTrigger",
            "MetricTrigger",
            "PriceDropTrigger",
            "ProfilePropertyDateTrigger",
            "SegmentTrigger",
    ],
    "FlowEmailAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedEmailMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowMessageResponseObjectResourceAttributesContent": [
            "EmailMessageContent",
            "MobilePushMessageContent",
            "SMSMessageContent",
    ],
    "FlowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedPushMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowPushNotificationBadgeOptions": [
            "Increment",
            "Property",
            "StaticCount",
    ],
    "FlowSmsAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedSmsMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "SinceFlowStartDateFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "HasEmailMarketingConsentConsentStatus": [
            "HasEmailMarketing",
            "HasEmailMarketingNeverSubscribed",
            "HasEmailMarketingSubscribed",
    ],
    "HasEmailMarketingSubscribedFiltersInner": [
            "APIMethodFilter",
            "BackInStockMethodFilter",
            "CustomSourceFilter",
            "DoubleOptinFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddMethodFilter",
            "ManualImportMethodFilter",
            "PreferencePageFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "HasSMSMarketingSubscribedFiltersInner": [
            "CheckoutMethodFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddMethodFilter",
            "ManualImportMethodFilter",
            "PreferencePageMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "MetricPropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorFilter",
            "ListContainsOperatorFilter",
            "ListLengthFilter",
            "NumericOperatorFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorFilter",
            "StringOperatorFilter",
    ],
    "MobilePushBadgeBadgeOptions": [
            "CampaignMessageIncrement",
            "CampaignMessageProperty",
            "CampaignMessageStaticCount",
    ],
    "MobilePushOptionsBadge": [
            "MobilePushBadge",
            "MobilePushNoBadge",
    ],
    "MobilePushOptionsOnOpen": [
            "PushOnOpenApp",
            "PushOnOpenDeepLink",
    ],
    "NoEmailMarketingConsentConsentStatus": [
            "NoEmailMarketing",
            "NoEmailMarketingNeverSubscribed",
            "NoEmailMarketingSubscribed",
            "NoEmailMarketingUnsubscribed",
    ],
    "NoEmailMarketingFiltersInner": [
            "BounceDateFilter",
            "InvalidEmailDateFilter",
            "ManualSuppressionDateFilter",
    ],
    "NoEmailMarketingUnsubscribedFiltersInner": [
            "APIMethodFilter",
            "ConstantContactIntegrationMethodFilter",
            "InboundMessageMethodFilter",
            "MailboxProviderMethodFilter",
            "ManualRemoveMethodFilter",
            "PreferencePageMethodFilter",
            "SpamComplaintMethodFilter",
            "StatusDateFilter",
    ],
    "NoSMSMarketingConsentConsentStatus": [
            "NoSMSMarketing",
            "NoSMSMarketingNeverSubscribed",
            "NoSMSMarketingUnsubscribed",
    ],
    "NoSMSMarketingUnsubscribedFiltersInner": [
            "BulkRemoveMethodFilter",
            "CarrierDeactivationMethodFilter",
            "CheckoutMethodFilter",
            "FailedAgeGateMethodFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddMethodFilter",
            "ManualImportMethodFilter",
            "ManualRemoveMethodFilter",
            "MessageBlockedMethodFilter",
            "PreferencePageMethodFilter",
            "ProvidedLandlineMethodFilter",
            "ProvidedNoAgeMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "PostCampaignMessageResponseDataAttributesContent": [
            "EmailContentSubObject",
            "SMSContentSubObject",
    ],
    "ProfileHasGroupMembershipConditionTimeframeFilter": [
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "ProfileMarketingConsentConditionConsent": [
            "HasEmailMarketingConsent",
            "HasPushMarketingConsent",
            "HasSMSMarketingConsent",
            "NoEmailMarketingConsent",
            "NoPushMarketingConsent",
            "NoSMSMarketingConsent",
    ],
    "ProfileMetricPropertyFilterFilter": [
            "BooleanFilter",
            "ExistenceOperatorFilter",
            "ListLengthFilter",
            "ListSetFilter",
            "ListSubstringFilter",
            "NumericOperatorFilter",
            "StringArrayOperatorFilter",
            "StringOperatorFilter",
    ],
    "ProfileNotInFlowConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "InTheLastBaseRelativeDateFilter",
    ],
    "ProfilePostalCodeDistanceConditionFilter": [
            "GreaterThanPositiveNumericFilter",
            "LessThanPositiveNumericFilter",
    ],
    "ProfilePredictiveAnalyticsStringFilterOperator": [
            "EqualsEnum",
            "NotEqualsEnum",
    ],
    "ProfilePropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorFilter",
            "ListContainsOperatorFilter",
            "ListLengthFilter",
            "NumericOperatorFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorFilter",
            "StringOperatorFilter",
            "StringPhoneOperatorArrayFilter",
    ],
    "ReviewPatchQueryResourceObjectAttributesStatus": [
            "ReviewStatusFeatured",
            "ReviewStatusPending",
            "ReviewStatusPublished",
            "ReviewStatusRejected",
            "ReviewStatusUnpublished",
    ],
    "ReviewResponseDTOObjectResourceAttributesStatus": [
            "ReviewStatusFeatured",
            "ReviewStatusPending",
            "ReviewStatusPublished",
            "ReviewStatusRejected",
            "ReviewStatusUnpublished",
    ],
    "ReviewStatusRejectedRejectionReason": [
            "RejectReasonFake",
            "RejectReasonMisleading",
            "RejectReasonOther",
            "RejectReasonPrivateInformation",
            "RejectReasonProfanity",
            "RejectReasonUnrelated",
    ],
    "SegmentValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "SegmentsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "StaticSendStrategyOptions": [
            "LocalStaticSend",
            "NonLocalStaticSend",
    ],
    "StatusDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "TrackingParamDTOCampaign": [
            "CampaignTrackingSettingDynamicParam",
            "CampaignTrackingSettingStaticParam",
    ],
    "TrackingParamDTOFlow": [
            "FlowTrackingSettingDynamicParam",
            "FlowTrackingSettingStaticParam",
    ],
    "UniversalContentCreateQueryResourceObjectAttributesDefinition": [
            "ButtonBlock",
            "DropShadowBlock",
            "HTMLBlock",
            "HorizontalRuleBlock",
            "ImageBlock",
            "SpacerBlock",
            "TextBlock",
    ],
    "UniversalContentPartialUpdateQueryResourceObjectAttributesDefinition": [
            "ButtonBlock",
            "DropShadowBlock",
            "HTMLBlock",
            "HorizontalRuleBlock",
            "ImageBlock",
            "SpacerBlock",
            "TextBlock",
    ],
    "UniversalContentResponseObjectResourceAttributesDefinition": [
            "ButtonBlock",
            "DropShadowBlock",
            "HTMLBlock",
            "HeaderBlock",
            "HorizontalRuleBlock",
            "ImageBlock",
            "ProductBlock",
            "ReviewBlock",
            "Section",
            "SocialBlock",
            "SpacerBlock",
            "SplitBlock",
            "TableBlock",
            "TextBlock",
            "UnsupportedBlock",
            "VideoBlock",
    ],
    "UpdateProfileActionDataProfileOperationsInner": [
            "ProfileOperationDelete",
            "ProfileOperationUpdateOrCreateBoolean",
            "ProfileOperationUpdateOrCreateDate",
            "ProfileOperationUpdateOrCreateList",
            "ProfileOperationUpdateOrCreateNumeric",
            "ProfileOperationUpdateOrCreateString",
    ],
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string, serializer: boolean) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            const discriminatorHelper = oneOfMap[expectedType]
            // Check the discriminator
            if (!discriminatorHelper || !discriminatorHelper.discriminator) {
                // the type does not have a discriminator.
              if (oneOfMapNoDiscriminator[expectedType]) {
                for (const index in oneOfMapNoDiscriminator[expectedType]) {
                  if (serializer) {
                    if (ObjectSerializer.serializerValidateType(data, typeMap[oneOfMapNoDiscriminator[expectedType][index]])) {
                      return oneOfMapNoDiscriminator[expectedType][index];
                    }
                  } else {
                    if (ObjectSerializer.deserializerValidateType(data, typeMap[oneOfMapNoDiscriminator[expectedType][index]])) {
                      return oneOfMapNoDiscriminator[expectedType][index];
                    }
                  }

                }
              }
              return expectedType; // discriminator was not present (or an empty string)
            } else {
                let discriminatorProperty = discriminatorHelper.discriminator;
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(discriminatorHelper.mapping[discriminatorType]){
                        return discriminatorHelper.mapping[discriminatorType]; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static deserializerValidateType(data: any, potentialType: any): boolean {
      for (const index in potentialType.getAttributeTypeMap()) {
        const attribute = potentialType.getAttributeTypeMap()[index];
        if (!data.hasOwnProperty(attribute.baseName)) {
          return false;
        }
        if (enumsMap[attribute.type]) {
          if (!Object.values(enumsMap[attribute.type]).includes(data[attribute.baseName])) {
            return false;
          }
        }
      }
      return true;
    }
    public static serializerValidateType(data: Object, potentialType: any): boolean {
      const properties = Object.getOwnPropertyNames(data)
      for (const index in properties) {
        const property = properties[index]
        const attributeType = potentialType.getAttributeTypeMap().find((attribute) => attribute.name === property)
        if(!attributeType) {
          return false
        }
        if (typeof data[property] === "object" && data[property] != null && typeMap[attributeType.type] != null) {
            // for objects, recursively validate attributes
            if (!this.serializerValidateType(data[property], typeMap[attributeType.type])) {
                return false;
            }
        } else if (typeof data[property] === "string" && enumsMap[attributeType.type]) {
            // for enums, check that the value is in the enum
            if (!Object.values(enumsMap[attributeType.type]).includes(data[property])) {
                return false;
            }
        }
      }
      return true
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data instanceof Date ? data.toISOString() : data;
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type] && !oneOfMapNoDiscriminator[type]) { // in case we dont know the type
              return data
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type, true);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type, false);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

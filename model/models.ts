import { AxiosRequestConfig } from 'axios';
import {ReadStream} from "fs";

export * from './aBTestSendStrategy';
export * from './aPIJobErrorPayload';
export * from './aPIMethodFilter';
export * from './aPISchemaProperty';
export * from './abTestAction';
export * from './abTestActionData';
export * from './abTestActionDataCurrentExperiment';
export * from './abTestActionDataMainAction';
export * from './accountEnum';
export * from './accountResponseObjectResource';
export * from './accountResponseObjectResourceAttributes';
export * from './actionOutputCondition';
export * from './actionOutputConditionFilter';
export * from './actionOutputSplitAction';
export * from './actionOutputSplitActionData';
export * from './actionOutputSplitActionDataActionOutputFilter';
export * from './actionOutputSplitActionDataActionOutputFilterConditionGroupsInner';
export * from './additionalField';
export * from './afterCloseTimeout';
export * from './afterCloseTimeoutProperties';
export * from './ageGate';
export * from './ageGateProperties';
export * from './ageGateStyles';
export * from './alltimeDateFilter';
export * from './anniversaryDateFilter';
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
export * from './backInStock';
export * from './backInStockDelayAction';
export * from './backInStockDynamicButtonBorderStyles';
export * from './backInStockDynamicButtonData';
export * from './backInStockDynamicButtonDropShadowStyles';
export * from './backInStockDynamicButtonStyles';
export * from './backInStockDynamicButtonTextStyles';
export * from './backInStockEmailConsentCheckbox';
export * from './backInStockEmailConsentCheckboxProperties';
export * from './backInStockEmailConsentCheckboxStyles';
export * from './backInStockMethodFilter';
export * from './backInStockProperties';
export * from './backInStockSubscriptionEnum';
export * from './backgroundImage';
export * from './backgroundImageStyles';
export * from './bannerStyles';
export * from './baseEventCreateQueryBulkEntryResourceObject';
export * from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
export * from './baseStyle';
export * from './baseStyleProperties';
export * from './baseStyleStyles';
export * from './blockDisplayOptions';
export * from './body';
export * from './bodyProperties';
export * from './bodyStyles';
export * from './booleanBranchLinks';
export * from './booleanFilter';
export * from './borderStyle';
export * from './bounceDateFilter';
export * from './bounceDateFilterFilter';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResource';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationships';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner';
export * from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
export * from './bulkRemoveMethodFilter';
export * from './button';
export * from './buttonAction';
export * from './buttonBlockData';
export * from './buttonBlockProperties';
export * from './buttonBlockStyles';
export * from './buttonBlockV0';
export * from './buttonBlockV1';
export * from './buttonDropShadowStyles';
export * from './buttonProperties';
export * from './buttonStyles';
export * from './buttonStylesHeight';
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
export * from './campaignMessageResponseObjectResourceRelationships';
export * from './campaignMessageResponseObjectResourceRelationshipsCampaign';
export * from './campaignMessageResponseObjectResourceRelationshipsCampaignData';
export * from './campaignMessageResponseObjectResourceRelationshipsImage';
export * from './campaignMessageResponseObjectResourceRelationshipsImageData';
export * from './campaignMessageResponseObjectResourceRelationshipsTemplate';
export * from './campaignMessageResponseObjectResourceRelationshipsTemplateData';
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
export * from './campaignResponseObjectResourceRelationships';
export * from './campaignResponseObjectResourceRelationshipsCampaignMessages';
export * from './campaignResponseObjectResourceRelationshipsCampaignMessagesDataInner';
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
export * from './carrierDeactivationMethodFilter';
export * from './cartContent';
export * from './cartContentProperties';
export * from './cartItemCount';
export * from './cartItemCountProperties';
export * from './cartProduct';
export * from './cartProductProperties';
export * from './cartValue';
export * from './cartValueProperties';
export * from './catalogCategoryBulkCreateJobEnum';
export * from './catalogCategoryBulkDeleteJobEnum';
export * from './catalogCategoryBulkUpdateJobEnum';
export * from './catalogCategoryCreateJobCreateQuery';
export * from './catalogCategoryCreateJobCreateQueryResourceObject';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryCreateJobResponseObjectResource';
export * from './catalogCategoryCreateJobResponseObjectResourceRelationships';
export * from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategories';
export * from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
export * from './catalogCategoryDeleteJobResponseObjectResourceRelationships';
export * from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories';
export * from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner';
export * from './catalogCategoryDeleteQueryResourceObject';
export * from './catalogCategoryEnum';
export * from './catalogCategoryItemOp';
export * from './catalogCategoryItemOpDataInner';
export * from './catalogCategoryResponseObjectResource';
export * from './catalogCategoryResponseObjectResourceAttributes';
export * from './catalogCategoryResponseObjectResourceRelationships';
export * from './catalogCategoryResponseObjectResourceRelationshipsItems';
export * from './catalogCategoryUpdateJobCreateQuery';
export * from './catalogCategoryUpdateJobCreateQueryResourceObject';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryUpdateJobResponseObjectResource';
export * from './catalogCategoryUpdateJobResponseObjectResourceRelationships';
export * from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories';
export * from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
export * from './catalogItemCreateJobResponseObjectResourceRelationships';
export * from './catalogItemCreateJobResponseObjectResourceRelationshipsItems';
export * from './catalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner';
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
export * from './catalogItemDeleteJobResponseObjectResourceRelationships';
export * from './catalogItemDeleteJobResponseObjectResourceRelationshipsItems';
export * from './catalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner';
export * from './catalogItemDeleteQueryResourceObject';
export * from './catalogItemEnum';
export * from './catalogItemResponseObjectResource';
export * from './catalogItemResponseObjectResourceAttributes';
export * from './catalogItemResponseObjectResourceRelationships';
export * from './catalogItemResponseObjectResourceRelationshipsVariants';
export * from './catalogItemResponseObjectResourceRelationshipsVariantsDataInner';
export * from './catalogItemUpdateJobCreateQuery';
export * from './catalogItemUpdateJobCreateQueryResourceObject';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemUpdateJobResponseObjectResource';
export * from './catalogItemUpdateJobResponseObjectResourceRelationships';
export * from './catalogItemUpdateJobResponseObjectResourceRelationshipsItems';
export * from './catalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner';
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
export * from './catalogVariantCreateJobResponseObjectResourceRelationships';
export * from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariants';
export * from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner';
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
export * from './catalogVariantDeleteJobResponseObjectResourceRelationships';
export * from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariants';
export * from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner';
export * from './catalogVariantDeleteQueryResourceObject';
export * from './catalogVariantEnum';
export * from './catalogVariantResponseObjectResource';
export * from './catalogVariantResponseObjectResourceAttributes';
export * from './catalogVariantResponseObjectResourceRelationships';
export * from './catalogVariantResponseObjectResourceRelationshipsItem';
export * from './catalogVariantResponseObjectResourceRelationshipsItemData';
export * from './catalogVariantUpdateJobCreateQuery';
export * from './catalogVariantUpdateJobCreateQueryResourceObject';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantUpdateJobResponseObjectResource';
export * from './catalogVariantUpdateJobResponseObjectResourceRelationships';
export * from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariants';
export * from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner';
export * from './catalogVariantUpdateQuery';
export * from './catalogVariantUpdateQueryResourceObject';
export * from './catalogVariantUpdateQueryResourceObjectAttributes';
export * from './channel';
export * from './channelProperties';
export * from './channelSettings';
export * from './checkboxes';
export * from './checkboxesProperties';
export * from './checkboxesStyles';
export * from './checkoutMethodFilter';
export * from './close';
export * from './closeButtonStyle';
export * from './closeProperties';
export * from './codeAction';
export * from './collectionLinks';
export * from './columnStyles';
export * from './columnV0';
export * from './columnV1';
export * from './columnV1BlocksInner';
export * from './conditionGroup';
export * from './conditionGroupConditionsInner';
export * from './conditionalBranchAction';
export * from './conditionalBranchActionData';
export * from './conditionalBranchActionDataProfileFilter';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
export * from './constantContactIntegrationFilter';
export * from './constantContactIntegrationMethodFilter';
export * from './constantPropertyMapping';
export * from './constantPropertyMappingValue';
export * from './contactInformation';
export * from './contentExperimentAction';
export * from './contentExperimentActionData';
export * from './contentExperimentActionDataCurrentExperiment';
export * from './contentExperimentActionDataMainAction';
export * from './contentRepeatV0';
export * from './contentRepeatV1';
export * from './conversationEnum';
export * from './conversationMessageCreateQuery';
export * from './conversationMessageCreateQueryResourceObject';
export * from './conversationMessageCreateQueryResourceObjectAttributes';
export * from './conversationMessageCreateQueryResourceObjectRelationships';
export * from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
export * from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
export * from './conversationMessageEnum';
export * from './conversationResponseObjectResource';
export * from './conversationResponseObjectResourceAttributes';
export * from './conversationResponseObjectResourceRelationships';
export * from './conversationResponseObjectResourceRelationshipsProfile';
export * from './countdownDelayAction';
export * from './countdownDelayActionData';
export * from './countdownTimer';
export * from './countdownTimerProperties';
export * from './countdownTimerPropertiesConfiguration';
export * from './countdownTimerStyles';
export * from './coupon';
export * from './couponBlockData';
export * from './couponBlockProperties';
export * from './couponBlockStyles';
export * from './couponBlockV0';
export * from './couponBlockV0Data';
export * from './couponBlockV1';
export * from './couponCodeBulkCreateJobEnum';
export * from './couponCodeCreateJobCreateQuery';
export * from './couponCodeCreateJobCreateQueryResourceObject';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
export * from './couponCodeCreateJobResponseObjectResource';
export * from './couponCodeCreateJobResponseObjectResourceAttributes';
export * from './couponCodeCreateJobResponseObjectResourceRelationships';
export * from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes';
export * from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner';
export * from './couponCodeCreateQuery';
export * from './couponCodeCreateQueryResourceObject';
export * from './couponCodeCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateQueryResourceObjectRelationships';
export * from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
export * from './couponCodeEnum';
export * from './couponCodeResponseObjectResource';
export * from './couponCodeResponseObjectResourceAttributes';
export * from './couponCodeResponseObjectResourceRelationships';
export * from './couponCodeResponseObjectResourceRelationshipsCoupon';
export * from './couponCodeResponseObjectResourceRelationshipsCouponData';
export * from './couponCodeResponseObjectResourceRelationshipsProfile';
export * from './couponCodeResponseObjectResourceRelationshipsProfileData';
export * from './couponCodeUpdateQuery';
export * from './couponCodeUpdateQueryResourceObject';
export * from './couponCodeUpdateQueryResourceObjectAttributes';
export * from './couponCreateQuery';
export * from './couponCreateQueryResourceObject';
export * from './couponEnum';
export * from './couponProperties';
export * from './couponPropertiesCoupon';
export * from './couponResponseObjectResource';
export * from './couponResponseObjectResourceAttributes';
export * from './couponStyles';
export * from './couponUpdateQuery';
export * from './couponUpdateQueryResourceObject';
export * from './couponUpdateQueryResourceObjectAttributes';
export * from './customCss';
export * from './customHTML';
export * from './customHTMLProperties';
export * from './customJavascript';
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
export * from './customMetricResponseObjectResourceRelationships';
export * from './customMetricResponseObjectResourceRelationshipsMetrics';
export * from './customMetricResponseObjectResourceRelationshipsMetricsDataInner';
export * from './customObjectDateTrigger';
export * from './customObjectPropertyCondition';
export * from './customObjectRelationshipSource';
export * from './customObjectTriggerCondition';
export * from './customObjectTriggerConditionFilter';
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
export * from './dataSourceRecordCreateJobCreateQuery';
export * from './dataSourceRecordCreateJobCreateQueryResourceObject';
export * from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
export * from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
export * from './dataSourceRecordCreateJobEnum';
export * from './dataSourceRecordEnum';
export * from './dataSourceRecordResourceObject';
export * from './dataSourceRecordResourceObjectAttributes';
export * from './dataSourceResponseObjectResource';
export * from './dataSourceResponseObjectResourceAttributes';
export * from './dataWarehouseImportMethodFilter';
export * from './dateProperties';
export * from './dateStyles';
export * from './delay';
export * from './delayProperties';
export * from './device';
export * from './deviceMetadata';
export * from './deviceProperties';
export * from './displayOptions';
export * from './doubleOptinFilter';
export * from './dropShadow';
export * from './dropShadowBlockData';
export * from './dropShadowBlockStyles';
export * from './dropShadowBlockV0';
export * from './dropShadowBlockV1';
export * from './dropdown';
export * from './dropdownProperties';
export * from './dropdownStyles';
export * from './dynamicButton';
export * from './dynamicImageBlockProperties';
export * from './dynamicProductBlockProperties';
export * from './dynamicReviewBlockProperties';
export * from './dynamicTableBlockProperties';
export * from './dynamicTrackingParam';
export * from './effectiveDateFilter';
export * from './email';
export * from './emailChannel';
export * from './emailContent';
export * from './emailContentSubObject';
export * from './emailMarketing';
export * from './emailMarketingListSuppression';
export * from './emailMarketingSuppression';
export * from './emailMessageDefinition';
export * from './emailProperties';
export * from './emailSendOptions';
export * from './emailStyles';
export * from './emailSubscriptionParameters';
export * from './emailUnsubscriptionParameters';
export * from './embeddedObjectSchemaResourceObject';
export * from './embeddedObjectSchemaResourceObjectAttributes';
export * from './embeddedObjectSchemaResourceObjectAttributesSourceMapping';
export * from './encodedFormResponseObjectResource';
export * from './encodedFormResponseObjectResourceAttributes';
export * from './equalsStringFilter';
export * from './errorMessages';
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
export * from './eventResponseObjectResourceRelationships';
export * from './eventResponseObjectResourceRelationshipsAttributions';
export * from './eventResponseObjectResourceRelationshipsAttributionsDataInner';
export * from './eventResponseObjectResourceRelationshipsMetric';
export * from './eventResponseObjectResourceRelationshipsMetricData';
export * from './eventResponseObjectResourceRelationshipsProfile';
export * from './eventResponseObjectResourceRelationshipsProfileData';
export * from './eventsBulkCreateJob';
export * from './eventsBulkCreateJobResourceObject';
export * from './eventsBulkCreateJobResourceObjectAttributes';
export * from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
export * from './eventsBulkCreateQueryResourceObject';
export * from './eventsBulkCreateQueryResourceObjectAttributes';
export * from './eventsBulkCreateQueryResourceObjectAttributesEvents';
export * from './eventsBulkCreateQueryResourceObjectAttributesProfile';
export * from './existenceOperatorExistenceFilter';
export * from './exitIntent';
export * from './explicitlyReachable';
export * from './explicitlyReachableFiltersInner';
export * from './explicitlyUnreachable';
export * from './failedAgeGateMethodFilter';
export * from './fixedTimerConfiguration';
export * from './flowActionEncodedResponseObjectResource';
export * from './flowActionEncodedResponseObjectResourceAttributes';
export * from './flowActionEncodedResponseObjectResourceAttributesDefinition';
export * from './flowActionEncodedResponseObjectResourceRelationships';
export * from './flowActionEncodedResponseObjectResourceRelationshipsFlow';
export * from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessages';
export * from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner';
export * from './flowActionEnum';
export * from './flowActionUpdateQuery';
export * from './flowActionUpdateQueryResourceObject';
export * from './flowActionUpdateQueryResourceObjectAttributes';
export * from './flowActionUpdateQueryResourceObjectAttributesDefinition';
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
export * from './flowEnum';
export * from './flowInternalAlert';
export * from './flowMessageEncodedResponseObjectResource';
export * from './flowMessageEncodedResponseObjectResourceAttributes';
export * from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
export * from './flowMessageEncodedResponseObjectResourceRelationships';
export * from './flowMessageEncodedResponseObjectResourceRelationshipsFlowAction';
export * from './flowMessageEncodedResponseObjectResourceRelationshipsTemplate';
export * from './flowMessageEncodedResponseObjectResourceRelationshipsTemplateData';
export * from './flowMessageEnum';
export * from './flowPushNotification';
export * from './flowPushNotificationBadgeOptions';
export * from './flowResponseObjectResource';
export * from './flowResponseObjectResourceAttributes';
export * from './flowResponseObjectResourceRelationships';
export * from './flowResponseObjectResourceRelationshipsFlowActions';
export * from './flowResponseObjectResourceRelationshipsFlowActionsDataInner';
export * from './flowResponseObjectResourceRelationshipsTags';
export * from './flowResponseObjectResourceRelationshipsTagsDataInner';
export * from './flowSeriesReportEnum';
export * from './flowSeriesRequestDTO';
export * from './flowSeriesRequestDTOResourceObject';
export * from './flowSeriesRequestDTOResourceObjectAttributes';
export * from './flowSms';
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
export * from './flowWhatsApp';
export * from './flowsProfileMetricCondition';
export * from './flowsProfileMetricConditionTimeframeFilter';
export * from './formCreateQuery';
export * from './formCreateQueryResourceObject';
export * from './formCreateQueryResourceObjectAttributes';
export * from './formDefinition';
export * from './formEnum';
export * from './formMethodFilter';
export * from './formResponseObjectResource';
export * from './formResponseObjectResourceAttributes';
export * from './formResponseObjectResourceRelationships';
export * from './formResponseObjectResourceRelationshipsFormVersions';
export * from './formResponseObjectResourceRelationshipsFormVersionsDataInner';
export * from './formSeriesReportEnum';
export * from './formSeriesRequestDTO';
export * from './formSeriesRequestDTOResourceObject';
export * from './formSeriesRequestDTOResourceObjectAttributes';
export * from './formSubscribeFilter';
export * from './formValuesReportEnum';
export * from './formValuesRequestDTO';
export * from './formValuesRequestDTOResourceObject';
export * from './formValuesRequestDTOResourceObjectAttributes';
export * from './formVersionABTest';
export * from './formVersionEnum';
export * from './formVersionResponseObjectResource';
export * from './formVersionResponseObjectResourceAttributes';
export * from './formVersionResponseObjectResourceRelationships';
export * from './formVersionResponseObjectResourceRelationshipsForm';
export * from './formVersionResponseObjectResourceRelationshipsFormData';
export * from './getAccountResponse';
export * from './getAccountResponseCollection';
export * from './getAccounts4XXResponse';
export * from './getAccounts4XXResponseErrorsInner';
export * from './getAccounts4XXResponseErrorsInnerSource';
export * from './getBulkProfileSuppressionsCreateJobResponse';
export * from './getBulkProfileSuppressionsCreateJobResponseCollection';
export * from './getBulkProfileSuppressionsRemoveJobResponse';
export * from './getBulkProfileSuppressionsRemoveJobResponseCollection';
export * from './getCampaignMessageCampaignRelationshipResponse';
export * from './getCampaignMessageCampaignRelationshipResponseData';
export * from './getCampaignMessageImageRelationshipResponse';
export * from './getCampaignMessageImageRelationshipResponseData';
export * from './getCampaignMessageResponseCollectionCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocumentIncludedInner';
export * from './getCampaignMessageTemplateRelationshipResponse';
export * from './getCampaignMessagesRelationshipsResponseCollection';
export * from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
export * from './getCampaignRecipientEstimationJobResponse';
export * from './getCampaignRecipientEstimationResponse';
export * from './getCampaignResponse';
export * from './getCampaignResponseCollectionCompoundDocument';
export * from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
export * from './getCampaignResponseCompoundDocument';
export * from './getCampaignSendJobResponse';
export * from './getCampaignTagsRelationshipsResponseCollection';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryCreateJobResponseCompoundDocument';
export * from './getCatalogCategoryDeleteJobResponse';
export * from './getCatalogCategoryDeleteJobResponseCollection';
export * from './getCatalogCategoryItemsRelationshipsResponseCollection';
export * from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
export * from './getCatalogCategoryResponse';
export * from './getCatalogCategoryResponseCollection';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryUpdateJobResponseCompoundDocument';
export * from './getCatalogItemCategoriesRelationshipsResponseCollection';
export * from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemCreateJobResponseCompoundDocument';
export * from './getCatalogItemDeleteJobResponse';
export * from './getCatalogItemDeleteJobResponseCollection';
export * from './getCatalogItemResponseCollectionCompoundDocument';
export * from './getCatalogItemResponseCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCompoundDocument';
export * from './getCatalogItemVariantsRelationshipsResponseCollection';
export * from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantCreateJobResponseCompoundDocument';
export * from './getCatalogVariantDeleteJobResponse';
export * from './getCatalogVariantDeleteJobResponseCollection';
export * from './getCatalogVariantResponse';
export * from './getCatalogVariantResponseCollection';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantUpdateJobResponseCompoundDocument';
export * from './getConversationResponse';
export * from './getConversationResponseCollection';
export * from './getCouponCodeCouponRelationshipResponse';
export * from './getCouponCodeCouponRelationshipResponseData';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
export * from './getCouponCodeCreateJobResponseCompoundDocument';
export * from './getCouponCodeResponseCollection';
export * from './getCouponCodeResponseCollectionCompoundDocument';
export * from './getCouponCodeResponseCompoundDocument';
export * from './getCouponCodesRelationshipsResponseCollection';
export * from './getCouponCodesRelationshipsResponseCollectionDataInner';
export * from './getCouponResponse';
export * from './getCouponResponseCollection';
export * from './getCustomMetricMetricsRelationshipsResponseCollection';
export * from './getCustomMetricResponse';
export * from './getCustomMetricResponseCollectionCompoundDocument';
export * from './getCustomMetricResponseCompoundDocument';
export * from './getDataSourceResponse';
export * from './getDataSourceResponseCollection';
export * from './getEncodedFormResponse';
export * from './getEventMetricRelationshipResponse';
export * from './getEventMetricRelationshipResponseData';
export * from './getEventProfileRelationshipResponse';
export * from './getEventProfileRelationshipResponseData';
export * from './getEventResponseCollectionCompoundDocument';
export * from './getEventResponseCollectionCompoundDocumentIncludedInner';
export * from './getEventResponseCompoundDocument';
export * from './getFlowActionEncodedResponse';
export * from './getFlowActionEncodedResponseCollection';
export * from './getFlowActionEncodedResponseCompoundDocument';
export * from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
export * from './getFlowActionFlowMessageRelationshipResponseCollection';
export * from './getFlowActionFlowRelationshipResponse';
export * from './getFlowActionFlowRelationshipResponseData';
export * from './getFlowFlowActionRelationshipListResponseCollection';
export * from './getFlowMessageActionRelationshipResponse';
export * from './getFlowMessageActionRelationshipResponseData';
export * from './getFlowMessageEncodedResponseCollection';
export * from './getFlowMessageEncodedResponseCompoundDocument';
export * from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
export * from './getFlowMessageTemplateRelationshipResponse';
export * from './getFlowMessageTemplateRelationshipResponseData';
export * from './getFlowResponse';
export * from './getFlowResponseCollection';
export * from './getFlowResponseCollectionCompoundDocument';
export * from './getFlowResponseCollectionCompoundDocumentIncludedInner';
export * from './getFlowTagsRelationshipsResponseCollection';
export * from './getFlowV2ResponseCompoundDocument';
export * from './getFormResponse';
export * from './getFormResponseCollection';
export * from './getFormVersionFormRelationshipResponse';
export * from './getFormVersionFormRelationshipResponseData';
export * from './getFormVersionResponseCollection';
export * from './getFormVersionResponseCompoundDocument';
export * from './getFormVersionsRelationshipsResponseCollection';
export * from './getFormVersionsRelationshipsResponseCollectionDataInner';
export * from './getImageResponse';
export * from './getImageResponseCollection';
export * from './getImportErrorResponseCollection';
export * from './getIngestionLogResponseCollectionCompoundDocument';
export * from './getIngestionLogResponseCollectionCompoundDocumentIncludedInner';
export * from './getListFlowTriggersRelationshipsResponseCollection';
export * from './getListListResponseCollectionCompoundDocument';
export * from './getListListResponseCollectionCompoundDocumentIncludedInner';
export * from './getListMemberResponseCollection';
export * from './getListProfilesRelationshipsResponseCollection';
export * from './getListProfilesRelationshipsResponseCollectionDataInner';
export * from './getListResponseCollection';
export * from './getListRetrieveResponseCompoundDocument';
export * from './getListTagsRelationshipsResponseCollection';
export * from './getListTagsRelationshipsResponseCollectionDataInner';
export * from './getMappedMetricCustomMetricRelationshipResponse';
export * from './getMappedMetricCustomMetricRelationshipResponseData';
export * from './getMappedMetricMetricRelationshipResponse';
export * from './getMappedMetricResponseCollectionCompoundDocument';
export * from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
export * from './getMappedMetricResponseCompoundDocument';
export * from './getMetricFlowTriggersRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
export * from './getMetricPropertyMetricRelationshipResponse';
export * from './getMetricPropertyResponseCollection';
export * from './getMetricPropertyResponseCompoundDocument';
export * from './getMetricResponse';
export * from './getMetricResponseCollection';
export * from './getMetricResponseCollectionCompoundDocument';
export * from './getMetricResponseCompoundDocument';
export * from './getObjectRecordResponse';
export * from './getObjectRecordResponseCollection';
export * from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollection';
export * from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner';
export * from './getObjectSchemaResponse';
export * from './getObjectSchemaResponseCollection';
export * from './getObjectSchemaResponseCompoundDocument';
export * from './getObjectSchemaResponseCompoundDocumentIncludedInner';
export * from './getObjectSchemaSchemasRelationshipsResponseCollection';
export * from './getObjectSchemaSchemasRelationshipsResponseCollectionDataInner';
export * from './getObjectSchemaSourceMappingRelationshipResponse';
export * from './getObjectSchemaSourceMappingRelationshipResponseData';
export * from './getObjectTypeCurrentSchemaRelationshipResponse';
export * from './getObjectTypeCurrentSchemaRelationshipResponseData';
export * from './getObjectTypeDraftSchemaRelationshipResponse';
export * from './getObjectTypeIngestionLogsRelationshipsResponseCollection';
export * from './getObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner';
export * from './getObjectTypeProfileObjectTypesRelationshipsResponseCollection';
export * from './getObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner';
export * from './getObjectTypeRecordsRelationshipsResponseCollection';
export * from './getObjectTypeRecordsRelationshipsResponseCollectionDataInner';
export * from './getObjectTypeResponseCollectionCompoundDocument';
export * from './getObjectTypeResponseCompoundDocument';
export * from './getObjectTypeResponseCompoundDocumentIncludedInner';
export * from './getObjectTypeSchemaVersionsRelationshipsResponseCollection';
export * from './getObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner';
export * from './getObjectTypeTypesRelationshipsResponseCollection';
export * from './getObjectTypeTypesRelationshipsResponseCollectionDataInner';
export * from './getProfileBulkImportJobListsRelationshipsResponseCollection';
export * from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
export * from './getProfileConversationRelationshipResponse';
export * from './getProfileConversationRelationshipResponseData';
export * from './getProfileConversationsRelationshipsResponseCollection';
export * from './getProfileConversationsRelationshipsResponseCollectionDataInner';
export * from './getProfileImportJobResponseCollectionCompoundDocument';
export * from './getProfileImportJobResponseCompoundDocument';
export * from './getProfileListsRelationshipsResponseCollection';
export * from './getProfileListsRelationshipsResponseCollectionDataInner';
export * from './getProfilePushTokensRelationshipsResponseCollection';
export * from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
export * from './getProfileResponse';
export * from './getProfileResponseCollection';
export * from './getProfileResponsePluralConversationsCollectionCompoundDocument';
export * from './getProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInner';
export * from './getProfileResponsePluralConversationsCompoundDocument';
export * from './getProfileResponsePluralConversationsCompoundDocumentIncludedInner';
export * from './getProfileSegmentsRelationshipsResponseCollection';
export * from './getPushTokenProfileRelationshipResponse';
export * from './getPushTokenResponseCollection';
export * from './getPushTokenResponseCollectionCompoundDocument';
export * from './getPushTokenResponseCompoundDocument';
export * from './getReviewResponseDTOCollectionCompoundDocument';
export * from './getReviewResponseDTOCompoundDocument';
export * from './getSegmentFlowTriggersRelationshipsResponseCollection';
export * from './getSegmentListResponseCollectionCompoundDocument';
export * from './getSegmentMemberResponseCollection';
export * from './getSegmentProfilesRelationshipsResponseCollection';
export * from './getSegmentResponseCollection';
export * from './getSegmentRetrieveResponseCompoundDocument';
export * from './getSegmentTagsRelationshipsResponseCollection';
export * from './getSourceMappingResponse';
export * from './getTagCampaignRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollectionDataInner';
export * from './getTagFlowRelationshipsResponseCollection';
export * from './getTagFlowRelationshipsResponseCollectionDataInner';
export * from './getTagGroupRelationshipResponse';
export * from './getTagGroupRelationshipResponseData';
export * from './getTagGroupResponse';
export * from './getTagGroupResponseCollection';
export * from './getTagGroupTagsRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollectionDataInner';
export * from './getTagResponseCollection';
export * from './getTagResponseCollectionCompoundDocument';
export * from './getTagResponseCompoundDocument';
export * from './getTagSegmentRelationshipsResponseCollection';
export * from './getTagSegmentRelationshipsResponseCollectionDataInner';
export * from './getTemplateDndResponse';
export * from './getTemplateDndResponseCollection';
export * from './getTemplateResponse';
export * from './getTrackingSettingResponse';
export * from './getTrackingSettingResponseCollection';
export * from './getUniversalContentResponse';
export * from './getUniversalContentResponseCollection';
export * from './getWebFeedResponse';
export * from './getWebFeedResponseCollection';
export * from './getWebhookResponseCollectionCompoundDocument';
export * from './getWebhookResponseCompoundDocument';
export * from './getWebhookTopicResponse';
export * from './getWebhookTopicResponseCollection';
export * from './goToInbox';
export * from './greaterThanPositiveNumericFilter';
export * from './hTMLBlockDataV0';
export * from './hTMLBlockDataV1';
export * from './hTMLBlockV0';
export * from './hTMLBlockV1';
export * from './hTMLText';
export * from './hTMLTextProperties';
export * from './hTMLTextStyles';
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
export * from './headerBlockData';
export * from './headerBlockStyles';
export * from './headerBlockV0';
export * from './headerBlockV1';
export * from './headerBlockV1SubblocksInner';
export * from './headerImageSubBlock';
export * from './headerLinkSubBlock';
export * from './headerLogoSubBlock';
export * from './heading1Style';
export * from './heading2Style';
export * from './heading3Style';
export * from './heading4Style';
export * from './headingStyleStyles';
export * from './horizontalRuleBlockData';
export * from './horizontalRuleBlockStyles';
export * from './horizontalRuleBlockV0';
export * from './horizontalRuleBlockV1';
export * from './iafDeeplinkToScreen';
export * from './iafDeeplinkToScreenProperties';
export * from './identifiedProfiles';
export * from './image';
export * from './imageAction';
export * from './imageAssetProperties';
export * from './imageBlockCroppingProperties';
export * from './imageBlockData';
export * from './imageBlockDataProperties';
export * from './imageBlockStyles';
export * from './imageBlockV0';
export * from './imageBlockV1';
export * from './imageCreateQuery';
export * from './imageCreateQueryResourceObject';
export * from './imageCreateQueryResourceObjectAttributes';
export * from './imageDropShadowStyles';
export * from './imageEnum';
export * from './imagePartialUpdateQuery';
export * from './imagePartialUpdateQueryResourceObject';
export * from './imagePartialUpdateQueryResourceObjectAttributes';
export * from './imageProperties';
export * from './imageResponseObjectResource';
export * from './imageResponseObjectResourceAttributes';
export * from './imageStyles';
export * from './immediateSendStrategy';
export * from './implicitlyOrExplicitlyReachable';
export * from './implicitlyOrExplicitlyUnreachable';
export * from './implicitlyReachable';
export * from './implicitlyUnreachable';
export * from './importErrorEnum';
export * from './importErrorResponseObjectResource';
export * from './importErrorResponseObjectResourceAttributes';
export * from './inStringArrayFilter';
export * from './inTheLastBaseRelativeDateFilter';
export * from './inboundMessageMethodFilter';
export * from './increment';
export * from './ingestionLogErrorDetail';
export * from './ingestionLogResponseObjectResource';
export * from './ingestionLogResponseObjectResourceAttributes';
export * from './ingestionLogResponseObjectResourceRelationships';
export * from './ingestionLogResponseObjectResourceRelationshipsObjectRecord';
export * from './ingestionLogResponseObjectResourceRelationshipsObjectRecordData';
export * from './ingestionLogResponseObjectResourceRelationshipsObjectType';
export * from './ingestionLogResponseObjectResourceRelationshipsObjectTypeData';
export * from './inputStyles';
export * from './integerFilter';
export * from './internalScheduledReportBuilderReportData';
export * from './internalScheduledReportData';
export * from './internalServiceAction';
export * from './internalServiceActionData';
export * from './internalServiceActionDataServiceConfiguration';
export * from './internalTrackEventData';
export * from './internalUnknownServiceData';
export * from './invalidEmailDateFilter';
export * from './ipAllowlistResourceName';
export * from './ipAllowlistResponse';
export * from './ipAllowlistResponseData';
export * from './ipAllowlistResponseDataWrapper';
export * from './isSetExistenceFilter';
export * from './lessThanPositiveNumericFilter';
export * from './link';
export * from './linkStyle';
export * from './linkStyleStyles';
export * from './linkStyles';
export * from './listContainsOperatorListContainsFilter';
export * from './listContainsOperatorListContainsFilterValue';
export * from './listCreateQuery';
export * from './listCreateQueryResourceObject';
export * from './listCreateQueryResourceObjectAttributes';
export * from './listEnum';
export * from './listLengthFilter';
export * from './listListResponseObjectResource';
export * from './listListResponseObjectResourceAttributes';
export * from './listListResponseObjectResourceRelationships';
export * from './listListResponseObjectResourceRelationshipsProfiles';
export * from './listListResponseObjectResourceRelationshipsProfilesDataInner';
export * from './listMemberResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceExtended';
export * from './listMemberResponseObjectResourceExtendedAttributes';
export * from './listMembersAddQuery';
export * from './listMembersDeleteQuery';
export * from './listPartialUpdateQuery';
export * from './listPartialUpdateQueryResourceObject';
export * from './listPartialUpdateQueryResourceObjectAttributes';
export * from './listRegexOperatorListContainsFilter';
export * from './listResponseObjectResource';
export * from './listRetrieveResponseObjectResourceAttributes';
export * from './listRetrieveResponseObjectResourceExtended';
export * from './listRetrieveResponseObjectResourceExtendedAttributes';
export * from './listSetFilter';
export * from './listSubstringFilter';
export * from './listTrigger';
export * from './listUpdateAction';
export * from './listUpdateActionData';
export * from './listsAndSegments';
export * from './listsAndSegmentsProperties';
export * from './localStaticSend';
export * from './location';
export * from './locationProperties';
export * from './locationPropertiesAllowListInner';
export * from './lowInventoryCondition';
export * from './lowInventoryTrigger';
export * from './lowInventoryTriggerTriggerFilter';
export * from './lowInventoryTriggerTriggerFilterConditionGroupsInner';
export * from './mailboxProviderMethodFilter';
export * from './manualAddManualMethodFilter';
export * from './manualImportManualMethodFilter';
export * from './manualImportMethodFilter';
export * from './manualRemoveMethodFilter';
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
export * from './mappedMetricResponseObjectResourceRelationships';
export * from './mappedMetricResponseObjectResourceRelationshipsCustomMetric';
export * from './mappedMetricResponseObjectResourceRelationshipsCustomMetricData';
export * from './mappedMetricResponseObjectResourceRelationshipsMetric';
export * from './mappedMetricResponseObjectResourceRelationshipsMetricData';
export * from './margin';
export * from './messageBlockedMethodFilter';
export * from './methodFilter';
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
export * from './metricPropertyEnum';
export * from './metricPropertyResponseObjectResourceAttributes';
export * from './metricPropertyResponseObjectResourceExtended';
export * from './metricPropertyResponseObjectResourceExtendedAttributes';
export * from './metricPropertyResponseObjectResourceExtendedAttributesAllOfSampleValuesInner';
export * from './metricPropertyResponseObjectResourceExtendedRelationships';
export * from './metricPropertyResponseObjectResourceExtendedRelationshipsMetric';
export * from './metricPropertyResponseObjectResourceExtendedRelationshipsMetricData';
export * from './metricResponseObjectResource';
export * from './metricResponseObjectResourceAttributes';
export * from './metricResponseObjectResourceRelationships';
export * from './metricResponseObjectResourceRelationshipsFlowTriggers';
export * from './metricResponseObjectResourceRelationshipsFlowTriggersDataInner';
export * from './metricTrigger';
export * from './metricTriggerTriggerFilter';
export * from './metricTriggerTriggerFilterConditionGroupsInner';
export * from './mobileOverlay';
export * from './mobilePushBadge';
export * from './mobilePushBadgeBadgeOptions';
export * from './mobilePushContent';
export * from './mobilePushContentCreate';
export * from './mobilePushContentUpdate';
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
export * from './mobileStyle';
export * from './mobileStyleProperties';
export * from './mobileStyleStyles';
export * from './modelDate';
export * from './multiBranchSplitAction';
export * from './multiBranchSplitActionData';
export * from './multiBranchSplitBranch';
export * from './multiBranchSplitBranchBranchFilter';
export * from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
export * from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
export * from './nextStep';
export * from './nextStepProperties';
export * from './noEmailMarketing';
export * from './noEmailMarketingConsent';
export * from './noEmailMarketingConsentConsentStatus';
export * from './noEmailMarketingFiltersInner';
export * from './noEmailMarketingNeverSubscribed';
export * from './noEmailMarketingSubscribed';
export * from './noEmailMarketingUnsubscribed';
export * from './noEmailMarketingUnsubscribedFilters';
export * from './noEmailMarketingUnsubscribedFiltersOneOfInner';
export * from './noPushMarketing';
export * from './noPushMarketingConsent';
export * from './noSMSMarketing';
export * from './noSMSMarketingConsent';
export * from './noSMSMarketingConsentConsentStatus';
export * from './noSMSMarketingNeverSubscribed';
export * from './noSMSMarketingUnsubscribed';
export * from './noSMSMarketingUnsubscribedFiltersInner';
export * from './nonLocalStaticSend';
export * from './numericOperatorNumericFilter';
export * from './numericOperatorNumericFilterValue';
export * from './numericRangeFilter';
export * from './objectIngestionLogEnum';
export * from './objectLinks';
export * from './objectRecordBulkDeleteJobEnum';
export * from './objectRecordDeleteJobCreateQuery';
export * from './objectRecordDeleteJobCreateQueryResourceObject';
export * from './objectRecordDeleteJobCreateQueryResourceObjectRelationships';
export * from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords';
export * from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner';
export * from './objectRecordEnum';
export * from './objectRecordResponseObjectResource';
export * from './objectRecordResponseObjectResourceAttributes';
export * from './objectSchemaCreateQuery';
export * from './objectSchemaCreateQueryResourceObject';
export * from './objectSchemaCreateQueryResourceObjectAttributes';
export * from './objectSchemaCreateQueryResourceObjectRelationships';
export * from './objectSchemaCreateQueryResourceObjectRelationshipsObjectType';
export * from './objectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData';
export * from './objectSchemaEnum';
export * from './objectSchemaPartialUpdateQuery';
export * from './objectSchemaPartialUpdateQueryResourceObject';
export * from './objectSchemaPartialUpdateQueryResourceObjectAttributes';
export * from './objectSchemaRelationshipCreateMeta';
export * from './objectSchemaRelationshipCreateQuery';
export * from './objectSchemaRelationshipCreateQueryDataInner';
export * from './objectSchemaRelationshipDeleteMeta';
export * from './objectSchemaRelationshipDeleteQuery';
export * from './objectSchemaRelationshipDeleteQueryDataInner';
export * from './objectSchemaRelationshipMeta';
export * from './objectSchemaRelationshipPartialUpdateQuery';
export * from './objectSchemaRelationshipPartialUpdateQueryData';
export * from './objectSchemaRelationshipResponseObjectResource';
export * from './objectSchemaRelationshipResponseObjectResourceAttributes';
export * from './objectSchemaRelationshipUpdateMeta';
export * from './objectSchemaResponseObjectResource';
export * from './objectSchemaResponseObjectResourceAttributes';
export * from './objectSchemaResponseObjectResourceRelationships';
export * from './objectSchemaResponseObjectResourceRelationshipsObjectSchemas';
export * from './objectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner';
export * from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas';
export * from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner';
export * from './objectSchemaResponseObjectResourceRelationshipsSourceMapping';
export * from './objectSchemaResponseObjectResourceRelationshipsSourceMappingData';
export * from './objectTypeCreateQuery';
export * from './objectTypeCreateQueryResourceObject';
export * from './objectTypeCreateQueryResourceObjectAttributes';
export * from './objectTypeCreateQueryResourceObjectAttributesObjectSchema';
export * from './objectTypeEnum';
export * from './objectTypeRelationshipMeta';
export * from './objectTypeRelationshipResponseObjectResource';
export * from './objectTypeRelationshipResponseObjectResourceAttributes';
export * from './objectTypeResponseObjectResource';
export * from './objectTypeResponseObjectResourceAttributes';
export * from './objectTypeResponseObjectResourceRelationships';
export * from './objectTypeResponseObjectResourceRelationshipsCurrentSchema';
export * from './objectTypeResponseObjectResourceRelationshipsCurrentSchemaData';
export * from './objectTypeResponseObjectResourceRelationshipsDraftSchema';
export * from './objectTypeResponseObjectResourceRelationshipsDraftSchemaData';
export * from './objectTypeResponseObjectResourceRelationshipsObjectTypes';
export * from './objectTypeResponseObjectResourceRelationshipsObjectTypesDataInner';
export * from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypes';
export * from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner';
export * from './objectTypeResponseObjectResourceRelationshipsSchemaVersions';
export * from './objectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner';
export * from './oneClickUnsubscribeMethodFilter';
export * from './onlyRelatedLinks';
export * from './onsiteProfileCreateQueryResourceObject';
export * from './onsiteProfileCreateQueryResourceObjectAttributes';
export * from './onsiteProfileMeta';
export * from './openForm';
export * from './openFormProperties';
export * from './openTrackingConsent';
export * from './openTrackingSubscriptionParameters';
export * from './openTrackingUnsubscriptionParameters';
export * from './optInCode';
export * from './optInCodeProperties';
export * from './optInCodeStyles';
export * from './padding';
export * from './pageVisits';
export * from './pageVisitsProperties';
export * from './patchCampaignMessageResponse';
export * from './patchCampaignMessageResponseData';
export * from './patchCampaignResponse';
export * from './patchCatalogCategoryResponse';
export * from './patchCatalogItemResponse';
export * from './patchCatalogVariantResponse';
export * from './patchCouponCodeResponse';
export * from './patchCouponResponse';
export * from './patchCustomMetricResponse';
export * from './patchFlowActionEncodedResponse';
export * from './patchFlowActionEncodedResponseData';
export * from './patchFlowResponse';
export * from './patchFlowResponseData';
export * from './patchIdentifiers';
export * from './patchImageResponse';
export * from './patchListPartialUpdateResponse';
export * from './patchMappedMetricResponse';
export * from './patchMappedMetricResponseData';
export * from './patchObjectSchemaResponse';
export * from './patchProfileResponse';
export * from './patchReviewResponseDTO';
export * from './patchReviewResponseDTOData';
export * from './patchSegmentPartialUpdateResponse';
export * from './patchSourceMappingResponse';
export * from './patchSourceMappingResponseData';
export * from './patchTemplateDndResponse';
export * from './patchTrackingSettingResponse';
export * from './patchTrackingSettingResponseData';
export * from './patchUniversalContentResponse';
export * from './patchWebFeedResponse';
export * from './patchWebhookResponse';
export * from './phoneNumber';
export * from './phoneNumberConsentChannelSettings';
export * from './phoneNumberProperties';
export * from './phoneNumberStyles';
export * from './postBulkProfileSuppressionsCreateJobResponse';
export * from './postBulkProfileSuppressionsCreateJobResponseData';
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
export * from './postCatalogCategoryResponse';
export * from './postCatalogCategoryResponseData';
export * from './postCatalogCategoryUpdateJobResponse';
export * from './postCatalogCategoryUpdateJobResponseData';
export * from './postCatalogItemCreateJobResponse';
export * from './postCatalogItemCreateJobResponseData';
export * from './postCatalogItemDeleteJobResponse';
export * from './postCatalogItemDeleteJobResponseData';
export * from './postCatalogItemResponse';
export * from './postCatalogItemResponseData';
export * from './postCatalogItemUpdateJobResponse';
export * from './postCatalogItemUpdateJobResponseData';
export * from './postCatalogVariantCreateJobResponse';
export * from './postCatalogVariantCreateJobResponseData';
export * from './postCatalogVariantDeleteJobResponse';
export * from './postCatalogVariantDeleteJobResponseData';
export * from './postCatalogVariantResponse';
export * from './postCatalogVariantResponseData';
export * from './postCatalogVariantUpdateJobResponse';
export * from './postCatalogVariantUpdateJobResponseData';
export * from './postCouponCodeCreateJobResponse';
export * from './postCouponCodeCreateJobResponseData';
export * from './postCouponCodeResponse';
export * from './postCouponCodeResponseData';
export * from './postCouponResponse';
export * from './postCouponResponseData';
export * from './postCustomMetricResponse';
export * from './postCustomMetricResponseData';
export * from './postDataSourceResponse';
export * from './postDataSourceResponseData';
export * from './postEncodedFormResponse';
export * from './postEncodedFormResponseData';
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
export * from './postMetricAggregateResponse';
export * from './postMetricAggregateResponseData';
export * from './postMetricAggregateResponseDataAttributes';
export * from './postObjectSchemaResponse';
export * from './postObjectSchemaResponseData';
export * from './postObjectTypeResponse';
export * from './postObjectTypeResponseData';
export * from './postProfileImportJobResponse';
export * from './postProfileImportJobResponseData';
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
export * from './postTagResponse';
export * from './postTagResponseData';
export * from './postTemplateDndResponse';
export * from './postTemplateDndResponseData';
export * from './postTemplateDndResponseDataAttributes';
export * from './postTemplateResponse';
export * from './postTemplateResponseData';
export * from './postUniversalContentResponse';
export * from './postUniversalContentResponseData';
export * from './postWebFeedResponse';
export * from './postWebFeedResponseData';
export * from './postWebhookResponse';
export * from './postWebhookResponseData';
export * from './predictiveAnalytics';
export * from './preferencePageFilter';
export * from './preferencePageMethodFilter';
export * from './previouslySubmitted';
export * from './priceDropCondition';
export * from './priceDropTrigger';
export * from './priceDropTriggerTriggerFilter';
export * from './priceDropTriggerTriggerFilterConditionGroupsInner';
export * from './productBlockData';
export * from './productBlockDataProperties';
export * from './productBlockStyles';
export * from './productBlockV0';
export * from './productBlockV1';
export * from './productSubBlock';
export * from './profileBulkImportJobEnum';
export * from './profileCreateQuery';
export * from './profileCreateQueryResourceObject';
export * from './profileCreateQueryResourceObjectAttributes';
export * from './profileEnum';
export * from './profileEventTracked';
export * from './profileEventTrackedProperties';
export * from './profileHasCustomObjectCondition';
export * from './profileHasCustomObjectFilter';
export * from './profileHasCustomObjectFilterFilter';
export * from './profileHasGroupMembershipCondition';
export * from './profileHasGroupMembershipConditionTimeframeFilter';
export * from './profileHasNotReceivedEmailMessageCondition';
export * from './profileHasNotReceivedEmailMessageConditionTimeframeFilter';
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
export * from './profileImportJobResponseObjectResourceRelationships';
export * from './profileImportJobResponseObjectResourceRelationshipsImportErrors';
export * from './profileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner';
export * from './profileImportJobResponseObjectResourceRelationshipsLists';
export * from './profileImportJobResponseObjectResourceRelationshipsListsDataInner';
export * from './profileImportJobResponseObjectResourceRelationshipsProfiles';
export * from './profileImportJobResponseObjectResourceRelationshipsProfilesDataInner';
export * from './profileLocation';
export * from './profileLocationLatitude';
export * from './profileLocationLongitude';
export * from './profileMarketingConsentCondition';
export * from './profileMarketingConsentConditionConsent';
export * from './profileMergeEnum';
export * from './profileMergeQuery';
export * from './profileMergeQueryResourceObject';
export * from './profileMergeQueryResourceObjectRelationships';
export * from './profileMergeQueryResourceObjectRelationshipsProfiles';
export * from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
export * from './profileMeta';
export * from './profileMetaPatchProperties';
export * from './profileMetaPatchPropertiesUnset';
export * from './profileMetricFunnelSteps';
export * from './profileMetricPropertyFilter';
export * from './profileMetricPropertyFilterFilter';
export * from './profileModificationMethodFilter';
export * from './profileNoGroupMembershipCondition';
export * from './profileNotInFlowCondition';
export * from './profileObjectSchemaEnum';
export * from './profileObjectSchemaRelationshipCreateQuery';
export * from './profileObjectSchemaRelationshipCreateQueryDataInner';
export * from './profileObjectSchemaRelationshipDeleteQuery';
export * from './profileObjectSchemaRelationshipDeleteQueryDataInner';
export * from './profileObjectSchemaRelationshipPartialUpdateQuery';
export * from './profileObjectSchemaRelationshipPartialUpdateQueryData';
export * from './profileObjectSchemaRelationshipResponseObjectResource';
export * from './profileObjectTypeEnum';
export * from './profileOperationDelete';
export * from './profileOperationUpdateOrCreateBoolean';
export * from './profileOperationUpdateOrCreateDate';
export * from './profileOperationUpdateOrCreateDatePropertyValue';
export * from './profileOperationUpdateOrCreateList';
export * from './profileOperationUpdateOrCreateNumeric';
export * from './profileOperationUpdateOrCreateString';
export * from './profilePartialUpdateQuery';
export * from './profilePartialUpdateQueryResourceObject';
export * from './profilePermissionsCondition';
export * from './profilePermissionsConditionPermission';
export * from './profilePostalCodeDistanceCondition';
export * from './profilePostalCodeDistanceConditionFilter';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
export * from './profilePredictiveAnalyticsChannelAffinityRankCondition';
export * from './profilePredictiveAnalyticsChannelAffinityRankFilter';
export * from './profilePredictiveAnalyticsDateCondition';
export * from './profilePredictiveAnalyticsNumericCondition';
export * from './profilePredictiveAnalyticsStringCondition';
export * from './profilePredictiveAnalyticsStringFilter';
export * from './profilePredictiveAnalyticsStringFilterOperator';
export * from './profilePropertyCondition';
export * from './profilePropertyConditionFilter';
export * from './profilePropertyDateTrigger';
export * from './profileRandomSampleCondition';
export * from './profileRegionCondition';
export * from './profileRelationshipSource';
export * from './profileResponseObjectResource';
export * from './profileResponseObjectResourceAttributes';
export * from './profileResponseObjectResourceExtended';
export * from './profileResponseObjectResourceExtendedAttributes';
export * from './profileResponseObjectResourceRelationships';
export * from './profileResponseObjectResourceRelationshipsLists';
export * from './profileResponseObjectResourceRelationshipsListsDataInner';
export * from './profileResponseObjectResourceRelationshipsPushTokens';
export * from './profileResponseObjectResourceRelationshipsPushTokensDataInner';
export * from './profileResponseObjectResourceRelationshipsSegments';
export * from './profileResponseObjectResourceRelationshipsSegmentsDataInner';
export * from './profileResponsePluralConversationsObjectResourceAttributes';
export * from './profileResponsePluralConversationsObjectResourceExtended';
export * from './profileResponsePluralConversationsObjectResourceExtendedAttributes';
export * from './profileResponsePluralConversationsObjectResourceExtendedRelationships';
export * from './profileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations';
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
export * from './profileTypeRelationshipResponseObjectResource';
export * from './profileUpsertQuery';
export * from './profileUpsertQueryResourceObject';
export * from './profileUpsertQueryResourceObjectAttributes';
export * from './promotionalSMSSubscription';
export * from './property';
export * from './propertyFilter';
export * from './propertyOption';
export * from './propertySource';
export * from './providedLandlineMethodFilter';
export * from './providedNoAgeMethodFilter';
export * from './pushActionButton';
export * from './pushActionButtonDefinition';
export * from './pushChannel';
export * from './pushMarketing';
export * from './pushOnOpenApp';
export * from './pushOnOpenDeepLink';
export * from './pushOnOpenWebUrl';
export * from './pushProfileUpsertQueryResourceObject';
export * from './pushProfileUpsertQueryResourceObjectAttributes';
export * from './pushSendOptions';
export * from './pushSubscriptionParameters';
export * from './pushTokenCreateQuery';
export * from './pushTokenCreateQueryResourceObject';
export * from './pushTokenCreateQueryResourceObjectAttributes';
export * from './pushTokenCreateQueryResourceObjectAttributesProfile';
export * from './pushTokenDeviceMetadata';
export * from './pushTokenEntry';
export * from './pushTokenEnum';
export * from './pushTokenResponseObjectResource';
export * from './pushTokenResponseObjectResourceAttributes';
export * from './pushTokenResponseObjectResourceRelationships';
export * from './pushTokenResponseObjectResourceRelationshipsProfile';
export * from './pushTokenResponseObjectResourceRelationshipsProfileData';
export * from './pushUnsubscriptionParameters';
export * from './quoteStyle';
export * from './radioButtons';
export * from './radioButtonsProperties';
export * from './radioButtonsStyles';
export * from './ratingStyle';
export * from './recordedDateFilter';
export * from './redirect';
export * from './redirectProperties';
export * from './reentryCriteria';
export * from './reentryCriteriaUnit';
export * from './rejectReasonFake';
export * from './rejectReasonMisleading';
export * from './rejectReasonOther';
export * from './rejectReasonPrivateInformation';
export * from './rejectReasonProfanity';
export * from './rejectReasonUnrelated';
export * from './relatedIdPath';
export * from './relationshipLinks';
export * from './relativeAnniversaryDateFilter';
export * from './relativeDateOperatorBaseRelativeDateFilter';
export * from './relativeDateRangeFilter';
export * from './renderOptions';
export * from './renderOptionsSubObject';
export * from './resendOptInCode';
export * from './review';
export * from './reviewBlockData';
export * from './reviewBlockDataProperties';
export * from './reviewBlockStyles';
export * from './reviewBlockV0';
export * from './reviewBlockV1';
export * from './reviewEnum';
export * from './reviewPatchQuery';
export * from './reviewPatchQueryResourceObject';
export * from './reviewPatchQueryResourceObjectAttributes';
export * from './reviewPatchQueryResourceObjectAttributesStatus';
export * from './reviewProductDTO';
export * from './reviewProperties';
export * from './reviewPublicReply';
export * from './reviewResponseDTOObjectResource';
export * from './reviewResponseDTOObjectResourceAttributes';
export * from './reviewResponseDTOObjectResourceAttributesStatus';
export * from './reviewResponseDTOObjectResourceRelationships';
export * from './reviewResponseDTOObjectResourceRelationshipsEvents';
export * from './reviewResponseDTOObjectResourceRelationshipsEventsDataInner';
export * from './reviewResponseDTOObjectResourceRelationshipsItem';
export * from './reviewResponseDTOObjectResourceRelationshipsItemData';
export * from './reviewStatusFeatured';
export * from './reviewStatusPending';
export * from './reviewStatusPublished';
export * from './reviewStatusRejected';
export * from './reviewStatusRejectedRejectionReason';
export * from './reviewStatusUnpublished';
export * from './reviewStyles';
export * from './reviewerNameStyle';
export * from './richTextMargin';
export * from './richTextStyle';
export * from './richTextStyles';
export * from './rowData';
export * from './rowStyles';
export * from './rowV0';
export * from './rowV0BlocksInner';
export * from './rowV1';
export * from './sMSChannel';
export * from './sMSConsentCheckbox';
export * from './sMSConsentCheckboxProperties';
export * from './sMSConsentCheckboxStyles';
export * from './sMSContent';
export * from './sMSContentCreate';
export * from './sMSContentSubObject';
export * from './sMSDisclosure';
export * from './sMSDisclosureAccountDefault';
export * from './sMSDisclosureCustom';
export * from './sMSDisclosureLinkTextStyle';
export * from './sMSDisclosureProperties';
export * from './sMSDisclosurePropertiesContent';
export * from './sMSDisclosureStyles';
export * from './sMSDisclosureTextStyle';
export * from './sMSMarketing';
export * from './sMSMessageDefinition';
export * from './sMSMessageDefinitionCreate';
export * from './sMSSendOptions';
export * from './sMSSubscriptionParameters';
export * from './sMSTransactional';
export * from './sMSUnsubscriptionParameters';
export * from './scroll';
export * from './scrollProperties';
export * from './sectionData';
export * from './sectionProperties';
export * from './sectionStyles';
export * from './sectionV0';
export * from './sectionV1';
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
export * from './segmentsProfileMetricFunnelCondition';
export * from './segmentsProfileMetricFunnelConditionTimeframeFilter';
export * from './sendEmailAction';
export * from './sendEmailActionData';
export * from './sendInternalAlertAction';
export * from './sendInternalAlertActionData';
export * from './sendPushNotificationAction';
export * from './sendPushNotificationActionData';
export * from './sendSmsAction';
export * from './sendSmsActionData';
export * from './sendTime';
export * from './sendTimeSubObject';
export * from './sendWebhookAction';
export * from './sendWebhookActionData';
export * from './sendWhatsAppAction';
export * from './sendWhatsAppActionData';
export * from './seriesData';
export * from './serverBISSubscriptionCreateQuery';
export * from './serverBISSubscriptionCreateQueryResourceObject';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
export * from './sftpMethodFilter';
export * from './shopifyIntegrationFilter';
export * from './shopifyIntegrationMethodFilter';
export * from './sideImageSettings';
export * from './signupCounter';
export * from './signupCounterProperties';
export * from './signupCounterStyles';
export * from './simplePropertyMapping';
export * from './simpleRelationshipMapping';
export * from './simpleRelationshipMappingSource';
export * from './sinceFlowStartDateFilter';
export * from './skipToSuccess';
export * from './smartSendTimeStrategy';
export * from './socialBlockData';
export * from './socialBlockProperties';
export * from './socialBlockStyles';
export * from './socialBlockV0';
export * from './socialBlockV1';
export * from './socialBlockV1SubblocksInner';
export * from './socialIconSubBlock';
export * from './socialSpacerSubBlock';
export * from './sourceMappingCreateQueryResourceObject';
export * from './sourceMappingCreateQueryResourceObjectAttributes';
export * from './sourceMappingEnum';
export * from './sourceMappingPartialUpdateQuery';
export * from './sourceMappingPartialUpdateQueryResourceObject';
export * from './sourceMappingResponseObjectResource';
export * from './sourceMappingResponseObjectResourceAttributes';
export * from './sourceMappingResponseObjectResourceAttributesPropertyMappingsInner';
export * from './spacerBlockData';
export * from './spacerBlockStyles';
export * from './spacerBlockV0';
export * from './spacerBlockV1';
export * from './spamComplaintMethodFilter';
export * from './spinToWin';
export * from './spinToWinProperties';
export * from './spinToWinSliceConfig';
export * from './spinToWinSliceStyle';
export * from './spinToWinStyles';
export * from './splitBlockData';
export * from './splitBlockStyles';
export * from './splitBlockV0';
export * from './splitBlockV1';
export * from './splitBlockV1SubblocksInner';
export * from './staticCount';
export * from './staticCouponConfig';
export * from './staticDateFilter';
export * from './staticDateRangeFilter';
export * from './staticImageBlockProperties';
export * from './staticProductBlockProperties';
export * from './staticReviewBlockProperties';
export * from './staticSendStrategy';
export * from './staticSendStrategyOptions';
export * from './staticTableBlockProperties';
export * from './staticTrackingParam';
export * from './statusDateFilter';
export * from './statusDateFilterFilter';
export * from './step';
export * from './streetAddress';
export * from './stringArrayOperatorStringArrayFilter';
export * from './stringInArrayFilter';
export * from './stringOperatorStringFilter';
export * from './stringPhoneOperatorStringArrayFilter';
export * from './submitBackInStock';
export * from './submitBackInStockProperties';
export * from './submitOptInCode';
export * from './subscribeViaSMS';
export * from './subscribeViaSMSProperties';
export * from './subscribeViaWhatsApp';
export * from './subscribeViaWhatsAppProperties';
export * from './subscribedSMSIsRcsCapableFilter';
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
export * from './tableBlockData';
export * from './tableBlockDataProperties';
export * from './tableBlockStyles';
export * from './tableBlockV0';
export * from './tableBlockV1';
export * from './tableBlockV1SubblocksInner';
export * from './tableFallbackHtmlSubBlock';
export * from './tableFallbackImageSubBlock';
export * from './tableFallbackTextSubBlock';
export * from './tableHeaderSubBlock';
export * from './tableHtmlSubBlock';
export * from './tableImageSubBlock';
export * from './tableTextSubBlock';
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
export * from './tagGroupResponseObjectResourceRelationships';
export * from './tagGroupUpdateQuery';
export * from './tagGroupUpdateQueryResourceObject';
export * from './tagGroupUpdateQueryResourceObjectAttributes';
export * from './tagListOp';
export * from './tagListOpDataInner';
export * from './tagResponseObjectResource';
export * from './tagResponseObjectResourceAttributes';
export * from './tagResponseObjectResourceRelationships';
export * from './tagResponseObjectResourceRelationshipsCampaigns';
export * from './tagResponseObjectResourceRelationshipsCampaignsDataInner';
export * from './tagResponseObjectResourceRelationshipsTagGroup';
export * from './tagResponseObjectResourceRelationshipsTagGroupData';
export * from './tagSegmentOp';
export * from './tagSegmentOpDataInner';
export * from './tagUpdateQuery';
export * from './tagUpdateQueryResourceObject';
export * from './targetDateAction';
export * from './targetDateActionData';
export * from './teaser';
export * from './teaserStyles';
export * from './templateCloneQuery';
export * from './templateCloneQueryResourceObject';
export * from './templateCloneQueryResourceObjectAttributes';
export * from './templateCreateHtmlOrDndQuery';
export * from './templateCreateHtmlOrDndQueryResourceObject';
export * from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
export * from './templateDefinition';
export * from './templateDefinitionStylesInner';
export * from './templateDndResponseObjectResourceAttributes';
export * from './templateDndResponseObjectResourceExtended';
export * from './templateDndResponseObjectResourceExtendedAttributes';
export * from './templateEnum';
export * from './templateRenderQuery';
export * from './templateRenderQueryResourceObject';
export * from './templateRenderQueryResourceObjectAttributes';
export * from './templateResponseObjectResource';
export * from './templateResponseObjectResourceAttributes';
export * from './templateUniversalContentEnum';
export * from './templateUpdateHtmlOrDndQuery';
export * from './templateUpdateHtmlOrDndQueryResourceObject';
export * from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
export * from './text';
export * from './textBlockDataV0';
export * from './textBlockDataV1';
export * from './textBlockStylesV0';
export * from './textBlockStylesV1';
export * from './textBlockV0';
export * from './textBlockV1';
export * from './textProperties';
export * from './textStyleStyles';
export * from './textStyleV0';
export * from './textStyleV0FontFamily';
export * from './textStyleV1';
export * from './textStyles';
export * from './throttledSendStrategy';
export * from './timeDelayAction';
export * from './timeDelayActionData';
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
export * from './triggerBranchActionDataTriggerFilter';
export * from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
export * from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
export * from './uRLPatterns';
export * from './uRLPatternsProperties';
export * from './unidentifiedProfiles';
export * from './uniqueCouponConfig';
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
export * from './unsubscriptionChannels';
export * from './unsubscriptionParameters';
export * from './unsupportedBlock';
export * from './unsupportedSendStrategy';
export * from './updateProfileAction';
export * from './updateProfileActionData';
export * from './updateProfileActionDataProfileOperationsInner';
export * from './utmParam';
export * from './valuesData';
export * from './variableTimerConfiguration';
export * from './version';
export * from './versionProperties';
export * from './versionStyles';
export * from './versionTriggersInner';
export * from './videoBlockData';
export * from './videoBlockProperties';
export * from './videoBlockStyles';
export * from './videoBlockV0';
export * from './videoBlockV1';
export * from './visibility';
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
export * from './webhookResponseObjectResourceRelationships';
export * from './webhookResponseObjectResourceRelationshipsWebhookTopics';
export * from './webhookResponseObjectResourceRelationshipsWebhookTopicsDataInner';
export * from './webhookTopicEnum';
export * from './webhookTopicResponseObjectResource';
export * from './whatsAppSubscriptionParameters';
export * from './whatsAppUnsubscriptionParameters';
export * from './whatsappChannel';
export * from './whatsappConversationalChannel';
export * from './whatsappMarketingChannel';
export * from './whatsappTransactionalChannel';

export type RequestFile = ReadStream;


import { ABTestSendStrategy } from './aBTestSendStrategy';
import { APIJobErrorPayload } from './aPIJobErrorPayload';
import { APIMethodFilter } from './aPIMethodFilter';
import { APISchemaProperty } from './aPISchemaProperty';
import { AbTestAction } from './abTestAction';
import { AbTestActionData } from './abTestActionData';
import { AbTestActionDataCurrentExperiment } from './abTestActionDataCurrentExperiment';
import { AbTestActionDataMainAction } from './abTestActionDataMainAction';
import { AccountEnum } from './accountEnum';
import { AccountResponseObjectResource } from './accountResponseObjectResource';
import { AccountResponseObjectResourceAttributes } from './accountResponseObjectResourceAttributes';
import { ActionOutputCondition } from './actionOutputCondition';
import { ActionOutputConditionFilter } from './actionOutputConditionFilter';
import { ActionOutputSplitAction } from './actionOutputSplitAction';
import { ActionOutputSplitActionData } from './actionOutputSplitActionData';
import { ActionOutputSplitActionDataActionOutputFilter } from './actionOutputSplitActionDataActionOutputFilter';
import { ActionOutputSplitActionDataActionOutputFilterConditionGroupsInner } from './actionOutputSplitActionDataActionOutputFilterConditionGroupsInner';
import { AdditionalField } from './additionalField';
import { AfterCloseTimeout } from './afterCloseTimeout';
import { AfterCloseTimeoutProperties } from './afterCloseTimeoutProperties';
import { AgeGate } from './ageGate';
import { AgeGateProperties } from './ageGateProperties';
import { AgeGateStyles } from './ageGateStyles';
import { AlltimeDateFilter } from './alltimeDateFilter';
import { AnniversaryDateFilter } from './anniversaryDateFilter';
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
import { BackInStock } from './backInStock';
import { BackInStockDelayAction } from './backInStockDelayAction';
import { BackInStockDynamicButtonBorderStyles } from './backInStockDynamicButtonBorderStyles';
import { BackInStockDynamicButtonData } from './backInStockDynamicButtonData';
import { BackInStockDynamicButtonDropShadowStyles } from './backInStockDynamicButtonDropShadowStyles';
import { BackInStockDynamicButtonStyles } from './backInStockDynamicButtonStyles';
import { BackInStockDynamicButtonTextStyles } from './backInStockDynamicButtonTextStyles';
import { BackInStockEmailConsentCheckbox } from './backInStockEmailConsentCheckbox';
import { BackInStockEmailConsentCheckboxProperties } from './backInStockEmailConsentCheckboxProperties';
import { BackInStockEmailConsentCheckboxStyles } from './backInStockEmailConsentCheckboxStyles';
import { BackInStockMethodFilter } from './backInStockMethodFilter';
import { BackInStockProperties } from './backInStockProperties';
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { BackgroundImage } from './backgroundImage';
import { BackgroundImageStyles } from './backgroundImageStyles';
import { BannerStyles } from './bannerStyles';
import { BaseEventCreateQueryBulkEntryResourceObject } from './baseEventCreateQueryBulkEntryResourceObject';
import { BaseEventCreateQueryBulkEntryResourceObjectAttributes } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import { BaseStyle } from './baseStyle';
import { BaseStyleProperties } from './baseStyleProperties';
import { BaseStyleStyles } from './baseStyleStyles';
import { BlockDisplayOptions } from './blockDisplayOptions';
import { Body } from './body';
import { BodyProperties } from './bodyProperties';
import { BodyStyles } from './bodyStyles';
import { BooleanBranchLinks } from './booleanBranchLinks';
import { BooleanFilter } from './booleanFilter';
import { BorderStyle } from './borderStyle';
import { BounceDateFilter } from './bounceDateFilter';
import { BounceDateFilterFilter } from './bounceDateFilterFilter';
import { BulkProfileSuppressionsCreateJobResponseObjectResource } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceRelationships } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationships';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner';
import { BulkProfileSuppressionsRemoveJobResponseObjectResource } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import { BulkRemoveMethodFilter } from './bulkRemoveMethodFilter';
import { Button } from './button';
import { ButtonAction } from './buttonAction';
import { ButtonBlockData } from './buttonBlockData';
import { ButtonBlockProperties } from './buttonBlockProperties';
import { ButtonBlockStyles } from './buttonBlockStyles';
import { ButtonBlockV0 } from './buttonBlockV0';
import { ButtonBlockV1 } from './buttonBlockV1';
import { ButtonDropShadowStyles } from './buttonDropShadowStyles';
import { ButtonProperties } from './buttonProperties';
import { ButtonStyles } from './buttonStyles';
import { ButtonStylesHeight } from './buttonStylesHeight';
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
import { CampaignMessageResponseObjectResourceRelationships } from './campaignMessageResponseObjectResourceRelationships';
import { CampaignMessageResponseObjectResourceRelationshipsCampaign } from './campaignMessageResponseObjectResourceRelationshipsCampaign';
import { CampaignMessageResponseObjectResourceRelationshipsCampaignData } from './campaignMessageResponseObjectResourceRelationshipsCampaignData';
import { CampaignMessageResponseObjectResourceRelationshipsImage } from './campaignMessageResponseObjectResourceRelationshipsImage';
import { CampaignMessageResponseObjectResourceRelationshipsImageData } from './campaignMessageResponseObjectResourceRelationshipsImageData';
import { CampaignMessageResponseObjectResourceRelationshipsTemplate } from './campaignMessageResponseObjectResourceRelationshipsTemplate';
import { CampaignMessageResponseObjectResourceRelationshipsTemplateData } from './campaignMessageResponseObjectResourceRelationshipsTemplateData';
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
import { CampaignResponseObjectResourceRelationships } from './campaignResponseObjectResourceRelationships';
import { CampaignResponseObjectResourceRelationshipsCampaignMessages } from './campaignResponseObjectResourceRelationshipsCampaignMessages';
import { CampaignResponseObjectResourceRelationshipsCampaignMessagesDataInner } from './campaignResponseObjectResourceRelationshipsCampaignMessagesDataInner';
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
import { CarrierDeactivationMethodFilter } from './carrierDeactivationMethodFilter';
import { CartContent } from './cartContent';
import { CartContentProperties } from './cartContentProperties';
import { CartItemCount } from './cartItemCount';
import { CartItemCountProperties } from './cartItemCountProperties';
import { CartProduct } from './cartProduct';
import { CartProductProperties } from './cartProductProperties';
import { CartValue } from './cartValue';
import { CartValueProperties } from './cartValueProperties';
import { CatalogCategoryBulkCreateJobEnum } from './catalogCategoryBulkCreateJobEnum';
import { CatalogCategoryBulkDeleteJobEnum } from './catalogCategoryBulkDeleteJobEnum';
import { CatalogCategoryBulkUpdateJobEnum } from './catalogCategoryBulkUpdateJobEnum';
import { CatalogCategoryCreateJobCreateQuery } from './catalogCategoryCreateJobCreateQuery';
import { CatalogCategoryCreateJobCreateQueryResourceObject } from './catalogCategoryCreateJobCreateQueryResourceObject';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributes } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryCreateJobResponseObjectResource } from './catalogCategoryCreateJobResponseObjectResource';
import { CatalogCategoryCreateJobResponseObjectResourceRelationships } from './catalogCategoryCreateJobResponseObjectResourceRelationships';
import { CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategories } from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategories';
import { CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner } from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
import { CatalogCategoryDeleteJobResponseObjectResourceRelationships } from './catalogCategoryDeleteJobResponseObjectResourceRelationships';
import { CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories } from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories';
import { CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner } from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner';
import { CatalogCategoryDeleteQueryResourceObject } from './catalogCategoryDeleteQueryResourceObject';
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryItemOp } from './catalogCategoryItemOp';
import { CatalogCategoryItemOpDataInner } from './catalogCategoryItemOpDataInner';
import { CatalogCategoryResponseObjectResource } from './catalogCategoryResponseObjectResource';
import { CatalogCategoryResponseObjectResourceAttributes } from './catalogCategoryResponseObjectResourceAttributes';
import { CatalogCategoryResponseObjectResourceRelationships } from './catalogCategoryResponseObjectResourceRelationships';
import { CatalogCategoryResponseObjectResourceRelationshipsItems } from './catalogCategoryResponseObjectResourceRelationshipsItems';
import { CatalogCategoryUpdateJobCreateQuery } from './catalogCategoryUpdateJobCreateQuery';
import { CatalogCategoryUpdateJobCreateQueryResourceObject } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryUpdateJobResponseObjectResource } from './catalogCategoryUpdateJobResponseObjectResource';
import { CatalogCategoryUpdateJobResponseObjectResourceRelationships } from './catalogCategoryUpdateJobResponseObjectResourceRelationships';
import { CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories } from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories';
import { CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner } from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
import { CatalogItemCreateJobResponseObjectResourceRelationships } from './catalogItemCreateJobResponseObjectResourceRelationships';
import { CatalogItemCreateJobResponseObjectResourceRelationshipsItems } from './catalogItemCreateJobResponseObjectResourceRelationshipsItems';
import { CatalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner } from './catalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner';
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
import { CatalogItemDeleteJobResponseObjectResourceRelationships } from './catalogItemDeleteJobResponseObjectResourceRelationships';
import { CatalogItemDeleteJobResponseObjectResourceRelationshipsItems } from './catalogItemDeleteJobResponseObjectResourceRelationshipsItems';
import { CatalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner } from './catalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner';
import { CatalogItemDeleteQueryResourceObject } from './catalogItemDeleteQueryResourceObject';
import { CatalogItemEnum } from './catalogItemEnum';
import { CatalogItemResponseObjectResource } from './catalogItemResponseObjectResource';
import { CatalogItemResponseObjectResourceAttributes } from './catalogItemResponseObjectResourceAttributes';
import { CatalogItemResponseObjectResourceRelationships } from './catalogItemResponseObjectResourceRelationships';
import { CatalogItemResponseObjectResourceRelationshipsVariants } from './catalogItemResponseObjectResourceRelationshipsVariants';
import { CatalogItemResponseObjectResourceRelationshipsVariantsDataInner } from './catalogItemResponseObjectResourceRelationshipsVariantsDataInner';
import { CatalogItemUpdateJobCreateQuery } from './catalogItemUpdateJobCreateQuery';
import { CatalogItemUpdateJobCreateQueryResourceObject } from './catalogItemUpdateJobCreateQueryResourceObject';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributes } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemUpdateJobResponseObjectResource } from './catalogItemUpdateJobResponseObjectResource';
import { CatalogItemUpdateJobResponseObjectResourceRelationships } from './catalogItemUpdateJobResponseObjectResourceRelationships';
import { CatalogItemUpdateJobResponseObjectResourceRelationshipsItems } from './catalogItemUpdateJobResponseObjectResourceRelationshipsItems';
import { CatalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner } from './catalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner';
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
import { CatalogVariantCreateJobResponseObjectResourceRelationships } from './catalogVariantCreateJobResponseObjectResourceRelationships';
import { CatalogVariantCreateJobResponseObjectResourceRelationshipsVariants } from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariants';
import { CatalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner } from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner';
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
import { CatalogVariantDeleteJobResponseObjectResourceRelationships } from './catalogVariantDeleteJobResponseObjectResourceRelationships';
import { CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariants } from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariants';
import { CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner } from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner';
import { CatalogVariantDeleteQueryResourceObject } from './catalogVariantDeleteQueryResourceObject';
import { CatalogVariantEnum } from './catalogVariantEnum';
import { CatalogVariantResponseObjectResource } from './catalogVariantResponseObjectResource';
import { CatalogVariantResponseObjectResourceAttributes } from './catalogVariantResponseObjectResourceAttributes';
import { CatalogVariantResponseObjectResourceRelationships } from './catalogVariantResponseObjectResourceRelationships';
import { CatalogVariantResponseObjectResourceRelationshipsItem } from './catalogVariantResponseObjectResourceRelationshipsItem';
import { CatalogVariantResponseObjectResourceRelationshipsItemData } from './catalogVariantResponseObjectResourceRelationshipsItemData';
import { CatalogVariantUpdateJobCreateQuery } from './catalogVariantUpdateJobCreateQuery';
import { CatalogVariantUpdateJobCreateQueryResourceObject } from './catalogVariantUpdateJobCreateQueryResourceObject';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributes } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantUpdateJobResponseObjectResource } from './catalogVariantUpdateJobResponseObjectResource';
import { CatalogVariantUpdateJobResponseObjectResourceRelationships } from './catalogVariantUpdateJobResponseObjectResourceRelationships';
import { CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariants } from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariants';
import { CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner } from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner';
import { CatalogVariantUpdateQuery } from './catalogVariantUpdateQuery';
import { CatalogVariantUpdateQueryResourceObject } from './catalogVariantUpdateQueryResourceObject';
import { CatalogVariantUpdateQueryResourceObjectAttributes } from './catalogVariantUpdateQueryResourceObjectAttributes';
import { Channel } from './channel';
import { ChannelProperties } from './channelProperties';
import { ChannelSettings } from './channelSettings';
import { Checkboxes } from './checkboxes';
import { CheckboxesProperties } from './checkboxesProperties';
import { CheckboxesStyles } from './checkboxesStyles';
import { CheckoutMethodFilter } from './checkoutMethodFilter';
import { Close } from './close';
import { CloseButtonStyle } from './closeButtonStyle';
import { CloseProperties } from './closeProperties';
import { CodeAction } from './codeAction';
import { CollectionLinks } from './collectionLinks';
import { ColumnStyles } from './columnStyles';
import { ColumnV0 } from './columnV0';
import { ColumnV1 } from './columnV1';
import { ColumnV1BlocksInner } from './columnV1BlocksInner';
import { ConditionGroup } from './conditionGroup';
import { ConditionGroupConditionsInner } from './conditionGroupConditionsInner';
import { ConditionalBranchAction } from './conditionalBranchAction';
import { ConditionalBranchActionData } from './conditionalBranchActionData';
import { ConditionalBranchActionDataProfileFilter } from './conditionalBranchActionDataProfileFilter';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import { ConstantContactIntegrationFilter } from './constantContactIntegrationFilter';
import { ConstantContactIntegrationMethodFilter } from './constantContactIntegrationMethodFilter';
import { ConstantPropertyMapping } from './constantPropertyMapping';
import { ConstantPropertyMappingValue } from './constantPropertyMappingValue';
import { ContactInformation } from './contactInformation';
import { ContentExperimentAction } from './contentExperimentAction';
import { ContentExperimentActionData } from './contentExperimentActionData';
import { ContentExperimentActionDataCurrentExperiment } from './contentExperimentActionDataCurrentExperiment';
import { ContentExperimentActionDataMainAction } from './contentExperimentActionDataMainAction';
import { ContentRepeatV0 } from './contentRepeatV0';
import { ContentRepeatV1 } from './contentRepeatV1';
import { ConversationEnum } from './conversationEnum';
import { ConversationMessageCreateQuery } from './conversationMessageCreateQuery';
import { ConversationMessageCreateQueryResourceObject } from './conversationMessageCreateQueryResourceObject';
import { ConversationMessageCreateQueryResourceObjectAttributes } from './conversationMessageCreateQueryResourceObjectAttributes';
import { ConversationMessageCreateQueryResourceObjectRelationships } from './conversationMessageCreateQueryResourceObjectRelationships';
import { ConversationMessageCreateQueryResourceObjectRelationshipsConversation } from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
import { ConversationMessageCreateQueryResourceObjectRelationshipsConversationData } from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
import { ConversationMessageEnum } from './conversationMessageEnum';
import { ConversationResponseObjectResource } from './conversationResponseObjectResource';
import { ConversationResponseObjectResourceAttributes } from './conversationResponseObjectResourceAttributes';
import { ConversationResponseObjectResourceRelationships } from './conversationResponseObjectResourceRelationships';
import { ConversationResponseObjectResourceRelationshipsProfile } from './conversationResponseObjectResourceRelationshipsProfile';
import { CountdownDelayAction } from './countdownDelayAction';
import { CountdownDelayActionData } from './countdownDelayActionData';
import { CountdownTimer } from './countdownTimer';
import { CountdownTimerProperties } from './countdownTimerProperties';
import { CountdownTimerPropertiesConfiguration } from './countdownTimerPropertiesConfiguration';
import { CountdownTimerStyles } from './countdownTimerStyles';
import { Coupon } from './coupon';
import { CouponBlockData } from './couponBlockData';
import { CouponBlockProperties } from './couponBlockProperties';
import { CouponBlockStyles } from './couponBlockStyles';
import { CouponBlockV0 } from './couponBlockV0';
import { CouponBlockV0Data } from './couponBlockV0Data';
import { CouponBlockV1 } from './couponBlockV1';
import { CouponCodeBulkCreateJobEnum } from './couponCodeBulkCreateJobEnum';
import { CouponCodeCreateJobCreateQuery } from './couponCodeCreateJobCreateQuery';
import { CouponCodeCreateJobCreateQueryResourceObject } from './couponCodeCreateJobCreateQueryResourceObject';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributes } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import { CouponCodeCreateJobResponseObjectResource } from './couponCodeCreateJobResponseObjectResource';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { CouponCodeCreateJobResponseObjectResourceRelationships } from './couponCodeCreateJobResponseObjectResourceRelationships';
import { CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes } from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes';
import { CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner } from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner';
import { CouponCodeCreateQuery } from './couponCodeCreateQuery';
import { CouponCodeCreateQueryResourceObject } from './couponCodeCreateQueryResourceObject';
import { CouponCodeCreateQueryResourceObjectAttributes } from './couponCodeCreateQueryResourceObjectAttributes';
import { CouponCodeCreateQueryResourceObjectRelationships } from './couponCodeCreateQueryResourceObjectRelationships';
import { CouponCodeCreateQueryResourceObjectRelationshipsCoupon } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import { CouponCodeEnum } from './couponCodeEnum';
import { CouponCodeResponseObjectResource } from './couponCodeResponseObjectResource';
import { CouponCodeResponseObjectResourceAttributes } from './couponCodeResponseObjectResourceAttributes';
import { CouponCodeResponseObjectResourceRelationships } from './couponCodeResponseObjectResourceRelationships';
import { CouponCodeResponseObjectResourceRelationshipsCoupon } from './couponCodeResponseObjectResourceRelationshipsCoupon';
import { CouponCodeResponseObjectResourceRelationshipsCouponData } from './couponCodeResponseObjectResourceRelationshipsCouponData';
import { CouponCodeResponseObjectResourceRelationshipsProfile } from './couponCodeResponseObjectResourceRelationshipsProfile';
import { CouponCodeResponseObjectResourceRelationshipsProfileData } from './couponCodeResponseObjectResourceRelationshipsProfileData';
import { CouponCodeUpdateQuery } from './couponCodeUpdateQuery';
import { CouponCodeUpdateQueryResourceObject } from './couponCodeUpdateQueryResourceObject';
import { CouponCodeUpdateQueryResourceObjectAttributes } from './couponCodeUpdateQueryResourceObjectAttributes';
import { CouponCreateQuery } from './couponCreateQuery';
import { CouponCreateQueryResourceObject } from './couponCreateQueryResourceObject';
import { CouponEnum } from './couponEnum';
import { CouponProperties } from './couponProperties';
import { CouponPropertiesCoupon } from './couponPropertiesCoupon';
import { CouponResponseObjectResource } from './couponResponseObjectResource';
import { CouponResponseObjectResourceAttributes } from './couponResponseObjectResourceAttributes';
import { CouponStyles } from './couponStyles';
import { CouponUpdateQuery } from './couponUpdateQuery';
import { CouponUpdateQueryResourceObject } from './couponUpdateQueryResourceObject';
import { CouponUpdateQueryResourceObjectAttributes } from './couponUpdateQueryResourceObjectAttributes';
import { CustomCss } from './customCss';
import { CustomHTML } from './customHTML';
import { CustomHTMLProperties } from './customHTMLProperties';
import { CustomJavascript } from './customJavascript';
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
import { CustomMetricResponseObjectResourceRelationships } from './customMetricResponseObjectResourceRelationships';
import { CustomMetricResponseObjectResourceRelationshipsMetrics } from './customMetricResponseObjectResourceRelationshipsMetrics';
import { CustomMetricResponseObjectResourceRelationshipsMetricsDataInner } from './customMetricResponseObjectResourceRelationshipsMetricsDataInner';
import { CustomObjectDateTrigger } from './customObjectDateTrigger';
import { CustomObjectPropertyCondition } from './customObjectPropertyCondition';
import { CustomObjectRelationshipSource } from './customObjectRelationshipSource';
import { CustomObjectTriggerCondition } from './customObjectTriggerCondition';
import { CustomObjectTriggerConditionFilter } from './customObjectTriggerConditionFilter';
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
import { DataSourceRecordCreateJobCreateQuery } from './dataSourceRecordCreateJobCreateQuery';
import { DataSourceRecordCreateJobCreateQueryResourceObject } from './dataSourceRecordCreateJobCreateQueryResourceObject';
import { DataSourceRecordCreateJobCreateQueryResourceObjectAttributes } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
import { DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
import { DataSourceRecordCreateJobEnum } from './dataSourceRecordCreateJobEnum';
import { DataSourceRecordEnum } from './dataSourceRecordEnum';
import { DataSourceRecordResourceObject } from './dataSourceRecordResourceObject';
import { DataSourceRecordResourceObjectAttributes } from './dataSourceRecordResourceObjectAttributes';
import { DataSourceResponseObjectResource } from './dataSourceResponseObjectResource';
import { DataSourceResponseObjectResourceAttributes } from './dataSourceResponseObjectResourceAttributes';
import { DataWarehouseImportMethodFilter } from './dataWarehouseImportMethodFilter';
import { DateProperties } from './dateProperties';
import { DateStyles } from './dateStyles';
import { Delay } from './delay';
import { DelayProperties } from './delayProperties';
import { Device } from './device';
import { DeviceMetadata } from './deviceMetadata';
import { DeviceProperties } from './deviceProperties';
import { DisplayOptions } from './displayOptions';
import { DoubleOptinFilter } from './doubleOptinFilter';
import { DropShadow } from './dropShadow';
import { DropShadowBlockData } from './dropShadowBlockData';
import { DropShadowBlockStyles } from './dropShadowBlockStyles';
import { DropShadowBlockV0 } from './dropShadowBlockV0';
import { DropShadowBlockV1 } from './dropShadowBlockV1';
import { Dropdown } from './dropdown';
import { DropdownProperties } from './dropdownProperties';
import { DropdownStyles } from './dropdownStyles';
import { DynamicButton } from './dynamicButton';
import { DynamicImageBlockProperties } from './dynamicImageBlockProperties';
import { DynamicProductBlockProperties } from './dynamicProductBlockProperties';
import { DynamicReviewBlockProperties } from './dynamicReviewBlockProperties';
import { DynamicTableBlockProperties } from './dynamicTableBlockProperties';
import { DynamicTrackingParam } from './dynamicTrackingParam';
import { EffectiveDateFilter } from './effectiveDateFilter';
import { Email } from './email';
import { EmailChannel } from './emailChannel';
import { EmailContent } from './emailContent';
import { EmailContentSubObject } from './emailContentSubObject';
import { EmailMarketing } from './emailMarketing';
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';
import { EmailMessageDefinition } from './emailMessageDefinition';
import { EmailProperties } from './emailProperties';
import { EmailSendOptions } from './emailSendOptions';
import { EmailStyles } from './emailStyles';
import { EmailSubscriptionParameters } from './emailSubscriptionParameters';
import { EmailUnsubscriptionParameters } from './emailUnsubscriptionParameters';
import { EmbeddedObjectSchemaResourceObject } from './embeddedObjectSchemaResourceObject';
import { EmbeddedObjectSchemaResourceObjectAttributes } from './embeddedObjectSchemaResourceObjectAttributes';
import { EmbeddedObjectSchemaResourceObjectAttributesSourceMapping } from './embeddedObjectSchemaResourceObjectAttributesSourceMapping';
import { EncodedFormResponseObjectResource } from './encodedFormResponseObjectResource';
import { EncodedFormResponseObjectResourceAttributes } from './encodedFormResponseObjectResourceAttributes';
import { EqualsStringFilter } from './equalsStringFilter';
import { ErrorMessages } from './errorMessages';
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
import { EventResponseObjectResourceRelationships } from './eventResponseObjectResourceRelationships';
import { EventResponseObjectResourceRelationshipsAttributions } from './eventResponseObjectResourceRelationshipsAttributions';
import { EventResponseObjectResourceRelationshipsAttributionsDataInner } from './eventResponseObjectResourceRelationshipsAttributionsDataInner';
import { EventResponseObjectResourceRelationshipsMetric } from './eventResponseObjectResourceRelationshipsMetric';
import { EventResponseObjectResourceRelationshipsMetricData } from './eventResponseObjectResourceRelationshipsMetricData';
import { EventResponseObjectResourceRelationshipsProfile } from './eventResponseObjectResourceRelationshipsProfile';
import { EventResponseObjectResourceRelationshipsProfileData } from './eventResponseObjectResourceRelationshipsProfileData';
import { EventsBulkCreateJob } from './eventsBulkCreateJob';
import { EventsBulkCreateJobResourceObject } from './eventsBulkCreateJobResourceObject';
import { EventsBulkCreateJobResourceObjectAttributes } from './eventsBulkCreateJobResourceObjectAttributes';
import { EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import { EventsBulkCreateQueryResourceObject } from './eventsBulkCreateQueryResourceObject';
import { EventsBulkCreateQueryResourceObjectAttributes } from './eventsBulkCreateQueryResourceObjectAttributes';
import { EventsBulkCreateQueryResourceObjectAttributesEvents } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import { EventsBulkCreateQueryResourceObjectAttributesProfile } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import { ExistenceOperatorExistenceFilter } from './existenceOperatorExistenceFilter';
import { ExitIntent } from './exitIntent';
import { ExplicitlyReachable } from './explicitlyReachable';
import { ExplicitlyReachableFiltersInner } from './explicitlyReachableFiltersInner';
import { ExplicitlyUnreachable } from './explicitlyUnreachable';
import { FailedAgeGateMethodFilter } from './failedAgeGateMethodFilter';
import { FixedTimerConfiguration } from './fixedTimerConfiguration';
import { FlowActionEncodedResponseObjectResource } from './flowActionEncodedResponseObjectResource';
import { FlowActionEncodedResponseObjectResourceAttributes } from './flowActionEncodedResponseObjectResourceAttributes';
import { FlowActionEncodedResponseObjectResourceAttributesDefinition } from './flowActionEncodedResponseObjectResourceAttributesDefinition';
import { FlowActionEncodedResponseObjectResourceRelationships } from './flowActionEncodedResponseObjectResourceRelationships';
import { FlowActionEncodedResponseObjectResourceRelationshipsFlow } from './flowActionEncodedResponseObjectResourceRelationshipsFlow';
import { FlowActionEncodedResponseObjectResourceRelationshipsFlowMessages } from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessages';
import { FlowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner } from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner';
import { FlowActionEnum } from './flowActionEnum';
import { FlowActionUpdateQuery } from './flowActionUpdateQuery';
import { FlowActionUpdateQueryResourceObject } from './flowActionUpdateQueryResourceObject';
import { FlowActionUpdateQueryResourceObjectAttributes } from './flowActionUpdateQueryResourceObjectAttributes';
import { FlowActionUpdateQueryResourceObjectAttributesDefinition } from './flowActionUpdateQueryResourceObjectAttributesDefinition';
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
import { FlowEnum } from './flowEnum';
import { FlowInternalAlert } from './flowInternalAlert';
import { FlowMessageEncodedResponseObjectResource } from './flowMessageEncodedResponseObjectResource';
import { FlowMessageEncodedResponseObjectResourceAttributes } from './flowMessageEncodedResponseObjectResourceAttributes';
import { FlowMessageEncodedResponseObjectResourceAttributesDefinition } from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
import { FlowMessageEncodedResponseObjectResourceRelationships } from './flowMessageEncodedResponseObjectResourceRelationships';
import { FlowMessageEncodedResponseObjectResourceRelationshipsFlowAction } from './flowMessageEncodedResponseObjectResourceRelationshipsFlowAction';
import { FlowMessageEncodedResponseObjectResourceRelationshipsTemplate } from './flowMessageEncodedResponseObjectResourceRelationshipsTemplate';
import { FlowMessageEncodedResponseObjectResourceRelationshipsTemplateData } from './flowMessageEncodedResponseObjectResourceRelationshipsTemplateData';
import { FlowMessageEnum } from './flowMessageEnum';
import { FlowPushNotification } from './flowPushNotification';
import { FlowPushNotificationBadgeOptions } from './flowPushNotificationBadgeOptions';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { FlowResponseObjectResourceAttributes } from './flowResponseObjectResourceAttributes';
import { FlowResponseObjectResourceRelationships } from './flowResponseObjectResourceRelationships';
import { FlowResponseObjectResourceRelationshipsFlowActions } from './flowResponseObjectResourceRelationshipsFlowActions';
import { FlowResponseObjectResourceRelationshipsFlowActionsDataInner } from './flowResponseObjectResourceRelationshipsFlowActionsDataInner';
import { FlowResponseObjectResourceRelationshipsTags } from './flowResponseObjectResourceRelationshipsTags';
import { FlowResponseObjectResourceRelationshipsTagsDataInner } from './flowResponseObjectResourceRelationshipsTagsDataInner';
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { FlowSeriesRequestDTO } from './flowSeriesRequestDTO';
import { FlowSeriesRequestDTOResourceObject } from './flowSeriesRequestDTOResourceObject';
import { FlowSeriesRequestDTOResourceObjectAttributes } from './flowSeriesRequestDTOResourceObjectAttributes';
import { FlowSms } from './flowSms';
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
import { FlowWhatsApp } from './flowWhatsApp';
import { FlowsProfileMetricCondition } from './flowsProfileMetricCondition';
import { FlowsProfileMetricConditionTimeframeFilter } from './flowsProfileMetricConditionTimeframeFilter';
import { FormCreateQuery } from './formCreateQuery';
import { FormCreateQueryResourceObject } from './formCreateQueryResourceObject';
import { FormCreateQueryResourceObjectAttributes } from './formCreateQueryResourceObjectAttributes';
import { FormDefinition } from './formDefinition';
import { FormEnum } from './formEnum';
import { FormMethodFilter } from './formMethodFilter';
import { FormResponseObjectResource } from './formResponseObjectResource';
import { FormResponseObjectResourceAttributes } from './formResponseObjectResourceAttributes';
import { FormResponseObjectResourceRelationships } from './formResponseObjectResourceRelationships';
import { FormResponseObjectResourceRelationshipsFormVersions } from './formResponseObjectResourceRelationshipsFormVersions';
import { FormResponseObjectResourceRelationshipsFormVersionsDataInner } from './formResponseObjectResourceRelationshipsFormVersionsDataInner';
import { FormSeriesReportEnum } from './formSeriesReportEnum';
import { FormSeriesRequestDTO } from './formSeriesRequestDTO';
import { FormSeriesRequestDTOResourceObject } from './formSeriesRequestDTOResourceObject';
import { FormSeriesRequestDTOResourceObjectAttributes } from './formSeriesRequestDTOResourceObjectAttributes';
import { FormSubscribeFilter } from './formSubscribeFilter';
import { FormValuesReportEnum } from './formValuesReportEnum';
import { FormValuesRequestDTO } from './formValuesRequestDTO';
import { FormValuesRequestDTOResourceObject } from './formValuesRequestDTOResourceObject';
import { FormValuesRequestDTOResourceObjectAttributes } from './formValuesRequestDTOResourceObjectAttributes';
import { FormVersionABTest } from './formVersionABTest';
import { FormVersionEnum } from './formVersionEnum';
import { FormVersionResponseObjectResource } from './formVersionResponseObjectResource';
import { FormVersionResponseObjectResourceAttributes } from './formVersionResponseObjectResourceAttributes';
import { FormVersionResponseObjectResourceRelationships } from './formVersionResponseObjectResourceRelationships';
import { FormVersionResponseObjectResourceRelationshipsForm } from './formVersionResponseObjectResourceRelationshipsForm';
import { FormVersionResponseObjectResourceRelationshipsFormData } from './formVersionResponseObjectResourceRelationshipsFormData';
import { GetAccountResponse } from './getAccountResponse';
import { GetAccountResponseCollection } from './getAccountResponseCollection';
import { GetAccounts4XXResponse } from './getAccounts4XXResponse';
import { GetAccounts4XXResponseErrorsInner } from './getAccounts4XXResponseErrorsInner';
import { GetAccounts4XXResponseErrorsInnerSource } from './getAccounts4XXResponseErrorsInnerSource';
import { GetBulkProfileSuppressionsCreateJobResponse } from './getBulkProfileSuppressionsCreateJobResponse';
import { GetBulkProfileSuppressionsCreateJobResponseCollection } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import { GetBulkProfileSuppressionsRemoveJobResponse } from './getBulkProfileSuppressionsRemoveJobResponse';
import { GetBulkProfileSuppressionsRemoveJobResponseCollection } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import { GetCampaignMessageCampaignRelationshipResponse } from './getCampaignMessageCampaignRelationshipResponse';
import { GetCampaignMessageCampaignRelationshipResponseData } from './getCampaignMessageCampaignRelationshipResponseData';
import { GetCampaignMessageImageRelationshipResponse } from './getCampaignMessageImageRelationshipResponse';
import { GetCampaignMessageImageRelationshipResponseData } from './getCampaignMessageImageRelationshipResponseData';
import { GetCampaignMessageResponseCollectionCompoundDocument } from './getCampaignMessageResponseCollectionCompoundDocument';
import { GetCampaignMessageResponseCompoundDocument } from './getCampaignMessageResponseCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import { GetCampaignMessageTemplateRelationshipResponse } from './getCampaignMessageTemplateRelationshipResponse';
import { GetCampaignMessagesRelationshipsResponseCollection } from './getCampaignMessagesRelationshipsResponseCollection';
import { GetCampaignMessagesRelationshipsResponseCollectionDataInner } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import { GetCampaignRecipientEstimationJobResponse } from './getCampaignRecipientEstimationJobResponse';
import { GetCampaignRecipientEstimationResponse } from './getCampaignRecipientEstimationResponse';
import { GetCampaignResponse } from './getCampaignResponse';
import { GetCampaignResponseCollectionCompoundDocument } from './getCampaignResponseCollectionCompoundDocument';
import {  } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import { GetCampaignResponseCompoundDocument } from './getCampaignResponseCompoundDocument';
import { GetCampaignSendJobResponse } from './getCampaignSendJobResponse';
import { GetCampaignTagsRelationshipsResponseCollection } from './getCampaignTagsRelationshipsResponseCollection';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocument } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryCreateJobResponseCompoundDocument } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import { GetCatalogCategoryDeleteJobResponse } from './getCatalogCategoryDeleteJobResponse';
import { GetCatalogCategoryDeleteJobResponseCollection } from './getCatalogCategoryDeleteJobResponseCollection';
import { GetCatalogCategoryItemsRelationshipsResponseCollection } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import { GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import { GetCatalogCategoryResponse } from './getCatalogCategoryResponse';
import { GetCatalogCategoryResponseCollection } from './getCatalogCategoryResponseCollection';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryUpdateJobResponseCompoundDocument } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import { GetCatalogItemCategoriesRelationshipsResponseCollection } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import { GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocument } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import { GetCatalogItemCreateJobResponseCompoundDocument } from './getCatalogItemCreateJobResponseCompoundDocument';
import { GetCatalogItemDeleteJobResponse } from './getCatalogItemDeleteJobResponse';
import { GetCatalogItemDeleteJobResponseCollection } from './getCatalogItemDeleteJobResponseCollection';
import { GetCatalogItemResponseCollectionCompoundDocument } from './getCatalogItemResponseCollectionCompoundDocument';
import { GetCatalogItemResponseCompoundDocument } from './getCatalogItemResponseCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocument } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogItemUpdateJobResponseCompoundDocument } from './getCatalogItemUpdateJobResponseCompoundDocument';
import { GetCatalogItemVariantsRelationshipsResponseCollection } from './getCatalogItemVariantsRelationshipsResponseCollection';
import { GetCatalogItemVariantsRelationshipsResponseCollectionDataInner } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocument } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantCreateJobResponseCompoundDocument } from './getCatalogVariantCreateJobResponseCompoundDocument';
import { GetCatalogVariantDeleteJobResponse } from './getCatalogVariantDeleteJobResponse';
import { GetCatalogVariantDeleteJobResponseCollection } from './getCatalogVariantDeleteJobResponseCollection';
import { GetCatalogVariantResponse } from './getCatalogVariantResponse';
import { GetCatalogVariantResponseCollection } from './getCatalogVariantResponseCollection';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocument } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantUpdateJobResponseCompoundDocument } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import { GetConversationResponse } from './getConversationResponse';
import { GetConversationResponseCollection } from './getConversationResponseCollection';
import { GetCouponCodeCouponRelationshipResponse } from './getCouponCodeCouponRelationshipResponse';
import { GetCouponCodeCouponRelationshipResponseData } from './getCouponCodeCouponRelationshipResponseData';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocument } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import { GetCouponCodeCreateJobResponseCompoundDocument } from './getCouponCodeCreateJobResponseCompoundDocument';
import { GetCouponCodeResponseCollection } from './getCouponCodeResponseCollection';
import { GetCouponCodeResponseCollectionCompoundDocument } from './getCouponCodeResponseCollectionCompoundDocument';
import { GetCouponCodeResponseCompoundDocument } from './getCouponCodeResponseCompoundDocument';
import { GetCouponCodesRelationshipsResponseCollection } from './getCouponCodesRelationshipsResponseCollection';
import { GetCouponCodesRelationshipsResponseCollectionDataInner } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import { GetCouponResponse } from './getCouponResponse';
import { GetCouponResponseCollection } from './getCouponResponseCollection';
import { GetCustomMetricMetricsRelationshipsResponseCollection } from './getCustomMetricMetricsRelationshipsResponseCollection';
import { GetCustomMetricResponse } from './getCustomMetricResponse';
import { GetCustomMetricResponseCollectionCompoundDocument } from './getCustomMetricResponseCollectionCompoundDocument';
import { GetCustomMetricResponseCompoundDocument } from './getCustomMetricResponseCompoundDocument';
import { GetDataSourceResponse } from './getDataSourceResponse';
import { GetDataSourceResponseCollection } from './getDataSourceResponseCollection';
import { GetEncodedFormResponse } from './getEncodedFormResponse';
import { GetEventMetricRelationshipResponse } from './getEventMetricRelationshipResponse';
import { GetEventMetricRelationshipResponseData } from './getEventMetricRelationshipResponseData';
import { GetEventProfileRelationshipResponse } from './getEventProfileRelationshipResponse';
import { GetEventProfileRelationshipResponseData } from './getEventProfileRelationshipResponseData';
import { GetEventResponseCollectionCompoundDocument } from './getEventResponseCollectionCompoundDocument';
import {  } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import { GetEventResponseCompoundDocument } from './getEventResponseCompoundDocument';
import { GetFlowActionEncodedResponse } from './getFlowActionEncodedResponse';
import { GetFlowActionEncodedResponseCollection } from './getFlowActionEncodedResponseCollection';
import { GetFlowActionEncodedResponseCompoundDocument } from './getFlowActionEncodedResponseCompoundDocument';
import {  } from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
import { GetFlowActionFlowMessageRelationshipResponseCollection } from './getFlowActionFlowMessageRelationshipResponseCollection';
import { GetFlowActionFlowRelationshipResponse } from './getFlowActionFlowRelationshipResponse';
import { GetFlowActionFlowRelationshipResponseData } from './getFlowActionFlowRelationshipResponseData';
import { GetFlowFlowActionRelationshipListResponseCollection } from './getFlowFlowActionRelationshipListResponseCollection';
import { GetFlowMessageActionRelationshipResponse } from './getFlowMessageActionRelationshipResponse';
import { GetFlowMessageActionRelationshipResponseData } from './getFlowMessageActionRelationshipResponseData';
import { GetFlowMessageEncodedResponseCollection } from './getFlowMessageEncodedResponseCollection';
import { GetFlowMessageEncodedResponseCompoundDocument } from './getFlowMessageEncodedResponseCompoundDocument';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
import { GetFlowMessageTemplateRelationshipResponse } from './getFlowMessageTemplateRelationshipResponse';
import { GetFlowMessageTemplateRelationshipResponseData } from './getFlowMessageTemplateRelationshipResponseData';
import { GetFlowResponse } from './getFlowResponse';
import { GetFlowResponseCollection } from './getFlowResponseCollection';
import { GetFlowResponseCollectionCompoundDocument } from './getFlowResponseCollectionCompoundDocument';
import {  } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import { GetFlowTagsRelationshipsResponseCollection } from './getFlowTagsRelationshipsResponseCollection';
import { GetFlowV2ResponseCompoundDocument } from './getFlowV2ResponseCompoundDocument';
import { GetFormResponse } from './getFormResponse';
import { GetFormResponseCollection } from './getFormResponseCollection';
import { GetFormVersionFormRelationshipResponse } from './getFormVersionFormRelationshipResponse';
import { GetFormVersionFormRelationshipResponseData } from './getFormVersionFormRelationshipResponseData';
import { GetFormVersionResponseCollection } from './getFormVersionResponseCollection';
import { GetFormVersionResponseCompoundDocument } from './getFormVersionResponseCompoundDocument';
import { GetFormVersionsRelationshipsResponseCollection } from './getFormVersionsRelationshipsResponseCollection';
import { GetFormVersionsRelationshipsResponseCollectionDataInner } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import { GetImageResponse } from './getImageResponse';
import { GetImageResponseCollection } from './getImageResponseCollection';
import { GetImportErrorResponseCollection } from './getImportErrorResponseCollection';
import { GetIngestionLogResponseCollectionCompoundDocument } from './getIngestionLogResponseCollectionCompoundDocument';
import {  } from './getIngestionLogResponseCollectionCompoundDocumentIncludedInner';
import { GetListFlowTriggersRelationshipsResponseCollection } from './getListFlowTriggersRelationshipsResponseCollection';
import { GetListListResponseCollectionCompoundDocument } from './getListListResponseCollectionCompoundDocument';
import {  } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import { GetListMemberResponseCollection } from './getListMemberResponseCollection';
import { GetListProfilesRelationshipsResponseCollection } from './getListProfilesRelationshipsResponseCollection';
import { GetListProfilesRelationshipsResponseCollectionDataInner } from './getListProfilesRelationshipsResponseCollectionDataInner';
import { GetListResponseCollection } from './getListResponseCollection';
import { GetListRetrieveResponseCompoundDocument } from './getListRetrieveResponseCompoundDocument';
import { GetListTagsRelationshipsResponseCollection } from './getListTagsRelationshipsResponseCollection';
import { GetListTagsRelationshipsResponseCollectionDataInner } from './getListTagsRelationshipsResponseCollectionDataInner';
import { GetMappedMetricCustomMetricRelationshipResponse } from './getMappedMetricCustomMetricRelationshipResponse';
import { GetMappedMetricCustomMetricRelationshipResponseData } from './getMappedMetricCustomMetricRelationshipResponseData';
import { GetMappedMetricMetricRelationshipResponse } from './getMappedMetricMetricRelationshipResponse';
import { GetMappedMetricResponseCollectionCompoundDocument } from './getMappedMetricResponseCollectionCompoundDocument';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import { GetMappedMetricResponseCompoundDocument } from './getMappedMetricResponseCompoundDocument';
import { GetMetricFlowTriggersRelationshipsResponseCollection } from './getMetricFlowTriggersRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollection } from './getMetricPropertiesRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollectionDataInner } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import { GetMetricPropertyMetricRelationshipResponse } from './getMetricPropertyMetricRelationshipResponse';
import { GetMetricPropertyResponseCollection } from './getMetricPropertyResponseCollection';
import { GetMetricPropertyResponseCompoundDocument } from './getMetricPropertyResponseCompoundDocument';
import { GetMetricResponse } from './getMetricResponse';
import { GetMetricResponseCollection } from './getMetricResponseCollection';
import { GetMetricResponseCollectionCompoundDocument } from './getMetricResponseCollectionCompoundDocument';
import { GetMetricResponseCompoundDocument } from './getMetricResponseCompoundDocument';
import { GetObjectRecordResponse } from './getObjectRecordResponse';
import { GetObjectRecordResponseCollection } from './getObjectRecordResponseCollection';
import { GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollection } from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollection';
import { GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner } from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner';
import { GetObjectSchemaResponse } from './getObjectSchemaResponse';
import { GetObjectSchemaResponseCollection } from './getObjectSchemaResponseCollection';
import { GetObjectSchemaResponseCompoundDocument } from './getObjectSchemaResponseCompoundDocument';
import {  } from './getObjectSchemaResponseCompoundDocumentIncludedInner';
import { GetObjectSchemaSchemasRelationshipsResponseCollection } from './getObjectSchemaSchemasRelationshipsResponseCollection';
import { GetObjectSchemaSchemasRelationshipsResponseCollectionDataInner } from './getObjectSchemaSchemasRelationshipsResponseCollectionDataInner';
import { GetObjectSchemaSourceMappingRelationshipResponse } from './getObjectSchemaSourceMappingRelationshipResponse';
import { GetObjectSchemaSourceMappingRelationshipResponseData } from './getObjectSchemaSourceMappingRelationshipResponseData';
import { GetObjectTypeCurrentSchemaRelationshipResponse } from './getObjectTypeCurrentSchemaRelationshipResponse';
import { GetObjectTypeCurrentSchemaRelationshipResponseData } from './getObjectTypeCurrentSchemaRelationshipResponseData';
import { GetObjectTypeDraftSchemaRelationshipResponse } from './getObjectTypeDraftSchemaRelationshipResponse';
import { GetObjectTypeIngestionLogsRelationshipsResponseCollection } from './getObjectTypeIngestionLogsRelationshipsResponseCollection';
import { GetObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner } from './getObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner';
import { GetObjectTypeProfileObjectTypesRelationshipsResponseCollection } from './getObjectTypeProfileObjectTypesRelationshipsResponseCollection';
import { GetObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner } from './getObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner';
import { GetObjectTypeRecordsRelationshipsResponseCollection } from './getObjectTypeRecordsRelationshipsResponseCollection';
import { GetObjectTypeRecordsRelationshipsResponseCollectionDataInner } from './getObjectTypeRecordsRelationshipsResponseCollectionDataInner';
import { GetObjectTypeResponseCollectionCompoundDocument } from './getObjectTypeResponseCollectionCompoundDocument';
import { GetObjectTypeResponseCompoundDocument } from './getObjectTypeResponseCompoundDocument';
import {  } from './getObjectTypeResponseCompoundDocumentIncludedInner';
import { GetObjectTypeSchemaVersionsRelationshipsResponseCollection } from './getObjectTypeSchemaVersionsRelationshipsResponseCollection';
import { GetObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner } from './getObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner';
import { GetObjectTypeTypesRelationshipsResponseCollection } from './getObjectTypeTypesRelationshipsResponseCollection';
import { GetObjectTypeTypesRelationshipsResponseCollectionDataInner } from './getObjectTypeTypesRelationshipsResponseCollectionDataInner';
import { GetProfileBulkImportJobListsRelationshipsResponseCollection } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import { GetProfileBulkImportJobProfilesRelationshipsResponseCollection } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import { GetProfileConversationRelationshipResponse } from './getProfileConversationRelationshipResponse';
import { GetProfileConversationRelationshipResponseData } from './getProfileConversationRelationshipResponseData';
import { GetProfileConversationsRelationshipsResponseCollection } from './getProfileConversationsRelationshipsResponseCollection';
import { GetProfileConversationsRelationshipsResponseCollectionDataInner } from './getProfileConversationsRelationshipsResponseCollectionDataInner';
import { GetProfileImportJobResponseCollectionCompoundDocument } from './getProfileImportJobResponseCollectionCompoundDocument';
import { GetProfileImportJobResponseCompoundDocument } from './getProfileImportJobResponseCompoundDocument';
import { GetProfileListsRelationshipsResponseCollection } from './getProfileListsRelationshipsResponseCollection';
import { GetProfileListsRelationshipsResponseCollectionDataInner } from './getProfileListsRelationshipsResponseCollectionDataInner';
import { GetProfilePushTokensRelationshipsResponseCollection } from './getProfilePushTokensRelationshipsResponseCollection';
import { GetProfilePushTokensRelationshipsResponseCollectionDataInner } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import { GetProfileResponse } from './getProfileResponse';
import { GetProfileResponseCollection } from './getProfileResponseCollection';
import { GetProfileResponsePluralConversationsCollectionCompoundDocument } from './getProfileResponsePluralConversationsCollectionCompoundDocument';
import {  } from './getProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInner';
import { GetProfileResponsePluralConversationsCompoundDocument } from './getProfileResponsePluralConversationsCompoundDocument';
import {  } from './getProfileResponsePluralConversationsCompoundDocumentIncludedInner';
import { GetProfileSegmentsRelationshipsResponseCollection } from './getProfileSegmentsRelationshipsResponseCollection';
import { GetPushTokenProfileRelationshipResponse } from './getPushTokenProfileRelationshipResponse';
import { GetPushTokenResponseCollection } from './getPushTokenResponseCollection';
import { GetPushTokenResponseCollectionCompoundDocument } from './getPushTokenResponseCollectionCompoundDocument';
import { GetPushTokenResponseCompoundDocument } from './getPushTokenResponseCompoundDocument';
import { GetReviewResponseDTOCollectionCompoundDocument } from './getReviewResponseDTOCollectionCompoundDocument';
import { GetReviewResponseDTOCompoundDocument } from './getReviewResponseDTOCompoundDocument';
import { GetSegmentFlowTriggersRelationshipsResponseCollection } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import { GetSegmentListResponseCollectionCompoundDocument } from './getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentMemberResponseCollection } from './getSegmentMemberResponseCollection';
import { GetSegmentProfilesRelationshipsResponseCollection } from './getSegmentProfilesRelationshipsResponseCollection';
import { GetSegmentResponseCollection } from './getSegmentResponseCollection';
import { GetSegmentRetrieveResponseCompoundDocument } from './getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentTagsRelationshipsResponseCollection } from './getSegmentTagsRelationshipsResponseCollection';
import { GetSourceMappingResponse } from './getSourceMappingResponse';
import { GetTagCampaignRelationshipsResponseCollection } from './getTagCampaignRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollectionDataInner } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import { GetTagFlowRelationshipsResponseCollection } from './getTagFlowRelationshipsResponseCollection';
import { GetTagFlowRelationshipsResponseCollectionDataInner } from './getTagFlowRelationshipsResponseCollectionDataInner';
import { GetTagGroupRelationshipResponse } from './getTagGroupRelationshipResponse';
import { GetTagGroupRelationshipResponseData } from './getTagGroupRelationshipResponseData';
import { GetTagGroupResponse } from './getTagGroupResponse';
import { GetTagGroupResponseCollection } from './getTagGroupResponseCollection';
import { GetTagGroupTagsRelationshipsResponseCollection } from './getTagGroupTagsRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollection } from './getTagListRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollectionDataInner } from './getTagListRelationshipsResponseCollectionDataInner';
import { GetTagResponseCollection } from './getTagResponseCollection';
import { GetTagResponseCollectionCompoundDocument } from './getTagResponseCollectionCompoundDocument';
import { GetTagResponseCompoundDocument } from './getTagResponseCompoundDocument';
import { GetTagSegmentRelationshipsResponseCollection } from './getTagSegmentRelationshipsResponseCollection';
import { GetTagSegmentRelationshipsResponseCollectionDataInner } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import { GetTemplateDndResponse } from './getTemplateDndResponse';
import { GetTemplateDndResponseCollection } from './getTemplateDndResponseCollection';
import { GetTemplateResponse } from './getTemplateResponse';
import { GetTrackingSettingResponse } from './getTrackingSettingResponse';
import { GetTrackingSettingResponseCollection } from './getTrackingSettingResponseCollection';
import { GetUniversalContentResponse } from './getUniversalContentResponse';
import { GetUniversalContentResponseCollection } from './getUniversalContentResponseCollection';
import { GetWebFeedResponse } from './getWebFeedResponse';
import { GetWebFeedResponseCollection } from './getWebFeedResponseCollection';
import { GetWebhookResponseCollectionCompoundDocument } from './getWebhookResponseCollectionCompoundDocument';
import { GetWebhookResponseCompoundDocument } from './getWebhookResponseCompoundDocument';
import { GetWebhookTopicResponse } from './getWebhookTopicResponse';
import { GetWebhookTopicResponseCollection } from './getWebhookTopicResponseCollection';
import { GoToInbox } from './goToInbox';
import { GreaterThanPositiveNumericFilter } from './greaterThanPositiveNumericFilter';
import { HTMLBlockDataV0 } from './hTMLBlockDataV0';
import { HTMLBlockDataV1 } from './hTMLBlockDataV1';
import { HTMLBlockV0 } from './hTMLBlockV0';
import { HTMLBlockV1 } from './hTMLBlockV1';
import { HTMLText } from './hTMLText';
import { HTMLTextProperties } from './hTMLTextProperties';
import { HTMLTextStyles } from './hTMLTextStyles';
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
import { HeaderBlockData } from './headerBlockData';
import { HeaderBlockStyles } from './headerBlockStyles';
import { HeaderBlockV0 } from './headerBlockV0';
import { HeaderBlockV1 } from './headerBlockV1';
import { HeaderBlockV1SubblocksInner } from './headerBlockV1SubblocksInner';
import { HeaderImageSubBlock } from './headerImageSubBlock';
import { HeaderLinkSubBlock } from './headerLinkSubBlock';
import { HeaderLogoSubBlock } from './headerLogoSubBlock';
import { Heading1Style } from './heading1Style';
import { Heading2Style } from './heading2Style';
import { Heading3Style } from './heading3Style';
import { Heading4Style } from './heading4Style';
import { HeadingStyleStyles } from './headingStyleStyles';
import { HorizontalRuleBlockData } from './horizontalRuleBlockData';
import { HorizontalRuleBlockStyles } from './horizontalRuleBlockStyles';
import { HorizontalRuleBlockV0 } from './horizontalRuleBlockV0';
import { HorizontalRuleBlockV1 } from './horizontalRuleBlockV1';
import { IafDeeplinkToScreen } from './iafDeeplinkToScreen';
import { IafDeeplinkToScreenProperties } from './iafDeeplinkToScreenProperties';
import { IdentifiedProfiles } from './identifiedProfiles';
import { Image } from './image';
import { ImageAction } from './imageAction';
import { ImageAssetProperties } from './imageAssetProperties';
import { ImageBlockCroppingProperties } from './imageBlockCroppingProperties';
import { ImageBlockData } from './imageBlockData';
import { ImageBlockDataProperties } from './imageBlockDataProperties';
import { ImageBlockStyles } from './imageBlockStyles';
import { ImageBlockV0 } from './imageBlockV0';
import { ImageBlockV1 } from './imageBlockV1';
import { ImageCreateQuery } from './imageCreateQuery';
import { ImageCreateQueryResourceObject } from './imageCreateQueryResourceObject';
import { ImageCreateQueryResourceObjectAttributes } from './imageCreateQueryResourceObjectAttributes';
import { ImageDropShadowStyles } from './imageDropShadowStyles';
import { ImageEnum } from './imageEnum';
import { ImagePartialUpdateQuery } from './imagePartialUpdateQuery';
import { ImagePartialUpdateQueryResourceObject } from './imagePartialUpdateQueryResourceObject';
import { ImagePartialUpdateQueryResourceObjectAttributes } from './imagePartialUpdateQueryResourceObjectAttributes';
import { ImageProperties } from './imageProperties';
import { ImageResponseObjectResource } from './imageResponseObjectResource';
import { ImageResponseObjectResourceAttributes } from './imageResponseObjectResourceAttributes';
import { ImageStyles } from './imageStyles';
import { ImmediateSendStrategy } from './immediateSendStrategy';
import { ImplicitlyOrExplicitlyReachable } from './implicitlyOrExplicitlyReachable';
import { ImplicitlyOrExplicitlyUnreachable } from './implicitlyOrExplicitlyUnreachable';
import { ImplicitlyReachable } from './implicitlyReachable';
import { ImplicitlyUnreachable } from './implicitlyUnreachable';
import { ImportErrorEnum } from './importErrorEnum';
import { ImportErrorResponseObjectResource } from './importErrorResponseObjectResource';
import { ImportErrorResponseObjectResourceAttributes } from './importErrorResponseObjectResourceAttributes';
import { InStringArrayFilter } from './inStringArrayFilter';
import { InTheLastBaseRelativeDateFilter } from './inTheLastBaseRelativeDateFilter';
import { InboundMessageMethodFilter } from './inboundMessageMethodFilter';
import { Increment } from './increment';
import { IngestionLogErrorDetail } from './ingestionLogErrorDetail';
import { IngestionLogResponseObjectResource } from './ingestionLogResponseObjectResource';
import { IngestionLogResponseObjectResourceAttributes } from './ingestionLogResponseObjectResourceAttributes';
import { IngestionLogResponseObjectResourceRelationships } from './ingestionLogResponseObjectResourceRelationships';
import { IngestionLogResponseObjectResourceRelationshipsObjectRecord } from './ingestionLogResponseObjectResourceRelationshipsObjectRecord';
import { IngestionLogResponseObjectResourceRelationshipsObjectRecordData } from './ingestionLogResponseObjectResourceRelationshipsObjectRecordData';
import { IngestionLogResponseObjectResourceRelationshipsObjectType } from './ingestionLogResponseObjectResourceRelationshipsObjectType';
import { IngestionLogResponseObjectResourceRelationshipsObjectTypeData } from './ingestionLogResponseObjectResourceRelationshipsObjectTypeData';
import { InputStyles } from './inputStyles';
import { IntegerFilter } from './integerFilter';
import { InternalScheduledReportBuilderReportData } from './internalScheduledReportBuilderReportData';
import { InternalScheduledReportData } from './internalScheduledReportData';
import { InternalServiceAction } from './internalServiceAction';
import { InternalServiceActionData } from './internalServiceActionData';
import { InternalServiceActionDataServiceConfiguration } from './internalServiceActionDataServiceConfiguration';
import { InternalTrackEventData } from './internalTrackEventData';
import { InternalUnknownServiceData } from './internalUnknownServiceData';
import { InvalidEmailDateFilter } from './invalidEmailDateFilter';
import { IpAllowlistResourceName } from './ipAllowlistResourceName';
import { IpAllowlistResponse } from './ipAllowlistResponse';
import { IpAllowlistResponseData } from './ipAllowlistResponseData';
import { IpAllowlistResponseDataWrapper } from './ipAllowlistResponseDataWrapper';
import { IsSetExistenceFilter } from './isSetExistenceFilter';
import { LessThanPositiveNumericFilter } from './lessThanPositiveNumericFilter';
import { Link } from './link';
import { LinkStyle } from './linkStyle';
import { LinkStyleStyles } from './linkStyleStyles';
import { LinkStyles } from './linkStyles';
import { ListContainsOperatorListContainsFilter } from './listContainsOperatorListContainsFilter';
import { ListContainsOperatorListContainsFilterValue } from './listContainsOperatorListContainsFilterValue';
import { ListCreateQuery } from './listCreateQuery';
import { ListCreateQueryResourceObject } from './listCreateQueryResourceObject';
import { ListCreateQueryResourceObjectAttributes } from './listCreateQueryResourceObjectAttributes';
import { ListEnum } from './listEnum';
import { ListLengthFilter } from './listLengthFilter';
import { ListListResponseObjectResource } from './listListResponseObjectResource';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListListResponseObjectResourceRelationships } from './listListResponseObjectResourceRelationships';
import { ListListResponseObjectResourceRelationshipsProfiles } from './listListResponseObjectResourceRelationshipsProfiles';
import { ListListResponseObjectResourceRelationshipsProfilesDataInner } from './listListResponseObjectResourceRelationshipsProfilesDataInner';
import { ListMemberResponseObjectResourceAttributes } from './listMemberResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceExtended } from './listMemberResponseObjectResourceExtended';
import { ListMemberResponseObjectResourceExtendedAttributes } from './listMemberResponseObjectResourceExtendedAttributes';
import { ListMembersAddQuery } from './listMembersAddQuery';
import { ListMembersDeleteQuery } from './listMembersDeleteQuery';
import { ListPartialUpdateQuery } from './listPartialUpdateQuery';
import { ListPartialUpdateQueryResourceObject } from './listPartialUpdateQueryResourceObject';
import { ListPartialUpdateQueryResourceObjectAttributes } from './listPartialUpdateQueryResourceObjectAttributes';
import { ListRegexOperatorListContainsFilter } from './listRegexOperatorListContainsFilter';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';
import { ListRetrieveResponseObjectResourceExtended } from './listRetrieveResponseObjectResourceExtended';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { ListSetFilter } from './listSetFilter';
import { ListSubstringFilter } from './listSubstringFilter';
import { ListTrigger } from './listTrigger';
import { ListUpdateAction } from './listUpdateAction';
import { ListUpdateActionData } from './listUpdateActionData';
import { ListsAndSegments } from './listsAndSegments';
import { ListsAndSegmentsProperties } from './listsAndSegmentsProperties';
import { LocalStaticSend } from './localStaticSend';
import { Location } from './location';
import { LocationProperties } from './locationProperties';
import { LocationPropertiesAllowListInner } from './locationPropertiesAllowListInner';
import { LowInventoryCondition } from './lowInventoryCondition';
import { LowInventoryTrigger } from './lowInventoryTrigger';
import { LowInventoryTriggerTriggerFilter } from './lowInventoryTriggerTriggerFilter';
import { LowInventoryTriggerTriggerFilterConditionGroupsInner } from './lowInventoryTriggerTriggerFilterConditionGroupsInner';
import { MailboxProviderMethodFilter } from './mailboxProviderMethodFilter';
import { ManualAddManualMethodFilter } from './manualAddManualMethodFilter';
import { ManualImportManualMethodFilter } from './manualImportManualMethodFilter';
import { ManualImportMethodFilter } from './manualImportMethodFilter';
import { ManualRemoveMethodFilter } from './manualRemoveMethodFilter';
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
import { MappedMetricResponseObjectResourceRelationships } from './mappedMetricResponseObjectResourceRelationships';
import { MappedMetricResponseObjectResourceRelationshipsCustomMetric } from './mappedMetricResponseObjectResourceRelationshipsCustomMetric';
import { MappedMetricResponseObjectResourceRelationshipsCustomMetricData } from './mappedMetricResponseObjectResourceRelationshipsCustomMetricData';
import { MappedMetricResponseObjectResourceRelationshipsMetric } from './mappedMetricResponseObjectResourceRelationshipsMetric';
import { MappedMetricResponseObjectResourceRelationshipsMetricData } from './mappedMetricResponseObjectResourceRelationshipsMetricData';
import { Margin } from './margin';
import { MessageBlockedMethodFilter } from './messageBlockedMethodFilter';
import { MethodFilter } from './methodFilter';
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
import { MetricPropertyEnum } from './metricPropertyEnum';
import { MetricPropertyResponseObjectResourceAttributes } from './metricPropertyResponseObjectResourceAttributes';
import { MetricPropertyResponseObjectResourceExtended } from './metricPropertyResponseObjectResourceExtended';
import { MetricPropertyResponseObjectResourceExtendedAttributes } from './metricPropertyResponseObjectResourceExtendedAttributes';
import { MetricPropertyResponseObjectResourceExtendedAttributesAllOfSampleValuesInner } from './metricPropertyResponseObjectResourceExtendedAttributesAllOfSampleValuesInner';
import { MetricPropertyResponseObjectResourceExtendedRelationships } from './metricPropertyResponseObjectResourceExtendedRelationships';
import { MetricPropertyResponseObjectResourceExtendedRelationshipsMetric } from './metricPropertyResponseObjectResourceExtendedRelationshipsMetric';
import { MetricPropertyResponseObjectResourceExtendedRelationshipsMetricData } from './metricPropertyResponseObjectResourceExtendedRelationshipsMetricData';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { MetricResponseObjectResourceAttributes } from './metricResponseObjectResourceAttributes';
import { MetricResponseObjectResourceRelationships } from './metricResponseObjectResourceRelationships';
import { MetricResponseObjectResourceRelationshipsFlowTriggers } from './metricResponseObjectResourceRelationshipsFlowTriggers';
import { MetricResponseObjectResourceRelationshipsFlowTriggersDataInner } from './metricResponseObjectResourceRelationshipsFlowTriggersDataInner';
import { MetricTrigger } from './metricTrigger';
import { MetricTriggerTriggerFilter } from './metricTriggerTriggerFilter';
import { MetricTriggerTriggerFilterConditionGroupsInner } from './metricTriggerTriggerFilterConditionGroupsInner';
import { MobileOverlay } from './mobileOverlay';
import { MobilePushBadge } from './mobilePushBadge';
import { MobilePushBadgeBadgeOptions } from './mobilePushBadgeBadgeOptions';
import { MobilePushContent } from './mobilePushContent';
import { MobilePushContentCreate } from './mobilePushContentCreate';
import { MobilePushContentUpdate } from './mobilePushContentUpdate';
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
import { MobileStyle } from './mobileStyle';
import { MobileStyleProperties } from './mobileStyleProperties';
import { MobileStyleStyles } from './mobileStyleStyles';
import { ModelDate } from './modelDate';
import { MultiBranchSplitAction } from './multiBranchSplitAction';
import { MultiBranchSplitActionData } from './multiBranchSplitActionData';
import { MultiBranchSplitBranch } from './multiBranchSplitBranch';
import { MultiBranchSplitBranchBranchFilter } from './multiBranchSplitBranchBranchFilter';
import { MultiBranchSplitBranchBranchFilterConditionGroupsInner } from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
import { MultiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner } from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
import { NextStep } from './nextStep';
import { NextStepProperties } from './nextStepProperties';
import { NoEmailMarketing } from './noEmailMarketing';
import { NoEmailMarketingConsent } from './noEmailMarketingConsent';
import { NoEmailMarketingConsentConsentStatus } from './noEmailMarketingConsentConsentStatus';
import { NoEmailMarketingFiltersInner } from './noEmailMarketingFiltersInner';
import { NoEmailMarketingNeverSubscribed } from './noEmailMarketingNeverSubscribed';
import { NoEmailMarketingSubscribed } from './noEmailMarketingSubscribed';
import { NoEmailMarketingUnsubscribed } from './noEmailMarketingUnsubscribed';
import { NoEmailMarketingUnsubscribedFilters } from './noEmailMarketingUnsubscribedFilters';
import { NoEmailMarketingUnsubscribedFiltersOneOfInner } from './noEmailMarketingUnsubscribedFiltersOneOfInner';
import { NoPushMarketing } from './noPushMarketing';
import { NoPushMarketingConsent } from './noPushMarketingConsent';
import { NoSMSMarketing } from './noSMSMarketing';
import { NoSMSMarketingConsent } from './noSMSMarketingConsent';
import { NoSMSMarketingConsentConsentStatus } from './noSMSMarketingConsentConsentStatus';
import { NoSMSMarketingNeverSubscribed } from './noSMSMarketingNeverSubscribed';
import { NoSMSMarketingUnsubscribed } from './noSMSMarketingUnsubscribed';
import { NoSMSMarketingUnsubscribedFiltersInner } from './noSMSMarketingUnsubscribedFiltersInner';
import { NonLocalStaticSend } from './nonLocalStaticSend';
import { NumericOperatorNumericFilter } from './numericOperatorNumericFilter';
import { NumericOperatorNumericFilterValue } from './numericOperatorNumericFilterValue';
import { NumericRangeFilter } from './numericRangeFilter';
import { ObjectIngestionLogEnum } from './objectIngestionLogEnum';
import { ObjectLinks } from './objectLinks';
import { ObjectRecordBulkDeleteJobEnum } from './objectRecordBulkDeleteJobEnum';
import { ObjectRecordDeleteJobCreateQuery } from './objectRecordDeleteJobCreateQuery';
import { ObjectRecordDeleteJobCreateQueryResourceObject } from './objectRecordDeleteJobCreateQueryResourceObject';
import { ObjectRecordDeleteJobCreateQueryResourceObjectRelationships } from './objectRecordDeleteJobCreateQueryResourceObjectRelationships';
import { ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords } from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords';
import { ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner } from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner';
import { ObjectRecordEnum } from './objectRecordEnum';
import { ObjectRecordResponseObjectResource } from './objectRecordResponseObjectResource';
import { ObjectRecordResponseObjectResourceAttributes } from './objectRecordResponseObjectResourceAttributes';
import { ObjectSchemaCreateQuery } from './objectSchemaCreateQuery';
import { ObjectSchemaCreateQueryResourceObject } from './objectSchemaCreateQueryResourceObject';
import { ObjectSchemaCreateQueryResourceObjectAttributes } from './objectSchemaCreateQueryResourceObjectAttributes';
import { ObjectSchemaCreateQueryResourceObjectRelationships } from './objectSchemaCreateQueryResourceObjectRelationships';
import { ObjectSchemaCreateQueryResourceObjectRelationshipsObjectType } from './objectSchemaCreateQueryResourceObjectRelationshipsObjectType';
import { ObjectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData } from './objectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData';
import { ObjectSchemaEnum } from './objectSchemaEnum';
import { ObjectSchemaPartialUpdateQuery } from './objectSchemaPartialUpdateQuery';
import { ObjectSchemaPartialUpdateQueryResourceObject } from './objectSchemaPartialUpdateQueryResourceObject';
import { ObjectSchemaPartialUpdateQueryResourceObjectAttributes } from './objectSchemaPartialUpdateQueryResourceObjectAttributes';
import { ObjectSchemaRelationshipCreateMeta } from './objectSchemaRelationshipCreateMeta';
import { ObjectSchemaRelationshipCreateQuery } from './objectSchemaRelationshipCreateQuery';
import { ObjectSchemaRelationshipCreateQueryDataInner } from './objectSchemaRelationshipCreateQueryDataInner';
import { ObjectSchemaRelationshipDeleteMeta } from './objectSchemaRelationshipDeleteMeta';
import { ObjectSchemaRelationshipDeleteQuery } from './objectSchemaRelationshipDeleteQuery';
import { ObjectSchemaRelationshipDeleteQueryDataInner } from './objectSchemaRelationshipDeleteQueryDataInner';
import { ObjectSchemaRelationshipMeta } from './objectSchemaRelationshipMeta';
import { ObjectSchemaRelationshipPartialUpdateQuery } from './objectSchemaRelationshipPartialUpdateQuery';
import { ObjectSchemaRelationshipPartialUpdateQueryData } from './objectSchemaRelationshipPartialUpdateQueryData';
import { ObjectSchemaRelationshipResponseObjectResource } from './objectSchemaRelationshipResponseObjectResource';
import { ObjectSchemaRelationshipResponseObjectResourceAttributes } from './objectSchemaRelationshipResponseObjectResourceAttributes';
import { ObjectSchemaRelationshipUpdateMeta } from './objectSchemaRelationshipUpdateMeta';
import { ObjectSchemaResponseObjectResource } from './objectSchemaResponseObjectResource';
import { ObjectSchemaResponseObjectResourceAttributes } from './objectSchemaResponseObjectResourceAttributes';
import { ObjectSchemaResponseObjectResourceRelationships } from './objectSchemaResponseObjectResourceRelationships';
import { ObjectSchemaResponseObjectResourceRelationshipsObjectSchemas } from './objectSchemaResponseObjectResourceRelationshipsObjectSchemas';
import { ObjectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner } from './objectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner';
import { ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas } from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas';
import { ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner } from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner';
import { ObjectSchemaResponseObjectResourceRelationshipsSourceMapping } from './objectSchemaResponseObjectResourceRelationshipsSourceMapping';
import { ObjectSchemaResponseObjectResourceRelationshipsSourceMappingData } from './objectSchemaResponseObjectResourceRelationshipsSourceMappingData';
import { ObjectTypeCreateQuery } from './objectTypeCreateQuery';
import { ObjectTypeCreateQueryResourceObject } from './objectTypeCreateQueryResourceObject';
import { ObjectTypeCreateQueryResourceObjectAttributes } from './objectTypeCreateQueryResourceObjectAttributes';
import { ObjectTypeCreateQueryResourceObjectAttributesObjectSchema } from './objectTypeCreateQueryResourceObjectAttributesObjectSchema';
import { ObjectTypeEnum } from './objectTypeEnum';
import { ObjectTypeRelationshipMeta } from './objectTypeRelationshipMeta';
import { ObjectTypeRelationshipResponseObjectResource } from './objectTypeRelationshipResponseObjectResource';
import { ObjectTypeRelationshipResponseObjectResourceAttributes } from './objectTypeRelationshipResponseObjectResourceAttributes';
import { ObjectTypeResponseObjectResource } from './objectTypeResponseObjectResource';
import { ObjectTypeResponseObjectResourceAttributes } from './objectTypeResponseObjectResourceAttributes';
import { ObjectTypeResponseObjectResourceRelationships } from './objectTypeResponseObjectResourceRelationships';
import { ObjectTypeResponseObjectResourceRelationshipsCurrentSchema } from './objectTypeResponseObjectResourceRelationshipsCurrentSchema';
import { ObjectTypeResponseObjectResourceRelationshipsCurrentSchemaData } from './objectTypeResponseObjectResourceRelationshipsCurrentSchemaData';
import { ObjectTypeResponseObjectResourceRelationshipsDraftSchema } from './objectTypeResponseObjectResourceRelationshipsDraftSchema';
import { ObjectTypeResponseObjectResourceRelationshipsDraftSchemaData } from './objectTypeResponseObjectResourceRelationshipsDraftSchemaData';
import { ObjectTypeResponseObjectResourceRelationshipsObjectTypes } from './objectTypeResponseObjectResourceRelationshipsObjectTypes';
import { ObjectTypeResponseObjectResourceRelationshipsObjectTypesDataInner } from './objectTypeResponseObjectResourceRelationshipsObjectTypesDataInner';
import { ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypes } from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypes';
import { ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner } from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner';
import { ObjectTypeResponseObjectResourceRelationshipsSchemaVersions } from './objectTypeResponseObjectResourceRelationshipsSchemaVersions';
import { ObjectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner } from './objectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner';
import { OneClickUnsubscribeMethodFilter } from './oneClickUnsubscribeMethodFilter';
import { OnlyRelatedLinks } from './onlyRelatedLinks';
import { OnsiteProfileCreateQueryResourceObject } from './onsiteProfileCreateQueryResourceObject';
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { OnsiteProfileMeta } from './onsiteProfileMeta';
import { OpenForm } from './openForm';
import { OpenFormProperties } from './openFormProperties';
import { OpenTrackingConsent } from './openTrackingConsent';
import { OpenTrackingSubscriptionParameters } from './openTrackingSubscriptionParameters';
import { OpenTrackingUnsubscriptionParameters } from './openTrackingUnsubscriptionParameters';
import { OptInCode } from './optInCode';
import { OptInCodeProperties } from './optInCodeProperties';
import { OptInCodeStyles } from './optInCodeStyles';
import { Padding } from './padding';
import { PageVisits } from './pageVisits';
import { PageVisitsProperties } from './pageVisitsProperties';
import { PatchCampaignMessageResponse } from './patchCampaignMessageResponse';
import { PatchCampaignMessageResponseData } from './patchCampaignMessageResponseData';
import { PatchCampaignResponse } from './patchCampaignResponse';
import { PatchCatalogCategoryResponse } from './patchCatalogCategoryResponse';
import { PatchCatalogItemResponse } from './patchCatalogItemResponse';
import { PatchCatalogVariantResponse } from './patchCatalogVariantResponse';
import { PatchCouponCodeResponse } from './patchCouponCodeResponse';
import { PatchCouponResponse } from './patchCouponResponse';
import { PatchCustomMetricResponse } from './patchCustomMetricResponse';
import { PatchFlowActionEncodedResponse } from './patchFlowActionEncodedResponse';
import { PatchFlowActionEncodedResponseData } from './patchFlowActionEncodedResponseData';
import { PatchFlowResponse } from './patchFlowResponse';
import { PatchFlowResponseData } from './patchFlowResponseData';
import { PatchIdentifiers } from './patchIdentifiers';
import { PatchImageResponse } from './patchImageResponse';
import { PatchListPartialUpdateResponse } from './patchListPartialUpdateResponse';
import { PatchMappedMetricResponse } from './patchMappedMetricResponse';
import { PatchMappedMetricResponseData } from './patchMappedMetricResponseData';
import { PatchObjectSchemaResponse } from './patchObjectSchemaResponse';
import { PatchProfileResponse } from './patchProfileResponse';
import { PatchReviewResponseDTO } from './patchReviewResponseDTO';
import { PatchReviewResponseDTOData } from './patchReviewResponseDTOData';
import { PatchSegmentPartialUpdateResponse } from './patchSegmentPartialUpdateResponse';
import { PatchSourceMappingResponse } from './patchSourceMappingResponse';
import { PatchSourceMappingResponseData } from './patchSourceMappingResponseData';
import { PatchTemplateDndResponse } from './patchTemplateDndResponse';
import { PatchTrackingSettingResponse } from './patchTrackingSettingResponse';
import { PatchTrackingSettingResponseData } from './patchTrackingSettingResponseData';
import { PatchUniversalContentResponse } from './patchUniversalContentResponse';
import { PatchWebFeedResponse } from './patchWebFeedResponse';
import { PatchWebhookResponse } from './patchWebhookResponse';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberConsentChannelSettings } from './phoneNumberConsentChannelSettings';
import { PhoneNumberProperties } from './phoneNumberProperties';
import { PhoneNumberStyles } from './phoneNumberStyles';
import { PostBulkProfileSuppressionsCreateJobResponse } from './postBulkProfileSuppressionsCreateJobResponse';
import { PostBulkProfileSuppressionsCreateJobResponseData } from './postBulkProfileSuppressionsCreateJobResponseData';
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
import { PostCatalogCategoryResponse } from './postCatalogCategoryResponse';
import { PostCatalogCategoryResponseData } from './postCatalogCategoryResponseData';
import { PostCatalogCategoryUpdateJobResponse } from './postCatalogCategoryUpdateJobResponse';
import { PostCatalogCategoryUpdateJobResponseData } from './postCatalogCategoryUpdateJobResponseData';
import { PostCatalogItemCreateJobResponse } from './postCatalogItemCreateJobResponse';
import { PostCatalogItemCreateJobResponseData } from './postCatalogItemCreateJobResponseData';
import { PostCatalogItemDeleteJobResponse } from './postCatalogItemDeleteJobResponse';
import { PostCatalogItemDeleteJobResponseData } from './postCatalogItemDeleteJobResponseData';
import { PostCatalogItemResponse } from './postCatalogItemResponse';
import { PostCatalogItemResponseData } from './postCatalogItemResponseData';
import { PostCatalogItemUpdateJobResponse } from './postCatalogItemUpdateJobResponse';
import { PostCatalogItemUpdateJobResponseData } from './postCatalogItemUpdateJobResponseData';
import { PostCatalogVariantCreateJobResponse } from './postCatalogVariantCreateJobResponse';
import { PostCatalogVariantCreateJobResponseData } from './postCatalogVariantCreateJobResponseData';
import { PostCatalogVariantDeleteJobResponse } from './postCatalogVariantDeleteJobResponse';
import { PostCatalogVariantDeleteJobResponseData } from './postCatalogVariantDeleteJobResponseData';
import { PostCatalogVariantResponse } from './postCatalogVariantResponse';
import { PostCatalogVariantResponseData } from './postCatalogVariantResponseData';
import { PostCatalogVariantUpdateJobResponse } from './postCatalogVariantUpdateJobResponse';
import { PostCatalogVariantUpdateJobResponseData } from './postCatalogVariantUpdateJobResponseData';
import { PostCouponCodeCreateJobResponse } from './postCouponCodeCreateJobResponse';
import { PostCouponCodeCreateJobResponseData } from './postCouponCodeCreateJobResponseData';
import { PostCouponCodeResponse } from './postCouponCodeResponse';
import { PostCouponCodeResponseData } from './postCouponCodeResponseData';
import { PostCouponResponse } from './postCouponResponse';
import { PostCouponResponseData } from './postCouponResponseData';
import { PostCustomMetricResponse } from './postCustomMetricResponse';
import { PostCustomMetricResponseData } from './postCustomMetricResponseData';
import { PostDataSourceResponse } from './postDataSourceResponse';
import { PostDataSourceResponseData } from './postDataSourceResponseData';
import { PostEncodedFormResponse } from './postEncodedFormResponse';
import { PostEncodedFormResponseData } from './postEncodedFormResponseData';
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
import { PostMetricAggregateResponse } from './postMetricAggregateResponse';
import { PostMetricAggregateResponseData } from './postMetricAggregateResponseData';
import { PostMetricAggregateResponseDataAttributes } from './postMetricAggregateResponseDataAttributes';
import { PostObjectSchemaResponse } from './postObjectSchemaResponse';
import { PostObjectSchemaResponseData } from './postObjectSchemaResponseData';
import { PostObjectTypeResponse } from './postObjectTypeResponse';
import { PostObjectTypeResponseData } from './postObjectTypeResponseData';
import { PostProfileImportJobResponse } from './postProfileImportJobResponse';
import { PostProfileImportJobResponseData } from './postProfileImportJobResponseData';
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
import { PostTagResponse } from './postTagResponse';
import { PostTagResponseData } from './postTagResponseData';
import { PostTemplateDndResponse } from './postTemplateDndResponse';
import { PostTemplateDndResponseData } from './postTemplateDndResponseData';
import { PostTemplateDndResponseDataAttributes } from './postTemplateDndResponseDataAttributes';
import { PostTemplateResponse } from './postTemplateResponse';
import { PostTemplateResponseData } from './postTemplateResponseData';
import { PostUniversalContentResponse } from './postUniversalContentResponse';
import { PostUniversalContentResponseData } from './postUniversalContentResponseData';
import { PostWebFeedResponse } from './postWebFeedResponse';
import { PostWebFeedResponseData } from './postWebFeedResponseData';
import { PostWebhookResponse } from './postWebhookResponse';
import { PostWebhookResponseData } from './postWebhookResponseData';
import { PredictiveAnalytics } from './predictiveAnalytics';
import { PreferencePageFilter } from './preferencePageFilter';
import { PreferencePageMethodFilter } from './preferencePageMethodFilter';
import { PreviouslySubmitted } from './previouslySubmitted';
import { PriceDropCondition } from './priceDropCondition';
import { PriceDropTrigger } from './priceDropTrigger';
import { PriceDropTriggerTriggerFilter } from './priceDropTriggerTriggerFilter';
import { PriceDropTriggerTriggerFilterConditionGroupsInner } from './priceDropTriggerTriggerFilterConditionGroupsInner';
import { ProductBlockData } from './productBlockData';
import { ProductBlockDataProperties } from './productBlockDataProperties';
import { ProductBlockStyles } from './productBlockStyles';
import { ProductBlockV0 } from './productBlockV0';
import { ProductBlockV1 } from './productBlockV1';
import { ProductSubBlock } from './productSubBlock';
import { ProfileBulkImportJobEnum } from './profileBulkImportJobEnum';
import { ProfileCreateQuery } from './profileCreateQuery';
import { ProfileCreateQueryResourceObject } from './profileCreateQueryResourceObject';
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
import { ProfileEventTracked } from './profileEventTracked';
import { ProfileEventTrackedProperties } from './profileEventTrackedProperties';
import { ProfileHasCustomObjectCondition } from './profileHasCustomObjectCondition';
import { ProfileHasCustomObjectFilter } from './profileHasCustomObjectFilter';
import { ProfileHasCustomObjectFilterFilter } from './profileHasCustomObjectFilterFilter';
import { ProfileHasGroupMembershipCondition } from './profileHasGroupMembershipCondition';
import { ProfileHasGroupMembershipConditionTimeframeFilter } from './profileHasGroupMembershipConditionTimeframeFilter';
import { ProfileHasNotReceivedEmailMessageCondition } from './profileHasNotReceivedEmailMessageCondition';
import { ProfileHasNotReceivedEmailMessageConditionTimeframeFilter } from './profileHasNotReceivedEmailMessageConditionTimeframeFilter';
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
import { ProfileImportJobResponseObjectResourceRelationships } from './profileImportJobResponseObjectResourceRelationships';
import { ProfileImportJobResponseObjectResourceRelationshipsImportErrors } from './profileImportJobResponseObjectResourceRelationshipsImportErrors';
import { ProfileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner } from './profileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner';
import { ProfileImportJobResponseObjectResourceRelationshipsLists } from './profileImportJobResponseObjectResourceRelationshipsLists';
import { ProfileImportJobResponseObjectResourceRelationshipsListsDataInner } from './profileImportJobResponseObjectResourceRelationshipsListsDataInner';
import { ProfileImportJobResponseObjectResourceRelationshipsProfiles } from './profileImportJobResponseObjectResourceRelationshipsProfiles';
import { ProfileImportJobResponseObjectResourceRelationshipsProfilesDataInner } from './profileImportJobResponseObjectResourceRelationshipsProfilesDataInner';
import { ProfileLocation } from './profileLocation';
import { ProfileLocationLatitude } from './profileLocationLatitude';
import { ProfileLocationLongitude } from './profileLocationLongitude';
import { ProfileMarketingConsentCondition } from './profileMarketingConsentCondition';
import { ProfileMarketingConsentConditionConsent } from './profileMarketingConsentConditionConsent';
import { ProfileMergeEnum } from './profileMergeEnum';
import { ProfileMergeQuery } from './profileMergeQuery';
import { ProfileMergeQueryResourceObject } from './profileMergeQueryResourceObject';
import { ProfileMergeQueryResourceObjectRelationships } from './profileMergeQueryResourceObjectRelationships';
import { ProfileMergeQueryResourceObjectRelationshipsProfiles } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import { ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import { ProfileMeta } from './profileMeta';
import { ProfileMetaPatchProperties } from './profileMetaPatchProperties';
import { ProfileMetaPatchPropertiesUnset } from './profileMetaPatchPropertiesUnset';
import { ProfileMetricFunnelSteps } from './profileMetricFunnelSteps';
import { ProfileMetricPropertyFilter } from './profileMetricPropertyFilter';
import { ProfileMetricPropertyFilterFilter } from './profileMetricPropertyFilterFilter';
import { ProfileModificationMethodFilter } from './profileModificationMethodFilter';
import { ProfileNoGroupMembershipCondition } from './profileNoGroupMembershipCondition';
import { ProfileNotInFlowCondition } from './profileNotInFlowCondition';
import { ProfileObjectSchemaEnum } from './profileObjectSchemaEnum';
import { ProfileObjectSchemaRelationshipCreateQuery } from './profileObjectSchemaRelationshipCreateQuery';
import { ProfileObjectSchemaRelationshipCreateQueryDataInner } from './profileObjectSchemaRelationshipCreateQueryDataInner';
import { ProfileObjectSchemaRelationshipDeleteQuery } from './profileObjectSchemaRelationshipDeleteQuery';
import { ProfileObjectSchemaRelationshipDeleteQueryDataInner } from './profileObjectSchemaRelationshipDeleteQueryDataInner';
import { ProfileObjectSchemaRelationshipPartialUpdateQuery } from './profileObjectSchemaRelationshipPartialUpdateQuery';
import { ProfileObjectSchemaRelationshipPartialUpdateQueryData } from './profileObjectSchemaRelationshipPartialUpdateQueryData';
import { ProfileObjectSchemaRelationshipResponseObjectResource } from './profileObjectSchemaRelationshipResponseObjectResource';
import { ProfileObjectTypeEnum } from './profileObjectTypeEnum';
import { ProfileOperationDelete } from './profileOperationDelete';
import { ProfileOperationUpdateOrCreateBoolean } from './profileOperationUpdateOrCreateBoolean';
import { ProfileOperationUpdateOrCreateDate } from './profileOperationUpdateOrCreateDate';
import { ProfileOperationUpdateOrCreateDatePropertyValue } from './profileOperationUpdateOrCreateDatePropertyValue';
import { ProfileOperationUpdateOrCreateList } from './profileOperationUpdateOrCreateList';
import { ProfileOperationUpdateOrCreateNumeric } from './profileOperationUpdateOrCreateNumeric';
import { ProfileOperationUpdateOrCreateString } from './profileOperationUpdateOrCreateString';
import { ProfilePartialUpdateQuery } from './profilePartialUpdateQuery';
import { ProfilePartialUpdateQueryResourceObject } from './profilePartialUpdateQueryResourceObject';
import { ProfilePermissionsCondition } from './profilePermissionsCondition';
import { ProfilePermissionsConditionPermission } from './profilePermissionsConditionPermission';
import { ProfilePostalCodeDistanceCondition } from './profilePostalCodeDistanceCondition';
import { ProfilePostalCodeDistanceConditionFilter } from './profilePostalCodeDistanceConditionFilter';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityCondition } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityFilter } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import { ProfilePredictiveAnalyticsChannelAffinityRankCondition } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import { ProfilePredictiveAnalyticsChannelAffinityRankFilter } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import { ProfilePredictiveAnalyticsDateCondition } from './profilePredictiveAnalyticsDateCondition';
import { ProfilePredictiveAnalyticsNumericCondition } from './profilePredictiveAnalyticsNumericCondition';
import { ProfilePredictiveAnalyticsStringCondition } from './profilePredictiveAnalyticsStringCondition';
import { ProfilePredictiveAnalyticsStringFilter } from './profilePredictiveAnalyticsStringFilter';
import { ProfilePredictiveAnalyticsStringFilterOperator } from './profilePredictiveAnalyticsStringFilterOperator';
import { ProfilePropertyCondition } from './profilePropertyCondition';
import { ProfilePropertyConditionFilter } from './profilePropertyConditionFilter';
import { ProfilePropertyDateTrigger } from './profilePropertyDateTrigger';
import { ProfileRandomSampleCondition } from './profileRandomSampleCondition';
import { ProfileRegionCondition } from './profileRegionCondition';
import { ProfileRelationshipSource } from './profileRelationshipSource';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { ProfileResponseObjectResourceExtended } from './profileResponseObjectResourceExtended';
import { ProfileResponseObjectResourceExtendedAttributes } from './profileResponseObjectResourceExtendedAttributes';
import { ProfileResponseObjectResourceRelationships } from './profileResponseObjectResourceRelationships';
import { ProfileResponseObjectResourceRelationshipsLists } from './profileResponseObjectResourceRelationshipsLists';
import { ProfileResponseObjectResourceRelationshipsListsDataInner } from './profileResponseObjectResourceRelationshipsListsDataInner';
import { ProfileResponseObjectResourceRelationshipsPushTokens } from './profileResponseObjectResourceRelationshipsPushTokens';
import { ProfileResponseObjectResourceRelationshipsPushTokensDataInner } from './profileResponseObjectResourceRelationshipsPushTokensDataInner';
import { ProfileResponseObjectResourceRelationshipsSegments } from './profileResponseObjectResourceRelationshipsSegments';
import { ProfileResponseObjectResourceRelationshipsSegmentsDataInner } from './profileResponseObjectResourceRelationshipsSegmentsDataInner';
import { ProfileResponsePluralConversationsObjectResourceAttributes } from './profileResponsePluralConversationsObjectResourceAttributes';
import { ProfileResponsePluralConversationsObjectResourceExtended } from './profileResponsePluralConversationsObjectResourceExtended';
import { ProfileResponsePluralConversationsObjectResourceExtendedAttributes } from './profileResponsePluralConversationsObjectResourceExtendedAttributes';
import { ProfileResponsePluralConversationsObjectResourceExtendedRelationships } from './profileResponsePluralConversationsObjectResourceExtendedRelationships';
import { ProfileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations } from './profileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations';
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
import { ProfileTypeRelationshipResponseObjectResource } from './profileTypeRelationshipResponseObjectResource';
import { ProfileUpsertQuery } from './profileUpsertQuery';
import { ProfileUpsertQueryResourceObject } from './profileUpsertQueryResourceObject';
import { ProfileUpsertQueryResourceObjectAttributes } from './profileUpsertQueryResourceObjectAttributes';
import { PromotionalSMSSubscription } from './promotionalSMSSubscription';
import { Property } from './property';
import { PropertyFilter } from './propertyFilter';
import { PropertyOption } from './propertyOption';
import { PropertySource } from './propertySource';
import { ProvidedLandlineMethodFilter } from './providedLandlineMethodFilter';
import { ProvidedNoAgeMethodFilter } from './providedNoAgeMethodFilter';
import { PushActionButton } from './pushActionButton';
import { PushActionButtonDefinition } from './pushActionButtonDefinition';
import { PushChannel } from './pushChannel';
import { PushMarketing } from './pushMarketing';
import { PushOnOpenApp } from './pushOnOpenApp';
import { PushOnOpenDeepLink } from './pushOnOpenDeepLink';
import { PushOnOpenWebUrl } from './pushOnOpenWebUrl';
import { PushProfileUpsertQueryResourceObject } from './pushProfileUpsertQueryResourceObject';
import { PushProfileUpsertQueryResourceObjectAttributes } from './pushProfileUpsertQueryResourceObjectAttributes';
import { PushSendOptions } from './pushSendOptions';
import { PushSubscriptionParameters } from './pushSubscriptionParameters';
import { PushTokenCreateQuery } from './pushTokenCreateQuery';
import { PushTokenCreateQueryResourceObject } from './pushTokenCreateQueryResourceObject';
import { PushTokenCreateQueryResourceObjectAttributes } from './pushTokenCreateQueryResourceObjectAttributes';
import { PushTokenCreateQueryResourceObjectAttributesProfile } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import { PushTokenDeviceMetadata } from './pushTokenDeviceMetadata';
import { PushTokenEntry } from './pushTokenEntry';
import { PushTokenEnum } from './pushTokenEnum';
import { PushTokenResponseObjectResource } from './pushTokenResponseObjectResource';
import { PushTokenResponseObjectResourceAttributes } from './pushTokenResponseObjectResourceAttributes';
import { PushTokenResponseObjectResourceRelationships } from './pushTokenResponseObjectResourceRelationships';
import { PushTokenResponseObjectResourceRelationshipsProfile } from './pushTokenResponseObjectResourceRelationshipsProfile';
import { PushTokenResponseObjectResourceRelationshipsProfileData } from './pushTokenResponseObjectResourceRelationshipsProfileData';
import { PushUnsubscriptionParameters } from './pushUnsubscriptionParameters';
import { QuoteStyle } from './quoteStyle';
import { RadioButtons } from './radioButtons';
import { RadioButtonsProperties } from './radioButtonsProperties';
import { RadioButtonsStyles } from './radioButtonsStyles';
import { RatingStyle } from './ratingStyle';
import { RecordedDateFilter } from './recordedDateFilter';
import { Redirect } from './redirect';
import { RedirectProperties } from './redirectProperties';
import { ReentryCriteria } from './reentryCriteria';
import { ReentryCriteriaUnit } from './reentryCriteriaUnit';
import { RejectReasonFake } from './rejectReasonFake';
import { RejectReasonMisleading } from './rejectReasonMisleading';
import { RejectReasonOther } from './rejectReasonOther';
import { RejectReasonPrivateInformation } from './rejectReasonPrivateInformation';
import { RejectReasonProfanity } from './rejectReasonProfanity';
import { RejectReasonUnrelated } from './rejectReasonUnrelated';
import { RelatedIdPath } from './relatedIdPath';
import { RelationshipLinks } from './relationshipLinks';
import { RelativeAnniversaryDateFilter } from './relativeAnniversaryDateFilter';
import { RelativeDateOperatorBaseRelativeDateFilter } from './relativeDateOperatorBaseRelativeDateFilter';
import { RelativeDateRangeFilter } from './relativeDateRangeFilter';
import { RenderOptions } from './renderOptions';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { ResendOptInCode } from './resendOptInCode';
import { Review } from './review';
import { ReviewBlockData } from './reviewBlockData';
import { ReviewBlockDataProperties } from './reviewBlockDataProperties';
import { ReviewBlockStyles } from './reviewBlockStyles';
import { ReviewBlockV0 } from './reviewBlockV0';
import { ReviewBlockV1 } from './reviewBlockV1';
import { ReviewEnum } from './reviewEnum';
import { ReviewPatchQuery } from './reviewPatchQuery';
import { ReviewPatchQueryResourceObject } from './reviewPatchQueryResourceObject';
import { ReviewPatchQueryResourceObjectAttributes } from './reviewPatchQueryResourceObjectAttributes';
import { ReviewPatchQueryResourceObjectAttributesStatus } from './reviewPatchQueryResourceObjectAttributesStatus';
import { ReviewProductDTO } from './reviewProductDTO';
import { ReviewProperties } from './reviewProperties';
import { ReviewPublicReply } from './reviewPublicReply';
import { ReviewResponseDTOObjectResource } from './reviewResponseDTOObjectResource';
import { ReviewResponseDTOObjectResourceAttributes } from './reviewResponseDTOObjectResourceAttributes';
import { ReviewResponseDTOObjectResourceAttributesStatus } from './reviewResponseDTOObjectResourceAttributesStatus';
import { ReviewResponseDTOObjectResourceRelationships } from './reviewResponseDTOObjectResourceRelationships';
import { ReviewResponseDTOObjectResourceRelationshipsEvents } from './reviewResponseDTOObjectResourceRelationshipsEvents';
import { ReviewResponseDTOObjectResourceRelationshipsEventsDataInner } from './reviewResponseDTOObjectResourceRelationshipsEventsDataInner';
import { ReviewResponseDTOObjectResourceRelationshipsItem } from './reviewResponseDTOObjectResourceRelationshipsItem';
import { ReviewResponseDTOObjectResourceRelationshipsItemData } from './reviewResponseDTOObjectResourceRelationshipsItemData';
import { ReviewStatusFeatured } from './reviewStatusFeatured';
import { ReviewStatusPending } from './reviewStatusPending';
import { ReviewStatusPublished } from './reviewStatusPublished';
import { ReviewStatusRejected } from './reviewStatusRejected';
import { ReviewStatusRejectedRejectionReason } from './reviewStatusRejectedRejectionReason';
import { ReviewStatusUnpublished } from './reviewStatusUnpublished';
import { ReviewStyles } from './reviewStyles';
import { ReviewerNameStyle } from './reviewerNameStyle';
import { RichTextMargin } from './richTextMargin';
import { RichTextStyle } from './richTextStyle';
import { RichTextStyles } from './richTextStyles';
import { RowData } from './rowData';
import { RowStyles } from './rowStyles';
import { RowV0 } from './rowV0';
import { RowV0BlocksInner } from './rowV0BlocksInner';
import { RowV1 } from './rowV1';
import { SMSChannel } from './sMSChannel';
import { SMSConsentCheckbox } from './sMSConsentCheckbox';
import { SMSConsentCheckboxProperties } from './sMSConsentCheckboxProperties';
import { SMSConsentCheckboxStyles } from './sMSConsentCheckboxStyles';
import { SMSContent } from './sMSContent';
import { SMSContentCreate } from './sMSContentCreate';
import { SMSContentSubObject } from './sMSContentSubObject';
import { SMSDisclosure } from './sMSDisclosure';
import { SMSDisclosureAccountDefault } from './sMSDisclosureAccountDefault';
import { SMSDisclosureCustom } from './sMSDisclosureCustom';
import { SMSDisclosureLinkTextStyle } from './sMSDisclosureLinkTextStyle';
import { SMSDisclosureProperties } from './sMSDisclosureProperties';
import { SMSDisclosurePropertiesContent } from './sMSDisclosurePropertiesContent';
import { SMSDisclosureStyles } from './sMSDisclosureStyles';
import { SMSDisclosureTextStyle } from './sMSDisclosureTextStyle';
import { SMSMarketing } from './sMSMarketing';
import { SMSMessageDefinition } from './sMSMessageDefinition';
import { SMSMessageDefinitionCreate } from './sMSMessageDefinitionCreate';
import { SMSSendOptions } from './sMSSendOptions';
import { SMSSubscriptionParameters } from './sMSSubscriptionParameters';
import { SMSTransactional } from './sMSTransactional';
import { SMSUnsubscriptionParameters } from './sMSUnsubscriptionParameters';
import { Scroll } from './scroll';
import { ScrollProperties } from './scrollProperties';
import { SectionData } from './sectionData';
import { SectionProperties } from './sectionProperties';
import { SectionStyles } from './sectionStyles';
import { SectionV0 } from './sectionV0';
import { SectionV1 } from './sectionV1';
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
import { SegmentsProfileMetricFunnelCondition } from './segmentsProfileMetricFunnelCondition';
import { SegmentsProfileMetricFunnelConditionTimeframeFilter } from './segmentsProfileMetricFunnelConditionTimeframeFilter';
import { SendEmailAction } from './sendEmailAction';
import { SendEmailActionData } from './sendEmailActionData';
import { SendInternalAlertAction } from './sendInternalAlertAction';
import { SendInternalAlertActionData } from './sendInternalAlertActionData';
import { SendPushNotificationAction } from './sendPushNotificationAction';
import { SendPushNotificationActionData } from './sendPushNotificationActionData';
import { SendSmsAction } from './sendSmsAction';
import { SendSmsActionData } from './sendSmsActionData';
import { SendTime } from './sendTime';
import { SendTimeSubObject } from './sendTimeSubObject';
import { SendWebhookAction } from './sendWebhookAction';
import { SendWebhookActionData } from './sendWebhookActionData';
import { SendWhatsAppAction } from './sendWhatsAppAction';
import { SendWhatsAppActionData } from './sendWhatsAppActionData';
import { SeriesData } from './seriesData';
import { ServerBISSubscriptionCreateQuery } from './serverBISSubscriptionCreateQuery';
import { ServerBISSubscriptionCreateQueryResourceObject } from './serverBISSubscriptionCreateQueryResourceObject';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import { SftpMethodFilter } from './sftpMethodFilter';
import { ShopifyIntegrationFilter } from './shopifyIntegrationFilter';
import { ShopifyIntegrationMethodFilter } from './shopifyIntegrationMethodFilter';
import { SideImageSettings } from './sideImageSettings';
import { SignupCounter } from './signupCounter';
import { SignupCounterProperties } from './signupCounterProperties';
import { SignupCounterStyles } from './signupCounterStyles';
import { SimplePropertyMapping } from './simplePropertyMapping';
import { SimpleRelationshipMapping } from './simpleRelationshipMapping';
import { SimpleRelationshipMappingSource } from './simpleRelationshipMappingSource';
import { SinceFlowStartDateFilter } from './sinceFlowStartDateFilter';
import { SkipToSuccess } from './skipToSuccess';
import { SmartSendTimeStrategy } from './smartSendTimeStrategy';
import { SocialBlockData } from './socialBlockData';
import { SocialBlockProperties } from './socialBlockProperties';
import { SocialBlockStyles } from './socialBlockStyles';
import { SocialBlockV0 } from './socialBlockV0';
import { SocialBlockV1 } from './socialBlockV1';
import { SocialBlockV1SubblocksInner } from './socialBlockV1SubblocksInner';
import { SocialIconSubBlock } from './socialIconSubBlock';
import { SocialSpacerSubBlock } from './socialSpacerSubBlock';
import { SourceMappingCreateQueryResourceObject } from './sourceMappingCreateQueryResourceObject';
import { SourceMappingCreateQueryResourceObjectAttributes } from './sourceMappingCreateQueryResourceObjectAttributes';
import { SourceMappingEnum } from './sourceMappingEnum';
import { SourceMappingPartialUpdateQuery } from './sourceMappingPartialUpdateQuery';
import { SourceMappingPartialUpdateQueryResourceObject } from './sourceMappingPartialUpdateQueryResourceObject';
import { SourceMappingResponseObjectResource } from './sourceMappingResponseObjectResource';
import { SourceMappingResponseObjectResourceAttributes } from './sourceMappingResponseObjectResourceAttributes';
import { SourceMappingResponseObjectResourceAttributesPropertyMappingsInner } from './sourceMappingResponseObjectResourceAttributesPropertyMappingsInner';
import { SpacerBlockData } from './spacerBlockData';
import { SpacerBlockStyles } from './spacerBlockStyles';
import { SpacerBlockV0 } from './spacerBlockV0';
import { SpacerBlockV1 } from './spacerBlockV1';
import { SpamComplaintMethodFilter } from './spamComplaintMethodFilter';
import { SpinToWin } from './spinToWin';
import { SpinToWinProperties } from './spinToWinProperties';
import { SpinToWinSliceConfig } from './spinToWinSliceConfig';
import { SpinToWinSliceStyle } from './spinToWinSliceStyle';
import { SpinToWinStyles } from './spinToWinStyles';
import { SplitBlockData } from './splitBlockData';
import { SplitBlockStyles } from './splitBlockStyles';
import { SplitBlockV0 } from './splitBlockV0';
import { SplitBlockV1 } from './splitBlockV1';
import { SplitBlockV1SubblocksInner } from './splitBlockV1SubblocksInner';
import { StaticCount } from './staticCount';
import { StaticCouponConfig } from './staticCouponConfig';
import { StaticDateFilter } from './staticDateFilter';
import { StaticDateRangeFilter } from './staticDateRangeFilter';
import { StaticImageBlockProperties } from './staticImageBlockProperties';
import { StaticProductBlockProperties } from './staticProductBlockProperties';
import { StaticReviewBlockProperties } from './staticReviewBlockProperties';
import { StaticSendStrategy } from './staticSendStrategy';
import { StaticSendStrategyOptions } from './staticSendStrategyOptions';
import { StaticTableBlockProperties } from './staticTableBlockProperties';
import { StaticTrackingParam } from './staticTrackingParam';
import { StatusDateFilter } from './statusDateFilter';
import { StatusDateFilterFilter } from './statusDateFilterFilter';
import { Step } from './step';
import { StreetAddress } from './streetAddress';
import { StringArrayOperatorStringArrayFilter } from './stringArrayOperatorStringArrayFilter';
import { StringInArrayFilter } from './stringInArrayFilter';
import { StringOperatorStringFilter } from './stringOperatorStringFilter';
import { StringPhoneOperatorStringArrayFilter } from './stringPhoneOperatorStringArrayFilter';
import { SubmitBackInStock } from './submitBackInStock';
import { SubmitBackInStockProperties } from './submitBackInStockProperties';
import { SubmitOptInCode } from './submitOptInCode';
import { SubscribeViaSMS } from './subscribeViaSMS';
import { SubscribeViaSMSProperties } from './subscribeViaSMSProperties';
import { SubscribeViaWhatsApp } from './subscribeViaWhatsApp';
import { SubscribeViaWhatsAppProperties } from './subscribeViaWhatsAppProperties';
import { SubscribedSMSIsRcsCapableFilter } from './subscribedSMSIsRcsCapableFilter';
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
import { TableBlockData } from './tableBlockData';
import { TableBlockDataProperties } from './tableBlockDataProperties';
import { TableBlockStyles } from './tableBlockStyles';
import { TableBlockV0 } from './tableBlockV0';
import { TableBlockV1 } from './tableBlockV1';
import { TableBlockV1SubblocksInner } from './tableBlockV1SubblocksInner';
import { TableFallbackHtmlSubBlock } from './tableFallbackHtmlSubBlock';
import { TableFallbackImageSubBlock } from './tableFallbackImageSubBlock';
import { TableFallbackTextSubBlock } from './tableFallbackTextSubBlock';
import { TableHeaderSubBlock } from './tableHeaderSubBlock';
import { TableHtmlSubBlock } from './tableHtmlSubBlock';
import { TableImageSubBlock } from './tableImageSubBlock';
import { TableTextSubBlock } from './tableTextSubBlock';
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
import { TagGroupResponseObjectResourceRelationships } from './tagGroupResponseObjectResourceRelationships';
import { TagGroupUpdateQuery } from './tagGroupUpdateQuery';
import { TagGroupUpdateQueryResourceObject } from './tagGroupUpdateQueryResourceObject';
import { TagGroupUpdateQueryResourceObjectAttributes } from './tagGroupUpdateQueryResourceObjectAttributes';
import { TagListOp } from './tagListOp';
import { TagListOpDataInner } from './tagListOpDataInner';
import { TagResponseObjectResource } from './tagResponseObjectResource';
import { TagResponseObjectResourceAttributes } from './tagResponseObjectResourceAttributes';
import { TagResponseObjectResourceRelationships } from './tagResponseObjectResourceRelationships';
import { TagResponseObjectResourceRelationshipsCampaigns } from './tagResponseObjectResourceRelationshipsCampaigns';
import { TagResponseObjectResourceRelationshipsCampaignsDataInner } from './tagResponseObjectResourceRelationshipsCampaignsDataInner';
import { TagResponseObjectResourceRelationshipsTagGroup } from './tagResponseObjectResourceRelationshipsTagGroup';
import { TagResponseObjectResourceRelationshipsTagGroupData } from './tagResponseObjectResourceRelationshipsTagGroupData';
import { TagSegmentOp } from './tagSegmentOp';
import { TagSegmentOpDataInner } from './tagSegmentOpDataInner';
import { TagUpdateQuery } from './tagUpdateQuery';
import { TagUpdateQueryResourceObject } from './tagUpdateQueryResourceObject';
import { TargetDateAction } from './targetDateAction';
import { TargetDateActionData } from './targetDateActionData';
import { Teaser } from './teaser';
import { TeaserStyles } from './teaserStyles';
import { TemplateCloneQuery } from './templateCloneQuery';
import { TemplateCloneQueryResourceObject } from './templateCloneQueryResourceObject';
import { TemplateCloneQueryResourceObjectAttributes } from './templateCloneQueryResourceObjectAttributes';
import { TemplateCreateHtmlOrDndQuery } from './templateCreateHtmlOrDndQuery';
import { TemplateCreateHtmlOrDndQueryResourceObject } from './templateCreateHtmlOrDndQueryResourceObject';
import { TemplateCreateHtmlOrDndQueryResourceObjectAttributes } from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
import { TemplateDefinition } from './templateDefinition';
import { TemplateDefinitionStylesInner } from './templateDefinitionStylesInner';
import { TemplateDndResponseObjectResourceAttributes } from './templateDndResponseObjectResourceAttributes';
import { TemplateDndResponseObjectResourceExtended } from './templateDndResponseObjectResourceExtended';
import { TemplateDndResponseObjectResourceExtendedAttributes } from './templateDndResponseObjectResourceExtendedAttributes';
import { TemplateEnum } from './templateEnum';
import { TemplateRenderQuery } from './templateRenderQuery';
import { TemplateRenderQueryResourceObject } from './templateRenderQueryResourceObject';
import { TemplateRenderQueryResourceObjectAttributes } from './templateRenderQueryResourceObjectAttributes';
import { TemplateResponseObjectResource } from './templateResponseObjectResource';
import { TemplateResponseObjectResourceAttributes } from './templateResponseObjectResourceAttributes';
import { TemplateUniversalContentEnum } from './templateUniversalContentEnum';
import { TemplateUpdateHtmlOrDndQuery } from './templateUpdateHtmlOrDndQuery';
import { TemplateUpdateHtmlOrDndQueryResourceObject } from './templateUpdateHtmlOrDndQueryResourceObject';
import { TemplateUpdateHtmlOrDndQueryResourceObjectAttributes } from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
import { Text } from './text';
import { TextBlockDataV0 } from './textBlockDataV0';
import { TextBlockDataV1 } from './textBlockDataV1';
import { TextBlockStylesV0 } from './textBlockStylesV0';
import { TextBlockStylesV1 } from './textBlockStylesV1';
import { TextBlockV0 } from './textBlockV0';
import { TextBlockV1 } from './textBlockV1';
import { TextProperties } from './textProperties';
import { TextStyleStyles } from './textStyleStyles';
import { TextStyleV0 } from './textStyleV0';
import { TextStyleV0FontFamily } from './textStyleV0FontFamily';
import { TextStyleV1 } from './textStyleV1';
import { TextStyles } from './textStyles';
import { ThrottledSendStrategy } from './throttledSendStrategy';
import { TimeDelayAction } from './timeDelayAction';
import { TimeDelayActionData } from './timeDelayActionData';
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
import { TriggerBranchActionDataTriggerFilter } from './triggerBranchActionDataTriggerFilter';
import { TriggerBranchActionDataTriggerFilterConditionGroupsInner } from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
import { TriggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner } from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
import { URLPatterns } from './uRLPatterns';
import { URLPatternsProperties } from './uRLPatternsProperties';
import { UnidentifiedProfiles } from './unidentifiedProfiles';
import { UniqueCouponConfig } from './uniqueCouponConfig';
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
import { UnsubscriptionChannels } from './unsubscriptionChannels';
import { UnsubscriptionParameters } from './unsubscriptionParameters';
import { UnsupportedBlock } from './unsupportedBlock';
import { UnsupportedSendStrategy } from './unsupportedSendStrategy';
import { UpdateProfileAction } from './updateProfileAction';
import { UpdateProfileActionData } from './updateProfileActionData';
import { UpdateProfileActionDataProfileOperationsInner } from './updateProfileActionDataProfileOperationsInner';
import { UtmParam } from './utmParam';
import { ValuesData } from './valuesData';
import { VariableTimerConfiguration } from './variableTimerConfiguration';
import { Version } from './version';
import { VersionProperties } from './versionProperties';
import { VersionStyles } from './versionStyles';
import { VersionTriggersInner } from './versionTriggersInner';
import { VideoBlockData } from './videoBlockData';
import { VideoBlockProperties } from './videoBlockProperties';
import { VideoBlockStyles } from './videoBlockStyles';
import { VideoBlockV0 } from './videoBlockV0';
import { VideoBlockV1 } from './videoBlockV1';
import { Visibility } from './visibility';
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
import { WebhookResponseObjectResourceRelationships } from './webhookResponseObjectResourceRelationships';
import { WebhookResponseObjectResourceRelationshipsWebhookTopics } from './webhookResponseObjectResourceRelationshipsWebhookTopics';
import { WebhookResponseObjectResourceRelationshipsWebhookTopicsDataInner } from './webhookResponseObjectResourceRelationshipsWebhookTopicsDataInner';
import { WebhookTopicEnum } from './webhookTopicEnum';
import { WebhookTopicResponseObjectResource } from './webhookTopicResponseObjectResource';
import { WhatsAppSubscriptionParameters } from './whatsAppSubscriptionParameters';
import { WhatsAppUnsubscriptionParameters } from './whatsAppUnsubscriptionParameters';
import { WhatsappChannel } from './whatsappChannel';
import { WhatsappConversationalChannel } from './whatsappConversationalChannel';
import { WhatsappMarketingChannel } from './whatsappMarketingChannel';
import { WhatsappTransactionalChannel } from './whatsappTransactionalChannel';
import {  } from './aBTestSendStrategy';
import {  } from './aPIJobErrorPayload';
import {  } from './aPIMethodFilter';
import {  } from './aPISchemaProperty';
import {  } from './abTestAction';
import {  } from './abTestActionData';
import {  } from './abTestActionDataCurrentExperiment';
import {  } from './abTestActionDataMainAction';
import {  } from './accountEnum';
import {  } from './accountResponseObjectResource';
import {  } from './accountResponseObjectResourceAttributes';
import {  } from './actionOutputCondition';
import {  } from './actionOutputConditionFilter';
import {  } from './actionOutputSplitAction';
import {  } from './actionOutputSplitActionData';
import {  } from './actionOutputSplitActionDataActionOutputFilter';
import {  } from './actionOutputSplitActionDataActionOutputFilterConditionGroupsInner';
import {  } from './additionalField';
import {  } from './afterCloseTimeout';
import {  } from './afterCloseTimeoutProperties';
import {  } from './ageGate';
import {  } from './ageGateProperties';
import {  } from './ageGateStyles';
import {  } from './alltimeDateFilter';
import {  } from './anniversaryDateFilter';
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
import {  } from './backInStock';
import {  } from './backInStockDelayAction';
import {  } from './backInStockDynamicButtonBorderStyles';
import {  } from './backInStockDynamicButtonData';
import {  } from './backInStockDynamicButtonDropShadowStyles';
import {  } from './backInStockDynamicButtonStyles';
import {  } from './backInStockDynamicButtonTextStyles';
import {  } from './backInStockEmailConsentCheckbox';
import {  } from './backInStockEmailConsentCheckboxProperties';
import {  } from './backInStockEmailConsentCheckboxStyles';
import {  } from './backInStockMethodFilter';
import {  } from './backInStockProperties';
import {  } from './backInStockSubscriptionEnum';
import {  } from './backgroundImage';
import {  } from './backgroundImageStyles';
import {  } from './bannerStyles';
import {  } from './baseEventCreateQueryBulkEntryResourceObject';
import {  } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import {  } from './baseStyle';
import {  } from './baseStyleProperties';
import {  } from './baseStyleStyles';
import {  } from './blockDisplayOptions';
import {  } from './body';
import {  } from './bodyProperties';
import {  } from './bodyStyles';
import {  } from './booleanBranchLinks';
import {  } from './booleanFilter';
import {  } from './borderStyle';
import {  } from './bounceDateFilter';
import {  } from './bounceDateFilterFilter';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationships';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner';
import {  } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import {  } from './bulkRemoveMethodFilter';
import {  } from './button';
import {  } from './buttonAction';
import {  } from './buttonBlockData';
import {  } from './buttonBlockProperties';
import {  } from './buttonBlockStyles';
import {  } from './buttonBlockV0';
import {  } from './buttonBlockV1';
import {  } from './buttonDropShadowStyles';
import {  } from './buttonProperties';
import {  } from './buttonStyles';
import {  } from './buttonStylesHeight';
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
import {  } from './campaignMessageResponseObjectResourceRelationships';
import {  } from './campaignMessageResponseObjectResourceRelationshipsCampaign';
import {  } from './campaignMessageResponseObjectResourceRelationshipsCampaignData';
import {  } from './campaignMessageResponseObjectResourceRelationshipsImage';
import {  } from './campaignMessageResponseObjectResourceRelationshipsImageData';
import {  } from './campaignMessageResponseObjectResourceRelationshipsTemplate';
import {  } from './campaignMessageResponseObjectResourceRelationshipsTemplateData';
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
import {  } from './campaignResponseObjectResourceRelationships';
import {  } from './campaignResponseObjectResourceRelationshipsCampaignMessages';
import {  } from './campaignResponseObjectResourceRelationshipsCampaignMessagesDataInner';
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
import {  } from './carrierDeactivationMethodFilter';
import {  } from './cartContent';
import {  } from './cartContentProperties';
import {  } from './cartItemCount';
import {  } from './cartItemCountProperties';
import {  } from './cartProduct';
import {  } from './cartProductProperties';
import {  } from './cartValue';
import {  } from './cartValueProperties';
import {  } from './catalogCategoryBulkCreateJobEnum';
import {  } from './catalogCategoryBulkDeleteJobEnum';
import {  } from './catalogCategoryBulkUpdateJobEnum';
import {  } from './catalogCategoryCreateJobCreateQuery';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObject';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryCreateJobResponseObjectResource';
import {  } from './catalogCategoryCreateJobResponseObjectResourceRelationships';
import {  } from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategories';
import {  } from './catalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
import {  } from './catalogCategoryDeleteJobResponseObjectResourceRelationships';
import {  } from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories';
import {  } from './catalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner';
import {  } from './catalogCategoryDeleteQueryResourceObject';
import {  } from './catalogCategoryEnum';
import {  } from './catalogCategoryItemOp';
import {  } from './catalogCategoryItemOpDataInner';
import {  } from './catalogCategoryResponseObjectResource';
import {  } from './catalogCategoryResponseObjectResourceAttributes';
import {  } from './catalogCategoryResponseObjectResourceRelationships';
import {  } from './catalogCategoryResponseObjectResourceRelationshipsItems';
import {  } from './catalogCategoryUpdateJobCreateQuery';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryUpdateJobResponseObjectResource';
import {  } from './catalogCategoryUpdateJobResponseObjectResourceRelationships';
import {  } from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories';
import {  } from './catalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner';
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
import {  } from './catalogItemCreateJobResponseObjectResourceRelationships';
import {  } from './catalogItemCreateJobResponseObjectResourceRelationshipsItems';
import {  } from './catalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner';
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
import {  } from './catalogItemDeleteJobResponseObjectResourceRelationships';
import {  } from './catalogItemDeleteJobResponseObjectResourceRelationshipsItems';
import {  } from './catalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner';
import {  } from './catalogItemDeleteQueryResourceObject';
import {  } from './catalogItemEnum';
import {  } from './catalogItemResponseObjectResource';
import {  } from './catalogItemResponseObjectResourceAttributes';
import {  } from './catalogItemResponseObjectResourceRelationships';
import {  } from './catalogItemResponseObjectResourceRelationshipsVariants';
import {  } from './catalogItemResponseObjectResourceRelationshipsVariantsDataInner';
import {  } from './catalogItemUpdateJobCreateQuery';
import {  } from './catalogItemUpdateJobCreateQueryResourceObject';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemUpdateJobResponseObjectResource';
import {  } from './catalogItemUpdateJobResponseObjectResourceRelationships';
import {  } from './catalogItemUpdateJobResponseObjectResourceRelationshipsItems';
import {  } from './catalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner';
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
import {  } from './catalogVariantCreateJobResponseObjectResourceRelationships';
import {  } from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariants';
import {  } from './catalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner';
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
import {  } from './catalogVariantDeleteJobResponseObjectResourceRelationships';
import {  } from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariants';
import {  } from './catalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner';
import {  } from './catalogVariantDeleteQueryResourceObject';
import {  } from './catalogVariantEnum';
import {  } from './catalogVariantResponseObjectResource';
import {  } from './catalogVariantResponseObjectResourceAttributes';
import {  } from './catalogVariantResponseObjectResourceRelationships';
import {  } from './catalogVariantResponseObjectResourceRelationshipsItem';
import {  } from './catalogVariantResponseObjectResourceRelationshipsItemData';
import {  } from './catalogVariantUpdateJobCreateQuery';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObject';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantUpdateJobResponseObjectResource';
import {  } from './catalogVariantUpdateJobResponseObjectResourceRelationships';
import {  } from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariants';
import {  } from './catalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner';
import {  } from './catalogVariantUpdateQuery';
import {  } from './catalogVariantUpdateQueryResourceObject';
import {  } from './catalogVariantUpdateQueryResourceObjectAttributes';
import {  } from './channel';
import {  } from './channelProperties';
import {  } from './channelSettings';
import {  } from './checkboxes';
import {  } from './checkboxesProperties';
import {  } from './checkboxesStyles';
import {  } from './checkoutMethodFilter';
import {  } from './close';
import {  } from './closeButtonStyle';
import {  } from './closeProperties';
import {  } from './codeAction';
import {  } from './collectionLinks';
import {  } from './columnStyles';
import {  } from './columnV0';
import {  } from './columnV1';
import {  } from './columnV1BlocksInner';
import {  } from './conditionGroup';
import {  } from './conditionGroupConditionsInner';
import {  } from './conditionalBranchAction';
import {  } from './conditionalBranchActionData';
import {  } from './conditionalBranchActionDataProfileFilter';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import {  } from './constantContactIntegrationFilter';
import {  } from './constantContactIntegrationMethodFilter';
import {  } from './constantPropertyMapping';
import {  } from './constantPropertyMappingValue';
import {  } from './contactInformation';
import {  } from './contentExperimentAction';
import {  } from './contentExperimentActionData';
import {  } from './contentExperimentActionDataCurrentExperiment';
import {  } from './contentExperimentActionDataMainAction';
import {  } from './contentRepeatV0';
import {  } from './contentRepeatV1';
import {  } from './conversationEnum';
import {  } from './conversationMessageCreateQuery';
import {  } from './conversationMessageCreateQueryResourceObject';
import {  } from './conversationMessageCreateQueryResourceObjectAttributes';
import {  } from './conversationMessageCreateQueryResourceObjectRelationships';
import {  } from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
import {  } from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
import {  } from './conversationMessageEnum';
import {  } from './conversationResponseObjectResource';
import {  } from './conversationResponseObjectResourceAttributes';
import {  } from './conversationResponseObjectResourceRelationships';
import {  } from './conversationResponseObjectResourceRelationshipsProfile';
import {  } from './countdownDelayAction';
import {  } from './countdownDelayActionData';
import {  } from './countdownTimer';
import {  } from './countdownTimerProperties';
import {  } from './countdownTimerPropertiesConfiguration';
import {  } from './countdownTimerStyles';
import {  } from './coupon';
import {  } from './couponBlockData';
import {  } from './couponBlockProperties';
import {  } from './couponBlockStyles';
import {  } from './couponBlockV0';
import {  } from './couponBlockV0Data';
import {  } from './couponBlockV1';
import {  } from './couponCodeBulkCreateJobEnum';
import {  } from './couponCodeCreateJobCreateQuery';
import {  } from './couponCodeCreateJobCreateQueryResourceObject';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import {  } from './couponCodeCreateJobResponseObjectResource';
import {  } from './couponCodeCreateJobResponseObjectResourceAttributes';
import {  } from './couponCodeCreateJobResponseObjectResourceRelationships';
import {  } from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes';
import {  } from './couponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner';
import {  } from './couponCodeCreateQuery';
import {  } from './couponCodeCreateQueryResourceObject';
import {  } from './couponCodeCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateQueryResourceObjectRelationships';
import {  } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import {  } from './couponCodeEnum';
import {  } from './couponCodeResponseObjectResource';
import {  } from './couponCodeResponseObjectResourceAttributes';
import {  } from './couponCodeResponseObjectResourceRelationships';
import {  } from './couponCodeResponseObjectResourceRelationshipsCoupon';
import {  } from './couponCodeResponseObjectResourceRelationshipsCouponData';
import {  } from './couponCodeResponseObjectResourceRelationshipsProfile';
import {  } from './couponCodeResponseObjectResourceRelationshipsProfileData';
import {  } from './couponCodeUpdateQuery';
import {  } from './couponCodeUpdateQueryResourceObject';
import {  } from './couponCodeUpdateQueryResourceObjectAttributes';
import {  } from './couponCreateQuery';
import {  } from './couponCreateQueryResourceObject';
import {  } from './couponEnum';
import {  } from './couponProperties';
import {  } from './couponPropertiesCoupon';
import {  } from './couponResponseObjectResource';
import {  } from './couponResponseObjectResourceAttributes';
import {  } from './couponStyles';
import {  } from './couponUpdateQuery';
import {  } from './couponUpdateQueryResourceObject';
import {  } from './couponUpdateQueryResourceObjectAttributes';
import {  } from './customCss';
import {  } from './customHTML';
import {  } from './customHTMLProperties';
import {  } from './customJavascript';
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
import {  } from './customMetricResponseObjectResourceRelationships';
import {  } from './customMetricResponseObjectResourceRelationshipsMetrics';
import {  } from './customMetricResponseObjectResourceRelationshipsMetricsDataInner';
import {  } from './customObjectDateTrigger';
import {  } from './customObjectPropertyCondition';
import {  } from './customObjectRelationshipSource';
import {  } from './customObjectTriggerCondition';
import {  } from './customObjectTriggerConditionFilter';
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
import {  } from './dataSourceRecordCreateJobCreateQuery';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObject';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
import {  } from './dataSourceRecordCreateJobEnum';
import {  } from './dataSourceRecordEnum';
import {  } from './dataSourceRecordResourceObject';
import {  } from './dataSourceRecordResourceObjectAttributes';
import {  } from './dataSourceResponseObjectResource';
import {  } from './dataSourceResponseObjectResourceAttributes';
import {  } from './dataWarehouseImportMethodFilter';
import {  } from './dateProperties';
import {  } from './dateStyles';
import {  } from './delay';
import {  } from './delayProperties';
import {  } from './device';
import {  } from './deviceMetadata';
import {  } from './deviceProperties';
import {  } from './displayOptions';
import {  } from './doubleOptinFilter';
import {  } from './dropShadow';
import {  } from './dropShadowBlockData';
import {  } from './dropShadowBlockStyles';
import {  } from './dropShadowBlockV0';
import {  } from './dropShadowBlockV1';
import {  } from './dropdown';
import {  } from './dropdownProperties';
import {  } from './dropdownStyles';
import {  } from './dynamicButton';
import {  } from './dynamicImageBlockProperties';
import {  } from './dynamicProductBlockProperties';
import {  } from './dynamicReviewBlockProperties';
import {  } from './dynamicTableBlockProperties';
import {  } from './dynamicTrackingParam';
import {  } from './effectiveDateFilter';
import {  } from './email';
import {  } from './emailChannel';
import {  } from './emailContent';
import {  } from './emailContentSubObject';
import {  } from './emailMarketing';
import {  } from './emailMarketingListSuppression';
import {  } from './emailMarketingSuppression';
import {  } from './emailMessageDefinition';
import {  } from './emailProperties';
import {  } from './emailSendOptions';
import {  } from './emailStyles';
import {  } from './emailSubscriptionParameters';
import {  } from './emailUnsubscriptionParameters';
import {  } from './embeddedObjectSchemaResourceObject';
import {  } from './embeddedObjectSchemaResourceObjectAttributes';
import {  } from './embeddedObjectSchemaResourceObjectAttributesSourceMapping';
import {  } from './encodedFormResponseObjectResource';
import {  } from './encodedFormResponseObjectResourceAttributes';
import {  } from './equalsStringFilter';
import {  } from './errorMessages';
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
import {  } from './eventResponseObjectResourceRelationships';
import {  } from './eventResponseObjectResourceRelationshipsAttributions';
import {  } from './eventResponseObjectResourceRelationshipsAttributionsDataInner';
import {  } from './eventResponseObjectResourceRelationshipsMetric';
import {  } from './eventResponseObjectResourceRelationshipsMetricData';
import {  } from './eventResponseObjectResourceRelationshipsProfile';
import {  } from './eventResponseObjectResourceRelationshipsProfileData';
import {  } from './eventsBulkCreateJob';
import {  } from './eventsBulkCreateJobResourceObject';
import {  } from './eventsBulkCreateJobResourceObjectAttributes';
import {  } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import {  } from './eventsBulkCreateQueryResourceObject';
import {  } from './eventsBulkCreateQueryResourceObjectAttributes';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import {  } from './existenceOperatorExistenceFilter';
import {  } from './exitIntent';
import {  } from './explicitlyReachable';
import {  } from './explicitlyReachableFiltersInner';
import {  } from './explicitlyUnreachable';
import {  } from './failedAgeGateMethodFilter';
import {  } from './fixedTimerConfiguration';
import {  } from './flowActionEncodedResponseObjectResource';
import {  } from './flowActionEncodedResponseObjectResourceAttributes';
import {  } from './flowActionEncodedResponseObjectResourceAttributesDefinition';
import {  } from './flowActionEncodedResponseObjectResourceRelationships';
import {  } from './flowActionEncodedResponseObjectResourceRelationshipsFlow';
import {  } from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessages';
import {  } from './flowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner';
import {  } from './flowActionEnum';
import {  } from './flowActionUpdateQuery';
import {  } from './flowActionUpdateQueryResourceObject';
import {  } from './flowActionUpdateQueryResourceObjectAttributes';
import {  } from './flowActionUpdateQueryResourceObjectAttributesDefinition';
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
import {  } from './flowEnum';
import {  } from './flowInternalAlert';
import {  } from './flowMessageEncodedResponseObjectResource';
import {  } from './flowMessageEncodedResponseObjectResourceAttributes';
import {  } from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
import {  } from './flowMessageEncodedResponseObjectResourceRelationships';
import {  } from './flowMessageEncodedResponseObjectResourceRelationshipsFlowAction';
import {  } from './flowMessageEncodedResponseObjectResourceRelationshipsTemplate';
import {  } from './flowMessageEncodedResponseObjectResourceRelationshipsTemplateData';
import {  } from './flowMessageEnum';
import {  } from './flowPushNotification';
import {  } from './flowPushNotificationBadgeOptions';
import {  } from './flowResponseObjectResource';
import {  } from './flowResponseObjectResourceAttributes';
import {  } from './flowResponseObjectResourceRelationships';
import {  } from './flowResponseObjectResourceRelationshipsFlowActions';
import {  } from './flowResponseObjectResourceRelationshipsFlowActionsDataInner';
import {  } from './flowResponseObjectResourceRelationshipsTags';
import {  } from './flowResponseObjectResourceRelationshipsTagsDataInner';
import {  } from './flowSeriesReportEnum';
import {  } from './flowSeriesRequestDTO';
import {  } from './flowSeriesRequestDTOResourceObject';
import {  } from './flowSeriesRequestDTOResourceObjectAttributes';
import {  } from './flowSms';
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
import {  } from './flowWhatsApp';
import {  } from './flowsProfileMetricCondition';
import {  } from './flowsProfileMetricConditionTimeframeFilter';
import {  } from './formCreateQuery';
import {  } from './formCreateQueryResourceObject';
import {  } from './formCreateQueryResourceObjectAttributes';
import {  } from './formDefinition';
import {  } from './formEnum';
import {  } from './formMethodFilter';
import {  } from './formResponseObjectResource';
import {  } from './formResponseObjectResourceAttributes';
import {  } from './formResponseObjectResourceRelationships';
import {  } from './formResponseObjectResourceRelationshipsFormVersions';
import {  } from './formResponseObjectResourceRelationshipsFormVersionsDataInner';
import {  } from './formSeriesReportEnum';
import {  } from './formSeriesRequestDTO';
import {  } from './formSeriesRequestDTOResourceObject';
import {  } from './formSeriesRequestDTOResourceObjectAttributes';
import {  } from './formSubscribeFilter';
import {  } from './formValuesReportEnum';
import {  } from './formValuesRequestDTO';
import {  } from './formValuesRequestDTOResourceObject';
import {  } from './formValuesRequestDTOResourceObjectAttributes';
import {  } from './formVersionABTest';
import {  } from './formVersionEnum';
import {  } from './formVersionResponseObjectResource';
import {  } from './formVersionResponseObjectResourceAttributes';
import {  } from './formVersionResponseObjectResourceRelationships';
import {  } from './formVersionResponseObjectResourceRelationshipsForm';
import {  } from './formVersionResponseObjectResourceRelationshipsFormData';
import {  } from './getAccountResponse';
import {  } from './getAccountResponseCollection';
import {  } from './getAccounts4XXResponse';
import {  } from './getAccounts4XXResponseErrorsInner';
import {  } from './getAccounts4XXResponseErrorsInnerSource';
import {  } from './getBulkProfileSuppressionsCreateJobResponse';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import {  } from './getBulkProfileSuppressionsRemoveJobResponse';
import {  } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import {  } from './getCampaignMessageCampaignRelationshipResponse';
import {  } from './getCampaignMessageCampaignRelationshipResponseData';
import {  } from './getCampaignMessageImageRelationshipResponse';
import {  } from './getCampaignMessageImageRelationshipResponseData';
import {  } from './getCampaignMessageResponseCollectionCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocument';
import { GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import {  } from './getCampaignMessageTemplateRelationshipResponse';
import {  } from './getCampaignMessagesRelationshipsResponseCollection';
import {  } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import {  } from './getCampaignRecipientEstimationJobResponse';
import {  } from './getCampaignRecipientEstimationResponse';
import {  } from './getCampaignResponse';
import {  } from './getCampaignResponseCollectionCompoundDocument';
import { GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getCampaignResponseCompoundDocument';
import {  } from './getCampaignSendJobResponse';
import {  } from './getCampaignTagsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import {  } from './getCatalogCategoryDeleteJobResponse';
import {  } from './getCatalogCategoryDeleteJobResponseCollection';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogCategoryResponse';
import {  } from './getCatalogCategoryResponseCollection';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemCreateJobResponseCompoundDocument';
import {  } from './getCatalogItemDeleteJobResponse';
import {  } from './getCatalogItemDeleteJobResponseCollection';
import {  } from './getCatalogItemResponseCollectionCompoundDocument';
import {  } from './getCatalogItemResponseCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollection';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantCreateJobResponseCompoundDocument';
import {  } from './getCatalogVariantDeleteJobResponse';
import {  } from './getCatalogVariantDeleteJobResponseCollection';
import {  } from './getCatalogVariantResponse';
import {  } from './getCatalogVariantResponseCollection';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import {  } from './getConversationResponse';
import {  } from './getConversationResponseCollection';
import {  } from './getCouponCodeCouponRelationshipResponse';
import {  } from './getCouponCodeCouponRelationshipResponseData';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import {  } from './getCouponCodeCreateJobResponseCompoundDocument';
import {  } from './getCouponCodeResponseCollection';
import {  } from './getCouponCodeResponseCollectionCompoundDocument';
import {  } from './getCouponCodeResponseCompoundDocument';
import {  } from './getCouponCodesRelationshipsResponseCollection';
import {  } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import {  } from './getCouponResponse';
import {  } from './getCouponResponseCollection';
import {  } from './getCustomMetricMetricsRelationshipsResponseCollection';
import {  } from './getCustomMetricResponse';
import {  } from './getCustomMetricResponseCollectionCompoundDocument';
import {  } from './getCustomMetricResponseCompoundDocument';
import {  } from './getDataSourceResponse';
import {  } from './getDataSourceResponseCollection';
import {  } from './getEncodedFormResponse';
import {  } from './getEventMetricRelationshipResponse';
import {  } from './getEventMetricRelationshipResponseData';
import {  } from './getEventProfileRelationshipResponse';
import {  } from './getEventProfileRelationshipResponseData';
import {  } from './getEventResponseCollectionCompoundDocument';
import { GetEventResponseCollectionCompoundDocumentIncludedInnerHelper } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getEventResponseCompoundDocument';
import {  } from './getFlowActionEncodedResponse';
import {  } from './getFlowActionEncodedResponseCollection';
import {  } from './getFlowActionEncodedResponseCompoundDocument';
import { GetFlowActionEncodedResponseCompoundDocumentIncludedInnerHelper } from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
import {  } from './getFlowActionFlowMessageRelationshipResponseCollection';
import {  } from './getFlowActionFlowRelationshipResponse';
import {  } from './getFlowActionFlowRelationshipResponseData';
import {  } from './getFlowFlowActionRelationshipListResponseCollection';
import {  } from './getFlowMessageActionRelationshipResponse';
import {  } from './getFlowMessageActionRelationshipResponseData';
import {  } from './getFlowMessageEncodedResponseCollection';
import {  } from './getFlowMessageEncodedResponseCompoundDocument';
import { GetFlowMessageEncodedResponseCompoundDocumentIncludedInnerHelper } from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
import {  } from './getFlowMessageTemplateRelationshipResponse';
import {  } from './getFlowMessageTemplateRelationshipResponseData';
import {  } from './getFlowResponse';
import {  } from './getFlowResponseCollection';
import {  } from './getFlowResponseCollectionCompoundDocument';
import { GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getFlowTagsRelationshipsResponseCollection';
import {  } from './getFlowV2ResponseCompoundDocument';
import {  } from './getFormResponse';
import {  } from './getFormResponseCollection';
import {  } from './getFormVersionFormRelationshipResponse';
import {  } from './getFormVersionFormRelationshipResponseData';
import {  } from './getFormVersionResponseCollection';
import {  } from './getFormVersionResponseCompoundDocument';
import {  } from './getFormVersionsRelationshipsResponseCollection';
import {  } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import {  } from './getImageResponse';
import {  } from './getImageResponseCollection';
import {  } from './getImportErrorResponseCollection';
import {  } from './getIngestionLogResponseCollectionCompoundDocument';
import { GetIngestionLogResponseCollectionCompoundDocumentIncludedInnerHelper } from './getIngestionLogResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getListFlowTriggersRelationshipsResponseCollection';
import {  } from './getListListResponseCollectionCompoundDocument';
import { GetListListResponseCollectionCompoundDocumentIncludedInnerHelper } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getListMemberResponseCollection';
import {  } from './getListProfilesRelationshipsResponseCollection';
import {  } from './getListProfilesRelationshipsResponseCollectionDataInner';
import {  } from './getListResponseCollection';
import {  } from './getListRetrieveResponseCompoundDocument';
import {  } from './getListTagsRelationshipsResponseCollection';
import {  } from './getListTagsRelationshipsResponseCollectionDataInner';
import {  } from './getMappedMetricCustomMetricRelationshipResponse';
import {  } from './getMappedMetricCustomMetricRelationshipResponseData';
import {  } from './getMappedMetricMetricRelationshipResponse';
import {  } from './getMappedMetricResponseCollectionCompoundDocument';
import { GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getMappedMetricResponseCompoundDocument';
import {  } from './getMetricFlowTriggersRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import {  } from './getMetricPropertyMetricRelationshipResponse';
import {  } from './getMetricPropertyResponseCollection';
import {  } from './getMetricPropertyResponseCompoundDocument';
import {  } from './getMetricResponse';
import {  } from './getMetricResponseCollection';
import {  } from './getMetricResponseCollectionCompoundDocument';
import {  } from './getMetricResponseCompoundDocument';
import {  } from './getObjectRecordResponse';
import {  } from './getObjectRecordResponseCollection';
import {  } from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollection';
import {  } from './getObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner';
import {  } from './getObjectSchemaResponse';
import {  } from './getObjectSchemaResponseCollection';
import {  } from './getObjectSchemaResponseCompoundDocument';
import { GetObjectSchemaResponseCompoundDocumentIncludedInnerHelper } from './getObjectSchemaResponseCompoundDocumentIncludedInner';
import {  } from './getObjectSchemaSchemasRelationshipsResponseCollection';
import {  } from './getObjectSchemaSchemasRelationshipsResponseCollectionDataInner';
import {  } from './getObjectSchemaSourceMappingRelationshipResponse';
import {  } from './getObjectSchemaSourceMappingRelationshipResponseData';
import {  } from './getObjectTypeCurrentSchemaRelationshipResponse';
import {  } from './getObjectTypeCurrentSchemaRelationshipResponseData';
import {  } from './getObjectTypeDraftSchemaRelationshipResponse';
import {  } from './getObjectTypeIngestionLogsRelationshipsResponseCollection';
import {  } from './getObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner';
import {  } from './getObjectTypeProfileObjectTypesRelationshipsResponseCollection';
import {  } from './getObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner';
import {  } from './getObjectTypeRecordsRelationshipsResponseCollection';
import {  } from './getObjectTypeRecordsRelationshipsResponseCollectionDataInner';
import {  } from './getObjectTypeResponseCollectionCompoundDocument';
import {  } from './getObjectTypeResponseCompoundDocument';
import { GetObjectTypeResponseCompoundDocumentIncludedInnerHelper } from './getObjectTypeResponseCompoundDocumentIncludedInner';
import {  } from './getObjectTypeSchemaVersionsRelationshipsResponseCollection';
import {  } from './getObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner';
import {  } from './getObjectTypeTypesRelationshipsResponseCollection';
import {  } from './getObjectTypeTypesRelationshipsResponseCollectionDataInner';
import {  } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import {  } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import {  } from './getProfileConversationRelationshipResponse';
import {  } from './getProfileConversationRelationshipResponseData';
import {  } from './getProfileConversationsRelationshipsResponseCollection';
import {  } from './getProfileConversationsRelationshipsResponseCollectionDataInner';
import {  } from './getProfileImportJobResponseCollectionCompoundDocument';
import {  } from './getProfileImportJobResponseCompoundDocument';
import {  } from './getProfileListsRelationshipsResponseCollection';
import {  } from './getProfileListsRelationshipsResponseCollectionDataInner';
import {  } from './getProfilePushTokensRelationshipsResponseCollection';
import {  } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import {  } from './getProfileResponse';
import {  } from './getProfileResponseCollection';
import {  } from './getProfileResponsePluralConversationsCollectionCompoundDocument';
import { GetProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInnerHelper } from './getProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInner';
import {  } from './getProfileResponsePluralConversationsCompoundDocument';
import { GetProfileResponsePluralConversationsCompoundDocumentIncludedInnerHelper } from './getProfileResponsePluralConversationsCompoundDocumentIncludedInner';
import {  } from './getProfileSegmentsRelationshipsResponseCollection';
import {  } from './getPushTokenProfileRelationshipResponse';
import {  } from './getPushTokenResponseCollection';
import {  } from './getPushTokenResponseCollectionCompoundDocument';
import {  } from './getPushTokenResponseCompoundDocument';
import {  } from './getReviewResponseDTOCollectionCompoundDocument';
import {  } from './getReviewResponseDTOCompoundDocument';
import {  } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import {  } from './getSegmentListResponseCollectionCompoundDocument';
import {  } from './getSegmentMemberResponseCollection';
import {  } from './getSegmentProfilesRelationshipsResponseCollection';
import {  } from './getSegmentResponseCollection';
import {  } from './getSegmentRetrieveResponseCompoundDocument';
import {  } from './getSegmentTagsRelationshipsResponseCollection';
import {  } from './getSourceMappingResponse';
import {  } from './getTagCampaignRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import {  } from './getTagFlowRelationshipsResponseCollection';
import {  } from './getTagFlowRelationshipsResponseCollectionDataInner';
import {  } from './getTagGroupRelationshipResponse';
import {  } from './getTagGroupRelationshipResponseData';
import {  } from './getTagGroupResponse';
import {  } from './getTagGroupResponseCollection';
import {  } from './getTagGroupTagsRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollectionDataInner';
import {  } from './getTagResponseCollection';
import {  } from './getTagResponseCollectionCompoundDocument';
import {  } from './getTagResponseCompoundDocument';
import {  } from './getTagSegmentRelationshipsResponseCollection';
import {  } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import {  } from './getTemplateDndResponse';
import {  } from './getTemplateDndResponseCollection';
import {  } from './getTemplateResponse';
import {  } from './getTrackingSettingResponse';
import {  } from './getTrackingSettingResponseCollection';
import {  } from './getUniversalContentResponse';
import {  } from './getUniversalContentResponseCollection';
import {  } from './getWebFeedResponse';
import {  } from './getWebFeedResponseCollection';
import {  } from './getWebhookResponseCollectionCompoundDocument';
import {  } from './getWebhookResponseCompoundDocument';
import {  } from './getWebhookTopicResponse';
import {  } from './getWebhookTopicResponseCollection';
import {  } from './goToInbox';
import {  } from './greaterThanPositiveNumericFilter';
import {  } from './hTMLBlockDataV0';
import {  } from './hTMLBlockDataV1';
import {  } from './hTMLBlockV0';
import {  } from './hTMLBlockV1';
import {  } from './hTMLText';
import {  } from './hTMLTextProperties';
import {  } from './hTMLTextStyles';
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
import {  } from './headerBlockData';
import {  } from './headerBlockStyles';
import {  } from './headerBlockV0';
import {  } from './headerBlockV1';
import {  } from './headerBlockV1SubblocksInner';
import {  } from './headerImageSubBlock';
import {  } from './headerLinkSubBlock';
import {  } from './headerLogoSubBlock';
import {  } from './heading1Style';
import {  } from './heading2Style';
import {  } from './heading3Style';
import {  } from './heading4Style';
import {  } from './headingStyleStyles';
import {  } from './horizontalRuleBlockData';
import {  } from './horizontalRuleBlockStyles';
import {  } from './horizontalRuleBlockV0';
import {  } from './horizontalRuleBlockV1';
import {  } from './iafDeeplinkToScreen';
import {  } from './iafDeeplinkToScreenProperties';
import {  } from './identifiedProfiles';
import {  } from './image';
import {  } from './imageAction';
import {  } from './imageAssetProperties';
import {  } from './imageBlockCroppingProperties';
import {  } from './imageBlockData';
import {  } from './imageBlockDataProperties';
import {  } from './imageBlockStyles';
import {  } from './imageBlockV0';
import {  } from './imageBlockV1';
import {  } from './imageCreateQuery';
import {  } from './imageCreateQueryResourceObject';
import {  } from './imageCreateQueryResourceObjectAttributes';
import {  } from './imageDropShadowStyles';
import {  } from './imageEnum';
import {  } from './imagePartialUpdateQuery';
import {  } from './imagePartialUpdateQueryResourceObject';
import {  } from './imagePartialUpdateQueryResourceObjectAttributes';
import {  } from './imageProperties';
import {  } from './imageResponseObjectResource';
import {  } from './imageResponseObjectResourceAttributes';
import {  } from './imageStyles';
import {  } from './immediateSendStrategy';
import {  } from './implicitlyOrExplicitlyReachable';
import {  } from './implicitlyOrExplicitlyUnreachable';
import {  } from './implicitlyReachable';
import {  } from './implicitlyUnreachable';
import {  } from './importErrorEnum';
import {  } from './importErrorResponseObjectResource';
import {  } from './importErrorResponseObjectResourceAttributes';
import {  } from './inStringArrayFilter';
import {  } from './inTheLastBaseRelativeDateFilter';
import {  } from './inboundMessageMethodFilter';
import {  } from './increment';
import {  } from './ingestionLogErrorDetail';
import {  } from './ingestionLogResponseObjectResource';
import {  } from './ingestionLogResponseObjectResourceAttributes';
import {  } from './ingestionLogResponseObjectResourceRelationships';
import {  } from './ingestionLogResponseObjectResourceRelationshipsObjectRecord';
import {  } from './ingestionLogResponseObjectResourceRelationshipsObjectRecordData';
import {  } from './ingestionLogResponseObjectResourceRelationshipsObjectType';
import {  } from './ingestionLogResponseObjectResourceRelationshipsObjectTypeData';
import {  } from './inputStyles';
import {  } from './integerFilter';
import {  } from './internalScheduledReportBuilderReportData';
import {  } from './internalScheduledReportData';
import {  } from './internalServiceAction';
import {  } from './internalServiceActionData';
import {  } from './internalServiceActionDataServiceConfiguration';
import {  } from './internalTrackEventData';
import {  } from './internalUnknownServiceData';
import {  } from './invalidEmailDateFilter';
import {  } from './ipAllowlistResourceName';
import {  } from './ipAllowlistResponse';
import {  } from './ipAllowlistResponseData';
import {  } from './ipAllowlistResponseDataWrapper';
import {  } from './isSetExistenceFilter';
import {  } from './lessThanPositiveNumericFilter';
import {  } from './link';
import {  } from './linkStyle';
import {  } from './linkStyleStyles';
import {  } from './linkStyles';
import {  } from './listContainsOperatorListContainsFilter';
import {  } from './listContainsOperatorListContainsFilterValue';
import {  } from './listCreateQuery';
import {  } from './listCreateQueryResourceObject';
import {  } from './listCreateQueryResourceObjectAttributes';
import {  } from './listEnum';
import {  } from './listLengthFilter';
import {  } from './listListResponseObjectResource';
import {  } from './listListResponseObjectResourceAttributes';
import {  } from './listListResponseObjectResourceRelationships';
import {  } from './listListResponseObjectResourceRelationshipsProfiles';
import {  } from './listListResponseObjectResourceRelationshipsProfilesDataInner';
import {  } from './listMemberResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceExtended';
import {  } from './listMemberResponseObjectResourceExtendedAttributes';
import {  } from './listMembersAddQuery';
import {  } from './listMembersDeleteQuery';
import {  } from './listPartialUpdateQuery';
import {  } from './listPartialUpdateQueryResourceObject';
import {  } from './listPartialUpdateQueryResourceObjectAttributes';
import {  } from './listRegexOperatorListContainsFilter';
import {  } from './listResponseObjectResource';
import {  } from './listRetrieveResponseObjectResourceAttributes';
import {  } from './listRetrieveResponseObjectResourceExtended';
import {  } from './listRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './listSetFilter';
import {  } from './listSubstringFilter';
import {  } from './listTrigger';
import {  } from './listUpdateAction';
import {  } from './listUpdateActionData';
import {  } from './listsAndSegments';
import {  } from './listsAndSegmentsProperties';
import {  } from './localStaticSend';
import {  } from './location';
import {  } from './locationProperties';
import {  } from './locationPropertiesAllowListInner';
import {  } from './lowInventoryCondition';
import {  } from './lowInventoryTrigger';
import {  } from './lowInventoryTriggerTriggerFilter';
import {  } from './lowInventoryTriggerTriggerFilterConditionGroupsInner';
import {  } from './mailboxProviderMethodFilter';
import {  } from './manualAddManualMethodFilter';
import {  } from './manualImportManualMethodFilter';
import {  } from './manualImportMethodFilter';
import {  } from './manualRemoveMethodFilter';
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
import {  } from './mappedMetricResponseObjectResourceRelationships';
import {  } from './mappedMetricResponseObjectResourceRelationshipsCustomMetric';
import {  } from './mappedMetricResponseObjectResourceRelationshipsCustomMetricData';
import {  } from './mappedMetricResponseObjectResourceRelationshipsMetric';
import {  } from './mappedMetricResponseObjectResourceRelationshipsMetricData';
import {  } from './margin';
import {  } from './messageBlockedMethodFilter';
import {  } from './methodFilter';
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
import {  } from './metricPropertyEnum';
import {  } from './metricPropertyResponseObjectResourceAttributes';
import {  } from './metricPropertyResponseObjectResourceExtended';
import {  } from './metricPropertyResponseObjectResourceExtendedAttributes';
import {  } from './metricPropertyResponseObjectResourceExtendedAttributesAllOfSampleValuesInner';
import {  } from './metricPropertyResponseObjectResourceExtendedRelationships';
import {  } from './metricPropertyResponseObjectResourceExtendedRelationshipsMetric';
import {  } from './metricPropertyResponseObjectResourceExtendedRelationshipsMetricData';
import {  } from './metricResponseObjectResource';
import {  } from './metricResponseObjectResourceAttributes';
import {  } from './metricResponseObjectResourceRelationships';
import {  } from './metricResponseObjectResourceRelationshipsFlowTriggers';
import {  } from './metricResponseObjectResourceRelationshipsFlowTriggersDataInner';
import {  } from './metricTrigger';
import {  } from './metricTriggerTriggerFilter';
import {  } from './metricTriggerTriggerFilterConditionGroupsInner';
import {  } from './mobileOverlay';
import {  } from './mobilePushBadge';
import {  } from './mobilePushBadgeBadgeOptions';
import {  } from './mobilePushContent';
import {  } from './mobilePushContentCreate';
import {  } from './mobilePushContentUpdate';
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
import {  } from './mobileStyle';
import {  } from './mobileStyleProperties';
import {  } from './mobileStyleStyles';
import {  } from './modelDate';
import {  } from './multiBranchSplitAction';
import {  } from './multiBranchSplitActionData';
import {  } from './multiBranchSplitBranch';
import {  } from './multiBranchSplitBranchBranchFilter';
import {  } from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
import {  } from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
import {  } from './nextStep';
import {  } from './nextStepProperties';
import {  } from './noEmailMarketing';
import {  } from './noEmailMarketingConsent';
import {  } from './noEmailMarketingConsentConsentStatus';
import {  } from './noEmailMarketingFiltersInner';
import {  } from './noEmailMarketingNeverSubscribed';
import {  } from './noEmailMarketingSubscribed';
import {  } from './noEmailMarketingUnsubscribed';
import {  } from './noEmailMarketingUnsubscribedFilters';
import {  } from './noEmailMarketingUnsubscribedFiltersOneOfInner';
import {  } from './noPushMarketing';
import {  } from './noPushMarketingConsent';
import {  } from './noSMSMarketing';
import {  } from './noSMSMarketingConsent';
import {  } from './noSMSMarketingConsentConsentStatus';
import {  } from './noSMSMarketingNeverSubscribed';
import {  } from './noSMSMarketingUnsubscribed';
import {  } from './noSMSMarketingUnsubscribedFiltersInner';
import {  } from './nonLocalStaticSend';
import {  } from './numericOperatorNumericFilter';
import {  } from './numericOperatorNumericFilterValue';
import {  } from './numericRangeFilter';
import {  } from './objectIngestionLogEnum';
import {  } from './objectLinks';
import {  } from './objectRecordBulkDeleteJobEnum';
import {  } from './objectRecordDeleteJobCreateQuery';
import {  } from './objectRecordDeleteJobCreateQueryResourceObject';
import {  } from './objectRecordDeleteJobCreateQueryResourceObjectRelationships';
import {  } from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords';
import {  } from './objectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner';
import {  } from './objectRecordEnum';
import {  } from './objectRecordResponseObjectResource';
import {  } from './objectRecordResponseObjectResourceAttributes';
import {  } from './objectSchemaCreateQuery';
import {  } from './objectSchemaCreateQueryResourceObject';
import {  } from './objectSchemaCreateQueryResourceObjectAttributes';
import {  } from './objectSchemaCreateQueryResourceObjectRelationships';
import {  } from './objectSchemaCreateQueryResourceObjectRelationshipsObjectType';
import {  } from './objectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData';
import {  } from './objectSchemaEnum';
import {  } from './objectSchemaPartialUpdateQuery';
import {  } from './objectSchemaPartialUpdateQueryResourceObject';
import {  } from './objectSchemaPartialUpdateQueryResourceObjectAttributes';
import {  } from './objectSchemaRelationshipCreateMeta';
import {  } from './objectSchemaRelationshipCreateQuery';
import {  } from './objectSchemaRelationshipCreateQueryDataInner';
import {  } from './objectSchemaRelationshipDeleteMeta';
import {  } from './objectSchemaRelationshipDeleteQuery';
import {  } from './objectSchemaRelationshipDeleteQueryDataInner';
import {  } from './objectSchemaRelationshipMeta';
import {  } from './objectSchemaRelationshipPartialUpdateQuery';
import {  } from './objectSchemaRelationshipPartialUpdateQueryData';
import {  } from './objectSchemaRelationshipResponseObjectResource';
import {  } from './objectSchemaRelationshipResponseObjectResourceAttributes';
import {  } from './objectSchemaRelationshipUpdateMeta';
import {  } from './objectSchemaResponseObjectResource';
import {  } from './objectSchemaResponseObjectResourceAttributes';
import {  } from './objectSchemaResponseObjectResourceRelationships';
import {  } from './objectSchemaResponseObjectResourceRelationshipsObjectSchemas';
import {  } from './objectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner';
import {  } from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas';
import {  } from './objectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner';
import {  } from './objectSchemaResponseObjectResourceRelationshipsSourceMapping';
import {  } from './objectSchemaResponseObjectResourceRelationshipsSourceMappingData';
import {  } from './objectTypeCreateQuery';
import {  } from './objectTypeCreateQueryResourceObject';
import {  } from './objectTypeCreateQueryResourceObjectAttributes';
import {  } from './objectTypeCreateQueryResourceObjectAttributesObjectSchema';
import {  } from './objectTypeEnum';
import {  } from './objectTypeRelationshipMeta';
import {  } from './objectTypeRelationshipResponseObjectResource';
import {  } from './objectTypeRelationshipResponseObjectResourceAttributes';
import {  } from './objectTypeResponseObjectResource';
import {  } from './objectTypeResponseObjectResourceAttributes';
import {  } from './objectTypeResponseObjectResourceRelationships';
import {  } from './objectTypeResponseObjectResourceRelationshipsCurrentSchema';
import {  } from './objectTypeResponseObjectResourceRelationshipsCurrentSchemaData';
import {  } from './objectTypeResponseObjectResourceRelationshipsDraftSchema';
import {  } from './objectTypeResponseObjectResourceRelationshipsDraftSchemaData';
import {  } from './objectTypeResponseObjectResourceRelationshipsObjectTypes';
import {  } from './objectTypeResponseObjectResourceRelationshipsObjectTypesDataInner';
import {  } from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypes';
import {  } from './objectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner';
import {  } from './objectTypeResponseObjectResourceRelationshipsSchemaVersions';
import {  } from './objectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner';
import {  } from './oneClickUnsubscribeMethodFilter';
import {  } from './onlyRelatedLinks';
import {  } from './onsiteProfileCreateQueryResourceObject';
import {  } from './onsiteProfileCreateQueryResourceObjectAttributes';
import {  } from './onsiteProfileMeta';
import {  } from './openForm';
import {  } from './openFormProperties';
import {  } from './openTrackingConsent';
import {  } from './openTrackingSubscriptionParameters';
import {  } from './openTrackingUnsubscriptionParameters';
import {  } from './optInCode';
import {  } from './optInCodeProperties';
import {  } from './optInCodeStyles';
import {  } from './padding';
import {  } from './pageVisits';
import {  } from './pageVisitsProperties';
import {  } from './patchCampaignMessageResponse';
import {  } from './patchCampaignMessageResponseData';
import {  } from './patchCampaignResponse';
import {  } from './patchCatalogCategoryResponse';
import {  } from './patchCatalogItemResponse';
import {  } from './patchCatalogVariantResponse';
import {  } from './patchCouponCodeResponse';
import {  } from './patchCouponResponse';
import {  } from './patchCustomMetricResponse';
import {  } from './patchFlowActionEncodedResponse';
import {  } from './patchFlowActionEncodedResponseData';
import {  } from './patchFlowResponse';
import {  } from './patchFlowResponseData';
import {  } from './patchIdentifiers';
import {  } from './patchImageResponse';
import {  } from './patchListPartialUpdateResponse';
import {  } from './patchMappedMetricResponse';
import {  } from './patchMappedMetricResponseData';
import {  } from './patchObjectSchemaResponse';
import {  } from './patchProfileResponse';
import {  } from './patchReviewResponseDTO';
import {  } from './patchReviewResponseDTOData';
import {  } from './patchSegmentPartialUpdateResponse';
import {  } from './patchSourceMappingResponse';
import {  } from './patchSourceMappingResponseData';
import {  } from './patchTemplateDndResponse';
import {  } from './patchTrackingSettingResponse';
import {  } from './patchTrackingSettingResponseData';
import {  } from './patchUniversalContentResponse';
import {  } from './patchWebFeedResponse';
import {  } from './patchWebhookResponse';
import {  } from './phoneNumber';
import {  } from './phoneNumberConsentChannelSettings';
import {  } from './phoneNumberProperties';
import {  } from './phoneNumberStyles';
import {  } from './postBulkProfileSuppressionsCreateJobResponse';
import {  } from './postBulkProfileSuppressionsCreateJobResponseData';
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
import {  } from './postCatalogCategoryResponse';
import {  } from './postCatalogCategoryResponseData';
import {  } from './postCatalogCategoryUpdateJobResponse';
import {  } from './postCatalogCategoryUpdateJobResponseData';
import {  } from './postCatalogItemCreateJobResponse';
import {  } from './postCatalogItemCreateJobResponseData';
import {  } from './postCatalogItemDeleteJobResponse';
import {  } from './postCatalogItemDeleteJobResponseData';
import {  } from './postCatalogItemResponse';
import {  } from './postCatalogItemResponseData';
import {  } from './postCatalogItemUpdateJobResponse';
import {  } from './postCatalogItemUpdateJobResponseData';
import {  } from './postCatalogVariantCreateJobResponse';
import {  } from './postCatalogVariantCreateJobResponseData';
import {  } from './postCatalogVariantDeleteJobResponse';
import {  } from './postCatalogVariantDeleteJobResponseData';
import {  } from './postCatalogVariantResponse';
import {  } from './postCatalogVariantResponseData';
import {  } from './postCatalogVariantUpdateJobResponse';
import {  } from './postCatalogVariantUpdateJobResponseData';
import {  } from './postCouponCodeCreateJobResponse';
import {  } from './postCouponCodeCreateJobResponseData';
import {  } from './postCouponCodeResponse';
import {  } from './postCouponCodeResponseData';
import {  } from './postCouponResponse';
import {  } from './postCouponResponseData';
import {  } from './postCustomMetricResponse';
import {  } from './postCustomMetricResponseData';
import {  } from './postDataSourceResponse';
import {  } from './postDataSourceResponseData';
import {  } from './postEncodedFormResponse';
import {  } from './postEncodedFormResponseData';
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
import {  } from './postMetricAggregateResponse';
import {  } from './postMetricAggregateResponseData';
import {  } from './postMetricAggregateResponseDataAttributes';
import {  } from './postObjectSchemaResponse';
import {  } from './postObjectSchemaResponseData';
import {  } from './postObjectTypeResponse';
import {  } from './postObjectTypeResponseData';
import {  } from './postProfileImportJobResponse';
import {  } from './postProfileImportJobResponseData';
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
import {  } from './postTagResponse';
import {  } from './postTagResponseData';
import {  } from './postTemplateDndResponse';
import {  } from './postTemplateDndResponseData';
import {  } from './postTemplateDndResponseDataAttributes';
import {  } from './postTemplateResponse';
import {  } from './postTemplateResponseData';
import {  } from './postUniversalContentResponse';
import {  } from './postUniversalContentResponseData';
import {  } from './postWebFeedResponse';
import {  } from './postWebFeedResponseData';
import {  } from './postWebhookResponse';
import {  } from './postWebhookResponseData';
import {  } from './predictiveAnalytics';
import {  } from './preferencePageFilter';
import {  } from './preferencePageMethodFilter';
import {  } from './previouslySubmitted';
import {  } from './priceDropCondition';
import {  } from './priceDropTrigger';
import {  } from './priceDropTriggerTriggerFilter';
import {  } from './priceDropTriggerTriggerFilterConditionGroupsInner';
import {  } from './productBlockData';
import {  } from './productBlockDataProperties';
import {  } from './productBlockStyles';
import {  } from './productBlockV0';
import {  } from './productBlockV1';
import {  } from './productSubBlock';
import {  } from './profileBulkImportJobEnum';
import {  } from './profileCreateQuery';
import {  } from './profileCreateQueryResourceObject';
import {  } from './profileCreateQueryResourceObjectAttributes';
import {  } from './profileEnum';
import {  } from './profileEventTracked';
import {  } from './profileEventTrackedProperties';
import {  } from './profileHasCustomObjectCondition';
import {  } from './profileHasCustomObjectFilter';
import {  } from './profileHasCustomObjectFilterFilter';
import {  } from './profileHasGroupMembershipCondition';
import {  } from './profileHasGroupMembershipConditionTimeframeFilter';
import {  } from './profileHasNotReceivedEmailMessageCondition';
import {  } from './profileHasNotReceivedEmailMessageConditionTimeframeFilter';
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
import {  } from './profileImportJobResponseObjectResourceRelationships';
import {  } from './profileImportJobResponseObjectResourceRelationshipsImportErrors';
import {  } from './profileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner';
import {  } from './profileImportJobResponseObjectResourceRelationshipsLists';
import {  } from './profileImportJobResponseObjectResourceRelationshipsListsDataInner';
import {  } from './profileImportJobResponseObjectResourceRelationshipsProfiles';
import {  } from './profileImportJobResponseObjectResourceRelationshipsProfilesDataInner';
import {  } from './profileLocation';
import {  } from './profileLocationLatitude';
import {  } from './profileLocationLongitude';
import {  } from './profileMarketingConsentCondition';
import {  } from './profileMarketingConsentConditionConsent';
import {  } from './profileMergeEnum';
import {  } from './profileMergeQuery';
import {  } from './profileMergeQueryResourceObject';
import {  } from './profileMergeQueryResourceObjectRelationships';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import {  } from './profileMeta';
import {  } from './profileMetaPatchProperties';
import {  } from './profileMetaPatchPropertiesUnset';
import {  } from './profileMetricFunnelSteps';
import {  } from './profileMetricPropertyFilter';
import {  } from './profileMetricPropertyFilterFilter';
import {  } from './profileModificationMethodFilter';
import {  } from './profileNoGroupMembershipCondition';
import {  } from './profileNotInFlowCondition';
import {  } from './profileObjectSchemaEnum';
import {  } from './profileObjectSchemaRelationshipCreateQuery';
import {  } from './profileObjectSchemaRelationshipCreateQueryDataInner';
import {  } from './profileObjectSchemaRelationshipDeleteQuery';
import {  } from './profileObjectSchemaRelationshipDeleteQueryDataInner';
import {  } from './profileObjectSchemaRelationshipPartialUpdateQuery';
import {  } from './profileObjectSchemaRelationshipPartialUpdateQueryData';
import {  } from './profileObjectSchemaRelationshipResponseObjectResource';
import {  } from './profileObjectTypeEnum';
import {  } from './profileOperationDelete';
import {  } from './profileOperationUpdateOrCreateBoolean';
import {  } from './profileOperationUpdateOrCreateDate';
import {  } from './profileOperationUpdateOrCreateDatePropertyValue';
import {  } from './profileOperationUpdateOrCreateList';
import {  } from './profileOperationUpdateOrCreateNumeric';
import {  } from './profileOperationUpdateOrCreateString';
import {  } from './profilePartialUpdateQuery';
import {  } from './profilePartialUpdateQueryResourceObject';
import {  } from './profilePermissionsCondition';
import {  } from './profilePermissionsConditionPermission';
import {  } from './profilePostalCodeDistanceCondition';
import {  } from './profilePostalCodeDistanceConditionFilter';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import {  } from './profilePredictiveAnalyticsDateCondition';
import {  } from './profilePredictiveAnalyticsNumericCondition';
import {  } from './profilePredictiveAnalyticsStringCondition';
import {  } from './profilePredictiveAnalyticsStringFilter';
import {  } from './profilePredictiveAnalyticsStringFilterOperator';
import {  } from './profilePropertyCondition';
import {  } from './profilePropertyConditionFilter';
import {  } from './profilePropertyDateTrigger';
import {  } from './profileRandomSampleCondition';
import {  } from './profileRegionCondition';
import {  } from './profileRelationshipSource';
import {  } from './profileResponseObjectResource';
import {  } from './profileResponseObjectResourceAttributes';
import {  } from './profileResponseObjectResourceExtended';
import {  } from './profileResponseObjectResourceExtendedAttributes';
import {  } from './profileResponseObjectResourceRelationships';
import {  } from './profileResponseObjectResourceRelationshipsLists';
import {  } from './profileResponseObjectResourceRelationshipsListsDataInner';
import {  } from './profileResponseObjectResourceRelationshipsPushTokens';
import {  } from './profileResponseObjectResourceRelationshipsPushTokensDataInner';
import {  } from './profileResponseObjectResourceRelationshipsSegments';
import {  } from './profileResponseObjectResourceRelationshipsSegmentsDataInner';
import {  } from './profileResponsePluralConversationsObjectResourceAttributes';
import {  } from './profileResponsePluralConversationsObjectResourceExtended';
import {  } from './profileResponsePluralConversationsObjectResourceExtendedAttributes';
import {  } from './profileResponsePluralConversationsObjectResourceExtendedRelationships';
import {  } from './profileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations';
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
import {  } from './profileTypeRelationshipResponseObjectResource';
import {  } from './profileUpsertQuery';
import {  } from './profileUpsertQueryResourceObject';
import {  } from './profileUpsertQueryResourceObjectAttributes';
import {  } from './promotionalSMSSubscription';
import {  } from './property';
import {  } from './propertyFilter';
import {  } from './propertyOption';
import {  } from './propertySource';
import {  } from './providedLandlineMethodFilter';
import {  } from './providedNoAgeMethodFilter';
import {  } from './pushActionButton';
import {  } from './pushActionButtonDefinition';
import {  } from './pushChannel';
import {  } from './pushMarketing';
import {  } from './pushOnOpenApp';
import {  } from './pushOnOpenDeepLink';
import {  } from './pushOnOpenWebUrl';
import {  } from './pushProfileUpsertQueryResourceObject';
import {  } from './pushProfileUpsertQueryResourceObjectAttributes';
import {  } from './pushSendOptions';
import {  } from './pushSubscriptionParameters';
import {  } from './pushTokenCreateQuery';
import {  } from './pushTokenCreateQueryResourceObject';
import {  } from './pushTokenCreateQueryResourceObjectAttributes';
import {  } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import {  } from './pushTokenDeviceMetadata';
import {  } from './pushTokenEntry';
import {  } from './pushTokenEnum';
import {  } from './pushTokenResponseObjectResource';
import {  } from './pushTokenResponseObjectResourceAttributes';
import {  } from './pushTokenResponseObjectResourceRelationships';
import {  } from './pushTokenResponseObjectResourceRelationshipsProfile';
import {  } from './pushTokenResponseObjectResourceRelationshipsProfileData';
import {  } from './pushUnsubscriptionParameters';
import {  } from './quoteStyle';
import {  } from './radioButtons';
import {  } from './radioButtonsProperties';
import {  } from './radioButtonsStyles';
import {  } from './ratingStyle';
import {  } from './recordedDateFilter';
import {  } from './redirect';
import {  } from './redirectProperties';
import {  } from './reentryCriteria';
import {  } from './reentryCriteriaUnit';
import {  } from './rejectReasonFake';
import {  } from './rejectReasonMisleading';
import {  } from './rejectReasonOther';
import {  } from './rejectReasonPrivateInformation';
import {  } from './rejectReasonProfanity';
import {  } from './rejectReasonUnrelated';
import {  } from './relatedIdPath';
import {  } from './relationshipLinks';
import {  } from './relativeAnniversaryDateFilter';
import {  } from './relativeDateOperatorBaseRelativeDateFilter';
import {  } from './relativeDateRangeFilter';
import {  } from './renderOptions';
import {  } from './renderOptionsSubObject';
import {  } from './resendOptInCode';
import {  } from './review';
import {  } from './reviewBlockData';
import {  } from './reviewBlockDataProperties';
import {  } from './reviewBlockStyles';
import {  } from './reviewBlockV0';
import {  } from './reviewBlockV1';
import {  } from './reviewEnum';
import {  } from './reviewPatchQuery';
import {  } from './reviewPatchQueryResourceObject';
import {  } from './reviewPatchQueryResourceObjectAttributes';
import {  } from './reviewPatchQueryResourceObjectAttributesStatus';
import {  } from './reviewProductDTO';
import {  } from './reviewProperties';
import {  } from './reviewPublicReply';
import {  } from './reviewResponseDTOObjectResource';
import {  } from './reviewResponseDTOObjectResourceAttributes';
import {  } from './reviewResponseDTOObjectResourceAttributesStatus';
import {  } from './reviewResponseDTOObjectResourceRelationships';
import {  } from './reviewResponseDTOObjectResourceRelationshipsEvents';
import {  } from './reviewResponseDTOObjectResourceRelationshipsEventsDataInner';
import {  } from './reviewResponseDTOObjectResourceRelationshipsItem';
import {  } from './reviewResponseDTOObjectResourceRelationshipsItemData';
import {  } from './reviewStatusFeatured';
import {  } from './reviewStatusPending';
import {  } from './reviewStatusPublished';
import {  } from './reviewStatusRejected';
import {  } from './reviewStatusRejectedRejectionReason';
import {  } from './reviewStatusUnpublished';
import {  } from './reviewStyles';
import {  } from './reviewerNameStyle';
import {  } from './richTextMargin';
import {  } from './richTextStyle';
import {  } from './richTextStyles';
import {  } from './rowData';
import {  } from './rowStyles';
import {  } from './rowV0';
import {  } from './rowV0BlocksInner';
import {  } from './rowV1';
import {  } from './sMSChannel';
import {  } from './sMSConsentCheckbox';
import {  } from './sMSConsentCheckboxProperties';
import {  } from './sMSConsentCheckboxStyles';
import {  } from './sMSContent';
import {  } from './sMSContentCreate';
import {  } from './sMSContentSubObject';
import {  } from './sMSDisclosure';
import {  } from './sMSDisclosureAccountDefault';
import {  } from './sMSDisclosureCustom';
import {  } from './sMSDisclosureLinkTextStyle';
import {  } from './sMSDisclosureProperties';
import {  } from './sMSDisclosurePropertiesContent';
import {  } from './sMSDisclosureStyles';
import {  } from './sMSDisclosureTextStyle';
import {  } from './sMSMarketing';
import {  } from './sMSMessageDefinition';
import {  } from './sMSMessageDefinitionCreate';
import {  } from './sMSSendOptions';
import {  } from './sMSSubscriptionParameters';
import {  } from './sMSTransactional';
import {  } from './sMSUnsubscriptionParameters';
import {  } from './scroll';
import {  } from './scrollProperties';
import {  } from './sectionData';
import {  } from './sectionProperties';
import {  } from './sectionStyles';
import {  } from './sectionV0';
import {  } from './sectionV1';
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
import {  } from './segmentsProfileMetricFunnelCondition';
import {  } from './segmentsProfileMetricFunnelConditionTimeframeFilter';
import {  } from './sendEmailAction';
import {  } from './sendEmailActionData';
import {  } from './sendInternalAlertAction';
import {  } from './sendInternalAlertActionData';
import {  } from './sendPushNotificationAction';
import {  } from './sendPushNotificationActionData';
import {  } from './sendSmsAction';
import {  } from './sendSmsActionData';
import {  } from './sendTime';
import {  } from './sendTimeSubObject';
import {  } from './sendWebhookAction';
import {  } from './sendWebhookActionData';
import {  } from './sendWhatsAppAction';
import {  } from './sendWhatsAppActionData';
import {  } from './seriesData';
import {  } from './serverBISSubscriptionCreateQuery';
import {  } from './serverBISSubscriptionCreateQueryResourceObject';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import {  } from './sftpMethodFilter';
import {  } from './shopifyIntegrationFilter';
import {  } from './shopifyIntegrationMethodFilter';
import {  } from './sideImageSettings';
import {  } from './signupCounter';
import {  } from './signupCounterProperties';
import {  } from './signupCounterStyles';
import {  } from './simplePropertyMapping';
import {  } from './simpleRelationshipMapping';
import {  } from './simpleRelationshipMappingSource';
import {  } from './sinceFlowStartDateFilter';
import {  } from './skipToSuccess';
import {  } from './smartSendTimeStrategy';
import {  } from './socialBlockData';
import {  } from './socialBlockProperties';
import {  } from './socialBlockStyles';
import {  } from './socialBlockV0';
import {  } from './socialBlockV1';
import {  } from './socialBlockV1SubblocksInner';
import {  } from './socialIconSubBlock';
import {  } from './socialSpacerSubBlock';
import {  } from './sourceMappingCreateQueryResourceObject';
import {  } from './sourceMappingCreateQueryResourceObjectAttributes';
import {  } from './sourceMappingEnum';
import {  } from './sourceMappingPartialUpdateQuery';
import {  } from './sourceMappingPartialUpdateQueryResourceObject';
import {  } from './sourceMappingResponseObjectResource';
import {  } from './sourceMappingResponseObjectResourceAttributes';
import {  } from './sourceMappingResponseObjectResourceAttributesPropertyMappingsInner';
import {  } from './spacerBlockData';
import {  } from './spacerBlockStyles';
import {  } from './spacerBlockV0';
import {  } from './spacerBlockV1';
import {  } from './spamComplaintMethodFilter';
import {  } from './spinToWin';
import {  } from './spinToWinProperties';
import {  } from './spinToWinSliceConfig';
import {  } from './spinToWinSliceStyle';
import {  } from './spinToWinStyles';
import {  } from './splitBlockData';
import {  } from './splitBlockStyles';
import {  } from './splitBlockV0';
import {  } from './splitBlockV1';
import {  } from './splitBlockV1SubblocksInner';
import {  } from './staticCount';
import {  } from './staticCouponConfig';
import {  } from './staticDateFilter';
import {  } from './staticDateRangeFilter';
import {  } from './staticImageBlockProperties';
import {  } from './staticProductBlockProperties';
import {  } from './staticReviewBlockProperties';
import {  } from './staticSendStrategy';
import {  } from './staticSendStrategyOptions';
import {  } from './staticTableBlockProperties';
import {  } from './staticTrackingParam';
import {  } from './statusDateFilter';
import {  } from './statusDateFilterFilter';
import {  } from './step';
import {  } from './streetAddress';
import {  } from './stringArrayOperatorStringArrayFilter';
import {  } from './stringInArrayFilter';
import {  } from './stringOperatorStringFilter';
import {  } from './stringPhoneOperatorStringArrayFilter';
import {  } from './submitBackInStock';
import {  } from './submitBackInStockProperties';
import {  } from './submitOptInCode';
import {  } from './subscribeViaSMS';
import {  } from './subscribeViaSMSProperties';
import {  } from './subscribeViaWhatsApp';
import {  } from './subscribeViaWhatsAppProperties';
import {  } from './subscribedSMSIsRcsCapableFilter';
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
import {  } from './tableBlockData';
import {  } from './tableBlockDataProperties';
import {  } from './tableBlockStyles';
import {  } from './tableBlockV0';
import {  } from './tableBlockV1';
import {  } from './tableBlockV1SubblocksInner';
import {  } from './tableFallbackHtmlSubBlock';
import {  } from './tableFallbackImageSubBlock';
import {  } from './tableFallbackTextSubBlock';
import {  } from './tableHeaderSubBlock';
import {  } from './tableHtmlSubBlock';
import {  } from './tableImageSubBlock';
import {  } from './tableTextSubBlock';
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
import {  } from './tagGroupResponseObjectResourceRelationships';
import {  } from './tagGroupUpdateQuery';
import {  } from './tagGroupUpdateQueryResourceObject';
import {  } from './tagGroupUpdateQueryResourceObjectAttributes';
import {  } from './tagListOp';
import {  } from './tagListOpDataInner';
import {  } from './tagResponseObjectResource';
import {  } from './tagResponseObjectResourceAttributes';
import {  } from './tagResponseObjectResourceRelationships';
import {  } from './tagResponseObjectResourceRelationshipsCampaigns';
import {  } from './tagResponseObjectResourceRelationshipsCampaignsDataInner';
import {  } from './tagResponseObjectResourceRelationshipsTagGroup';
import {  } from './tagResponseObjectResourceRelationshipsTagGroupData';
import {  } from './tagSegmentOp';
import {  } from './tagSegmentOpDataInner';
import {  } from './tagUpdateQuery';
import {  } from './tagUpdateQueryResourceObject';
import {  } from './targetDateAction';
import {  } from './targetDateActionData';
import {  } from './teaser';
import {  } from './teaserStyles';
import {  } from './templateCloneQuery';
import {  } from './templateCloneQueryResourceObject';
import {  } from './templateCloneQueryResourceObjectAttributes';
import {  } from './templateCreateHtmlOrDndQuery';
import {  } from './templateCreateHtmlOrDndQueryResourceObject';
import {  } from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
import {  } from './templateDefinition';
import {  } from './templateDefinitionStylesInner';
import {  } from './templateDndResponseObjectResourceAttributes';
import {  } from './templateDndResponseObjectResourceExtended';
import {  } from './templateDndResponseObjectResourceExtendedAttributes';
import {  } from './templateEnum';
import {  } from './templateRenderQuery';
import {  } from './templateRenderQueryResourceObject';
import {  } from './templateRenderQueryResourceObjectAttributes';
import {  } from './templateResponseObjectResource';
import {  } from './templateResponseObjectResourceAttributes';
import {  } from './templateUniversalContentEnum';
import {  } from './templateUpdateHtmlOrDndQuery';
import {  } from './templateUpdateHtmlOrDndQueryResourceObject';
import {  } from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
import {  } from './text';
import {  } from './textBlockDataV0';
import {  } from './textBlockDataV1';
import {  } from './textBlockStylesV0';
import {  } from './textBlockStylesV1';
import {  } from './textBlockV0';
import {  } from './textBlockV1';
import {  } from './textProperties';
import {  } from './textStyleStyles';
import {  } from './textStyleV0';
import {  } from './textStyleV0FontFamily';
import {  } from './textStyleV1';
import {  } from './textStyles';
import {  } from './throttledSendStrategy';
import {  } from './timeDelayAction';
import {  } from './timeDelayActionData';
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
import {  } from './triggerBranchActionDataTriggerFilter';
import {  } from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
import {  } from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
import {  } from './uRLPatterns';
import {  } from './uRLPatternsProperties';
import {  } from './unidentifiedProfiles';
import {  } from './uniqueCouponConfig';
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
import {  } from './unsubscriptionChannels';
import {  } from './unsubscriptionParameters';
import {  } from './unsupportedBlock';
import {  } from './unsupportedSendStrategy';
import {  } from './updateProfileAction';
import {  } from './updateProfileActionData';
import {  } from './updateProfileActionDataProfileOperationsInner';
import {  } from './utmParam';
import {  } from './valuesData';
import {  } from './variableTimerConfiguration';
import {  } from './version';
import {  } from './versionProperties';
import {  } from './versionStyles';
import {  } from './versionTriggersInner';
import {  } from './videoBlockData';
import {  } from './videoBlockProperties';
import {  } from './videoBlockStyles';
import {  } from './videoBlockV0';
import {  } from './videoBlockV1';
import {  } from './visibility';
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
import {  } from './webhookResponseObjectResourceRelationships';
import {  } from './webhookResponseObjectResourceRelationshipsWebhookTopics';
import {  } from './webhookResponseObjectResourceRelationshipsWebhookTopicsDataInner';
import {  } from './webhookTopicEnum';
import {  } from './webhookTopicResponseObjectResource';
import {  } from './whatsAppSubscriptionParameters';
import {  } from './whatsAppUnsubscriptionParameters';
import {  } from './whatsappChannel';
import {  } from './whatsappConversationalChannel';
import {  } from './whatsappMarketingChannel';
import {  } from './whatsappTransactionalChannel';

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

const primitiveToTypeof: {[k: string]: string} = {
    string: "string",
    boolean: "boolean",
    number: "number",
    integer: "number",
    double: "number",
    long: "number",
    float: "number",
};

let enumsMap: {[index: string]: any} = {
        "ABTestSendStrategy.MethodEnum": ABTestSendStrategy.MethodEnum,
        "APIMethodFilter.FieldEnum": APIMethodFilter.FieldEnum,
        "APIMethodFilter.MethodEnum": APIMethodFilter.MethodEnum,
        "APISchemaProperty.TypeEnum": APISchemaProperty.TypeEnum,
        "AbTestAction.TypeEnum": AbTestAction.TypeEnum,
        "AbTestActionData.StatusEnum": AbTestActionData.StatusEnum,
        "AbTestActionData.ExperimentStatusEnum": AbTestActionData.ExperimentStatusEnum,
        "AbTestActionDataCurrentExperiment.WinnerMetricEnum": AbTestActionDataCurrentExperiment.WinnerMetricEnum,
        "AccountEnum": AccountEnum,
        "ActionOutputCondition.TypeEnum": ActionOutputCondition.TypeEnum,
        "ActionOutputSplitAction.TypeEnum": ActionOutputSplitAction.TypeEnum,
        "AfterCloseTimeout.TypeEnum": AfterCloseTimeout.TypeEnum,
        "AgeGate.TypeEnum": AgeGate.TypeEnum,
        "AgeGate.DisplayDeviceEnum": AgeGate.DisplayDeviceEnum,
        "AgeGateProperties.DisplayDeviceEnum": AgeGateProperties.DisplayDeviceEnum,
        "AgeGateProperties.PropertyNameEnum": AgeGateProperties.PropertyNameEnum,
        "AgeGateProperties.SmsCountryCodeEnum": AgeGateProperties.SmsCountryCodeEnum,
        "AlltimeDateFilter.TypeEnum": AlltimeDateFilter.TypeEnum,
        "AlltimeDateFilter.OperatorEnum": AlltimeDateFilter.OperatorEnum,
        "AnniversaryDateFilter.TypeEnum": AnniversaryDateFilter.TypeEnum,
        "AnniversaryDateFilter.OperatorEnum": AnniversaryDateFilter.OperatorEnum,
        "AttributionEnum": AttributionEnum,
        "BackInStock.TypeEnum": BackInStock.TypeEnum,
        "BackInStockDelayAction.TypeEnum": BackInStockDelayAction.TypeEnum,
        "BackInStockDynamicButtonBorderStyles.StyleEnum": BackInStockDynamicButtonBorderStyles.StyleEnum,
        "BackInStockDynamicButtonData.DisplayEnum": BackInStockDynamicButtonData.DisplayEnum,
        "BackInStockDynamicButtonStyles.WidthEnum": BackInStockDynamicButtonStyles.WidthEnum,
        "BackInStockDynamicButtonStyles.AlignmentEnum": BackInStockDynamicButtonStyles.AlignmentEnum,
        "BackInStockDynamicButtonTextStyles.FontWeightEnum": BackInStockDynamicButtonTextStyles.FontWeightEnum,
        "BackInStockEmailConsentCheckbox.TypeEnum": BackInStockEmailConsentCheckbox.TypeEnum,
        "BackInStockEmailConsentCheckboxProperties.DisplayDeviceEnum": BackInStockEmailConsentCheckboxProperties.DisplayDeviceEnum,
        "BackInStockEmailConsentCheckboxProperties.PropertyNameEnum": BackInStockEmailConsentCheckboxProperties.PropertyNameEnum,
        "BackInStockEmailConsentCheckboxProperties.PlaceholderEnum": BackInStockEmailConsentCheckboxProperties.PlaceholderEnum,
        "BackInStockEmailConsentCheckboxStyles.HorizontalAlignmentEnum": BackInStockEmailConsentCheckboxStyles.HorizontalAlignmentEnum,
        "BackInStockMethodFilter.FieldEnum": BackInStockMethodFilter.FieldEnum,
        "BackInStockMethodFilter.MethodEnum": BackInStockMethodFilter.MethodEnum,
        "BackInStockSubscriptionEnum": BackInStockSubscriptionEnum,
        "BackgroundImageStyles.HorizontalAlignmentEnum": BackgroundImageStyles.HorizontalAlignmentEnum,
        "BackgroundImageStyles.PositionEnum": BackgroundImageStyles.PositionEnum,
        "BackgroundImageStyles.VerticalAlignmentEnum": BackgroundImageStyles.VerticalAlignmentEnum,
        "BannerStyles.DesktopPositionEnum": BannerStyles.DesktopPositionEnum,
        "BannerStyles.MobilePositionEnum": BannerStyles.MobilePositionEnum,
        "BaseStyle.StyleTypeEnum": BaseStyle.StyleTypeEnum,
        "BaseStyleStyles.BackgroundFormatEnum": BaseStyleStyles.BackgroundFormatEnum,
        "BaseStyleStyles.BackgroundPositionEnum": BaseStyleStyles.BackgroundPositionEnum,
        "BaseStyleStyles.BorderStyleEnum": BaseStyleStyles.BorderStyleEnum,
        "BlockDisplayOptions.ShowOnEnum": BlockDisplayOptions.ShowOnEnum,
        "BooleanFilter.TypeEnum": BooleanFilter.TypeEnum,
        "BooleanFilter.OperatorEnum": BooleanFilter.OperatorEnum,
        "BorderStyle.StyleEnum": BorderStyle.StyleEnum,
        "BounceDateFilter.FieldEnum": BounceDateFilter.FieldEnum,
        "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum,
        "BulkRemoveMethodFilter.FieldEnum": BulkRemoveMethodFilter.FieldEnum,
        "BulkRemoveMethodFilter.MethodEnum": BulkRemoveMethodFilter.MethodEnum,
        "Button.TypeEnum": Button.TypeEnum,
        "ButtonBlockStyles.BorderStyleEnum": ButtonBlockStyles.BorderStyleEnum,
        "ButtonBlockStyles.FontStyleEnum": ButtonBlockStyles.FontStyleEnum,
        "ButtonBlockStyles.TextAlignEnum": ButtonBlockStyles.TextAlignEnum,
        "ButtonBlockV0.ContentTypeEnum": ButtonBlockV0.ContentTypeEnum,
        "ButtonBlockV0.TypeEnum": ButtonBlockV0.TypeEnum,
        "ButtonBlockV1.ContentTypeEnum": ButtonBlockV1.ContentTypeEnum,
        "ButtonBlockV1.TypeEnum": ButtonBlockV1.TypeEnum,
        "ButtonProperties.DisplayDeviceEnum": ButtonProperties.DisplayDeviceEnum,
        "ButtonStyles.WidthEnum": ButtonStyles.WidthEnum,
        "ButtonStyles.AlignmentEnum": ButtonStyles.AlignmentEnum,
        "CalendarDateFilter.TypeEnum": CalendarDateFilter.TypeEnum,
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
        "CampaignTrackingSettingDynamicParam.TypeEnum": CampaignTrackingSettingDynamicParam.TypeEnum,
        "CampaignTrackingSettingDynamicParam.ValueEnum": CampaignTrackingSettingDynamicParam.ValueEnum,
        "CampaignTrackingSettingStaticParam.TypeEnum": CampaignTrackingSettingStaticParam.TypeEnum,
        "CampaignValuesReportEnum": CampaignValuesReportEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum": CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.GroupByEnum": CampaignValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "CarrierDeactivationMethodFilter.FieldEnum": CarrierDeactivationMethodFilter.FieldEnum,
        "CarrierDeactivationMethodFilter.MethodEnum": CarrierDeactivationMethodFilter.MethodEnum,
        "CartContent.TypeEnum": CartContent.TypeEnum,
        "CartItemCount.TypeEnum": CartItemCount.TypeEnum,
        "CartItemCountProperties.ComparisonEnum": CartItemCountProperties.ComparisonEnum,
        "CartProduct.TypeEnum": CartProduct.TypeEnum,
        "CartProductProperties.TypeEnum": CartProductProperties.TypeEnum,
        "CartValue.TypeEnum": CartValue.TypeEnum,
        "CartValueProperties.ComparisonEnum": CartValueProperties.ComparisonEnum,
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
        "Channel.TypeEnum": Channel.TypeEnum,
        "ChannelProperties.ChannelEnum": ChannelProperties.ChannelEnum,
        "Checkboxes.TypeEnum": Checkboxes.TypeEnum,
        "CheckboxesProperties.DisplayDeviceEnum": CheckboxesProperties.DisplayDeviceEnum,
        "CheckboxesStyles.ArrangementEnum": CheckboxesStyles.ArrangementEnum,
        "CheckboxesStyles.AlignmentEnum": CheckboxesStyles.AlignmentEnum,
        "CheckoutMethodFilter.FieldEnum": CheckoutMethodFilter.FieldEnum,
        "CheckoutMethodFilter.MethodEnum": CheckoutMethodFilter.MethodEnum,
        "Close.TypeEnum": Close.TypeEnum,
        "CodeAction.TypeEnum": CodeAction.TypeEnum,
        "ConditionalBranchAction.TypeEnum": ConditionalBranchAction.TypeEnum,
        "ConstantContactIntegrationFilter.TypeEnum": ConstantContactIntegrationFilter.TypeEnum,
        "ConstantContactIntegrationFilter.OperatorEnum": ConstantContactIntegrationFilter.OperatorEnum,
        "ConstantContactIntegrationFilter.ValueEnum": ConstantContactIntegrationFilter.ValueEnum,
        "ConstantContactIntegrationMethodFilter.FieldEnum": ConstantContactIntegrationMethodFilter.FieldEnum,
        "ConstantContactIntegrationMethodFilter.MethodEnum": ConstantContactIntegrationMethodFilter.MethodEnum,
        "ConstantPropertyMapping.TypeEnum": ConstantPropertyMapping.TypeEnum,
        "ContentExperimentAction.TypeEnum": ContentExperimentAction.TypeEnum,
        "ContentExperimentActionData.StatusEnum": ContentExperimentActionData.StatusEnum,
        "ContentExperimentActionData.ExperimentStatusEnum": ContentExperimentActionData.ExperimentStatusEnum,
        "ContentExperimentActionDataCurrentExperiment.WinnerMetricEnum": ContentExperimentActionDataCurrentExperiment.WinnerMetricEnum,
        "ConversationEnum": ConversationEnum,
        "ConversationMessageEnum": ConversationMessageEnum,
        "ConversationResponseObjectResourceAttributes.ChannelEnum": ConversationResponseObjectResourceAttributes.ChannelEnum,
        "CountdownDelayAction.TypeEnum": CountdownDelayAction.TypeEnum,
        "CountdownDelayActionData.UnitEnum": CountdownDelayActionData.UnitEnum,
        "CountdownDelayActionData.TimezoneEnum": CountdownDelayActionData.TimezoneEnum,
        "CountdownDelayActionData.DelayUntilWeekdaysEnum": CountdownDelayActionData.DelayUntilWeekdaysEnum,
        "CountdownTimer.TypeEnum": CountdownTimer.TypeEnum,
        "CountdownTimerProperties.DisplayDeviceEnum": CountdownTimerProperties.DisplayDeviceEnum,
        "CountdownTimerProperties.ClockFaceEnum": CountdownTimerProperties.ClockFaceEnum,
        "CountdownTimerProperties.AnimationEnum": CountdownTimerProperties.AnimationEnum,
        "CountdownTimerStyles.LabelFontWeightEnum": CountdownTimerStyles.LabelFontWeightEnum,
        "Coupon.TypeEnum": Coupon.TypeEnum,
        "CouponBlockStyles.BorderStyleEnum": CouponBlockStyles.BorderStyleEnum,
        "CouponBlockStyles.FontStyleEnum": CouponBlockStyles.FontStyleEnum,
        "CouponBlockStyles.TextAlignEnum": CouponBlockStyles.TextAlignEnum,
        "CouponBlockV0.ContentTypeEnum": CouponBlockV0.ContentTypeEnum,
        "CouponBlockV0.TypeEnum": CouponBlockV0.TypeEnum,
        "CouponBlockV1.ContentTypeEnum": CouponBlockV1.ContentTypeEnum,
        "CouponBlockV1.TypeEnum": CouponBlockV1.TypeEnum,
        "CouponCodeBulkCreateJobEnum": CouponCodeBulkCreateJobEnum,
        "CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum": CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeEnum": CouponCodeEnum,
        "CouponCodeResponseObjectResourceAttributes.StatusEnum": CouponCodeResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum": CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum,
        "CouponEnum": CouponEnum,
        "CouponProperties.DisplayDeviceEnum": CouponProperties.DisplayDeviceEnum,
        "CustomHTML.TypeEnum": CustomHTML.TypeEnum,
        "CustomHTMLProperties.DisplayDeviceEnum": CustomHTMLProperties.DisplayDeviceEnum,
        "CustomJavascript.TypeEnum": CustomJavascript.TypeEnum,
        "CustomMetricDefinition.AggregationMethodEnum": CustomMetricDefinition.AggregationMethodEnum,
        "CustomMetricEnum": CustomMetricEnum,
        "CustomObjectDateTrigger.TypeEnum": CustomObjectDateTrigger.TypeEnum,
        "CustomObjectDateTrigger.DateFieldTypeEnum": CustomObjectDateTrigger.DateFieldTypeEnum,
        "CustomObjectDateTrigger.TimedeltaUnitBeforeDateEnum": CustomObjectDateTrigger.TimedeltaUnitBeforeDateEnum,
        "CustomObjectDateTrigger.RecurrenceFrequencyEnum": CustomObjectDateTrigger.RecurrenceFrequencyEnum,
        "CustomObjectDateTrigger.TimezoneEnum": CustomObjectDateTrigger.TimezoneEnum,
        "CustomObjectDateTrigger.TriggerDaysEnum": CustomObjectDateTrigger.TriggerDaysEnum,
        "CustomObjectPropertyCondition.TypeEnum": CustomObjectPropertyCondition.TypeEnum,
        "CustomObjectRelationshipSource.TypeEnum": CustomObjectRelationshipSource.TypeEnum,
        "CustomObjectRelationshipSource.UpdateStrategyEnum": CustomObjectRelationshipSource.UpdateStrategyEnum,
        "CustomObjectTriggerCondition.TypeEnum": CustomObjectTriggerCondition.TypeEnum,
        "CustomSourceFilter.FieldEnum": CustomSourceFilter.FieldEnum,
        "DataPrivacyDeletionJobEnum": DataPrivacyDeletionJobEnum,
        "DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum": DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum,
        "DataSourceEnum": DataSourceEnum,
        "DataSourceRecordBulkCreateJobEnum": DataSourceRecordBulkCreateJobEnum,
        "DataSourceRecordCreateJobEnum": DataSourceRecordCreateJobEnum,
        "DataSourceRecordEnum": DataSourceRecordEnum,
        "DataSourceResponseObjectResourceAttributes.VisibilityEnum": DataSourceResponseObjectResourceAttributes.VisibilityEnum,
        "DataWarehouseImportMethodFilter.FieldEnum": DataWarehouseImportMethodFilter.FieldEnum,
        "DataWarehouseImportMethodFilter.MethodEnum": DataWarehouseImportMethodFilter.MethodEnum,
        "DateProperties.DisplayDeviceEnum": DateProperties.DisplayDeviceEnum,
        "Delay.TypeEnum": Delay.TypeEnum,
        "Device.TypeEnum": Device.TypeEnum,
        "DeviceMetadata.KlaviyoSdkEnum": DeviceMetadata.KlaviyoSdkEnum,
        "DeviceMetadata.OsNameEnum": DeviceMetadata.OsNameEnum,
        "DeviceMetadata.EnvironmentEnum": DeviceMetadata.EnvironmentEnum,
        "DeviceProperties.DeviceEnum": DeviceProperties.DeviceEnum,
        "DisplayOptions.ShowOnEnum": DisplayOptions.ShowOnEnum,
        "DoubleOptinFilter.FieldEnum": DoubleOptinFilter.FieldEnum,
        "DropShadowBlockStyles.ShadowColorEnum": DropShadowBlockStyles.ShadowColorEnum,
        "DropShadowBlockV0.ContentTypeEnum": DropShadowBlockV0.ContentTypeEnum,
        "DropShadowBlockV0.TypeEnum": DropShadowBlockV0.TypeEnum,
        "DropShadowBlockV1.ContentTypeEnum": DropShadowBlockV1.ContentTypeEnum,
        "DropShadowBlockV1.TypeEnum": DropShadowBlockV1.TypeEnum,
        "Dropdown.TypeEnum": Dropdown.TypeEnum,
        "DropdownProperties.DisplayDeviceEnum": DropdownProperties.DisplayDeviceEnum,
        "DynamicButton.TypeEnum": DynamicButton.TypeEnum,
        "DynamicReviewBlockProperties.VerifiedBadgeLanguageEnum": DynamicReviewBlockProperties.VerifiedBadgeLanguageEnum,
        "DynamicReviewBlockProperties.FallbackOptionsEnum": DynamicReviewBlockProperties.FallbackOptionsEnum,
        "DynamicReviewBlockProperties.FallbackContentTypeEnum": DynamicReviewBlockProperties.FallbackContentTypeEnum,
        "DynamicReviewBlockProperties.ProductSelectionModeEnum": DynamicReviewBlockProperties.ProductSelectionModeEnum,
        "DynamicTrackingParam.TypeEnum": DynamicTrackingParam.TypeEnum,
        "DynamicTrackingParam.ValueEnum": DynamicTrackingParam.ValueEnum,
        "EffectiveDateFilter.FieldEnum": EffectiveDateFilter.FieldEnum,
        "Email.TypeEnum": Email.TypeEnum,
        "EmailMarketingSuppression.ReasonEnum": EmailMarketingSuppression.ReasonEnum,
        "EmailMessageDefinition.ChannelEnum": EmailMessageDefinition.ChannelEnum,
        "EmailProperties.DisplayDeviceEnum": EmailProperties.DisplayDeviceEnum,
        "EmailProperties.PropertyNameEnum": EmailProperties.PropertyNameEnum,
        "EmbeddedObjectSchemaResourceObjectAttributes.StatusEnum": EmbeddedObjectSchemaResourceObjectAttributes.StatusEnum,
        "EncodedFormResponseObjectResourceAttributes.StatusEnum": EncodedFormResponseObjectResourceAttributes.StatusEnum,
        "EqualsStringFilter.TypeEnum": EqualsStringFilter.TypeEnum,
        "EqualsStringFilter.OperatorEnum": EqualsStringFilter.OperatorEnum,
        "EventBulkCreateEnum": EventBulkCreateEnum,
        "EventBulkCreateJobEnum": EventBulkCreateJobEnum,
        "EventEnum": EventEnum,
        "ExistenceOperatorExistenceFilter.TypeEnum": ExistenceOperatorExistenceFilter.TypeEnum,
        "ExistenceOperatorExistenceFilter.OperatorEnum": ExistenceOperatorExistenceFilter.OperatorEnum,
        "ExitIntent.TypeEnum": ExitIntent.TypeEnum,
        "ExplicitlyReachable.ReachableStatusEnum": ExplicitlyReachable.ReachableStatusEnum,
        "ExplicitlyUnreachable.ReachableStatusEnum": ExplicitlyUnreachable.ReachableStatusEnum,
        "FailedAgeGateMethodFilter.FieldEnum": FailedAgeGateMethodFilter.FieldEnum,
        "FailedAgeGateMethodFilter.MethodEnum": FailedAgeGateMethodFilter.MethodEnum,
        "FixedTimerConfiguration.TypeEnum": FixedTimerConfiguration.TypeEnum,
        "FixedTimerConfiguration.TimezoneEnum": FixedTimerConfiguration.TimezoneEnum,
        "FlowActionEnum": FlowActionEnum,
        "FlowEnum": FlowEnum,
        "FlowMessageEnum": FlowMessageEnum,
        "FlowPushNotification.OnOpenEnum": FlowPushNotification.OnOpenEnum,
        "FlowPushNotification.PushTypeEnum": FlowPushNotification.PushTypeEnum,
        "FlowResponseObjectResourceAttributes.TriggerTypeEnum": FlowResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowSeriesReportEnum": FlowSeriesReportEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.GroupByEnum": FlowSeriesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FlowTrackingSettingDynamicParam.TypeEnum": FlowTrackingSettingDynamicParam.TypeEnum,
        "FlowTrackingSettingDynamicParam.ValueEnum": FlowTrackingSettingDynamicParam.ValueEnum,
        "FlowTrackingSettingStaticParam.TypeEnum": FlowTrackingSettingStaticParam.TypeEnum,
        "FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum": FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowValuesReportEnum": FlowValuesReportEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.GroupByEnum": FlowValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FlowsProfileMetricCondition.TypeEnum": FlowsProfileMetricCondition.TypeEnum,
        "FlowsProfileMetricCondition.MeasurementEnum": FlowsProfileMetricCondition.MeasurementEnum,
        "FormCreateQueryResourceObjectAttributes.StatusEnum": FormCreateQueryResourceObjectAttributes.StatusEnum,
        "FormEnum": FormEnum,
        "FormMethodFilter.FieldEnum": FormMethodFilter.FieldEnum,
        "FormMethodFilter.MethodEnum": FormMethodFilter.MethodEnum,
        "FormResponseObjectResourceAttributes.StatusEnum": FormResponseObjectResourceAttributes.StatusEnum,
        "FormSeriesReportEnum": FormSeriesReportEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum": FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormSubscribeFilter.FieldEnum": FormSubscribeFilter.FieldEnum,
        "FormSubscribeFilter.MethodEnum": FormSubscribeFilter.MethodEnum,
        "FormValuesReportEnum": FormValuesReportEnum,
        "FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormValuesRequestDTOResourceObjectAttributes.GroupByEnum": FormValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormVersionEnum": FormVersionEnum,
        "FormVersionResponseObjectResourceAttributes.FormTypeEnum": FormVersionResponseObjectResourceAttributes.FormTypeEnum,
        "FormVersionResponseObjectResourceAttributes.StatusEnum": FormVersionResponseObjectResourceAttributes.StatusEnum,
        "GoToInbox.TypeEnum": GoToInbox.TypeEnum,
        "GoToInbox.PropertiesEnum": GoToInbox.PropertiesEnum,
        "GreaterThanPositiveNumericFilter.TypeEnum": GreaterThanPositiveNumericFilter.TypeEnum,
        "GreaterThanPositiveNumericFilter.OperatorEnum": GreaterThanPositiveNumericFilter.OperatorEnum,
        "HTMLBlockV0.ContentTypeEnum": HTMLBlockV0.ContentTypeEnum,
        "HTMLBlockV0.TypeEnum": HTMLBlockV0.TypeEnum,
        "HTMLBlockV1.ContentTypeEnum": HTMLBlockV1.ContentTypeEnum,
        "HTMLBlockV1.TypeEnum": HTMLBlockV1.TypeEnum,
        "HTMLText.TypeEnum": HTMLText.TypeEnum,
        "HTMLTextProperties.DisplayDeviceEnum": HTMLTextProperties.DisplayDeviceEnum,
        "HasEmailMarketing.SubscriptionEnum": HasEmailMarketing.SubscriptionEnum,
        "HasEmailMarketingConsent.ChannelEnum": HasEmailMarketingConsent.ChannelEnum,
        "HasEmailMarketingNeverSubscribed.SubscriptionEnum": HasEmailMarketingNeverSubscribed.SubscriptionEnum,
        "HasEmailMarketingSubscribed.SubscriptionEnum": HasEmailMarketingSubscribed.SubscriptionEnum,
        "HasPushMarketing.SubscriptionEnum": HasPushMarketing.SubscriptionEnum,
        "HasPushMarketingConsent.ChannelEnum": HasPushMarketingConsent.ChannelEnum,
        "HasSMSMarketingConsent.ChannelEnum": HasSMSMarketingConsent.ChannelEnum,
        "HasSMSMarketingSubscribed.SubscriptionEnum": HasSMSMarketingSubscribed.SubscriptionEnum,
        "HeaderBlockStyles.BorderStyleEnum": HeaderBlockStyles.BorderStyleEnum,
        "HeaderBlockStyles.DesktopLayoutEnum": HeaderBlockStyles.DesktopLayoutEnum,
        "HeaderBlockStyles.FontStyleEnum": HeaderBlockStyles.FontStyleEnum,
        "HeaderBlockStyles.ItemAlignEnum": HeaderBlockStyles.ItemAlignEnum,
        "HeaderBlockStyles.ItemSpacingTypeEnum": HeaderBlockStyles.ItemSpacingTypeEnum,
        "HeaderBlockStyles.LogoAlignEnum": HeaderBlockStyles.LogoAlignEnum,
        "HeaderBlockStyles.MobileLayoutEnum": HeaderBlockStyles.MobileLayoutEnum,
        "HeaderBlockStyles.VerticalAlignEnum": HeaderBlockStyles.VerticalAlignEnum,
        "HeaderBlockV0.ContentTypeEnum": HeaderBlockV0.ContentTypeEnum,
        "HeaderBlockV0.TypeEnum": HeaderBlockV0.TypeEnum,
        "HeaderBlockV1.ContentTypeEnum": HeaderBlockV1.ContentTypeEnum,
        "HeaderBlockV1.TypeEnum": HeaderBlockV1.TypeEnum,
        "HeaderImageSubBlock.TypeEnum": HeaderImageSubBlock.TypeEnum,
        "HeaderImageSubBlock.ShowOnEnum": HeaderImageSubBlock.ShowOnEnum,
        "HeaderLinkSubBlock.TypeEnum": HeaderLinkSubBlock.TypeEnum,
        "HeaderLinkSubBlock.ShowOnEnum": HeaderLinkSubBlock.ShowOnEnum,
        "HeaderLogoSubBlock.TypeEnum": HeaderLogoSubBlock.TypeEnum,
        "HeaderLogoSubBlock.ShowOnEnum": HeaderLogoSubBlock.ShowOnEnum,
        "Heading1Style.StyleTypeEnum": Heading1Style.StyleTypeEnum,
        "Heading2Style.StyleTypeEnum": Heading2Style.StyleTypeEnum,
        "Heading3Style.StyleTypeEnum": Heading3Style.StyleTypeEnum,
        "Heading4Style.StyleTypeEnum": Heading4Style.StyleTypeEnum,
        "HeadingStyleStyles.FontStyleEnum": HeadingStyleStyles.FontStyleEnum,
        "HeadingStyleStyles.TextAlignEnum": HeadingStyleStyles.TextAlignEnum,
        "HorizontalRuleBlockStyles.BorderStyleEnum": HorizontalRuleBlockStyles.BorderStyleEnum,
        "HorizontalRuleBlockV0.ContentTypeEnum": HorizontalRuleBlockV0.ContentTypeEnum,
        "HorizontalRuleBlockV0.TypeEnum": HorizontalRuleBlockV0.TypeEnum,
        "HorizontalRuleBlockV1.ContentTypeEnum": HorizontalRuleBlockV1.ContentTypeEnum,
        "HorizontalRuleBlockV1.TypeEnum": HorizontalRuleBlockV1.TypeEnum,
        "IafDeeplinkToScreen.TypeEnum": IafDeeplinkToScreen.TypeEnum,
        "IdentifiedProfiles.TypeEnum": IdentifiedProfiles.TypeEnum,
        "Image.TypeEnum": Image.TypeEnum,
        "ImageBlockStyles.AlignEnum": ImageBlockStyles.AlignEnum,
        "ImageBlockStyles.BlockBorderStyleEnum": ImageBlockStyles.BlockBorderStyleEnum,
        "ImageBlockV0.ContentTypeEnum": ImageBlockV0.ContentTypeEnum,
        "ImageBlockV0.TypeEnum": ImageBlockV0.TypeEnum,
        "ImageBlockV1.ContentTypeEnum": ImageBlockV1.ContentTypeEnum,
        "ImageBlockV1.TypeEnum": ImageBlockV1.TypeEnum,
        "ImageEnum": ImageEnum,
        "ImageProperties.DisplayDeviceEnum": ImageProperties.DisplayDeviceEnum,
        "ImageStyles.HorizontalAlignmentEnum": ImageStyles.HorizontalAlignmentEnum,
        "ImmediateSendStrategy.MethodEnum": ImmediateSendStrategy.MethodEnum,
        "ImplicitlyOrExplicitlyReachable.ReachableStatusEnum": ImplicitlyOrExplicitlyReachable.ReachableStatusEnum,
        "ImplicitlyOrExplicitlyUnreachable.ReachableStatusEnum": ImplicitlyOrExplicitlyUnreachable.ReachableStatusEnum,
        "ImplicitlyReachable.ReachableStatusEnum": ImplicitlyReachable.ReachableStatusEnum,
        "ImplicitlyUnreachable.ReachableStatusEnum": ImplicitlyUnreachable.ReachableStatusEnum,
        "ImportErrorEnum": ImportErrorEnum,
        "InStringArrayFilter.TypeEnum": InStringArrayFilter.TypeEnum,
        "InStringArrayFilter.OperatorEnum": InStringArrayFilter.OperatorEnum,
        "InTheLastBaseRelativeDateFilter.TypeEnum": InTheLastBaseRelativeDateFilter.TypeEnum,
        "InTheLastBaseRelativeDateFilter.OperatorEnum": InTheLastBaseRelativeDateFilter.OperatorEnum,
        "InTheLastBaseRelativeDateFilter.UnitEnum": InTheLastBaseRelativeDateFilter.UnitEnum,
        "InboundMessageMethodFilter.FieldEnum": InboundMessageMethodFilter.FieldEnum,
        "InboundMessageMethodFilter.MethodEnum": InboundMessageMethodFilter.MethodEnum,
        "Increment.BadgeConfigEnum": Increment.BadgeConfigEnum,
        "IngestionLogResponseObjectResourceAttributes.StatusEnum": IngestionLogResponseObjectResourceAttributes.StatusEnum,
        "IngestionLogResponseObjectResourceAttributes.EventTypeEnum": IngestionLogResponseObjectResourceAttributes.EventTypeEnum,
        "IntegerFilter.TypeEnum": IntegerFilter.TypeEnum,
        "IntegerFilter.OperatorEnum": IntegerFilter.OperatorEnum,
        "InternalScheduledReportBuilderReportData.ServiceMethodTypeEnum": InternalScheduledReportBuilderReportData.ServiceMethodTypeEnum,
        "InternalScheduledReportData.ServiceMethodTypeEnum": InternalScheduledReportData.ServiceMethodTypeEnum,
        "InternalServiceAction.TypeEnum": InternalServiceAction.TypeEnum,
        "InternalServiceActionData.StatusEnum": InternalServiceActionData.StatusEnum,
        "InternalTrackEventData.ServiceMethodTypeEnum": InternalTrackEventData.ServiceMethodTypeEnum,
        "InternalUnknownServiceData.ServiceMethodTypeEnum": InternalUnknownServiceData.ServiceMethodTypeEnum,
        "InvalidEmailDateFilter.FieldEnum": InvalidEmailDateFilter.FieldEnum,
        "IpAllowlistResourceName": IpAllowlistResourceName,
        "IsSetExistenceFilter.TypeEnum": IsSetExistenceFilter.TypeEnum,
        "IsSetExistenceFilter.OperatorEnum": IsSetExistenceFilter.OperatorEnum,
        "LessThanPositiveNumericFilter.TypeEnum": LessThanPositiveNumericFilter.TypeEnum,
        "LessThanPositiveNumericFilter.OperatorEnum": LessThanPositiveNumericFilter.OperatorEnum,
        "LinkStyle.StyleTypeEnum": LinkStyle.StyleTypeEnum,
        "LinkStyleStyles.FontStyleEnum": LinkStyleStyles.FontStyleEnum,
        "LinkStyles.DecorationEnum": LinkStyles.DecorationEnum,
        "ListContainsOperatorListContainsFilter.TypeEnum": ListContainsOperatorListContainsFilter.TypeEnum,
        "ListContainsOperatorListContainsFilter.OperatorEnum": ListContainsOperatorListContainsFilter.OperatorEnum,
        "ListCreateQueryResourceObjectAttributes.OptInProcessEnum": ListCreateQueryResourceObjectAttributes.OptInProcessEnum,
        "ListEnum": ListEnum,
        "ListLengthFilter.TypeEnum": ListLengthFilter.TypeEnum,
        "ListLengthFilter.OperatorEnum": ListLengthFilter.OperatorEnum,
        "ListListResponseObjectResourceAttributes.OptInProcessEnum": ListListResponseObjectResourceAttributes.OptInProcessEnum,
        "ListPartialUpdateQueryResourceObjectAttributes.OptInProcessEnum": ListPartialUpdateQueryResourceObjectAttributes.OptInProcessEnum,
        "ListRegexOperatorListContainsFilter.TypeEnum": ListRegexOperatorListContainsFilter.TypeEnum,
        "ListRegexOperatorListContainsFilter.OperatorEnum": ListRegexOperatorListContainsFilter.OperatorEnum,
        "ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum": ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum,
        "ListSetFilter.TypeEnum": ListSetFilter.TypeEnum,
        "ListSetFilter.OperatorEnum": ListSetFilter.OperatorEnum,
        "ListSubstringFilter.TypeEnum": ListSubstringFilter.TypeEnum,
        "ListSubstringFilter.OperatorEnum": ListSubstringFilter.OperatorEnum,
        "ListTrigger.TypeEnum": ListTrigger.TypeEnum,
        "ListUpdateAction.TypeEnum": ListUpdateAction.TypeEnum,
        "ListUpdateActionData.StatusEnum": ListUpdateActionData.StatusEnum,
        "ListsAndSegments.TypeEnum": ListsAndSegments.TypeEnum,
        "Location.TypeEnum": Location.TypeEnum,
        "LowInventoryCondition.TypeEnum": LowInventoryCondition.TypeEnum,
        "LowInventoryTrigger.TypeEnum": LowInventoryTrigger.TypeEnum,
        "LowInventoryTrigger.ProductLevelEnum": LowInventoryTrigger.ProductLevelEnum,
        "LowInventoryTrigger.AudienceEnum": LowInventoryTrigger.AudienceEnum,
        "MailboxProviderMethodFilter.FieldEnum": MailboxProviderMethodFilter.FieldEnum,
        "MailboxProviderMethodFilter.MethodEnum": MailboxProviderMethodFilter.MethodEnum,
        "ManualAddManualMethodFilter.FieldEnum": ManualAddManualMethodFilter.FieldEnum,
        "ManualAddManualMethodFilter.MethodEnum": ManualAddManualMethodFilter.MethodEnum,
        "ManualImportManualMethodFilter.FieldEnum": ManualImportManualMethodFilter.FieldEnum,
        "ManualImportManualMethodFilter.MethodEnum": ManualImportManualMethodFilter.MethodEnum,
        "ManualImportMethodFilter.FieldEnum": ManualImportMethodFilter.FieldEnum,
        "ManualImportMethodFilter.MethodEnum": ManualImportMethodFilter.MethodEnum,
        "ManualRemoveMethodFilter.FieldEnum": ManualRemoveMethodFilter.FieldEnum,
        "ManualRemoveMethodFilter.MethodEnum": ManualRemoveMethodFilter.MethodEnum,
        "ManualSuppressionDateFilter.FieldEnum": ManualSuppressionDateFilter.FieldEnum,
        "MappedMetricEnum": MappedMetricEnum,
        "MappedMetricPartialUpdateQueryResourceObject.IdEnum": MappedMetricPartialUpdateQueryResourceObject.IdEnum,
        "MappedMetricResponseObjectResource.IdEnum": MappedMetricResponseObjectResource.IdEnum,
        "MessageBlockedMethodFilter.FieldEnum": MessageBlockedMethodFilter.FieldEnum,
        "MessageBlockedMethodFilter.MethodEnum": MessageBlockedMethodFilter.MethodEnum,
        "MethodFilter.FieldEnum": MethodFilter.FieldEnum,
        "MethodFilter.MethodEnum": MethodFilter.MethodEnum,
        "MetricAggregateEnum": MetricAggregateEnum,
        "MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum": MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum,
        "MetricAggregateQueryResourceObjectAttributes.IntervalEnum": MetricAggregateQueryResourceObjectAttributes.IntervalEnum,
        "MetricAggregateQueryResourceObjectAttributes.ByEnum": MetricAggregateQueryResourceObjectAttributes.ByEnum,
        "MetricAggregateQueryResourceObjectAttributes.SortEnum": MetricAggregateQueryResourceObjectAttributes.SortEnum,
        "MetricEnum": MetricEnum,
        "MetricPropertyCondition.TypeEnum": MetricPropertyCondition.TypeEnum,
        "MetricPropertyEnum": MetricPropertyEnum,
        "MetricTrigger.TypeEnum": MetricTrigger.TypeEnum,
        "MobilePushMessageSilentDefinition.ChannelEnum": MobilePushMessageSilentDefinition.ChannelEnum,
        "MobilePushMessageSilentDefinition.NotificationTypeEnum": MobilePushMessageSilentDefinition.NotificationTypeEnum,
        "MobilePushMessageSilentDefinitionCreate.ChannelEnum": MobilePushMessageSilentDefinitionCreate.ChannelEnum,
        "MobilePushMessageSilentDefinitionCreate.NotificationTypeEnum": MobilePushMessageSilentDefinitionCreate.NotificationTypeEnum,
        "MobilePushMessageSilentDefinitionUpdate.ChannelEnum": MobilePushMessageSilentDefinitionUpdate.ChannelEnum,
        "MobilePushMessageSilentDefinitionUpdate.NotificationTypeEnum": MobilePushMessageSilentDefinitionUpdate.NotificationTypeEnum,
        "MobilePushMessageStandardDefinition.ChannelEnum": MobilePushMessageStandardDefinition.ChannelEnum,
        "MobilePushMessageStandardDefinition.NotificationTypeEnum": MobilePushMessageStandardDefinition.NotificationTypeEnum,
        "MobilePushMessageStandardDefinitionCreate.ChannelEnum": MobilePushMessageStandardDefinitionCreate.ChannelEnum,
        "MobilePushMessageStandardDefinitionCreate.NotificationTypeEnum": MobilePushMessageStandardDefinitionCreate.NotificationTypeEnum,
        "MobilePushMessageStandardDefinitionUpdate.ChannelEnum": MobilePushMessageStandardDefinitionUpdate.ChannelEnum,
        "MobilePushMessageStandardDefinitionUpdate.NotificationTypeEnum": MobilePushMessageStandardDefinitionUpdate.NotificationTypeEnum,
        "MobileStyle.StyleTypeEnum": MobileStyle.StyleTypeEnum,
        "ModelDate.TypeEnum": ModelDate.TypeEnum,
        "MultiBranchSplitAction.TypeEnum": MultiBranchSplitAction.TypeEnum,
        "NextStep.TypeEnum": NextStep.TypeEnum,
        "NoEmailMarketing.SubscriptionEnum": NoEmailMarketing.SubscriptionEnum,
        "NoEmailMarketingConsent.ChannelEnum": NoEmailMarketingConsent.ChannelEnum,
        "NoEmailMarketingNeverSubscribed.SubscriptionEnum": NoEmailMarketingNeverSubscribed.SubscriptionEnum,
        "NoEmailMarketingSubscribed.SubscriptionEnum": NoEmailMarketingSubscribed.SubscriptionEnum,
        "NoEmailMarketingUnsubscribed.SubscriptionEnum": NoEmailMarketingUnsubscribed.SubscriptionEnum,
        "NoPushMarketing.SubscriptionEnum": NoPushMarketing.SubscriptionEnum,
        "NoPushMarketingConsent.ChannelEnum": NoPushMarketingConsent.ChannelEnum,
        "NoSMSMarketing.SubscriptionEnum": NoSMSMarketing.SubscriptionEnum,
        "NoSMSMarketingConsent.ChannelEnum": NoSMSMarketingConsent.ChannelEnum,
        "NoSMSMarketingNeverSubscribed.SubscriptionEnum": NoSMSMarketingNeverSubscribed.SubscriptionEnum,
        "NoSMSMarketingUnsubscribed.SubscriptionEnum": NoSMSMarketingUnsubscribed.SubscriptionEnum,
        "NumericOperatorNumericFilter.TypeEnum": NumericOperatorNumericFilter.TypeEnum,
        "NumericOperatorNumericFilter.OperatorEnum": NumericOperatorNumericFilter.OperatorEnum,
        "NumericRangeFilter.TypeEnum": NumericRangeFilter.TypeEnum,
        "NumericRangeFilter.OperatorEnum": NumericRangeFilter.OperatorEnum,
        "ObjectIngestionLogEnum": ObjectIngestionLogEnum,
        "ObjectRecordBulkDeleteJobEnum": ObjectRecordBulkDeleteJobEnum,
        "ObjectRecordEnum": ObjectRecordEnum,
        "ObjectSchemaCreateQueryResourceObjectAttributes.StatusEnum": ObjectSchemaCreateQueryResourceObjectAttributes.StatusEnum,
        "ObjectSchemaEnum": ObjectSchemaEnum,
        "ObjectSchemaPartialUpdateQueryResourceObjectAttributes.StatusEnum": ObjectSchemaPartialUpdateQueryResourceObjectAttributes.StatusEnum,
        "ObjectSchemaResponseObjectResourceAttributes.StatusEnum": ObjectSchemaResponseObjectResourceAttributes.StatusEnum,
        "ObjectSchemaResponseObjectResourceAttributes.VisibilityEnum": ObjectSchemaResponseObjectResourceAttributes.VisibilityEnum,
        "ObjectTypeCreateQueryResourceObjectAttributes.VisibilityEnum": ObjectTypeCreateQueryResourceObjectAttributes.VisibilityEnum,
        "ObjectTypeEnum": ObjectTypeEnum,
        "ObjectTypeResponseObjectResourceAttributes.StatusEnum": ObjectTypeResponseObjectResourceAttributes.StatusEnum,
        "OneClickUnsubscribeMethodFilter.FieldEnum": OneClickUnsubscribeMethodFilter.FieldEnum,
        "OneClickUnsubscribeMethodFilter.MethodEnum": OneClickUnsubscribeMethodFilter.MethodEnum,
        "OpenForm.TypeEnum": OpenForm.TypeEnum,
        "OpenTrackingSubscriptionParameters.ConsentEnum": OpenTrackingSubscriptionParameters.ConsentEnum,
        "OpenTrackingUnsubscriptionParameters.ConsentEnum": OpenTrackingUnsubscriptionParameters.ConsentEnum,
        "OptInCode.TypeEnum": OptInCode.TypeEnum,
        "OptInCodeProperties.PropertyNameEnum": OptInCodeProperties.PropertyNameEnum,
        "OptInCodeProperties.DisplayDeviceEnum": OptInCodeProperties.DisplayDeviceEnum,
        "PageVisits.TypeEnum": PageVisits.TypeEnum,
        "PatchMappedMetricResponseData.IdEnum": PatchMappedMetricResponseData.IdEnum,
        "PhoneNumber.TypeEnum": PhoneNumber.TypeEnum,
        "PhoneNumberConsentChannelSettings.ConsentTypeEnum": PhoneNumberConsentChannelSettings.ConsentTypeEnum,
        "PhoneNumberProperties.DisplayDeviceEnum": PhoneNumberProperties.DisplayDeviceEnum,
        "PhoneNumberProperties.SmsConsentTypeEnum": PhoneNumberProperties.SmsConsentTypeEnum,
        "PostFlowV2ResponseDataAttributes.TriggerTypeEnum": PostFlowV2ResponseDataAttributes.TriggerTypeEnum,
        "PredictiveAnalytics.RankedChannelAffinityEnum": PredictiveAnalytics.RankedChannelAffinityEnum,
        "PreferencePageFilter.FieldEnum": PreferencePageFilter.FieldEnum,
        "PreferencePageFilter.MethodEnum": PreferencePageFilter.MethodEnum,
        "PreferencePageMethodFilter.FieldEnum": PreferencePageMethodFilter.FieldEnum,
        "PreferencePageMethodFilter.MethodEnum": PreferencePageMethodFilter.MethodEnum,
        "PreviouslySubmitted.TypeEnum": PreviouslySubmitted.TypeEnum,
        "PriceDropCondition.TypeEnum": PriceDropCondition.TypeEnum,
        "PriceDropTrigger.TypeEnum": PriceDropTrigger.TypeEnum,
        "PriceDropTrigger.PriceDropAmountUnitEnum": PriceDropTrigger.PriceDropAmountUnitEnum,
        "PriceDropTrigger.AudienceEnum": PriceDropTrigger.AudienceEnum,
        "PriceDropTrigger.CurrencyTypeEnum": PriceDropTrigger.CurrencyTypeEnum,
        "ProductBlockStyles.ButtonAlignmentEnum": ProductBlockStyles.ButtonAlignmentEnum,
        "ProductBlockStyles.ButtonBorderStyleEnum": ProductBlockStyles.ButtonBorderStyleEnum,
        "ProductBlockStyles.ButtonFontStyleEnum": ProductBlockStyles.ButtonFontStyleEnum,
        "ProductBlockStyles.DescriptionFontStyleEnum": ProductBlockStyles.DescriptionFontStyleEnum,
        "ProductBlockStyles.ItemBorderStyleEnum": ProductBlockStyles.ItemBorderStyleEnum,
        "ProductBlockStyles.ItemTextAlignmentEnum": ProductBlockStyles.ItemTextAlignmentEnum,
        "ProductBlockStyles.LayoutEnum": ProductBlockStyles.LayoutEnum,
        "ProductBlockStyles.OriginalPriceFontStyleEnum": ProductBlockStyles.OriginalPriceFontStyleEnum,
        "ProductBlockStyles.PriceFontStyleEnum": ProductBlockStyles.PriceFontStyleEnum,
        "ProductBlockStyles.RatingFontStyleEnum": ProductBlockStyles.RatingFontStyleEnum,
        "ProductBlockStyles.TitleFontStyleEnum": ProductBlockStyles.TitleFontStyleEnum,
        "ProductBlockV0.ContentTypeEnum": ProductBlockV0.ContentTypeEnum,
        "ProductBlockV0.TypeEnum": ProductBlockV0.TypeEnum,
        "ProductBlockV1.ContentTypeEnum": ProductBlockV1.ContentTypeEnum,
        "ProductBlockV1.TypeEnum": ProductBlockV1.TypeEnum,
        "ProductSubBlock.TypeEnum": ProductSubBlock.TypeEnum,
        "ProfileBulkImportJobEnum": ProfileBulkImportJobEnum,
        "ProfileEnum": ProfileEnum,
        "ProfileEventTracked.TypeEnum": ProfileEventTracked.TypeEnum,
        "ProfileHasCustomObjectCondition.TypeEnum": ProfileHasCustomObjectCondition.TypeEnum,
        "ProfileHasGroupMembershipCondition.TypeEnum": ProfileHasGroupMembershipCondition.TypeEnum,
        "ProfileHasNotReceivedEmailMessageCondition.TypeEnum": ProfileHasNotReceivedEmailMessageCondition.TypeEnum,
        "ProfileHasNotReceivedPushMessageCondition.TypeEnum": ProfileHasNotReceivedPushMessageCondition.TypeEnum,
        "ProfileHasNotReceivedSmsMessageCondition.TypeEnum": ProfileHasNotReceivedSmsMessageCondition.TypeEnum,
        "ProfileImportJobResponseObjectResourceAttributes.StatusEnum": ProfileImportJobResponseObjectResourceAttributes.StatusEnum,
        "ProfileMarketingConsentCondition.TypeEnum": ProfileMarketingConsentCondition.TypeEnum,
        "ProfileMergeEnum": ProfileMergeEnum,
        "ProfileModificationMethodFilter.FieldEnum": ProfileModificationMethodFilter.FieldEnum,
        "ProfileModificationMethodFilter.MethodEnum": ProfileModificationMethodFilter.MethodEnum,
        "ProfileNoGroupMembershipCondition.TypeEnum": ProfileNoGroupMembershipCondition.TypeEnum,
        "ProfileNotInFlowCondition.TypeEnum": ProfileNotInFlowCondition.TypeEnum,
        "ProfileObjectSchemaEnum": ProfileObjectSchemaEnum,
        "ProfileObjectTypeEnum": ProfileObjectTypeEnum,
        "ProfileOperationDelete.OperatorEnum": ProfileOperationDelete.OperatorEnum,
        "ProfileOperationUpdateOrCreateBoolean.OperatorEnum": ProfileOperationUpdateOrCreateBoolean.OperatorEnum,
        "ProfileOperationUpdateOrCreateBoolean.PropertyTypeEnum": ProfileOperationUpdateOrCreateBoolean.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateDate.OperatorEnum": ProfileOperationUpdateOrCreateDate.OperatorEnum,
        "ProfileOperationUpdateOrCreateDate.PropertyTypeEnum": ProfileOperationUpdateOrCreateDate.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateList.OperatorEnum": ProfileOperationUpdateOrCreateList.OperatorEnum,
        "ProfileOperationUpdateOrCreateList.PropertyTypeEnum": ProfileOperationUpdateOrCreateList.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateList.PropertyOperationEnum": ProfileOperationUpdateOrCreateList.PropertyOperationEnum,
        "ProfileOperationUpdateOrCreateNumeric.OperatorEnum": ProfileOperationUpdateOrCreateNumeric.OperatorEnum,
        "ProfileOperationUpdateOrCreateNumeric.PropertyTypeEnum": ProfileOperationUpdateOrCreateNumeric.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateString.OperatorEnum": ProfileOperationUpdateOrCreateString.OperatorEnum,
        "ProfileOperationUpdateOrCreateString.PropertyTypeEnum": ProfileOperationUpdateOrCreateString.PropertyTypeEnum,
        "ProfilePermissionsCondition.TypeEnum": ProfilePermissionsCondition.TypeEnum,
        "ProfilePermissionsCondition.ChannelEnum": ProfilePermissionsCondition.ChannelEnum,
        "ProfilePostalCodeDistanceCondition.TypeEnum": ProfilePostalCodeDistanceCondition.TypeEnum,
        "ProfilePostalCodeDistanceCondition.UnitEnum": ProfilePostalCodeDistanceCondition.UnitEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.MeasurementEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.MeasurementEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.OperatorEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.OperatorEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.MeasurementEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.MeasurementEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum,
        "ProfilePredictiveAnalyticsDateCondition.DimensionEnum": ProfilePredictiveAnalyticsDateCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsDateCondition.TypeEnum": ProfilePredictiveAnalyticsDateCondition.TypeEnum,
        "ProfilePredictiveAnalyticsNumericCondition.TypeEnum": ProfilePredictiveAnalyticsNumericCondition.TypeEnum,
        "ProfilePredictiveAnalyticsNumericCondition.DimensionEnum": ProfilePredictiveAnalyticsNumericCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringCondition.TypeEnum": ProfilePredictiveAnalyticsStringCondition.TypeEnum,
        "ProfilePredictiveAnalyticsStringCondition.DimensionEnum": ProfilePredictiveAnalyticsStringCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringFilter.TypeEnum": ProfilePredictiveAnalyticsStringFilter.TypeEnum,
        "ProfilePredictiveAnalyticsStringFilter.ValueEnum": ProfilePredictiveAnalyticsStringFilter.ValueEnum,
        "ProfilePropertyCondition.TypeEnum": ProfilePropertyCondition.TypeEnum,
        "ProfilePropertyDateTrigger.TypeEnum": ProfilePropertyDateTrigger.TypeEnum,
        "ProfilePropertyDateTrigger.DateFieldTypeEnum": ProfilePropertyDateTrigger.DateFieldTypeEnum,
        "ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum": ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum,
        "ProfilePropertyDateTrigger.RecurrenceFrequencyEnum": ProfilePropertyDateTrigger.RecurrenceFrequencyEnum,
        "ProfilePropertyDateTrigger.TimezoneEnum": ProfilePropertyDateTrigger.TimezoneEnum,
        "ProfilePropertyDateTrigger.TriggerDaysEnum": ProfilePropertyDateTrigger.TriggerDaysEnum,
        "ProfileRandomSampleCondition.TypeEnum": ProfileRandomSampleCondition.TypeEnum,
        "ProfileRegionCondition.TypeEnum": ProfileRegionCondition.TypeEnum,
        "ProfileRegionCondition.RegionEnum": ProfileRegionCondition.RegionEnum,
        "ProfileRelationshipSource.TypeEnum": ProfileRelationshipSource.TypeEnum,
        "ProfileRelationshipSource.UpdateStrategyEnum": ProfileRelationshipSource.UpdateStrategyEnum,
        "ProfileSubscriptionBulkCreateJobEnum": ProfileSubscriptionBulkCreateJobEnum,
        "ProfileSubscriptionBulkDeleteJobEnum": ProfileSubscriptionBulkDeleteJobEnum,
        "ProfileSuppressionBulkCreateJobEnum": ProfileSuppressionBulkCreateJobEnum,
        "ProfileSuppressionBulkDeleteJobEnum": ProfileSuppressionBulkDeleteJobEnum,
        "PromotionalSMSSubscription.TypeEnum": PromotionalSMSSubscription.TypeEnum,
        "PromotionalSMSSubscription.PropertiesEnum": PromotionalSMSSubscription.PropertiesEnum,
        "Property.BadgeConfigEnum": Property.BadgeConfigEnum,
        "ProvidedLandlineMethodFilter.FieldEnum": ProvidedLandlineMethodFilter.FieldEnum,
        "ProvidedLandlineMethodFilter.MethodEnum": ProvidedLandlineMethodFilter.MethodEnum,
        "ProvidedNoAgeMethodFilter.FieldEnum": ProvidedNoAgeMethodFilter.FieldEnum,
        "ProvidedNoAgeMethodFilter.MethodEnum": ProvidedNoAgeMethodFilter.MethodEnum,
        "PushActionButton.ActionTypeEnum": PushActionButton.ActionTypeEnum,
        "PushOnOpenApp.TypeEnum": PushOnOpenApp.TypeEnum,
        "PushOnOpenDeepLink.TypeEnum": PushOnOpenDeepLink.TypeEnum,
        "PushOnOpenWebUrl.TypeEnum": PushOnOpenWebUrl.TypeEnum,
        "PushTokenCreateQueryResourceObjectAttributes.PlatformEnum": PushTokenCreateQueryResourceObjectAttributes.PlatformEnum,
        "PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum": PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum,
        "PushTokenCreateQueryResourceObjectAttributes.VendorEnum": PushTokenCreateQueryResourceObjectAttributes.VendorEnum,
        "PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum": PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum,
        "PushTokenDeviceMetadata.KlaviyoSdkEnum": PushTokenDeviceMetadata.KlaviyoSdkEnum,
        "PushTokenDeviceMetadata.OsNameEnum": PushTokenDeviceMetadata.OsNameEnum,
        "PushTokenDeviceMetadata.EnvironmentEnum": PushTokenDeviceMetadata.EnvironmentEnum,
        "PushTokenEntry.PlatformEnum": PushTokenEntry.PlatformEnum,
        "PushTokenEntry.VendorEnum": PushTokenEntry.VendorEnum,
        "PushTokenEntry.EnablementStatusEnum": PushTokenEntry.EnablementStatusEnum,
        "PushTokenEntry.BackgroundEnum": PushTokenEntry.BackgroundEnum,
        "PushTokenEnum": PushTokenEnum,
        "PushTokenResponseObjectResourceAttributes.EnablementStatusEnum": PushTokenResponseObjectResourceAttributes.EnablementStatusEnum,
        "PushTokenResponseObjectResourceAttributes.PlatformEnum": PushTokenResponseObjectResourceAttributes.PlatformEnum,
        "QuoteStyle.AlignmentEnum": QuoteStyle.AlignmentEnum,
        "RadioButtons.TypeEnum": RadioButtons.TypeEnum,
        "RadioButtonsProperties.DisplayDeviceEnum": RadioButtonsProperties.DisplayDeviceEnum,
        "RadioButtonsStyles.ArrangementEnum": RadioButtonsStyles.ArrangementEnum,
        "RadioButtonsStyles.AlignmentEnum": RadioButtonsStyles.AlignmentEnum,
        "RatingStyle.ShapeEnum": RatingStyle.ShapeEnum,
        "RatingStyle.AlignmentEnum": RatingStyle.AlignmentEnum,
        "RecordedDateFilter.FieldEnum": RecordedDateFilter.FieldEnum,
        "Redirect.TypeEnum": Redirect.TypeEnum,
        "RejectReasonFake.ReasonEnum": RejectReasonFake.ReasonEnum,
        "RejectReasonMisleading.ReasonEnum": RejectReasonMisleading.ReasonEnum,
        "RejectReasonOther.ReasonEnum": RejectReasonOther.ReasonEnum,
        "RejectReasonPrivateInformation.ReasonEnum": RejectReasonPrivateInformation.ReasonEnum,
        "RejectReasonProfanity.ReasonEnum": RejectReasonProfanity.ReasonEnum,
        "RejectReasonUnrelated.ReasonEnum": RejectReasonUnrelated.ReasonEnum,
        "RelatedIdPath.IdentifierTypeEnum": RelatedIdPath.IdentifierTypeEnum,
        "RelativeAnniversaryDateFilter.TypeEnum": RelativeAnniversaryDateFilter.TypeEnum,
        "RelativeAnniversaryDateFilter.OperatorEnum": RelativeAnniversaryDateFilter.OperatorEnum,
        "RelativeAnniversaryDateFilter.UnitEnum": RelativeAnniversaryDateFilter.UnitEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.TypeEnum": RelativeDateOperatorBaseRelativeDateFilter.TypeEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.OperatorEnum": RelativeDateOperatorBaseRelativeDateFilter.OperatorEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.UnitEnum": RelativeDateOperatorBaseRelativeDateFilter.UnitEnum,
        "RelativeDateRangeFilter.TypeEnum": RelativeDateRangeFilter.TypeEnum,
        "RelativeDateRangeFilter.OperatorEnum": RelativeDateRangeFilter.OperatorEnum,
        "RelativeDateRangeFilter.UnitEnum": RelativeDateRangeFilter.UnitEnum,
        "ResendOptInCode.TypeEnum": ResendOptInCode.TypeEnum,
        "ResendOptInCode.PropertiesEnum": ResendOptInCode.PropertiesEnum,
        "Review.TypeEnum": Review.TypeEnum,
        "ReviewBlockStyles.AuthorAlignEnum": ReviewBlockStyles.AuthorAlignEnum,
        "ReviewBlockStyles.AuthorFontStyleEnum": ReviewBlockStyles.AuthorFontStyleEnum,
        "ReviewBlockStyles.BorderStyleEnum": ReviewBlockStyles.BorderStyleEnum,
        "ReviewBlockStyles.LayoutEnum": ReviewBlockStyles.LayoutEnum,
        "ReviewBlockStyles.ProductNameAlignEnum": ReviewBlockStyles.ProductNameAlignEnum,
        "ReviewBlockStyles.ProductNameFontStyleEnum": ReviewBlockStyles.ProductNameFontStyleEnum,
        "ReviewBlockStyles.QuoteAlignEnum": ReviewBlockStyles.QuoteAlignEnum,
        "ReviewBlockStyles.QuoteFontStyleEnum": ReviewBlockStyles.QuoteFontStyleEnum,
        "ReviewBlockStyles.QuoteStyleEnum": ReviewBlockStyles.QuoteStyleEnum,
        "ReviewBlockStyles.StarSizeEnum": ReviewBlockStyles.StarSizeEnum,
        "ReviewBlockStyles.StarRatingShapeEnum": ReviewBlockStyles.StarRatingShapeEnum,
        "ReviewBlockStyles.StarAlignmentEnum": ReviewBlockStyles.StarAlignmentEnum,
        "ReviewBlockStyles.VerifiedFontStyleEnum": ReviewBlockStyles.VerifiedFontStyleEnum,
        "ReviewBlockStyles.VerifiedBadgeColorEnum": ReviewBlockStyles.VerifiedBadgeColorEnum,
        "ReviewBlockStyles.VerifiedBadgeStyleEnum": ReviewBlockStyles.VerifiedBadgeStyleEnum,
        "ReviewBlockV0.ContentTypeEnum": ReviewBlockV0.ContentTypeEnum,
        "ReviewBlockV0.TypeEnum": ReviewBlockV0.TypeEnum,
        "ReviewBlockV1.ContentTypeEnum": ReviewBlockV1.ContentTypeEnum,
        "ReviewBlockV1.TypeEnum": ReviewBlockV1.TypeEnum,
        "ReviewEnum": ReviewEnum,
        "ReviewProperties.DisplayDeviceEnum": ReviewProperties.DisplayDeviceEnum,
        "ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum": ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum,
        "ReviewStatusFeatured.ValueEnum": ReviewStatusFeatured.ValueEnum,
        "ReviewStatusPending.ValueEnum": ReviewStatusPending.ValueEnum,
        "ReviewStatusPublished.ValueEnum": ReviewStatusPublished.ValueEnum,
        "ReviewStatusRejected.ValueEnum": ReviewStatusRejected.ValueEnum,
        "ReviewStatusUnpublished.ValueEnum": ReviewStatusUnpublished.ValueEnum,
        "ReviewerNameStyle.LayoutEnum": ReviewerNameStyle.LayoutEnum,
        "ReviewerNameStyle.AlignmentEnum": ReviewerNameStyle.AlignmentEnum,
        "RichTextMargin.LeftEnum": RichTextMargin.LeftEnum,
        "RichTextMargin.RightEnum": RichTextMargin.RightEnum,
        "RichTextMargin.TopEnum": RichTextMargin.TopEnum,
        "RichTextStyle.FontWeightEnum": RichTextStyle.FontWeightEnum,
        "RichTextStyle.AlignmentEnum": RichTextStyle.AlignmentEnum,
        "RowStyles.ColumnLayoutEnum": RowStyles.ColumnLayoutEnum,
        "SMSConsentCheckbox.TypeEnum": SMSConsentCheckbox.TypeEnum,
        "SMSConsentCheckboxProperties.DisplayDeviceEnum": SMSConsentCheckboxProperties.DisplayDeviceEnum,
        "SMSConsentCheckboxProperties.PropertyNameEnum": SMSConsentCheckboxProperties.PropertyNameEnum,
        "SMSConsentCheckboxProperties.PlaceholderEnum": SMSConsentCheckboxProperties.PlaceholderEnum,
        "SMSConsentCheckboxProperties.ChannelsEnum": SMSConsentCheckboxProperties.ChannelsEnum,
        "SMSConsentCheckboxStyles.HorizontalAlignmentEnum": SMSConsentCheckboxStyles.HorizontalAlignmentEnum,
        "SMSDisclosure.TypeEnum": SMSDisclosure.TypeEnum,
        "SMSDisclosureAccountDefault.TypeEnum": SMSDisclosureAccountDefault.TypeEnum,
        "SMSDisclosureCustom.TypeEnum": SMSDisclosureCustom.TypeEnum,
        "SMSDisclosureLinkTextStyle.FontWeightEnum": SMSDisclosureLinkTextStyle.FontWeightEnum,
        "SMSDisclosureProperties.DisplayDeviceEnum": SMSDisclosureProperties.DisplayDeviceEnum,
        "SMSDisclosureTextStyle.FontWeightEnum": SMSDisclosureTextStyle.FontWeightEnum,
        "SMSMessageDefinition.ChannelEnum": SMSMessageDefinition.ChannelEnum,
        "SMSMessageDefinitionCreate.ChannelEnum": SMSMessageDefinitionCreate.ChannelEnum,
        "Scroll.TypeEnum": Scroll.TypeEnum,
        "SectionStyles.BackgroundFormatEnum": SectionStyles.BackgroundFormatEnum,
        "SectionStyles.BackgroundPositionEnum": SectionStyles.BackgroundPositionEnum,
        "SectionStyles.BorderStyleEnum": SectionStyles.BorderStyleEnum,
        "SectionStyles.ColumnAlignEnum": SectionStyles.ColumnAlignEnum,
        "SectionStyles.ColumnDirectionEnum": SectionStyles.ColumnDirectionEnum,
        "SectionStyles.ContentColorTypeEnum": SectionStyles.ContentColorTypeEnum,
        "SectionV0.ContentTypeEnum": SectionV0.ContentTypeEnum,
        "SectionV0.TypeEnum": SectionV0.TypeEnum,
        "SectionV1.ContentTypeEnum": SectionV1.ContentTypeEnum,
        "SectionV1.TypeEnum": SectionV1.TypeEnum,
        "SegmentEnum": SegmentEnum,
        "SegmentSeriesReportEnum": SegmentSeriesReportEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum": SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "SegmentTrigger.TypeEnum": SegmentTrigger.TypeEnum,
        "SegmentValuesReportEnum": SegmentValuesReportEnum,
        "SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentsProfileMetricCondition.TypeEnum": SegmentsProfileMetricCondition.TypeEnum,
        "SegmentsProfileMetricCondition.MeasurementEnum": SegmentsProfileMetricCondition.MeasurementEnum,
        "SegmentsProfileMetricFunnelCondition.TypeEnum": SegmentsProfileMetricFunnelCondition.TypeEnum,
        "SegmentsProfileMetricFunnelCondition.CompletionWindowSecondsEnum": SegmentsProfileMetricFunnelCondition.CompletionWindowSecondsEnum,
        "SendEmailAction.TypeEnum": SendEmailAction.TypeEnum,
        "SendEmailActionData.StatusEnum": SendEmailActionData.StatusEnum,
        "SendInternalAlertAction.TypeEnum": SendInternalAlertAction.TypeEnum,
        "SendInternalAlertActionData.StatusEnum": SendInternalAlertActionData.StatusEnum,
        "SendPushNotificationAction.TypeEnum": SendPushNotificationAction.TypeEnum,
        "SendPushNotificationActionData.StatusEnum": SendPushNotificationActionData.StatusEnum,
        "SendSmsAction.TypeEnum": SendSmsAction.TypeEnum,
        "SendSmsActionData.StatusEnum": SendSmsActionData.StatusEnum,
        "SendWebhookAction.TypeEnum": SendWebhookAction.TypeEnum,
        "SendWebhookActionData.StatusEnum": SendWebhookActionData.StatusEnum,
        "SendWhatsAppAction.TypeEnum": SendWhatsAppAction.TypeEnum,
        "SendWhatsAppActionData.StatusEnum": SendWhatsAppActionData.StatusEnum,
        "ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum": ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum,
        "SftpMethodFilter.FieldEnum": SftpMethodFilter.FieldEnum,
        "SftpMethodFilter.MethodEnum": SftpMethodFilter.MethodEnum,
        "ShopifyIntegrationFilter.TypeEnum": ShopifyIntegrationFilter.TypeEnum,
        "ShopifyIntegrationFilter.OperatorEnum": ShopifyIntegrationFilter.OperatorEnum,
        "ShopifyIntegrationFilter.ValueEnum": ShopifyIntegrationFilter.ValueEnum,
        "ShopifyIntegrationMethodFilter.FieldEnum": ShopifyIntegrationMethodFilter.FieldEnum,
        "ShopifyIntegrationMethodFilter.MethodEnum": ShopifyIntegrationMethodFilter.MethodEnum,
        "SideImageSettings.SizeEnum": SideImageSettings.SizeEnum,
        "SideImageSettings.AlignmentEnum": SideImageSettings.AlignmentEnum,
        "SideImageSettings.DeviceTypeEnum": SideImageSettings.DeviceTypeEnum,
        "SignupCounter.TypeEnum": SignupCounter.TypeEnum,
        "SignupCounterProperties.DisplayDeviceEnum": SignupCounterProperties.DisplayDeviceEnum,
        "SignupCounterProperties.TimeframeEnum": SignupCounterProperties.TimeframeEnum,
        "SimplePropertyMapping.TypeEnum": SimplePropertyMapping.TypeEnum,
        "SimpleRelationshipMapping.TypeEnum": SimpleRelationshipMapping.TypeEnum,
        "SinceFlowStartDateFilter.TypeEnum": SinceFlowStartDateFilter.TypeEnum,
        "SinceFlowStartDateFilter.OperatorEnum": SinceFlowStartDateFilter.OperatorEnum,
        "SkipToSuccess.TypeEnum": SkipToSuccess.TypeEnum,
        "SmartSendTimeStrategy.MethodEnum": SmartSendTimeStrategy.MethodEnum,
        "SocialBlockStyles.IconAlignEnum": SocialBlockStyles.IconAlignEnum,
        "SocialBlockStyles.IconColorEnum": SocialBlockStyles.IconColorEnum,
        "SocialBlockStyles.IconSizeEnum": SocialBlockStyles.IconSizeEnum,
        "SocialBlockStyles.LabelFontStyleEnum": SocialBlockStyles.LabelFontStyleEnum,
        "SocialBlockV0.ContentTypeEnum": SocialBlockV0.ContentTypeEnum,
        "SocialBlockV0.TypeEnum": SocialBlockV0.TypeEnum,
        "SocialBlockV1.ContentTypeEnum": SocialBlockV1.ContentTypeEnum,
        "SocialBlockV1.TypeEnum": SocialBlockV1.TypeEnum,
        "SocialIconSubBlock.TypeEnum": SocialIconSubBlock.TypeEnum,
        "SocialIconSubBlock.LinkTypeEnum": SocialIconSubBlock.LinkTypeEnum,
        "SocialSpacerSubBlock.TypeEnum": SocialSpacerSubBlock.TypeEnum,
        "SourceMappingEnum": SourceMappingEnum,
        "SpacerBlockV0.ContentTypeEnum": SpacerBlockV0.ContentTypeEnum,
        "SpacerBlockV0.TypeEnum": SpacerBlockV0.TypeEnum,
        "SpacerBlockV1.ContentTypeEnum": SpacerBlockV1.ContentTypeEnum,
        "SpacerBlockV1.TypeEnum": SpacerBlockV1.TypeEnum,
        "SpamComplaintMethodFilter.FieldEnum": SpamComplaintMethodFilter.FieldEnum,
        "SpamComplaintMethodFilter.MethodEnum": SpamComplaintMethodFilter.MethodEnum,
        "SpinToWin.TypeEnum": SpinToWin.TypeEnum,
        "SpinToWinProperties.DisplayDeviceEnum": SpinToWinProperties.DisplayDeviceEnum,
        "SplitBlockStyles.MobileStackOrderEnum": SplitBlockStyles.MobileStackOrderEnum,
        "SplitBlockV0.ContentTypeEnum": SplitBlockV0.ContentTypeEnum,
        "SplitBlockV0.TypeEnum": SplitBlockV0.TypeEnum,
        "SplitBlockV1.ContentTypeEnum": SplitBlockV1.ContentTypeEnum,
        "SplitBlockV1.TypeEnum": SplitBlockV1.TypeEnum,
        "StaticCount.BadgeConfigEnum": StaticCount.BadgeConfigEnum,
        "StaticCouponConfig.TypeEnum": StaticCouponConfig.TypeEnum,
        "StaticDateFilter.TypeEnum": StaticDateFilter.TypeEnum,
        "StaticDateFilter.OperatorEnum": StaticDateFilter.OperatorEnum,
        "StaticDateRangeFilter.TypeEnum": StaticDateRangeFilter.TypeEnum,
        "StaticDateRangeFilter.OperatorEnum": StaticDateRangeFilter.OperatorEnum,
        "StaticReviewBlockProperties.VerifiedBadgeLanguageEnum": StaticReviewBlockProperties.VerifiedBadgeLanguageEnum,
        "StaticSendStrategy.MethodEnum": StaticSendStrategy.MethodEnum,
        "StaticTrackingParam.TypeEnum": StaticTrackingParam.TypeEnum,
        "StatusDateFilter.FieldEnum": StatusDateFilter.FieldEnum,
        "StringArrayOperatorStringArrayFilter.TypeEnum": StringArrayOperatorStringArrayFilter.TypeEnum,
        "StringArrayOperatorStringArrayFilter.OperatorEnum": StringArrayOperatorStringArrayFilter.OperatorEnum,
        "StringInArrayFilter.OperatorEnum": StringInArrayFilter.OperatorEnum,
        "StringInArrayFilter.TypeEnum": StringInArrayFilter.TypeEnum,
        "StringOperatorStringFilter.TypeEnum": StringOperatorStringFilter.TypeEnum,
        "StringOperatorStringFilter.OperatorEnum": StringOperatorStringFilter.OperatorEnum,
        "StringPhoneOperatorStringArrayFilter.TypeEnum": StringPhoneOperatorStringArrayFilter.TypeEnum,
        "StringPhoneOperatorStringArrayFilter.OperatorEnum": StringPhoneOperatorStringArrayFilter.OperatorEnum,
        "SubmitBackInStock.TypeEnum": SubmitBackInStock.TypeEnum,
        "SubmitOptInCode.TypeEnum": SubmitOptInCode.TypeEnum,
        "SubmitOptInCode.PropertiesEnum": SubmitOptInCode.PropertiesEnum,
        "SubscribeViaSMS.TypeEnum": SubscribeViaSMS.TypeEnum,
        "SubscribeViaWhatsApp.TypeEnum": SubscribeViaWhatsApp.TypeEnum,
        "SubscribedSMSIsRcsCapableFilter.FieldEnum": SubscribedSMSIsRcsCapableFilter.FieldEnum,
        "SubscriptionParameters.ConsentEnum": SubscriptionParameters.ConsentEnum,
        "TableBlockStyles.BlockBorderStyleEnum": TableBlockStyles.BlockBorderStyleEnum,
        "TableBlockStyles.CellHorizontalBorderStyleEnum": TableBlockStyles.CellHorizontalBorderStyleEnum,
        "TableBlockStyles.CellVerticalAlignEnum": TableBlockStyles.CellVerticalAlignEnum,
        "TableBlockStyles.CellVerticalBorderStyleEnum": TableBlockStyles.CellVerticalBorderStyleEnum,
        "TableBlockStyles.HeaderFontStyleEnum": TableBlockStyles.HeaderFontStyleEnum,
        "TableBlockStyles.TableTextAlignEnum": TableBlockStyles.TableTextAlignEnum,
        "TableBlockV0.ContentTypeEnum": TableBlockV0.ContentTypeEnum,
        "TableBlockV0.TypeEnum": TableBlockV0.TypeEnum,
        "TableBlockV1.ContentTypeEnum": TableBlockV1.ContentTypeEnum,
        "TableBlockV1.TypeEnum": TableBlockV1.TypeEnum,
        "TableFallbackHtmlSubBlock.ShowOnEnum": TableFallbackHtmlSubBlock.ShowOnEnum,
        "TableFallbackHtmlSubBlock.TypeEnum": TableFallbackHtmlSubBlock.TypeEnum,
        "TableFallbackImageSubBlock.ImageAlignEnum": TableFallbackImageSubBlock.ImageAlignEnum,
        "TableFallbackImageSubBlock.ShowOnEnum": TableFallbackImageSubBlock.ShowOnEnum,
        "TableFallbackImageSubBlock.CellTextAlignEnum": TableFallbackImageSubBlock.CellTextAlignEnum,
        "TableFallbackImageSubBlock.TypeEnum": TableFallbackImageSubBlock.TypeEnum,
        "TableFallbackTextSubBlock.CellTextAlignEnum": TableFallbackTextSubBlock.CellTextAlignEnum,
        "TableFallbackTextSubBlock.FontStyleEnum": TableFallbackTextSubBlock.FontStyleEnum,
        "TableFallbackTextSubBlock.ShowOnEnum": TableFallbackTextSubBlock.ShowOnEnum,
        "TableFallbackTextSubBlock.TypeEnum": TableFallbackTextSubBlock.TypeEnum,
        "TableHeaderSubBlock.CellTextAlignEnum": TableHeaderSubBlock.CellTextAlignEnum,
        "TableHeaderSubBlock.FontStyleEnum": TableHeaderSubBlock.FontStyleEnum,
        "TableHeaderSubBlock.ShowOnEnum": TableHeaderSubBlock.ShowOnEnum,
        "TableHeaderSubBlock.TypeEnum": TableHeaderSubBlock.TypeEnum,
        "TableHtmlSubBlock.ShowOnEnum": TableHtmlSubBlock.ShowOnEnum,
        "TableHtmlSubBlock.TypeEnum": TableHtmlSubBlock.TypeEnum,
        "TableImageSubBlock.ImageAlignEnum": TableImageSubBlock.ImageAlignEnum,
        "TableImageSubBlock.ShowOnEnum": TableImageSubBlock.ShowOnEnum,
        "TableImageSubBlock.CellTextAlignEnum": TableImageSubBlock.CellTextAlignEnum,
        "TableImageSubBlock.TypeEnum": TableImageSubBlock.TypeEnum,
        "TableTextSubBlock.CellTextAlignEnum": TableTextSubBlock.CellTextAlignEnum,
        "TableTextSubBlock.FontStyleEnum": TableTextSubBlock.FontStyleEnum,
        "TableTextSubBlock.ShowOnEnum": TableTextSubBlock.ShowOnEnum,
        "TableTextSubBlock.TypeEnum": TableTextSubBlock.TypeEnum,
        "TagEnum": TagEnum,
        "TagGroupEnum": TagGroupEnum,
        "TargetDateAction.TypeEnum": TargetDateAction.TypeEnum,
        "TargetDateActionData.TimezoneEnum": TargetDateActionData.TimezoneEnum,
        "TargetDateActionData.TargetDaysEnum": TargetDateActionData.TargetDaysEnum,
        "Teaser.DisplayOrderEnum": Teaser.DisplayOrderEnum,
        "Teaser.TeaserTypeEnum": Teaser.TeaserTypeEnum,
        "Teaser.LocationEnum": Teaser.LocationEnum,
        "Teaser.SizeEnum": Teaser.SizeEnum,
        "Teaser.DeviceTypeEnum": Teaser.DeviceTypeEnum,
        "TemplateEnum": TemplateEnum,
        "TemplateUniversalContentEnum": TemplateUniversalContentEnum,
        "Text.TypeEnum": Text.TypeEnum,
        "TextBlockStylesV0.BlockBorderStyleEnum": TextBlockStylesV0.BlockBorderStyleEnum,
        "TextBlockStylesV0.FontStyleEnum": TextBlockStylesV0.FontStyleEnum,
        "TextBlockStylesV0.TextAlignEnum": TextBlockStylesV0.TextAlignEnum,
        "TextBlockStylesV0.TextTableLayoutEnum": TextBlockStylesV0.TextTableLayoutEnum,
        "TextBlockStylesV1.BlockBorderStyleEnum": TextBlockStylesV1.BlockBorderStyleEnum,
        "TextBlockStylesV1.FontStyleEnum": TextBlockStylesV1.FontStyleEnum,
        "TextBlockStylesV1.TextAlignEnum": TextBlockStylesV1.TextAlignEnum,
        "TextBlockStylesV1.TextTableLayoutEnum": TextBlockStylesV1.TextTableLayoutEnum,
        "TextBlockV0.ContentTypeEnum": TextBlockV0.ContentTypeEnum,
        "TextBlockV0.TypeEnum": TextBlockV0.TypeEnum,
        "TextBlockV1.ContentTypeEnum": TextBlockV1.ContentTypeEnum,
        "TextBlockV1.TypeEnum": TextBlockV1.TypeEnum,
        "TextProperties.DisplayDeviceEnum": TextProperties.DisplayDeviceEnum,
        "TextStyleStyles.FontStyleEnum": TextStyleStyles.FontStyleEnum,
        "TextStyleStyles.TextAlignEnum": TextStyleStyles.TextAlignEnum,
        "TextStyleV0.FontWeightEnum": TextStyleV0.FontWeightEnum,
        "TextStyleV1.StyleTypeEnum": TextStyleV1.StyleTypeEnum,
        "ThrottledSendStrategy.MethodEnum": ThrottledSendStrategy.MethodEnum,
        "ThrottledSendStrategy.ThrottlePercentageEnum": ThrottledSendStrategy.ThrottlePercentageEnum,
        "TimeDelayAction.TypeEnum": TimeDelayAction.TypeEnum,
        "TimeDelayActionData.UnitEnum": TimeDelayActionData.UnitEnum,
        "TimeDelayActionData.TimezoneEnum": TimeDelayActionData.TimezoneEnum,
        "TimeDelayActionData.DelayUntilWeekdaysEnum": TimeDelayActionData.DelayUntilWeekdaysEnum,
        "Timeframe.KeyEnum": Timeframe.KeyEnum,
        "TrackingSettingEnum": TrackingSettingEnum,
        "TriggerBranchAction.TypeEnum": TriggerBranchAction.TypeEnum,
        "TriggerBranchActionData.TriggerTypeEnum": TriggerBranchActionData.TriggerTypeEnum,
        "TriggerBranchActionData.TriggerSubtypeEnum": TriggerBranchActionData.TriggerSubtypeEnum,
        "URLPatterns.TypeEnum": URLPatterns.TypeEnum,
        "UnidentifiedProfiles.TypeEnum": UnidentifiedProfiles.TypeEnum,
        "UniqueCouponConfig.TypeEnum": UniqueCouponConfig.TypeEnum,
        "UniqueCouponConfig.IntegrationEnum": UniqueCouponConfig.IntegrationEnum,
        "UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum": UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum,
        "UnsubscriptionParameters.ConsentEnum": UnsubscriptionParameters.ConsentEnum,
        "UnsupportedBlock.ContentTypeEnum": UnsupportedBlock.ContentTypeEnum,
        "UnsupportedBlock.TypeEnum": UnsupportedBlock.TypeEnum,
        "UnsupportedSendStrategy.MethodEnum": UnsupportedSendStrategy.MethodEnum,
        "UpdateProfileAction.TypeEnum": UpdateProfileAction.TypeEnum,
        "UpdateProfileActionData.StatusEnum": UpdateProfileActionData.StatusEnum,
        "VariableTimerConfiguration.TypeEnum": VariableTimerConfiguration.TypeEnum,
        "Version.TypeEnum": Version.TypeEnum,
        "Version.LocationEnum": Version.LocationEnum,
        "Version.StatusEnum": Version.StatusEnum,
        "Version.SpecialtiesEnum": Version.SpecialtiesEnum,
        "Version.ChannelEnum": Version.ChannelEnum,
        "VersionProperties.ClickOutsideToCloseEnum": VersionProperties.ClickOutsideToCloseEnum,
        "VersionProperties.RuleBasedTriggerEvaluationEnum": VersionProperties.RuleBasedTriggerEvaluationEnum,
        "VersionStyles.WidthEnum": VersionStyles.WidthEnum,
        "VideoBlockStyles.AlignEnum": VideoBlockStyles.AlignEnum,
        "VideoBlockStyles.BorderStyleEnum": VideoBlockStyles.BorderStyleEnum,
        "VideoBlockV0.ContentTypeEnum": VideoBlockV0.ContentTypeEnum,
        "VideoBlockV0.TypeEnum": VideoBlockV0.TypeEnum,
        "VideoBlockV1.ContentTypeEnum": VideoBlockV1.ContentTypeEnum,
        "VideoBlockV1.TypeEnum": VideoBlockV1.TypeEnum,
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
    "APISchemaProperty": APISchemaProperty,
    "AbTestAction": AbTestAction,
    "AbTestActionData": AbTestActionData,
    "AbTestActionDataCurrentExperiment": AbTestActionDataCurrentExperiment,
    "AccountResponseObjectResource": AccountResponseObjectResource,
    "AccountResponseObjectResourceAttributes": AccountResponseObjectResourceAttributes,
    "ActionOutputCondition": ActionOutputCondition,
    "ActionOutputSplitAction": ActionOutputSplitAction,
    "ActionOutputSplitActionData": ActionOutputSplitActionData,
    "ActionOutputSplitActionDataActionOutputFilter": ActionOutputSplitActionDataActionOutputFilter,
    "ActionOutputSplitActionDataActionOutputFilterConditionGroupsInner": ActionOutputSplitActionDataActionOutputFilterConditionGroupsInner,
    "AdditionalField": AdditionalField,
    "AfterCloseTimeout": AfterCloseTimeout,
    "AfterCloseTimeoutProperties": AfterCloseTimeoutProperties,
    "AgeGate": AgeGate,
    "AgeGateProperties": AgeGateProperties,
    "AgeGateStyles": AgeGateStyles,
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
    "BackInStock": BackInStock,
    "BackInStockDelayAction": BackInStockDelayAction,
    "BackInStockDynamicButtonBorderStyles": BackInStockDynamicButtonBorderStyles,
    "BackInStockDynamicButtonData": BackInStockDynamicButtonData,
    "BackInStockDynamicButtonDropShadowStyles": BackInStockDynamicButtonDropShadowStyles,
    "BackInStockDynamicButtonStyles": BackInStockDynamicButtonStyles,
    "BackInStockDynamicButtonTextStyles": BackInStockDynamicButtonTextStyles,
    "BackInStockEmailConsentCheckbox": BackInStockEmailConsentCheckbox,
    "BackInStockEmailConsentCheckboxProperties": BackInStockEmailConsentCheckboxProperties,
    "BackInStockEmailConsentCheckboxStyles": BackInStockEmailConsentCheckboxStyles,
    "BackInStockMethodFilter": BackInStockMethodFilter,
    "BackInStockProperties": BackInStockProperties,
    "BackgroundImage": BackgroundImage,
    "BackgroundImageStyles": BackgroundImageStyles,
    "BannerStyles": BannerStyles,
    "BaseEventCreateQueryBulkEntryResourceObject": BaseEventCreateQueryBulkEntryResourceObject,
    "BaseEventCreateQueryBulkEntryResourceObjectAttributes": BaseEventCreateQueryBulkEntryResourceObjectAttributes,
    "BaseStyle": BaseStyle,
    "BaseStyleProperties": BaseStyleProperties,
    "BaseStyleStyles": BaseStyleStyles,
    "BlockDisplayOptions": BlockDisplayOptions,
    "Body": Body,
    "BodyProperties": BodyProperties,
    "BodyStyles": BodyStyles,
    "BooleanBranchLinks": BooleanBranchLinks,
    "BooleanFilter": BooleanFilter,
    "BorderStyle": BorderStyle,
    "BounceDateFilter": BounceDateFilter,
    "BulkProfileSuppressionsCreateJobResponseObjectResource": BulkProfileSuppressionsCreateJobResponseObjectResource,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceRelationships": BulkProfileSuppressionsCreateJobResponseObjectResourceRelationships,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists": BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsLists,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner": BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsListsDataInner,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments": BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegments,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner": BulkProfileSuppressionsCreateJobResponseObjectResourceRelationshipsSegmentsDataInner,
    "BulkProfileSuppressionsRemoveJobResponseObjectResource": BulkProfileSuppressionsRemoveJobResponseObjectResource,
    "BulkRemoveMethodFilter": BulkRemoveMethodFilter,
    "Button": Button,
    "ButtonBlockData": ButtonBlockData,
    "ButtonBlockProperties": ButtonBlockProperties,
    "ButtonBlockStyles": ButtonBlockStyles,
    "ButtonBlockV0": ButtonBlockV0,
    "ButtonBlockV1": ButtonBlockV1,
    "ButtonDropShadowStyles": ButtonDropShadowStyles,
    "ButtonProperties": ButtonProperties,
    "ButtonStyles": ButtonStyles,
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
    "CampaignMessageResponseObjectResourceRelationships": CampaignMessageResponseObjectResourceRelationships,
    "CampaignMessageResponseObjectResourceRelationshipsCampaign": CampaignMessageResponseObjectResourceRelationshipsCampaign,
    "CampaignMessageResponseObjectResourceRelationshipsCampaignData": CampaignMessageResponseObjectResourceRelationshipsCampaignData,
    "CampaignMessageResponseObjectResourceRelationshipsImage": CampaignMessageResponseObjectResourceRelationshipsImage,
    "CampaignMessageResponseObjectResourceRelationshipsImageData": CampaignMessageResponseObjectResourceRelationshipsImageData,
    "CampaignMessageResponseObjectResourceRelationshipsTemplate": CampaignMessageResponseObjectResourceRelationshipsTemplate,
    "CampaignMessageResponseObjectResourceRelationshipsTemplateData": CampaignMessageResponseObjectResourceRelationshipsTemplateData,
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
    "CampaignResponseObjectResourceRelationships": CampaignResponseObjectResourceRelationships,
    "CampaignResponseObjectResourceRelationshipsCampaignMessages": CampaignResponseObjectResourceRelationshipsCampaignMessages,
    "CampaignResponseObjectResourceRelationshipsCampaignMessagesDataInner": CampaignResponseObjectResourceRelationshipsCampaignMessagesDataInner,
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
    "CartContent": CartContent,
    "CartContentProperties": CartContentProperties,
    "CartItemCount": CartItemCount,
    "CartItemCountProperties": CartItemCountProperties,
    "CartProduct": CartProduct,
    "CartProductProperties": CartProductProperties,
    "CartValue": CartValue,
    "CartValueProperties": CartValueProperties,
    "CatalogCategoryCreateJobCreateQuery": CatalogCategoryCreateJobCreateQuery,
    "CatalogCategoryCreateJobCreateQueryResourceObject": CatalogCategoryCreateJobCreateQueryResourceObject,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributes": CatalogCategoryCreateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryCreateJobResponseObjectResource": CatalogCategoryCreateJobResponseObjectResource,
    "CatalogCategoryCreateJobResponseObjectResourceRelationships": CatalogCategoryCreateJobResponseObjectResourceRelationships,
    "CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategories": CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategories,
    "CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner": CatalogCategoryCreateJobResponseObjectResourceRelationshipsCategoriesDataInner,
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
    "CatalogCategoryDeleteJobResponseObjectResourceRelationships": CatalogCategoryDeleteJobResponseObjectResourceRelationships,
    "CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories": CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategories,
    "CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner": CatalogCategoryDeleteJobResponseObjectResourceRelationshipsCategoriesDataInner,
    "CatalogCategoryDeleteQueryResourceObject": CatalogCategoryDeleteQueryResourceObject,
    "CatalogCategoryItemOp": CatalogCategoryItemOp,
    "CatalogCategoryItemOpDataInner": CatalogCategoryItemOpDataInner,
    "CatalogCategoryResponseObjectResource": CatalogCategoryResponseObjectResource,
    "CatalogCategoryResponseObjectResourceAttributes": CatalogCategoryResponseObjectResourceAttributes,
    "CatalogCategoryResponseObjectResourceRelationships": CatalogCategoryResponseObjectResourceRelationships,
    "CatalogCategoryResponseObjectResourceRelationshipsItems": CatalogCategoryResponseObjectResourceRelationshipsItems,
    "CatalogCategoryUpdateJobCreateQuery": CatalogCategoryUpdateJobCreateQuery,
    "CatalogCategoryUpdateJobCreateQueryResourceObject": CatalogCategoryUpdateJobCreateQueryResourceObject,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryUpdateJobResponseObjectResource": CatalogCategoryUpdateJobResponseObjectResource,
    "CatalogCategoryUpdateJobResponseObjectResourceRelationships": CatalogCategoryUpdateJobResponseObjectResourceRelationships,
    "CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories": CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategories,
    "CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner": CatalogCategoryUpdateJobResponseObjectResourceRelationshipsCategoriesDataInner,
    "CatalogCategoryUpdateQuery": CatalogCategoryUpdateQuery,
    "CatalogCategoryUpdateQueryResourceObject": CatalogCategoryUpdateQueryResourceObject,
    "CatalogCategoryUpdateQueryResourceObjectAttributes": CatalogCategoryUpdateQueryResourceObjectAttributes,
    "CatalogItemCategoryOp": CatalogItemCategoryOp,
    "CatalogItemCreateJobCreateQuery": CatalogItemCreateJobCreateQuery,
    "CatalogItemCreateJobCreateQueryResourceObject": CatalogItemCreateJobCreateQueryResourceObject,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributes": CatalogItemCreateJobCreateQueryResourceObjectAttributes,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributesItems": CatalogItemCreateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemCreateJobResponseObjectResource": CatalogItemCreateJobResponseObjectResource,
    "CatalogItemCreateJobResponseObjectResourceRelationships": CatalogItemCreateJobResponseObjectResourceRelationships,
    "CatalogItemCreateJobResponseObjectResourceRelationshipsItems": CatalogItemCreateJobResponseObjectResourceRelationshipsItems,
    "CatalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner": CatalogItemCreateJobResponseObjectResourceRelationshipsItemsDataInner,
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
    "CatalogItemDeleteJobResponseObjectResourceRelationships": CatalogItemDeleteJobResponseObjectResourceRelationships,
    "CatalogItemDeleteJobResponseObjectResourceRelationshipsItems": CatalogItemDeleteJobResponseObjectResourceRelationshipsItems,
    "CatalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner": CatalogItemDeleteJobResponseObjectResourceRelationshipsItemsDataInner,
    "CatalogItemDeleteQueryResourceObject": CatalogItemDeleteQueryResourceObject,
    "CatalogItemResponseObjectResource": CatalogItemResponseObjectResource,
    "CatalogItemResponseObjectResourceAttributes": CatalogItemResponseObjectResourceAttributes,
    "CatalogItemResponseObjectResourceRelationships": CatalogItemResponseObjectResourceRelationships,
    "CatalogItemResponseObjectResourceRelationshipsVariants": CatalogItemResponseObjectResourceRelationshipsVariants,
    "CatalogItemResponseObjectResourceRelationshipsVariantsDataInner": CatalogItemResponseObjectResourceRelationshipsVariantsDataInner,
    "CatalogItemUpdateJobCreateQuery": CatalogItemUpdateJobCreateQuery,
    "CatalogItemUpdateJobCreateQueryResourceObject": CatalogItemUpdateJobCreateQueryResourceObject,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributes": CatalogItemUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems": CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemUpdateJobResponseObjectResource": CatalogItemUpdateJobResponseObjectResource,
    "CatalogItemUpdateJobResponseObjectResourceRelationships": CatalogItemUpdateJobResponseObjectResourceRelationships,
    "CatalogItemUpdateJobResponseObjectResourceRelationshipsItems": CatalogItemUpdateJobResponseObjectResourceRelationshipsItems,
    "CatalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner": CatalogItemUpdateJobResponseObjectResourceRelationshipsItemsDataInner,
    "CatalogItemUpdateQuery": CatalogItemUpdateQuery,
    "CatalogItemUpdateQueryResourceObject": CatalogItemUpdateQueryResourceObject,
    "CatalogItemUpdateQueryResourceObjectAttributes": CatalogItemUpdateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQuery": CatalogVariantCreateJobCreateQuery,
    "CatalogVariantCreateJobCreateQueryResourceObject": CatalogVariantCreateJobCreateQueryResourceObject,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributes": CatalogVariantCreateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantCreateJobResponseObjectResource": CatalogVariantCreateJobResponseObjectResource,
    "CatalogVariantCreateJobResponseObjectResourceRelationships": CatalogVariantCreateJobResponseObjectResourceRelationships,
    "CatalogVariantCreateJobResponseObjectResourceRelationshipsVariants": CatalogVariantCreateJobResponseObjectResourceRelationshipsVariants,
    "CatalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner": CatalogVariantCreateJobResponseObjectResourceRelationshipsVariantsDataInner,
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
    "CatalogVariantDeleteJobResponseObjectResourceRelationships": CatalogVariantDeleteJobResponseObjectResourceRelationships,
    "CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariants": CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariants,
    "CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner": CatalogVariantDeleteJobResponseObjectResourceRelationshipsVariantsDataInner,
    "CatalogVariantDeleteQueryResourceObject": CatalogVariantDeleteQueryResourceObject,
    "CatalogVariantResponseObjectResource": CatalogVariantResponseObjectResource,
    "CatalogVariantResponseObjectResourceAttributes": CatalogVariantResponseObjectResourceAttributes,
    "CatalogVariantResponseObjectResourceRelationships": CatalogVariantResponseObjectResourceRelationships,
    "CatalogVariantResponseObjectResourceRelationshipsItem": CatalogVariantResponseObjectResourceRelationshipsItem,
    "CatalogVariantResponseObjectResourceRelationshipsItemData": CatalogVariantResponseObjectResourceRelationshipsItemData,
    "CatalogVariantUpdateJobCreateQuery": CatalogVariantUpdateJobCreateQuery,
    "CatalogVariantUpdateJobCreateQueryResourceObject": CatalogVariantUpdateJobCreateQueryResourceObject,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributes": CatalogVariantUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantUpdateJobResponseObjectResource": CatalogVariantUpdateJobResponseObjectResource,
    "CatalogVariantUpdateJobResponseObjectResourceRelationships": CatalogVariantUpdateJobResponseObjectResourceRelationships,
    "CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariants": CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariants,
    "CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner": CatalogVariantUpdateJobResponseObjectResourceRelationshipsVariantsDataInner,
    "CatalogVariantUpdateQuery": CatalogVariantUpdateQuery,
    "CatalogVariantUpdateQueryResourceObject": CatalogVariantUpdateQueryResourceObject,
    "CatalogVariantUpdateQueryResourceObjectAttributes": CatalogVariantUpdateQueryResourceObjectAttributes,
    "Channel": Channel,
    "ChannelProperties": ChannelProperties,
    "ChannelSettings": ChannelSettings,
    "Checkboxes": Checkboxes,
    "CheckboxesProperties": CheckboxesProperties,
    "CheckboxesStyles": CheckboxesStyles,
    "CheckoutMethodFilter": CheckoutMethodFilter,
    "Close": Close,
    "CloseButtonStyle": CloseButtonStyle,
    "CloseProperties": CloseProperties,
    "CodeAction": CodeAction,
    "CollectionLinks": CollectionLinks,
    "ColumnStyles": ColumnStyles,
    "ColumnV0": ColumnV0,
    "ColumnV1": ColumnV1,
    "ConditionGroup": ConditionGroup,
    "ConditionalBranchAction": ConditionalBranchAction,
    "ConditionalBranchActionData": ConditionalBranchActionData,
    "ConditionalBranchActionDataProfileFilter": ConditionalBranchActionDataProfileFilter,
    "ConditionalBranchActionDataProfileFilterConditionGroupsInner": ConditionalBranchActionDataProfileFilterConditionGroupsInner,
    "ConstantContactIntegrationFilter": ConstantContactIntegrationFilter,
    "ConstantContactIntegrationMethodFilter": ConstantContactIntegrationMethodFilter,
    "ConstantPropertyMapping": ConstantPropertyMapping,
    "ContactInformation": ContactInformation,
    "ContentExperimentAction": ContentExperimentAction,
    "ContentExperimentActionData": ContentExperimentActionData,
    "ContentExperimentActionDataCurrentExperiment": ContentExperimentActionDataCurrentExperiment,
    "ContentRepeatV0": ContentRepeatV0,
    "ContentRepeatV1": ContentRepeatV1,
    "ConversationMessageCreateQuery": ConversationMessageCreateQuery,
    "ConversationMessageCreateQueryResourceObject": ConversationMessageCreateQueryResourceObject,
    "ConversationMessageCreateQueryResourceObjectAttributes": ConversationMessageCreateQueryResourceObjectAttributes,
    "ConversationMessageCreateQueryResourceObjectRelationships": ConversationMessageCreateQueryResourceObjectRelationships,
    "ConversationMessageCreateQueryResourceObjectRelationshipsConversation": ConversationMessageCreateQueryResourceObjectRelationshipsConversation,
    "ConversationMessageCreateQueryResourceObjectRelationshipsConversationData": ConversationMessageCreateQueryResourceObjectRelationshipsConversationData,
    "ConversationResponseObjectResource": ConversationResponseObjectResource,
    "ConversationResponseObjectResourceAttributes": ConversationResponseObjectResourceAttributes,
    "ConversationResponseObjectResourceRelationships": ConversationResponseObjectResourceRelationships,
    "ConversationResponseObjectResourceRelationshipsProfile": ConversationResponseObjectResourceRelationshipsProfile,
    "CountdownDelayAction": CountdownDelayAction,
    "CountdownDelayActionData": CountdownDelayActionData,
    "CountdownTimer": CountdownTimer,
    "CountdownTimerProperties": CountdownTimerProperties,
    "CountdownTimerStyles": CountdownTimerStyles,
    "Coupon": Coupon,
    "CouponBlockData": CouponBlockData,
    "CouponBlockProperties": CouponBlockProperties,
    "CouponBlockStyles": CouponBlockStyles,
    "CouponBlockV0": CouponBlockV0,
    "CouponBlockV1": CouponBlockV1,
    "CouponCodeCreateJobCreateQuery": CouponCodeCreateJobCreateQuery,
    "CouponCodeCreateJobCreateQueryResourceObject": CouponCodeCreateJobCreateQueryResourceObject,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributes": CouponCodeCreateJobCreateQueryResourceObjectAttributes,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes": CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes,
    "CouponCodeCreateJobResponseObjectResource": CouponCodeCreateJobResponseObjectResource,
    "CouponCodeCreateJobResponseObjectResourceAttributes": CouponCodeCreateJobResponseObjectResourceAttributes,
    "CouponCodeCreateJobResponseObjectResourceRelationships": CouponCodeCreateJobResponseObjectResourceRelationships,
    "CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes": CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodes,
    "CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner": CouponCodeCreateJobResponseObjectResourceRelationshipsCouponCodesDataInner,
    "CouponCodeCreateQuery": CouponCodeCreateQuery,
    "CouponCodeCreateQueryResourceObject": CouponCodeCreateQueryResourceObject,
    "CouponCodeCreateQueryResourceObjectAttributes": CouponCodeCreateQueryResourceObjectAttributes,
    "CouponCodeCreateQueryResourceObjectRelationships": CouponCodeCreateQueryResourceObjectRelationships,
    "CouponCodeCreateQueryResourceObjectRelationshipsCoupon": CouponCodeCreateQueryResourceObjectRelationshipsCoupon,
    "CouponCodeResponseObjectResource": CouponCodeResponseObjectResource,
    "CouponCodeResponseObjectResourceAttributes": CouponCodeResponseObjectResourceAttributes,
    "CouponCodeResponseObjectResourceRelationships": CouponCodeResponseObjectResourceRelationships,
    "CouponCodeResponseObjectResourceRelationshipsCoupon": CouponCodeResponseObjectResourceRelationshipsCoupon,
    "CouponCodeResponseObjectResourceRelationshipsCouponData": CouponCodeResponseObjectResourceRelationshipsCouponData,
    "CouponCodeResponseObjectResourceRelationshipsProfile": CouponCodeResponseObjectResourceRelationshipsProfile,
    "CouponCodeResponseObjectResourceRelationshipsProfileData": CouponCodeResponseObjectResourceRelationshipsProfileData,
    "CouponCodeUpdateQuery": CouponCodeUpdateQuery,
    "CouponCodeUpdateQueryResourceObject": CouponCodeUpdateQueryResourceObject,
    "CouponCodeUpdateQueryResourceObjectAttributes": CouponCodeUpdateQueryResourceObjectAttributes,
    "CouponCreateQuery": CouponCreateQuery,
    "CouponCreateQueryResourceObject": CouponCreateQueryResourceObject,
    "CouponProperties": CouponProperties,
    "CouponResponseObjectResource": CouponResponseObjectResource,
    "CouponResponseObjectResourceAttributes": CouponResponseObjectResourceAttributes,
    "CouponStyles": CouponStyles,
    "CouponUpdateQuery": CouponUpdateQuery,
    "CouponUpdateQueryResourceObject": CouponUpdateQueryResourceObject,
    "CouponUpdateQueryResourceObjectAttributes": CouponUpdateQueryResourceObjectAttributes,
    "CustomCss": CustomCss,
    "CustomHTML": CustomHTML,
    "CustomHTMLProperties": CustomHTMLProperties,
    "CustomJavascript": CustomJavascript,
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
    "CustomMetricResponseObjectResourceRelationships": CustomMetricResponseObjectResourceRelationships,
    "CustomMetricResponseObjectResourceRelationshipsMetrics": CustomMetricResponseObjectResourceRelationshipsMetrics,
    "CustomMetricResponseObjectResourceRelationshipsMetricsDataInner": CustomMetricResponseObjectResourceRelationshipsMetricsDataInner,
    "CustomObjectDateTrigger": CustomObjectDateTrigger,
    "CustomObjectPropertyCondition": CustomObjectPropertyCondition,
    "CustomObjectRelationshipSource": CustomObjectRelationshipSource,
    "CustomObjectTriggerCondition": CustomObjectTriggerCondition,
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
    "DataSourceRecordCreateJobCreateQuery": DataSourceRecordCreateJobCreateQuery,
    "DataSourceRecordCreateJobCreateQueryResourceObject": DataSourceRecordCreateJobCreateQueryResourceObject,
    "DataSourceRecordCreateJobCreateQueryResourceObjectAttributes": DataSourceRecordCreateJobCreateQueryResourceObjectAttributes,
    "DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord": DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord,
    "DataSourceRecordResourceObject": DataSourceRecordResourceObject,
    "DataSourceRecordResourceObjectAttributes": DataSourceRecordResourceObjectAttributes,
    "DataSourceResponseObjectResource": DataSourceResponseObjectResource,
    "DataSourceResponseObjectResourceAttributes": DataSourceResponseObjectResourceAttributes,
    "DataWarehouseImportMethodFilter": DataWarehouseImportMethodFilter,
    "DateProperties": DateProperties,
    "DateStyles": DateStyles,
    "Delay": Delay,
    "DelayProperties": DelayProperties,
    "Device": Device,
    "DeviceMetadata": DeviceMetadata,
    "DeviceProperties": DeviceProperties,
    "DisplayOptions": DisplayOptions,
    "DoubleOptinFilter": DoubleOptinFilter,
    "DropShadow": DropShadow,
    "DropShadowBlockData": DropShadowBlockData,
    "DropShadowBlockStyles": DropShadowBlockStyles,
    "DropShadowBlockV0": DropShadowBlockV0,
    "DropShadowBlockV1": DropShadowBlockV1,
    "Dropdown": Dropdown,
    "DropdownProperties": DropdownProperties,
    "DropdownStyles": DropdownStyles,
    "DynamicButton": DynamicButton,
    "DynamicImageBlockProperties": DynamicImageBlockProperties,
    "DynamicProductBlockProperties": DynamicProductBlockProperties,
    "DynamicReviewBlockProperties": DynamicReviewBlockProperties,
    "DynamicTableBlockProperties": DynamicTableBlockProperties,
    "DynamicTrackingParam": DynamicTrackingParam,
    "EffectiveDateFilter": EffectiveDateFilter,
    "Email": Email,
    "EmailChannel": EmailChannel,
    "EmailContent": EmailContent,
    "EmailContentSubObject": EmailContentSubObject,
    "EmailMarketing": EmailMarketing,
    "EmailMarketingListSuppression": EmailMarketingListSuppression,
    "EmailMarketingSuppression": EmailMarketingSuppression,
    "EmailMessageDefinition": EmailMessageDefinition,
    "EmailProperties": EmailProperties,
    "EmailSendOptions": EmailSendOptions,
    "EmailStyles": EmailStyles,
    "EmailSubscriptionParameters": EmailSubscriptionParameters,
    "EmailUnsubscriptionParameters": EmailUnsubscriptionParameters,
    "EmbeddedObjectSchemaResourceObject": EmbeddedObjectSchemaResourceObject,
    "EmbeddedObjectSchemaResourceObjectAttributes": EmbeddedObjectSchemaResourceObjectAttributes,
    "EmbeddedObjectSchemaResourceObjectAttributesSourceMapping": EmbeddedObjectSchemaResourceObjectAttributesSourceMapping,
    "EncodedFormResponseObjectResource": EncodedFormResponseObjectResource,
    "EncodedFormResponseObjectResourceAttributes": EncodedFormResponseObjectResourceAttributes,
    "EqualsStringFilter": EqualsStringFilter,
    "ErrorMessages": ErrorMessages,
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
    "EventResponseObjectResourceRelationships": EventResponseObjectResourceRelationships,
    "EventResponseObjectResourceRelationshipsAttributions": EventResponseObjectResourceRelationshipsAttributions,
    "EventResponseObjectResourceRelationshipsAttributionsDataInner": EventResponseObjectResourceRelationshipsAttributionsDataInner,
    "EventResponseObjectResourceRelationshipsMetric": EventResponseObjectResourceRelationshipsMetric,
    "EventResponseObjectResourceRelationshipsMetricData": EventResponseObjectResourceRelationshipsMetricData,
    "EventResponseObjectResourceRelationshipsProfile": EventResponseObjectResourceRelationshipsProfile,
    "EventResponseObjectResourceRelationshipsProfileData": EventResponseObjectResourceRelationshipsProfileData,
    "EventsBulkCreateJob": EventsBulkCreateJob,
    "EventsBulkCreateJobResourceObject": EventsBulkCreateJobResourceObject,
    "EventsBulkCreateJobResourceObjectAttributes": EventsBulkCreateJobResourceObjectAttributes,
    "EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate": EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate,
    "EventsBulkCreateQueryResourceObject": EventsBulkCreateQueryResourceObject,
    "EventsBulkCreateQueryResourceObjectAttributes": EventsBulkCreateQueryResourceObjectAttributes,
    "EventsBulkCreateQueryResourceObjectAttributesEvents": EventsBulkCreateQueryResourceObjectAttributesEvents,
    "EventsBulkCreateQueryResourceObjectAttributesProfile": EventsBulkCreateQueryResourceObjectAttributesProfile,
    "ExistenceOperatorExistenceFilter": ExistenceOperatorExistenceFilter,
    "ExitIntent": ExitIntent,
    "ExplicitlyReachable": ExplicitlyReachable,
    "ExplicitlyUnreachable": ExplicitlyUnreachable,
    "FailedAgeGateMethodFilter": FailedAgeGateMethodFilter,
    "FixedTimerConfiguration": FixedTimerConfiguration,
    "FlowActionEncodedResponseObjectResource": FlowActionEncodedResponseObjectResource,
    "FlowActionEncodedResponseObjectResourceAttributes": FlowActionEncodedResponseObjectResourceAttributes,
    "FlowActionEncodedResponseObjectResourceRelationships": FlowActionEncodedResponseObjectResourceRelationships,
    "FlowActionEncodedResponseObjectResourceRelationshipsFlow": FlowActionEncodedResponseObjectResourceRelationshipsFlow,
    "FlowActionEncodedResponseObjectResourceRelationshipsFlowMessages": FlowActionEncodedResponseObjectResourceRelationshipsFlowMessages,
    "FlowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner": FlowActionEncodedResponseObjectResourceRelationshipsFlowMessagesDataInner,
    "FlowActionUpdateQuery": FlowActionUpdateQuery,
    "FlowActionUpdateQueryResourceObject": FlowActionUpdateQueryResourceObject,
    "FlowActionUpdateQueryResourceObjectAttributes": FlowActionUpdateQueryResourceObjectAttributes,
    "FlowCreateQuery": FlowCreateQuery,
    "FlowCreateQueryResourceObject": FlowCreateQueryResourceObject,
    "FlowCreateQueryResourceObjectAttributes": FlowCreateQueryResourceObjectAttributes,
    "FlowDefinition": FlowDefinition,
    "FlowDefinitionProfileFilter": FlowDefinitionProfileFilter,
    "FlowDefinitionProfileFilterConditionGroupsInner": FlowDefinitionProfileFilterConditionGroupsInner,
    "FlowEmail": FlowEmail,
    "FlowInternalAlert": FlowInternalAlert,
    "FlowMessageEncodedResponseObjectResource": FlowMessageEncodedResponseObjectResource,
    "FlowMessageEncodedResponseObjectResourceAttributes": FlowMessageEncodedResponseObjectResourceAttributes,
    "FlowMessageEncodedResponseObjectResourceRelationships": FlowMessageEncodedResponseObjectResourceRelationships,
    "FlowMessageEncodedResponseObjectResourceRelationshipsFlowAction": FlowMessageEncodedResponseObjectResourceRelationshipsFlowAction,
    "FlowMessageEncodedResponseObjectResourceRelationshipsTemplate": FlowMessageEncodedResponseObjectResourceRelationshipsTemplate,
    "FlowMessageEncodedResponseObjectResourceRelationshipsTemplateData": FlowMessageEncodedResponseObjectResourceRelationshipsTemplateData,
    "FlowPushNotification": FlowPushNotification,
    "FlowResponseObjectResource": FlowResponseObjectResource,
    "FlowResponseObjectResourceAttributes": FlowResponseObjectResourceAttributes,
    "FlowResponseObjectResourceRelationships": FlowResponseObjectResourceRelationships,
    "FlowResponseObjectResourceRelationshipsFlowActions": FlowResponseObjectResourceRelationshipsFlowActions,
    "FlowResponseObjectResourceRelationshipsFlowActionsDataInner": FlowResponseObjectResourceRelationshipsFlowActionsDataInner,
    "FlowResponseObjectResourceRelationshipsTags": FlowResponseObjectResourceRelationshipsTags,
    "FlowResponseObjectResourceRelationshipsTagsDataInner": FlowResponseObjectResourceRelationshipsTagsDataInner,
    "FlowSeriesRequestDTO": FlowSeriesRequestDTO,
    "FlowSeriesRequestDTOResourceObject": FlowSeriesRequestDTOResourceObject,
    "FlowSeriesRequestDTOResourceObjectAttributes": FlowSeriesRequestDTOResourceObjectAttributes,
    "FlowSms": FlowSms,
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
    "FlowWhatsApp": FlowWhatsApp,
    "FlowsProfileMetricCondition": FlowsProfileMetricCondition,
    "FormCreateQuery": FormCreateQuery,
    "FormCreateQueryResourceObject": FormCreateQueryResourceObject,
    "FormCreateQueryResourceObjectAttributes": FormCreateQueryResourceObjectAttributes,
    "FormDefinition": FormDefinition,
    "FormMethodFilter": FormMethodFilter,
    "FormResponseObjectResource": FormResponseObjectResource,
    "FormResponseObjectResourceAttributes": FormResponseObjectResourceAttributes,
    "FormResponseObjectResourceRelationships": FormResponseObjectResourceRelationships,
    "FormResponseObjectResourceRelationshipsFormVersions": FormResponseObjectResourceRelationshipsFormVersions,
    "FormResponseObjectResourceRelationshipsFormVersionsDataInner": FormResponseObjectResourceRelationshipsFormVersionsDataInner,
    "FormSeriesRequestDTO": FormSeriesRequestDTO,
    "FormSeriesRequestDTOResourceObject": FormSeriesRequestDTOResourceObject,
    "FormSeriesRequestDTOResourceObjectAttributes": FormSeriesRequestDTOResourceObjectAttributes,
    "FormSubscribeFilter": FormSubscribeFilter,
    "FormValuesRequestDTO": FormValuesRequestDTO,
    "FormValuesRequestDTOResourceObject": FormValuesRequestDTOResourceObject,
    "FormValuesRequestDTOResourceObjectAttributes": FormValuesRequestDTOResourceObjectAttributes,
    "FormVersionABTest": FormVersionABTest,
    "FormVersionResponseObjectResource": FormVersionResponseObjectResource,
    "FormVersionResponseObjectResourceAttributes": FormVersionResponseObjectResourceAttributes,
    "FormVersionResponseObjectResourceRelationships": FormVersionResponseObjectResourceRelationships,
    "FormVersionResponseObjectResourceRelationshipsForm": FormVersionResponseObjectResourceRelationshipsForm,
    "FormVersionResponseObjectResourceRelationshipsFormData": FormVersionResponseObjectResourceRelationshipsFormData,
    "GetAccountResponse": GetAccountResponse,
    "GetAccountResponseCollection": GetAccountResponseCollection,
    "GetAccounts4XXResponse": GetAccounts4XXResponse,
    "GetAccounts4XXResponseErrorsInner": GetAccounts4XXResponseErrorsInner,
    "GetAccounts4XXResponseErrorsInnerSource": GetAccounts4XXResponseErrorsInnerSource,
    "GetBulkProfileSuppressionsCreateJobResponse": GetBulkProfileSuppressionsCreateJobResponse,
    "GetBulkProfileSuppressionsCreateJobResponseCollection": GetBulkProfileSuppressionsCreateJobResponseCollection,
    "GetBulkProfileSuppressionsRemoveJobResponse": GetBulkProfileSuppressionsRemoveJobResponse,
    "GetBulkProfileSuppressionsRemoveJobResponseCollection": GetBulkProfileSuppressionsRemoveJobResponseCollection,
    "GetCampaignMessageCampaignRelationshipResponse": GetCampaignMessageCampaignRelationshipResponse,
    "GetCampaignMessageCampaignRelationshipResponseData": GetCampaignMessageCampaignRelationshipResponseData,
    "GetCampaignMessageImageRelationshipResponse": GetCampaignMessageImageRelationshipResponse,
    "GetCampaignMessageImageRelationshipResponseData": GetCampaignMessageImageRelationshipResponseData,
    "GetCampaignMessageResponseCollectionCompoundDocument": GetCampaignMessageResponseCollectionCompoundDocument,
    "GetCampaignMessageResponseCompoundDocument": GetCampaignMessageResponseCompoundDocument,
    "GetCampaignMessageTemplateRelationshipResponse": GetCampaignMessageTemplateRelationshipResponse,
    "GetCampaignMessagesRelationshipsResponseCollection": GetCampaignMessagesRelationshipsResponseCollection,
    "GetCampaignMessagesRelationshipsResponseCollectionDataInner": GetCampaignMessagesRelationshipsResponseCollectionDataInner,
    "GetCampaignRecipientEstimationJobResponse": GetCampaignRecipientEstimationJobResponse,
    "GetCampaignRecipientEstimationResponse": GetCampaignRecipientEstimationResponse,
    "GetCampaignResponse": GetCampaignResponse,
    "GetCampaignResponseCollectionCompoundDocument": GetCampaignResponseCollectionCompoundDocument,
    "GetCampaignResponseCompoundDocument": GetCampaignResponseCompoundDocument,
    "GetCampaignSendJobResponse": GetCampaignSendJobResponse,
    "GetCampaignTagsRelationshipsResponseCollection": GetCampaignTagsRelationshipsResponseCollection,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocument": GetCatalogCategoryCreateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryCreateJobResponseCompoundDocument": GetCatalogCategoryCreateJobResponseCompoundDocument,
    "GetCatalogCategoryDeleteJobResponse": GetCatalogCategoryDeleteJobResponse,
    "GetCatalogCategoryDeleteJobResponseCollection": GetCatalogCategoryDeleteJobResponseCollection,
    "GetCatalogCategoryItemsRelationshipsResponseCollection": GetCatalogCategoryItemsRelationshipsResponseCollection,
    "GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner": GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner,
    "GetCatalogCategoryResponse": GetCatalogCategoryResponse,
    "GetCatalogCategoryResponseCollection": GetCatalogCategoryResponseCollection,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryUpdateJobResponseCompoundDocument": GetCatalogCategoryUpdateJobResponseCompoundDocument,
    "GetCatalogItemCategoriesRelationshipsResponseCollection": GetCatalogItemCategoriesRelationshipsResponseCollection,
    "GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner": GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocument": GetCatalogItemCreateJobResponseCollectionCompoundDocument,
    "GetCatalogItemCreateJobResponseCompoundDocument": GetCatalogItemCreateJobResponseCompoundDocument,
    "GetCatalogItemDeleteJobResponse": GetCatalogItemDeleteJobResponse,
    "GetCatalogItemDeleteJobResponseCollection": GetCatalogItemDeleteJobResponseCollection,
    "GetCatalogItemResponseCollectionCompoundDocument": GetCatalogItemResponseCollectionCompoundDocument,
    "GetCatalogItemResponseCompoundDocument": GetCatalogItemResponseCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocument": GetCatalogItemUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogItemUpdateJobResponseCompoundDocument": GetCatalogItemUpdateJobResponseCompoundDocument,
    "GetCatalogItemVariantsRelationshipsResponseCollection": GetCatalogItemVariantsRelationshipsResponseCollection,
    "GetCatalogItemVariantsRelationshipsResponseCollectionDataInner": GetCatalogItemVariantsRelationshipsResponseCollectionDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocument": GetCatalogVariantCreateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantCreateJobResponseCompoundDocument": GetCatalogVariantCreateJobResponseCompoundDocument,
    "GetCatalogVariantDeleteJobResponse": GetCatalogVariantDeleteJobResponse,
    "GetCatalogVariantDeleteJobResponseCollection": GetCatalogVariantDeleteJobResponseCollection,
    "GetCatalogVariantResponse": GetCatalogVariantResponse,
    "GetCatalogVariantResponseCollection": GetCatalogVariantResponseCollection,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocument": GetCatalogVariantUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantUpdateJobResponseCompoundDocument": GetCatalogVariantUpdateJobResponseCompoundDocument,
    "GetConversationResponse": GetConversationResponse,
    "GetConversationResponseCollection": GetConversationResponseCollection,
    "GetCouponCodeCouponRelationshipResponse": GetCouponCodeCouponRelationshipResponse,
    "GetCouponCodeCouponRelationshipResponseData": GetCouponCodeCouponRelationshipResponseData,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocument": GetCouponCodeCreateJobResponseCollectionCompoundDocument,
    "GetCouponCodeCreateJobResponseCompoundDocument": GetCouponCodeCreateJobResponseCompoundDocument,
    "GetCouponCodeResponseCollection": GetCouponCodeResponseCollection,
    "GetCouponCodeResponseCollectionCompoundDocument": GetCouponCodeResponseCollectionCompoundDocument,
    "GetCouponCodeResponseCompoundDocument": GetCouponCodeResponseCompoundDocument,
    "GetCouponCodesRelationshipsResponseCollection": GetCouponCodesRelationshipsResponseCollection,
    "GetCouponCodesRelationshipsResponseCollectionDataInner": GetCouponCodesRelationshipsResponseCollectionDataInner,
    "GetCouponResponse": GetCouponResponse,
    "GetCouponResponseCollection": GetCouponResponseCollection,
    "GetCustomMetricMetricsRelationshipsResponseCollection": GetCustomMetricMetricsRelationshipsResponseCollection,
    "GetCustomMetricResponse": GetCustomMetricResponse,
    "GetCustomMetricResponseCollectionCompoundDocument": GetCustomMetricResponseCollectionCompoundDocument,
    "GetCustomMetricResponseCompoundDocument": GetCustomMetricResponseCompoundDocument,
    "GetDataSourceResponse": GetDataSourceResponse,
    "GetDataSourceResponseCollection": GetDataSourceResponseCollection,
    "GetEncodedFormResponse": GetEncodedFormResponse,
    "GetEventMetricRelationshipResponse": GetEventMetricRelationshipResponse,
    "GetEventMetricRelationshipResponseData": GetEventMetricRelationshipResponseData,
    "GetEventProfileRelationshipResponse": GetEventProfileRelationshipResponse,
    "GetEventProfileRelationshipResponseData": GetEventProfileRelationshipResponseData,
    "GetEventResponseCollectionCompoundDocument": GetEventResponseCollectionCompoundDocument,
    "GetEventResponseCompoundDocument": GetEventResponseCompoundDocument,
    "GetFlowActionEncodedResponse": GetFlowActionEncodedResponse,
    "GetFlowActionEncodedResponseCollection": GetFlowActionEncodedResponseCollection,
    "GetFlowActionEncodedResponseCompoundDocument": GetFlowActionEncodedResponseCompoundDocument,
    "GetFlowActionFlowMessageRelationshipResponseCollection": GetFlowActionFlowMessageRelationshipResponseCollection,
    "GetFlowActionFlowRelationshipResponse": GetFlowActionFlowRelationshipResponse,
    "GetFlowActionFlowRelationshipResponseData": GetFlowActionFlowRelationshipResponseData,
    "GetFlowFlowActionRelationshipListResponseCollection": GetFlowFlowActionRelationshipListResponseCollection,
    "GetFlowMessageActionRelationshipResponse": GetFlowMessageActionRelationshipResponse,
    "GetFlowMessageActionRelationshipResponseData": GetFlowMessageActionRelationshipResponseData,
    "GetFlowMessageEncodedResponseCollection": GetFlowMessageEncodedResponseCollection,
    "GetFlowMessageEncodedResponseCompoundDocument": GetFlowMessageEncodedResponseCompoundDocument,
    "GetFlowMessageTemplateRelationshipResponse": GetFlowMessageTemplateRelationshipResponse,
    "GetFlowMessageTemplateRelationshipResponseData": GetFlowMessageTemplateRelationshipResponseData,
    "GetFlowResponse": GetFlowResponse,
    "GetFlowResponseCollection": GetFlowResponseCollection,
    "GetFlowResponseCollectionCompoundDocument": GetFlowResponseCollectionCompoundDocument,
    "GetFlowTagsRelationshipsResponseCollection": GetFlowTagsRelationshipsResponseCollection,
    "GetFlowV2ResponseCompoundDocument": GetFlowV2ResponseCompoundDocument,
    "GetFormResponse": GetFormResponse,
    "GetFormResponseCollection": GetFormResponseCollection,
    "GetFormVersionFormRelationshipResponse": GetFormVersionFormRelationshipResponse,
    "GetFormVersionFormRelationshipResponseData": GetFormVersionFormRelationshipResponseData,
    "GetFormVersionResponseCollection": GetFormVersionResponseCollection,
    "GetFormVersionResponseCompoundDocument": GetFormVersionResponseCompoundDocument,
    "GetFormVersionsRelationshipsResponseCollection": GetFormVersionsRelationshipsResponseCollection,
    "GetFormVersionsRelationshipsResponseCollectionDataInner": GetFormVersionsRelationshipsResponseCollectionDataInner,
    "GetImageResponse": GetImageResponse,
    "GetImageResponseCollection": GetImageResponseCollection,
    "GetImportErrorResponseCollection": GetImportErrorResponseCollection,
    "GetIngestionLogResponseCollectionCompoundDocument": GetIngestionLogResponseCollectionCompoundDocument,
    "GetListFlowTriggersRelationshipsResponseCollection": GetListFlowTriggersRelationshipsResponseCollection,
    "GetListListResponseCollectionCompoundDocument": GetListListResponseCollectionCompoundDocument,
    "GetListMemberResponseCollection": GetListMemberResponseCollection,
    "GetListProfilesRelationshipsResponseCollection": GetListProfilesRelationshipsResponseCollection,
    "GetListProfilesRelationshipsResponseCollectionDataInner": GetListProfilesRelationshipsResponseCollectionDataInner,
    "GetListResponseCollection": GetListResponseCollection,
    "GetListRetrieveResponseCompoundDocument": GetListRetrieveResponseCompoundDocument,
    "GetListTagsRelationshipsResponseCollection": GetListTagsRelationshipsResponseCollection,
    "GetListTagsRelationshipsResponseCollectionDataInner": GetListTagsRelationshipsResponseCollectionDataInner,
    "GetMappedMetricCustomMetricRelationshipResponse": GetMappedMetricCustomMetricRelationshipResponse,
    "GetMappedMetricCustomMetricRelationshipResponseData": GetMappedMetricCustomMetricRelationshipResponseData,
    "GetMappedMetricMetricRelationshipResponse": GetMappedMetricMetricRelationshipResponse,
    "GetMappedMetricResponseCollectionCompoundDocument": GetMappedMetricResponseCollectionCompoundDocument,
    "GetMappedMetricResponseCompoundDocument": GetMappedMetricResponseCompoundDocument,
    "GetMetricFlowTriggersRelationshipsResponseCollection": GetMetricFlowTriggersRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollection": GetMetricPropertiesRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollectionDataInner": GetMetricPropertiesRelationshipsResponseCollectionDataInner,
    "GetMetricPropertyMetricRelationshipResponse": GetMetricPropertyMetricRelationshipResponse,
    "GetMetricPropertyResponseCollection": GetMetricPropertyResponseCollection,
    "GetMetricPropertyResponseCompoundDocument": GetMetricPropertyResponseCompoundDocument,
    "GetMetricResponse": GetMetricResponse,
    "GetMetricResponseCollection": GetMetricResponseCollection,
    "GetMetricResponseCollectionCompoundDocument": GetMetricResponseCollectionCompoundDocument,
    "GetMetricResponseCompoundDocument": GetMetricResponseCompoundDocument,
    "GetObjectRecordResponse": GetObjectRecordResponse,
    "GetObjectRecordResponseCollection": GetObjectRecordResponseCollection,
    "GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollection": GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollection,
    "GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner": GetObjectSchemaProfileObjectSchemasRelationshipsResponseCollectionDataInner,
    "GetObjectSchemaResponse": GetObjectSchemaResponse,
    "GetObjectSchemaResponseCollection": GetObjectSchemaResponseCollection,
    "GetObjectSchemaResponseCompoundDocument": GetObjectSchemaResponseCompoundDocument,
    "GetObjectSchemaSchemasRelationshipsResponseCollection": GetObjectSchemaSchemasRelationshipsResponseCollection,
    "GetObjectSchemaSchemasRelationshipsResponseCollectionDataInner": GetObjectSchemaSchemasRelationshipsResponseCollectionDataInner,
    "GetObjectSchemaSourceMappingRelationshipResponse": GetObjectSchemaSourceMappingRelationshipResponse,
    "GetObjectSchemaSourceMappingRelationshipResponseData": GetObjectSchemaSourceMappingRelationshipResponseData,
    "GetObjectTypeCurrentSchemaRelationshipResponse": GetObjectTypeCurrentSchemaRelationshipResponse,
    "GetObjectTypeCurrentSchemaRelationshipResponseData": GetObjectTypeCurrentSchemaRelationshipResponseData,
    "GetObjectTypeDraftSchemaRelationshipResponse": GetObjectTypeDraftSchemaRelationshipResponse,
    "GetObjectTypeIngestionLogsRelationshipsResponseCollection": GetObjectTypeIngestionLogsRelationshipsResponseCollection,
    "GetObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner": GetObjectTypeIngestionLogsRelationshipsResponseCollectionDataInner,
    "GetObjectTypeProfileObjectTypesRelationshipsResponseCollection": GetObjectTypeProfileObjectTypesRelationshipsResponseCollection,
    "GetObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner": GetObjectTypeProfileObjectTypesRelationshipsResponseCollectionDataInner,
    "GetObjectTypeRecordsRelationshipsResponseCollection": GetObjectTypeRecordsRelationshipsResponseCollection,
    "GetObjectTypeRecordsRelationshipsResponseCollectionDataInner": GetObjectTypeRecordsRelationshipsResponseCollectionDataInner,
    "GetObjectTypeResponseCollectionCompoundDocument": GetObjectTypeResponseCollectionCompoundDocument,
    "GetObjectTypeResponseCompoundDocument": GetObjectTypeResponseCompoundDocument,
    "GetObjectTypeSchemaVersionsRelationshipsResponseCollection": GetObjectTypeSchemaVersionsRelationshipsResponseCollection,
    "GetObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner": GetObjectTypeSchemaVersionsRelationshipsResponseCollectionDataInner,
    "GetObjectTypeTypesRelationshipsResponseCollection": GetObjectTypeTypesRelationshipsResponseCollection,
    "GetObjectTypeTypesRelationshipsResponseCollectionDataInner": GetObjectTypeTypesRelationshipsResponseCollectionDataInner,
    "GetProfileBulkImportJobListsRelationshipsResponseCollection": GetProfileBulkImportJobListsRelationshipsResponseCollection,
    "GetProfileBulkImportJobProfilesRelationshipsResponseCollection": GetProfileBulkImportJobProfilesRelationshipsResponseCollection,
    "GetProfileConversationRelationshipResponse": GetProfileConversationRelationshipResponse,
    "GetProfileConversationRelationshipResponseData": GetProfileConversationRelationshipResponseData,
    "GetProfileConversationsRelationshipsResponseCollection": GetProfileConversationsRelationshipsResponseCollection,
    "GetProfileConversationsRelationshipsResponseCollectionDataInner": GetProfileConversationsRelationshipsResponseCollectionDataInner,
    "GetProfileImportJobResponseCollectionCompoundDocument": GetProfileImportJobResponseCollectionCompoundDocument,
    "GetProfileImportJobResponseCompoundDocument": GetProfileImportJobResponseCompoundDocument,
    "GetProfileListsRelationshipsResponseCollection": GetProfileListsRelationshipsResponseCollection,
    "GetProfileListsRelationshipsResponseCollectionDataInner": GetProfileListsRelationshipsResponseCollectionDataInner,
    "GetProfilePushTokensRelationshipsResponseCollection": GetProfilePushTokensRelationshipsResponseCollection,
    "GetProfilePushTokensRelationshipsResponseCollectionDataInner": GetProfilePushTokensRelationshipsResponseCollectionDataInner,
    "GetProfileResponse": GetProfileResponse,
    "GetProfileResponseCollection": GetProfileResponseCollection,
    "GetProfileResponsePluralConversationsCollectionCompoundDocument": GetProfileResponsePluralConversationsCollectionCompoundDocument,
    "GetProfileResponsePluralConversationsCompoundDocument": GetProfileResponsePluralConversationsCompoundDocument,
    "GetProfileSegmentsRelationshipsResponseCollection": GetProfileSegmentsRelationshipsResponseCollection,
    "GetPushTokenProfileRelationshipResponse": GetPushTokenProfileRelationshipResponse,
    "GetPushTokenResponseCollection": GetPushTokenResponseCollection,
    "GetPushTokenResponseCollectionCompoundDocument": GetPushTokenResponseCollectionCompoundDocument,
    "GetPushTokenResponseCompoundDocument": GetPushTokenResponseCompoundDocument,
    "GetReviewResponseDTOCollectionCompoundDocument": GetReviewResponseDTOCollectionCompoundDocument,
    "GetReviewResponseDTOCompoundDocument": GetReviewResponseDTOCompoundDocument,
    "GetSegmentFlowTriggersRelationshipsResponseCollection": GetSegmentFlowTriggersRelationshipsResponseCollection,
    "GetSegmentListResponseCollectionCompoundDocument": GetSegmentListResponseCollectionCompoundDocument,
    "GetSegmentMemberResponseCollection": GetSegmentMemberResponseCollection,
    "GetSegmentProfilesRelationshipsResponseCollection": GetSegmentProfilesRelationshipsResponseCollection,
    "GetSegmentResponseCollection": GetSegmentResponseCollection,
    "GetSegmentRetrieveResponseCompoundDocument": GetSegmentRetrieveResponseCompoundDocument,
    "GetSegmentTagsRelationshipsResponseCollection": GetSegmentTagsRelationshipsResponseCollection,
    "GetSourceMappingResponse": GetSourceMappingResponse,
    "GetTagCampaignRelationshipsResponseCollection": GetTagCampaignRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollectionDataInner": GetTagCampaignRelationshipsResponseCollectionDataInner,
    "GetTagFlowRelationshipsResponseCollection": GetTagFlowRelationshipsResponseCollection,
    "GetTagFlowRelationshipsResponseCollectionDataInner": GetTagFlowRelationshipsResponseCollectionDataInner,
    "GetTagGroupRelationshipResponse": GetTagGroupRelationshipResponse,
    "GetTagGroupRelationshipResponseData": GetTagGroupRelationshipResponseData,
    "GetTagGroupResponse": GetTagGroupResponse,
    "GetTagGroupResponseCollection": GetTagGroupResponseCollection,
    "GetTagGroupTagsRelationshipsResponseCollection": GetTagGroupTagsRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollection": GetTagListRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollectionDataInner": GetTagListRelationshipsResponseCollectionDataInner,
    "GetTagResponseCollection": GetTagResponseCollection,
    "GetTagResponseCollectionCompoundDocument": GetTagResponseCollectionCompoundDocument,
    "GetTagResponseCompoundDocument": GetTagResponseCompoundDocument,
    "GetTagSegmentRelationshipsResponseCollection": GetTagSegmentRelationshipsResponseCollection,
    "GetTagSegmentRelationshipsResponseCollectionDataInner": GetTagSegmentRelationshipsResponseCollectionDataInner,
    "GetTemplateDndResponse": GetTemplateDndResponse,
    "GetTemplateDndResponseCollection": GetTemplateDndResponseCollection,
    "GetTemplateResponse": GetTemplateResponse,
    "GetTrackingSettingResponse": GetTrackingSettingResponse,
    "GetTrackingSettingResponseCollection": GetTrackingSettingResponseCollection,
    "GetUniversalContentResponse": GetUniversalContentResponse,
    "GetUniversalContentResponseCollection": GetUniversalContentResponseCollection,
    "GetWebFeedResponse": GetWebFeedResponse,
    "GetWebFeedResponseCollection": GetWebFeedResponseCollection,
    "GetWebhookResponseCollectionCompoundDocument": GetWebhookResponseCollectionCompoundDocument,
    "GetWebhookResponseCompoundDocument": GetWebhookResponseCompoundDocument,
    "GetWebhookTopicResponse": GetWebhookTopicResponse,
    "GetWebhookTopicResponseCollection": GetWebhookTopicResponseCollection,
    "GoToInbox": GoToInbox,
    "GreaterThanPositiveNumericFilter": GreaterThanPositiveNumericFilter,
    "HTMLBlockDataV0": HTMLBlockDataV0,
    "HTMLBlockDataV1": HTMLBlockDataV1,
    "HTMLBlockV0": HTMLBlockV0,
    "HTMLBlockV1": HTMLBlockV1,
    "HTMLText": HTMLText,
    "HTMLTextProperties": HTMLTextProperties,
    "HTMLTextStyles": HTMLTextStyles,
    "HasEmailMarketing": HasEmailMarketing,
    "HasEmailMarketingConsent": HasEmailMarketingConsent,
    "HasEmailMarketingNeverSubscribed": HasEmailMarketingNeverSubscribed,
    "HasEmailMarketingSubscribed": HasEmailMarketingSubscribed,
    "HasPushMarketing": HasPushMarketing,
    "HasPushMarketingConsent": HasPushMarketingConsent,
    "HasSMSMarketingConsent": HasSMSMarketingConsent,
    "HasSMSMarketingSubscribed": HasSMSMarketingSubscribed,
    "HeaderBlockData": HeaderBlockData,
    "HeaderBlockStyles": HeaderBlockStyles,
    "HeaderBlockV0": HeaderBlockV0,
    "HeaderBlockV1": HeaderBlockV1,
    "HeaderImageSubBlock": HeaderImageSubBlock,
    "HeaderLinkSubBlock": HeaderLinkSubBlock,
    "HeaderLogoSubBlock": HeaderLogoSubBlock,
    "Heading1Style": Heading1Style,
    "Heading2Style": Heading2Style,
    "Heading3Style": Heading3Style,
    "Heading4Style": Heading4Style,
    "HeadingStyleStyles": HeadingStyleStyles,
    "HorizontalRuleBlockData": HorizontalRuleBlockData,
    "HorizontalRuleBlockStyles": HorizontalRuleBlockStyles,
    "HorizontalRuleBlockV0": HorizontalRuleBlockV0,
    "HorizontalRuleBlockV1": HorizontalRuleBlockV1,
    "IafDeeplinkToScreen": IafDeeplinkToScreen,
    "IafDeeplinkToScreenProperties": IafDeeplinkToScreenProperties,
    "IdentifiedProfiles": IdentifiedProfiles,
    "Image": Image,
    "ImageAssetProperties": ImageAssetProperties,
    "ImageBlockCroppingProperties": ImageBlockCroppingProperties,
    "ImageBlockData": ImageBlockData,
    "ImageBlockStyles": ImageBlockStyles,
    "ImageBlockV0": ImageBlockV0,
    "ImageBlockV1": ImageBlockV1,
    "ImageCreateQuery": ImageCreateQuery,
    "ImageCreateQueryResourceObject": ImageCreateQueryResourceObject,
    "ImageCreateQueryResourceObjectAttributes": ImageCreateQueryResourceObjectAttributes,
    "ImageDropShadowStyles": ImageDropShadowStyles,
    "ImagePartialUpdateQuery": ImagePartialUpdateQuery,
    "ImagePartialUpdateQueryResourceObject": ImagePartialUpdateQueryResourceObject,
    "ImagePartialUpdateQueryResourceObjectAttributes": ImagePartialUpdateQueryResourceObjectAttributes,
    "ImageProperties": ImageProperties,
    "ImageResponseObjectResource": ImageResponseObjectResource,
    "ImageResponseObjectResourceAttributes": ImageResponseObjectResourceAttributes,
    "ImageStyles": ImageStyles,
    "ImmediateSendStrategy": ImmediateSendStrategy,
    "ImplicitlyOrExplicitlyReachable": ImplicitlyOrExplicitlyReachable,
    "ImplicitlyOrExplicitlyUnreachable": ImplicitlyOrExplicitlyUnreachable,
    "ImplicitlyReachable": ImplicitlyReachable,
    "ImplicitlyUnreachable": ImplicitlyUnreachable,
    "ImportErrorResponseObjectResource": ImportErrorResponseObjectResource,
    "ImportErrorResponseObjectResourceAttributes": ImportErrorResponseObjectResourceAttributes,
    "InStringArrayFilter": InStringArrayFilter,
    "InTheLastBaseRelativeDateFilter": InTheLastBaseRelativeDateFilter,
    "InboundMessageMethodFilter": InboundMessageMethodFilter,
    "Increment": Increment,
    "IngestionLogErrorDetail": IngestionLogErrorDetail,
    "IngestionLogResponseObjectResource": IngestionLogResponseObjectResource,
    "IngestionLogResponseObjectResourceAttributes": IngestionLogResponseObjectResourceAttributes,
    "IngestionLogResponseObjectResourceRelationships": IngestionLogResponseObjectResourceRelationships,
    "IngestionLogResponseObjectResourceRelationshipsObjectRecord": IngestionLogResponseObjectResourceRelationshipsObjectRecord,
    "IngestionLogResponseObjectResourceRelationshipsObjectRecordData": IngestionLogResponseObjectResourceRelationshipsObjectRecordData,
    "IngestionLogResponseObjectResourceRelationshipsObjectType": IngestionLogResponseObjectResourceRelationshipsObjectType,
    "IngestionLogResponseObjectResourceRelationshipsObjectTypeData": IngestionLogResponseObjectResourceRelationshipsObjectTypeData,
    "InputStyles": InputStyles,
    "IntegerFilter": IntegerFilter,
    "InternalScheduledReportBuilderReportData": InternalScheduledReportBuilderReportData,
    "InternalScheduledReportData": InternalScheduledReportData,
    "InternalServiceAction": InternalServiceAction,
    "InternalServiceActionData": InternalServiceActionData,
    "InternalTrackEventData": InternalTrackEventData,
    "InternalUnknownServiceData": InternalUnknownServiceData,
    "InvalidEmailDateFilter": InvalidEmailDateFilter,
    "IpAllowlistResponse": IpAllowlistResponse,
    "IpAllowlistResponseData": IpAllowlistResponseData,
    "IpAllowlistResponseDataWrapper": IpAllowlistResponseDataWrapper,
    "IsSetExistenceFilter": IsSetExistenceFilter,
    "LessThanPositiveNumericFilter": LessThanPositiveNumericFilter,
    "Link": Link,
    "LinkStyle": LinkStyle,
    "LinkStyleStyles": LinkStyleStyles,
    "LinkStyles": LinkStyles,
    "ListContainsOperatorListContainsFilter": ListContainsOperatorListContainsFilter,
    "ListCreateQuery": ListCreateQuery,
    "ListCreateQueryResourceObject": ListCreateQueryResourceObject,
    "ListCreateQueryResourceObjectAttributes": ListCreateQueryResourceObjectAttributes,
    "ListLengthFilter": ListLengthFilter,
    "ListListResponseObjectResource": ListListResponseObjectResource,
    "ListListResponseObjectResourceAttributes": ListListResponseObjectResourceAttributes,
    "ListListResponseObjectResourceRelationships": ListListResponseObjectResourceRelationships,
    "ListListResponseObjectResourceRelationshipsProfiles": ListListResponseObjectResourceRelationshipsProfiles,
    "ListListResponseObjectResourceRelationshipsProfilesDataInner": ListListResponseObjectResourceRelationshipsProfilesDataInner,
    "ListMemberResponseObjectResourceAttributes": ListMemberResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceExtended": ListMemberResponseObjectResourceExtended,
    "ListMemberResponseObjectResourceExtendedAttributes": ListMemberResponseObjectResourceExtendedAttributes,
    "ListMembersAddQuery": ListMembersAddQuery,
    "ListMembersDeleteQuery": ListMembersDeleteQuery,
    "ListPartialUpdateQuery": ListPartialUpdateQuery,
    "ListPartialUpdateQueryResourceObject": ListPartialUpdateQueryResourceObject,
    "ListPartialUpdateQueryResourceObjectAttributes": ListPartialUpdateQueryResourceObjectAttributes,
    "ListRegexOperatorListContainsFilter": ListRegexOperatorListContainsFilter,
    "ListResponseObjectResource": ListResponseObjectResource,
    "ListRetrieveResponseObjectResourceAttributes": ListRetrieveResponseObjectResourceAttributes,
    "ListRetrieveResponseObjectResourceExtended": ListRetrieveResponseObjectResourceExtended,
    "ListRetrieveResponseObjectResourceExtendedAttributes": ListRetrieveResponseObjectResourceExtendedAttributes,
    "ListSetFilter": ListSetFilter,
    "ListSubstringFilter": ListSubstringFilter,
    "ListTrigger": ListTrigger,
    "ListUpdateAction": ListUpdateAction,
    "ListUpdateActionData": ListUpdateActionData,
    "ListsAndSegments": ListsAndSegments,
    "ListsAndSegmentsProperties": ListsAndSegmentsProperties,
    "LocalStaticSend": LocalStaticSend,
    "Location": Location,
    "LocationProperties": LocationProperties,
    "LowInventoryCondition": LowInventoryCondition,
    "LowInventoryTrigger": LowInventoryTrigger,
    "LowInventoryTriggerTriggerFilter": LowInventoryTriggerTriggerFilter,
    "LowInventoryTriggerTriggerFilterConditionGroupsInner": LowInventoryTriggerTriggerFilterConditionGroupsInner,
    "MailboxProviderMethodFilter": MailboxProviderMethodFilter,
    "ManualAddManualMethodFilter": ManualAddManualMethodFilter,
    "ManualImportManualMethodFilter": ManualImportManualMethodFilter,
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
    "MappedMetricResponseObjectResourceRelationships": MappedMetricResponseObjectResourceRelationships,
    "MappedMetricResponseObjectResourceRelationshipsCustomMetric": MappedMetricResponseObjectResourceRelationshipsCustomMetric,
    "MappedMetricResponseObjectResourceRelationshipsCustomMetricData": MappedMetricResponseObjectResourceRelationshipsCustomMetricData,
    "MappedMetricResponseObjectResourceRelationshipsMetric": MappedMetricResponseObjectResourceRelationshipsMetric,
    "MappedMetricResponseObjectResourceRelationshipsMetricData": MappedMetricResponseObjectResourceRelationshipsMetricData,
    "Margin": Margin,
    "MessageBlockedMethodFilter": MessageBlockedMethodFilter,
    "MethodFilter": MethodFilter,
    "MetricAggregateQuery": MetricAggregateQuery,
    "MetricAggregateQueryResourceObject": MetricAggregateQueryResourceObject,
    "MetricAggregateQueryResourceObjectAttributes": MetricAggregateQueryResourceObjectAttributes,
    "MetricAggregateRowDTO": MetricAggregateRowDTO,
    "MetricCreateQueryResourceObject": MetricCreateQueryResourceObject,
    "MetricCreateQueryResourceObjectAttributes": MetricCreateQueryResourceObjectAttributes,
    "MetricPropertyCondition": MetricPropertyCondition,
    "MetricPropertyResponseObjectResourceAttributes": MetricPropertyResponseObjectResourceAttributes,
    "MetricPropertyResponseObjectResourceExtended": MetricPropertyResponseObjectResourceExtended,
    "MetricPropertyResponseObjectResourceExtendedAttributes": MetricPropertyResponseObjectResourceExtendedAttributes,
    "MetricPropertyResponseObjectResourceExtendedRelationships": MetricPropertyResponseObjectResourceExtendedRelationships,
    "MetricPropertyResponseObjectResourceExtendedRelationshipsMetric": MetricPropertyResponseObjectResourceExtendedRelationshipsMetric,
    "MetricPropertyResponseObjectResourceExtendedRelationshipsMetricData": MetricPropertyResponseObjectResourceExtendedRelationshipsMetricData,
    "MetricResponseObjectResource": MetricResponseObjectResource,
    "MetricResponseObjectResourceAttributes": MetricResponseObjectResourceAttributes,
    "MetricResponseObjectResourceRelationships": MetricResponseObjectResourceRelationships,
    "MetricResponseObjectResourceRelationshipsFlowTriggers": MetricResponseObjectResourceRelationshipsFlowTriggers,
    "MetricResponseObjectResourceRelationshipsFlowTriggersDataInner": MetricResponseObjectResourceRelationshipsFlowTriggersDataInner,
    "MetricTrigger": MetricTrigger,
    "MetricTriggerTriggerFilter": MetricTriggerTriggerFilter,
    "MetricTriggerTriggerFilterConditionGroupsInner": MetricTriggerTriggerFilterConditionGroupsInner,
    "MobileOverlay": MobileOverlay,
    "MobilePushBadge": MobilePushBadge,
    "MobilePushContent": MobilePushContent,
    "MobilePushContentCreate": MobilePushContentCreate,
    "MobilePushContentUpdate": MobilePushContentUpdate,
    "MobilePushMessageSilentDefinition": MobilePushMessageSilentDefinition,
    "MobilePushMessageSilentDefinitionCreate": MobilePushMessageSilentDefinitionCreate,
    "MobilePushMessageSilentDefinitionUpdate": MobilePushMessageSilentDefinitionUpdate,
    "MobilePushMessageStandardDefinition": MobilePushMessageStandardDefinition,
    "MobilePushMessageStandardDefinitionCreate": MobilePushMessageStandardDefinitionCreate,
    "MobilePushMessageStandardDefinitionUpdate": MobilePushMessageStandardDefinitionUpdate,
    "MobilePushNoBadge": MobilePushNoBadge,
    "MobilePushOptions": MobilePushOptions,
    "MobileStyle": MobileStyle,
    "MobileStyleProperties": MobileStyleProperties,
    "MobileStyleStyles": MobileStyleStyles,
    "ModelDate": ModelDate,
    "MultiBranchSplitAction": MultiBranchSplitAction,
    "MultiBranchSplitActionData": MultiBranchSplitActionData,
    "MultiBranchSplitBranch": MultiBranchSplitBranch,
    "MultiBranchSplitBranchBranchFilter": MultiBranchSplitBranchBranchFilter,
    "MultiBranchSplitBranchBranchFilterConditionGroupsInner": MultiBranchSplitBranchBranchFilterConditionGroupsInner,
    "NextStep": NextStep,
    "NextStepProperties": NextStepProperties,
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
    "NumericOperatorNumericFilter": NumericOperatorNumericFilter,
    "NumericRangeFilter": NumericRangeFilter,
    "ObjectLinks": ObjectLinks,
    "ObjectRecordDeleteJobCreateQuery": ObjectRecordDeleteJobCreateQuery,
    "ObjectRecordDeleteJobCreateQueryResourceObject": ObjectRecordDeleteJobCreateQueryResourceObject,
    "ObjectRecordDeleteJobCreateQueryResourceObjectRelationships": ObjectRecordDeleteJobCreateQueryResourceObjectRelationships,
    "ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords": ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecords,
    "ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner": ObjectRecordDeleteJobCreateQueryResourceObjectRelationshipsObjectRecordsDataInner,
    "ObjectRecordResponseObjectResource": ObjectRecordResponseObjectResource,
    "ObjectRecordResponseObjectResourceAttributes": ObjectRecordResponseObjectResourceAttributes,
    "ObjectSchemaCreateQuery": ObjectSchemaCreateQuery,
    "ObjectSchemaCreateQueryResourceObject": ObjectSchemaCreateQueryResourceObject,
    "ObjectSchemaCreateQueryResourceObjectAttributes": ObjectSchemaCreateQueryResourceObjectAttributes,
    "ObjectSchemaCreateQueryResourceObjectRelationships": ObjectSchemaCreateQueryResourceObjectRelationships,
    "ObjectSchemaCreateQueryResourceObjectRelationshipsObjectType": ObjectSchemaCreateQueryResourceObjectRelationshipsObjectType,
    "ObjectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData": ObjectSchemaCreateQueryResourceObjectRelationshipsObjectTypeData,
    "ObjectSchemaPartialUpdateQuery": ObjectSchemaPartialUpdateQuery,
    "ObjectSchemaPartialUpdateQueryResourceObject": ObjectSchemaPartialUpdateQueryResourceObject,
    "ObjectSchemaPartialUpdateQueryResourceObjectAttributes": ObjectSchemaPartialUpdateQueryResourceObjectAttributes,
    "ObjectSchemaRelationshipCreateMeta": ObjectSchemaRelationshipCreateMeta,
    "ObjectSchemaRelationshipCreateQuery": ObjectSchemaRelationshipCreateQuery,
    "ObjectSchemaRelationshipCreateQueryDataInner": ObjectSchemaRelationshipCreateQueryDataInner,
    "ObjectSchemaRelationshipDeleteMeta": ObjectSchemaRelationshipDeleteMeta,
    "ObjectSchemaRelationshipDeleteQuery": ObjectSchemaRelationshipDeleteQuery,
    "ObjectSchemaRelationshipDeleteQueryDataInner": ObjectSchemaRelationshipDeleteQueryDataInner,
    "ObjectSchemaRelationshipMeta": ObjectSchemaRelationshipMeta,
    "ObjectSchemaRelationshipPartialUpdateQuery": ObjectSchemaRelationshipPartialUpdateQuery,
    "ObjectSchemaRelationshipPartialUpdateQueryData": ObjectSchemaRelationshipPartialUpdateQueryData,
    "ObjectSchemaRelationshipResponseObjectResource": ObjectSchemaRelationshipResponseObjectResource,
    "ObjectSchemaRelationshipResponseObjectResourceAttributes": ObjectSchemaRelationshipResponseObjectResourceAttributes,
    "ObjectSchemaRelationshipUpdateMeta": ObjectSchemaRelationshipUpdateMeta,
    "ObjectSchemaResponseObjectResource": ObjectSchemaResponseObjectResource,
    "ObjectSchemaResponseObjectResourceAttributes": ObjectSchemaResponseObjectResourceAttributes,
    "ObjectSchemaResponseObjectResourceRelationships": ObjectSchemaResponseObjectResourceRelationships,
    "ObjectSchemaResponseObjectResourceRelationshipsObjectSchemas": ObjectSchemaResponseObjectResourceRelationshipsObjectSchemas,
    "ObjectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner": ObjectSchemaResponseObjectResourceRelationshipsObjectSchemasDataInner,
    "ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas": ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemas,
    "ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner": ObjectSchemaResponseObjectResourceRelationshipsProfileObjectSchemasDataInner,
    "ObjectSchemaResponseObjectResourceRelationshipsSourceMapping": ObjectSchemaResponseObjectResourceRelationshipsSourceMapping,
    "ObjectSchemaResponseObjectResourceRelationshipsSourceMappingData": ObjectSchemaResponseObjectResourceRelationshipsSourceMappingData,
    "ObjectTypeCreateQuery": ObjectTypeCreateQuery,
    "ObjectTypeCreateQueryResourceObject": ObjectTypeCreateQueryResourceObject,
    "ObjectTypeCreateQueryResourceObjectAttributes": ObjectTypeCreateQueryResourceObjectAttributes,
    "ObjectTypeCreateQueryResourceObjectAttributesObjectSchema": ObjectTypeCreateQueryResourceObjectAttributesObjectSchema,
    "ObjectTypeRelationshipMeta": ObjectTypeRelationshipMeta,
    "ObjectTypeRelationshipResponseObjectResource": ObjectTypeRelationshipResponseObjectResource,
    "ObjectTypeRelationshipResponseObjectResourceAttributes": ObjectTypeRelationshipResponseObjectResourceAttributes,
    "ObjectTypeResponseObjectResource": ObjectTypeResponseObjectResource,
    "ObjectTypeResponseObjectResourceAttributes": ObjectTypeResponseObjectResourceAttributes,
    "ObjectTypeResponseObjectResourceRelationships": ObjectTypeResponseObjectResourceRelationships,
    "ObjectTypeResponseObjectResourceRelationshipsCurrentSchema": ObjectTypeResponseObjectResourceRelationshipsCurrentSchema,
    "ObjectTypeResponseObjectResourceRelationshipsCurrentSchemaData": ObjectTypeResponseObjectResourceRelationshipsCurrentSchemaData,
    "ObjectTypeResponseObjectResourceRelationshipsDraftSchema": ObjectTypeResponseObjectResourceRelationshipsDraftSchema,
    "ObjectTypeResponseObjectResourceRelationshipsDraftSchemaData": ObjectTypeResponseObjectResourceRelationshipsDraftSchemaData,
    "ObjectTypeResponseObjectResourceRelationshipsObjectTypes": ObjectTypeResponseObjectResourceRelationshipsObjectTypes,
    "ObjectTypeResponseObjectResourceRelationshipsObjectTypesDataInner": ObjectTypeResponseObjectResourceRelationshipsObjectTypesDataInner,
    "ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypes": ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypes,
    "ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner": ObjectTypeResponseObjectResourceRelationshipsProfileObjectTypesDataInner,
    "ObjectTypeResponseObjectResourceRelationshipsSchemaVersions": ObjectTypeResponseObjectResourceRelationshipsSchemaVersions,
    "ObjectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner": ObjectTypeResponseObjectResourceRelationshipsSchemaVersionsDataInner,
    "OneClickUnsubscribeMethodFilter": OneClickUnsubscribeMethodFilter,
    "OnlyRelatedLinks": OnlyRelatedLinks,
    "OnsiteProfileCreateQueryResourceObject": OnsiteProfileCreateQueryResourceObject,
    "OnsiteProfileCreateQueryResourceObjectAttributes": OnsiteProfileCreateQueryResourceObjectAttributes,
    "OnsiteProfileMeta": OnsiteProfileMeta,
    "OpenForm": OpenForm,
    "OpenFormProperties": OpenFormProperties,
    "OpenTrackingConsent": OpenTrackingConsent,
    "OpenTrackingSubscriptionParameters": OpenTrackingSubscriptionParameters,
    "OpenTrackingUnsubscriptionParameters": OpenTrackingUnsubscriptionParameters,
    "OptInCode": OptInCode,
    "OptInCodeProperties": OptInCodeProperties,
    "OptInCodeStyles": OptInCodeStyles,
    "Padding": Padding,
    "PageVisits": PageVisits,
    "PageVisitsProperties": PageVisitsProperties,
    "PatchCampaignMessageResponse": PatchCampaignMessageResponse,
    "PatchCampaignMessageResponseData": PatchCampaignMessageResponseData,
    "PatchCampaignResponse": PatchCampaignResponse,
    "PatchCatalogCategoryResponse": PatchCatalogCategoryResponse,
    "PatchCatalogItemResponse": PatchCatalogItemResponse,
    "PatchCatalogVariantResponse": PatchCatalogVariantResponse,
    "PatchCouponCodeResponse": PatchCouponCodeResponse,
    "PatchCouponResponse": PatchCouponResponse,
    "PatchCustomMetricResponse": PatchCustomMetricResponse,
    "PatchFlowActionEncodedResponse": PatchFlowActionEncodedResponse,
    "PatchFlowActionEncodedResponseData": PatchFlowActionEncodedResponseData,
    "PatchFlowResponse": PatchFlowResponse,
    "PatchFlowResponseData": PatchFlowResponseData,
    "PatchIdentifiers": PatchIdentifiers,
    "PatchImageResponse": PatchImageResponse,
    "PatchListPartialUpdateResponse": PatchListPartialUpdateResponse,
    "PatchMappedMetricResponse": PatchMappedMetricResponse,
    "PatchMappedMetricResponseData": PatchMappedMetricResponseData,
    "PatchObjectSchemaResponse": PatchObjectSchemaResponse,
    "PatchProfileResponse": PatchProfileResponse,
    "PatchReviewResponseDTO": PatchReviewResponseDTO,
    "PatchReviewResponseDTOData": PatchReviewResponseDTOData,
    "PatchSegmentPartialUpdateResponse": PatchSegmentPartialUpdateResponse,
    "PatchSourceMappingResponse": PatchSourceMappingResponse,
    "PatchSourceMappingResponseData": PatchSourceMappingResponseData,
    "PatchTemplateDndResponse": PatchTemplateDndResponse,
    "PatchTrackingSettingResponse": PatchTrackingSettingResponse,
    "PatchTrackingSettingResponseData": PatchTrackingSettingResponseData,
    "PatchUniversalContentResponse": PatchUniversalContentResponse,
    "PatchWebFeedResponse": PatchWebFeedResponse,
    "PatchWebhookResponse": PatchWebhookResponse,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberConsentChannelSettings": PhoneNumberConsentChannelSettings,
    "PhoneNumberProperties": PhoneNumberProperties,
    "PhoneNumberStyles": PhoneNumberStyles,
    "PostBulkProfileSuppressionsCreateJobResponse": PostBulkProfileSuppressionsCreateJobResponse,
    "PostBulkProfileSuppressionsCreateJobResponseData": PostBulkProfileSuppressionsCreateJobResponseData,
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
    "PostCatalogCategoryResponse": PostCatalogCategoryResponse,
    "PostCatalogCategoryResponseData": PostCatalogCategoryResponseData,
    "PostCatalogCategoryUpdateJobResponse": PostCatalogCategoryUpdateJobResponse,
    "PostCatalogCategoryUpdateJobResponseData": PostCatalogCategoryUpdateJobResponseData,
    "PostCatalogItemCreateJobResponse": PostCatalogItemCreateJobResponse,
    "PostCatalogItemCreateJobResponseData": PostCatalogItemCreateJobResponseData,
    "PostCatalogItemDeleteJobResponse": PostCatalogItemDeleteJobResponse,
    "PostCatalogItemDeleteJobResponseData": PostCatalogItemDeleteJobResponseData,
    "PostCatalogItemResponse": PostCatalogItemResponse,
    "PostCatalogItemResponseData": PostCatalogItemResponseData,
    "PostCatalogItemUpdateJobResponse": PostCatalogItemUpdateJobResponse,
    "PostCatalogItemUpdateJobResponseData": PostCatalogItemUpdateJobResponseData,
    "PostCatalogVariantCreateJobResponse": PostCatalogVariantCreateJobResponse,
    "PostCatalogVariantCreateJobResponseData": PostCatalogVariantCreateJobResponseData,
    "PostCatalogVariantDeleteJobResponse": PostCatalogVariantDeleteJobResponse,
    "PostCatalogVariantDeleteJobResponseData": PostCatalogVariantDeleteJobResponseData,
    "PostCatalogVariantResponse": PostCatalogVariantResponse,
    "PostCatalogVariantResponseData": PostCatalogVariantResponseData,
    "PostCatalogVariantUpdateJobResponse": PostCatalogVariantUpdateJobResponse,
    "PostCatalogVariantUpdateJobResponseData": PostCatalogVariantUpdateJobResponseData,
    "PostCouponCodeCreateJobResponse": PostCouponCodeCreateJobResponse,
    "PostCouponCodeCreateJobResponseData": PostCouponCodeCreateJobResponseData,
    "PostCouponCodeResponse": PostCouponCodeResponse,
    "PostCouponCodeResponseData": PostCouponCodeResponseData,
    "PostCouponResponse": PostCouponResponse,
    "PostCouponResponseData": PostCouponResponseData,
    "PostCustomMetricResponse": PostCustomMetricResponse,
    "PostCustomMetricResponseData": PostCustomMetricResponseData,
    "PostDataSourceResponse": PostDataSourceResponse,
    "PostDataSourceResponseData": PostDataSourceResponseData,
    "PostEncodedFormResponse": PostEncodedFormResponse,
    "PostEncodedFormResponseData": PostEncodedFormResponseData,
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
    "PostMetricAggregateResponse": PostMetricAggregateResponse,
    "PostMetricAggregateResponseData": PostMetricAggregateResponseData,
    "PostMetricAggregateResponseDataAttributes": PostMetricAggregateResponseDataAttributes,
    "PostObjectSchemaResponse": PostObjectSchemaResponse,
    "PostObjectSchemaResponseData": PostObjectSchemaResponseData,
    "PostObjectTypeResponse": PostObjectTypeResponse,
    "PostObjectTypeResponseData": PostObjectTypeResponseData,
    "PostProfileImportJobResponse": PostProfileImportJobResponse,
    "PostProfileImportJobResponseData": PostProfileImportJobResponseData,
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
    "PostTagResponse": PostTagResponse,
    "PostTagResponseData": PostTagResponseData,
    "PostTemplateDndResponse": PostTemplateDndResponse,
    "PostTemplateDndResponseData": PostTemplateDndResponseData,
    "PostTemplateDndResponseDataAttributes": PostTemplateDndResponseDataAttributes,
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
    "PreviouslySubmitted": PreviouslySubmitted,
    "PriceDropCondition": PriceDropCondition,
    "PriceDropTrigger": PriceDropTrigger,
    "PriceDropTriggerTriggerFilter": PriceDropTriggerTriggerFilter,
    "PriceDropTriggerTriggerFilterConditionGroupsInner": PriceDropTriggerTriggerFilterConditionGroupsInner,
    "ProductBlockData": ProductBlockData,
    "ProductBlockStyles": ProductBlockStyles,
    "ProductBlockV0": ProductBlockV0,
    "ProductBlockV1": ProductBlockV1,
    "ProductSubBlock": ProductSubBlock,
    "ProfileCreateQuery": ProfileCreateQuery,
    "ProfileCreateQueryResourceObject": ProfileCreateQueryResourceObject,
    "ProfileCreateQueryResourceObjectAttributes": ProfileCreateQueryResourceObjectAttributes,
    "ProfileEventTracked": ProfileEventTracked,
    "ProfileEventTrackedProperties": ProfileEventTrackedProperties,
    "ProfileHasCustomObjectCondition": ProfileHasCustomObjectCondition,
    "ProfileHasCustomObjectFilter": ProfileHasCustomObjectFilter,
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
    "ProfileImportJobResponseObjectResourceRelationships": ProfileImportJobResponseObjectResourceRelationships,
    "ProfileImportJobResponseObjectResourceRelationshipsImportErrors": ProfileImportJobResponseObjectResourceRelationshipsImportErrors,
    "ProfileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner": ProfileImportJobResponseObjectResourceRelationshipsImportErrorsDataInner,
    "ProfileImportJobResponseObjectResourceRelationshipsLists": ProfileImportJobResponseObjectResourceRelationshipsLists,
    "ProfileImportJobResponseObjectResourceRelationshipsListsDataInner": ProfileImportJobResponseObjectResourceRelationshipsListsDataInner,
    "ProfileImportJobResponseObjectResourceRelationshipsProfiles": ProfileImportJobResponseObjectResourceRelationshipsProfiles,
    "ProfileImportJobResponseObjectResourceRelationshipsProfilesDataInner": ProfileImportJobResponseObjectResourceRelationshipsProfilesDataInner,
    "ProfileLocation": ProfileLocation,
    "ProfileMarketingConsentCondition": ProfileMarketingConsentCondition,
    "ProfileMergeQuery": ProfileMergeQuery,
    "ProfileMergeQueryResourceObject": ProfileMergeQueryResourceObject,
    "ProfileMergeQueryResourceObjectRelationships": ProfileMergeQueryResourceObjectRelationships,
    "ProfileMergeQueryResourceObjectRelationshipsProfiles": ProfileMergeQueryResourceObjectRelationshipsProfiles,
    "ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner": ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner,
    "ProfileMeta": ProfileMeta,
    "ProfileMetaPatchProperties": ProfileMetaPatchProperties,
    "ProfileMetricFunnelSteps": ProfileMetricFunnelSteps,
    "ProfileMetricPropertyFilter": ProfileMetricPropertyFilter,
    "ProfileModificationMethodFilter": ProfileModificationMethodFilter,
    "ProfileNoGroupMembershipCondition": ProfileNoGroupMembershipCondition,
    "ProfileNotInFlowCondition": ProfileNotInFlowCondition,
    "ProfileObjectSchemaRelationshipCreateQuery": ProfileObjectSchemaRelationshipCreateQuery,
    "ProfileObjectSchemaRelationshipCreateQueryDataInner": ProfileObjectSchemaRelationshipCreateQueryDataInner,
    "ProfileObjectSchemaRelationshipDeleteQuery": ProfileObjectSchemaRelationshipDeleteQuery,
    "ProfileObjectSchemaRelationshipDeleteQueryDataInner": ProfileObjectSchemaRelationshipDeleteQueryDataInner,
    "ProfileObjectSchemaRelationshipPartialUpdateQuery": ProfileObjectSchemaRelationshipPartialUpdateQuery,
    "ProfileObjectSchemaRelationshipPartialUpdateQueryData": ProfileObjectSchemaRelationshipPartialUpdateQueryData,
    "ProfileObjectSchemaRelationshipResponseObjectResource": ProfileObjectSchemaRelationshipResponseObjectResource,
    "ProfileOperationDelete": ProfileOperationDelete,
    "ProfileOperationUpdateOrCreateBoolean": ProfileOperationUpdateOrCreateBoolean,
    "ProfileOperationUpdateOrCreateDate": ProfileOperationUpdateOrCreateDate,
    "ProfileOperationUpdateOrCreateList": ProfileOperationUpdateOrCreateList,
    "ProfileOperationUpdateOrCreateNumeric": ProfileOperationUpdateOrCreateNumeric,
    "ProfileOperationUpdateOrCreateString": ProfileOperationUpdateOrCreateString,
    "ProfilePartialUpdateQuery": ProfilePartialUpdateQuery,
    "ProfilePartialUpdateQueryResourceObject": ProfilePartialUpdateQueryResourceObject,
    "ProfilePermissionsCondition": ProfilePermissionsCondition,
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
    "ProfileRelationshipSource": ProfileRelationshipSource,
    "ProfileResponseObjectResource": ProfileResponseObjectResource,
    "ProfileResponseObjectResourceAttributes": ProfileResponseObjectResourceAttributes,
    "ProfileResponseObjectResourceExtended": ProfileResponseObjectResourceExtended,
    "ProfileResponseObjectResourceExtendedAttributes": ProfileResponseObjectResourceExtendedAttributes,
    "ProfileResponseObjectResourceRelationships": ProfileResponseObjectResourceRelationships,
    "ProfileResponseObjectResourceRelationshipsLists": ProfileResponseObjectResourceRelationshipsLists,
    "ProfileResponseObjectResourceRelationshipsListsDataInner": ProfileResponseObjectResourceRelationshipsListsDataInner,
    "ProfileResponseObjectResourceRelationshipsPushTokens": ProfileResponseObjectResourceRelationshipsPushTokens,
    "ProfileResponseObjectResourceRelationshipsPushTokensDataInner": ProfileResponseObjectResourceRelationshipsPushTokensDataInner,
    "ProfileResponseObjectResourceRelationshipsSegments": ProfileResponseObjectResourceRelationshipsSegments,
    "ProfileResponseObjectResourceRelationshipsSegmentsDataInner": ProfileResponseObjectResourceRelationshipsSegmentsDataInner,
    "ProfileResponsePluralConversationsObjectResourceAttributes": ProfileResponsePluralConversationsObjectResourceAttributes,
    "ProfileResponsePluralConversationsObjectResourceExtended": ProfileResponsePluralConversationsObjectResourceExtended,
    "ProfileResponsePluralConversationsObjectResourceExtendedAttributes": ProfileResponsePluralConversationsObjectResourceExtendedAttributes,
    "ProfileResponsePluralConversationsObjectResourceExtendedRelationships": ProfileResponsePluralConversationsObjectResourceExtendedRelationships,
    "ProfileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations": ProfileResponsePluralConversationsObjectResourceExtendedRelationshipsConversations,
    "ProfileSubscriptionCreateQueryResourceObject": ProfileSubscriptionCreateQueryResourceObject,
    "ProfileSubscriptionCreateQueryResourceObjectAttributes": ProfileSubscriptionCreateQueryResourceObjectAttributes,
    "ProfileSubscriptionDeleteQueryResourceObject": ProfileSubscriptionDeleteQueryResourceObject,
    "ProfileSubscriptionDeleteQueryResourceObjectAttributes": ProfileSubscriptionDeleteQueryResourceObjectAttributes,
    "ProfileSuppressionCreateQueryResourceObject": ProfileSuppressionCreateQueryResourceObject,
    "ProfileSuppressionCreateQueryResourceObjectAttributes": ProfileSuppressionCreateQueryResourceObjectAttributes,
    "ProfileSuppressionDeleteQueryResourceObject": ProfileSuppressionDeleteQueryResourceObject,
    "ProfileSuppressionDeleteQueryResourceObjectAttributes": ProfileSuppressionDeleteQueryResourceObjectAttributes,
    "ProfileTypeRelationshipResponseObjectResource": ProfileTypeRelationshipResponseObjectResource,
    "ProfileUpsertQuery": ProfileUpsertQuery,
    "ProfileUpsertQueryResourceObject": ProfileUpsertQueryResourceObject,
    "ProfileUpsertQueryResourceObjectAttributes": ProfileUpsertQueryResourceObjectAttributes,
    "PromotionalSMSSubscription": PromotionalSMSSubscription,
    "Property": Property,
    "PropertyFilter": PropertyFilter,
    "PropertyOption": PropertyOption,
    "PropertySource": PropertySource,
    "ProvidedLandlineMethodFilter": ProvidedLandlineMethodFilter,
    "ProvidedNoAgeMethodFilter": ProvidedNoAgeMethodFilter,
    "PushActionButton": PushActionButton,
    "PushActionButtonDefinition": PushActionButtonDefinition,
    "PushChannel": PushChannel,
    "PushMarketing": PushMarketing,
    "PushOnOpenApp": PushOnOpenApp,
    "PushOnOpenDeepLink": PushOnOpenDeepLink,
    "PushOnOpenWebUrl": PushOnOpenWebUrl,
    "PushProfileUpsertQueryResourceObject": PushProfileUpsertQueryResourceObject,
    "PushProfileUpsertQueryResourceObjectAttributes": PushProfileUpsertQueryResourceObjectAttributes,
    "PushSendOptions": PushSendOptions,
    "PushSubscriptionParameters": PushSubscriptionParameters,
    "PushTokenCreateQuery": PushTokenCreateQuery,
    "PushTokenCreateQueryResourceObject": PushTokenCreateQueryResourceObject,
    "PushTokenCreateQueryResourceObjectAttributes": PushTokenCreateQueryResourceObjectAttributes,
    "PushTokenCreateQueryResourceObjectAttributesProfile": PushTokenCreateQueryResourceObjectAttributesProfile,
    "PushTokenDeviceMetadata": PushTokenDeviceMetadata,
    "PushTokenEntry": PushTokenEntry,
    "PushTokenResponseObjectResource": PushTokenResponseObjectResource,
    "PushTokenResponseObjectResourceAttributes": PushTokenResponseObjectResourceAttributes,
    "PushTokenResponseObjectResourceRelationships": PushTokenResponseObjectResourceRelationships,
    "PushTokenResponseObjectResourceRelationshipsProfile": PushTokenResponseObjectResourceRelationshipsProfile,
    "PushTokenResponseObjectResourceRelationshipsProfileData": PushTokenResponseObjectResourceRelationshipsProfileData,
    "PushUnsubscriptionParameters": PushUnsubscriptionParameters,
    "QuoteStyle": QuoteStyle,
    "RadioButtons": RadioButtons,
    "RadioButtonsProperties": RadioButtonsProperties,
    "RadioButtonsStyles": RadioButtonsStyles,
    "RatingStyle": RatingStyle,
    "RecordedDateFilter": RecordedDateFilter,
    "Redirect": Redirect,
    "RedirectProperties": RedirectProperties,
    "ReentryCriteria": ReentryCriteria,
    "RejectReasonFake": RejectReasonFake,
    "RejectReasonMisleading": RejectReasonMisleading,
    "RejectReasonOther": RejectReasonOther,
    "RejectReasonPrivateInformation": RejectReasonPrivateInformation,
    "RejectReasonProfanity": RejectReasonProfanity,
    "RejectReasonUnrelated": RejectReasonUnrelated,
    "RelatedIdPath": RelatedIdPath,
    "RelationshipLinks": RelationshipLinks,
    "RelativeAnniversaryDateFilter": RelativeAnniversaryDateFilter,
    "RelativeDateOperatorBaseRelativeDateFilter": RelativeDateOperatorBaseRelativeDateFilter,
    "RelativeDateRangeFilter": RelativeDateRangeFilter,
    "RenderOptions": RenderOptions,
    "RenderOptionsSubObject": RenderOptionsSubObject,
    "ResendOptInCode": ResendOptInCode,
    "Review": Review,
    "ReviewBlockData": ReviewBlockData,
    "ReviewBlockStyles": ReviewBlockStyles,
    "ReviewBlockV0": ReviewBlockV0,
    "ReviewBlockV1": ReviewBlockV1,
    "ReviewPatchQuery": ReviewPatchQuery,
    "ReviewPatchQueryResourceObject": ReviewPatchQueryResourceObject,
    "ReviewPatchQueryResourceObjectAttributes": ReviewPatchQueryResourceObjectAttributes,
    "ReviewProductDTO": ReviewProductDTO,
    "ReviewProperties": ReviewProperties,
    "ReviewPublicReply": ReviewPublicReply,
    "ReviewResponseDTOObjectResource": ReviewResponseDTOObjectResource,
    "ReviewResponseDTOObjectResourceAttributes": ReviewResponseDTOObjectResourceAttributes,
    "ReviewResponseDTOObjectResourceRelationships": ReviewResponseDTOObjectResourceRelationships,
    "ReviewResponseDTOObjectResourceRelationshipsEvents": ReviewResponseDTOObjectResourceRelationshipsEvents,
    "ReviewResponseDTOObjectResourceRelationshipsEventsDataInner": ReviewResponseDTOObjectResourceRelationshipsEventsDataInner,
    "ReviewResponseDTOObjectResourceRelationshipsItem": ReviewResponseDTOObjectResourceRelationshipsItem,
    "ReviewResponseDTOObjectResourceRelationshipsItemData": ReviewResponseDTOObjectResourceRelationshipsItemData,
    "ReviewStatusFeatured": ReviewStatusFeatured,
    "ReviewStatusPending": ReviewStatusPending,
    "ReviewStatusPublished": ReviewStatusPublished,
    "ReviewStatusRejected": ReviewStatusRejected,
    "ReviewStatusUnpublished": ReviewStatusUnpublished,
    "ReviewStyles": ReviewStyles,
    "ReviewerNameStyle": ReviewerNameStyle,
    "RichTextMargin": RichTextMargin,
    "RichTextStyle": RichTextStyle,
    "RichTextStyles": RichTextStyles,
    "RowData": RowData,
    "RowStyles": RowStyles,
    "RowV0": RowV0,
    "RowV1": RowV1,
    "SMSChannel": SMSChannel,
    "SMSConsentCheckbox": SMSConsentCheckbox,
    "SMSConsentCheckboxProperties": SMSConsentCheckboxProperties,
    "SMSConsentCheckboxStyles": SMSConsentCheckboxStyles,
    "SMSContent": SMSContent,
    "SMSContentCreate": SMSContentCreate,
    "SMSContentSubObject": SMSContentSubObject,
    "SMSDisclosure": SMSDisclosure,
    "SMSDisclosureAccountDefault": SMSDisclosureAccountDefault,
    "SMSDisclosureCustom": SMSDisclosureCustom,
    "SMSDisclosureLinkTextStyle": SMSDisclosureLinkTextStyle,
    "SMSDisclosureProperties": SMSDisclosureProperties,
    "SMSDisclosureStyles": SMSDisclosureStyles,
    "SMSDisclosureTextStyle": SMSDisclosureTextStyle,
    "SMSMarketing": SMSMarketing,
    "SMSMessageDefinition": SMSMessageDefinition,
    "SMSMessageDefinitionCreate": SMSMessageDefinitionCreate,
    "SMSSendOptions": SMSSendOptions,
    "SMSSubscriptionParameters": SMSSubscriptionParameters,
    "SMSTransactional": SMSTransactional,
    "SMSUnsubscriptionParameters": SMSUnsubscriptionParameters,
    "Scroll": Scroll,
    "ScrollProperties": ScrollProperties,
    "SectionData": SectionData,
    "SectionProperties": SectionProperties,
    "SectionStyles": SectionStyles,
    "SectionV0": SectionV0,
    "SectionV1": SectionV1,
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
    "SegmentsProfileMetricFunnelCondition": SegmentsProfileMetricFunnelCondition,
    "SendEmailAction": SendEmailAction,
    "SendEmailActionData": SendEmailActionData,
    "SendInternalAlertAction": SendInternalAlertAction,
    "SendInternalAlertActionData": SendInternalAlertActionData,
    "SendPushNotificationAction": SendPushNotificationAction,
    "SendPushNotificationActionData": SendPushNotificationActionData,
    "SendSmsAction": SendSmsAction,
    "SendSmsActionData": SendSmsActionData,
    "SendTime": SendTime,
    "SendTimeSubObject": SendTimeSubObject,
    "SendWebhookAction": SendWebhookAction,
    "SendWebhookActionData": SendWebhookActionData,
    "SendWhatsAppAction": SendWhatsAppAction,
    "SendWhatsAppActionData": SendWhatsAppActionData,
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
    "SideImageSettings": SideImageSettings,
    "SignupCounter": SignupCounter,
    "SignupCounterProperties": SignupCounterProperties,
    "SignupCounterStyles": SignupCounterStyles,
    "SimplePropertyMapping": SimplePropertyMapping,
    "SimpleRelationshipMapping": SimpleRelationshipMapping,
    "SinceFlowStartDateFilter": SinceFlowStartDateFilter,
    "SkipToSuccess": SkipToSuccess,
    "SmartSendTimeStrategy": SmartSendTimeStrategy,
    "SocialBlockData": SocialBlockData,
    "SocialBlockProperties": SocialBlockProperties,
    "SocialBlockStyles": SocialBlockStyles,
    "SocialBlockV0": SocialBlockV0,
    "SocialBlockV1": SocialBlockV1,
    "SocialIconSubBlock": SocialIconSubBlock,
    "SocialSpacerSubBlock": SocialSpacerSubBlock,
    "SourceMappingCreateQueryResourceObject": SourceMappingCreateQueryResourceObject,
    "SourceMappingCreateQueryResourceObjectAttributes": SourceMappingCreateQueryResourceObjectAttributes,
    "SourceMappingPartialUpdateQuery": SourceMappingPartialUpdateQuery,
    "SourceMappingPartialUpdateQueryResourceObject": SourceMappingPartialUpdateQueryResourceObject,
    "SourceMappingResponseObjectResource": SourceMappingResponseObjectResource,
    "SourceMappingResponseObjectResourceAttributes": SourceMappingResponseObjectResourceAttributes,
    "SpacerBlockData": SpacerBlockData,
    "SpacerBlockStyles": SpacerBlockStyles,
    "SpacerBlockV0": SpacerBlockV0,
    "SpacerBlockV1": SpacerBlockV1,
    "SpamComplaintMethodFilter": SpamComplaintMethodFilter,
    "SpinToWin": SpinToWin,
    "SpinToWinProperties": SpinToWinProperties,
    "SpinToWinSliceConfig": SpinToWinSliceConfig,
    "SpinToWinSliceStyle": SpinToWinSliceStyle,
    "SpinToWinStyles": SpinToWinStyles,
    "SplitBlockData": SplitBlockData,
    "SplitBlockStyles": SplitBlockStyles,
    "SplitBlockV0": SplitBlockV0,
    "SplitBlockV1": SplitBlockV1,
    "StaticCount": StaticCount,
    "StaticCouponConfig": StaticCouponConfig,
    "StaticDateFilter": StaticDateFilter,
    "StaticDateRangeFilter": StaticDateRangeFilter,
    "StaticImageBlockProperties": StaticImageBlockProperties,
    "StaticProductBlockProperties": StaticProductBlockProperties,
    "StaticReviewBlockProperties": StaticReviewBlockProperties,
    "StaticSendStrategy": StaticSendStrategy,
    "StaticTableBlockProperties": StaticTableBlockProperties,
    "StaticTrackingParam": StaticTrackingParam,
    "StatusDateFilter": StatusDateFilter,
    "Step": Step,
    "StreetAddress": StreetAddress,
    "StringArrayOperatorStringArrayFilter": StringArrayOperatorStringArrayFilter,
    "StringInArrayFilter": StringInArrayFilter,
    "StringOperatorStringFilter": StringOperatorStringFilter,
    "StringPhoneOperatorStringArrayFilter": StringPhoneOperatorStringArrayFilter,
    "SubmitBackInStock": SubmitBackInStock,
    "SubmitBackInStockProperties": SubmitBackInStockProperties,
    "SubmitOptInCode": SubmitOptInCode,
    "SubscribeViaSMS": SubscribeViaSMS,
    "SubscribeViaSMSProperties": SubscribeViaSMSProperties,
    "SubscribeViaWhatsApp": SubscribeViaWhatsApp,
    "SubscribeViaWhatsAppProperties": SubscribeViaWhatsAppProperties,
    "SubscribedSMSIsRcsCapableFilter": SubscribedSMSIsRcsCapableFilter,
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
    "TableBlockData": TableBlockData,
    "TableBlockStyles": TableBlockStyles,
    "TableBlockV0": TableBlockV0,
    "TableBlockV1": TableBlockV1,
    "TableFallbackHtmlSubBlock": TableFallbackHtmlSubBlock,
    "TableFallbackImageSubBlock": TableFallbackImageSubBlock,
    "TableFallbackTextSubBlock": TableFallbackTextSubBlock,
    "TableHeaderSubBlock": TableHeaderSubBlock,
    "TableHtmlSubBlock": TableHtmlSubBlock,
    "TableImageSubBlock": TableImageSubBlock,
    "TableTextSubBlock": TableTextSubBlock,
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
    "TagGroupResponseObjectResourceRelationships": TagGroupResponseObjectResourceRelationships,
    "TagGroupUpdateQuery": TagGroupUpdateQuery,
    "TagGroupUpdateQueryResourceObject": TagGroupUpdateQueryResourceObject,
    "TagGroupUpdateQueryResourceObjectAttributes": TagGroupUpdateQueryResourceObjectAttributes,
    "TagListOp": TagListOp,
    "TagListOpDataInner": TagListOpDataInner,
    "TagResponseObjectResource": TagResponseObjectResource,
    "TagResponseObjectResourceAttributes": TagResponseObjectResourceAttributes,
    "TagResponseObjectResourceRelationships": TagResponseObjectResourceRelationships,
    "TagResponseObjectResourceRelationshipsCampaigns": TagResponseObjectResourceRelationshipsCampaigns,
    "TagResponseObjectResourceRelationshipsCampaignsDataInner": TagResponseObjectResourceRelationshipsCampaignsDataInner,
    "TagResponseObjectResourceRelationshipsTagGroup": TagResponseObjectResourceRelationshipsTagGroup,
    "TagResponseObjectResourceRelationshipsTagGroupData": TagResponseObjectResourceRelationshipsTagGroupData,
    "TagSegmentOp": TagSegmentOp,
    "TagSegmentOpDataInner": TagSegmentOpDataInner,
    "TagUpdateQuery": TagUpdateQuery,
    "TagUpdateQueryResourceObject": TagUpdateQueryResourceObject,
    "TargetDateAction": TargetDateAction,
    "TargetDateActionData": TargetDateActionData,
    "Teaser": Teaser,
    "TeaserStyles": TeaserStyles,
    "TemplateCloneQuery": TemplateCloneQuery,
    "TemplateCloneQueryResourceObject": TemplateCloneQueryResourceObject,
    "TemplateCloneQueryResourceObjectAttributes": TemplateCloneQueryResourceObjectAttributes,
    "TemplateCreateHtmlOrDndQuery": TemplateCreateHtmlOrDndQuery,
    "TemplateCreateHtmlOrDndQueryResourceObject": TemplateCreateHtmlOrDndQueryResourceObject,
    "TemplateCreateHtmlOrDndQueryResourceObjectAttributes": TemplateCreateHtmlOrDndQueryResourceObjectAttributes,
    "TemplateDefinition": TemplateDefinition,
    "TemplateDndResponseObjectResourceAttributes": TemplateDndResponseObjectResourceAttributes,
    "TemplateDndResponseObjectResourceExtended": TemplateDndResponseObjectResourceExtended,
    "TemplateDndResponseObjectResourceExtendedAttributes": TemplateDndResponseObjectResourceExtendedAttributes,
    "TemplateRenderQuery": TemplateRenderQuery,
    "TemplateRenderQueryResourceObject": TemplateRenderQueryResourceObject,
    "TemplateRenderQueryResourceObjectAttributes": TemplateRenderQueryResourceObjectAttributes,
    "TemplateResponseObjectResource": TemplateResponseObjectResource,
    "TemplateResponseObjectResourceAttributes": TemplateResponseObjectResourceAttributes,
    "TemplateUpdateHtmlOrDndQuery": TemplateUpdateHtmlOrDndQuery,
    "TemplateUpdateHtmlOrDndQueryResourceObject": TemplateUpdateHtmlOrDndQueryResourceObject,
    "TemplateUpdateHtmlOrDndQueryResourceObjectAttributes": TemplateUpdateHtmlOrDndQueryResourceObjectAttributes,
    "Text": Text,
    "TextBlockDataV0": TextBlockDataV0,
    "TextBlockDataV1": TextBlockDataV1,
    "TextBlockStylesV0": TextBlockStylesV0,
    "TextBlockStylesV1": TextBlockStylesV1,
    "TextBlockV0": TextBlockV0,
    "TextBlockV1": TextBlockV1,
    "TextProperties": TextProperties,
    "TextStyleStyles": TextStyleStyles,
    "TextStyleV0": TextStyleV0,
    "TextStyleV1": TextStyleV1,
    "TextStyles": TextStyles,
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
    "TriggerBranchActionDataTriggerFilter": TriggerBranchActionDataTriggerFilter,
    "TriggerBranchActionDataTriggerFilterConditionGroupsInner": TriggerBranchActionDataTriggerFilterConditionGroupsInner,
    "URLPatterns": URLPatterns,
    "URLPatternsProperties": URLPatternsProperties,
    "UnidentifiedProfiles": UnidentifiedProfiles,
    "UniqueCouponConfig": UniqueCouponConfig,
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
    "ValuesData": ValuesData,
    "VariableTimerConfiguration": VariableTimerConfiguration,
    "Version": Version,
    "VersionProperties": VersionProperties,
    "VersionStyles": VersionStyles,
    "VideoBlockData": VideoBlockData,
    "VideoBlockProperties": VideoBlockProperties,
    "VideoBlockStyles": VideoBlockStyles,
    "VideoBlockV0": VideoBlockV0,
    "VideoBlockV1": VideoBlockV1,
    "Visibility": Visibility,
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
    "WebhookResponseObjectResourceRelationships": WebhookResponseObjectResourceRelationships,
    "WebhookResponseObjectResourceRelationshipsWebhookTopics": WebhookResponseObjectResourceRelationshipsWebhookTopics,
    "WebhookResponseObjectResourceRelationshipsWebhookTopicsDataInner": WebhookResponseObjectResourceRelationshipsWebhookTopicsDataInner,
    "WebhookTopicResponseObjectResource": WebhookTopicResponseObjectResource,
    "WhatsAppSubscriptionParameters": WhatsAppSubscriptionParameters,
    "WhatsAppUnsubscriptionParameters": WhatsAppUnsubscriptionParameters,
    "WhatsappChannel": WhatsappChannel,
    "WhatsappConversationalChannel": WhatsappConversationalChannel,
    "WhatsappMarketingChannel": WhatsappMarketingChannel,
    "WhatsappTransactionalChannel": WhatsappTransactionalChannel,
}

const oneOfMap: {[index: string]: any} = {
    "GetCampaignMessageResponseCompoundDocumentIncludedInner": GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetCampaignResponseCollectionCompoundDocumentIncludedInner": GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetEventResponseCollectionCompoundDocumentIncludedInner": GetEventResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetFlowActionEncodedResponseCompoundDocumentIncludedInner": GetFlowActionEncodedResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowMessageEncodedResponseCompoundDocumentIncludedInner": GetFlowMessageEncodedResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowResponseCollectionCompoundDocumentIncludedInner": GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetIngestionLogResponseCollectionCompoundDocumentIncludedInner": GetIngestionLogResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetListListResponseCollectionCompoundDocumentIncludedInner": GetListListResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetMappedMetricResponseCollectionCompoundDocumentIncludedInner": GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetObjectSchemaResponseCompoundDocumentIncludedInner": GetObjectSchemaResponseCompoundDocumentIncludedInnerHelper,
    "GetObjectTypeResponseCompoundDocumentIncludedInner": GetObjectTypeResponseCompoundDocumentIncludedInnerHelper,
    "GetProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInner": GetProfileResponsePluralConversationsCollectionCompoundDocumentIncludedInnerHelper,
    "GetProfileResponsePluralConversationsCompoundDocumentIncludedInner": GetProfileResponsePluralConversationsCompoundDocumentIncludedInnerHelper,
}

const oneOfMapNoDiscriminator: {[index: string]: Array<any>} = {
    "AbTestActionDataMainAction": [
            "SendEmailAction",
            "SendSmsAction",
    ],
    "ActionOutputConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "BounceDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "IsSetExistenceFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "ButtonAction": [
            "Close",
            "GoToInbox",
            "IafDeeplinkToScreen",
            "NextStep",
            "OpenForm",
            "PromotionalSMSSubscription",
            "Redirect",
            "ResendOptInCode",
            "SkipToSuccess",
            "SubmitBackInStock",
            "SubmitOptInCode",
            "SubscribeViaSMS",
            "SubscribeViaWhatsApp",
    ],
    "ButtonStylesHeight": [
            "number",
            "string",
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
    "ColumnV1BlocksInner": [
            "ButtonBlockV1",
            "CouponBlockV1",
            "DropShadowBlockV1",
            "HTMLBlockV1",
            "HeaderBlockV1",
            "HorizontalRuleBlockV1",
            "ImageBlockV1",
            "ProductBlockV1",
            "ReviewBlockV1",
            "SocialBlockV1",
            "SpacerBlockV1",
            "SplitBlockV1",
            "TableBlockV1",
            "TextBlockV1",
            "VideoBlockV1",
    ],
    "ConditionGroupConditionsInner": [
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRegionCondition",
            "SegmentsProfileMetricCondition",
            "SegmentsProfileMetricFunnelCondition",
    ],
    "ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedEmailMessageCondition",
            "ProfileHasNotReceivedPushMessageCondition",
            "ProfileHasNotReceivedSmsMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "ConstantPropertyMappingValue": [
            "boolean",
            "number",
            "string",
    ],
    "ContentExperimentActionDataMainAction": [
            "SendPushNotificationAction",
            "SendWhatsAppAction",
    ],
    "CountdownTimerPropertiesConfiguration": [
            "FixedTimerConfiguration",
            "VariableTimerConfiguration",
    ],
    "CouponBlockV0Data": [
            "boolean",
            "number",
            "string",
    ],
    "CouponPropertiesCoupon": [
            "StaticCouponConfig",
            "UniqueCouponConfig",
    ],
    "CustomMetricConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListRegexOperatorListContainsFilter",
            "ListSubstringFilter",
            "NumericOperatorNumericFilter",
            "StringInArrayFilter",
            "StringOperatorStringFilter",
    ],
    "CustomObjectTriggerConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringOperatorStringFilter",
    ],
    "ExplicitlyReachableFiltersInner": [
            "EffectiveDateFilter",
            "FormSubscribeFilter",
            "MethodFilter",
            "RecordedDateFilter",
    ],
    "FlowActionEncodedResponseObjectResourceAttributesDefinition": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowActionUpdateQueryResourceObjectAttributesDefinition": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowDefinitionActionsInner": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowDefinitionProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedEmailMessageCondition",
            "ProfileHasNotReceivedPushMessageCondition",
            "ProfileHasNotReceivedSmsMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfileNotInFlowCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowDefinitionTriggersInner": [
            "CustomObjectDateTrigger",
            "ListTrigger",
            "LowInventoryTrigger",
            "MetricTrigger",
            "PriceDropTrigger",
            "ProfilePropertyDateTrigger",
            "SegmentTrigger",
    ],
    "FlowMessageEncodedResponseObjectResourceAttributesDefinition": [
            "FlowEmail",
            "FlowInternalAlert",
            "FlowPushNotification",
            "FlowSms",
            "FlowWebhook",
            "FlowWhatsApp",
    ],
    "FlowPushNotificationBadgeOptions": [
            "Increment",
            "Property",
            "StaticCount",
    ],
    "FlowsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
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
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "PreferencePageFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "HasSMSMarketingSubscribedFiltersInner": [
            "CheckoutMethodFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "PreferencePageMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
            "SubscribedSMSIsRcsCapableFilter",
    ],
    "HeaderBlockV1SubblocksInner": [
            "HeaderImageSubBlock",
            "HeaderLinkSubBlock",
            "HeaderLogoSubBlock",
    ],
    "ImageAction": [
            "Close",
            "GoToInbox",
            "IafDeeplinkToScreen",
            "NextStep",
            "OpenForm",
            "PromotionalSMSSubscription",
            "Redirect",
            "ResendOptInCode",
            "SkipToSuccess",
            "SubmitBackInStock",
            "SubmitOptInCode",
            "SubscribeViaSMS",
            "SubscribeViaWhatsApp",
    ],
    "ImageBlockDataProperties": [
            "DynamicImageBlockProperties",
            "StaticImageBlockProperties",
    ],
    "InternalServiceActionDataServiceConfiguration": [
            "InternalScheduledReportBuilderReportData",
            "InternalScheduledReportData",
            "InternalTrackEventData",
            "InternalUnknownServiceData",
    ],
    "ListContainsOperatorListContainsFilterValue": [
            "number",
            "string",
    ],
    "LocationPropertiesAllowListInner": [
            "string",
    ],
    "MetricPropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "MetricPropertyResponseObjectResourceExtendedAttributesAllOfSampleValuesInner": [
            "boolean",
            "number",
            "string",
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
            "PushOnOpenWebUrl",
    ],
    "MultiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner": [
            "CustomObjectTriggerCondition",
            "FlowsProfileMetricCondition",
            "MetricPropertyCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedEmailMessageCondition",
            "ProfileHasNotReceivedPushMessageCondition",
            "ProfileHasNotReceivedSmsMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
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
    "NoEmailMarketingUnsubscribedFilters": [
            "Array&lt;NoEmailMarketingFiltersInner&gt;",
            "Array&lt;NoEmailMarketingUnsubscribedFiltersOneOfInner&gt;",
    ],
    "NoEmailMarketingUnsubscribedFiltersOneOfInner": [
            "APIMethodFilter",
            "ConstantContactIntegrationMethodFilter",
            "DataWarehouseImportMethodFilter",
            "InboundMessageMethodFilter",
            "MailboxProviderMethodFilter",
            "ManualImportMethodFilter",
            "ManualRemoveMethodFilter",
            "OneClickUnsubscribeMethodFilter",
            "PreferencePageMethodFilter",
            "ProfileModificationMethodFilter",
            "SftpMethodFilter",
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
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "ManualRemoveMethodFilter",
            "MessageBlockedMethodFilter",
            "PreferencePageMethodFilter",
            "ProvidedLandlineMethodFilter",
            "ProvidedNoAgeMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "NumericOperatorNumericFilterValue": [
            "number",
    ],
    "PostCampaignMessageResponseDataAttributesContent": [
            "EmailContentSubObject",
            "SMSContentSubObject",
    ],
    "ProductBlockDataProperties": [
            "DynamicProductBlockProperties",
            "StaticProductBlockProperties",
    ],
    "ProfileHasCustomObjectFilterFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "ProfileHasGroupMembershipConditionTimeframeFilter": [
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "ProfileHasNotReceivedEmailMessageConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "InTheLastBaseRelativeDateFilter",
    ],
    "ProfileLocationLatitude": [
            "number",
            "string",
    ],
    "ProfileLocationLongitude": [
            "number",
            "string",
    ],
    "ProfileMarketingConsentConditionConsent": [
            "HasEmailMarketingConsent",
            "HasPushMarketingConsent",
            "HasSMSMarketingConsent",
            "NoEmailMarketingConsent",
            "NoPushMarketingConsent",
            "NoSMSMarketingConsent",
    ],
    "ProfileMetaPatchPropertiesUnset": [
            "Array&lt;string&gt;",
            "string",
    ],
    "ProfileMetricPropertyFilterFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListLengthFilter",
            "ListSetFilter",
            "ListSubstringFilter",
            "NumericOperatorNumericFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "ProfileOperationUpdateOrCreateDatePropertyValue": [
            "string",
    ],
    "ProfilePermissionsConditionPermission": [
            "ExplicitlyReachable",
            "ExplicitlyUnreachable",
            "ImplicitlyOrExplicitlyReachable",
            "ImplicitlyOrExplicitlyUnreachable",
            "ImplicitlyReachable",
            "ImplicitlyUnreachable",
    ],
    "ProfilePostalCodeDistanceConditionFilter": [
            "GreaterThanPositiveNumericFilter",
            "LessThanPositiveNumericFilter",
    ],
    "ProfilePredictiveAnalyticsStringFilterOperator": [
            "string",
    ],
    "ProfilePropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
            "StringPhoneOperatorStringArrayFilter",
    ],
    "ReentryCriteriaUnit": [
            "string",
    ],
    "ReviewBlockDataProperties": [
            "DynamicReviewBlockProperties",
            "StaticReviewBlockProperties",
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
    "RowV0BlocksInner": [
            "AgeGate",
            "BackInStockEmailConsentCheckbox",
            "Button",
            "Checkboxes",
            "CountdownTimer",
            "Coupon",
            "CustomHTML",
            "Dropdown",
            "Email",
            "HTMLText",
            "Image",
            "ModelDate",
            "OptInCode",
            "PhoneNumber",
            "RadioButtons",
            "Review",
            "SMSConsentCheckbox",
            "SMSDisclosure",
            "SignupCounter",
            "SpinToWin",
            "Text",
    ],
    "SMSDisclosurePropertiesContent": [
            "SMSDisclosureAccountDefault",
            "SMSDisclosureCustom",
    ],
    "SegmentValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "SegmentsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "SegmentsProfileMetricFunnelConditionTimeframeFilter": [
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateRangeFilter",
    ],
    "SimpleRelationshipMappingSource": [
            "CustomObjectRelationshipSource",
            "ProfileRelationshipSource",
    ],
    "SocialBlockV1SubblocksInner": [
            "SocialIconSubBlock",
            "SocialSpacerSubBlock",
    ],
    "SourceMappingResponseObjectResourceAttributesPropertyMappingsInner": [
            "ConstantPropertyMapping",
            "SimplePropertyMapping",
    ],
    "SplitBlockV1SubblocksInner": [
            "TableHtmlSubBlock",
            "TableImageSubBlock",
            "TableTextSubBlock",
    ],
    "StaticSendStrategyOptions": [
            "LocalStaticSend",
            "NonLocalStaticSend",
    ],
    "StatusDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "TableBlockDataProperties": [
            "DynamicTableBlockProperties",
            "StaticTableBlockProperties",
    ],
    "TableBlockV1SubblocksInner": [
            "TableFallbackHtmlSubBlock",
            "TableFallbackImageSubBlock",
            "TableFallbackTextSubBlock",
            "TableHeaderSubBlock",
            "TableHtmlSubBlock",
            "TableImageSubBlock",
            "TableTextSubBlock",
    ],
    "TemplateDefinitionStylesInner": [
            "BaseStyle",
            "Heading1Style",
            "Heading2Style",
            "Heading3Style",
            "Heading4Style",
            "LinkStyle",
            "MobileStyle",
            "TextStyleV1",
    ],
    "TextStyleV0FontFamily": [
            "string",
    ],
    "TrackingParamDTOCampaign": [
            "CampaignTrackingSettingDynamicParam",
            "CampaignTrackingSettingStaticParam",
    ],
    "TrackingParamDTOFlow": [
            "FlowTrackingSettingDynamicParam",
            "FlowTrackingSettingStaticParam",
    ],
    "TriggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner": [
            "CustomObjectPropertyCondition",
            "CustomObjectTriggerCondition",
            "LowInventoryCondition",
            "MetricPropertyCondition",
            "PriceDropCondition",
    ],
    "UniversalContentCreateQueryResourceObjectAttributesDefinition": [
            "ButtonBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "SpacerBlockV0",
            "TextBlockV0",
    ],
    "UniversalContentPartialUpdateQueryResourceObjectAttributesDefinition": [
            "ButtonBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "SpacerBlockV0",
            "TextBlockV0",
    ],
    "UniversalContentResponseObjectResourceAttributesDefinition": [
            "ButtonBlockV0",
            "CouponBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HeaderBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "ProductBlockV0",
            "ReviewBlockV0",
            "SectionV0",
            "SocialBlockV0",
            "SpacerBlockV0",
            "SplitBlockV0",
            "TableBlockV0",
            "TextBlockV0",
            "UnsupportedBlock",
            "VideoBlockV0",
    ],
    "UpdateProfileActionDataProfileOperationsInner": [
            "ProfileOperationDelete",
            "ProfileOperationUpdateOrCreateBoolean",
            "ProfileOperationUpdateOrCreateDate",
            "ProfileOperationUpdateOrCreateList",
            "ProfileOperationUpdateOrCreateNumeric",
            "ProfileOperationUpdateOrCreateString",
    ],
    "VersionTriggersInner": [
            "AfterCloseTimeout",
            "BackInStock",
            "CartContent",
            "CartItemCount",
            "CartProduct",
            "CartValue",
            "Channel",
            "CustomJavascript",
            "Delay",
            "Device",
            "ExitIntent",
            "IdentifiedProfiles",
            "ListsAndSegments",
            "Location",
            "PageVisits",
            "PreviouslySubmitted",
            "ProfileEventTracked",
            "Scroll",
            "URLPatterns",
            "UnidentifiedProfiles",
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
                  const potentialType = oneOfMapNoDiscriminator[expectedType][index];
                  if (primitiveToTypeof[potentialType] !== undefined) {
                    if (typeof data === primitiveToTypeof[potentialType]) {
                      return potentialType;
                    }
                    continue;
                  }
                  if (
                    enumsMap[potentialType] &&
                    Object.values(enumsMap[potentialType]).includes(data)
                  ) {
                    return potentialType;
                  }
                  if (serializer) {
                    if (ObjectSerializer.serializerValidateType(data, typeMap[potentialType])) {
                      return potentialType;
                    }
                  } else {
                    if (ObjectSerializer.deserializerValidateType(data, typeMap[potentialType])) {
                      return potentialType;
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
    public static serializerValidateType(data: { [key: string]: any }, potentialType: any): boolean {
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

            if (!typeMap[type]) {
                // it is an enum, return data
                return data;
            }

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

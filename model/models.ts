import { AxiosRequestConfig } from 'axios';

export * from './accountEnum';
export * from './accountResponseObjectResource';
export * from './accountResponseObjectResourceAttributes';
export * from './audiencesSubObject';
export * from './backInStockSubscriptionEnum';
export * from './campaignCloneQuery';
export * from './campaignCloneQueryResourceObject';
export * from './campaignCloneQueryResourceObjectAttributes';
export * from './campaignCreateQuery';
export * from './campaignCreateQueryResourceObject';
export * from './campaignCreateQueryResourceObjectAttributes';
export * from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
export * from './campaignCreateQueryResourceObjectAttributesSendOptions';
export * from './campaignCreateQueryResourceObjectAttributesTrackingOptions';
export * from './campaignEnum';
export * from './campaignMessageAssignTemplateQuery';
export * from './campaignMessageAssignTemplateQueryResourceObject';
export * from './campaignMessageAssignTemplateQueryResourceObjectAttributes';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
export * from './campaignMessageCreateQueryResourceObject';
export * from './campaignMessageCreateQueryResourceObjectAttributes';
export * from './campaignMessageCreateQueryResourceObjectAttributesContent';
export * from './campaignMessageEnum';
export * from './campaignMessagePartialUpdateQuery';
export * from './campaignMessagePartialUpdateQueryResourceObject';
export * from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
export * from './campaignMessageResponseObjectResource';
export * from './campaignPartialUpdateQuery';
export * from './campaignPartialUpdateQueryResourceObject';
export * from './campaignPartialUpdateQueryResourceObjectAttributes';
export * from './campaignRecipientEstimationEnum';
export * from './campaignRecipientEstimationJobCreateQuery';
export * from './campaignRecipientEstimationJobCreateQueryResourceObject';
export * from './campaignRecipientEstimationJobCreateQueryResourceObjectAttributes';
export * from './campaignRecipientEstimationJobEnum';
export * from './campaignRecipientEstimationJobResponseObjectResource';
export * from './campaignRecipientEstimationResponseObjectResource';
export * from './campaignRecipientEstimationResponseObjectResourceAttributes';
export * from './campaignResponseObjectResource';
export * from './campaignResponseObjectResourceAttributes';
export * from './campaignSendJobCreateQuery';
export * from './campaignSendJobCreateQueryResourceObject';
export * from './campaignSendJobCreateQueryResourceObjectAttributes';
export * from './campaignSendJobEnum';
export * from './campaignSendJobPartialUpdateQuery';
export * from './campaignSendJobPartialUpdateQueryResourceObject';
export * from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
export * from './campaignSendJobResponseObjectResource';
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
export * from './catalogCategoryDeleteJobCreateQuery';
export * from './catalogCategoryDeleteJobCreateQueryResourceObject';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryDeleteJobResponseObjectResource';
export * from './catalogCategoryDeleteQueryResourceObject';
export * from './catalogCategoryEnum';
export * from './catalogCategoryItemOp';
export * from './catalogCategoryResponseObjectResource';
export * from './catalogCategoryUpdateJobCreateQuery';
export * from './catalogCategoryUpdateJobCreateQueryResourceObject';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryUpdateJobResponseObjectResource';
export * from './catalogCategoryUpdateQuery';
export * from './catalogCategoryUpdateQueryResourceObject';
export * from './catalogCategoryUpdateQueryResourceObjectAttributes';
export * from './catalogCategoryUpdateQueryResourceObjectRelationships';
export * from './catalogCategoryUpdateQueryResourceObjectRelationshipsItems';
export * from './catalogCategoryUpdateQueryResourceObjectRelationshipsItemsDataInner';
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
export * from './catalogItemDeleteJobCreateQuery';
export * from './catalogItemDeleteJobCreateQueryResourceObject';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemDeleteJobResponseObjectResource';
export * from './catalogItemDeleteQueryResourceObject';
export * from './catalogItemEnum';
export * from './catalogItemResponseObjectResource';
export * from './catalogItemUpdateJobCreateQuery';
export * from './catalogItemUpdateJobCreateQueryResourceObject';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemUpdateJobResponseObjectResource';
export * from './catalogItemUpdateQuery';
export * from './catalogItemUpdateQueryResourceObject';
export * from './catalogItemUpdateQueryResourceObjectAttributes';
export * from './catalogItemUpdateQueryResourceObjectRelationships';
export * from './catalogItemUpdateQueryResourceObjectRelationshipsCategories';
export * from './catalogJobErrorPayload';
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
export * from './catalogVariantDeleteJobCreateQuery';
export * from './catalogVariantDeleteJobCreateQueryResourceObject';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantDeleteJobResponseObjectResource';
export * from './catalogVariantDeleteQueryResourceObject';
export * from './catalogVariantEnum';
export * from './catalogVariantResponseObjectResource';
export * from './catalogVariantUpdateJobCreateQuery';
export * from './catalogVariantUpdateJobCreateQueryResourceObject';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantUpdateJobResponseObjectResource';
export * from './catalogVariantUpdateJobResponseObjectResourceAttributes';
export * from './catalogVariantUpdateQuery';
export * from './catalogVariantUpdateQueryResourceObject';
export * from './catalogVariantUpdateQueryResourceObjectAttributes';
export * from './collectionLinks';
export * from './contactInformation';
export * from './dataPrivacyCreateDeletionJobQuery';
export * from './dataPrivacyCreateDeletionJobQueryResourceObject';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
export * from './dataPrivacyDeletionJobEnum';
export * from './dataPrivacyProfileQueryResourceObject';
export * from './dataPrivacyProfileQueryResourceObjectAttributes';
export * from './deleteTagGroupResponse';
export * from './deleteTagGroupResponseData';
export * from './deleteTagGroupResponseDataAttributes';
export * from './deleteTagGroupResponseDataRelationships';
export * from './emailChannel';
export * from './emailContentSubObject';
export * from './emailMarketing';
export * from './emailMarketingListSuppression';
export * from './emailMarketingSuppression';
export * from './emailMessageContent';
export * from './emailSendOptionsSubObject';
export * from './emailTrackingOptions';
export * from './emailTrackingOptionsSubObject';
export * from './errorSource';
export * from './eventCreateQueryV2';
export * from './eventCreateQueryV2ResourceObject';
export * from './eventCreateQueryV2ResourceObjectAttributes';
export * from './eventCreateQueryV2ResourceObjectAttributesMetric';
export * from './eventCreateQueryV2ResourceObjectAttributesProfile';
export * from './eventEnum';
export * from './eventResponseObjectResource';
export * from './eventResponseObjectResourceAttributes';
export * from './flowActionEnum';
export * from './flowActionResponseObjectResource';
export * from './flowActionResponseObjectResourceAttributes';
export * from './flowActionResponseObjectResourceAttributesTrackingOptions';
export * from './flowEnum';
export * from './flowMessageEnum';
export * from './flowMessageResponseObjectResource';
export * from './flowMessageResponseObjectResourceAttributes';
export * from './flowMessageResponseObjectResourceAttributesContent';
export * from './flowResponseObjectResource';
export * from './flowResponseObjectResourceAttributes';
export * from './flowUpdateQuery';
export * from './flowUpdateQueryResourceObject';
export * from './flowUpdateQueryResourceObjectAttributes';
export * from './getAccountResponse';
export * from './getAccountResponseCollection';
export * from './getCampaignMessageCampaignRelationshipListResponse';
export * from './getCampaignMessageResponse';
export * from './getCampaignMessageResponseCollectionCompoundDocument';
export * from './getCampaignMessageResponseCollectionCompoundDocumentDataInner';
export * from './getCampaignMessageResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getCampaignMessageResponseCollectionCompoundDocumentIncludedInner';
export * from './getCampaignMessageResponseCompoundDocument';
export * from './getCampaignMessageTemplateRelationshipListResponse';
export * from './getCampaignMessagesRelationshipListResponseCollection';
export * from './getCampaignRecipientEstimationJobResponse';
export * from './getCampaignRecipientEstimationResponse';
export * from './getCampaignResponseCollectionCompoundDocument';
export * from './getCampaignResponseCompoundDocument';
export * from './getCampaignResponseCompoundDocumentData';
export * from './getCampaignResponseCompoundDocumentDataAllOf';
export * from './getCampaignResponseCompoundDocumentIncludedInner';
export * from './getCampaignSendJobResponse';
export * from './getCampaignTagRelationshipListResponseCollection';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryCreateJobResponseCompoundDocument';
export * from './getCatalogCategoryCreateJobResponseCompoundDocumentData';
export * from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOf';
export * from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationships';
export * from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategories';
export * from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategoriesDataInner';
export * from './getCatalogCategoryDeleteJobResponse';
export * from './getCatalogCategoryDeleteJobResponseCollection';
export * from './getCatalogCategoryDeleteJobResponseData';
export * from './getCatalogCategoryItemListResponseCollection';
export * from './getCatalogCategoryResponse';
export * from './getCatalogCategoryResponseCollection';
export * from './getCatalogCategoryResponseData';
export * from './getCatalogCategoryResponseDataAllOf';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryUpdateJobResponseCompoundDocument';
export * from './getCatalogCategoryUpdateJobResponseCompoundDocumentData';
export * from './getCatalogItemCategoryListResponseCollection';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemCreateJobResponseCompoundDocument';
export * from './getCatalogItemDeleteJobResponse';
export * from './getCatalogItemDeleteJobResponseCollection';
export * from './getCatalogItemDeleteJobResponseData';
export * from './getCatalogItemDeleteJobResponseDataAllOf';
export * from './getCatalogItemDeleteJobResponseDataAllOfRelationships';
export * from './getCatalogItemDeleteJobResponseDataAllOfRelationshipsItems';
export * from './getCatalogItemResponseCollectionCompoundDocument';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogItemResponseCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemUpdateJobResponseCompoundDocument';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getCatalogVariantCreateJobResponseCompoundDocument';
export * from './getCatalogVariantDeleteJobResponse';
export * from './getCatalogVariantDeleteJobResponseCollection';
export * from './getCatalogVariantDeleteJobResponseData';
export * from './getCatalogVariantResponse';
export * from './getCatalogVariantResponseCollection';
export * from './getCatalogVariantResponseData';
export * from './getCatalogVariantResponseDataAllOf';
export * from './getCatalogVariantResponseDataAllOfRelationships';
export * from './getCatalogVariantResponseDataAllOfRelationshipsItem';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantUpdateJobResponseCompoundDocument';
export * from './getCatalogVariantUpdateJobResponseCompoundDocumentData';
export * from './getCreateVariantsJobs5XXResponse';
export * from './getCreateVariantsJobs5XXResponseErrorsInner';
export * from './getCreateVariantsJobs5XXResponseErrorsInnerSource';
export * from './getEventMetricsRelationshipListResponse';
export * from './getEventProfilesRelationshipListResponse';
export * from './getEventResponseCollectionCompoundDocument';
export * from './getEventResponseCollectionCompoundDocumentDataInner';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
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
export * from './getFlowActionResponseCompoundDocument';
export * from './getFlowActionResponseCompoundDocumentIncludedInner';
export * from './getFlowActionResponseData';
export * from './getFlowActionResponseDataAllOf';
export * from './getFlowActionResponseDataAllOfRelationships';
export * from './getFlowActionResponseDataAllOfRelationshipsFlow';
export * from './getFlowActionResponseDataAllOfRelationshipsFlowMessages';
export * from './getFlowActionResponseDataAllOfRelationshipsFlowMessagesDataInner';
export * from './getFlowFlowActionRelationshipListResponseCollection';
export * from './getFlowMessageFlowActionRelationshipResponse';
export * from './getFlowMessageResponseCollection';
export * from './getFlowMessageResponseCollectionDataInner';
export * from './getFlowMessageResponseCollectionDataInnerAllOf';
export * from './getFlowMessageResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowMessageResponseCollectionDataInnerAllOfRelationshipsFlowAction';
export * from './getFlowMessageResponseCompoundDocument';
export * from './getFlowResponse';
export * from './getFlowResponseCollectionCompoundDocument';
export * from './getFlowResponseCompoundDocument';
export * from './getFlowResponseCompoundDocumentData';
export * from './getFlowResponseCompoundDocumentDataAllOf';
export * from './getFlowResponseCompoundDocumentDataAllOfRelationships';
export * from './getFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActions';
export * from './getFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActionsDataInner';
export * from './getFlowResponseCompoundDocumentDataAllOfRelationshipsTags';
export * from './getFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner';
export * from './getFlowResponseCompoundDocumentIncludedInner';
export * from './getFlowTagRelationshipListResponseCollection';
export * from './getListListResponseCollectionCompoundDocument';
export * from './getListListResponseCollectionCompoundDocumentDataInner';
export * from './getListRelationshipsResponseCollection';
export * from './getListResponseCollection';
export * from './getListResponseCollectionDataInner';
export * from './getListRetrieveResponseCompoundDocument';
export * from './getListRetrieveResponseCompoundDocumentData';
export * from './getListTagRelationshipListResponseCollection';
export * from './getMetricResponse';
export * from './getMetricResponseCollection';
export * from './getProfileListRelationshipsResponseCollection';
export * from './getProfileResponse';
export * from './getProfileResponseCollection';
export * from './getProfileResponseCollectionCompoundDocument';
export * from './getProfileResponseCollectionCompoundDocumentDataInner';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsSegments';
export * from './getProfileResponseCompoundDocument';
export * from './getProfileResponseCompoundDocumentData';
export * from './getProfileResponseCompoundDocumentDataAllOf';
export * from './getProfileResponseCompoundDocumentIncludedInner';
export * from './getProfileSegmentRelationshipsResponseCollection';
export * from './getSegmentListResponseCollectionCompoundDocument';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInner';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOf';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles';
export * from './getSegmentRelationshipsResponseCollection';
export * from './getSegmentResponseCollection';
export * from './getSegmentResponseCollectionDataInner';
export * from './getSegmentRetrieveResponseCompoundDocument';
export * from './getSegmentRetrieveResponseCompoundDocumentData';
export * from './getSegmentTagRelationshipListResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollection';
export * from './getTagFlowRelationshipsResponseCollection';
export * from './getTagGroupResponse';
export * from './getTagGroupResponseCollection';
export * from './getTagGroupResponseCollectionDataInner';
export * from './getTagGroupResponseCollectionDataInnerAllOf';
export * from './getTagGroupTagRelationshipsResponseCollection';
export * from './getTagGroupTagRelationshipsResponseCollectionDataInner';
export * from './getTagListRelationshipsResponseCollection';
export * from './getTagResponseCollection';
export * from './getTagResponseCollectionCompoundDocument';
export * from './getTagResponseCollectionDataInner';
export * from './getTagResponseCollectionDataInnerAllOf';
export * from './getTagResponseCollectionDataInnerAllOfRelationships';
export * from './getTagResponseCollectionDataInnerAllOfRelationshipsCampaigns';
export * from './getTagResponseCollectionDataInnerAllOfRelationshipsFlows';
export * from './getTagResponseCollectionDataInnerAllOfRelationshipsFlowsDataInner';
export * from './getTagResponseCollectionDataInnerAllOfRelationshipsTagGroup';
export * from './getTagResponseCollectionDataInnerAllOfRelationshipsTagGroupData';
export * from './getTagResponseCompoundDocument';
export * from './getTagSegmentRelationshipsResponseCollection';
export * from './getTagTagGroupRelationshipsResponse';
export * from './getTagTagGroupRelationshipsResponseData';
export * from './getTemplateResponse';
export * from './getTemplateResponseCollection';
export * from './listCreateQuery';
export * from './listCreateQueryResourceObject';
export * from './listEnum';
export * from './listListResponseObjectResource';
export * from './listListResponseObjectResourceAttributes';
export * from './listMembersAddQuery';
export * from './listMembersDeleteQuery';
export * from './listPartialUpdateQuery';
export * from './listPartialUpdateQueryResourceObject';
export * from './listPartialUpdateQueryResourceObjectAttributes';
export * from './listResponseObjectResource';
export * from './listRetrieveResponseObjectResourceAttributes';
export * from './listRetrieveResponseObjectResourceExtended';
export * from './listRetrieveResponseObjectResourceExtendedAttributes';
export * from './metricAggregateEnum';
export * from './metricAggregateQuery';
export * from './metricAggregateQueryResourceObject';
export * from './metricAggregateQueryResourceObjectAttributes';
export * from './metricAggregateRowDTO';
export * from './metricCreateQueryResourceObject';
export * from './metricCreateQueryResourceObjectAttributes';
export * from './metricEnum';
export * from './metricResponseObjectResource';
export * from './metricResponseObjectResourceAttributes';
export * from './objectLinks';
export * from './onsiteProfileCreateQueryResourceObject';
export * from './onsiteProfileCreateQueryResourceObjectAttributes';
export * from './onsiteProfileMeta';
export * from './patchCampaignMessageResponse';
export * from './patchCampaignMessageResponseData';
export * from './patchCampaignMessageResponseDataAttributes';
export * from './patchCampaignMessageResponseDataAttributesContent';
export * from './patchCampaignMessageResponseDataRelationships';
export * from './patchCampaignMessageResponseDataRelationshipsCampaign';
export * from './patchCampaignMessageResponseDataRelationshipsCampaignData';
export * from './patchCampaignMessageResponseDataRelationshipsTemplate';
export * from './patchCampaignMessageResponseDataRelationshipsTemplateData';
export * from './patchCampaignResponse';
export * from './patchCatalogCategoryResponse';
export * from './patchCatalogItemResponse';
export * from './patchCatalogItemResponseData';
export * from './patchCatalogItemResponseDataAttributes';
export * from './patchCatalogVariantResponse';
export * from './patchFlowResponse';
export * from './patchFlowResponseData';
export * from './patchListPartialUpdateResponse';
export * from './patchListPartialUpdateResponseData';
export * from './patchProfileResponse';
export * from './patchProfileResponseData';
export * from './patchProfileResponseDataAttributes';
export * from './patchProfileResponseDataRelationships';
export * from './patchProfileResponseDataRelationshipsLists';
export * from './patchProfileResponseDataRelationshipsListsDataInner';
export * from './patchProfileResponseDataRelationshipsSegments';
export * from './patchProfileResponseDataRelationshipsSegmentsDataInner';
export * from './patchSegmentPartialUpdateResponse';
export * from './patchSegmentPartialUpdateResponseData';
export * from './patchTagGroupResponse';
export * from './patchTemplateResponse';
export * from './patchTemplateResponseData';
export * from './patchTemplateResponseDataAttributes';
export * from './postCampaignMessageResponse';
export * from './postCampaignRecipientEstimationJobResponse';
export * from './postCampaignRecipientEstimationJobResponseData';
export * from './postCampaignRecipientEstimationJobResponseDataAttributes';
export * from './postCampaignResponse';
export * from './postCampaignResponseData';
export * from './postCampaignResponseDataRelationships';
export * from './postCampaignResponseDataRelationshipsCampaignMessages';
export * from './postCampaignResponseDataRelationshipsCampaignMessagesDataInner';
export * from './postCampaignSendJobResponse';
export * from './postCampaignSendJobResponseData';
export * from './postCampaignSendJobResponseDataAttributes';
export * from './postCatalogCategoryCreateJobResponse';
export * from './postCatalogCategoryCreateJobResponseData';
export * from './postCatalogCategoryDeleteJobResponse';
export * from './postCatalogCategoryDeleteJobResponseData';
export * from './postCatalogCategoryResponse';
export * from './postCatalogCategoryResponseData';
export * from './postCatalogCategoryResponseDataAttributes';
export * from './postCatalogCategoryResponseDataRelationships';
export * from './postCatalogCategoryResponseDataRelationshipsItems';
export * from './postCatalogCategoryResponseDataRelationshipsItemsDataInner';
export * from './postCatalogCategoryUpdateJobResponse';
export * from './postCatalogCategoryUpdateJobResponseData';
export * from './postCatalogItemCreateJobResponse';
export * from './postCatalogItemCreateJobResponseData';
export * from './postCatalogItemDeleteJobResponse';
export * from './postCatalogItemDeleteJobResponseData';
export * from './postCatalogItemResponse';
export * from './postCatalogItemUpdateJobResponse';
export * from './postCatalogItemUpdateJobResponseData';
export * from './postCatalogVariantCreateJobResponse';
export * from './postCatalogVariantCreateJobResponseData';
export * from './postCatalogVariantCreateJobResponseDataRelationships';
export * from './postCatalogVariantCreateJobResponseDataRelationshipsVariants';
export * from './postCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner';
export * from './postCatalogVariantDeleteJobResponse';
export * from './postCatalogVariantDeleteJobResponseData';
export * from './postCatalogVariantResponse';
export * from './postCatalogVariantResponseData';
export * from './postCatalogVariantResponseDataAttributes';
export * from './postCatalogVariantUpdateJobResponse';
export * from './postCatalogVariantUpdateJobResponseData';
export * from './postListCreateResponse';
export * from './postMetricAggregateResponse';
export * from './postMetricAggregateResponseData';
export * from './postMetricAggregateResponseDataAttributes';
export * from './postProfileResponse';
export * from './postTagGroupResponse';
export * from './postTagResponse';
export * from './postTagResponseData';
export * from './postTemplateResponse';
export * from './predictiveAnalytics';
export * from './profileCreateQuery';
export * from './profileCreateQueryResourceObject';
export * from './profileCreateQueryResourceObjectAttributes';
export * from './profileEnum';
export * from './profileIdentifierDTOResourceObject';
export * from './profileIdentifierDTOResourceObjectAttributes';
export * from './profileLocation';
export * from './profileLocationLatitude';
export * from './profileLocationLongitude';
export * from './profileMeta';
export * from './profileMetaPatchProperties';
export * from './profileMetaPatchPropertiesUnset';
export * from './profilePartialUpdateQuery';
export * from './profilePartialUpdateQueryResourceObject';
export * from './profilePartialUpdateQueryResourceObjectAttributes';
export * from './profileResponseObjectResource';
export * from './profileResponseObjectResourceAttributes';
export * from './profileResponseObjectResourceExtended';
export * from './profileResponseObjectResourceExtendedAttributes';
export * from './profileResponseObjectResourceExtendedAttributesAllOf';
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
export * from './relationshipLinks';
export * from './renderOptionsSubObject';
export * from './sMSChannel';
export * from './sMSContentSubObject';
export * from './sMSContentSubObjectCreate';
export * from './sMSMarketing';
export * from './sMSMessageContent';
export * from './sMSRenderOptions';
export * from './sMSSendOptionsSubObject';
export * from './sMSTrackingOptions';
export * from './sMSTrackingOptionsSubObject';
export * from './sTOScheduleOptions';
export * from './segmentEnum';
export * from './segmentListResponseObjectResource';
export * from './segmentPartialUpdateQuery';
export * from './segmentPartialUpdateQueryResourceObject';
export * from './segmentPartialUpdateQueryResourceObjectAttributes';
export * from './segmentResponseObjectResource';
export * from './segmentResponseObjectResourceAttributes';
export * from './segmentRetrieveResponseObjectResourceAttributes';
export * from './segmentRetrieveResponseObjectResourceExtended';
export * from './segmentRetrieveResponseObjectResourceExtendedAttributes';
export * from './segmentRetrieveResponseObjectResourceExtendedAttributesAllOf';
export * from './sendOptions';
export * from './sendStrategySubObject';
export * from './sendTimeSubObject';
export * from './serverBISSubscriptionCreateQuery';
export * from './serverBISSubscriptionCreateQueryResourceObject';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
export * from './staticScheduleOptions';
export * from './streetAddress';
export * from './subscriptionChannels';
export * from './subscriptionCreateJobCreateQuery';
export * from './subscriptionCreateJobCreateQueryResourceObject';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionDeleteJobCreateQuery';
export * from './subscriptionDeleteJobCreateQueryResourceObject';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
export * from './subscriptions';
export * from './suppressionCreateJobCreateQuery';
export * from './suppressionCreateJobCreateQueryResourceObject';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributes';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './suppressionDeleteJobCreateQuery';
export * from './suppressionDeleteJobCreateQueryResourceObject';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './tagCampaignOp';
export * from './tagCreateQuery';
export * from './tagCreateQueryResourceObject';
export * from './tagCreateQueryResourceObjectRelationships';
export * from './tagCreateQueryResourceObjectRelationshipsTagGroup';
export * from './tagEnum';
export * from './tagFlowOp';
export * from './tagGroupCreateQuery';
export * from './tagGroupCreateQueryResourceObject';
export * from './tagGroupCreateQueryResourceObjectAttributes';
export * from './tagGroupEnum';
export * from './tagGroupResponseObjectResource';
export * from './tagGroupUpdateQuery';
export * from './tagGroupUpdateQueryResourceObject';
export * from './tagGroupUpdateQueryResourceObjectAttributes';
export * from './tagListOp';
export * from './tagResponseObjectResource';
export * from './tagSegmentOp';
export * from './tagUpdateQuery';
export * from './tagUpdateQueryResourceObject';
export * from './tagUpdateQueryResourceObjectAttributes';
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
export * from './templateUpdateQuery';
export * from './templateUpdateQueryResourceObject';
export * from './templateUpdateQueryResourceObjectAttributes';
export * from './throttledScheduleOptions';
export * from './uTMParamsSubObject';
export * from './utmParamInfo';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountEnum } from './accountEnum';
import { AccountResponseObjectResource } from './accountResponseObjectResource';
import { AccountResponseObjectResourceAttributes } from './accountResponseObjectResourceAttributes';
import { AudiencesSubObject } from './audiencesSubObject';
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { CampaignCloneQuery } from './campaignCloneQuery';
import { CampaignCloneQueryResourceObject } from './campaignCloneQueryResourceObject';
import { CampaignCloneQueryResourceObjectAttributes } from './campaignCloneQueryResourceObjectAttributes';
import { CampaignCreateQuery } from './campaignCreateQuery';
import { CampaignCreateQueryResourceObject } from './campaignCreateQueryResourceObject';
import { CampaignCreateQueryResourceObjectAttributes } from './campaignCreateQueryResourceObjectAttributes';
import { CampaignCreateQueryResourceObjectAttributesCampaignMessages } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import { CampaignCreateQueryResourceObjectAttributesSendOptions } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import { CampaignCreateQueryResourceObjectAttributesTrackingOptions } from './campaignCreateQueryResourceObjectAttributesTrackingOptions';
import { CampaignEnum } from './campaignEnum';
import { CampaignMessageAssignTemplateQuery } from './campaignMessageAssignTemplateQuery';
import { CampaignMessageAssignTemplateQueryResourceObject } from './campaignMessageAssignTemplateQueryResourceObject';
import { CampaignMessageAssignTemplateQueryResourceObjectAttributes } from './campaignMessageAssignTemplateQueryResourceObjectAttributes';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationships } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import { CampaignMessageCreateQueryResourceObject } from './campaignMessageCreateQueryResourceObject';
import { CampaignMessageCreateQueryResourceObjectAttributes } from './campaignMessageCreateQueryResourceObjectAttributes';
import { CampaignMessageCreateQueryResourceObjectAttributesContent } from './campaignMessageCreateQueryResourceObjectAttributesContent';
import { CampaignMessageEnum } from './campaignMessageEnum';
import { CampaignMessagePartialUpdateQuery } from './campaignMessagePartialUpdateQuery';
import { CampaignMessagePartialUpdateQueryResourceObject } from './campaignMessagePartialUpdateQueryResourceObject';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributes } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import { CampaignMessageResponseObjectResource } from './campaignMessageResponseObjectResource';
import { CampaignPartialUpdateQuery } from './campaignPartialUpdateQuery';
import { CampaignPartialUpdateQueryResourceObject } from './campaignPartialUpdateQueryResourceObject';
import { CampaignPartialUpdateQueryResourceObjectAttributes } from './campaignPartialUpdateQueryResourceObjectAttributes';
import { CampaignRecipientEstimationEnum } from './campaignRecipientEstimationEnum';
import { CampaignRecipientEstimationJobCreateQuery } from './campaignRecipientEstimationJobCreateQuery';
import { CampaignRecipientEstimationJobCreateQueryResourceObject } from './campaignRecipientEstimationJobCreateQueryResourceObject';
import { CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes } from './campaignRecipientEstimationJobCreateQueryResourceObjectAttributes';
import { CampaignRecipientEstimationJobEnum } from './campaignRecipientEstimationJobEnum';
import { CampaignRecipientEstimationJobResponseObjectResource } from './campaignRecipientEstimationJobResponseObjectResource';
import { CampaignRecipientEstimationResponseObjectResource } from './campaignRecipientEstimationResponseObjectResource';
import { CampaignRecipientEstimationResponseObjectResourceAttributes } from './campaignRecipientEstimationResponseObjectResourceAttributes';
import { CampaignResponseObjectResource } from './campaignResponseObjectResource';
import { CampaignResponseObjectResourceAttributes } from './campaignResponseObjectResourceAttributes';
import { CampaignSendJobCreateQuery } from './campaignSendJobCreateQuery';
import { CampaignSendJobCreateQueryResourceObject } from './campaignSendJobCreateQueryResourceObject';
import { CampaignSendJobCreateQueryResourceObjectAttributes } from './campaignSendJobCreateQueryResourceObjectAttributes';
import { CampaignSendJobEnum } from './campaignSendJobEnum';
import { CampaignSendJobPartialUpdateQuery } from './campaignSendJobPartialUpdateQuery';
import { CampaignSendJobPartialUpdateQueryResourceObject } from './campaignSendJobPartialUpdateQueryResourceObject';
import { CampaignSendJobPartialUpdateQueryResourceObjectAttributes } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import { CampaignSendJobResponseObjectResource } from './campaignSendJobResponseObjectResource';
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
import { CatalogCategoryDeleteJobCreateQuery } from './catalogCategoryDeleteJobCreateQuery';
import { CatalogCategoryDeleteJobCreateQueryResourceObject } from './catalogCategoryDeleteJobCreateQueryResourceObject';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryDeleteJobResponseObjectResource } from './catalogCategoryDeleteJobResponseObjectResource';
import { CatalogCategoryDeleteQueryResourceObject } from './catalogCategoryDeleteQueryResourceObject';
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryItemOp } from './catalogCategoryItemOp';
import { CatalogCategoryResponseObjectResource } from './catalogCategoryResponseObjectResource';
import { CatalogCategoryUpdateJobCreateQuery } from './catalogCategoryUpdateJobCreateQuery';
import { CatalogCategoryUpdateJobCreateQueryResourceObject } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryUpdateJobResponseObjectResource } from './catalogCategoryUpdateJobResponseObjectResource';
import { CatalogCategoryUpdateQuery } from './catalogCategoryUpdateQuery';
import { CatalogCategoryUpdateQueryResourceObject } from './catalogCategoryUpdateQueryResourceObject';
import { CatalogCategoryUpdateQueryResourceObjectAttributes } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateQueryResourceObjectRelationships } from './catalogCategoryUpdateQueryResourceObjectRelationships';
import { CatalogCategoryUpdateQueryResourceObjectRelationshipsItems } from './catalogCategoryUpdateQueryResourceObjectRelationshipsItems';
import { CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsDataInner } from './catalogCategoryUpdateQueryResourceObjectRelationshipsItemsDataInner';
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
import { CatalogItemDeleteJobCreateQuery } from './catalogItemDeleteJobCreateQuery';
import { CatalogItemDeleteJobCreateQueryResourceObject } from './catalogItemDeleteJobCreateQueryResourceObject';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributes } from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems } from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemDeleteJobResponseObjectResource } from './catalogItemDeleteJobResponseObjectResource';
import { CatalogItemDeleteQueryResourceObject } from './catalogItemDeleteQueryResourceObject';
import { CatalogItemEnum } from './catalogItemEnum';
import { CatalogItemResponseObjectResource } from './catalogItemResponseObjectResource';
import { CatalogItemUpdateJobCreateQuery } from './catalogItemUpdateJobCreateQuery';
import { CatalogItemUpdateJobCreateQueryResourceObject } from './catalogItemUpdateJobCreateQueryResourceObject';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributes } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemUpdateJobResponseObjectResource } from './catalogItemUpdateJobResponseObjectResource';
import { CatalogItemUpdateQuery } from './catalogItemUpdateQuery';
import { CatalogItemUpdateQueryResourceObject } from './catalogItemUpdateQueryResourceObject';
import { CatalogItemUpdateQueryResourceObjectAttributes } from './catalogItemUpdateQueryResourceObjectAttributes';
import { CatalogItemUpdateQueryResourceObjectRelationships } from './catalogItemUpdateQueryResourceObjectRelationships';
import { CatalogItemUpdateQueryResourceObjectRelationshipsCategories } from './catalogItemUpdateQueryResourceObjectRelationshipsCategories';
import { CatalogJobErrorPayload } from './catalogJobErrorPayload';
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
import { CatalogVariantDeleteJobCreateQuery } from './catalogVariantDeleteJobCreateQuery';
import { CatalogVariantDeleteJobCreateQueryResourceObject } from './catalogVariantDeleteJobCreateQueryResourceObject';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributes } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantDeleteJobResponseObjectResource } from './catalogVariantDeleteJobResponseObjectResource';
import { CatalogVariantDeleteQueryResourceObject } from './catalogVariantDeleteQueryResourceObject';
import { CatalogVariantEnum } from './catalogVariantEnum';
import { CatalogVariantResponseObjectResource } from './catalogVariantResponseObjectResource';
import { CatalogVariantUpdateJobCreateQuery } from './catalogVariantUpdateJobCreateQuery';
import { CatalogVariantUpdateJobCreateQueryResourceObject } from './catalogVariantUpdateJobCreateQueryResourceObject';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributes } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantUpdateJobResponseObjectResource } from './catalogVariantUpdateJobResponseObjectResource';
import { CatalogVariantUpdateJobResponseObjectResourceAttributes } from './catalogVariantUpdateJobResponseObjectResourceAttributes';
import { CatalogVariantUpdateQuery } from './catalogVariantUpdateQuery';
import { CatalogVariantUpdateQueryResourceObject } from './catalogVariantUpdateQueryResourceObject';
import { CatalogVariantUpdateQueryResourceObjectAttributes } from './catalogVariantUpdateQueryResourceObjectAttributes';
import { CollectionLinks } from './collectionLinks';
import { ContactInformation } from './contactInformation';
import { DataPrivacyCreateDeletionJobQuery } from './dataPrivacyCreateDeletionJobQuery';
import { DataPrivacyCreateDeletionJobQueryResourceObject } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';
import { DataPrivacyProfileQueryResourceObject } from './dataPrivacyProfileQueryResourceObject';
import { DataPrivacyProfileQueryResourceObjectAttributes } from './dataPrivacyProfileQueryResourceObjectAttributes';
import { DeleteTagGroupResponse } from './deleteTagGroupResponse';
import { DeleteTagGroupResponseData } from './deleteTagGroupResponseData';
import { DeleteTagGroupResponseDataAttributes } from './deleteTagGroupResponseDataAttributes';
import { DeleteTagGroupResponseDataRelationships } from './deleteTagGroupResponseDataRelationships';
import { EmailChannel } from './emailChannel';
import { EmailContentSubObject } from './emailContentSubObject';
import { EmailMarketing } from './emailMarketing';
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';
import { EmailMessageContent } from './emailMessageContent';
import { EmailSendOptionsSubObject } from './emailSendOptionsSubObject';
import { EmailTrackingOptions } from './emailTrackingOptions';
import { EmailTrackingOptionsSubObject } from './emailTrackingOptionsSubObject';
import { ErrorSource } from './errorSource';
import { EventCreateQueryV2 } from './eventCreateQueryV2';
import { EventCreateQueryV2ResourceObject } from './eventCreateQueryV2ResourceObject';
import { EventCreateQueryV2ResourceObjectAttributes } from './eventCreateQueryV2ResourceObjectAttributes';
import { EventCreateQueryV2ResourceObjectAttributesMetric } from './eventCreateQueryV2ResourceObjectAttributesMetric';
import { EventCreateQueryV2ResourceObjectAttributesProfile } from './eventCreateQueryV2ResourceObjectAttributesProfile';
import { EventEnum } from './eventEnum';
import { EventResponseObjectResource } from './eventResponseObjectResource';
import { EventResponseObjectResourceAttributes } from './eventResponseObjectResourceAttributes';
import { FlowActionEnum } from './flowActionEnum';
import { FlowActionResponseObjectResource } from './flowActionResponseObjectResource';
import { FlowActionResponseObjectResourceAttributes } from './flowActionResponseObjectResourceAttributes';
import { FlowActionResponseObjectResourceAttributesTrackingOptions } from './flowActionResponseObjectResourceAttributesTrackingOptions';
import { FlowEnum } from './flowEnum';
import { FlowMessageEnum } from './flowMessageEnum';
import { FlowMessageResponseObjectResource } from './flowMessageResponseObjectResource';
import { FlowMessageResponseObjectResourceAttributes } from './flowMessageResponseObjectResourceAttributes';
import { FlowMessageResponseObjectResourceAttributesContent } from './flowMessageResponseObjectResourceAttributesContent';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { FlowResponseObjectResourceAttributes } from './flowResponseObjectResourceAttributes';
import { FlowUpdateQuery } from './flowUpdateQuery';
import { FlowUpdateQueryResourceObject } from './flowUpdateQueryResourceObject';
import { FlowUpdateQueryResourceObjectAttributes } from './flowUpdateQueryResourceObjectAttributes';
import { GetAccountResponse } from './getAccountResponse';
import { GetAccountResponseCollection } from './getAccountResponseCollection';
import { GetCampaignMessageCampaignRelationshipListResponse } from './getCampaignMessageCampaignRelationshipListResponse';
import { GetCampaignMessageResponse } from './getCampaignMessageResponse';
import { GetCampaignMessageResponseCollectionCompoundDocument } from './getCampaignMessageResponseCollectionCompoundDocument';
import { GetCampaignMessageResponseCollectionCompoundDocumentDataInner } from './getCampaignMessageResponseCollectionCompoundDocumentDataInner';
import { GetCampaignMessageResponseCollectionCompoundDocumentDataInnerAllOf } from './getCampaignMessageResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetCampaignMessageResponseCollectionCompoundDocumentIncludedInner } from './getCampaignMessageResponseCollectionCompoundDocumentIncludedInner';
import { GetCampaignMessageResponseCompoundDocument } from './getCampaignMessageResponseCompoundDocument';
import { GetCampaignMessageTemplateRelationshipListResponse } from './getCampaignMessageTemplateRelationshipListResponse';
import { GetCampaignMessagesRelationshipListResponseCollection } from './getCampaignMessagesRelationshipListResponseCollection';
import { GetCampaignRecipientEstimationJobResponse } from './getCampaignRecipientEstimationJobResponse';
import { GetCampaignRecipientEstimationResponse } from './getCampaignRecipientEstimationResponse';
import { GetCampaignResponseCollectionCompoundDocument } from './getCampaignResponseCollectionCompoundDocument';
import { GetCampaignResponseCompoundDocument } from './getCampaignResponseCompoundDocument';
import { GetCampaignResponseCompoundDocumentData } from './getCampaignResponseCompoundDocumentData';
import { GetCampaignResponseCompoundDocumentDataAllOf } from './getCampaignResponseCompoundDocumentDataAllOf';
import { GetCampaignResponseCompoundDocumentIncludedInner } from './getCampaignResponseCompoundDocumentIncludedInner';
import { GetCampaignSendJobResponse } from './getCampaignSendJobResponse';
import { GetCampaignTagRelationshipListResponseCollection } from './getCampaignTagRelationshipListResponseCollection';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocument } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryCreateJobResponseCompoundDocument } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import { GetCatalogCategoryCreateJobResponseCompoundDocumentData } from './getCatalogCategoryCreateJobResponseCompoundDocumentData';
import { GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOf } from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOf';
import { GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationships } from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationships';
import { GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategories } from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategories';
import { GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategoriesDataInner } from './getCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategoriesDataInner';
import { GetCatalogCategoryDeleteJobResponse } from './getCatalogCategoryDeleteJobResponse';
import { GetCatalogCategoryDeleteJobResponseCollection } from './getCatalogCategoryDeleteJobResponseCollection';
import { GetCatalogCategoryDeleteJobResponseData } from './getCatalogCategoryDeleteJobResponseData';
import { GetCatalogCategoryItemListResponseCollection } from './getCatalogCategoryItemListResponseCollection';
import { GetCatalogCategoryResponse } from './getCatalogCategoryResponse';
import { GetCatalogCategoryResponseCollection } from './getCatalogCategoryResponseCollection';
import { GetCatalogCategoryResponseData } from './getCatalogCategoryResponseData';
import { GetCatalogCategoryResponseDataAllOf } from './getCatalogCategoryResponseDataAllOf';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryUpdateJobResponseCompoundDocument } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import { GetCatalogCategoryUpdateJobResponseCompoundDocumentData } from './getCatalogCategoryUpdateJobResponseCompoundDocumentData';
import { GetCatalogItemCategoryListResponseCollection } from './getCatalogItemCategoryListResponseCollection';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocument } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemCreateJobResponseCompoundDocument } from './getCatalogItemCreateJobResponseCompoundDocument';
import { GetCatalogItemDeleteJobResponse } from './getCatalogItemDeleteJobResponse';
import { GetCatalogItemDeleteJobResponseCollection } from './getCatalogItemDeleteJobResponseCollection';
import { GetCatalogItemDeleteJobResponseData } from './getCatalogItemDeleteJobResponseData';
import { GetCatalogItemDeleteJobResponseDataAllOf } from './getCatalogItemDeleteJobResponseDataAllOf';
import { GetCatalogItemDeleteJobResponseDataAllOfRelationships } from './getCatalogItemDeleteJobResponseDataAllOfRelationships';
import { GetCatalogItemDeleteJobResponseDataAllOfRelationshipsItems } from './getCatalogItemDeleteJobResponseDataAllOfRelationshipsItems';
import { GetCatalogItemResponseCollectionCompoundDocument } from './getCatalogItemResponseCollectionCompoundDocument';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOf } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogItemResponseCompoundDocument } from './getCatalogItemResponseCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocument } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemUpdateJobResponseCompoundDocument } from './getCatalogItemUpdateJobResponseCompoundDocument';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocument } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOf } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetCatalogVariantCreateJobResponseCompoundDocument } from './getCatalogVariantCreateJobResponseCompoundDocument';
import { GetCatalogVariantDeleteJobResponse } from './getCatalogVariantDeleteJobResponse';
import { GetCatalogVariantDeleteJobResponseCollection } from './getCatalogVariantDeleteJobResponseCollection';
import { GetCatalogVariantDeleteJobResponseData } from './getCatalogVariantDeleteJobResponseData';
import { GetCatalogVariantResponse } from './getCatalogVariantResponse';
import { GetCatalogVariantResponseCollection } from './getCatalogVariantResponseCollection';
import { GetCatalogVariantResponseData } from './getCatalogVariantResponseData';
import { GetCatalogVariantResponseDataAllOf } from './getCatalogVariantResponseDataAllOf';
import { GetCatalogVariantResponseDataAllOfRelationships } from './getCatalogVariantResponseDataAllOfRelationships';
import { GetCatalogVariantResponseDataAllOfRelationshipsItem } from './getCatalogVariantResponseDataAllOfRelationshipsItem';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocument } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantUpdateJobResponseCompoundDocument } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import { GetCatalogVariantUpdateJobResponseCompoundDocumentData } from './getCatalogVariantUpdateJobResponseCompoundDocumentData';
import { GetCreateVariantsJobs5XXResponse } from './getCreateVariantsJobs5XXResponse';
import { GetCreateVariantsJobs5XXResponseErrorsInner } from './getCreateVariantsJobs5XXResponseErrorsInner';
import { GetCreateVariantsJobs5XXResponseErrorsInnerSource } from './getCreateVariantsJobs5XXResponseErrorsInnerSource';
import { GetEventMetricsRelationshipListResponse } from './getEventMetricsRelationshipListResponse';
import { GetEventProfilesRelationshipListResponse } from './getEventProfilesRelationshipListResponse';
import { GetEventResponseCollectionCompoundDocument } from './getEventResponseCollectionCompoundDocument';
import { GetEventResponseCollectionCompoundDocumentDataInner } from './getEventResponseCollectionCompoundDocumentDataInner';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOf } from './getEventResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import { GetEventResponseCollectionCompoundDocumentIncludedInner } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import { GetEventResponseCompoundDocument } from './getEventResponseCompoundDocument';
import { GetFlowActionFlowMessageRelationshipResponseCollection } from './getFlowActionFlowMessageRelationshipResponseCollection';
import { GetFlowActionFlowRelationshipResponse } from './getFlowActionFlowRelationshipResponse';
import { GetFlowActionResponse } from './getFlowActionResponse';
import { GetFlowActionResponseCollection } from './getFlowActionResponseCollection';
import { GetFlowActionResponseCompoundDocument } from './getFlowActionResponseCompoundDocument';
import { GetFlowActionResponseCompoundDocumentIncludedInner } from './getFlowActionResponseCompoundDocumentIncludedInner';
import { GetFlowActionResponseData } from './getFlowActionResponseData';
import { GetFlowActionResponseDataAllOf } from './getFlowActionResponseDataAllOf';
import { GetFlowActionResponseDataAllOfRelationships } from './getFlowActionResponseDataAllOfRelationships';
import { GetFlowActionResponseDataAllOfRelationshipsFlow } from './getFlowActionResponseDataAllOfRelationshipsFlow';
import { GetFlowActionResponseDataAllOfRelationshipsFlowMessages } from './getFlowActionResponseDataAllOfRelationshipsFlowMessages';
import { GetFlowActionResponseDataAllOfRelationshipsFlowMessagesDataInner } from './getFlowActionResponseDataAllOfRelationshipsFlowMessagesDataInner';
import { GetFlowFlowActionRelationshipListResponseCollection } from './getFlowFlowActionRelationshipListResponseCollection';
import { GetFlowMessageFlowActionRelationshipResponse } from './getFlowMessageFlowActionRelationshipResponse';
import { GetFlowMessageResponseCollection } from './getFlowMessageResponseCollection';
import { GetFlowMessageResponseCollectionDataInner } from './getFlowMessageResponseCollectionDataInner';
import { GetFlowMessageResponseCollectionDataInnerAllOf } from './getFlowMessageResponseCollectionDataInnerAllOf';
import { GetFlowMessageResponseCollectionDataInnerAllOfRelationships } from './getFlowMessageResponseCollectionDataInnerAllOfRelationships';
import { GetFlowMessageResponseCollectionDataInnerAllOfRelationshipsFlowAction } from './getFlowMessageResponseCollectionDataInnerAllOfRelationshipsFlowAction';
import { GetFlowMessageResponseCompoundDocument } from './getFlowMessageResponseCompoundDocument';
import { GetFlowResponse } from './getFlowResponse';
import { GetFlowResponseCollectionCompoundDocument } from './getFlowResponseCollectionCompoundDocument';
import { GetFlowResponseCompoundDocument } from './getFlowResponseCompoundDocument';
import { GetFlowResponseCompoundDocumentData } from './getFlowResponseCompoundDocumentData';
import { GetFlowResponseCompoundDocumentDataAllOf } from './getFlowResponseCompoundDocumentDataAllOf';
import { GetFlowResponseCompoundDocumentDataAllOfRelationships } from './getFlowResponseCompoundDocumentDataAllOfRelationships';
import { GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActions } from './getFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActions';
import { GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActionsDataInner } from './getFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActionsDataInner';
import { GetFlowResponseCompoundDocumentDataAllOfRelationshipsTags } from './getFlowResponseCompoundDocumentDataAllOfRelationshipsTags';
import { GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner } from './getFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner';
import { GetFlowResponseCompoundDocumentIncludedInner } from './getFlowResponseCompoundDocumentIncludedInner';
import { GetFlowTagRelationshipListResponseCollection } from './getFlowTagRelationshipListResponseCollection';
import { GetListListResponseCollectionCompoundDocument } from './getListListResponseCollectionCompoundDocument';
import { GetListListResponseCollectionCompoundDocumentDataInner } from './getListListResponseCollectionCompoundDocumentDataInner';
import { GetListRelationshipsResponseCollection } from './getListRelationshipsResponseCollection';
import { GetListResponseCollection } from './getListResponseCollection';
import { GetListResponseCollectionDataInner } from './getListResponseCollectionDataInner';
import { GetListRetrieveResponseCompoundDocument } from './getListRetrieveResponseCompoundDocument';
import { GetListRetrieveResponseCompoundDocumentData } from './getListRetrieveResponseCompoundDocumentData';
import { GetListTagRelationshipListResponseCollection } from './getListTagRelationshipListResponseCollection';
import { GetMetricResponse } from './getMetricResponse';
import { GetMetricResponseCollection } from './getMetricResponseCollection';
import { GetProfileListRelationshipsResponseCollection } from './getProfileListRelationshipsResponseCollection';
import { GetProfileResponse } from './getProfileResponse';
import { GetProfileResponseCollection } from './getProfileResponseCollection';
import { GetProfileResponseCollectionCompoundDocument } from './getProfileResponseCollectionCompoundDocument';
import { GetProfileResponseCollectionCompoundDocumentDataInner } from './getProfileResponseCollectionCompoundDocumentDataInner';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOf } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsSegments } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsSegments';
import { GetProfileResponseCompoundDocument } from './getProfileResponseCompoundDocument';
import { GetProfileResponseCompoundDocumentData } from './getProfileResponseCompoundDocumentData';
import { GetProfileResponseCompoundDocumentDataAllOf } from './getProfileResponseCompoundDocumentDataAllOf';
import { GetProfileResponseCompoundDocumentIncludedInner } from './getProfileResponseCompoundDocumentIncludedInner';
import { GetProfileSegmentRelationshipsResponseCollection } from './getProfileSegmentRelationshipsResponseCollection';
import { GetSegmentListResponseCollectionCompoundDocument } from './getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentListResponseCollectionCompoundDocumentDataInner } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import { GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOf } from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOf';
import { GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles } from './getSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles';
import { GetSegmentRelationshipsResponseCollection } from './getSegmentRelationshipsResponseCollection';
import { GetSegmentResponseCollection } from './getSegmentResponseCollection';
import { GetSegmentResponseCollectionDataInner } from './getSegmentResponseCollectionDataInner';
import { GetSegmentRetrieveResponseCompoundDocument } from './getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentRetrieveResponseCompoundDocumentData } from './getSegmentRetrieveResponseCompoundDocumentData';
import { GetSegmentTagRelationshipListResponseCollection } from './getSegmentTagRelationshipListResponseCollection';
import { GetTagCampaignRelationshipsResponseCollection } from './getTagCampaignRelationshipsResponseCollection';
import { GetTagFlowRelationshipsResponseCollection } from './getTagFlowRelationshipsResponseCollection';
import { GetTagGroupResponse } from './getTagGroupResponse';
import { GetTagGroupResponseCollection } from './getTagGroupResponseCollection';
import { GetTagGroupResponseCollectionDataInner } from './getTagGroupResponseCollectionDataInner';
import { GetTagGroupResponseCollectionDataInnerAllOf } from './getTagGroupResponseCollectionDataInnerAllOf';
import { GetTagGroupTagRelationshipsResponseCollection } from './getTagGroupTagRelationshipsResponseCollection';
import { GetTagGroupTagRelationshipsResponseCollectionDataInner } from './getTagGroupTagRelationshipsResponseCollectionDataInner';
import { GetTagListRelationshipsResponseCollection } from './getTagListRelationshipsResponseCollection';
import { GetTagResponseCollection } from './getTagResponseCollection';
import { GetTagResponseCollectionCompoundDocument } from './getTagResponseCollectionCompoundDocument';
import { GetTagResponseCollectionDataInner } from './getTagResponseCollectionDataInner';
import { GetTagResponseCollectionDataInnerAllOf } from './getTagResponseCollectionDataInnerAllOf';
import { GetTagResponseCollectionDataInnerAllOfRelationships } from './getTagResponseCollectionDataInnerAllOfRelationships';
import { GetTagResponseCollectionDataInnerAllOfRelationshipsCampaigns } from './getTagResponseCollectionDataInnerAllOfRelationshipsCampaigns';
import { GetTagResponseCollectionDataInnerAllOfRelationshipsFlows } from './getTagResponseCollectionDataInnerAllOfRelationshipsFlows';
import { GetTagResponseCollectionDataInnerAllOfRelationshipsFlowsDataInner } from './getTagResponseCollectionDataInnerAllOfRelationshipsFlowsDataInner';
import { GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroup } from './getTagResponseCollectionDataInnerAllOfRelationshipsTagGroup';
import { GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroupData } from './getTagResponseCollectionDataInnerAllOfRelationshipsTagGroupData';
import { GetTagResponseCompoundDocument } from './getTagResponseCompoundDocument';
import { GetTagSegmentRelationshipsResponseCollection } from './getTagSegmentRelationshipsResponseCollection';
import { GetTagTagGroupRelationshipsResponse } from './getTagTagGroupRelationshipsResponse';
import { GetTagTagGroupRelationshipsResponseData } from './getTagTagGroupRelationshipsResponseData';
import { GetTemplateResponse } from './getTemplateResponse';
import { GetTemplateResponseCollection } from './getTemplateResponseCollection';
import { ListCreateQuery } from './listCreateQuery';
import { ListCreateQueryResourceObject } from './listCreateQueryResourceObject';
import { ListEnum } from './listEnum';
import { ListListResponseObjectResource } from './listListResponseObjectResource';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListMembersAddQuery } from './listMembersAddQuery';
import { ListMembersDeleteQuery } from './listMembersDeleteQuery';
import { ListPartialUpdateQuery } from './listPartialUpdateQuery';
import { ListPartialUpdateQueryResourceObject } from './listPartialUpdateQueryResourceObject';
import { ListPartialUpdateQueryResourceObjectAttributes } from './listPartialUpdateQueryResourceObjectAttributes';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';
import { ListRetrieveResponseObjectResourceExtended } from './listRetrieveResponseObjectResourceExtended';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { MetricAggregateEnum } from './metricAggregateEnum';
import { MetricAggregateQuery } from './metricAggregateQuery';
import { MetricAggregateQueryResourceObject } from './metricAggregateQueryResourceObject';
import { MetricAggregateQueryResourceObjectAttributes } from './metricAggregateQueryResourceObjectAttributes';
import { MetricAggregateRowDTO } from './metricAggregateRowDTO';
import { MetricCreateQueryResourceObject } from './metricCreateQueryResourceObject';
import { MetricCreateQueryResourceObjectAttributes } from './metricCreateQueryResourceObjectAttributes';
import { MetricEnum } from './metricEnum';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { MetricResponseObjectResourceAttributes } from './metricResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
import { OnsiteProfileCreateQueryResourceObject } from './onsiteProfileCreateQueryResourceObject';
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { OnsiteProfileMeta } from './onsiteProfileMeta';
import { PatchCampaignMessageResponse } from './patchCampaignMessageResponse';
import { PatchCampaignMessageResponseData } from './patchCampaignMessageResponseData';
import { PatchCampaignMessageResponseDataAttributes } from './patchCampaignMessageResponseDataAttributes';
import { PatchCampaignMessageResponseDataAttributesContent } from './patchCampaignMessageResponseDataAttributesContent';
import { PatchCampaignMessageResponseDataRelationships } from './patchCampaignMessageResponseDataRelationships';
import { PatchCampaignMessageResponseDataRelationshipsCampaign } from './patchCampaignMessageResponseDataRelationshipsCampaign';
import { PatchCampaignMessageResponseDataRelationshipsCampaignData } from './patchCampaignMessageResponseDataRelationshipsCampaignData';
import { PatchCampaignMessageResponseDataRelationshipsTemplate } from './patchCampaignMessageResponseDataRelationshipsTemplate';
import { PatchCampaignMessageResponseDataRelationshipsTemplateData } from './patchCampaignMessageResponseDataRelationshipsTemplateData';
import { PatchCampaignResponse } from './patchCampaignResponse';
import { PatchCatalogCategoryResponse } from './patchCatalogCategoryResponse';
import { PatchCatalogItemResponse } from './patchCatalogItemResponse';
import { PatchCatalogItemResponseData } from './patchCatalogItemResponseData';
import { PatchCatalogItemResponseDataAttributes } from './patchCatalogItemResponseDataAttributes';
import { PatchCatalogVariantResponse } from './patchCatalogVariantResponse';
import { PatchFlowResponse } from './patchFlowResponse';
import { PatchFlowResponseData } from './patchFlowResponseData';
import { PatchListPartialUpdateResponse } from './patchListPartialUpdateResponse';
import { PatchListPartialUpdateResponseData } from './patchListPartialUpdateResponseData';
import { PatchProfileResponse } from './patchProfileResponse';
import { PatchProfileResponseData } from './patchProfileResponseData';
import { PatchProfileResponseDataAttributes } from './patchProfileResponseDataAttributes';
import { PatchProfileResponseDataRelationships } from './patchProfileResponseDataRelationships';
import { PatchProfileResponseDataRelationshipsLists } from './patchProfileResponseDataRelationshipsLists';
import { PatchProfileResponseDataRelationshipsListsDataInner } from './patchProfileResponseDataRelationshipsListsDataInner';
import { PatchProfileResponseDataRelationshipsSegments } from './patchProfileResponseDataRelationshipsSegments';
import { PatchProfileResponseDataRelationshipsSegmentsDataInner } from './patchProfileResponseDataRelationshipsSegmentsDataInner';
import { PatchSegmentPartialUpdateResponse } from './patchSegmentPartialUpdateResponse';
import { PatchSegmentPartialUpdateResponseData } from './patchSegmentPartialUpdateResponseData';
import { PatchTagGroupResponse } from './patchTagGroupResponse';
import { PatchTemplateResponse } from './patchTemplateResponse';
import { PatchTemplateResponseData } from './patchTemplateResponseData';
import { PatchTemplateResponseDataAttributes } from './patchTemplateResponseDataAttributes';
import { PostCampaignMessageResponse } from './postCampaignMessageResponse';
import { PostCampaignRecipientEstimationJobResponse } from './postCampaignRecipientEstimationJobResponse';
import { PostCampaignRecipientEstimationJobResponseData } from './postCampaignRecipientEstimationJobResponseData';
import { PostCampaignRecipientEstimationJobResponseDataAttributes } from './postCampaignRecipientEstimationJobResponseDataAttributes';
import { PostCampaignResponse } from './postCampaignResponse';
import { PostCampaignResponseData } from './postCampaignResponseData';
import { PostCampaignResponseDataRelationships } from './postCampaignResponseDataRelationships';
import { PostCampaignResponseDataRelationshipsCampaignMessages } from './postCampaignResponseDataRelationshipsCampaignMessages';
import { PostCampaignResponseDataRelationshipsCampaignMessagesDataInner } from './postCampaignResponseDataRelationshipsCampaignMessagesDataInner';
import { PostCampaignSendJobResponse } from './postCampaignSendJobResponse';
import { PostCampaignSendJobResponseData } from './postCampaignSendJobResponseData';
import { PostCampaignSendJobResponseDataAttributes } from './postCampaignSendJobResponseDataAttributes';
import { PostCatalogCategoryCreateJobResponse } from './postCatalogCategoryCreateJobResponse';
import { PostCatalogCategoryCreateJobResponseData } from './postCatalogCategoryCreateJobResponseData';
import { PostCatalogCategoryDeleteJobResponse } from './postCatalogCategoryDeleteJobResponse';
import { PostCatalogCategoryDeleteJobResponseData } from './postCatalogCategoryDeleteJobResponseData';
import { PostCatalogCategoryResponse } from './postCatalogCategoryResponse';
import { PostCatalogCategoryResponseData } from './postCatalogCategoryResponseData';
import { PostCatalogCategoryResponseDataAttributes } from './postCatalogCategoryResponseDataAttributes';
import { PostCatalogCategoryResponseDataRelationships } from './postCatalogCategoryResponseDataRelationships';
import { PostCatalogCategoryResponseDataRelationshipsItems } from './postCatalogCategoryResponseDataRelationshipsItems';
import { PostCatalogCategoryResponseDataRelationshipsItemsDataInner } from './postCatalogCategoryResponseDataRelationshipsItemsDataInner';
import { PostCatalogCategoryUpdateJobResponse } from './postCatalogCategoryUpdateJobResponse';
import { PostCatalogCategoryUpdateJobResponseData } from './postCatalogCategoryUpdateJobResponseData';
import { PostCatalogItemCreateJobResponse } from './postCatalogItemCreateJobResponse';
import { PostCatalogItemCreateJobResponseData } from './postCatalogItemCreateJobResponseData';
import { PostCatalogItemDeleteJobResponse } from './postCatalogItemDeleteJobResponse';
import { PostCatalogItemDeleteJobResponseData } from './postCatalogItemDeleteJobResponseData';
import { PostCatalogItemResponse } from './postCatalogItemResponse';
import { PostCatalogItemUpdateJobResponse } from './postCatalogItemUpdateJobResponse';
import { PostCatalogItemUpdateJobResponseData } from './postCatalogItemUpdateJobResponseData';
import { PostCatalogVariantCreateJobResponse } from './postCatalogVariantCreateJobResponse';
import { PostCatalogVariantCreateJobResponseData } from './postCatalogVariantCreateJobResponseData';
import { PostCatalogVariantCreateJobResponseDataRelationships } from './postCatalogVariantCreateJobResponseDataRelationships';
import { PostCatalogVariantCreateJobResponseDataRelationshipsVariants } from './postCatalogVariantCreateJobResponseDataRelationshipsVariants';
import { PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner } from './postCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner';
import { PostCatalogVariantDeleteJobResponse } from './postCatalogVariantDeleteJobResponse';
import { PostCatalogVariantDeleteJobResponseData } from './postCatalogVariantDeleteJobResponseData';
import { PostCatalogVariantResponse } from './postCatalogVariantResponse';
import { PostCatalogVariantResponseData } from './postCatalogVariantResponseData';
import { PostCatalogVariantResponseDataAttributes } from './postCatalogVariantResponseDataAttributes';
import { PostCatalogVariantUpdateJobResponse } from './postCatalogVariantUpdateJobResponse';
import { PostCatalogVariantUpdateJobResponseData } from './postCatalogVariantUpdateJobResponseData';
import { PostListCreateResponse } from './postListCreateResponse';
import { PostMetricAggregateResponse } from './postMetricAggregateResponse';
import { PostMetricAggregateResponseData } from './postMetricAggregateResponseData';
import { PostMetricAggregateResponseDataAttributes } from './postMetricAggregateResponseDataAttributes';
import { PostProfileResponse } from './postProfileResponse';
import { PostTagGroupResponse } from './postTagGroupResponse';
import { PostTagResponse } from './postTagResponse';
import { PostTagResponseData } from './postTagResponseData';
import { PostTemplateResponse } from './postTemplateResponse';
import { PredictiveAnalytics } from './predictiveAnalytics';
import { ProfileCreateQuery } from './profileCreateQuery';
import { ProfileCreateQueryResourceObject } from './profileCreateQueryResourceObject';
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
import { ProfileIdentifierDTOResourceObject } from './profileIdentifierDTOResourceObject';
import { ProfileIdentifierDTOResourceObjectAttributes } from './profileIdentifierDTOResourceObjectAttributes';
import { ProfileLocation } from './profileLocation';
import { ProfileLocationLatitude } from './profileLocationLatitude';
import { ProfileLocationLongitude } from './profileLocationLongitude';
import { ProfileMeta } from './profileMeta';
import { ProfileMetaPatchProperties } from './profileMetaPatchProperties';
import { ProfileMetaPatchPropertiesUnset } from './profileMetaPatchPropertiesUnset';
import { ProfilePartialUpdateQuery } from './profilePartialUpdateQuery';
import { ProfilePartialUpdateQueryResourceObject } from './profilePartialUpdateQueryResourceObject';
import { ProfilePartialUpdateQueryResourceObjectAttributes } from './profilePartialUpdateQueryResourceObjectAttributes';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { ProfileResponseObjectResourceExtended } from './profileResponseObjectResourceExtended';
import { ProfileResponseObjectResourceExtendedAttributes } from './profileResponseObjectResourceExtendedAttributes';
import { ProfileResponseObjectResourceExtendedAttributesAllOf } from './profileResponseObjectResourceExtendedAttributesAllOf';
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
import { RelationshipLinks } from './relationshipLinks';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { SMSChannel } from './sMSChannel';
import { SMSContentSubObject } from './sMSContentSubObject';
import { SMSContentSubObjectCreate } from './sMSContentSubObjectCreate';
import { SMSMarketing } from './sMSMarketing';
import { SMSMessageContent } from './sMSMessageContent';
import { SMSRenderOptions } from './sMSRenderOptions';
import { SMSSendOptionsSubObject } from './sMSSendOptionsSubObject';
import { SMSTrackingOptions } from './sMSTrackingOptions';
import { SMSTrackingOptionsSubObject } from './sMSTrackingOptionsSubObject';
import { STOScheduleOptions } from './sTOScheduleOptions';
import { SegmentEnum } from './segmentEnum';
import { SegmentListResponseObjectResource } from './segmentListResponseObjectResource';
import { SegmentPartialUpdateQuery } from './segmentPartialUpdateQuery';
import { SegmentPartialUpdateQueryResourceObject } from './segmentPartialUpdateQueryResourceObject';
import { SegmentPartialUpdateQueryResourceObjectAttributes } from './segmentPartialUpdateQueryResourceObjectAttributes';
import { SegmentResponseObjectResource } from './segmentResponseObjectResource';
import { SegmentResponseObjectResourceAttributes } from './segmentResponseObjectResourceAttributes';
import { SegmentRetrieveResponseObjectResourceAttributes } from './segmentRetrieveResponseObjectResourceAttributes';
import { SegmentRetrieveResponseObjectResourceExtended } from './segmentRetrieveResponseObjectResourceExtended';
import { SegmentRetrieveResponseObjectResourceExtendedAttributes } from './segmentRetrieveResponseObjectResourceExtendedAttributes';
import { SegmentRetrieveResponseObjectResourceExtendedAttributesAllOf } from './segmentRetrieveResponseObjectResourceExtendedAttributesAllOf';
import { SendOptions } from './sendOptions';
import { SendStrategySubObject } from './sendStrategySubObject';
import { SendTimeSubObject } from './sendTimeSubObject';
import { ServerBISSubscriptionCreateQuery } from './serverBISSubscriptionCreateQuery';
import { ServerBISSubscriptionCreateQueryResourceObject } from './serverBISSubscriptionCreateQueryResourceObject';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import { StaticScheduleOptions } from './staticScheduleOptions';
import { StreetAddress } from './streetAddress';
import { SubscriptionChannels } from './subscriptionChannels';
import { SubscriptionCreateJobCreateQuery } from './subscriptionCreateJobCreateQuery';
import { SubscriptionCreateJobCreateQueryResourceObject } from './subscriptionCreateJobCreateQueryResourceObject';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributes } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionDeleteJobCreateQuery } from './subscriptionDeleteJobCreateQuery';
import { SubscriptionDeleteJobCreateQueryResourceObject } from './subscriptionDeleteJobCreateQueryResourceObject';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributes } from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationships } from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import { Subscriptions } from './subscriptions';
import { SuppressionCreateJobCreateQuery } from './suppressionCreateJobCreateQuery';
import { SuppressionCreateJobCreateQueryResourceObject } from './suppressionCreateJobCreateQueryResourceObject';
import { SuppressionCreateJobCreateQueryResourceObjectAttributes } from './suppressionCreateJobCreateQueryResourceObjectAttributes';
import { SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles } from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SuppressionDeleteJobCreateQuery } from './suppressionDeleteJobCreateQuery';
import { SuppressionDeleteJobCreateQueryResourceObject } from './suppressionDeleteJobCreateQueryResourceObject';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributes } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { TagCampaignOp } from './tagCampaignOp';
import { TagCreateQuery } from './tagCreateQuery';
import { TagCreateQueryResourceObject } from './tagCreateQueryResourceObject';
import { TagCreateQueryResourceObjectRelationships } from './tagCreateQueryResourceObjectRelationships';
import { TagCreateQueryResourceObjectRelationshipsTagGroup } from './tagCreateQueryResourceObjectRelationshipsTagGroup';
import { TagEnum } from './tagEnum';
import { TagFlowOp } from './tagFlowOp';
import { TagGroupCreateQuery } from './tagGroupCreateQuery';
import { TagGroupCreateQueryResourceObject } from './tagGroupCreateQueryResourceObject';
import { TagGroupCreateQueryResourceObjectAttributes } from './tagGroupCreateQueryResourceObjectAttributes';
import { TagGroupEnum } from './tagGroupEnum';
import { TagGroupResponseObjectResource } from './tagGroupResponseObjectResource';
import { TagGroupUpdateQuery } from './tagGroupUpdateQuery';
import { TagGroupUpdateQueryResourceObject } from './tagGroupUpdateQueryResourceObject';
import { TagGroupUpdateQueryResourceObjectAttributes } from './tagGroupUpdateQueryResourceObjectAttributes';
import { TagListOp } from './tagListOp';
import { TagResponseObjectResource } from './tagResponseObjectResource';
import { TagSegmentOp } from './tagSegmentOp';
import { TagUpdateQuery } from './tagUpdateQuery';
import { TagUpdateQueryResourceObject } from './tagUpdateQueryResourceObject';
import { TagUpdateQueryResourceObjectAttributes } from './tagUpdateQueryResourceObjectAttributes';
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
import { TemplateUpdateQuery } from './templateUpdateQuery';
import { TemplateUpdateQueryResourceObject } from './templateUpdateQueryResourceObject';
import { TemplateUpdateQueryResourceObjectAttributes } from './templateUpdateQueryResourceObjectAttributes';
import { ThrottledScheduleOptions } from './throttledScheduleOptions';
import { UTMParamsSubObject } from './uTMParamsSubObject';
import { UtmParamInfo } from './utmParamInfo';

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
        "AccountEnum": AccountEnum,
        "BackInStockSubscriptionEnum": BackInStockSubscriptionEnum,
        "CampaignEnum": CampaignEnum,
        "CampaignMessageEnum": CampaignMessageEnum,
        "CampaignRecipientEstimationEnum": CampaignRecipientEstimationEnum,
        "CampaignRecipientEstimationJobEnum": CampaignRecipientEstimationJobEnum,
        "CampaignSendJobEnum": CampaignSendJobEnum,
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
        "CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogVariantEnum": CatalogVariantEnum,
        "CatalogVariantUpdateJobResponseObjectResourceAttributes.StatusEnum": CatalogVariantUpdateJobResponseObjectResourceAttributes.StatusEnum,
        "CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "DataPrivacyDeletionJobEnum": DataPrivacyDeletionJobEnum,
        "EventEnum": EventEnum,
        "FlowActionEnum": FlowActionEnum,
        "FlowEnum": FlowEnum,
        "FlowMessageEnum": FlowMessageEnum,
        "ListEnum": ListEnum,
        "MetricAggregateEnum": MetricAggregateEnum,
        "MetricAggregateQueryResourceObjectAttributes.SortEnum": MetricAggregateQueryResourceObjectAttributes.SortEnum,
        "MetricAggregateQueryResourceObjectAttributes.IntervalEnum": MetricAggregateQueryResourceObjectAttributes.IntervalEnum,
        "MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum": MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum,
        "MetricAggregateQueryResourceObjectAttributes.ByEnum": MetricAggregateQueryResourceObjectAttributes.ByEnum,
        "MetricEnum": MetricEnum,
        "PostCampaignRecipientEstimationJobResponseDataAttributes.StatusEnum": PostCampaignRecipientEstimationJobResponseDataAttributes.StatusEnum,
        "PostCampaignSendJobResponseDataAttributes.StatusEnum": PostCampaignSendJobResponseDataAttributes.StatusEnum,
        "PostCatalogVariantResponseDataAttributes.InventoryPolicyEnum": PostCatalogVariantResponseDataAttributes.InventoryPolicyEnum,
        "ProfileEnum": ProfileEnum,
        "ProfileSubscriptionBulkCreateJobEnum": ProfileSubscriptionBulkCreateJobEnum,
        "ProfileSubscriptionBulkDeleteJobEnum": ProfileSubscriptionBulkDeleteJobEnum,
        "ProfileSuppressionBulkCreateJobEnum": ProfileSuppressionBulkCreateJobEnum,
        "ProfileSuppressionBulkDeleteJobEnum": ProfileSuppressionBulkDeleteJobEnum,
        "SegmentEnum": SegmentEnum,
        "ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum": ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum,
        "SubscriptionChannels.SmsEnum": SubscriptionChannels.SmsEnum,
        "SubscriptionChannels.EmailEnum": SubscriptionChannels.EmailEnum,
        "TagEnum": TagEnum,
        "TagGroupEnum": TagGroupEnum,
        "TemplateEnum": TemplateEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountResponseObjectResource": AccountResponseObjectResource,
    "AccountResponseObjectResourceAttributes": AccountResponseObjectResourceAttributes,
    "AudiencesSubObject": AudiencesSubObject,
    "CampaignCloneQuery": CampaignCloneQuery,
    "CampaignCloneQueryResourceObject": CampaignCloneQueryResourceObject,
    "CampaignCloneQueryResourceObjectAttributes": CampaignCloneQueryResourceObjectAttributes,
    "CampaignCreateQuery": CampaignCreateQuery,
    "CampaignCreateQueryResourceObject": CampaignCreateQueryResourceObject,
    "CampaignCreateQueryResourceObjectAttributes": CampaignCreateQueryResourceObjectAttributes,
    "CampaignCreateQueryResourceObjectAttributesCampaignMessages": CampaignCreateQueryResourceObjectAttributesCampaignMessages,
    "CampaignCreateQueryResourceObjectAttributesSendOptions": CampaignCreateQueryResourceObjectAttributesSendOptions,
    "CampaignCreateQueryResourceObjectAttributesTrackingOptions": CampaignCreateQueryResourceObjectAttributesTrackingOptions,
    "CampaignMessageAssignTemplateQuery": CampaignMessageAssignTemplateQuery,
    "CampaignMessageAssignTemplateQueryResourceObject": CampaignMessageAssignTemplateQueryResourceObject,
    "CampaignMessageAssignTemplateQueryResourceObjectAttributes": CampaignMessageAssignTemplateQueryResourceObjectAttributes,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationships": CampaignMessageAssignTemplateQueryResourceObjectRelationships,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData,
    "CampaignMessageCreateQueryResourceObject": CampaignMessageCreateQueryResourceObject,
    "CampaignMessageCreateQueryResourceObjectAttributes": CampaignMessageCreateQueryResourceObjectAttributes,
    "CampaignMessageCreateQueryResourceObjectAttributesContent": CampaignMessageCreateQueryResourceObjectAttributesContent,
    "CampaignMessagePartialUpdateQuery": CampaignMessagePartialUpdateQuery,
    "CampaignMessagePartialUpdateQueryResourceObject": CampaignMessagePartialUpdateQueryResourceObject,
    "CampaignMessagePartialUpdateQueryResourceObjectAttributes": CampaignMessagePartialUpdateQueryResourceObjectAttributes,
    "CampaignMessageResponseObjectResource": CampaignMessageResponseObjectResource,
    "CampaignPartialUpdateQuery": CampaignPartialUpdateQuery,
    "CampaignPartialUpdateQueryResourceObject": CampaignPartialUpdateQueryResourceObject,
    "CampaignPartialUpdateQueryResourceObjectAttributes": CampaignPartialUpdateQueryResourceObjectAttributes,
    "CampaignRecipientEstimationJobCreateQuery": CampaignRecipientEstimationJobCreateQuery,
    "CampaignRecipientEstimationJobCreateQueryResourceObject": CampaignRecipientEstimationJobCreateQueryResourceObject,
    "CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes": CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes,
    "CampaignRecipientEstimationJobResponseObjectResource": CampaignRecipientEstimationJobResponseObjectResource,
    "CampaignRecipientEstimationResponseObjectResource": CampaignRecipientEstimationResponseObjectResource,
    "CampaignRecipientEstimationResponseObjectResourceAttributes": CampaignRecipientEstimationResponseObjectResourceAttributes,
    "CampaignResponseObjectResource": CampaignResponseObjectResource,
    "CampaignResponseObjectResourceAttributes": CampaignResponseObjectResourceAttributes,
    "CampaignSendJobCreateQuery": CampaignSendJobCreateQuery,
    "CampaignSendJobCreateQueryResourceObject": CampaignSendJobCreateQueryResourceObject,
    "CampaignSendJobCreateQueryResourceObjectAttributes": CampaignSendJobCreateQueryResourceObjectAttributes,
    "CampaignSendJobPartialUpdateQuery": CampaignSendJobPartialUpdateQuery,
    "CampaignSendJobPartialUpdateQueryResourceObject": CampaignSendJobPartialUpdateQueryResourceObject,
    "CampaignSendJobPartialUpdateQueryResourceObjectAttributes": CampaignSendJobPartialUpdateQueryResourceObjectAttributes,
    "CampaignSendJobResponseObjectResource": CampaignSendJobResponseObjectResource,
    "CatalogCategoryCreateJobCreateQuery": CatalogCategoryCreateJobCreateQuery,
    "CatalogCategoryCreateJobCreateQueryResourceObject": CatalogCategoryCreateJobCreateQueryResourceObject,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributes": CatalogCategoryCreateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryCreateJobResponseObjectResource": CatalogCategoryCreateJobResponseObjectResource,
    "CatalogCategoryCreateQuery": CatalogCategoryCreateQuery,
    "CatalogCategoryCreateQueryResourceObject": CatalogCategoryCreateQueryResourceObject,
    "CatalogCategoryCreateQueryResourceObjectAttributes": CatalogCategoryCreateQueryResourceObjectAttributes,
    "CatalogCategoryDeleteJobCreateQuery": CatalogCategoryDeleteJobCreateQuery,
    "CatalogCategoryDeleteJobCreateQueryResourceObject": CatalogCategoryDeleteJobCreateQueryResourceObject,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryDeleteJobResponseObjectResource": CatalogCategoryDeleteJobResponseObjectResource,
    "CatalogCategoryDeleteQueryResourceObject": CatalogCategoryDeleteQueryResourceObject,
    "CatalogCategoryItemOp": CatalogCategoryItemOp,
    "CatalogCategoryResponseObjectResource": CatalogCategoryResponseObjectResource,
    "CatalogCategoryUpdateJobCreateQuery": CatalogCategoryUpdateJobCreateQuery,
    "CatalogCategoryUpdateJobCreateQueryResourceObject": CatalogCategoryUpdateJobCreateQueryResourceObject,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryUpdateJobResponseObjectResource": CatalogCategoryUpdateJobResponseObjectResource,
    "CatalogCategoryUpdateQuery": CatalogCategoryUpdateQuery,
    "CatalogCategoryUpdateQueryResourceObject": CatalogCategoryUpdateQueryResourceObject,
    "CatalogCategoryUpdateQueryResourceObjectAttributes": CatalogCategoryUpdateQueryResourceObjectAttributes,
    "CatalogCategoryUpdateQueryResourceObjectRelationships": CatalogCategoryUpdateQueryResourceObjectRelationships,
    "CatalogCategoryUpdateQueryResourceObjectRelationshipsItems": CatalogCategoryUpdateQueryResourceObjectRelationshipsItems,
    "CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsDataInner": CatalogCategoryUpdateQueryResourceObjectRelationshipsItemsDataInner,
    "CatalogItemCategoryOp": CatalogItemCategoryOp,
    "CatalogItemCreateJobCreateQuery": CatalogItemCreateJobCreateQuery,
    "CatalogItemCreateJobCreateQueryResourceObject": CatalogItemCreateJobCreateQueryResourceObject,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributes": CatalogItemCreateJobCreateQueryResourceObjectAttributes,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributesItems": CatalogItemCreateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemCreateJobResponseObjectResource": CatalogItemCreateJobResponseObjectResource,
    "CatalogItemCreateQuery": CatalogItemCreateQuery,
    "CatalogItemCreateQueryResourceObject": CatalogItemCreateQueryResourceObject,
    "CatalogItemCreateQueryResourceObjectAttributes": CatalogItemCreateQueryResourceObjectAttributes,
    "CatalogItemDeleteJobCreateQuery": CatalogItemDeleteJobCreateQuery,
    "CatalogItemDeleteJobCreateQueryResourceObject": CatalogItemDeleteJobCreateQueryResourceObject,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributes": CatalogItemDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems": CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemDeleteJobResponseObjectResource": CatalogItemDeleteJobResponseObjectResource,
    "CatalogItemDeleteQueryResourceObject": CatalogItemDeleteQueryResourceObject,
    "CatalogItemResponseObjectResource": CatalogItemResponseObjectResource,
    "CatalogItemUpdateJobCreateQuery": CatalogItemUpdateJobCreateQuery,
    "CatalogItemUpdateJobCreateQueryResourceObject": CatalogItemUpdateJobCreateQueryResourceObject,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributes": CatalogItemUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems": CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemUpdateJobResponseObjectResource": CatalogItemUpdateJobResponseObjectResource,
    "CatalogItemUpdateQuery": CatalogItemUpdateQuery,
    "CatalogItemUpdateQueryResourceObject": CatalogItemUpdateQueryResourceObject,
    "CatalogItemUpdateQueryResourceObjectAttributes": CatalogItemUpdateQueryResourceObjectAttributes,
    "CatalogItemUpdateQueryResourceObjectRelationships": CatalogItemUpdateQueryResourceObjectRelationships,
    "CatalogItemUpdateQueryResourceObjectRelationshipsCategories": CatalogItemUpdateQueryResourceObjectRelationshipsCategories,
    "CatalogJobErrorPayload": CatalogJobErrorPayload,
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
    "CatalogVariantDeleteJobCreateQuery": CatalogVariantDeleteJobCreateQuery,
    "CatalogVariantDeleteJobCreateQueryResourceObject": CatalogVariantDeleteJobCreateQueryResourceObject,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributes": CatalogVariantDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants": CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantDeleteJobResponseObjectResource": CatalogVariantDeleteJobResponseObjectResource,
    "CatalogVariantDeleteQueryResourceObject": CatalogVariantDeleteQueryResourceObject,
    "CatalogVariantResponseObjectResource": CatalogVariantResponseObjectResource,
    "CatalogVariantUpdateJobCreateQuery": CatalogVariantUpdateJobCreateQuery,
    "CatalogVariantUpdateJobCreateQueryResourceObject": CatalogVariantUpdateJobCreateQueryResourceObject,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributes": CatalogVariantUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantUpdateJobResponseObjectResource": CatalogVariantUpdateJobResponseObjectResource,
    "CatalogVariantUpdateJobResponseObjectResourceAttributes": CatalogVariantUpdateJobResponseObjectResourceAttributes,
    "CatalogVariantUpdateQuery": CatalogVariantUpdateQuery,
    "CatalogVariantUpdateQueryResourceObject": CatalogVariantUpdateQueryResourceObject,
    "CatalogVariantUpdateQueryResourceObjectAttributes": CatalogVariantUpdateQueryResourceObjectAttributes,
    "CollectionLinks": CollectionLinks,
    "ContactInformation": ContactInformation,
    "DataPrivacyCreateDeletionJobQuery": DataPrivacyCreateDeletionJobQuery,
    "DataPrivacyCreateDeletionJobQueryResourceObject": DataPrivacyCreateDeletionJobQueryResourceObject,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes": DataPrivacyCreateDeletionJobQueryResourceObjectAttributes,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile": DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile,
    "DataPrivacyProfileQueryResourceObject": DataPrivacyProfileQueryResourceObject,
    "DataPrivacyProfileQueryResourceObjectAttributes": DataPrivacyProfileQueryResourceObjectAttributes,
    "DeleteTagGroupResponse": DeleteTagGroupResponse,
    "DeleteTagGroupResponseData": DeleteTagGroupResponseData,
    "DeleteTagGroupResponseDataAttributes": DeleteTagGroupResponseDataAttributes,
    "DeleteTagGroupResponseDataRelationships": DeleteTagGroupResponseDataRelationships,
    "EmailChannel": EmailChannel,
    "EmailContentSubObject": EmailContentSubObject,
    "EmailMarketing": EmailMarketing,
    "EmailMarketingListSuppression": EmailMarketingListSuppression,
    "EmailMarketingSuppression": EmailMarketingSuppression,
    "EmailMessageContent": EmailMessageContent,
    "EmailSendOptionsSubObject": EmailSendOptionsSubObject,
    "EmailTrackingOptions": EmailTrackingOptions,
    "EmailTrackingOptionsSubObject": EmailTrackingOptionsSubObject,
    "ErrorSource": ErrorSource,
    "EventCreateQueryV2": EventCreateQueryV2,
    "EventCreateQueryV2ResourceObject": EventCreateQueryV2ResourceObject,
    "EventCreateQueryV2ResourceObjectAttributes": EventCreateQueryV2ResourceObjectAttributes,
    "EventCreateQueryV2ResourceObjectAttributesMetric": EventCreateQueryV2ResourceObjectAttributesMetric,
    "EventCreateQueryV2ResourceObjectAttributesProfile": EventCreateQueryV2ResourceObjectAttributesProfile,
    "EventResponseObjectResource": EventResponseObjectResource,
    "EventResponseObjectResourceAttributes": EventResponseObjectResourceAttributes,
    "FlowActionResponseObjectResource": FlowActionResponseObjectResource,
    "FlowActionResponseObjectResourceAttributes": FlowActionResponseObjectResourceAttributes,
    "FlowActionResponseObjectResourceAttributesTrackingOptions": FlowActionResponseObjectResourceAttributesTrackingOptions,
    "FlowMessageResponseObjectResource": FlowMessageResponseObjectResource,
    "FlowMessageResponseObjectResourceAttributes": FlowMessageResponseObjectResourceAttributes,
    "FlowMessageResponseObjectResourceAttributesContent": FlowMessageResponseObjectResourceAttributesContent,
    "FlowResponseObjectResource": FlowResponseObjectResource,
    "FlowResponseObjectResourceAttributes": FlowResponseObjectResourceAttributes,
    "FlowUpdateQuery": FlowUpdateQuery,
    "FlowUpdateQueryResourceObject": FlowUpdateQueryResourceObject,
    "FlowUpdateQueryResourceObjectAttributes": FlowUpdateQueryResourceObjectAttributes,
    "GetAccountResponse": GetAccountResponse,
    "GetAccountResponseCollection": GetAccountResponseCollection,
    "GetCampaignMessageCampaignRelationshipListResponse": GetCampaignMessageCampaignRelationshipListResponse,
    "GetCampaignMessageResponse": GetCampaignMessageResponse,
    "GetCampaignMessageResponseCollectionCompoundDocument": GetCampaignMessageResponseCollectionCompoundDocument,
    "GetCampaignMessageResponseCollectionCompoundDocumentDataInner": GetCampaignMessageResponseCollectionCompoundDocumentDataInner,
    "GetCampaignMessageResponseCollectionCompoundDocumentDataInnerAllOf": GetCampaignMessageResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetCampaignMessageResponseCollectionCompoundDocumentIncludedInner": GetCampaignMessageResponseCollectionCompoundDocumentIncludedInner,
    "GetCampaignMessageResponseCompoundDocument": GetCampaignMessageResponseCompoundDocument,
    "GetCampaignMessageTemplateRelationshipListResponse": GetCampaignMessageTemplateRelationshipListResponse,
    "GetCampaignMessagesRelationshipListResponseCollection": GetCampaignMessagesRelationshipListResponseCollection,
    "GetCampaignRecipientEstimationJobResponse": GetCampaignRecipientEstimationJobResponse,
    "GetCampaignRecipientEstimationResponse": GetCampaignRecipientEstimationResponse,
    "GetCampaignResponseCollectionCompoundDocument": GetCampaignResponseCollectionCompoundDocument,
    "GetCampaignResponseCompoundDocument": GetCampaignResponseCompoundDocument,
    "GetCampaignResponseCompoundDocumentData": GetCampaignResponseCompoundDocumentData,
    "GetCampaignResponseCompoundDocumentDataAllOf": GetCampaignResponseCompoundDocumentDataAllOf,
    "GetCampaignResponseCompoundDocumentIncludedInner": GetCampaignResponseCompoundDocumentIncludedInner,
    "GetCampaignSendJobResponse": GetCampaignSendJobResponse,
    "GetCampaignTagRelationshipListResponseCollection": GetCampaignTagRelationshipListResponseCollection,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocument": GetCatalogCategoryCreateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryCreateJobResponseCompoundDocument": GetCatalogCategoryCreateJobResponseCompoundDocument,
    "GetCatalogCategoryCreateJobResponseCompoundDocumentData": GetCatalogCategoryCreateJobResponseCompoundDocumentData,
    "GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOf": GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOf,
    "GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationships": GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationships,
    "GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategories": GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategories,
    "GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategoriesDataInner": GetCatalogCategoryCreateJobResponseCompoundDocumentDataAllOfRelationshipsCategoriesDataInner,
    "GetCatalogCategoryDeleteJobResponse": GetCatalogCategoryDeleteJobResponse,
    "GetCatalogCategoryDeleteJobResponseCollection": GetCatalogCategoryDeleteJobResponseCollection,
    "GetCatalogCategoryDeleteJobResponseData": GetCatalogCategoryDeleteJobResponseData,
    "GetCatalogCategoryItemListResponseCollection": GetCatalogCategoryItemListResponseCollection,
    "GetCatalogCategoryResponse": GetCatalogCategoryResponse,
    "GetCatalogCategoryResponseCollection": GetCatalogCategoryResponseCollection,
    "GetCatalogCategoryResponseData": GetCatalogCategoryResponseData,
    "GetCatalogCategoryResponseDataAllOf": GetCatalogCategoryResponseDataAllOf,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryUpdateJobResponseCompoundDocument": GetCatalogCategoryUpdateJobResponseCompoundDocument,
    "GetCatalogCategoryUpdateJobResponseCompoundDocumentData": GetCatalogCategoryUpdateJobResponseCompoundDocumentData,
    "GetCatalogItemCategoryListResponseCollection": GetCatalogItemCategoryListResponseCollection,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocument": GetCatalogItemCreateJobResponseCollectionCompoundDocument,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemCreateJobResponseCompoundDocument": GetCatalogItemCreateJobResponseCompoundDocument,
    "GetCatalogItemDeleteJobResponse": GetCatalogItemDeleteJobResponse,
    "GetCatalogItemDeleteJobResponseCollection": GetCatalogItemDeleteJobResponseCollection,
    "GetCatalogItemDeleteJobResponseData": GetCatalogItemDeleteJobResponseData,
    "GetCatalogItemDeleteJobResponseDataAllOf": GetCatalogItemDeleteJobResponseDataAllOf,
    "GetCatalogItemDeleteJobResponseDataAllOfRelationships": GetCatalogItemDeleteJobResponseDataAllOfRelationships,
    "GetCatalogItemDeleteJobResponseDataAllOfRelationshipsItems": GetCatalogItemDeleteJobResponseDataAllOfRelationshipsItems,
    "GetCatalogItemResponseCollectionCompoundDocument": GetCatalogItemResponseCollectionCompoundDocument,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOf": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogItemResponseCompoundDocument": GetCatalogItemResponseCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocument": GetCatalogItemUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemUpdateJobResponseCompoundDocument": GetCatalogItemUpdateJobResponseCompoundDocument,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocument": GetCatalogVariantCreateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOf": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetCatalogVariantCreateJobResponseCompoundDocument": GetCatalogVariantCreateJobResponseCompoundDocument,
    "GetCatalogVariantDeleteJobResponse": GetCatalogVariantDeleteJobResponse,
    "GetCatalogVariantDeleteJobResponseCollection": GetCatalogVariantDeleteJobResponseCollection,
    "GetCatalogVariantDeleteJobResponseData": GetCatalogVariantDeleteJobResponseData,
    "GetCatalogVariantResponse": GetCatalogVariantResponse,
    "GetCatalogVariantResponseCollection": GetCatalogVariantResponseCollection,
    "GetCatalogVariantResponseData": GetCatalogVariantResponseData,
    "GetCatalogVariantResponseDataAllOf": GetCatalogVariantResponseDataAllOf,
    "GetCatalogVariantResponseDataAllOfRelationships": GetCatalogVariantResponseDataAllOfRelationships,
    "GetCatalogVariantResponseDataAllOfRelationshipsItem": GetCatalogVariantResponseDataAllOfRelationshipsItem,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocument": GetCatalogVariantUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantUpdateJobResponseCompoundDocument": GetCatalogVariantUpdateJobResponseCompoundDocument,
    "GetCatalogVariantUpdateJobResponseCompoundDocumentData": GetCatalogVariantUpdateJobResponseCompoundDocumentData,
    "GetCreateVariantsJobs5XXResponse": GetCreateVariantsJobs5XXResponse,
    "GetCreateVariantsJobs5XXResponseErrorsInner": GetCreateVariantsJobs5XXResponseErrorsInner,
    "GetCreateVariantsJobs5XXResponseErrorsInnerSource": GetCreateVariantsJobs5XXResponseErrorsInnerSource,
    "GetEventMetricsRelationshipListResponse": GetEventMetricsRelationshipListResponse,
    "GetEventProfilesRelationshipListResponse": GetEventProfilesRelationshipListResponse,
    "GetEventResponseCollectionCompoundDocument": GetEventResponseCollectionCompoundDocument,
    "GetEventResponseCollectionCompoundDocumentDataInner": GetEventResponseCollectionCompoundDocumentDataInner,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOf": GetEventResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData,
    "GetEventResponseCollectionCompoundDocumentIncludedInner": GetEventResponseCollectionCompoundDocumentIncludedInner,
    "GetEventResponseCompoundDocument": GetEventResponseCompoundDocument,
    "GetFlowActionFlowMessageRelationshipResponseCollection": GetFlowActionFlowMessageRelationshipResponseCollection,
    "GetFlowActionFlowRelationshipResponse": GetFlowActionFlowRelationshipResponse,
    "GetFlowActionResponse": GetFlowActionResponse,
    "GetFlowActionResponseCollection": GetFlowActionResponseCollection,
    "GetFlowActionResponseCompoundDocument": GetFlowActionResponseCompoundDocument,
    "GetFlowActionResponseCompoundDocumentIncludedInner": GetFlowActionResponseCompoundDocumentIncludedInner,
    "GetFlowActionResponseData": GetFlowActionResponseData,
    "GetFlowActionResponseDataAllOf": GetFlowActionResponseDataAllOf,
    "GetFlowActionResponseDataAllOfRelationships": GetFlowActionResponseDataAllOfRelationships,
    "GetFlowActionResponseDataAllOfRelationshipsFlow": GetFlowActionResponseDataAllOfRelationshipsFlow,
    "GetFlowActionResponseDataAllOfRelationshipsFlowMessages": GetFlowActionResponseDataAllOfRelationshipsFlowMessages,
    "GetFlowActionResponseDataAllOfRelationshipsFlowMessagesDataInner": GetFlowActionResponseDataAllOfRelationshipsFlowMessagesDataInner,
    "GetFlowFlowActionRelationshipListResponseCollection": GetFlowFlowActionRelationshipListResponseCollection,
    "GetFlowMessageFlowActionRelationshipResponse": GetFlowMessageFlowActionRelationshipResponse,
    "GetFlowMessageResponseCollection": GetFlowMessageResponseCollection,
    "GetFlowMessageResponseCollectionDataInner": GetFlowMessageResponseCollectionDataInner,
    "GetFlowMessageResponseCollectionDataInnerAllOf": GetFlowMessageResponseCollectionDataInnerAllOf,
    "GetFlowMessageResponseCollectionDataInnerAllOfRelationships": GetFlowMessageResponseCollectionDataInnerAllOfRelationships,
    "GetFlowMessageResponseCollectionDataInnerAllOfRelationshipsFlowAction": GetFlowMessageResponseCollectionDataInnerAllOfRelationshipsFlowAction,
    "GetFlowMessageResponseCompoundDocument": GetFlowMessageResponseCompoundDocument,
    "GetFlowResponse": GetFlowResponse,
    "GetFlowResponseCollectionCompoundDocument": GetFlowResponseCollectionCompoundDocument,
    "GetFlowResponseCompoundDocument": GetFlowResponseCompoundDocument,
    "GetFlowResponseCompoundDocumentData": GetFlowResponseCompoundDocumentData,
    "GetFlowResponseCompoundDocumentDataAllOf": GetFlowResponseCompoundDocumentDataAllOf,
    "GetFlowResponseCompoundDocumentDataAllOfRelationships": GetFlowResponseCompoundDocumentDataAllOfRelationships,
    "GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActions": GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActions,
    "GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActionsDataInner": GetFlowResponseCompoundDocumentDataAllOfRelationshipsFlowActionsDataInner,
    "GetFlowResponseCompoundDocumentDataAllOfRelationshipsTags": GetFlowResponseCompoundDocumentDataAllOfRelationshipsTags,
    "GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner": GetFlowResponseCompoundDocumentDataAllOfRelationshipsTagsDataInner,
    "GetFlowResponseCompoundDocumentIncludedInner": GetFlowResponseCompoundDocumentIncludedInner,
    "GetFlowTagRelationshipListResponseCollection": GetFlowTagRelationshipListResponseCollection,
    "GetListListResponseCollectionCompoundDocument": GetListListResponseCollectionCompoundDocument,
    "GetListListResponseCollectionCompoundDocumentDataInner": GetListListResponseCollectionCompoundDocumentDataInner,
    "GetListRelationshipsResponseCollection": GetListRelationshipsResponseCollection,
    "GetListResponseCollection": GetListResponseCollection,
    "GetListResponseCollectionDataInner": GetListResponseCollectionDataInner,
    "GetListRetrieveResponseCompoundDocument": GetListRetrieveResponseCompoundDocument,
    "GetListRetrieveResponseCompoundDocumentData": GetListRetrieveResponseCompoundDocumentData,
    "GetListTagRelationshipListResponseCollection": GetListTagRelationshipListResponseCollection,
    "GetMetricResponse": GetMetricResponse,
    "GetMetricResponseCollection": GetMetricResponseCollection,
    "GetProfileListRelationshipsResponseCollection": GetProfileListRelationshipsResponseCollection,
    "GetProfileResponse": GetProfileResponse,
    "GetProfileResponseCollection": GetProfileResponseCollection,
    "GetProfileResponseCollectionCompoundDocument": GetProfileResponseCollectionCompoundDocument,
    "GetProfileResponseCollectionCompoundDocumentDataInner": GetProfileResponseCollectionCompoundDocumentDataInner,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOf": GetProfileResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsSegments": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsSegments,
    "GetProfileResponseCompoundDocument": GetProfileResponseCompoundDocument,
    "GetProfileResponseCompoundDocumentData": GetProfileResponseCompoundDocumentData,
    "GetProfileResponseCompoundDocumentDataAllOf": GetProfileResponseCompoundDocumentDataAllOf,
    "GetProfileResponseCompoundDocumentIncludedInner": GetProfileResponseCompoundDocumentIncludedInner,
    "GetProfileSegmentRelationshipsResponseCollection": GetProfileSegmentRelationshipsResponseCollection,
    "GetSegmentListResponseCollectionCompoundDocument": GetSegmentListResponseCollectionCompoundDocument,
    "GetSegmentListResponseCollectionCompoundDocumentDataInner": GetSegmentListResponseCollectionCompoundDocumentDataInner,
    "GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOf": GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOf,
    "GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles": GetSegmentListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfiles,
    "GetSegmentRelationshipsResponseCollection": GetSegmentRelationshipsResponseCollection,
    "GetSegmentResponseCollection": GetSegmentResponseCollection,
    "GetSegmentResponseCollectionDataInner": GetSegmentResponseCollectionDataInner,
    "GetSegmentRetrieveResponseCompoundDocument": GetSegmentRetrieveResponseCompoundDocument,
    "GetSegmentRetrieveResponseCompoundDocumentData": GetSegmentRetrieveResponseCompoundDocumentData,
    "GetSegmentTagRelationshipListResponseCollection": GetSegmentTagRelationshipListResponseCollection,
    "GetTagCampaignRelationshipsResponseCollection": GetTagCampaignRelationshipsResponseCollection,
    "GetTagFlowRelationshipsResponseCollection": GetTagFlowRelationshipsResponseCollection,
    "GetTagGroupResponse": GetTagGroupResponse,
    "GetTagGroupResponseCollection": GetTagGroupResponseCollection,
    "GetTagGroupResponseCollectionDataInner": GetTagGroupResponseCollectionDataInner,
    "GetTagGroupResponseCollectionDataInnerAllOf": GetTagGroupResponseCollectionDataInnerAllOf,
    "GetTagGroupTagRelationshipsResponseCollection": GetTagGroupTagRelationshipsResponseCollection,
    "GetTagGroupTagRelationshipsResponseCollectionDataInner": GetTagGroupTagRelationshipsResponseCollectionDataInner,
    "GetTagListRelationshipsResponseCollection": GetTagListRelationshipsResponseCollection,
    "GetTagResponseCollection": GetTagResponseCollection,
    "GetTagResponseCollectionCompoundDocument": GetTagResponseCollectionCompoundDocument,
    "GetTagResponseCollectionDataInner": GetTagResponseCollectionDataInner,
    "GetTagResponseCollectionDataInnerAllOf": GetTagResponseCollectionDataInnerAllOf,
    "GetTagResponseCollectionDataInnerAllOfRelationships": GetTagResponseCollectionDataInnerAllOfRelationships,
    "GetTagResponseCollectionDataInnerAllOfRelationshipsCampaigns": GetTagResponseCollectionDataInnerAllOfRelationshipsCampaigns,
    "GetTagResponseCollectionDataInnerAllOfRelationshipsFlows": GetTagResponseCollectionDataInnerAllOfRelationshipsFlows,
    "GetTagResponseCollectionDataInnerAllOfRelationshipsFlowsDataInner": GetTagResponseCollectionDataInnerAllOfRelationshipsFlowsDataInner,
    "GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroup": GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroup,
    "GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroupData": GetTagResponseCollectionDataInnerAllOfRelationshipsTagGroupData,
    "GetTagResponseCompoundDocument": GetTagResponseCompoundDocument,
    "GetTagSegmentRelationshipsResponseCollection": GetTagSegmentRelationshipsResponseCollection,
    "GetTagTagGroupRelationshipsResponse": GetTagTagGroupRelationshipsResponse,
    "GetTagTagGroupRelationshipsResponseData": GetTagTagGroupRelationshipsResponseData,
    "GetTemplateResponse": GetTemplateResponse,
    "GetTemplateResponseCollection": GetTemplateResponseCollection,
    "ListCreateQuery": ListCreateQuery,
    "ListCreateQueryResourceObject": ListCreateQueryResourceObject,
    "ListListResponseObjectResource": ListListResponseObjectResource,
    "ListListResponseObjectResourceAttributes": ListListResponseObjectResourceAttributes,
    "ListMembersAddQuery": ListMembersAddQuery,
    "ListMembersDeleteQuery": ListMembersDeleteQuery,
    "ListPartialUpdateQuery": ListPartialUpdateQuery,
    "ListPartialUpdateQueryResourceObject": ListPartialUpdateQueryResourceObject,
    "ListPartialUpdateQueryResourceObjectAttributes": ListPartialUpdateQueryResourceObjectAttributes,
    "ListResponseObjectResource": ListResponseObjectResource,
    "ListRetrieveResponseObjectResourceAttributes": ListRetrieveResponseObjectResourceAttributes,
    "ListRetrieveResponseObjectResourceExtended": ListRetrieveResponseObjectResourceExtended,
    "ListRetrieveResponseObjectResourceExtendedAttributes": ListRetrieveResponseObjectResourceExtendedAttributes,
    "MetricAggregateQuery": MetricAggregateQuery,
    "MetricAggregateQueryResourceObject": MetricAggregateQueryResourceObject,
    "MetricAggregateQueryResourceObjectAttributes": MetricAggregateQueryResourceObjectAttributes,
    "MetricAggregateRowDTO": MetricAggregateRowDTO,
    "MetricCreateQueryResourceObject": MetricCreateQueryResourceObject,
    "MetricCreateQueryResourceObjectAttributes": MetricCreateQueryResourceObjectAttributes,
    "MetricResponseObjectResource": MetricResponseObjectResource,
    "MetricResponseObjectResourceAttributes": MetricResponseObjectResourceAttributes,
    "ObjectLinks": ObjectLinks,
    "OnsiteProfileCreateQueryResourceObject": OnsiteProfileCreateQueryResourceObject,
    "OnsiteProfileCreateQueryResourceObjectAttributes": OnsiteProfileCreateQueryResourceObjectAttributes,
    "OnsiteProfileMeta": OnsiteProfileMeta,
    "PatchCampaignMessageResponse": PatchCampaignMessageResponse,
    "PatchCampaignMessageResponseData": PatchCampaignMessageResponseData,
    "PatchCampaignMessageResponseDataAttributes": PatchCampaignMessageResponseDataAttributes,
    "PatchCampaignMessageResponseDataAttributesContent": PatchCampaignMessageResponseDataAttributesContent,
    "PatchCampaignMessageResponseDataRelationships": PatchCampaignMessageResponseDataRelationships,
    "PatchCampaignMessageResponseDataRelationshipsCampaign": PatchCampaignMessageResponseDataRelationshipsCampaign,
    "PatchCampaignMessageResponseDataRelationshipsCampaignData": PatchCampaignMessageResponseDataRelationshipsCampaignData,
    "PatchCampaignMessageResponseDataRelationshipsTemplate": PatchCampaignMessageResponseDataRelationshipsTemplate,
    "PatchCampaignMessageResponseDataRelationshipsTemplateData": PatchCampaignMessageResponseDataRelationshipsTemplateData,
    "PatchCampaignResponse": PatchCampaignResponse,
    "PatchCatalogCategoryResponse": PatchCatalogCategoryResponse,
    "PatchCatalogItemResponse": PatchCatalogItemResponse,
    "PatchCatalogItemResponseData": PatchCatalogItemResponseData,
    "PatchCatalogItemResponseDataAttributes": PatchCatalogItemResponseDataAttributes,
    "PatchCatalogVariantResponse": PatchCatalogVariantResponse,
    "PatchFlowResponse": PatchFlowResponse,
    "PatchFlowResponseData": PatchFlowResponseData,
    "PatchListPartialUpdateResponse": PatchListPartialUpdateResponse,
    "PatchListPartialUpdateResponseData": PatchListPartialUpdateResponseData,
    "PatchProfileResponse": PatchProfileResponse,
    "PatchProfileResponseData": PatchProfileResponseData,
    "PatchProfileResponseDataAttributes": PatchProfileResponseDataAttributes,
    "PatchProfileResponseDataRelationships": PatchProfileResponseDataRelationships,
    "PatchProfileResponseDataRelationshipsLists": PatchProfileResponseDataRelationshipsLists,
    "PatchProfileResponseDataRelationshipsListsDataInner": PatchProfileResponseDataRelationshipsListsDataInner,
    "PatchProfileResponseDataRelationshipsSegments": PatchProfileResponseDataRelationshipsSegments,
    "PatchProfileResponseDataRelationshipsSegmentsDataInner": PatchProfileResponseDataRelationshipsSegmentsDataInner,
    "PatchSegmentPartialUpdateResponse": PatchSegmentPartialUpdateResponse,
    "PatchSegmentPartialUpdateResponseData": PatchSegmentPartialUpdateResponseData,
    "PatchTagGroupResponse": PatchTagGroupResponse,
    "PatchTemplateResponse": PatchTemplateResponse,
    "PatchTemplateResponseData": PatchTemplateResponseData,
    "PatchTemplateResponseDataAttributes": PatchTemplateResponseDataAttributes,
    "PostCampaignMessageResponse": PostCampaignMessageResponse,
    "PostCampaignRecipientEstimationJobResponse": PostCampaignRecipientEstimationJobResponse,
    "PostCampaignRecipientEstimationJobResponseData": PostCampaignRecipientEstimationJobResponseData,
    "PostCampaignRecipientEstimationJobResponseDataAttributes": PostCampaignRecipientEstimationJobResponseDataAttributes,
    "PostCampaignResponse": PostCampaignResponse,
    "PostCampaignResponseData": PostCampaignResponseData,
    "PostCampaignResponseDataRelationships": PostCampaignResponseDataRelationships,
    "PostCampaignResponseDataRelationshipsCampaignMessages": PostCampaignResponseDataRelationshipsCampaignMessages,
    "PostCampaignResponseDataRelationshipsCampaignMessagesDataInner": PostCampaignResponseDataRelationshipsCampaignMessagesDataInner,
    "PostCampaignSendJobResponse": PostCampaignSendJobResponse,
    "PostCampaignSendJobResponseData": PostCampaignSendJobResponseData,
    "PostCampaignSendJobResponseDataAttributes": PostCampaignSendJobResponseDataAttributes,
    "PostCatalogCategoryCreateJobResponse": PostCatalogCategoryCreateJobResponse,
    "PostCatalogCategoryCreateJobResponseData": PostCatalogCategoryCreateJobResponseData,
    "PostCatalogCategoryDeleteJobResponse": PostCatalogCategoryDeleteJobResponse,
    "PostCatalogCategoryDeleteJobResponseData": PostCatalogCategoryDeleteJobResponseData,
    "PostCatalogCategoryResponse": PostCatalogCategoryResponse,
    "PostCatalogCategoryResponseData": PostCatalogCategoryResponseData,
    "PostCatalogCategoryResponseDataAttributes": PostCatalogCategoryResponseDataAttributes,
    "PostCatalogCategoryResponseDataRelationships": PostCatalogCategoryResponseDataRelationships,
    "PostCatalogCategoryResponseDataRelationshipsItems": PostCatalogCategoryResponseDataRelationshipsItems,
    "PostCatalogCategoryResponseDataRelationshipsItemsDataInner": PostCatalogCategoryResponseDataRelationshipsItemsDataInner,
    "PostCatalogCategoryUpdateJobResponse": PostCatalogCategoryUpdateJobResponse,
    "PostCatalogCategoryUpdateJobResponseData": PostCatalogCategoryUpdateJobResponseData,
    "PostCatalogItemCreateJobResponse": PostCatalogItemCreateJobResponse,
    "PostCatalogItemCreateJobResponseData": PostCatalogItemCreateJobResponseData,
    "PostCatalogItemDeleteJobResponse": PostCatalogItemDeleteJobResponse,
    "PostCatalogItemDeleteJobResponseData": PostCatalogItemDeleteJobResponseData,
    "PostCatalogItemResponse": PostCatalogItemResponse,
    "PostCatalogItemUpdateJobResponse": PostCatalogItemUpdateJobResponse,
    "PostCatalogItemUpdateJobResponseData": PostCatalogItemUpdateJobResponseData,
    "PostCatalogVariantCreateJobResponse": PostCatalogVariantCreateJobResponse,
    "PostCatalogVariantCreateJobResponseData": PostCatalogVariantCreateJobResponseData,
    "PostCatalogVariantCreateJobResponseDataRelationships": PostCatalogVariantCreateJobResponseDataRelationships,
    "PostCatalogVariantCreateJobResponseDataRelationshipsVariants": PostCatalogVariantCreateJobResponseDataRelationshipsVariants,
    "PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner": PostCatalogVariantCreateJobResponseDataRelationshipsVariantsDataInner,
    "PostCatalogVariantDeleteJobResponse": PostCatalogVariantDeleteJobResponse,
    "PostCatalogVariantDeleteJobResponseData": PostCatalogVariantDeleteJobResponseData,
    "PostCatalogVariantResponse": PostCatalogVariantResponse,
    "PostCatalogVariantResponseData": PostCatalogVariantResponseData,
    "PostCatalogVariantResponseDataAttributes": PostCatalogVariantResponseDataAttributes,
    "PostCatalogVariantUpdateJobResponse": PostCatalogVariantUpdateJobResponse,
    "PostCatalogVariantUpdateJobResponseData": PostCatalogVariantUpdateJobResponseData,
    "PostListCreateResponse": PostListCreateResponse,
    "PostMetricAggregateResponse": PostMetricAggregateResponse,
    "PostMetricAggregateResponseData": PostMetricAggregateResponseData,
    "PostMetricAggregateResponseDataAttributes": PostMetricAggregateResponseDataAttributes,
    "PostProfileResponse": PostProfileResponse,
    "PostTagGroupResponse": PostTagGroupResponse,
    "PostTagResponse": PostTagResponse,
    "PostTagResponseData": PostTagResponseData,
    "PostTemplateResponse": PostTemplateResponse,
    "PredictiveAnalytics": PredictiveAnalytics,
    "ProfileCreateQuery": ProfileCreateQuery,
    "ProfileCreateQueryResourceObject": ProfileCreateQueryResourceObject,
    "ProfileCreateQueryResourceObjectAttributes": ProfileCreateQueryResourceObjectAttributes,
    "ProfileIdentifierDTOResourceObject": ProfileIdentifierDTOResourceObject,
    "ProfileIdentifierDTOResourceObjectAttributes": ProfileIdentifierDTOResourceObjectAttributes,
    "ProfileLocation": ProfileLocation,
    "ProfileLocationLatitude": ProfileLocationLatitude,
    "ProfileLocationLongitude": ProfileLocationLongitude,
    "ProfileMeta": ProfileMeta,
    "ProfileMetaPatchProperties": ProfileMetaPatchProperties,
    "ProfileMetaPatchPropertiesUnset": ProfileMetaPatchPropertiesUnset,
    "ProfilePartialUpdateQuery": ProfilePartialUpdateQuery,
    "ProfilePartialUpdateQueryResourceObject": ProfilePartialUpdateQueryResourceObject,
    "ProfilePartialUpdateQueryResourceObjectAttributes": ProfilePartialUpdateQueryResourceObjectAttributes,
    "ProfileResponseObjectResource": ProfileResponseObjectResource,
    "ProfileResponseObjectResourceAttributes": ProfileResponseObjectResourceAttributes,
    "ProfileResponseObjectResourceExtended": ProfileResponseObjectResourceExtended,
    "ProfileResponseObjectResourceExtendedAttributes": ProfileResponseObjectResourceExtendedAttributes,
    "ProfileResponseObjectResourceExtendedAttributesAllOf": ProfileResponseObjectResourceExtendedAttributesAllOf,
    "ProfileSubscriptionCreateQueryResourceObject": ProfileSubscriptionCreateQueryResourceObject,
    "ProfileSubscriptionCreateQueryResourceObjectAttributes": ProfileSubscriptionCreateQueryResourceObjectAttributes,
    "ProfileSubscriptionDeleteQueryResourceObject": ProfileSubscriptionDeleteQueryResourceObject,
    "ProfileSubscriptionDeleteQueryResourceObjectAttributes": ProfileSubscriptionDeleteQueryResourceObjectAttributes,
    "ProfileSuppressionCreateQueryResourceObject": ProfileSuppressionCreateQueryResourceObject,
    "ProfileSuppressionCreateQueryResourceObjectAttributes": ProfileSuppressionCreateQueryResourceObjectAttributes,
    "ProfileSuppressionDeleteQueryResourceObject": ProfileSuppressionDeleteQueryResourceObject,
    "ProfileSuppressionDeleteQueryResourceObjectAttributes": ProfileSuppressionDeleteQueryResourceObjectAttributes,
    "RelationshipLinks": RelationshipLinks,
    "RenderOptionsSubObject": RenderOptionsSubObject,
    "SMSChannel": SMSChannel,
    "SMSContentSubObject": SMSContentSubObject,
    "SMSContentSubObjectCreate": SMSContentSubObjectCreate,
    "SMSMarketing": SMSMarketing,
    "SMSMessageContent": SMSMessageContent,
    "SMSRenderOptions": SMSRenderOptions,
    "SMSSendOptionsSubObject": SMSSendOptionsSubObject,
    "SMSTrackingOptions": SMSTrackingOptions,
    "SMSTrackingOptionsSubObject": SMSTrackingOptionsSubObject,
    "STOScheduleOptions": STOScheduleOptions,
    "SegmentListResponseObjectResource": SegmentListResponseObjectResource,
    "SegmentPartialUpdateQuery": SegmentPartialUpdateQuery,
    "SegmentPartialUpdateQueryResourceObject": SegmentPartialUpdateQueryResourceObject,
    "SegmentPartialUpdateQueryResourceObjectAttributes": SegmentPartialUpdateQueryResourceObjectAttributes,
    "SegmentResponseObjectResource": SegmentResponseObjectResource,
    "SegmentResponseObjectResourceAttributes": SegmentResponseObjectResourceAttributes,
    "SegmentRetrieveResponseObjectResourceAttributes": SegmentRetrieveResponseObjectResourceAttributes,
    "SegmentRetrieveResponseObjectResourceExtended": SegmentRetrieveResponseObjectResourceExtended,
    "SegmentRetrieveResponseObjectResourceExtendedAttributes": SegmentRetrieveResponseObjectResourceExtendedAttributes,
    "SegmentRetrieveResponseObjectResourceExtendedAttributesAllOf": SegmentRetrieveResponseObjectResourceExtendedAttributesAllOf,
    "SendOptions": SendOptions,
    "SendStrategySubObject": SendStrategySubObject,
    "SendTimeSubObject": SendTimeSubObject,
    "ServerBISSubscriptionCreateQuery": ServerBISSubscriptionCreateQuery,
    "ServerBISSubscriptionCreateQueryResourceObject": ServerBISSubscriptionCreateQueryResourceObject,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributes": ServerBISSubscriptionCreateQueryResourceObjectAttributes,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile": ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationships": ServerBISSubscriptionCreateQueryResourceObjectRelationships,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant,
    "StaticScheduleOptions": StaticScheduleOptions,
    "StreetAddress": StreetAddress,
    "SubscriptionChannels": SubscriptionChannels,
    "SubscriptionCreateJobCreateQuery": SubscriptionCreateJobCreateQuery,
    "SubscriptionCreateJobCreateQueryResourceObject": SubscriptionCreateJobCreateQueryResourceObject,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributes": SubscriptionCreateJobCreateQueryResourceObjectAttributes,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles": SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionDeleteJobCreateQuery": SubscriptionDeleteJobCreateQuery,
    "SubscriptionDeleteJobCreateQueryResourceObject": SubscriptionDeleteJobCreateQueryResourceObject,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributes": SubscriptionDeleteJobCreateQueryResourceObjectAttributes,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles": SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationships": SubscriptionDeleteJobCreateQueryResourceObjectRelationships,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData,
    "Subscriptions": Subscriptions,
    "SuppressionCreateJobCreateQuery": SuppressionCreateJobCreateQuery,
    "SuppressionCreateJobCreateQueryResourceObject": SuppressionCreateJobCreateQueryResourceObject,
    "SuppressionCreateJobCreateQueryResourceObjectAttributes": SuppressionCreateJobCreateQueryResourceObjectAttributes,
    "SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles": SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SuppressionDeleteJobCreateQuery": SuppressionDeleteJobCreateQuery,
    "SuppressionDeleteJobCreateQueryResourceObject": SuppressionDeleteJobCreateQueryResourceObject,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributes": SuppressionDeleteJobCreateQueryResourceObjectAttributes,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles": SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "TagCampaignOp": TagCampaignOp,
    "TagCreateQuery": TagCreateQuery,
    "TagCreateQueryResourceObject": TagCreateQueryResourceObject,
    "TagCreateQueryResourceObjectRelationships": TagCreateQueryResourceObjectRelationships,
    "TagCreateQueryResourceObjectRelationshipsTagGroup": TagCreateQueryResourceObjectRelationshipsTagGroup,
    "TagFlowOp": TagFlowOp,
    "TagGroupCreateQuery": TagGroupCreateQuery,
    "TagGroupCreateQueryResourceObject": TagGroupCreateQueryResourceObject,
    "TagGroupCreateQueryResourceObjectAttributes": TagGroupCreateQueryResourceObjectAttributes,
    "TagGroupResponseObjectResource": TagGroupResponseObjectResource,
    "TagGroupUpdateQuery": TagGroupUpdateQuery,
    "TagGroupUpdateQueryResourceObject": TagGroupUpdateQueryResourceObject,
    "TagGroupUpdateQueryResourceObjectAttributes": TagGroupUpdateQueryResourceObjectAttributes,
    "TagListOp": TagListOp,
    "TagResponseObjectResource": TagResponseObjectResource,
    "TagSegmentOp": TagSegmentOp,
    "TagUpdateQuery": TagUpdateQuery,
    "TagUpdateQueryResourceObject": TagUpdateQueryResourceObject,
    "TagUpdateQueryResourceObjectAttributes": TagUpdateQueryResourceObjectAttributes,
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
    "TemplateUpdateQuery": TemplateUpdateQuery,
    "TemplateUpdateQueryResourceObject": TemplateUpdateQueryResourceObject,
    "TemplateUpdateQueryResourceObjectAttributes": TemplateUpdateQueryResourceObjectAttributes,
    "ThrottledScheduleOptions": ThrottledScheduleOptions,
    "UTMParamsSubObject": UTMParamsSubObject,
    "UtmParamInfo": UtmParamInfo,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
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

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
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
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

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
        type = ObjectSerializer.findCorrectType(data, type);
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: AxiosRequestConfig): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}


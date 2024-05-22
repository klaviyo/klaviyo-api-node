import { AxiosRequestConfig } from 'axios';
import {ReadStream} from "fs";

export * from './aPIJobErrorPayload';
export * from './accountEnum';
export * from './accountResponseObjectResource';
export * from './accountResponseObjectResourceAttributes';
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
export * from './audiencesSubObject';
export * from './backInStockSubscriptionEnum';
export * from './baseEventCreateQueryResourceObject';
export * from './baseEventCreateQueryResourceObjectAttributes';
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
export * from './campaignMessageResponseObjectResourceAttributes';
export * from './campaignMessageResponseObjectResourceAttributesContent';
export * from './campaignPartialUpdateQuery';
export * from './campaignPartialUpdateQueryResourceObject';
export * from './campaignPartialUpdateQueryResourceObjectAttributes';
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
export * from './campaignResponseObjectResourceAttributesTrackingOptions';
export * from './campaignSendJobCreateQuery';
export * from './campaignSendJobCreateQueryResourceObject';
export * from './campaignSendJobEnum';
export * from './campaignSendJobPartialUpdateQuery';
export * from './campaignSendJobPartialUpdateQueryResourceObject';
export * from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
export * from './campaignSendJobResponseObjectResource';
export * from './campaignSendJobResponseObjectResourceAttributes';
export * from './campaignValuesReportEnum';
export * from './campaignValuesRequestDTO';
export * from './campaignValuesRequestDTOResourceObject';
export * from './campaignValuesRequestDTOResourceObjectAttributes';
export * from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
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
export * from './collectionLinks';
export * from './contactInformation';
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
export * from './customTimeframe';
export * from './dataPrivacyCreateDeletionJobQuery';
export * from './dataPrivacyCreateDeletionJobQueryResourceObject';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
export * from './dataPrivacyDeletionJobEnum';
export * from './dataPrivacyProfileQueryResourceObject';
export * from './dataPrivacyProfileQueryResourceObjectAttributes';
export * from './deleteTagGroupResponse';
export * from './deviceMetadata';
export * from './emailChannel';
export * from './emailContentSubObject';
export * from './emailMarketing';
export * from './emailMarketingListSuppression';
export * from './emailMarketingSuppression';
export * from './emailMessageContent';
export * from './emailSendOptionsSubObject';
export * from './emailSubscriptionParameters';
export * from './emailTrackingOptions';
export * from './emailTrackingOptionsSubObject';
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
export * from './flowSeriesReportEnum';
export * from './flowSeriesRequestDTO';
export * from './flowSeriesRequestDTOResourceObject';
export * from './flowSeriesRequestDTOResourceObjectAttributes';
export * from './flowUpdateQuery';
export * from './flowUpdateQueryResourceObject';
export * from './flowUpdateQueryResourceObjectAttributes';
export * from './flowValuesReportEnum';
export * from './flowValuesRequestDTO';
export * from './flowValuesRequestDTOResourceObject';
export * from './flowValuesRequestDTOResourceObjectAttributes';
export * from './getAccountResponse';
export * from './getAccountResponseCollection';
export * from './getAccounts4XXResponse';
export * from './getAccounts4XXResponseErrorsInner';
export * from './getAccounts4XXResponseErrorsInnerSource';
export * from './getCampaignMessageCampaignRelationshipListResponse';
export * from './getCampaignMessageCampaignRelationshipListResponseData';
export * from './getCampaignMessageResponseCollectionCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocumentData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
export * from './getCampaignMessageResponseCompoundDocumentIncludedInner';
export * from './getCampaignMessageTemplateRelationshipListResponse';
export * from './getCampaignMessagesRelationshipListResponseCollection';
export * from './getCampaignMessagesRelationshipListResponseCollectionDataInner';
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
export * from './getCampaignTagRelationshipListResponseCollection';
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
export * from './getCatalogCategoryItemListResponseCollection';
export * from './getCatalogCategoryItemListResponseCollectionDataInner';
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
export * from './getCatalogItemCategoryListResponseCollection';
export * from './getCatalogItemCategoryListResponseCollectionDataInner';
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
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
export * from './getCouponCodeCreateJobResponseCompoundDocument';
export * from './getCouponCodeRelationshipCouponResponse';
export * from './getCouponCodeRelationshipCouponResponseData';
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
export * from './getCouponRelationshipCouponCodesListResponseCollection';
export * from './getCouponRelationshipCouponCodesListResponseCollectionDataInner';
export * from './getCouponResponse';
export * from './getCouponResponseCollection';
export * from './getEventMetricsRelationshipListResponse';
export * from './getEventMetricsRelationshipListResponseData';
export * from './getEventProfilesRelationshipListResponse';
export * from './getEventProfilesRelationshipListResponseData';
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
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
export * from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
export * from './getFlowActionResponseCompoundDocumentIncludedInner';
export * from './getFlowFlowActionRelationshipListResponseCollection';
export * from './getFlowMessageFlowActionRelationshipResponse';
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
export * from './getFlowResponse';
export * from './getFlowResponseCollectionCompoundDocument';
export * from './getFlowResponseCollectionCompoundDocumentDataInner';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
export * from './getFlowResponseCollectionCompoundDocumentIncludedInner';
export * from './getFlowResponseCompoundDocument';
export * from './getFlowResponseData';
export * from './getFlowResponseDataAllOfRelationships';
export * from './getFlowTagRelationshipListResponseCollection';
export * from './getImageResponse';
export * from './getImageResponseCollection';
export * from './getImportErrorResponseCollection';
export * from './getListListResponseCollectionCompoundDocument';
export * from './getListListResponseCollectionCompoundDocumentDataInner';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
export * from './getListMemberResponseCollection';
export * from './getListMemberResponseCollectionDataInner';
export * from './getListRelationshipsResponseCollection';
export * from './getListRelationshipsResponseCollectionDataInner';
export * from './getListResponseCollection';
export * from './getListResponseCollectionDataInner';
export * from './getListResponseCollectionDataInnerAllOfRelationships';
export * from './getListRetrieveResponseCompoundDocument';
export * from './getListRetrieveResponseCompoundDocumentData';
export * from './getListTagRelationshipListResponseCollection';
export * from './getMetricResponse';
export * from './getMetricResponseCollection';
export * from './getProfileImportJobListRelationshipsResponseCollection';
export * from './getProfileImportJobProfileRelationshipsResponseCollection';
export * from './getProfileImportJobResponseCollectionCompoundDocument';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
export * from './getProfileImportJobResponseCompoundDocument';
export * from './getProfileListRelationshipsResponseCollection';
export * from './getProfileResponse';
export * from './getProfileResponseCollection';
export * from './getProfileResponseCollectionCompoundDocument';
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
export * from './getProfileSegmentRelationshipsResponseCollection';
export * from './getSegmentListResponseCollectionCompoundDocument';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInner';
export * from './getSegmentMemberResponseCollection';
export * from './getSegmentMemberResponseCollectionDataInner';
export * from './getSegmentRelationshipsResponseCollection';
export * from './getSegmentResponseCollection';
export * from './getSegmentResponseCollectionDataInner';
export * from './getSegmentRetrieveResponseCompoundDocument';
export * from './getSegmentRetrieveResponseCompoundDocumentData';
export * from './getSegmentTagRelationshipListResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollectionDataInner';
export * from './getTagFlowRelationshipsResponseCollection';
export * from './getTagFlowRelationshipsResponseCollectionDataInner';
export * from './getTagGroupResponse';
export * from './getTagGroupResponseCollection';
export * from './getTagGroupResponseCollectionDataInner';
export * from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
export * from './getTagGroupTagRelationshipsResponseCollection';
export * from './getTagGroupTagRelationshipsResponseCollectionDataInner';
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
export * from './getTagTagGroupRelationshipsResponse';
export * from './getTagTagGroupRelationshipsResponseData';
export * from './getTemplateResponse';
export * from './getTemplateResponseCollection';
export * from './imageCreateQuery';
export * from './imageCreateQueryResourceObject';
export * from './imageCreateQueryResourceObjectAttributes';
export * from './imageEnum';
export * from './imagePartialUpdateQuery';
export * from './imagePartialUpdateQueryResourceObject';
export * from './imagePartialUpdateQueryResourceObjectAttributes';
export * from './imageResponseObjectResource';
export * from './imageResponseObjectResourceAttributes';
export * from './importErrorEnum';
export * from './importErrorResponseObjectResource';
export * from './importErrorResponseObjectResourceAttributes';
export * from './listCreateQuery';
export * from './listCreateQueryResourceObject';
export * from './listCreateQueryResourceObjectAttributes';
export * from './listEnum';
export * from './listListResponseObjectResource';
export * from './listListResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceExtended';
export * from './listMemberResponseObjectResourceExtendedAttributes';
export * from './listMembersAddQuery';
export * from './listMembersDeleteQuery';
export * from './listPartialUpdateQuery';
export * from './listPartialUpdateQueryResourceObject';
export * from './listResponseObjectResource';
export * from './listRetrieveResponseObjectResourceAttributes';
export * from './listRetrieveResponseObjectResourceExtended';
export * from './listRetrieveResponseObjectResourceExtendedAttributes';
export * from './marketingSubscriptionParameters';
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
export * from './onlyRelatedLinks';
export * from './onsiteProfileCreateQueryResourceObject';
export * from './onsiteProfileCreateQueryResourceObjectAttributes';
export * from './onsiteProfileMeta';
export * from './patchCampaignMessageResponse';
export * from './patchCampaignResponse';
export * from './patchCatalogCategoryResponse';
export * from './patchCatalogItemResponse';
export * from './patchCatalogVariantResponse';
export * from './patchCouponCodeResponse';
export * from './patchCouponResponse';
export * from './patchFlowResponse';
export * from './patchFlowResponseData';
export * from './patchImageResponse';
export * from './patchListPartialUpdateResponse';
export * from './patchProfileResponse';
export * from './patchSegmentPartialUpdateResponse';
export * from './patchSegmentPartialUpdateResponseData';
export * from './patchTagGroupResponse';
export * from './patchTemplateResponse';
export * from './postCampaignMessageResponse';
export * from './postCampaignMessageResponseData';
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
export * from './postFlowSeriesResponseDTO';
export * from './postFlowSeriesResponseDTOData';
export * from './postFlowSeriesResponseDTODataAttributes';
export * from './postFlowValuesResponseDTO';
export * from './postFlowValuesResponseDTOData';
export * from './postFlowValuesResponseDTODataAttributes';
export * from './postFlowValuesResponseDTODataRelationships';
export * from './postImageResponse';
export * from './postImageResponseData';
export * from './postListCreateResponse';
export * from './postListCreateResponseData';
export * from './postListCreateResponseDataRelationships';
export * from './postListCreateResponseDataRelationshipsProfiles';
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
export * from './postTagGroupResponse';
export * from './postTagGroupResponseData';
export * from './postTagGroupResponseDataRelationships';
export * from './postTagResponse';
export * from './postTagResponseData';
export * from './postTagResponseDataRelationships';
export * from './postTagResponseDataRelationshipsCampaigns';
export * from './postTagResponseDataRelationshipsFlows';
export * from './postTemplateResponse';
export * from './postTemplateResponseData';
export * from './predictiveAnalytics';
export * from './profileBulkImportJobEnum';
export * from './profileCreateQuery';
export * from './profileCreateQueryResourceObject';
export * from './profileCreateQueryResourceObjectAttributes';
export * from './profileEnum';
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
export * from './profileMergeEnum';
export * from './profileMergeQuery';
export * from './profileMergeQueryResourceObject';
export * from './profileMergeQueryResourceObjectRelationships';
export * from './profileMergeQueryResourceObjectRelationshipsProfiles';
export * from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
export * from './profileMeta';
export * from './profileMetaPatchProperties';
export * from './profilePartialUpdateQuery';
export * from './profilePartialUpdateQueryResourceObject';
export * from './profilePartialUpdateQueryResourceObjectAttributes';
export * from './profileResponseObjectResource';
export * from './profileResponseObjectResourceAttributes';
export * from './profileResponseObjectResourceExtended';
export * from './profileResponseObjectResourceExtendedAttributes';
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
export * from './pushProfileUpsertQueryResourceObject';
export * from './pushProfileUpsertQueryResourceObjectAttributes';
export * from './pushTokenCreateQuery';
export * from './pushTokenCreateQueryResourceObject';
export * from './pushTokenCreateQueryResourceObjectAttributes';
export * from './pushTokenCreateQueryResourceObjectAttributesProfile';
export * from './pushTokenEnum';
export * from './relationshipLinks';
export * from './renderOptionsSubObject';
export * from './sMSChannel';
export * from './sMSContentSubObject';
export * from './sMSContentSubObjectCreate';
export * from './sMSMarketing';
export * from './sMSMessageContent';
export * from './sMSRenderOptions';
export * from './sMSSendOptionsSubObject';
export * from './sMSSubscriptionParameters';
export * from './sMSTrackingOptions';
export * from './sMSTrackingOptionsSubObject';
export * from './sTOScheduleOptions';
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
export * from './sendOptions';
export * from './sendStrategySubObject';
export * from './sendTimeSubObject';
export * from './seriesData';
export * from './serverBISSubscriptionCreateQuery';
export * from './serverBISSubscriptionCreateQueryResourceObject';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
export * from './staticScheduleOptions';
export * from './streetAddress';
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
export * from './templateUpdateQuery';
export * from './templateUpdateQueryResourceObject';
export * from './templateUpdateQueryResourceObjectAttributes';
export * from './throttledScheduleOptions';
export * from './timeframe';
export * from './uTMParamsSubObject';
export * from './utmParamInfo';
export * from './valuesData';

export type RequestFile = ReadStream;


import { APIJobErrorPayload } from './aPIJobErrorPayload';
import { AccountEnum } from './accountEnum';
import { AccountResponseObjectResource } from './accountResponseObjectResource';
import { AccountResponseObjectResourceAttributes } from './accountResponseObjectResourceAttributes';
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
import { AudiencesSubObject } from './audiencesSubObject';
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { BaseEventCreateQueryResourceObject } from './baseEventCreateQueryResourceObject';
import { BaseEventCreateQueryResourceObjectAttributes } from './baseEventCreateQueryResourceObjectAttributes';
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
import { CampaignMessageResponseObjectResourceAttributes } from './campaignMessageResponseObjectResourceAttributes';
import { CampaignMessageResponseObjectResourceAttributesContent } from './campaignMessageResponseObjectResourceAttributesContent';
import { CampaignPartialUpdateQuery } from './campaignPartialUpdateQuery';
import { CampaignPartialUpdateQueryResourceObject } from './campaignPartialUpdateQueryResourceObject';
import { CampaignPartialUpdateQueryResourceObjectAttributes } from './campaignPartialUpdateQueryResourceObjectAttributes';
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
import { CampaignResponseObjectResourceAttributesTrackingOptions } from './campaignResponseObjectResourceAttributesTrackingOptions';
import { CampaignSendJobCreateQuery } from './campaignSendJobCreateQuery';
import { CampaignSendJobCreateQueryResourceObject } from './campaignSendJobCreateQueryResourceObject';
import { CampaignSendJobEnum } from './campaignSendJobEnum';
import { CampaignSendJobPartialUpdateQuery } from './campaignSendJobPartialUpdateQuery';
import { CampaignSendJobPartialUpdateQueryResourceObject } from './campaignSendJobPartialUpdateQueryResourceObject';
import { CampaignSendJobPartialUpdateQueryResourceObjectAttributes } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import { CampaignSendJobResponseObjectResource } from './campaignSendJobResponseObjectResource';
import { CampaignSendJobResponseObjectResourceAttributes } from './campaignSendJobResponseObjectResourceAttributes';
import { CampaignValuesReportEnum } from './campaignValuesReportEnum';
import { CampaignValuesRequestDTO } from './campaignValuesRequestDTO';
import { CampaignValuesRequestDTOResourceObject } from './campaignValuesRequestDTOResourceObject';
import { CampaignValuesRequestDTOResourceObjectAttributes } from './campaignValuesRequestDTOResourceObjectAttributes';
import { CampaignValuesRequestDTOResourceObjectAttributesTimeframe } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
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
import { CollectionLinks } from './collectionLinks';
import { ContactInformation } from './contactInformation';
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
import { CustomTimeframe } from './customTimeframe';
import { DataPrivacyCreateDeletionJobQuery } from './dataPrivacyCreateDeletionJobQuery';
import { DataPrivacyCreateDeletionJobQueryResourceObject } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';
import { DataPrivacyProfileQueryResourceObject } from './dataPrivacyProfileQueryResourceObject';
import { DataPrivacyProfileQueryResourceObjectAttributes } from './dataPrivacyProfileQueryResourceObjectAttributes';
import { DeleteTagGroupResponse } from './deleteTagGroupResponse';
import { DeviceMetadata } from './deviceMetadata';
import { EmailChannel } from './emailChannel';
import { EmailContentSubObject } from './emailContentSubObject';
import { EmailMarketing } from './emailMarketing';
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';
import { EmailMessageContent } from './emailMessageContent';
import { EmailSendOptionsSubObject } from './emailSendOptionsSubObject';
import { EmailSubscriptionParameters } from './emailSubscriptionParameters';
import { EmailTrackingOptions } from './emailTrackingOptions';
import { EmailTrackingOptionsSubObject } from './emailTrackingOptionsSubObject';
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
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { FlowSeriesRequestDTO } from './flowSeriesRequestDTO';
import { FlowSeriesRequestDTOResourceObject } from './flowSeriesRequestDTOResourceObject';
import { FlowSeriesRequestDTOResourceObjectAttributes } from './flowSeriesRequestDTOResourceObjectAttributes';
import { FlowUpdateQuery } from './flowUpdateQuery';
import { FlowUpdateQueryResourceObject } from './flowUpdateQueryResourceObject';
import { FlowUpdateQueryResourceObjectAttributes } from './flowUpdateQueryResourceObjectAttributes';
import { FlowValuesReportEnum } from './flowValuesReportEnum';
import { FlowValuesRequestDTO } from './flowValuesRequestDTO';
import { FlowValuesRequestDTOResourceObject } from './flowValuesRequestDTOResourceObject';
import { FlowValuesRequestDTOResourceObjectAttributes } from './flowValuesRequestDTOResourceObjectAttributes';
import { GetAccountResponse } from './getAccountResponse';
import { GetAccountResponseCollection } from './getAccountResponseCollection';
import { GetAccounts4XXResponse } from './getAccounts4XXResponse';
import { GetAccounts4XXResponseErrorsInner } from './getAccounts4XXResponseErrorsInner';
import { GetAccounts4XXResponseErrorsInnerSource } from './getAccounts4XXResponseErrorsInnerSource';
import { GetCampaignMessageCampaignRelationshipListResponse } from './getCampaignMessageCampaignRelationshipListResponse';
import { GetCampaignMessageCampaignRelationshipListResponseData } from './getCampaignMessageCampaignRelationshipListResponseData';
import { GetCampaignMessageResponseCollectionCompoundDocument } from './getCampaignMessageResponseCollectionCompoundDocument';
import { GetCampaignMessageResponseCompoundDocument } from './getCampaignMessageResponseCompoundDocument';
import { GetCampaignMessageResponseCompoundDocumentData } from './getCampaignMessageResponseCompoundDocumentData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import {  } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import { GetCampaignMessageTemplateRelationshipListResponse } from './getCampaignMessageTemplateRelationshipListResponse';
import { GetCampaignMessagesRelationshipListResponseCollection } from './getCampaignMessagesRelationshipListResponseCollection';
import { GetCampaignMessagesRelationshipListResponseCollectionDataInner } from './getCampaignMessagesRelationshipListResponseCollectionDataInner';
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
import { GetCampaignTagRelationshipListResponseCollection } from './getCampaignTagRelationshipListResponseCollection';
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
import { GetCatalogCategoryItemListResponseCollection } from './getCatalogCategoryItemListResponseCollection';
import { GetCatalogCategoryItemListResponseCollectionDataInner } from './getCatalogCategoryItemListResponseCollectionDataInner';
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
import { GetCatalogItemCategoryListResponseCollection } from './getCatalogItemCategoryListResponseCollection';
import { GetCatalogItemCategoryListResponseCollectionDataInner } from './getCatalogItemCategoryListResponseCollectionDataInner';
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
import { GetCouponCodeCreateJobResponseCollectionCompoundDocument } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import { GetCouponCodeCreateJobResponseCompoundDocument } from './getCouponCodeCreateJobResponseCompoundDocument';
import { GetCouponCodeRelationshipCouponResponse } from './getCouponCodeRelationshipCouponResponse';
import { GetCouponCodeRelationshipCouponResponseData } from './getCouponCodeRelationshipCouponResponseData';
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
import { GetCouponRelationshipCouponCodesListResponseCollection } from './getCouponRelationshipCouponCodesListResponseCollection';
import { GetCouponRelationshipCouponCodesListResponseCollectionDataInner } from './getCouponRelationshipCouponCodesListResponseCollectionDataInner';
import { GetCouponResponse } from './getCouponResponse';
import { GetCouponResponseCollection } from './getCouponResponseCollection';
import { GetEventMetricsRelationshipListResponse } from './getEventMetricsRelationshipListResponse';
import { GetEventMetricsRelationshipListResponseData } from './getEventMetricsRelationshipListResponseData';
import { GetEventProfilesRelationshipListResponse } from './getEventProfilesRelationshipListResponse';
import { GetEventProfilesRelationshipListResponseData } from './getEventProfilesRelationshipListResponseData';
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
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import {  } from './getFlowActionResponseCompoundDocumentIncludedInner';
import { GetFlowFlowActionRelationshipListResponseCollection } from './getFlowFlowActionRelationshipListResponseCollection';
import { GetFlowMessageFlowActionRelationshipResponse } from './getFlowMessageFlowActionRelationshipResponse';
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
import { GetFlowResponse } from './getFlowResponse';
import { GetFlowResponseCollectionCompoundDocument } from './getFlowResponseCollectionCompoundDocument';
import { GetFlowResponseCollectionCompoundDocumentDataInner } from './getFlowResponseCollectionCompoundDocumentDataInner';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import { GetFlowResponseCompoundDocument } from './getFlowResponseCompoundDocument';
import { GetFlowResponseData } from './getFlowResponseData';
import { GetFlowResponseDataAllOfRelationships } from './getFlowResponseDataAllOfRelationships';
import { GetFlowTagRelationshipListResponseCollection } from './getFlowTagRelationshipListResponseCollection';
import { GetImageResponse } from './getImageResponse';
import { GetImageResponseCollection } from './getImageResponseCollection';
import { GetImportErrorResponseCollection } from './getImportErrorResponseCollection';
import { GetListListResponseCollectionCompoundDocument } from './getListListResponseCollectionCompoundDocument';
import { GetListListResponseCollectionCompoundDocumentDataInner } from './getListListResponseCollectionCompoundDocumentDataInner';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import { GetListMemberResponseCollection } from './getListMemberResponseCollection';
import { GetListMemberResponseCollectionDataInner } from './getListMemberResponseCollectionDataInner';
import { GetListRelationshipsResponseCollection } from './getListRelationshipsResponseCollection';
import { GetListRelationshipsResponseCollectionDataInner } from './getListRelationshipsResponseCollectionDataInner';
import { GetListResponseCollection } from './getListResponseCollection';
import { GetListResponseCollectionDataInner } from './getListResponseCollectionDataInner';
import { GetListResponseCollectionDataInnerAllOfRelationships } from './getListResponseCollectionDataInnerAllOfRelationships';
import { GetListRetrieveResponseCompoundDocument } from './getListRetrieveResponseCompoundDocument';
import { GetListRetrieveResponseCompoundDocumentData } from './getListRetrieveResponseCompoundDocumentData';
import { GetListTagRelationshipListResponseCollection } from './getListTagRelationshipListResponseCollection';
import { GetMetricResponse } from './getMetricResponse';
import { GetMetricResponseCollection } from './getMetricResponseCollection';
import { GetProfileImportJobListRelationshipsResponseCollection } from './getProfileImportJobListRelationshipsResponseCollection';
import { GetProfileImportJobProfileRelationshipsResponseCollection } from './getProfileImportJobProfileRelationshipsResponseCollection';
import { GetProfileImportJobResponseCollectionCompoundDocument } from './getProfileImportJobResponseCollectionCompoundDocument';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import { GetProfileImportJobResponseCompoundDocument } from './getProfileImportJobResponseCompoundDocument';
import { GetProfileListRelationshipsResponseCollection } from './getProfileListRelationshipsResponseCollection';
import { GetProfileResponse } from './getProfileResponse';
import { GetProfileResponseCollection } from './getProfileResponseCollection';
import { GetProfileResponseCollectionCompoundDocument } from './getProfileResponseCollectionCompoundDocument';
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
import { GetProfileSegmentRelationshipsResponseCollection } from './getProfileSegmentRelationshipsResponseCollection';
import { GetSegmentListResponseCollectionCompoundDocument } from './getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentListResponseCollectionCompoundDocumentDataInner } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import { GetSegmentMemberResponseCollection } from './getSegmentMemberResponseCollection';
import { GetSegmentMemberResponseCollectionDataInner } from './getSegmentMemberResponseCollectionDataInner';
import { GetSegmentRelationshipsResponseCollection } from './getSegmentRelationshipsResponseCollection';
import { GetSegmentResponseCollection } from './getSegmentResponseCollection';
import { GetSegmentResponseCollectionDataInner } from './getSegmentResponseCollectionDataInner';
import { GetSegmentRetrieveResponseCompoundDocument } from './getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentRetrieveResponseCompoundDocumentData } from './getSegmentRetrieveResponseCompoundDocumentData';
import { GetSegmentTagRelationshipListResponseCollection } from './getSegmentTagRelationshipListResponseCollection';
import { GetTagCampaignRelationshipsResponseCollection } from './getTagCampaignRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollectionDataInner } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import { GetTagFlowRelationshipsResponseCollection } from './getTagFlowRelationshipsResponseCollection';
import { GetTagFlowRelationshipsResponseCollectionDataInner } from './getTagFlowRelationshipsResponseCollectionDataInner';
import { GetTagGroupResponse } from './getTagGroupResponse';
import { GetTagGroupResponseCollection } from './getTagGroupResponseCollection';
import { GetTagGroupResponseCollectionDataInner } from './getTagGroupResponseCollectionDataInner';
import { GetTagGroupResponseCollectionDataInnerAllOfRelationships } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import { GetTagGroupTagRelationshipsResponseCollection } from './getTagGroupTagRelationshipsResponseCollection';
import { GetTagGroupTagRelationshipsResponseCollectionDataInner } from './getTagGroupTagRelationshipsResponseCollectionDataInner';
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
import { GetTagTagGroupRelationshipsResponse } from './getTagTagGroupRelationshipsResponse';
import { GetTagTagGroupRelationshipsResponseData } from './getTagTagGroupRelationshipsResponseData';
import { GetTemplateResponse } from './getTemplateResponse';
import { GetTemplateResponseCollection } from './getTemplateResponseCollection';
import { ImageCreateQuery } from './imageCreateQuery';
import { ImageCreateQueryResourceObject } from './imageCreateQueryResourceObject';
import { ImageCreateQueryResourceObjectAttributes } from './imageCreateQueryResourceObjectAttributes';
import { ImageEnum } from './imageEnum';
import { ImagePartialUpdateQuery } from './imagePartialUpdateQuery';
import { ImagePartialUpdateQueryResourceObject } from './imagePartialUpdateQueryResourceObject';
import { ImagePartialUpdateQueryResourceObjectAttributes } from './imagePartialUpdateQueryResourceObjectAttributes';
import { ImageResponseObjectResource } from './imageResponseObjectResource';
import { ImageResponseObjectResourceAttributes } from './imageResponseObjectResourceAttributes';
import { ImportErrorEnum } from './importErrorEnum';
import { ImportErrorResponseObjectResource } from './importErrorResponseObjectResource';
import { ImportErrorResponseObjectResourceAttributes } from './importErrorResponseObjectResourceAttributes';
import { ListCreateQuery } from './listCreateQuery';
import { ListCreateQueryResourceObject } from './listCreateQueryResourceObject';
import { ListCreateQueryResourceObjectAttributes } from './listCreateQueryResourceObjectAttributes';
import { ListEnum } from './listEnum';
import { ListListResponseObjectResource } from './listListResponseObjectResource';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceAttributes } from './listMemberResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceExtended } from './listMemberResponseObjectResourceExtended';
import { ListMemberResponseObjectResourceExtendedAttributes } from './listMemberResponseObjectResourceExtendedAttributes';
import { ListMembersAddQuery } from './listMembersAddQuery';
import { ListMembersDeleteQuery } from './listMembersDeleteQuery';
import { ListPartialUpdateQuery } from './listPartialUpdateQuery';
import { ListPartialUpdateQueryResourceObject } from './listPartialUpdateQueryResourceObject';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';
import { ListRetrieveResponseObjectResourceExtended } from './listRetrieveResponseObjectResourceExtended';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { MarketingSubscriptionParameters } from './marketingSubscriptionParameters';
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
import { OnlyRelatedLinks } from './onlyRelatedLinks';
import { OnsiteProfileCreateQueryResourceObject } from './onsiteProfileCreateQueryResourceObject';
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { OnsiteProfileMeta } from './onsiteProfileMeta';
import { PatchCampaignMessageResponse } from './patchCampaignMessageResponse';
import { PatchCampaignResponse } from './patchCampaignResponse';
import { PatchCatalogCategoryResponse } from './patchCatalogCategoryResponse';
import { PatchCatalogItemResponse } from './patchCatalogItemResponse';
import { PatchCatalogVariantResponse } from './patchCatalogVariantResponse';
import { PatchCouponCodeResponse } from './patchCouponCodeResponse';
import { PatchCouponResponse } from './patchCouponResponse';
import { PatchFlowResponse } from './patchFlowResponse';
import { PatchFlowResponseData } from './patchFlowResponseData';
import { PatchImageResponse } from './patchImageResponse';
import { PatchListPartialUpdateResponse } from './patchListPartialUpdateResponse';
import { PatchProfileResponse } from './patchProfileResponse';
import { PatchSegmentPartialUpdateResponse } from './patchSegmentPartialUpdateResponse';
import { PatchSegmentPartialUpdateResponseData } from './patchSegmentPartialUpdateResponseData';
import { PatchTagGroupResponse } from './patchTagGroupResponse';
import { PatchTemplateResponse } from './patchTemplateResponse';
import { PostCampaignMessageResponse } from './postCampaignMessageResponse';
import { PostCampaignMessageResponseData } from './postCampaignMessageResponseData';
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
import { PostFlowSeriesResponseDTO } from './postFlowSeriesResponseDTO';
import { PostFlowSeriesResponseDTOData } from './postFlowSeriesResponseDTOData';
import { PostFlowSeriesResponseDTODataAttributes } from './postFlowSeriesResponseDTODataAttributes';
import { PostFlowValuesResponseDTO } from './postFlowValuesResponseDTO';
import { PostFlowValuesResponseDTOData } from './postFlowValuesResponseDTOData';
import { PostFlowValuesResponseDTODataAttributes } from './postFlowValuesResponseDTODataAttributes';
import { PostFlowValuesResponseDTODataRelationships } from './postFlowValuesResponseDTODataRelationships';
import { PostImageResponse } from './postImageResponse';
import { PostImageResponseData } from './postImageResponseData';
import { PostListCreateResponse } from './postListCreateResponse';
import { PostListCreateResponseData } from './postListCreateResponseData';
import { PostListCreateResponseDataRelationships } from './postListCreateResponseDataRelationships';
import { PostListCreateResponseDataRelationshipsProfiles } from './postListCreateResponseDataRelationshipsProfiles';
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
import { PostTagGroupResponse } from './postTagGroupResponse';
import { PostTagGroupResponseData } from './postTagGroupResponseData';
import { PostTagGroupResponseDataRelationships } from './postTagGroupResponseDataRelationships';
import { PostTagResponse } from './postTagResponse';
import { PostTagResponseData } from './postTagResponseData';
import { PostTagResponseDataRelationships } from './postTagResponseDataRelationships';
import { PostTagResponseDataRelationshipsCampaigns } from './postTagResponseDataRelationshipsCampaigns';
import { PostTagResponseDataRelationshipsFlows } from './postTagResponseDataRelationshipsFlows';
import { PostTemplateResponse } from './postTemplateResponse';
import { PostTemplateResponseData } from './postTemplateResponseData';
import { PredictiveAnalytics } from './predictiveAnalytics';
import { ProfileBulkImportJobEnum } from './profileBulkImportJobEnum';
import { ProfileCreateQuery } from './profileCreateQuery';
import { ProfileCreateQueryResourceObject } from './profileCreateQueryResourceObject';
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
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
import { ProfileMergeEnum } from './profileMergeEnum';
import { ProfileMergeQuery } from './profileMergeQuery';
import { ProfileMergeQueryResourceObject } from './profileMergeQueryResourceObject';
import { ProfileMergeQueryResourceObjectRelationships } from './profileMergeQueryResourceObjectRelationships';
import { ProfileMergeQueryResourceObjectRelationshipsProfiles } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import { ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import { ProfileMeta } from './profileMeta';
import { ProfileMetaPatchProperties } from './profileMetaPatchProperties';
import { ProfilePartialUpdateQuery } from './profilePartialUpdateQuery';
import { ProfilePartialUpdateQueryResourceObject } from './profilePartialUpdateQueryResourceObject';
import { ProfilePartialUpdateQueryResourceObjectAttributes } from './profilePartialUpdateQueryResourceObjectAttributes';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { ProfileResponseObjectResourceExtended } from './profileResponseObjectResourceExtended';
import { ProfileResponseObjectResourceExtendedAttributes } from './profileResponseObjectResourceExtendedAttributes';
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
import { PushProfileUpsertQueryResourceObject } from './pushProfileUpsertQueryResourceObject';
import { PushProfileUpsertQueryResourceObjectAttributes } from './pushProfileUpsertQueryResourceObjectAttributes';
import { PushTokenCreateQuery } from './pushTokenCreateQuery';
import { PushTokenCreateQueryResourceObject } from './pushTokenCreateQueryResourceObject';
import { PushTokenCreateQueryResourceObjectAttributes } from './pushTokenCreateQueryResourceObjectAttributes';
import { PushTokenCreateQueryResourceObjectAttributesProfile } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import { PushTokenEnum } from './pushTokenEnum';
import { RelationshipLinks } from './relationshipLinks';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { SMSChannel } from './sMSChannel';
import { SMSContentSubObject } from './sMSContentSubObject';
import { SMSContentSubObjectCreate } from './sMSContentSubObjectCreate';
import { SMSMarketing } from './sMSMarketing';
import { SMSMessageContent } from './sMSMessageContent';
import { SMSRenderOptions } from './sMSRenderOptions';
import { SMSSendOptionsSubObject } from './sMSSendOptionsSubObject';
import { SMSSubscriptionParameters } from './sMSSubscriptionParameters';
import { SMSTrackingOptions } from './sMSTrackingOptions';
import { SMSTrackingOptionsSubObject } from './sMSTrackingOptionsSubObject';
import { STOScheduleOptions } from './sTOScheduleOptions';
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
import { SendOptions } from './sendOptions';
import { SendStrategySubObject } from './sendStrategySubObject';
import { SendTimeSubObject } from './sendTimeSubObject';
import { SeriesData } from './seriesData';
import { ServerBISSubscriptionCreateQuery } from './serverBISSubscriptionCreateQuery';
import { ServerBISSubscriptionCreateQueryResourceObject } from './serverBISSubscriptionCreateQueryResourceObject';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import { StaticScheduleOptions } from './staticScheduleOptions';
import { StreetAddress } from './streetAddress';
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
import { TemplateUpdateQuery } from './templateUpdateQuery';
import { TemplateUpdateQueryResourceObject } from './templateUpdateQueryResourceObject';
import { TemplateUpdateQueryResourceObjectAttributes } from './templateUpdateQueryResourceObjectAttributes';
import { ThrottledScheduleOptions } from './throttledScheduleOptions';
import { Timeframe } from './timeframe';
import { UTMParamsSubObject } from './uTMParamsSubObject';
import { UtmParamInfo } from './utmParamInfo';
import { ValuesData } from './valuesData';
import {  } from './aPIJobErrorPayload';
import {  } from './accountEnum';
import {  } from './accountResponseObjectResource';
import {  } from './accountResponseObjectResourceAttributes';
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
import {  } from './audiencesSubObject';
import {  } from './backInStockSubscriptionEnum';
import {  } from './baseEventCreateQueryResourceObject';
import {  } from './baseEventCreateQueryResourceObjectAttributes';
import {  } from './campaignCloneQuery';
import {  } from './campaignCloneQueryResourceObject';
import {  } from './campaignCloneQueryResourceObjectAttributes';
import {  } from './campaignCreateQuery';
import {  } from './campaignCreateQueryResourceObject';
import {  } from './campaignCreateQueryResourceObjectAttributes';
import {  } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import {  } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import {  } from './campaignCreateQueryResourceObjectAttributesTrackingOptions';
import {  } from './campaignEnum';
import {  } from './campaignMessageAssignTemplateQuery';
import {  } from './campaignMessageAssignTemplateQueryResourceObject';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import {  } from './campaignMessageCreateQueryResourceObject';
import {  } from './campaignMessageCreateQueryResourceObjectAttributes';
import {  } from './campaignMessageCreateQueryResourceObjectAttributesContent';
import {  } from './campaignMessageEnum';
import {  } from './campaignMessagePartialUpdateQuery';
import {  } from './campaignMessagePartialUpdateQueryResourceObject';
import {  } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignMessageResponseObjectResource';
import {  } from './campaignMessageResponseObjectResourceAttributes';
import {  } from './campaignMessageResponseObjectResourceAttributesContent';
import {  } from './campaignPartialUpdateQuery';
import {  } from './campaignPartialUpdateQueryResourceObject';
import {  } from './campaignPartialUpdateQueryResourceObjectAttributes';
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
import {  } from './campaignResponseObjectResourceAttributesTrackingOptions';
import {  } from './campaignSendJobCreateQuery';
import {  } from './campaignSendJobCreateQueryResourceObject';
import {  } from './campaignSendJobEnum';
import {  } from './campaignSendJobPartialUpdateQuery';
import {  } from './campaignSendJobPartialUpdateQueryResourceObject';
import {  } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignSendJobResponseObjectResource';
import {  } from './campaignSendJobResponseObjectResourceAttributes';
import {  } from './campaignValuesReportEnum';
import {  } from './campaignValuesRequestDTO';
import {  } from './campaignValuesRequestDTOResourceObject';
import {  } from './campaignValuesRequestDTOResourceObjectAttributes';
import {  } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
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
import {  } from './collectionLinks';
import {  } from './contactInformation';
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
import {  } from './customTimeframe';
import {  } from './dataPrivacyCreateDeletionJobQuery';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import {  } from './dataPrivacyDeletionJobEnum';
import {  } from './dataPrivacyProfileQueryResourceObject';
import {  } from './dataPrivacyProfileQueryResourceObjectAttributes';
import {  } from './deleteTagGroupResponse';
import {  } from './deviceMetadata';
import {  } from './emailChannel';
import {  } from './emailContentSubObject';
import {  } from './emailMarketing';
import {  } from './emailMarketingListSuppression';
import {  } from './emailMarketingSuppression';
import {  } from './emailMessageContent';
import {  } from './emailSendOptionsSubObject';
import {  } from './emailSubscriptionParameters';
import {  } from './emailTrackingOptions';
import {  } from './emailTrackingOptionsSubObject';
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
import {  } from './flowActionEnum';
import {  } from './flowActionResponseObjectResource';
import {  } from './flowActionResponseObjectResourceAttributes';
import {  } from './flowActionResponseObjectResourceAttributesTrackingOptions';
import {  } from './flowEnum';
import {  } from './flowMessageEnum';
import {  } from './flowMessageResponseObjectResource';
import {  } from './flowMessageResponseObjectResourceAttributes';
import {  } from './flowMessageResponseObjectResourceAttributesContent';
import {  } from './flowResponseObjectResource';
import {  } from './flowResponseObjectResourceAttributes';
import {  } from './flowSeriesReportEnum';
import {  } from './flowSeriesRequestDTO';
import {  } from './flowSeriesRequestDTOResourceObject';
import {  } from './flowSeriesRequestDTOResourceObjectAttributes';
import {  } from './flowUpdateQuery';
import {  } from './flowUpdateQueryResourceObject';
import {  } from './flowUpdateQueryResourceObjectAttributes';
import {  } from './flowValuesReportEnum';
import {  } from './flowValuesRequestDTO';
import {  } from './flowValuesRequestDTOResourceObject';
import {  } from './flowValuesRequestDTOResourceObjectAttributes';
import {  } from './getAccountResponse';
import {  } from './getAccountResponseCollection';
import {  } from './getAccounts4XXResponse';
import {  } from './getAccounts4XXResponseErrorsInner';
import {  } from './getAccounts4XXResponseErrorsInnerSource';
import {  } from './getCampaignMessageCampaignRelationshipListResponse';
import {  } from './getCampaignMessageCampaignRelationshipListResponseData';
import {  } from './getCampaignMessageResponseCollectionCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocumentData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import { GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import {  } from './getCampaignMessageTemplateRelationshipListResponse';
import {  } from './getCampaignMessagesRelationshipListResponseCollection';
import {  } from './getCampaignMessagesRelationshipListResponseCollectionDataInner';
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
import {  } from './getCampaignTagRelationshipListResponseCollection';
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
import {  } from './getCatalogCategoryItemListResponseCollection';
import {  } from './getCatalogCategoryItemListResponseCollectionDataInner';
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
import {  } from './getCatalogItemCategoryListResponseCollection';
import {  } from './getCatalogItemCategoryListResponseCollectionDataInner';
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
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import {  } from './getCouponCodeCreateJobResponseCompoundDocument';
import {  } from './getCouponCodeRelationshipCouponResponse';
import {  } from './getCouponCodeRelationshipCouponResponseData';
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
import {  } from './getCouponRelationshipCouponCodesListResponseCollection';
import {  } from './getCouponRelationshipCouponCodesListResponseCollectionDataInner';
import {  } from './getCouponResponse';
import {  } from './getCouponResponseCollection';
import {  } from './getEventMetricsRelationshipListResponse';
import {  } from './getEventMetricsRelationshipListResponseData';
import {  } from './getEventProfilesRelationshipListResponse';
import {  } from './getEventProfilesRelationshipListResponseData';
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
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import {  } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import { GetFlowActionResponseCompoundDocumentIncludedInnerHelper } from './getFlowActionResponseCompoundDocumentIncludedInner';
import {  } from './getFlowFlowActionRelationshipListResponseCollection';
import {  } from './getFlowMessageFlowActionRelationshipResponse';
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
import {  } from './getFlowResponse';
import {  } from './getFlowResponseCollectionCompoundDocument';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import { GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getFlowResponseCompoundDocument';
import {  } from './getFlowResponseData';
import {  } from './getFlowResponseDataAllOfRelationships';
import {  } from './getFlowTagRelationshipListResponseCollection';
import {  } from './getImageResponse';
import {  } from './getImageResponseCollection';
import {  } from './getImportErrorResponseCollection';
import {  } from './getListListResponseCollectionCompoundDocument';
import {  } from './getListListResponseCollectionCompoundDocumentDataInner';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import {  } from './getListMemberResponseCollection';
import {  } from './getListMemberResponseCollectionDataInner';
import {  } from './getListRelationshipsResponseCollection';
import {  } from './getListRelationshipsResponseCollectionDataInner';
import {  } from './getListResponseCollection';
import {  } from './getListResponseCollectionDataInner';
import {  } from './getListResponseCollectionDataInnerAllOfRelationships';
import {  } from './getListRetrieveResponseCompoundDocument';
import {  } from './getListRetrieveResponseCompoundDocumentData';
import {  } from './getListTagRelationshipListResponseCollection';
import {  } from './getMetricResponse';
import {  } from './getMetricResponseCollection';
import {  } from './getProfileImportJobListRelationshipsResponseCollection';
import {  } from './getProfileImportJobProfileRelationshipsResponseCollection';
import {  } from './getProfileImportJobResponseCollectionCompoundDocument';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import {  } from './getProfileImportJobResponseCompoundDocument';
import {  } from './getProfileListRelationshipsResponseCollection';
import {  } from './getProfileResponse';
import {  } from './getProfileResponseCollection';
import {  } from './getProfileResponseCollectionCompoundDocument';
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
import {  } from './getProfileSegmentRelationshipsResponseCollection';
import {  } from './getSegmentListResponseCollectionCompoundDocument';
import {  } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import {  } from './getSegmentMemberResponseCollection';
import {  } from './getSegmentMemberResponseCollectionDataInner';
import {  } from './getSegmentRelationshipsResponseCollection';
import {  } from './getSegmentResponseCollection';
import {  } from './getSegmentResponseCollectionDataInner';
import {  } from './getSegmentRetrieveResponseCompoundDocument';
import {  } from './getSegmentRetrieveResponseCompoundDocumentData';
import {  } from './getSegmentTagRelationshipListResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import {  } from './getTagFlowRelationshipsResponseCollection';
import {  } from './getTagFlowRelationshipsResponseCollectionDataInner';
import {  } from './getTagGroupResponse';
import {  } from './getTagGroupResponseCollection';
import {  } from './getTagGroupResponseCollectionDataInner';
import {  } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import {  } from './getTagGroupTagRelationshipsResponseCollection';
import {  } from './getTagGroupTagRelationshipsResponseCollectionDataInner';
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
import {  } from './getTagTagGroupRelationshipsResponse';
import {  } from './getTagTagGroupRelationshipsResponseData';
import {  } from './getTemplateResponse';
import {  } from './getTemplateResponseCollection';
import {  } from './imageCreateQuery';
import {  } from './imageCreateQueryResourceObject';
import {  } from './imageCreateQueryResourceObjectAttributes';
import {  } from './imageEnum';
import {  } from './imagePartialUpdateQuery';
import {  } from './imagePartialUpdateQueryResourceObject';
import {  } from './imagePartialUpdateQueryResourceObjectAttributes';
import {  } from './imageResponseObjectResource';
import {  } from './imageResponseObjectResourceAttributes';
import {  } from './importErrorEnum';
import {  } from './importErrorResponseObjectResource';
import {  } from './importErrorResponseObjectResourceAttributes';
import {  } from './listCreateQuery';
import {  } from './listCreateQueryResourceObject';
import {  } from './listCreateQueryResourceObjectAttributes';
import {  } from './listEnum';
import {  } from './listListResponseObjectResource';
import {  } from './listListResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceExtended';
import {  } from './listMemberResponseObjectResourceExtendedAttributes';
import {  } from './listMembersAddQuery';
import {  } from './listMembersDeleteQuery';
import {  } from './listPartialUpdateQuery';
import {  } from './listPartialUpdateQueryResourceObject';
import {  } from './listResponseObjectResource';
import {  } from './listRetrieveResponseObjectResourceAttributes';
import {  } from './listRetrieveResponseObjectResourceExtended';
import {  } from './listRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './marketingSubscriptionParameters';
import {  } from './metricAggregateEnum';
import {  } from './metricAggregateQuery';
import {  } from './metricAggregateQueryResourceObject';
import {  } from './metricAggregateQueryResourceObjectAttributes';
import {  } from './metricAggregateRowDTO';
import {  } from './metricCreateQueryResourceObject';
import {  } from './metricCreateQueryResourceObjectAttributes';
import {  } from './metricEnum';
import {  } from './metricResponseObjectResource';
import {  } from './metricResponseObjectResourceAttributes';
import {  } from './objectLinks';
import {  } from './onlyRelatedLinks';
import {  } from './onsiteProfileCreateQueryResourceObject';
import {  } from './onsiteProfileCreateQueryResourceObjectAttributes';
import {  } from './onsiteProfileMeta';
import {  } from './patchCampaignMessageResponse';
import {  } from './patchCampaignResponse';
import {  } from './patchCatalogCategoryResponse';
import {  } from './patchCatalogItemResponse';
import {  } from './patchCatalogVariantResponse';
import {  } from './patchCouponCodeResponse';
import {  } from './patchCouponResponse';
import {  } from './patchFlowResponse';
import {  } from './patchFlowResponseData';
import {  } from './patchImageResponse';
import {  } from './patchListPartialUpdateResponse';
import {  } from './patchProfileResponse';
import {  } from './patchSegmentPartialUpdateResponse';
import {  } from './patchSegmentPartialUpdateResponseData';
import {  } from './patchTagGroupResponse';
import {  } from './patchTemplateResponse';
import {  } from './postCampaignMessageResponse';
import {  } from './postCampaignMessageResponseData';
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
import {  } from './postFlowSeriesResponseDTO';
import {  } from './postFlowSeriesResponseDTOData';
import {  } from './postFlowSeriesResponseDTODataAttributes';
import {  } from './postFlowValuesResponseDTO';
import {  } from './postFlowValuesResponseDTOData';
import {  } from './postFlowValuesResponseDTODataAttributes';
import {  } from './postFlowValuesResponseDTODataRelationships';
import {  } from './postImageResponse';
import {  } from './postImageResponseData';
import {  } from './postListCreateResponse';
import {  } from './postListCreateResponseData';
import {  } from './postListCreateResponseDataRelationships';
import {  } from './postListCreateResponseDataRelationshipsProfiles';
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
import {  } from './postTagGroupResponse';
import {  } from './postTagGroupResponseData';
import {  } from './postTagGroupResponseDataRelationships';
import {  } from './postTagResponse';
import {  } from './postTagResponseData';
import {  } from './postTagResponseDataRelationships';
import {  } from './postTagResponseDataRelationshipsCampaigns';
import {  } from './postTagResponseDataRelationshipsFlows';
import {  } from './postTemplateResponse';
import {  } from './postTemplateResponseData';
import {  } from './predictiveAnalytics';
import {  } from './profileBulkImportJobEnum';
import {  } from './profileCreateQuery';
import {  } from './profileCreateQueryResourceObject';
import {  } from './profileCreateQueryResourceObjectAttributes';
import {  } from './profileEnum';
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
import {  } from './profileMergeEnum';
import {  } from './profileMergeQuery';
import {  } from './profileMergeQueryResourceObject';
import {  } from './profileMergeQueryResourceObjectRelationships';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import {  } from './profileMeta';
import {  } from './profileMetaPatchProperties';
import {  } from './profilePartialUpdateQuery';
import {  } from './profilePartialUpdateQueryResourceObject';
import {  } from './profilePartialUpdateQueryResourceObjectAttributes';
import {  } from './profileResponseObjectResource';
import {  } from './profileResponseObjectResourceAttributes';
import {  } from './profileResponseObjectResourceExtended';
import {  } from './profileResponseObjectResourceExtendedAttributes';
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
import {  } from './pushProfileUpsertQueryResourceObject';
import {  } from './pushProfileUpsertQueryResourceObjectAttributes';
import {  } from './pushTokenCreateQuery';
import {  } from './pushTokenCreateQueryResourceObject';
import {  } from './pushTokenCreateQueryResourceObjectAttributes';
import {  } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import {  } from './pushTokenEnum';
import {  } from './relationshipLinks';
import {  } from './renderOptionsSubObject';
import {  } from './sMSChannel';
import {  } from './sMSContentSubObject';
import {  } from './sMSContentSubObjectCreate';
import {  } from './sMSMarketing';
import {  } from './sMSMessageContent';
import {  } from './sMSRenderOptions';
import {  } from './sMSSendOptionsSubObject';
import {  } from './sMSSubscriptionParameters';
import {  } from './sMSTrackingOptions';
import {  } from './sMSTrackingOptionsSubObject';
import {  } from './sTOScheduleOptions';
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
import {  } from './sendOptions';
import {  } from './sendStrategySubObject';
import {  } from './sendTimeSubObject';
import {  } from './seriesData';
import {  } from './serverBISSubscriptionCreateQuery';
import {  } from './serverBISSubscriptionCreateQueryResourceObject';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import {  } from './staticScheduleOptions';
import {  } from './streetAddress';
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
import {  } from './templateUpdateQuery';
import {  } from './templateUpdateQueryResourceObject';
import {  } from './templateUpdateQueryResourceObjectAttributes';
import {  } from './throttledScheduleOptions';
import {  } from './timeframe';
import {  } from './uTMParamsSubObject';
import {  } from './utmParamInfo';
import {  } from './valuesData';

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
        "AttributionEnum": AttributionEnum,
        "BackInStockSubscriptionEnum": BackInStockSubscriptionEnum,
        "CampaignEnum": CampaignEnum,
        "CampaignMessageEnum": CampaignMessageEnum,
        "CampaignRecipientEstimationEnum": CampaignRecipientEstimationEnum,
        "CampaignRecipientEstimationJobEnum": CampaignRecipientEstimationJobEnum,
        "CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum": CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignSendJobEnum": CampaignSendJobEnum,
        "CampaignSendJobResponseObjectResourceAttributes.StatusEnum": CampaignSendJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignValuesReportEnum": CampaignValuesReportEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum": CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
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
        "CouponCodeBulkCreateJobEnum": CouponCodeBulkCreateJobEnum,
        "CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum": CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeEnum": CouponCodeEnum,
        "CouponCodeResponseObjectResourceAttributes.StatusEnum": CouponCodeResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum": CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum,
        "CouponEnum": CouponEnum,
        "DataPrivacyDeletionJobEnum": DataPrivacyDeletionJobEnum,
        "DeviceMetadata.KlaviyoSdkEnum": DeviceMetadata.KlaviyoSdkEnum,
        "DeviceMetadata.OsNameEnum": DeviceMetadata.OsNameEnum,
        "DeviceMetadata.EnvironmentEnum": DeviceMetadata.EnvironmentEnum,
        "EventBulkCreateEnum": EventBulkCreateEnum,
        "EventBulkCreateJobEnum": EventBulkCreateJobEnum,
        "EventEnum": EventEnum,
        "FlowActionEnum": FlowActionEnum,
        "FlowEnum": FlowEnum,
        "FlowMessageEnum": FlowMessageEnum,
        "FlowResponseObjectResourceAttributes.TriggerTypeEnum": FlowResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowSeriesReportEnum": FlowSeriesReportEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FlowValuesReportEnum": FlowValuesReportEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "ImageEnum": ImageEnum,
        "ImportErrorEnum": ImportErrorEnum,
        "ListEnum": ListEnum,
        "ListListResponseObjectResourceAttributes.OptInProcessEnum": ListListResponseObjectResourceAttributes.OptInProcessEnum,
        "ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum": ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum,
        "MarketingSubscriptionParameters.ConsentEnum": MarketingSubscriptionParameters.ConsentEnum,
        "MetricAggregateEnum": MetricAggregateEnum,
        "MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum": MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum,
        "MetricAggregateQueryResourceObjectAttributes.IntervalEnum": MetricAggregateQueryResourceObjectAttributes.IntervalEnum,
        "MetricAggregateQueryResourceObjectAttributes.ByEnum": MetricAggregateQueryResourceObjectAttributes.ByEnum,
        "MetricAggregateQueryResourceObjectAttributes.SortEnum": MetricAggregateQueryResourceObjectAttributes.SortEnum,
        "MetricEnum": MetricEnum,
        "ProfileBulkImportJobEnum": ProfileBulkImportJobEnum,
        "ProfileEnum": ProfileEnum,
        "ProfileImportJobResponseObjectResourceAttributes.StatusEnum": ProfileImportJobResponseObjectResourceAttributes.StatusEnum,
        "ProfileMergeEnum": ProfileMergeEnum,
        "ProfileSubscriptionBulkCreateJobEnum": ProfileSubscriptionBulkCreateJobEnum,
        "ProfileSubscriptionBulkDeleteJobEnum": ProfileSubscriptionBulkDeleteJobEnum,
        "ProfileSuppressionBulkCreateJobEnum": ProfileSuppressionBulkCreateJobEnum,
        "ProfileSuppressionBulkDeleteJobEnum": ProfileSuppressionBulkDeleteJobEnum,
        "PushTokenCreateQueryResourceObjectAttributes.PlatformEnum": PushTokenCreateQueryResourceObjectAttributes.PlatformEnum,
        "PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum": PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum,
        "PushTokenCreateQueryResourceObjectAttributes.VendorEnum": PushTokenCreateQueryResourceObjectAttributes.VendorEnum,
        "PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum": PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum,
        "PushTokenEnum": PushTokenEnum,
        "SegmentEnum": SegmentEnum,
        "ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum": ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum,
        "TagEnum": TagEnum,
        "TagGroupEnum": TagGroupEnum,
        "TemplateEnum": TemplateEnum,
        "Timeframe.KeyEnum": Timeframe.KeyEnum,
}

let typeMap: {[index: string]: any} = {
    "APIJobErrorPayload": APIJobErrorPayload,
    "AccountResponseObjectResource": AccountResponseObjectResource,
    "AccountResponseObjectResourceAttributes": AccountResponseObjectResourceAttributes,
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
    "AudiencesSubObject": AudiencesSubObject,
    "BaseEventCreateQueryResourceObject": BaseEventCreateQueryResourceObject,
    "BaseEventCreateQueryResourceObjectAttributes": BaseEventCreateQueryResourceObjectAttributes,
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
    "CampaignMessagePartialUpdateQuery": CampaignMessagePartialUpdateQuery,
    "CampaignMessagePartialUpdateQueryResourceObject": CampaignMessagePartialUpdateQueryResourceObject,
    "CampaignMessagePartialUpdateQueryResourceObjectAttributes": CampaignMessagePartialUpdateQueryResourceObjectAttributes,
    "CampaignMessageResponseObjectResource": CampaignMessageResponseObjectResource,
    "CampaignMessageResponseObjectResourceAttributes": CampaignMessageResponseObjectResourceAttributes,
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
    "CampaignValuesRequestDTO": CampaignValuesRequestDTO,
    "CampaignValuesRequestDTOResourceObject": CampaignValuesRequestDTOResourceObject,
    "CampaignValuesRequestDTOResourceObjectAttributes": CampaignValuesRequestDTOResourceObjectAttributes,
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
    "CollectionLinks": CollectionLinks,
    "ContactInformation": ContactInformation,
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
    "CustomTimeframe": CustomTimeframe,
    "DataPrivacyCreateDeletionJobQuery": DataPrivacyCreateDeletionJobQuery,
    "DataPrivacyCreateDeletionJobQueryResourceObject": DataPrivacyCreateDeletionJobQueryResourceObject,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes": DataPrivacyCreateDeletionJobQueryResourceObjectAttributes,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile": DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile,
    "DataPrivacyProfileQueryResourceObject": DataPrivacyProfileQueryResourceObject,
    "DataPrivacyProfileQueryResourceObjectAttributes": DataPrivacyProfileQueryResourceObjectAttributes,
    "DeleteTagGroupResponse": DeleteTagGroupResponse,
    "DeviceMetadata": DeviceMetadata,
    "EmailChannel": EmailChannel,
    "EmailContentSubObject": EmailContentSubObject,
    "EmailMarketing": EmailMarketing,
    "EmailMarketingListSuppression": EmailMarketingListSuppression,
    "EmailMarketingSuppression": EmailMarketingSuppression,
    "EmailMessageContent": EmailMessageContent,
    "EmailSendOptionsSubObject": EmailSendOptionsSubObject,
    "EmailSubscriptionParameters": EmailSubscriptionParameters,
    "EmailTrackingOptions": EmailTrackingOptions,
    "EmailTrackingOptionsSubObject": EmailTrackingOptionsSubObject,
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
    "FlowActionResponseObjectResource": FlowActionResponseObjectResource,
    "FlowActionResponseObjectResourceAttributes": FlowActionResponseObjectResourceAttributes,
    "FlowMessageResponseObjectResource": FlowMessageResponseObjectResource,
    "FlowMessageResponseObjectResourceAttributes": FlowMessageResponseObjectResourceAttributes,
    "FlowResponseObjectResource": FlowResponseObjectResource,
    "FlowResponseObjectResourceAttributes": FlowResponseObjectResourceAttributes,
    "FlowSeriesRequestDTO": FlowSeriesRequestDTO,
    "FlowSeriesRequestDTOResourceObject": FlowSeriesRequestDTOResourceObject,
    "FlowSeriesRequestDTOResourceObjectAttributes": FlowSeriesRequestDTOResourceObjectAttributes,
    "FlowUpdateQuery": FlowUpdateQuery,
    "FlowUpdateQueryResourceObject": FlowUpdateQueryResourceObject,
    "FlowUpdateQueryResourceObjectAttributes": FlowUpdateQueryResourceObjectAttributes,
    "FlowValuesRequestDTO": FlowValuesRequestDTO,
    "FlowValuesRequestDTOResourceObject": FlowValuesRequestDTOResourceObject,
    "FlowValuesRequestDTOResourceObjectAttributes": FlowValuesRequestDTOResourceObjectAttributes,
    "GetAccountResponse": GetAccountResponse,
    "GetAccountResponseCollection": GetAccountResponseCollection,
    "GetAccounts4XXResponse": GetAccounts4XXResponse,
    "GetAccounts4XXResponseErrorsInner": GetAccounts4XXResponseErrorsInner,
    "GetAccounts4XXResponseErrorsInnerSource": GetAccounts4XXResponseErrorsInnerSource,
    "GetCampaignMessageCampaignRelationshipListResponse": GetCampaignMessageCampaignRelationshipListResponse,
    "GetCampaignMessageCampaignRelationshipListResponseData": GetCampaignMessageCampaignRelationshipListResponseData,
    "GetCampaignMessageResponseCollectionCompoundDocument": GetCampaignMessageResponseCollectionCompoundDocument,
    "GetCampaignMessageResponseCompoundDocument": GetCampaignMessageResponseCompoundDocument,
    "GetCampaignMessageResponseCompoundDocumentData": GetCampaignMessageResponseCompoundDocumentData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData,
    "GetCampaignMessageTemplateRelationshipListResponse": GetCampaignMessageTemplateRelationshipListResponse,
    "GetCampaignMessagesRelationshipListResponseCollection": GetCampaignMessagesRelationshipListResponseCollection,
    "GetCampaignMessagesRelationshipListResponseCollectionDataInner": GetCampaignMessagesRelationshipListResponseCollectionDataInner,
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
    "GetCampaignTagRelationshipListResponseCollection": GetCampaignTagRelationshipListResponseCollection,
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
    "GetCatalogCategoryItemListResponseCollection": GetCatalogCategoryItemListResponseCollection,
    "GetCatalogCategoryItemListResponseCollectionDataInner": GetCatalogCategoryItemListResponseCollectionDataInner,
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
    "GetCatalogItemCategoryListResponseCollection": GetCatalogItemCategoryListResponseCollection,
    "GetCatalogItemCategoryListResponseCollectionDataInner": GetCatalogItemCategoryListResponseCollectionDataInner,
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
    "GetCouponCodeCreateJobResponseCollectionCompoundDocument": GetCouponCodeCreateJobResponseCollectionCompoundDocument,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner,
    "GetCouponCodeCreateJobResponseCompoundDocument": GetCouponCodeCreateJobResponseCompoundDocument,
    "GetCouponCodeRelationshipCouponResponse": GetCouponCodeRelationshipCouponResponse,
    "GetCouponCodeRelationshipCouponResponseData": GetCouponCodeRelationshipCouponResponseData,
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
    "GetCouponRelationshipCouponCodesListResponseCollection": GetCouponRelationshipCouponCodesListResponseCollection,
    "GetCouponRelationshipCouponCodesListResponseCollectionDataInner": GetCouponRelationshipCouponCodesListResponseCollectionDataInner,
    "GetCouponResponse": GetCouponResponse,
    "GetCouponResponseCollection": GetCouponResponseCollection,
    "GetEventMetricsRelationshipListResponse": GetEventMetricsRelationshipListResponse,
    "GetEventMetricsRelationshipListResponseData": GetEventMetricsRelationshipListResponseData,
    "GetEventProfilesRelationshipListResponse": GetEventProfilesRelationshipListResponse,
    "GetEventProfilesRelationshipListResponseData": GetEventProfilesRelationshipListResponseData,
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
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowData,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages,
    "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner": GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner,
    "GetFlowFlowActionRelationshipListResponseCollection": GetFlowFlowActionRelationshipListResponseCollection,
    "GetFlowMessageFlowActionRelationshipResponse": GetFlowMessageFlowActionRelationshipResponse,
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
    "GetFlowResponse": GetFlowResponse,
    "GetFlowResponseCollectionCompoundDocument": GetFlowResponseCollectionCompoundDocument,
    "GetFlowResponseCollectionCompoundDocumentDataInner": GetFlowResponseCollectionCompoundDocumentDataInner,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner,
    "GetFlowResponseCompoundDocument": GetFlowResponseCompoundDocument,
    "GetFlowResponseData": GetFlowResponseData,
    "GetFlowResponseDataAllOfRelationships": GetFlowResponseDataAllOfRelationships,
    "GetFlowTagRelationshipListResponseCollection": GetFlowTagRelationshipListResponseCollection,
    "GetImageResponse": GetImageResponse,
    "GetImageResponseCollection": GetImageResponseCollection,
    "GetImportErrorResponseCollection": GetImportErrorResponseCollection,
    "GetListListResponseCollectionCompoundDocument": GetListListResponseCollectionCompoundDocument,
    "GetListListResponseCollectionCompoundDocumentDataInner": GetListListResponseCollectionCompoundDocumentDataInner,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner,
    "GetListMemberResponseCollection": GetListMemberResponseCollection,
    "GetListMemberResponseCollectionDataInner": GetListMemberResponseCollectionDataInner,
    "GetListRelationshipsResponseCollection": GetListRelationshipsResponseCollection,
    "GetListRelationshipsResponseCollectionDataInner": GetListRelationshipsResponseCollectionDataInner,
    "GetListResponseCollection": GetListResponseCollection,
    "GetListResponseCollectionDataInner": GetListResponseCollectionDataInner,
    "GetListResponseCollectionDataInnerAllOfRelationships": GetListResponseCollectionDataInnerAllOfRelationships,
    "GetListRetrieveResponseCompoundDocument": GetListRetrieveResponseCompoundDocument,
    "GetListRetrieveResponseCompoundDocumentData": GetListRetrieveResponseCompoundDocumentData,
    "GetListTagRelationshipListResponseCollection": GetListTagRelationshipListResponseCollection,
    "GetMetricResponse": GetMetricResponse,
    "GetMetricResponseCollection": GetMetricResponseCollection,
    "GetProfileImportJobListRelationshipsResponseCollection": GetProfileImportJobListRelationshipsResponseCollection,
    "GetProfileImportJobProfileRelationshipsResponseCollection": GetProfileImportJobProfileRelationshipsResponseCollection,
    "GetProfileImportJobResponseCollectionCompoundDocument": GetProfileImportJobResponseCollectionCompoundDocument,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInner,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner,
    "GetProfileImportJobResponseCompoundDocument": GetProfileImportJobResponseCompoundDocument,
    "GetProfileListRelationshipsResponseCollection": GetProfileListRelationshipsResponseCollection,
    "GetProfileResponse": GetProfileResponse,
    "GetProfileResponseCollection": GetProfileResponseCollection,
    "GetProfileResponseCollectionCompoundDocument": GetProfileResponseCollectionCompoundDocument,
    "GetProfileResponseCompoundDocument": GetProfileResponseCompoundDocument,
    "GetProfileResponseCompoundDocumentData": GetProfileResponseCompoundDocumentData,
    "GetProfileResponseCompoundDocumentDataAllOfRelationships": GetProfileResponseCompoundDocumentDataAllOfRelationships,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists": GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner,
    "GetProfileResponseData": GetProfileResponseData,
    "GetProfileResponseDataAllOfRelationships": GetProfileResponseDataAllOfRelationships,
    "GetProfileSegmentRelationshipsResponseCollection": GetProfileSegmentRelationshipsResponseCollection,
    "GetSegmentListResponseCollectionCompoundDocument": GetSegmentListResponseCollectionCompoundDocument,
    "GetSegmentListResponseCollectionCompoundDocumentDataInner": GetSegmentListResponseCollectionCompoundDocumentDataInner,
    "GetSegmentMemberResponseCollection": GetSegmentMemberResponseCollection,
    "GetSegmentMemberResponseCollectionDataInner": GetSegmentMemberResponseCollectionDataInner,
    "GetSegmentRelationshipsResponseCollection": GetSegmentRelationshipsResponseCollection,
    "GetSegmentResponseCollection": GetSegmentResponseCollection,
    "GetSegmentResponseCollectionDataInner": GetSegmentResponseCollectionDataInner,
    "GetSegmentRetrieveResponseCompoundDocument": GetSegmentRetrieveResponseCompoundDocument,
    "GetSegmentRetrieveResponseCompoundDocumentData": GetSegmentRetrieveResponseCompoundDocumentData,
    "GetSegmentTagRelationshipListResponseCollection": GetSegmentTagRelationshipListResponseCollection,
    "GetTagCampaignRelationshipsResponseCollection": GetTagCampaignRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollectionDataInner": GetTagCampaignRelationshipsResponseCollectionDataInner,
    "GetTagFlowRelationshipsResponseCollection": GetTagFlowRelationshipsResponseCollection,
    "GetTagFlowRelationshipsResponseCollectionDataInner": GetTagFlowRelationshipsResponseCollectionDataInner,
    "GetTagGroupResponse": GetTagGroupResponse,
    "GetTagGroupResponseCollection": GetTagGroupResponseCollection,
    "GetTagGroupResponseCollectionDataInner": GetTagGroupResponseCollectionDataInner,
    "GetTagGroupResponseCollectionDataInnerAllOfRelationships": GetTagGroupResponseCollectionDataInnerAllOfRelationships,
    "GetTagGroupTagRelationshipsResponseCollection": GetTagGroupTagRelationshipsResponseCollection,
    "GetTagGroupTagRelationshipsResponseCollectionDataInner": GetTagGroupTagRelationshipsResponseCollectionDataInner,
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
    "GetTagTagGroupRelationshipsResponse": GetTagTagGroupRelationshipsResponse,
    "GetTagTagGroupRelationshipsResponseData": GetTagTagGroupRelationshipsResponseData,
    "GetTemplateResponse": GetTemplateResponse,
    "GetTemplateResponseCollection": GetTemplateResponseCollection,
    "ImageCreateQuery": ImageCreateQuery,
    "ImageCreateQueryResourceObject": ImageCreateQueryResourceObject,
    "ImageCreateQueryResourceObjectAttributes": ImageCreateQueryResourceObjectAttributes,
    "ImagePartialUpdateQuery": ImagePartialUpdateQuery,
    "ImagePartialUpdateQueryResourceObject": ImagePartialUpdateQueryResourceObject,
    "ImagePartialUpdateQueryResourceObjectAttributes": ImagePartialUpdateQueryResourceObjectAttributes,
    "ImageResponseObjectResource": ImageResponseObjectResource,
    "ImageResponseObjectResourceAttributes": ImageResponseObjectResourceAttributes,
    "ImportErrorResponseObjectResource": ImportErrorResponseObjectResource,
    "ImportErrorResponseObjectResourceAttributes": ImportErrorResponseObjectResourceAttributes,
    "ListCreateQuery": ListCreateQuery,
    "ListCreateQueryResourceObject": ListCreateQueryResourceObject,
    "ListCreateQueryResourceObjectAttributes": ListCreateQueryResourceObjectAttributes,
    "ListListResponseObjectResource": ListListResponseObjectResource,
    "ListListResponseObjectResourceAttributes": ListListResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceAttributes": ListMemberResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceExtended": ListMemberResponseObjectResourceExtended,
    "ListMemberResponseObjectResourceExtendedAttributes": ListMemberResponseObjectResourceExtendedAttributes,
    "ListMembersAddQuery": ListMembersAddQuery,
    "ListMembersDeleteQuery": ListMembersDeleteQuery,
    "ListPartialUpdateQuery": ListPartialUpdateQuery,
    "ListPartialUpdateQueryResourceObject": ListPartialUpdateQueryResourceObject,
    "ListResponseObjectResource": ListResponseObjectResource,
    "ListRetrieveResponseObjectResourceAttributes": ListRetrieveResponseObjectResourceAttributes,
    "ListRetrieveResponseObjectResourceExtended": ListRetrieveResponseObjectResourceExtended,
    "ListRetrieveResponseObjectResourceExtendedAttributes": ListRetrieveResponseObjectResourceExtendedAttributes,
    "MarketingSubscriptionParameters": MarketingSubscriptionParameters,
    "MetricAggregateQuery": MetricAggregateQuery,
    "MetricAggregateQueryResourceObject": MetricAggregateQueryResourceObject,
    "MetricAggregateQueryResourceObjectAttributes": MetricAggregateQueryResourceObjectAttributes,
    "MetricAggregateRowDTO": MetricAggregateRowDTO,
    "MetricCreateQueryResourceObject": MetricCreateQueryResourceObject,
    "MetricCreateQueryResourceObjectAttributes": MetricCreateQueryResourceObjectAttributes,
    "MetricResponseObjectResource": MetricResponseObjectResource,
    "MetricResponseObjectResourceAttributes": MetricResponseObjectResourceAttributes,
    "ObjectLinks": ObjectLinks,
    "OnlyRelatedLinks": OnlyRelatedLinks,
    "OnsiteProfileCreateQueryResourceObject": OnsiteProfileCreateQueryResourceObject,
    "OnsiteProfileCreateQueryResourceObjectAttributes": OnsiteProfileCreateQueryResourceObjectAttributes,
    "OnsiteProfileMeta": OnsiteProfileMeta,
    "PatchCampaignMessageResponse": PatchCampaignMessageResponse,
    "PatchCampaignResponse": PatchCampaignResponse,
    "PatchCatalogCategoryResponse": PatchCatalogCategoryResponse,
    "PatchCatalogItemResponse": PatchCatalogItemResponse,
    "PatchCatalogVariantResponse": PatchCatalogVariantResponse,
    "PatchCouponCodeResponse": PatchCouponCodeResponse,
    "PatchCouponResponse": PatchCouponResponse,
    "PatchFlowResponse": PatchFlowResponse,
    "PatchFlowResponseData": PatchFlowResponseData,
    "PatchImageResponse": PatchImageResponse,
    "PatchListPartialUpdateResponse": PatchListPartialUpdateResponse,
    "PatchProfileResponse": PatchProfileResponse,
    "PatchSegmentPartialUpdateResponse": PatchSegmentPartialUpdateResponse,
    "PatchSegmentPartialUpdateResponseData": PatchSegmentPartialUpdateResponseData,
    "PatchTagGroupResponse": PatchTagGroupResponse,
    "PatchTemplateResponse": PatchTemplateResponse,
    "PostCampaignMessageResponse": PostCampaignMessageResponse,
    "PostCampaignMessageResponseData": PostCampaignMessageResponseData,
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
    "PostFlowSeriesResponseDTO": PostFlowSeriesResponseDTO,
    "PostFlowSeriesResponseDTOData": PostFlowSeriesResponseDTOData,
    "PostFlowSeriesResponseDTODataAttributes": PostFlowSeriesResponseDTODataAttributes,
    "PostFlowValuesResponseDTO": PostFlowValuesResponseDTO,
    "PostFlowValuesResponseDTOData": PostFlowValuesResponseDTOData,
    "PostFlowValuesResponseDTODataAttributes": PostFlowValuesResponseDTODataAttributes,
    "PostFlowValuesResponseDTODataRelationships": PostFlowValuesResponseDTODataRelationships,
    "PostImageResponse": PostImageResponse,
    "PostImageResponseData": PostImageResponseData,
    "PostListCreateResponse": PostListCreateResponse,
    "PostListCreateResponseData": PostListCreateResponseData,
    "PostListCreateResponseDataRelationships": PostListCreateResponseDataRelationships,
    "PostListCreateResponseDataRelationshipsProfiles": PostListCreateResponseDataRelationshipsProfiles,
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
    "PostTagGroupResponse": PostTagGroupResponse,
    "PostTagGroupResponseData": PostTagGroupResponseData,
    "PostTagGroupResponseDataRelationships": PostTagGroupResponseDataRelationships,
    "PostTagResponse": PostTagResponse,
    "PostTagResponseData": PostTagResponseData,
    "PostTagResponseDataRelationships": PostTagResponseDataRelationships,
    "PostTagResponseDataRelationshipsCampaigns": PostTagResponseDataRelationshipsCampaigns,
    "PostTagResponseDataRelationshipsFlows": PostTagResponseDataRelationshipsFlows,
    "PostTemplateResponse": PostTemplateResponse,
    "PostTemplateResponseData": PostTemplateResponseData,
    "PredictiveAnalytics": PredictiveAnalytics,
    "ProfileCreateQuery": ProfileCreateQuery,
    "ProfileCreateQueryResourceObject": ProfileCreateQueryResourceObject,
    "ProfileCreateQueryResourceObjectAttributes": ProfileCreateQueryResourceObjectAttributes,
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
    "ProfileMergeQuery": ProfileMergeQuery,
    "ProfileMergeQueryResourceObject": ProfileMergeQueryResourceObject,
    "ProfileMergeQueryResourceObjectRelationships": ProfileMergeQueryResourceObjectRelationships,
    "ProfileMergeQueryResourceObjectRelationshipsProfiles": ProfileMergeQueryResourceObjectRelationshipsProfiles,
    "ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner": ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner,
    "ProfileMeta": ProfileMeta,
    "ProfileMetaPatchProperties": ProfileMetaPatchProperties,
    "ProfilePartialUpdateQuery": ProfilePartialUpdateQuery,
    "ProfilePartialUpdateQueryResourceObject": ProfilePartialUpdateQueryResourceObject,
    "ProfilePartialUpdateQueryResourceObjectAttributes": ProfilePartialUpdateQueryResourceObjectAttributes,
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
    "PushProfileUpsertQueryResourceObject": PushProfileUpsertQueryResourceObject,
    "PushProfileUpsertQueryResourceObjectAttributes": PushProfileUpsertQueryResourceObjectAttributes,
    "PushTokenCreateQuery": PushTokenCreateQuery,
    "PushTokenCreateQueryResourceObject": PushTokenCreateQueryResourceObject,
    "PushTokenCreateQueryResourceObjectAttributes": PushTokenCreateQueryResourceObjectAttributes,
    "PushTokenCreateQueryResourceObjectAttributesProfile": PushTokenCreateQueryResourceObjectAttributesProfile,
    "RelationshipLinks": RelationshipLinks,
    "RenderOptionsSubObject": RenderOptionsSubObject,
    "SMSChannel": SMSChannel,
    "SMSContentSubObject": SMSContentSubObject,
    "SMSContentSubObjectCreate": SMSContentSubObjectCreate,
    "SMSMarketing": SMSMarketing,
    "SMSMessageContent": SMSMessageContent,
    "SMSRenderOptions": SMSRenderOptions,
    "SMSSendOptionsSubObject": SMSSendOptionsSubObject,
    "SMSSubscriptionParameters": SMSSubscriptionParameters,
    "SMSTrackingOptions": SMSTrackingOptions,
    "SMSTrackingOptionsSubObject": SMSTrackingOptionsSubObject,
    "STOScheduleOptions": STOScheduleOptions,
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
    "SendOptions": SendOptions,
    "SendStrategySubObject": SendStrategySubObject,
    "SendTimeSubObject": SendTimeSubObject,
    "SeriesData": SeriesData,
    "ServerBISSubscriptionCreateQuery": ServerBISSubscriptionCreateQuery,
    "ServerBISSubscriptionCreateQueryResourceObject": ServerBISSubscriptionCreateQueryResourceObject,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributes": ServerBISSubscriptionCreateQueryResourceObjectAttributes,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile": ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationships": ServerBISSubscriptionCreateQueryResourceObjectRelationships,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData,
    "StaticScheduleOptions": StaticScheduleOptions,
    "StreetAddress": StreetAddress,
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
    "ThrottledScheduleOptions": ThrottledScheduleOptions,
    "Timeframe": Timeframe,
    "UTMParamsSubObject": UTMParamsSubObject,
    "UtmParamInfo": UtmParamInfo,
    "ValuesData": ValuesData,
}

const oneOfMap: {[index: string]: any} = {
    "GetCampaignMessageResponseCompoundDocumentIncludedInner": GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetCampaignResponseCollectionCompoundDocumentIncludedInner": GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetEventResponseCollectionCompoundDocumentIncludedInner": GetEventResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetFlowActionResponseCompoundDocumentIncludedInner": GetFlowActionResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowMessageResponseCompoundDocumentIncludedInner": GetFlowMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowResponseCollectionCompoundDocumentIncludedInner": GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetProfileResponseCompoundDocumentIncludedInner": GetProfileResponseCompoundDocumentIncludedInnerHelper,
}

const oneOfMapNoDiscriminator: {[index: string]: Array<any>} = {
    "CampaignCreateQueryResourceObjectAttributesSendOptions": [
            "EmailSendOptionsSubObject",
            "SMSSendOptionsSubObject",
    ],
    "CampaignCreateQueryResourceObjectAttributesTrackingOptions": [
            "EmailTrackingOptionsSubObject",
            "SMSTrackingOptionsSubObject",
    ],
    "CampaignMessageCreateQueryResourceObjectAttributesContent": [
            "EmailContentSubObject",
            "SMSContentSubObjectCreate",
    ],
    "CampaignMessageResponseObjectResourceAttributesContent": [
            "EmailContentSubObject",
            "SMSContentSubObject",
    ],
    "CampaignResponseObjectResourceAttributesSendOptions": [
            "EmailSendOptionsSubObject",
            "SMSSendOptionsSubObject",
    ],
    "CampaignResponseObjectResourceAttributesTrackingOptions": [
            "EmailTrackingOptionsSubObject",
            "SMSTrackingOptionsSubObject",
    ],
    "CampaignValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "FlowActionResponseObjectResourceAttributesTrackingOptions": [
            "EmailTrackingOptions",
            "SMSTrackingOptions",
    ],
    "FlowMessageResponseObjectResourceAttributesContent": [
            "EmailMessageContent",
            "SMSMessageContent",
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
        if (!data[attribute.baseName]) {
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
        if( !potentialType.getAttributeTypeMap().find((attribute) => attribute.name === property)) {
          return false
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
            return data.toISOString();
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

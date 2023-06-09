export enum ApiMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
  }
  
  export enum AuthEndPoints {
    GET_ALL_LABS = 'labs',
    GET_LANDING_PAGE_DETAILS = 'home/',
    SEND_FEEDBACK = 'feedback',
    GET_ALL_PEOPLE = 'people/',
    GET_RESEARCH = 'research/',
    GET_ALL_PUBLICATIONS = 'publications/',
    GET_ALL_CONFERENCES = 'conferences/',
    GET_GALLERY = 'gallery/',
    GET_PROFILE='person/',
    ADD_PUBLICATION = 'publication',
    DELETE_PUBLICATION = 'publication?publication_id=',
    UPDATE_PUBLICATION = 'publication/',
    ADD_CONFERENCE = 'conference',
    DELETE_CONFERENCE = 'conference?conf_id=',
    UPDATE_CONFERENCE = 'conference/',
    UPLOAD_IMAGE = 'uploadfile/',
    UPDATE_LAB_CORE_DETAILS = 'lab/',
    AUTHENTICATE_USER = 'auth/signin',
    UPLOAD_SLIDER = 'sliderimage',
    DELETE_SLIDER = 'slider?slider_id=',
    ADD_PERSON = 'person',
    UPDATE_PERSON = 'person/',
    DELETE_LAB_MEMBER = 'person?labmember_id=',
    GET_ALL_EVENTS = 'events/',
    UPLOAD_MULTIPLE_IMAGES = 'uploadfile/multiple',
    ADD_GALLERY_EVENT = 'newevent',
    GET_ALL_FEEDBACK = 'feedback/',
    MULTI_DELETE_FEEDBACK = 'feedback', 
    ADD_LAB = 'lab',
    DELETE_LAB = 'lab?lab_id=',
  }
  
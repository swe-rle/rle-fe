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
    ADD_PUBLICATION = 'publication',
    DELETE_PUBLICATION = 'publication?publication_id=',
    UPDATE_PUBLICATION = 'publication/',
    ADD_CONFERENCE = 'conference',
    DELETE_CONFERENCE = 'conference?conf_id=',
    UPDATE_CONFERENCE = 'conference/',
  }
  
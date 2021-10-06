"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artist_type_Defs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
// TYPES
exports.artist_type_Defs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Artist {\n    first_name: String!\n    age: Int!\n    id: ID!\n    user_id: ID!\n    user_name: String\n    address: String\n    email: String\n    gender: String\n    last_name: String\n    nationality: String\n  }\n\n  type Urls {\n    raw: String\n    full: String\n    regular: String\n    small: String\n    thumb: String\n  }\n\n  type User {\n    id: String\n    updated_at: String\n    username: String\n    name: String\n    first_name: String\n    last_name: String\n    twitter_username: String\n    portfolio_url: String\n    bio: String\n    location: String\n    # links: Object\n    # profile_image: Object\n    instagram_username: String\n    total_collections: Int\n    total_likes: Int\n    total_photos: Int\n    accepted_tos: Boolean\n    for_hire: Boolean\n    # social: Object\n  }\n\n  # type Exif {\n  #     make: String\n  #     model: String\n  #     exposure_time: String\n  #     aperture: String\n  #     focal_length: String\n  #     iso: Int\n  # }\n\n  type Location {\n    title: String\n    name: String\n    city: String\n    country: String\n    # position: Object\n  }\n\n  type Photos {\n    id: String\n    created_at: String\n    updated_at: String\n    promoted_at: String\n    width: Int\n    height: Int\n    color: String\n    blur_hash: String\n    description: String\n    alt_description: String\n    urls: Urls\n    user: User\n    # categories: Array\n    likes: Boolean\n    liked_by_user: Boolean\n    # current_user_collections: [],\n    sponsorship: String\n    exif: String\n    location: Location\n    views: Int\n    downloads: Int\n  }\n\n  # QUERIES\n  extend type Query {\n    getAllArtist: [Artist]!\n    getAllPhotos: [Photos]!\n    getArtistByID(user_id: String): Artist\n  }\n"], ["\n  type Artist {\n    first_name: String!\n    age: Int!\n    id: ID!\n    user_id: ID!\n    user_name: String\n    address: String\n    email: String\n    gender: String\n    last_name: String\n    nationality: String\n  }\n\n  type Urls {\n    raw: String\n    full: String\n    regular: String\n    small: String\n    thumb: String\n  }\n\n  type User {\n    id: String\n    updated_at: String\n    username: String\n    name: String\n    first_name: String\n    last_name: String\n    twitter_username: String\n    portfolio_url: String\n    bio: String\n    location: String\n    # links: Object\n    # profile_image: Object\n    instagram_username: String\n    total_collections: Int\n    total_likes: Int\n    total_photos: Int\n    accepted_tos: Boolean\n    for_hire: Boolean\n    # social: Object\n  }\n\n  # type Exif {\n  #     make: String\n  #     model: String\n  #     exposure_time: String\n  #     aperture: String\n  #     focal_length: String\n  #     iso: Int\n  # }\n\n  type Location {\n    title: String\n    name: String\n    city: String\n    country: String\n    # position: Object\n  }\n\n  type Photos {\n    id: String\n    created_at: String\n    updated_at: String\n    promoted_at: String\n    width: Int\n    height: Int\n    color: String\n    blur_hash: String\n    description: String\n    alt_description: String\n    urls: Urls\n    user: User\n    # categories: Array\n    likes: Boolean\n    liked_by_user: Boolean\n    # current_user_collections: [],\n    sponsorship: String\n    exif: String\n    location: Location\n    views: Int\n    downloads: Int\n  }\n\n  # QUERIES\n  extend type Query {\n    getAllArtist: [Artist]!\n    getAllPhotos: [Photos]!\n    getArtistByID(user_id: String): Artist\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=typeDefs.js.map
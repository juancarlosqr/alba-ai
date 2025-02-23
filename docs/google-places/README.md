# Google Places API

**Authentication**

Authorization Query String: `key`

**API Calls**

The display of the Google Places cards, requires the following steps:

1. Fetch nearby places with Places NearBy API:

- API: `https://maps.googleapis.com/maps/api/place/nearbysearch/json`
- Query String: `opennow=true&location=43.2619216,6.6225851&radius=1000&type=restaurant&keyword=sushi`
- Results: `places.json`

2. Fetch details of the place with Places Details API:

- API: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key?QUERY_STRING`
- Query String: `place_id=PLACE_ID`
- Results: IMAGE `details.json`

3. Build photo URL using Places Photo endpoint:

- API: `https://maps.googleapis.com/maps/api/place/photo`
- Query String: `photo_reference=PHOTO_REFERENCE&maxwidth=242&maxheight=182`
- Results: IMAGE (binary)

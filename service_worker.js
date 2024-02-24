// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const host = "https://old.reddit.com"
const regex = /^https?:\/\/(?:www.reddit.com|reddit.com)([\S\s]*)/

chrome.declarativeNetRequest.addListener(
  function(details){
    return {redirectUrl: host + details.url.match(regex)[1]}
  },
  {
    urls: [
      "*://www.reddit.com/*",
      "*://reddit.com/*"
    ]
  },
  ["blocking"]
);


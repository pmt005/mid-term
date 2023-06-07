$(() => {

  window.shallowItemListing = {};

  const createShallowListing = function(inputItem) {
    return `
    <article class="item">
      <img class="thumbnail_photo1" src="${inputItem.cover_photo_url}">
      <div id="item-info">
        <span><strong>Price:  </strong>${inputItem.price}</span>
        <br>
       <span><strong>Title:  </strong>${inputItem.title}</span>
       <br>
       <span><strong>City:  </strong>${inputItem.city}</span>
      </div>
    </article>
    `;
  };

  window.shallowItemListing.createShallowListing = createShallowListing;
































});

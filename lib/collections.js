Staff = new Mongo.Collection('Staff');
Pages = new Mongo.Collection('pages');
Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Images.allow({
  download: function () {
    return true;
  },
  fetch: null
});

Staff.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "About the staff member",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
      }
    }
  },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cfs-file',
        collection: "images"
      }
    },
    label: 'Choose file',
    optional: true
  }
}));

Pages.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  content: {
    type: String,
    label: "Content",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
      }
    }
  },
  slug: {
    type: String,
    label: 'The slug of the page',
    unique: true,
    autoValue: function() {
      // create a pretty slug for our urls
      var name = this.field("name");
      return name.value.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }
  },
  menu: {
    type: Boolean,
    defaultValue: true,
    label: "Show in menu"
  }
  /*,
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  }*/
}));
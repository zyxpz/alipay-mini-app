Component({
  props: {
    content: '',
    show: false
  },
  methods: {
    onClose() {
      const onCloseTap = this.props.onClose;

      if (onCloseTap) {
        onCloseTap()
      }
    }
  }
});

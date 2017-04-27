// eslint-disable-next-line
export const savePatternDialog = (ctx, patternName) => {
  return new Promise((resolve, reject) => {
    ctx.$dialog.confirm({
      message: 'Overwrite existing pattern?',
      onConfirm: () => {
        ctx.$toast.open({
          message: `Pattern "${patternName}" has neen overwritten`,
        });
        ctx.$data.patternName = ''; // TODO: get rid of this
        resolve('Confirmed');
      },
      onCancel: () =>
        reject('Closed'),
    });
  });
};

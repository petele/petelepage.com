/**
 * Renders a uniquely colored box around the passed in content.
 * @param {string} content A string of markdown
 * @param {string} [type='primary'] An aside style type
 * @return {string} Aside
 */
function Aside(content, type = 'primary') {
  return `<div class="alert alert-${type}" role="alert">${content}</div>`;
}

module.exports = {Aside};

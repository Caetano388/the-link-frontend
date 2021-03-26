<script>
    export let columnsNum;
    export let baseColSize = 12;

    function columnSizing() {
        let columnSize = baseColSize / columnsNum;
        let columnSizeMedium = columnSize >= 6 ? ' ' : ' col-6-med';
        let columnSizeSmall = columnSizeMedium != '' ? 'col-12-small' : '';

        return columnSize + columnSizeMedium + columnSizeSmall;
    }
    
    let colClass = columnSizing();
</script>

<div class="col-{colClass}">
    <slot></slot>
</div>
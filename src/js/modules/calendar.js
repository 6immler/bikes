export default (function() {
    if (document.getElementById('dom-id')) {
        $('#dom-id').dateRangePicker({
            autoClose: true,
            language: 'ru',
            format: 'DD.MM.YYYY HH:mm',
            startOfWeek: 'monday',
            time: {
                enabled: true
            },
            defaultTime: moment().startOf('day').toDate(),
            defaultEndTime: moment().endOf('day').toDate(),
            getValue: function()
            {
                if ($('#date-range200').val() && $('#date-range201').val() )
                    return $('#date-range200').val() + ' to ' + $('#date-range201').val();
                else
                    return '';
            },
            setValue: function(s,s1,s2)
            {
                $('#date-range200').val(s1);
                $('#date-range201').val(s2);
            }
        });
    }
}());
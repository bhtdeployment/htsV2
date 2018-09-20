import React, { Component } from 'react';
import './ReferralOutcome.css';
import uuid from 'uuid';
import Button from './button';

class ReferralOutcome extends Component {

    state = {
        page: 1
    }

    $(id) {
        return document.getElementById(id);
    }

    async componentDidMount() {

        const year1 = (this.props.responses && this.props.responses["Start Year"]
            ? this.props.responses["Start Year"] : "");

        const month1 = (this.props.responses && this.props.responses["Start Month"]
            ? this.props.responses["Start Month"] : "");

        const date1 = (this.props.responses && this.props.responses["Start Date"]
            ? this.props.responses["Start Date"] : "");

        const year2 = (this.props.responses && this.props.responses["End Year"]
            ? this.props.responses["End Year"] : "");

        const month2 = (this.props.responses && this.props.responses["End Month"]
            ? this.props.responses["End Month"] : "");

        const date2 = (this.props.responses && this.props.responses["End Date"]
            ? this.props.responses["End Date"] : "");

        await this
            .props
            .fetchARTReferral(month1, year1, date1, month2, year2, date2, 6);

        if (this.$("btnClear")) {

            this.$("btnClear").style.display = "none";

        }

        if (this.$("btnNext")) {

            this.$("btnNext").innerHTML = "Finish";

        }

    }

    componentWillUnmount() {

        if (this.$("btnClear")) {

            this.$("btnClear").style.display = "block";

        }

        if (this.$("btnNext")) {

            this.$("btnNext").innerHTML = "Next";

        }

    }

    async navBack() {

        const year1 = (this.props.responses && this.props.responses["Start Year"]
            ? this.props.responses["Start Year"] : "");

        const month1 = (this.props.responses && this.props.responses["Start Month"]
            ? this.props.responses["Start Month"] : "");

        const date1 = (this.props.responses && this.props.responses["Start Date"]
            ? this.props.responses["Start Date"] : "");

        const year2 = (this.props.responses && this.props.responses["End Year"]
            ? this.props.responses["End Year"] : "");

        const month2 = (this.props.responses && this.props.responses["End Month"]
            ? this.props.responses["End Month"] : "");

        const date2 = (this.props.responses && this.props.responses["End Date"]
            ? this.props.responses["End Date"] : "");

        if (this.props.app.referrals && this.props.app.referrals.page && this.props.app.referrals.page > 1) {

            let page = Number(this.props.app.referrals.page) - 1;

            await this
                .props
                .fetchARTReferral(month1, year1, date1, month2, year2, date2, page);

        }

    }

    async navNext() {

        const year1 = (this.props.responses && this.props.responses["Start Year"]
            ? this.props.responses["Start Year"] : "");

        const month1 = (this.props.responses && this.props.responses["Start Month"]
            ? this.props.responses["Start Month"] : "");

        const date1 = (this.props.responses && this.props.responses["Start Date"]
            ? this.props.responses["Start Date"] : "");

        const year2 = (this.props.responses && this.props.responses["End Year"]
            ? this.props.responses["End Year"] : "");

        const month2 = (this.props.responses && this.props.responses["End Month"]
            ? this.props.responses["End Month"] : "");

        const date2 = (this.props.responses && this.props.responses["End Date"]
            ? this.props.responses["End Date"] : "");

        if (this.props.app.referrals && this.props.app.referrals.page && this.props.app.referrals.totalPages && this.props.app.referrals.page < this.props.app.referrals.totalPages) {

            let page = Number(this.props.app.referrals.page) + 1;

            await this
                .props
                .fetchARTReferral(month1, year1, date1, month2, year2, date2, page);

        }

    }

    async navFirst() {

        const year1 = (this.props.responses && this.props.responses["Start Year"]
            ? this.props.responses["Start Year"] : "");

        const month1 = (this.props.responses && this.props.responses["Start Month"]
            ? this.props.responses["Start Month"] : "");

        const date1 = (this.props.responses && this.props.responses["Start Date"]
            ? this.props.responses["Start Date"] : "");

        const year2 = (this.props.responses && this.props.responses["End Year"]
            ? this.props.responses["End Year"] : "");

        const month2 = (this.props.responses && this.props.responses["End Month"]
            ? this.props.responses["End Month"] : "");

        const date2 = (this.props.responses && this.props.responses["End Date"]
            ? this.props.responses["End Date"] : "");

        let page = 1;

        await this
            .props
            .fetchARTReferral(month1, year1, date1, month2, year2, date2, page);

    }

    async navLast() {

        const year1 = (this.props.responses && this.props.responses["Start Year"]
            ? this.props.responses["Start Year"] : "");

        const month1 = (this.props.responses && this.props.responses["Start Month"]
            ? this.props.responses["Start Month"] : "");

        const date1 = (this.props.responses && this.props.responses["Start Date"]
            ? this.props.responses["Start Date"] : "");

        const year2 = (this.props.responses && this.props.responses["End Year"]
            ? this.props.responses["End Year"] : "");

        const month2 = (this.props.responses && this.props.responses["End Month"]
            ? this.props.responses["End Month"] : "");

        const date2 = (this.props.responses && this.props.responses["End Date"]
            ? this.props.responses["End Date"] : "");

        let page = -1;

        await this
            .props
            .fetchARTReferral(month1, year1, date1, month2, year2, date2, page);

    }

    handleUpdateField(id, field, encounterId) {

        console.log("%s, %s", id, field);

    }

    handleSaveRow(id) {

        console.log(id);

    }

    loadClients() {

        let i = 0;
        const id = uuid.v1();

        return ((this.props.app.referrals && this.props.app.referrals.data ? this.props.app.referrals.data : []) || []).map(row => {

            i++;

            return <tr key={uuid.v1()} style={{ fontSize: '14px', backgroundColor: (i % 2 > 0 ? '#ccc' : '') }}>
                <td style={{ borderRight: '1px solid #333' }}>
                    {row.given_name} {row.family_name}
                </td>
                <td align='center' style={{ borderRight: '1px solid #333' }}>
                    {row.ec_code}
                </td>
                <td align='center' className='refValue'>
                    ART
                </td>
                <td align='center' className='refValue'>
                    REF
                </td>
                <td align='center' className='refValue'>
                    D
                </td>
                <td align='center' className='refValue' style={{ borderRight: '1px solid #333' }}>
                    UNK
                </td>
                <td style={{ borderRight: '1px solid #333', padding: '0px' }} align='center'>
                    <div id={id + '-outcome-date'} key={uuid.v1()} className='refText' onMouseDown={this.handleUpdateField.bind(this, id, 'Outcome Date', row.encounter_id)} >{this.state.edited && this.state.edited[id] && this.state.edited[id].outcome_date ? this.state.edited[id].outcome_date : row.outcome_date ? (new Date(row.outcome_date).format("d mmm YYYY")) : <span>&nbsp;</span>}</div>
                </td>
                <td style={{ borderRight: '1px solid #333' }} align='center'>
                    <div id={id + '-actual-art-site'} key={uuid.v1()} className='refText' onMouseDown={this.handleUpdateField.bind(this, id, 'Actual ART Site', row.encounter_id)} >{this.state.edited && this.state.edited[id] && this.state.edited[id].art_site ? this.state.edited[id].art_site : row.art_site ? row.art_site : <span>&nbsp;</span>}</div>
                </td>
                <td align='center' style={{ borderRight: '1px solid #333' }}>
                    <div id={id + '-art-registration-number'} key={uuid.v1()} className='refText' onMouseDown={this.handleUpdateField.bind(this, id, 'ART Registration Number', row.encounter_id)} >{this.state.edited && this.state.edited[id] && this.state.edited[id].art_reg_no ? this.state.edited[id].art_reg_no : row.art_reg_no ? row.art_reg_no : <span>&nbsp;</span>}</div>
                </td>
                <td style={{ padding: '0px' }} align='center'>
                    <Button id={id} buttonClass={this.state.edited && this.state.edited[id] ? 'blue' : 'gray'} label='Save' handleMouseDown={this.handleSaveRow.bind(this, id)} />
                </td>
            </tr>

        })

    }

    render() {

        return (
            <div style={{ border: '1px inset #888', overflow: 'auto', width: 'calc(100vw - 20px)', height: 'calc(100vh - 320px)', margin: '1px' }}>
                <table width='100%' style={{ borderCollapse: 'collapse' }} cellPadding='10' border='0'>
                    <tbody>
                        <tr className='refHeader'>
                            <th colSpan='2' style={{ borderRight: '1px solid #333' }}>
                                Patient
                        </th>
                            <th colSpan='7' style={{ borderRight: '1px solid #333' }}>
                                Referral Outcome
                        </th>
                        </tr>
                        <tr>
                            <td align='center' style={{ borderRight: '1px solid #333', verticalAlign: 'bottom' }}>
                                Name
                            </td>
                            <td align='center' style={{ borderRight: '1px solid #333', verticalAlign: 'bottom' }}>
                                Visit Entry Code
                            </td>
                            <td className='vertHeader'>
                                Started ART
                            </td>
                            <td className='vertHeader'>
                                Refused/not<br /> ready
                            </td>
                            <td className='vertHeader'>
                                Died<span style={{ color: 'white' }}>_______</span>
                            </td>
                            <td className='vertHeader' style={{ borderRight: '1px solid #333' }}>
                                Unknown<span style={{ color: 'white' }}>__</span>
                            </td>
                            <td align='center' style={{ borderRight: '1px solid #333', verticalAlign: 'bottom' }}>
                                Outcome Date
                            </td>
                            <td align='center' style={{ borderRight: '1px solid #333', verticalAlign: 'bottom' }}>
                                Actual ART Site
                            </td>
                            <td align='center' style={{ borderRight: '1px solid #333', verticalAlign: 'bottom' }}>
                                ART Reg No
                            </td>
                            <td>
                                &nbsp;
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        {this.loadClients()}
                    </tbody>
                    <tbody>
                        <tr>
                            <th colSpan='9'>

                            </th>
                        </tr>
                    </tbody>
                </table>
                <div style={{ position: 'absolute', bottom: '90px', width: '100%', textAlign: 'center' }}>
                    <Button id='btnNavFirst' buttonClass='blue' label='|<' handleMouseDown={this.navFirst.bind(this)} extraStyles={{ display: 'inline' }} />
                    <Button id='btnNavPrev' buttonClass='blue' label={<span>&lt;</span>} handleMouseDown={this.navBack.bind(this)} extraStyles={{ display: 'inline' }} />
                    <div style={{ border: '1px inset #999', borderRadius: '5px', textAlign: 'center', width: '380px', display: 'inline', padding: '15px', fontSize: '20px', marginLeft: '10px', marginRight: '10px' }}>{(this.props.app.referrals && this.props.app.referrals.page && this.props.app.referrals.totalPages ? this.props.app.referrals.page + ' of ' + this.props.app.referrals.totalPages : '- of -')}</div>
                    <Button id='btnNavNext' buttonClass='blue' label={<span>&gt;</span>} handleMouseDown={this.navNext.bind(this)} extraStyles={{ display: 'inline' }} />
                    <Button id='btnNavLast' buttonClass='blue' label='>|' handleMouseDown={this.navLast.bind(this)} extraStyles={{ display: 'inline' }} />
                </div>
            </div>

        )
    }

}

export default ReferralOutcome;
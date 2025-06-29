import { Controller } from '@nestjs/common';
import { DevicesService } from '../services/devices.service';

import { Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { CreateDeviceDto } from '../dto/create-device.dto';

@Controller('devices')
export class DevicesController {
    constructor(private readonly devicesService: DevicesService) { }

    @Post()
    @ApiOperation({ summary: 'Creates a device.' })
    @ApiResponse({ status: 201, description: 'Created successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    @ApiBody({ type: CreateDeviceDto, description: 'Payload to create a device.' })
    async create(@Body() createDeviceDto: CreateDeviceDto) {
        return this.devicesService.create(createDeviceDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieves all registered devices.' })
    @ApiResponse({ status: 200, description: 'List of devices.' })
    async findAll() {
        return this.devicesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieves a specific device by ID.' })
    @ApiResponse({ status: 200, description: 'Device details.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the device', type: Number })
    async findOne(@Param('id') id: number) {
        return this.devicesService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Partially updates a device by ID.' })
    @ApiResponse({ status: 200, description: 'Updated successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the device', type: Number })
    @ApiBody({ type: UpdateDeviceDto, description: 'Payload to update the device.' })
    async update(@Param('id') id: number, @Body() updateDeviceDto: UpdateDeviceDto) {
        return this.devicesService.update(id, updateDeviceDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletes a device by ID.' })
    @ApiResponse({ status: 204, description: 'Deleted successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the device', type: Number })
    async remove(@Param('id') id: number) {
        return this.devicesService.remove(id);
    }

}
